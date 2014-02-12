var SharkViewer = function (parameters) {
	/* swc neuron json object:
	*	{ id : {
	*		type: <type number of node (string)>,
	*		x: <x position of node (float)>,
	*		y: <y position of node (float)>,
	*		z: <z position of node (float)>,
	*		parent: <id number of node's parent (-1 if no parent)>,
	*		radius: <radius of node (float)>,
	*		}
	*	}
	*/		
	this.swc = {}; 
	//html element that will recieve webgl canvas
	this.dom_element = 'container'; 
	//mode (sphere, particle, skeleton)
	this.mode = 'particle'; 
	//height of canvas
	this.HEIGHT = window.innerHeight; 
	//width of canvas
	this.WIDTH = window.innerWidth; 
	//which node to center neuron on (starts at 1), -1 to center at center of bounding box
	this.center_node = 1; 
	//shows fps stats if true
	this.show_stats = false;
	//effect (noeffect, parallax, rift)
	this.effect = 'noeffect'; 
	//show cones between cylindars for particle and sphere mode
	this.show_cones = true;
	//color array, nodes of type 0 show as first color, etc. 
	this.colors = [
		0x00be9e,
		0x3919cb,
		0x7d0bc4,
		0xff6700,
		0x3eef00,
		0xffce00,
		0xf50027,
		0x606060,
	]; 
	this.setValues(parameters);
};

//calculates bounding box for neuron object
SharkViewer.prototype.calculateBoundingBox = function () {	
	for (var node in this.swc) {
		if (this.swc.hasOwnProperty(node)) {
			if (this.swc[node].x < this.boundingBox.xmin) this.boundingBox.xmin = this.swc[node].x;
			if (this.swc[node].x > this.boundingBox.xmax) this.boundingBox.xmax = this.swc[node].x;
			if (this.swc[node].y < this.boundingBox.ymin) this.boundingBox.ymin = this.swc[node].y;
			if (this.swc[node].y > this.boundingBox.ymax) this.boundingBox.ymax = this.swc[node].y;
			if (this.swc[node].z < this.boundingBox.zmin) this.boundingBox.zmin = this.swc[node].z;
			if (this.swc[node].z > this.boundingBox.zmax) this.boundingBox.zmax = this.swc[node].z;
		}
	}
};

//generates sphere mesh
SharkViewer.prototype.generateSphere = function (node) {
	var sphereMaterial = this.three_materials[ node.type ];
	var r1 = node.radius || 0.01;
	var geometry = new THREE.SphereGeometry(r1);
	var mesh = new THREE.Mesh(geometry, sphereMaterial);
	mesh.position.x = node.x;
	mesh.position.y = node.y;
	mesh.position.z = node.z;
	return mesh;
};

//generates cones connecting spheres
SharkViewer.prototype.generateConeGeometry = function (node, node_parent) {
	var coneMaterial = this.three_materials[ node_parent.type ];
	var node_vec = new THREE.Vector3(node.x, node.y, node.z); 
	var node_parent_vec = new THREE.Vector3(node_parent.x, node_parent.y, node_parent.z); 
	var dist = node_vec.distanceTo(node_parent_vec);
	var cylAxis = new THREE.Vector3().subVectors(node_vec, node_parent_vec);
	cylAxis.normalize();
	var theta = Math.acos( cylAxis.y );
	var rotationAxis = new THREE.Vector3();
	rotationAxis.crossVectors(cylAxis, new THREE.Vector3(0,1,0));
	rotationAxis.normalize();
	var r1 = node.radius || 0.01;
	var r2 = node_parent.radius || 0.01;
	var geometry = new THREE.CylinderGeometry(r1, r2, dist);
	var mesh = new THREE.Mesh(geometry, coneMaterial);
	mesh.matrixAutoUpdate = false;
	mesh.matrix.makeRotationAxis( rotationAxis, -theta );	
	var position = new THREE.Vector3((node.x + node_parent.x) / 2, (node.y + node_parent.y) / 2,(node.z + node_parent.z) / 2);
	mesh.matrix.setPosition(position);
	return mesh;
}; 
		
//generates particle verticies
SharkViewer.prototype.generateParticle = function (node) {
	return new THREE.Vector3(node.x, node.y, node.z);
};

