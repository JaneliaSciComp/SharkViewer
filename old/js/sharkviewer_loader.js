THREE.SWCLoader = function(manager) {
	manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
};

THREE.SWCLoader.prototype = {
	constructor: THREE.SWCLoader,
	//Load a neuron from swc file
	//Inputs:
	//   url - path to swc file
	//   mode - 'skeleton', 'sphere', or 'particle' mode for rendering
	//   fov - feild of view for camera to render neuron (needed for particle mode)
	//   canvas_height - height of canvas (needed for particle mode)
	//   device_pixel_ratio - from three.js renderer: renderer.devicePixelRatio 
	//   load_fcn - callback function when swc loads, should accept 1 parameter, the neuron to render
	load: function(url, mode, fov, canvas_height, device_pixel_ratio, load_fcn) {
		var scope = this;
		var loader = new THREE.XHRLoader( scope.manager );
		loader.setCrossOrigin( scope.crossOrigin );
		loader.load( url, function ( text ) {
			var json = scope.parseSWC( text );
			scope.createModel( json, mode, fov, canvas_height, device_pixel_ratio, load_fcn );
		} );
	},

	parseSWC: function(swc_file) {
		//split by lines
		var swc_ar = swc_file.split("\n");
		var swc_json = {};

		var float = '-?\\d*(?:\\.\\d+)?';
		var pattern = new RegExp('^[ \\t]*(' + [
			'\\d+',   // index
			'\\d+',  // type
			float,    // x
			float,    // y
			float,    // z
			float,    // radius
			'-1|\\d+' // parent
		].join(')[ \\t]+(') + ')[ \\t]*$');

		swc_ar.forEach(function (e) {
			//if line is good, put into json
			var match = e.match(pattern);
			if (match) {
				swc_json[match[1]] = {
					'type'   : parseInt  (match[2]),
					'x'      : parseFloat(match[3]),
					'y'      : parseFloat(match[4]),
					'z'      : parseFloat(match[5]),
					'radius' : parseFloat(match[6]),
					'parent' : parseInt  (match[7]),
				};
			}
		});

		//return json
		return swc_json;
	},
	
	createModel: function(json, mode, fov, canvas_height, device_pixel_ratio, callback) {
		var swc = json; 
		//which node to center neuron on (starts at 1), -1 to center at center of bounding box
		var center_node = 1; 
		//show cones between cylindars for particle and sphere mode
		var show_cones = true;
		//color array, nodes of type 0 show as first color, etc. 
		var colors = [
			0x00be9e,
			0x3919cb,
			0x7d0bc4,
			0xff6700,
			0x3eef00,
			0xffce00,
			0xf50027,
			0x606060,
		]; 
		var boundingBox, three_materials, nodeColor, three_colors, center, geometry, neuron, material;
		var n = init();
		function calculateBoundingBox() {	
			for (var node in swc) {
				if (swc.hasOwnProperty(node)) {
					if (swc[node].x < boundingBox.xmin) boundingBox.xmin = swc[node].x;
					if (swc[node].x > boundingBox.xmax) boundingBox.xmax = swc[node].x;
					if (swc[node].y < boundingBox.ymin) boundingBox.ymin = swc[node].y;
					if (swc[node].y > boundingBox.ymax) boundingBox.ymax = swc[node].y;
					if (swc[node].z < boundingBox.zmin) boundingBox.zmin = swc[node].z;
					if (swc[node].z > boundingBox.zmax) boundingBox.zmax = swc[node].z;
				}
			}
		};
		function generateSphere(node) {
			var sphereMaterial = three_materials[ node.type ];
			var r1 = node.radius || 0.01;
			var geometry = new THREE.SphereGeometry(r1);
			var mesh = new THREE.Mesh(geometry, sphereMaterial);
			mesh.position.x = node.x;
			mesh.position.y = node.y;
			mesh.position.z = node.z;
			return mesh;
		};
		function generateAnnotationSphere(annotation, node) {
			var black = new THREE.Color(0x000000);
			var sphereMaterial = new THREE.MeshBasicMaterial({ color: black});
			var r1 = (node.radius * 0.25) || 0.01;
			var geometry = new THREE.SphereGeometry(r1);
			var mesh = new THREE.Mesh(geometry, sphereMaterial);
			mesh.position.x = annotation.x;
			mesh.position.y = annotation.y;
			mesh.position.z = annotation.z;
			return mesh;
		};

		//generates cones connecting spheres
		function generateConeGeometry(node, node_parent) {
			var coneMaterial = three_materials[ node_parent.type ];
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
		function generateParticle(node) {
			return new THREE.Vector3(node.x, node.y, node.z);
		};


		//generates skeleton verticies
		function generateSkeleton(node, node_parent) {
			var vertex = new THREE.Vector3(node.x, node.y, node.z);
			var vertex_parent = new THREE.Vector3(node_parent.x, node_parent.y, node_parent.z);
			var child_color = nodeColor(node);
			var parent_color = nodeColor(node_parent);
			return {
				'child' : vertex, 
				'parent' : vertex_parent,
				'child_color' : child_color,
				'parent_color' : parent_color
			};
		};

		//generates cone properties for node, parent pair
		function generateCone(node, node_parent) {
			var cone_child = {};
			var cone_parent = {};
			
			cone_child.vertex = new THREE.Vector3(node.x, node.y, node.z);
			cone_child.radius = node.radius;
			cone_child.color = nodeColor(node);
			
			cone_parent.vertex = new THREE.Vector3(node_parent.x, node_parent.y, node_parent.z);
			cone_parent.radius = node_parent.radius;
			cone_parent.color = nodeColor(node_parent);

			//normals
			var n1 = new THREE.Vector3().subVectors(cone_parent.vertex, cone_child.vertex);
			var n2 = n1.clone().negate();
				
			return {
				'child' : cone_child, 
				'parent' : cone_parent, 
				'normal1' : n1, 
				'normal2': n2, 
			};
		};
			
		//calculates color based on node type
		function nodeColor(node) {
			return three_colors[ node.type % three_colors.length];
		};
		//Sets up three.js scene 
		function init() {

			//set up shaders
			var vertexShader =  [
				'uniform float particleScale;',
				'attribute float radius;',
				'attribute vec3 typeColor;',
				'varying vec3 vColor;',
				'varying vec4 mvPosition;',
				'varying float vRadius;',
				'void main() ',
				'{',
					'vColor = vec3(typeColor); // set RGB color associated to vertex; use later in fragment shader.',
					'mvPosition = modelViewMatrix * vec4(position, 1.0);',

					'// gl_PointSize = size;',
					'gl_PointSize = radius * ((particleScale*2.0) / length(mvPosition.z));',
					'gl_Position = projectionMatrix * mvPosition;',
					'vRadius = radius;',
				'}'
			].join("\n");
			
			var fragmentShader = [
				'#extension GL_EXT_frag_depth : enable',
				'uniform sampler2D sphereTexture; // Imposter image of sphere',
				'uniform mat4 projectionMatrix;',
				'varying vec3 vColor; // colors associated to vertices; assigned by vertex shader',
				'varying vec4 mvPosition;',
				'varying float vRadius;',
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
					'float far = gl_DepthRange.far; float near = gl_DepthRange.near;', 
					'float dz = sphereColors.b * vRadius;', 
					'vec4 clipPos = projectionMatrix * (mvPosition + vec4(0, 0, dz, 0));', 
					'float ndc_depth = clipPos.z/clipPos.w;', 
					'float depth = (((far-near) * ndc_depth) + near + far) / 2.0;', 
					'gl_FragDepthEXT = depth;',
				'#endif',
				'}'
			].join("\n");
			 
			var vertexShaderCone = [
				'attribute float radius;',
				'attribute vec3 typeColor;',
				'varying vec3 vColor;',
				'varying vec2 sphereUv;',
				'varying vec4 mvPosition;',
				'varying float depthScale;',
				'void main() ',
				'{',
				'	// TODO - offset cone position for different sphere sizes',
				'	// TODO - implement depth buffer on Chrome',
				'	mvPosition = modelViewMatrix * vec4(position, 1.0);',
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
				'	// We are painting an angled cone onto a flat quad, so depth correction is complicated',
				'   float foreshortening = length(cylAxis) / length(cylAxis.xy); // correct depth for foreshortening',
				'   // foreshortening limit is a tradeoff between overextruded cone artifacts, and depth artifacts',
				'   if (foreshortening > 4.0) foreshortening = 0.9; // hack to not pop out at extreme angles...',
				'   depthScale = radius * foreshortening; // correct depth for foreshortening',
				'}',
			].join("\n");
			 
			var fragmentShaderCone = [
				'#extension GL_EXT_frag_depth : enable',
				'uniform sampler2D sphereTexture; // Imposter image of sphere',
				'uniform mat4 projectionMatrix;',
				'varying vec3 vColor;',
				'varying vec2 sphereUv;',
				'varying vec4 mvPosition;',
				'varying float depthScale;',
				'void main() ',
				'{',
				'	vec4 sphereColors = texture2D(sphereTexture, sphereUv);',
				'	if (sphereColors.a < 0.3) discard;',
				'	vec3 baseColor = vColor * sphereColors.r;',
				'	vec3 highlightColor = baseColor + sphereColors.ggg;',
				'	gl_FragColor = vec4(highlightColor, sphereColors.a);',
				'#ifdef GL_EXT_frag_depth',
					'float dz = sphereColors.b * depthScale;', 
					'vec4 mvp = mvPosition + vec4(0, 0, dz, 0);', 
					'vec4 clipPos = projectionMatrix * mvp;', 
					'float ndc_depth = clipPos.z/clipPos.w;', 
					'float far = gl_DepthRange.far; float near = gl_DepthRange.near;', 
					'float depth = (((far-near) * ndc_depth) + near + far) / 2.0;', 
					'gl_FragDepthEXT = depth;',
				'#endif',
				'}',
			].join("\n");

			
			 
			//set up colors and materials based on color array
			three_colors = [];
			for (var color in colors) {
				if (colors.hasOwnProperty(color)) {
					three_colors.push(new THREE.Color(colors[color]));
				}
			}
			three_materials = [];
			for (var color in colors) {
				if (colors.hasOwnProperty(color)) {
					three_materials.push(new THREE.MeshBasicMaterial({ color: colors[color] }));
				}
			}
				
			//initialize bounding box
			boundingBox = {
				'xmin' : swc['1'].x,
				'xmax' : swc['1'].x,
				'ymin' : swc['1'].y,
				'ymax' : swc['1'].y,
				'zmin' : swc['1'].z,
				'zmax' : swc['1'].z,
			};
			calculateBoundingBox();

			//neuron centers around 1st node by default
			if (center_node === -1) {
				center = [ (boundingBox.xmax + boundingBox.xmin) / 2, (boundingBox.ymax + boundingBox.ymin) / 2, (boundingBox.zmax + boundingBox.zmin) / 2  ] ;
			}
			else{
				center_node = center_node.toString();
				center = [ swc[center_node].x, swc[center_node].y, swc[center_node].z ];
			}
			
			//neuron is object 3d which ensures all components move together
			neuron = new THREE.Object3D();
			
			//particle mode uses vertex info to place texture image, very fast
			if (mode === 'particle') {

				//material = new THREE.ParticleSystemMaterial({color: 0x0080ff});
				// special imposter image contains:
				// 1 - colorizable sphere image in red channel
				// 2 - specular highlight in green channel
				// 3 - depth offset in blue channel (currently unused)
				var image = document.createElement( 'img' );
				var sphereImg = new THREE.Texture( image );
				image.onload = function()  {
					sphereImg.needsUpdate = true;
				};
				image.src = 'data:image/png;base64,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';

				geometry = new THREE.Geometry();
				// properties that may vary from particle to particle. only accessible in vertex shaders!
				//	(can pass color info to fragment shader via vColor.)
				// compute scale for particles, in pixels
				var particleScale =  (0.5 * canvas_height * device_pixel_ratio) / Math.tan(0.5 * fov * Math.PI / 180.0);
			
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

				for (var node in swc) {
					if (swc.hasOwnProperty(node)) {
						var particle_vertex = generateParticle(swc[node]);
						geometry.vertices.push(particle_vertex);
						customAttributes.radius.value.push(swc[node].radius);
						customAttributes.typeColor.value.push(nodeColor(swc[node]));
					}
				} 

				material = new THREE.ShaderMaterial(
				{
					uniforms : customUniforms,
					attributes : customAttributes,
					vertexShader : vertexShader,
					fragmentShader : fragmentShader,
					transparent : true, 
					// alphaTest: 0.5,  // if having transparency issues, try including: alphaTest: 0.5, 
					depthTest : true,
					// blending: THREE.AdditiveBlending, depthTest: false,
					// I guess you don't need to do a depth test if you are alpha blending?
					// 
				});


				var particles = new THREE.ParticleSystem(geometry, material);
				particles.sortParticles = false;
				neuron.add(particles);

				if (show_cones){	
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
					for (var node in swc) {
						if (swc.hasOwnProperty(node)) {
							if (swc[node].parent != -1) {
								// Child/first position
								var cone = generateCone(swc[node], swc[swc[node].parent]);
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
					neuron.add(coneMesh);
				}
			}
			//sphere mode renders 3d sphere
			else if (mode === 'sphere') {
				for (var node in swc) {
					if (swc.hasOwnProperty(node)) {
						var sphere = generateSphere(swc[node]);
						neuron.add(sphere);
						if (show_cones){
							if (swc[node].parent != -1) {
								var cone = generateConeGeometry(swc[node], swc[swc[node].parent]);
								neuron.add(cone);
							}
						}
					}
				}
			}
			
			if (mode === 'skeleton' || show_cones === false) {
				material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors  });
				geometry = new THREE.Geometry();
				for (var node in swc) {
					if (swc.hasOwnProperty(node)) {
						if (swc[node].parent != -1) {
							var verticies = generateSkeleton(swc[node], swc[swc[node].parent]);
							geometry.vertices.push(verticies.child);
							geometry.colors.push(verticies.child_color);
							geometry.vertices.push(verticies.parent);
							geometry.colors.push(verticies.parent_color);
						}
					}
				} 
				var line = new THREE.Line(geometry, material, THREE.LinePieces);
				neuron.add(line);
			}
			
			//centers neuron
			neuron.position.set(-center[0], -center[1], -center[2]);
			//callback function to use neuron
			callback(neuron);
		};
	}
}