//generates skeleton verticies
SharkViewer.prototype.generateSkeleton = function (node, node_parent) {
	var vertex = new THREE.Vector3(node.x, node.y, node.z);
	var vertex_parent = new THREE.Vector3(node_parent.x, node_parent.y, node_parent.z);
	return {
		'child' : vertex, 
		'parent' : vertex_parent
	};
};

//generates cone properties for node, parent pair
SharkViewer.prototype.generateCone = function (node, node_parent) {
	var cone_child = {};
	var cone_parent = {};
	
	cone_child.vertex = new THREE.Vector3(node.x, node.y, node.z);
	cone_child.radius = node.radius;
	cone_child.color = this.nodeColor(node);
	
	cone_parent.vertex = new THREE.Vector3(node_parent.x, node_parent.y, node_parent.z);
	cone_parent.radius = node_parent.radius;
	cone_parent.color = this.nodeColor(node_parent);

	//normals
	var n1 = new THREE.Vector3().subVectors(cone_parent.vertex, cone_child.vertex);
	var n2 = n1.clone().negate();

	return {
		'child' : cone_child, 
		'parent' : cone_parent, 
		'normal1' : n1, 
		'normal2': n2
	};
};
		
//calculates camera position based on boudning box
SharkViewer.prototype.calculateCameraPosition = function (fov) {
	var x1 = Math.floor(this.center[0] - this.boundingBox.xmin)*2;
	var x2 = Math.floor(this.boundingBox.xmax - this.center[0])*2;
	var y1 = Math.floor(this.center[1] - this.boundingBox.ymin)*2;
	var y2 = Math.floor(this.boundingBox.ymax - this.center[1])*2;
	var max_bb = Math.max(x1, x2, y1, y2);
	//fudge factor 1.15 to ensure whole neuron fits
	var z = (max_bb / (Math.tan(fov * (Math.PI / 180.0) / 2) * 2)) * 1.15;
	return z;
};

//calculates color based on node type
SharkViewer.prototype.nodeColor = function (node) {
	if (node.type < this.three_colors.length) return this.three_colors[ node.type ];
	return this.three_colors[0];
};

//Sets up three.js scene 
SharkViewer.prototype.init = function () {

	//set up shaders
	var vertexShader =  [
		'uniform float particleScale;',
		'attribute float radius;',
		'attribute vec3 typeColor;',
		'varying vec3 vColor;',
		'varying vec4 mvPosition;',
		'void main() ',
		'{',
			'vColor = vec3(typeColor); // set RGB color associated to vertex; use later in fragment shader.',
			'mvPosition = modelViewMatrix * vec4(position, 1.0);',

			'// gl_PointSize = size;',
			'gl_PointSize = radius * ((particleScale*2.0) / length(mvPosition.z));',
			'gl_Position = projectionMatrix * mvPosition;',
		'}'
    ].join("\n");
    
	var fragementShader = [
		'#extension GL_EXT_frag_depth : enable',
		'uniform sampler2D sphereTexture; // Imposter image of sphere',
		'uniform mat4 projectionMatrix;',
		'varying vec3 vColor; // colors associated to vertices; assigned by vertex shader',
		'varying vec4 mvPosition;',
		'void main() ',
		'{',
			'// what part of the sphere image?',
			'vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);',
			'vec4 sphereColors = texture2D(sphereTexture, uv);',
				'// avoid further computation at invisible corners',
			'if (sphereColors.a < 0.3) discard;',

			'// calculates a color for the particle',
			'// gl_FragColor = vec4(vColor, 1.0);',
			'// sets a white particle texture to desired color',
			'// gl_FragColor = sqrt(gl_FragColor * texture2D(sphereTexture, uv)) + vec4(0.1, 0.1, 0.1, 0.0);',
			'// red channel contains colorizable sphere image',
			'vec3 baseColor = vColor * sphereColors.r;',
				'// green channel contains (white?) specular highlight',
			'vec3 highlightColor = baseColor + sphereColors.ggg;',
			'gl_FragColor = vec4(highlightColor, sphereColors.a);',
			'// TODO blue channel contains depth offset, but we cannot use gl_FragDepth in webgl?',
		'#ifdef GL_EXT_frag_depth',
			'// gl_FragDepthExt = 0.5;',
		'#endif',
		'}'
	].join("\n");
	 
	var vertexShaderCone = [
		'attribute float radius;',
		'attribute vec3 typeColor;',
		'varying vec3 vColor;',
		'varying vec2 sphereUv;',
		'void main() ',
		'{',
		'	// TODO - offset cone position for different sphere sizes',
		'	// TODO - implement depth buffer on Chrome',
		'	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);',
		'	// Expand quadrilateral perpendicular to both view/screen direction and cone axis',
		'	vec3 cylAxis = (modelViewMatrix * vec4(normal, 0.0)).xyz; // convert cone axis to camera space',
		'	vec3 sideDir = normalize(cross(vec3(0.0,0.0,-1.0), cylAxis));',
		'	mvPosition += vec4(radius * sideDir, 0.0);',
		'	gl_Position = projectionMatrix * mvPosition;',
		'	// Pass and interpolate color',
		'	vColor = typeColor;',
		'	// Texture coordinates',
		'	sphereUv = uv - vec2(0.5, 0.5); // map from [0,1] range to [-.5,.5], before rotation',
		'	// If sideDir is "up" on screen, make sure u is positive',
		'	float q = sideDir.y * sphereUv.y;',
		'	sphereUv.y = sign(q) * sphereUv.y;',
		'	// rotate texture coordinates to match cone orientation about z',
		'	float angle = atan(sideDir.x/sideDir.y);',
		'	float c = cos(angle);',
		'	float s = sin(angle);',
		'	mat2 rotMat = mat2(',
		'		c, -s, ',
		'		s,  c);',
		'	sphereUv = rotMat * sphereUv;',
		'	sphereUv += vec2(0.5, 0.5); // map back from [-.5,.5] => [0,1]',
		'}',
	].join("\n");
	 
	var fragmentShaderCone = [
		'uniform sampler2D sphereTexture; // Imposter image of sphere',
		'varying vec3 vColor;',
		'varying vec2 sphereUv;',
		'void main() ',
		'{',
		'	vec4 sphereColors = texture2D(sphereTexture, sphereUv);',
		'	if (sphereColors.a < 0.3) discard;',
		'	vec3 baseColor = vColor * sphereColors.r;',
		'	vec3 highlightColor = baseColor + sphereColors.ggg;',
		'	gl_FragColor = vec4(highlightColor, sphereColors.a);',
		'}',
	].join("\n");

	if (this.effect === 'noeffect') this.effect = false;
	 
	//set up colors and materials based on color array
	this.three_colors = [];
	for (var color in this.colors) {
		if (this.colors.hasOwnProperty(color)) {
			this.three_colors.push(new THREE.Color(this.colors[color]));
		}
	}
	this.three_materials = [];
	for (var color in this.colors) {
		if (this.colors.hasOwnProperty(color)) {
			this.three_materials.push(new THREE.MeshBasicMaterial({ color: this.colors[color] }));
		}
	}
		
	//initialize bounding box
	this.boundingBox = {
		'xmin' : this.swc['1'].x,
		'xmax' : this.swc['1'].x,
		'ymin' : this.swc['1'].y,
		'ymax' : this.swc['1'].y,
		'zmin' : this.swc['1'].z,
		'zmax' : this.swc['1'].z,
	};
	this.calculateBoundingBox();

	//neuron centers around 1st node by default
	if (this.center_node === -1) {
		this.center = [ (this.boundingBox.xmax + this.boundingBox.xmin) / 2, (this.boundingBox.ymax + this.boundingBox.ymin) / 2, (this.boundingBox.zmax + this.boundingBox.zmin) / 2  ] ;
	}
	else{
		this.center_node = this.center_node.toString();
		this.center = [ this.swc[this.center_node].x, this.swc[this.center_node].y, this.swc[this.center_node].z ] ;
	}

	//setup render
	this.renderer = new THREE.WebGLRenderer({
		antialias : true,	// to get smoother output
	});
	this.renderer.setClearColorHex(0xffffff, 1);
	this.renderer.setSize(this.WIDTH , this.HEIGHT);
	document.getElementById(this.dom_element).appendChild(this.renderer.domElement);

	// create a scene
	this.scene = new THREE.Scene();

	// put a camera in the scene
	var fov = 45;
	var cameraPosition = this.calculateCameraPosition(fov);
	this.camera = new THREE.PerspectiveCamera(fov, this.WIDTH/this.HEIGHT, 1, cameraPosition * 5);
	this.scene.add(this.camera);
	this.camera.position.z = cameraPosition;
	
	//neuron is object 3d which ensures all components move together
	this.neuron = new THREE.Object3D();
	
	//particle mode uses vertex info to place texture image, very fast
	if (this.mode === 'particle') {

		//material = new THREE.ParticleSystemMaterial({color: 0x0080ff});
		// special imposter image contains:
		// 1 - colorizable sphere image in red channel
		// 2 - specular highlight in green channel
		// 3 - depth offset in blue channel (currently unused)
		var sphereImg = THREE.ImageUtils.loadTexture("images/ComponentSphere.png");
		this.geometry = new THREE.Geometry();
		// properties that may vary from particle to particle. only accessible in vertex shaders!
		//	(can pass color info to fragment shader via vColor.)
		// compute scale for particles, in pixels
		var particleScale =  0.5 * this.HEIGHT / Math.tan(0.5 * fov * Math.PI / 180.0);
	
		var customAttributes = 
		{
			radius:   { type: "fv1", value: [] },
			typeColor:   { type: "c", value: [] },
		};
		var customUniforms = 
		{
			particleScale: { type: 'f', value: particleScale },
			sphereTexture: { type: 't', value: sphereImg },
		};

		for (var node in this.swc) {
			if (this.swc.hasOwnProperty(node)) {
				var particle_vertex = this.generateParticle(this.swc[node]);
				this.geometry.vertices.push(particle_vertex);
				customAttributes.radius.value.push(this.swc[node].radius);
				customAttributes.typeColor.value.push(this.nodeColor(this.swc[node]));
			}
		} 
		this.material = new THREE.ShaderMaterial(
		{
			uniforms : customUniforms,
			attributes : customAttributes,
			vertexShader : vertexShader,
			fragmentShader : fragementShader,
			transparent : true, 
			// alphaTest: 0.5,  // if having transparency issues, try including: alphaTest: 0.5, 
			depthTest : true,
			// blending: THREE.AdditiveBlending, depthTest: false,
			// I guess you don't need to do a depth test if you are alpha blending?
			// 
		});


		var particles = new THREE.ParticleSystem(this.geometry, this.material);
		particles.sortParticles = false;
		this.neuron.add(particles);

		if (this.show_cones){	
			// Cone quad imposters, to link spheres together
			var coneAttributes = 
			{
				radius:   { type: "fv1", value: [] },
				typeColor:   { type: "c", value: [] },
			};
			var coneUniforms = 
			{
				sphereTexture: { type: 't', value: sphereImg },
			};
			var uvs = [
				new THREE.Vector2(0.5, 0),
				new THREE.Vector2(0.5, 1),
				new THREE.Vector2(0.5, 1)
			];
			var coneGeom = new THREE.Geometry();
			for (var node in this.swc) {
				if (this.swc.hasOwnProperty(node)) {
					if (this.swc[node].parent != -1) {
						// Child/first position
						var cone = this.generateCone(this.swc[node], this.swc[this.swc[node].parent]);
						var ix2 = coneGeom.vertices.push(cone.child.vertex);
						coneAttributes.radius.value.push(cone.child.radius);
						coneAttributes.typeColor.value.push(cone.child.color);
						
						coneGeom.vertices.push(cone.parent.vertex);
						coneAttributes.radius.value.push(cone.parent.radius);
						coneAttributes.typeColor.value.push(cone.parent.color);
						
						// Paint two triangles to make a cone-imposter quadrilateral
						// Triangle #1
						var coneFace = new THREE.Face3(ix2 - 1, ix2 - 1, ix2);
						coneFace.vertexNormals = [ cone.normal1, cone.normal2, cone.normal2 ];
						coneGeom.faces.push(coneFace);
						// Simple texture coordinates should be modified in the vertex shader
						coneGeom.faceVertexUvs[0].push(uvs);
						// Triangle #2
						coneFace = new THREE.Face3(ix2, ix2, ix2-1);
						coneFace.vertexNormals = [ cone.normal1, cone.normal2, cone.normal1 ];
						coneGeom.faces.push(coneFace);
						coneGeom.faceVertexUvs[0].push(uvs);
					}
				}
			} 
			var coneMaterial = new THREE.ShaderMaterial(
			{
				attributes: coneAttributes,
				uniforms: coneUniforms,
				vertexShader:   vertexShaderCone,
				fragmentShader: fragmentShaderCone,
				transparent: false, 
				depthTest: true,
				side: THREE.DoubleSide
			});
			var coneMesh = new THREE.Mesh(coneGeom, coneMaterial);
			this.neuron.add(coneMesh);
		}
	}
	//sphere mode renders 3d sphere
	else if (this.mode === 'sphere') {
		for (var node in this.swc) {
			if (this.swc.hasOwnProperty(node)) {
				var sphere = this.generateSphere(this.swc[node]);
				this.neuron.add(sphere);
				if (this.show_cones){
					if (this.swc[node].parent != -1) {
						var cone = this.generateConeGeometry(this.swc[node], this.swc[this.swc[node].parent]);
						this.neuron.add(cone);
					}
				}
			}
		} 
	}
	
	if (this.mode === 'skeleton' || this.show_cones === false) {
		this.material = new THREE.LineBasicMaterial({ color: this.colors[this.colors.length-1] });
		if (this.mode === 'skeleton') this.material.color.set(this.colors[0]);
		this.geometry = new THREE.Geometry();
		for (var node in this.swc) {
			if (this.swc.hasOwnProperty(node)) {
				if (this.swc[node].parent != -1) {
					var verticies = this.generateSkeleton(this.swc[node], this.swc[this.swc[node].parent]);
					this.geometry.vertices.push(verticies.child);
					this.geometry.vertices.push(verticies.parent);
				}
			}
		} 
		var line = new THREE.Line(this.geometry, this.material, THREE.LinePieces);
		this.neuron.add(line);
	}
	
	//centers neuron
	this.neuron.position.set(-this.center[0], -this.center[1], -this.center[2]);
	this.scene.add(this.neuron);

	//Lights
	//doesn't actually work with any of the current shaders
	var light = new THREE.DirectionalLight( 0xffffff);
	light.position.set(0, 0, 1000);
	this.scene.add(light);
	
	if (this.show_stats) {
		//FPS stats
		this.stats = new Stats();
		this.stats.domElement.style.position = 'absolute';
		document.getElementById(this.dom_element).style.position = 'relative';
		this.stats.domElement.style.top = '0px';
		this.stats.domElement.style.zIndex = 100;
		document.getElementById(this.dom_element).appendChild(this.stats.domElement);
	}

	//Effects
	if (this.effect) {
		if (this.effect === 'rift') {
			this.my_effect = new THREE.OculusRiftEffect(this.renderer, { worldScale: 100 });
		}
		else if (this.effect === 'parallax') {
			this.my_effect = new THREE.ParallaxBarrierEffect(this.renderer);
		}
		this.my_effect.setSize(this.WIDTH, this.HEIGHT);
	}

	//Controls
	this.controls = new THREE.TrackballControls(this.camera, document.getElementById(this.dom_element));
	this.controls.addEventListener('change', this.render.bind(this));
};

// animation loop
SharkViewer.prototype.animate = function () {
	// loop on request animation loop
	// - it has to be at the begining of the function
	// - see details at http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	requestAnimationFrame(this.animate.bind(this));
	this.controls.update();
	// do the render
	this.render();

};

// render the scene
SharkViewer.prototype.render = function () {
	// actually render the scene
	if (this.effect) this.my_effect.render(this.scene, this.camera);
	else this.renderer.render(this.scene, this.camera);
	if (this.show_stats) this.stats.update();
};

//sets up user specified configuration
SharkViewer.prototype.setValues = function (values) {
	if (values === undefined) return;
	for (var key in values) {
		var newValue = values[key];
		if (newValue === undefined) {
			continue;
		}
		if (key in this) {
			this[key] = newValue;
		}
	}
};

//Helper function to turn swc file data into json object
function swc_parser(swc_file) {
	//split by lines
	var swc_ar = swc_file.split("\n");
	var swc_json = {};
	swc_ar.forEach(function (e) {
		//if line is good, put into json
		if (/^\d/.test(e)) {
			var split_str = e.split(" ");
			// id: x, y, z, parent, radius
			swc_json[split_str[0]] = {
				'type' : parseInt(split_str[1]),
				'x' : parseFloat(split_str[2]),
				'y' : parseFloat(split_str[3]),
				'z' : parseFloat(split_str[4]),
				'parent' : parseInt(split_str[6]),
				'radius' : parseFloat(split_str[5]),
			};
		}
	});		

	//return json
	return swc_json;		
}



