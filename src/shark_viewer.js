import { NODE_PARTICLE_IMAGE, swcParser } from "./viewer/util";

export { swcParser };

const THREE = require("three");
require("three-obj-loader")(THREE);
const Stats = require('stats.js');

const OrbitUnlimitedControls = require("@janelia/three-orbit-unlimited-controls").default;

const DEFAULT_POINT_THRESHOLD = 50;

const vertexShader = [
  "uniform float particleScale;",
  "attribute float radius;",
  "attribute vec3 typeColor;",
  "varying vec3 vColor;",
  "varying vec4 mvPosition;",
  "varying float vRadius;",
  "void main() ",
  "{",
  "vColor = vec3(typeColor); // set RGB color associated to vertex; use later in fragment shader.",
  "mvPosition = modelViewMatrix * vec4(position, 1.0);",

  "// gl_PointSize = size;",
  "gl_PointSize = radius * ((particleScale*2.0) / length(mvPosition.z));",
  "gl_Position = projectionMatrix * mvPosition;",
  "vRadius = radius;",
  "}"
].join("\n");

const fragmentShader = [
  "uniform sampler2D sphereTexture; // Imposter image of sphere",
  "uniform mat4 projectionMatrix;",
  "varying vec3 vColor; // colors associated to vertices; assigned by vertex shader",
  "varying vec4 mvPosition;",
  "varying float vRadius;",
  "void main() ",
  "{",
  "// what part of the sphere image?",
  "vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);",
  "vec4 sphereColors = texture2D(sphereTexture, uv);",
  "// avoid further computation at invisible corners",
  "if (sphereColors.a < 0.3) discard;",

  "// calculates a color for the particle",
  "// gl_FragColor = vec4(vColor, 1.0);",
  "// sets a white particle texture to desired color",
  "// gl_FragColor = sqrt(gl_FragColor * texture2D(sphereTexture, uv)) + vec4(0.1, 0.1, 0.1, 0.0);",
  "// red channel contains colorizable sphere image",
  "vec3 baseColor = vColor * sphereColors.r;",
  "// green channel contains (white?) specular highlight",
  "vec3 highlightColor = baseColor + sphereColors.ggg;",
  "gl_FragColor = vec4(highlightColor, sphereColors.a);",
  "// TODO blue channel contains depth offset, but we cannot use gl_FragDepth in webgl?",
  "#ifdef GL_EXT_frag_depth",
  "float far = gl_DepthRange.far; float near = gl_DepthRange.near;",
  "float dz = sphereColors.b * vRadius;",
  "vec4 clipPos = projectionMatrix * (mvPosition + vec4(0, 0, dz, 0));",
  "float ndc_depth = clipPos.z/clipPos.w;",
  "float depth = (((far-near) * ndc_depth) + near + far) / 2.0;",
  "gl_FragDepthEXT = depth;",
  "#endif",
  "}"
].join("\n");

const fragmentShaderAnnotation = [
  "uniform sampler2D sphereTexture; // Imposter image of sphere",
  "uniform mat4 projectionMatrix;",
  "varying vec3 vColor; // colors associated to vertices; assigned by vertex shader",
  "varying vec4 mvPosition;",
  "varying float vRadius;",
  "void main() ",
  "{",
  "// what part of the sphere image?",
  "vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);",
  "vec4 sphereColors = texture2D(sphereTexture, uv);",
  "// avoid further computation at invisible corners",
  "if (sphereColors.a < 0.3) discard;",

  "// calculates a color for the particle",
  "// gl_FragColor = vec4(vColor, 1.0);",
  "// sets a white particle texture to desired color",
  "// gl_FragColor = sqrt(gl_FragColor * texture2D(sphereTexture, uv)) + vec4(0.1, 0.1, 0.1, 0.0);",
  "// red channel contains colorizable sphere image",
  "vec3 baseColor = vColor * sphereColors.r;",
  "// green channel contains (white?) specular highlight",
  "gl_FragColor = vec4(baseColor, sphereColors.a);",
  "// TODO blue channel contains depth offset, but we cannot use gl_FragDepth in webgl?",
  "#ifdef GL_EXT_frag_depth",
  "float far = gl_DepthRange.far; float near = gl_DepthRange.near;",
  "float dz = sphereColors.b * vRadius;",
  "vec4 clipPos = projectionMatrix * (mvPosition + vec4(0, 0, dz, 0));",
  "float ndc_depth = clipPos.z/clipPos.w;",
  "float depth = (((far-near) * ndc_depth) + near + far) / 2.0;",
  "gl_FragDepthEXT = depth;",
  "#endif",
  "}"
].join("\n");

const vertexShaderCone = [
  "attribute float radius;",
  "attribute vec3 typeColor;",
  "varying vec3 vColor;",
  "varying vec2 sphereUv;",
  "varying vec4 mvPosition;",
  "varying float depthScale;",
  "void main() ",
  "{",
  "	// TODO - offset cone position for different sphere sizes",
  "	// TODO - implement depth buffer on Chrome",
  "	mvPosition = modelViewMatrix * vec4(position, 1.0);",
  "	// Expand quadrilateral perpendicular to both view/screen direction and cone axis",
  "	vec3 cylAxis = (modelViewMatrix * vec4(normal, 0.0)).xyz; // convert cone axis to camera space",
  "	vec3 sideDir = normalize(cross(vec3(0.0,0.0,-1.0), cylAxis));",
  "	mvPosition += vec4(radius * sideDir, 0.0);",
  "	gl_Position = projectionMatrix * mvPosition;",
  "	// Pass and interpolate color",
  "	vColor = typeColor;",
  "	// Texture coordinates",
  "	sphereUv = uv - vec2(0.5, 0.5); // map from [0,1] range to [-.5,.5], before rotation",
  '	// If sideDir is "up" on screen, make sure u is positive',
  "	float q = sideDir.y * sphereUv.y;",
  "	sphereUv.y = sign(q) * sphereUv.y;",
  "	// rotate texture coordinates to match cone orientation about z",
  "	float angle = atan(sideDir.x/sideDir.y);",
  "	float c = cos(angle);",
  "	float s = sin(angle);",
  "	mat2 rotMat = mat2(",
  "		c, -s, ",
  "		s,  c);",
  "	sphereUv = rotMat * sphereUv;",
  "	sphereUv += vec2(0.5, 0.5); // map back from [-.5,.5] => [0,1]",
  "	// We are painting an angled cone onto a flat quad, so depth correction is complicated",
  "   float foreshortening = length(cylAxis) / length(cylAxis.xy); // correct depth for foreshortening",
  "   // foreshortening limit is a tradeoff between overextruded cone artifacts, and depth artifacts",
  "   if (foreshortening > 4.0) foreshortening = 0.9; // hack to not pop out at extreme angles...",
  "   depthScale = radius * foreshortening; // correct depth for foreshortening",
  "}"
].join("\n");

const fragmentShaderCone = [
  "uniform sampler2D sphereTexture; // Imposter image of sphere",
  "uniform mat4 projectionMatrix;",
  "varying vec3 vColor;",
  "varying vec2 sphereUv;",
  "varying vec4 mvPosition;",
  "varying float depthScale;",
  "void main() ",
  "{",
  "	vec4 sphereColors = texture2D(sphereTexture, sphereUv);",
  "	if (sphereColors.a < 0.3) discard;",
  "	vec3 baseColor = vColor * sphereColors.r;",
  "	vec3 highlightColor = baseColor + sphereColors.ggg;",
  "	gl_FragColor = vec4(highlightColor, sphereColors.a);",
  "#ifdef GL_EXT_frag_depth",
  "float dz = sphereColors.b * depthScale;",
  "vec4 mvp = mvPosition + vec4(0, 0, dz, 0);",
  "vec4 clipPos = projectionMatrix * mvp;",
  "float ndc_depth = clipPos.z/clipPos.w;",
  "float far = gl_DepthRange.far; float near = gl_DepthRange.near;",
  "float depth = (((far-near) * ndc_depth) + near + far) / 2.0;",
  "gl_FragDepthEXT = depth;",
  "#endif",
  "}"
].join("\n");

function convertToHexColor(i) {
  let result = "#000000";
  if (i >= 0 && i <= 15) {
    result = `#00000${i.toString(16)}`;
  } else if (i >= 16 && i <= 255) {
    result = `#0000${i.toString(16)}`;
  } else if (i >= 256 && i <= 4095) {
    result = `#000${i.toString(16)}`;
  } else if (i >= 4096 && i <= 65535) {
    result = `#00${i.toString(16)}`;
  } else if (i >= 65536 && i <= 1048575) {
    result = `#0${i.toString(16)}`;
  } else if (i >= 1048576 && i <= 16777215) {
    result = `#${i.toString(16)}`;
  }
  return result;
}

function calculateBoundingBox(swcJSON) {
  const boundingBox = {
    xmin: Infinity,
    xmax: -Infinity,
    ymin: Infinity,
    ymax: -Infinity,
    zmin: Infinity,
    zmax: -Infinity
  };

  Object.values(swcJSON).forEach(node => {
    const r = node.radius;
    if (node.x - r < boundingBox.xmin) {
      boundingBox.xmin = node.x - r;
    }
    if (node.x + r > boundingBox.xmax) {
      boundingBox.xmax = node.x + r;
    }
    if (node.y - r < boundingBox.ymin) {
      boundingBox.ymin = node.y - r;
    }
    if (node.y + r > boundingBox.ymax) {
      boundingBox.ymax = node.y + r;
    }
    if (node.z - r < boundingBox.zmin) {
      boundingBox.zmin = node.z - r;
    }
    if (node.z + r > boundingBox.zmax) {
      boundingBox.zmax = node.z + r;
    }
  });

  return boundingBox;
}

function calculateBoundingSphere(swcJSON, boundingBox) {
  // Similar to:
  // "An Efficient Bounding Sphere", by Jack Ritter from "Graphics Gems", Academic Press, 1990
  // https://github.com/erich666/GraphicsGems/blob/master/gems/BoundSphere.c

  // Start with the sphere inscribed in the bounding box.  It may miss some nodes.
  const rx = (boundingBox.xmax - boundingBox.xmin) / 2;
  const ry = (boundingBox.ymax - boundingBox.ymin) / 2;
  const rz = (boundingBox.zmax - boundingBox.zmin) / 2;
  let radius = Math.min(rx, ry, rz);
  let center = new THREE.Vector3(
    boundingBox.xmin + rx,
    boundingBox.ymin + ry,
    boundingBox.zmin + rz
  );

  // Find each node that is outside the current bounding sphere.
  let radiusSq = radius * radius;
  Object.values(swcJSON).forEach(node => {
    const nodeCenter = new THREE.Vector3(node.x, node.y, node.z);
    const nodeCenterToCenter = new THREE.Vector3();
    nodeCenterToCenter.subVectors(center, nodeCenter);
    const distSqNodeCenterToCenter = nodeCenterToCenter.dot(nodeCenterToCenter);
    // Include the node's radius when checking whether it is outside.
    if (distSqNodeCenterToCenter + node.radius * node.radius > radiusSq) {
      // If it is outside, then the new boundingp-sphere radius is the average of the old radius
      // and the distance from the outside of the node (i.e., include its radius) to the
      // old bounding-sphere center.
      const distNodeCenterToCenter = Math.sqrt(distSqNodeCenterToCenter);
      const newRadius = (radius + (distNodeCenterToCenter + node.radius)) / 2.0;
      // The new bounding sphere center will be on the line between the node and the old center.
      const nodeCenterToCenterUnit = nodeCenterToCenter
        .clone()
        .divideScalar(distNodeCenterToCenter);
      const nodeCenterToNewCenter = nodeCenterToCenterUnit
        .clone()
        .multiplyScalar(newRadius - node.radius);
      center = nodeCenter.clone().add(nodeCenterToNewCenter);
      radius = newRadius;
      radiusSq = radius * radius;
    }
  });

  return { center, radius };
}
/** 
 * Calculate the camera position on the edge of the bounding sphere
 * @param {number} fov - the field of view for the scene
 * @param {Object} boundingSphere - object describing radius and center point of the sphere
 * @param {boolean} frontToBack - if true, then look down the Z-stack from point 0
 * @returns {Object} THREE.Vector3 object used to position the camera
 */
function calculateCameraPosition(fov, boundingSphere, frontToBack, maxVolumeSize) {
  const theta = (fov * (Math.PI / 180.0)) / 2.0;
  const d = boundingSphere.radius / Math.sin(theta);
  const { center } = boundingSphere;
  // If negative z is greater than the .maxVolumeSize, the camera will
  // get stuck at that point and wont be able to dolly in or out. Forcing
  // the z position to be at least half the negative maxVolumeSize seems
  // to fix the issue.
  const z = Math.max(-(maxVolumeSize/2), frontToBack ? center.z - d : center.z + d);
  return new THREE.Vector3(center.x, center.y, z);
}

function applySemiTransparentShader(object, color) {
  object.traverse(child => {
    child.material = new THREE.ShaderMaterial({
      uniforms: {
        color: { type: "c", value: new THREE.Color(`${color}`) }
      },
      vertexShader: `
        #line 585
        varying vec3 normal_in_camera;
        varying vec3 view_direction;

        void main() {
          vec4 pos_in_camera = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * pos_in_camera;
          normal_in_camera = normalize(mat3(modelViewMatrix) * normal);
          view_direction = normalize(pos_in_camera.xyz);
        }
      `,
      fragmentShader: `
        #line 597
        uniform vec3 color;
        varying vec3 normal_in_camera;
        varying vec3 view_direction;

        void main() {
          // Make edges more opaque than center
          float edginess = 1.0 - abs(dot(normal_in_camera, view_direction));
          float opacity = clamp(edginess - 0.30, 0.0, 0.5);
          // Darken compartment at the very edge
          float blackness = pow(edginess, 4.0) - 0.3;
          vec3 c = mix(color, vec3(0,0,0), blackness);
          gl_FragColor = vec4(c, opacity);
        }
      `,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });
  });
  return object;
}

// generates particle vertices
function generateParticle(node) {
  return new THREE.Vector3(node.x, node.y, node.z);
}

// generates skeleton vertices
function generateSkeleton(node, nodeParent) {
  const vertex = new THREE.Vector3(node.x, node.y, node.z);
  const vertexParent = new THREE.Vector3(
    nodeParent.x,
    nodeParent.y,
    nodeParent.z
  );
  return {
    child: vertex,
    parent: vertexParent
  };
}

function createMetadataElement(metadata, colors) {
  const metadiv = document.createElement("div");
  metadiv.id = "node_key";
  metadiv.style.position = "absolute";
  metadiv.style.top = "0px";
  metadiv.style.right = "10px";
  metadiv.style.border = "solid 1px #aaaaaa";
  metadiv.style.borderRadius = "5px";
  metadiv.style.padding = "2px";

  let toinnerhtml = "";
  metadata.forEach(m => {
    const mtype = parseInt(m.type, 10);
    const threeColor = mtype < colors.length ? colors[mtype] : colors[0];
    let cssColor = threeColor;
    if (typeof threeColor !== "string")
      cssColor = convertToHexColor(threeColor);
    toinnerhtml += `<div><span style='height:10px;width:10px;background:${cssColor};`;
    toinnerhtml += `display:inline-block;'></span> : ${m.label}</div>`;
  });
  metadiv.innerHTML = toinnerhtml;
  return metadiv;
}


export default class SharkViewer {
  /* swc neuron json object:
   *{
   *  id : {
   *    type: <type number of node (string)>,
   *    x: <x position of node (float)>,
   *    y: <y position of node (float)>,
   *    z: <z position of node (float)>,
   *    parent: <id number of node's parent (-1 if no parent)>,
   *    radius: <radius of node (float)>,
   *  }
   *}
   */
  constructor(args) {
    this.swc = null;
    // mode (sphere, particle, skeleton)
    this.mode = "particle";
    // flip y axis
    this.flip = false;
    // color array, nodes of type 0 show as first color, etc.
    this.colors = [
      0x31ffdc,
      0x6d4ff3,
      0xaa3af0,
      0xf38032,
      0x59fc20,
      0xf8d43c,
      0xfd2c4d,
      0xc9c9c9
    ];
    this.radius_scale_factor = 1;
    this.metadata = false;
    this.on_select_node = null;
    this.on_toggle_node = null;
    this.showStats = false;
    this.animated = false;
    this.three = THREE;

    this.showAxes = false;
    this.show_cones = true;
    this.brainboundingbox = null;
    this.last_anim_timestamp = null;
    this.mouseHandler = null;
    this.nodeParticleTexture = NODE_PARTICLE_IMAGE;
    this.min_radius = null;
    this.raycaster = new THREE.Raycaster();
    this.trackControls = null;
    this.backgroundColor = 0xffffff;
    this.renderer = null;
    this.camera = null;
    this.cameraChangeCallback = null;
    this.onTop = false;
    this.maxVolumeSize = 100000;

    this.setValues(args);
    // anything after the above line can not be set by the caller.

    // html element that will receive webgl canvas
    if (typeof args.dom_element === "object") {
      this.dom_element = args.dom_element;
    } else {
      this.dom_element = document.getElementById(
        args.dom_element || "container"
      );
    }

    // height of canvas
    this.HEIGHT = this.dom_element.clientHeight;
    // width of canvas
    this.WIDTH = this.dom_element.clientWidth;
  }

  // sets up user specified configuration
  setValues(values) {
    if (values !== undefined) {
      Object.keys(values).forEach(key => {
        const newValue = values[key];
        if (newValue !== undefined) {
          if (key in this) {
            this[key] = newValue;
          }
        }
      });
    }
  }

  // calculates color based on node type
  nodeColor(node) {
    if (node.type < this.three_colors.length) {
      return this.three_colors[node.type];
    }
    return this.three_colors[0];
  }



    // generates sphere mesh
  generateSphere(node) {
    const sphereMaterial = this.three_materials[node.type];
    const r1 = node.radius || 0.01;
    const geometry = new THREE.SphereGeometry(r1);
    const mesh = new THREE.Mesh(geometry, sphereMaterial);
    mesh.position.x = node.x;
    mesh.position.y = node.y;
    mesh.position.z = node.z;
    return mesh;
  }

  // generates cones connecting spheres
  generateConeGeometry(node, nodeParent) {
    const coneMaterial = this.three_materials[nodeParent.type];
    const nodeVec = new THREE.Vector3(node.x, node.y, node.z);
    const nodeParentVec = new THREE.Vector3(
      nodeParent.x,
      nodeParent.y,
      nodeParent.z
    );
    const dist = nodeVec.distanceTo(nodeParentVec);
    const cylAxis = new THREE.Vector3().subVectors(nodeVec, nodeParentVec);
    cylAxis.normalize();
    const theta = Math.acos(cylAxis.y);
    const rotationAxis = new THREE.Vector3();
    rotationAxis.crossVectors(cylAxis, new THREE.Vector3(0, 1, 0));
    rotationAxis.normalize();
    const r1 = node.radius || 0.01;
    const r2 = nodeParent.radius || 0.01;
    const geometry = new THREE.CylinderGeometry(r1, r2, dist);
    const mesh = new THREE.Mesh(geometry, coneMaterial);
    mesh.matrixAutoUpdate = false;
    mesh.matrix.makeRotationAxis(rotationAxis, -theta);
    const position = new THREE.Vector3(
      (node.x + nodeParent.x) / 2,
      (node.y + nodeParent.y) / 2,
      (node.z + nodeParent.z) / 2
    );
    mesh.matrix.setPosition(position);
    return mesh;
  }

  // generates cone properties for node, parent pair
  generateCone(node, nodeParent, color) {
    const coneChild = {};
    const coneParent = {};

    let nodeColor = this.nodeColor(node);
    if (color) {
      nodeColor = new THREE.Color(color);
    }
    coneChild.vertex = new THREE.Vector3(node.x, node.y, node.z);
    coneChild.radius = node.radius;
    coneChild.color = nodeColor;

    let nodeParentColor = this.nodeColor(nodeParent);
    if (color) {
      nodeParentColor = new THREE.Color(color);
    }
    coneParent.vertex = new THREE.Vector3(
      nodeParent.x,
      nodeParent.y,
      nodeParent.z
    );
    coneParent.radius = nodeParent.radius;
    coneParent.color = nodeParentColor;

    // normals
    const n1 = new THREE.Vector3().subVectors(
      coneParent.vertex,
      coneChild.vertex
    );
    const n2 = n1.clone().negate();

    return {
      child: coneChild,
      parent: coneParent,
      normal1: n1,
      normal2: n2
    };
  }

  createNeuron(swcJSON, color = undefined) {
    // neuron is object 3d which ensures all components move together
    const neuron = new THREE.Object3D();
    let geometry;
    let material;
    // particle mode uses vertex info to place texture image, very fast
    if (this.mode === "particle") {
      // special imposter image contains:
      // 1 - colorizable sphere image in red channel
      // 2 - specular highlight in green channel
      // 3 - depth offset in blue channel (currently unused)
      const image = document.createElement("img");
      const sphereImg = new THREE.Texture(image);
      image.onload = function onload() {
        sphereImg.needsUpdate = true;
      };
      image.src = this.nodeParticleTexture;

      geometry = new THREE.BufferGeometry();
      // properties that may consty from particle to particle. only accessible in vertex shaders!
      //	(can pass color info to fragment shader via vColor.)
      // compute scale for particles, in pixels
      const particleScale =
        (0.5 * this.HEIGHT) /
        this.renderer.getPixelRatio() /
        Math.tan((0.5 * this.fov * Math.PI) / 180.0);

      const customAttributes = {
        radius: { type: "fv1", value: [] },
        typeColor: { type: "c", value: [] },
        vertices: { type: "f", value: [] }
      };

      const customUniforms = {
        particleScale: { type: "f", value: particleScale },
        sphereTexture: { type: "t", value: sphereImg }
      };

      const indexLookup = {};

      Object.keys(swcJSON).forEach(node => {
        let nodeColor = this.nodeColor(swcJSON[node]);

        if (color) {
          nodeColor = new THREE.Color(color);
        }

        const particleVertex = generateParticle(swcJSON[node]);

        let radius = swcJSON[node].radius * this.radius_scale_factor;

        if (this.min_radius && radius < this.min_radius) {
          radius = this.min_radius;
        }

        customAttributes.radius.value.push(radius);
        customAttributes.typeColor.value.push(nodeColor.r);
        customAttributes.typeColor.value.push(nodeColor.g);
        customAttributes.typeColor.value.push(nodeColor.b);
        customAttributes.vertices.value.push(particleVertex.x);
        customAttributes.vertices.value.push(particleVertex.y);
        customAttributes.vertices.value.push(particleVertex.z);

        indexLookup[customAttributes.radius.value.length - 1] =
          swcJSON[node].sampleNumber;
     });
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(customAttributes.vertices.value, 3)
      );
      geometry.setAttribute(
        "radius",
        new THREE.Float32BufferAttribute(customAttributes.radius.value, 1)
      );
      geometry.setAttribute(
        "typeColor",
        new THREE.Float32BufferAttribute(customAttributes.typeColor.value, 3)
      );

      material = new THREE.ShaderMaterial({
        uniforms: customUniforms,
        vertexShader,
        fragmentShader,
        transparent: true
        // alphaTest: 0.5 // if having transparency issues, try including: alphaTest: 0.5,
      });
      material.extensions.fragDepth = true;

      let materialShader = null;

      const particles = new THREE.Points(geometry, material);
      particles.userData = { indexLookup, materialShader };

      material.onBeforeCompile = shader => {
        shader.uniforms.alpha = { value: 0 };
        shader.vertexShader = `uniform float alpha;\n${shader.vertexShader}`;
        shader.vertexShader = shader.vertexShader.replace(
          "#include <begin_vertex>",
          ["vAlpha = alpha"].join("\n")
        );
        materialShader = shader;

        materialShader.uniforms.alpha.value = 0.9;

        particles.userData.materialShader = materialShader;
      };

      neuron.add(particles);

      if (this.show_cones) {
        // Cone quad imposters, to link spheres together
        const coneAttributes = {
          radius: { type: "fv1", value: [] },
          indices: { type: "iv1", value: [] },
          typeColor: { type: "c", value: [] },
          vertices: { type: "f", value: [] },
          normals: { type: "f", value: [] },
          uv: { type: "f", value: [] }
        };
        const coneUniforms = {
          sphereTexture: { type: "t", value: sphereImg }
        };
        const uvs = [
          new THREE.Vector2(0.5, 0),
          new THREE.Vector2(0.5, 1),
          new THREE.Vector2(0.5, 1)
        ];
        const coneGeom = new THREE.BufferGeometry();
        let ix21 = 0;

        Object.keys(swcJSON).forEach(node => {
          if (swcJSON[node].parent !== -1) {
            // Paint two triangles to make a cone-imposter quadrilateral
            // Triangle #1
            const cone = this.generateCone(
              swcJSON[node],
              swcJSON[swcJSON[node].parent],
              color
            );
            let nodeColor = cone.child.color;
            if (color) {
              nodeColor = new THREE.Color(color);
            }

            let parentRadius = cone.parent.radius * this.radius_scale_factor;
            if (this.min_radius && parentRadius < this.min_radius) {
              parentRadius = this.min_radius;
            }

            let childRadius = cone.child.radius * this.radius_scale_factor;
            if (this.min_radius && childRadius < this.min_radius) {
              childRadius = this.min_radius;
            }

            // vertex 1
            coneAttributes.vertices.value.push(cone.child.vertex.x);
            coneAttributes.vertices.value.push(cone.child.vertex.y);
            coneAttributes.vertices.value.push(cone.child.vertex.z);
            coneAttributes.radius.value.push(childRadius);
            coneAttributes.typeColor.value.push(nodeColor.r);
            coneAttributes.typeColor.value.push(nodeColor.g);
            coneAttributes.typeColor.value.push(nodeColor.b);
            coneAttributes.normals.value.push(cone.normal1.x);
            coneAttributes.normals.value.push(cone.normal1.y);
            coneAttributes.normals.value.push(cone.normal1.z);
            coneAttributes.uv.value.push(uvs[0].x);
            coneAttributes.uv.value.push(uvs[0].y);
            coneAttributes.indices.value.push(ix21);
            ix21 += 1;

            // vertex 2
            coneAttributes.vertices.value.push(cone.child.vertex.x);
            coneAttributes.vertices.value.push(cone.child.vertex.y);
            coneAttributes.vertices.value.push(cone.child.vertex.z);
            coneAttributes.radius.value.push(childRadius);
            coneAttributes.typeColor.value.push(nodeColor.r);
            coneAttributes.typeColor.value.push(nodeColor.g);
            coneAttributes.typeColor.value.push(nodeColor.b);
            coneAttributes.normals.value.push(cone.normal2.x);
            coneAttributes.normals.value.push(cone.normal2.y);
            coneAttributes.normals.value.push(cone.normal2.z);
            coneAttributes.uv.value.push(uvs[1].x);
            coneAttributes.uv.value.push(uvs[1].y);
            coneAttributes.indices.value.push(ix21);
            ix21 += 1;

            // vertex 3
            coneAttributes.vertices.value.push(cone.parent.vertex.x);
            coneAttributes.vertices.value.push(cone.parent.vertex.y);
            coneAttributes.vertices.value.push(cone.parent.vertex.z);
            coneAttributes.radius.value.push(parentRadius);
            coneAttributes.typeColor.value.push(nodeColor.r);
            coneAttributes.typeColor.value.push(nodeColor.g);
            coneAttributes.typeColor.value.push(nodeColor.b);
            coneAttributes.normals.value.push(cone.normal2.x);
            coneAttributes.normals.value.push(cone.normal2.y);
            coneAttributes.normals.value.push(cone.normal2.z);
            coneAttributes.uv.value.push(uvs[2].x);
            coneAttributes.uv.value.push(uvs[2].y);
            coneAttributes.indices.value.push(ix21);
            ix21 += 1;

            // Triangle #2
            // Parent
            nodeColor = cone.parent.color;
            if (color) {
              nodeColor = new THREE.Color(color);
            }

            // vertex 1
            coneAttributes.vertices.value.push(cone.parent.vertex.x);
            coneAttributes.vertices.value.push(cone.parent.vertex.y);
            coneAttributes.vertices.value.push(cone.parent.vertex.z);
            coneAttributes.radius.value.push(parentRadius);
            coneAttributes.typeColor.value.push(nodeColor.r);
            coneAttributes.typeColor.value.push(nodeColor.g);
            coneAttributes.typeColor.value.push(nodeColor.b);
            coneAttributes.normals.value.push(cone.normal1.x);
            coneAttributes.normals.value.push(cone.normal1.y);
            coneAttributes.normals.value.push(cone.normal1.z);
            coneAttributes.uv.value.push(uvs[0].x);
            coneAttributes.uv.value.push(uvs[0].y);
            coneAttributes.indices.value.push(ix21);
            ix21 += 1;

            // vertex 2
            coneAttributes.vertices.value.push(cone.parent.vertex.x);
            coneAttributes.vertices.value.push(cone.parent.vertex.y);
            coneAttributes.vertices.value.push(cone.parent.vertex.z);
            coneAttributes.radius.value.push(parentRadius);
            coneAttributes.typeColor.value.push(nodeColor.r);
            coneAttributes.typeColor.value.push(nodeColor.g);
            coneAttributes.typeColor.value.push(nodeColor.b);
            coneAttributes.normals.value.push(cone.normal2.x);
            coneAttributes.normals.value.push(cone.normal2.y);
            coneAttributes.normals.value.push(cone.normal2.z);
            coneAttributes.uv.value.push(uvs[1].x);
            coneAttributes.uv.value.push(uvs[1].y);
            coneAttributes.indices.value.push(ix21);
            ix21 += 1;

            // vertex 3
            coneAttributes.vertices.value.push(cone.child.vertex.x);
            coneAttributes.vertices.value.push(cone.child.vertex.y);
            coneAttributes.vertices.value.push(cone.child.vertex.z);
            coneAttributes.radius.value.push(childRadius);
            coneAttributes.typeColor.value.push(nodeColor.r);
            coneAttributes.typeColor.value.push(nodeColor.g);
            coneAttributes.typeColor.value.push(nodeColor.b);
            coneAttributes.normals.value.push(cone.normal1.x);
            coneAttributes.normals.value.push(cone.normal1.y);
            coneAttributes.normals.value.push(cone.normal1.z);
            coneAttributes.uv.value.push(uvs[2].x);
            coneAttributes.uv.value.push(uvs[2].y);
            coneAttributes.indices.value.push(ix21);
            ix21 += 1;
          }
        });
        coneGeom.setIndex(
          new THREE.Uint32BufferAttribute(coneAttributes.indices.value, 1)
        );
        coneGeom.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(coneAttributes.vertices.value, 3)
        );
        coneGeom.setAttribute(
          "radius",
          new THREE.Float32BufferAttribute(coneAttributes.radius.value, 1)
        );
        coneGeom.setAttribute(
          "typeColor",
          new THREE.Float32BufferAttribute(coneAttributes.typeColor.value, 3)
        );
        coneGeom.setAttribute(
          "normal",
          new THREE.Float32BufferAttribute(coneAttributes.normals.value, 3)
        );
        coneGeom.setAttribute(
          "uv",
          new THREE.Float32BufferAttribute(coneAttributes.uv.value, 2)
        );

        const coneMaterial = new THREE.ShaderMaterial({
          uniforms: coneUniforms,
          vertexShader: vertexShaderCone,
          fragmentShader: fragmentShaderCone,
          transparent: true,
          depthTest: true,
          side: THREE.DoubleSide,
          alphaTest: 0.5 // if having transparency issues, try including: alphaTest: 0.5,
        });

        coneMaterial.extensions.fragDepth = true;

        const coneMesh = new THREE.Mesh(coneGeom, coneMaterial);

        coneMaterial.onBeforeCompile = shader => {
          // console.log( shader )
          shader.uniforms.alpha = { value: 0 };
          shader.vertexShader = `uniform float alpha;\n${shader.vertexShader}`;
          shader.vertexShader = shader.vertexShader.replace(
            "#include <begin_vertex>",
            ["vAlpha = alpha"].join("\n")
          );
          materialShader = shader;

          materialShader.uniforms.alpha.value = 0.9;

          coneMesh.userData = { materialShader };
        };

        neuron.add(coneMesh);
      }
    }
    // sphere mode renders 3d sphere
    else if (this.mode === "sphere") {
      Object.keys(swcJSON).forEach(node => {
        const sphere = this.generateSphere(swcJSON[node]);
        neuron.add(sphere);
        if (this.show_cones) {
          if (swcJSON[node].parent !== -1) {
            const cone = this.generateConeGeometry(
              swcJSON[node],
              swcJSON[swcJSON[node].parent]
            );
            neuron.add(cone);
          }
        }
      });
    }

    if (this.mode === "skeleton" || this.show_cones === false) {
      material = new THREE.LineBasicMaterial({
        color: this.colors[this.colors.length - 1]
      });
      if (this.mode === "skeleton") material.color.set(this.colors[0]);
      geometry = new THREE.Geometry();
      Object.keys(swcJSON).forEach(node => {
        if (swcJSON[node].parent !== -1) {
          const vertices = generateSkeleton(
            swcJSON[node],
            swcJSON[swcJSON[node].parent]
          );
          geometry.vertices.push(vertices.child);
          geometry.vertices.push(vertices.parent);
        }
      });
      const line = new THREE.LineSegments(geometry, material);
      neuron.add(line);
    }
    return neuron;
  }

  // copied from example at http://jsfiddle.net/b97zd1a3/16/
  addAxes() {
    const CANVAS_WIDTH = 200;
    const CANVAS_HEIGHT = 200;
    const axesRenderer = new THREE.WebGLRenderer( { alpha: true } ); // clear
    axesRenderer.setClearColor( 0x000000, 0 );
    axesRenderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
    this.axesRenderer = axesRenderer;

    const axesCanvas = this.dom_element.appendChild( axesRenderer.domElement );
    axesCanvas.setAttribute('id', 'axesCanvas');
    axesCanvas.style.width = CANVAS_WIDTH;
    axesCanvas.style.height = CANVAS_HEIGHT;
    axesCanvas.style.position = "absolute";
    axesCanvas.style.zIndex = 200;
    axesCanvas.style.bottom = "5px";
    axesCanvas.style.right = "5px";



    const axesCamera = new THREE.PerspectiveCamera( 50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );
    axesCamera.up = this.camera.up; // important!
    this.axesCamera = axesCamera;

    const axesScene = new THREE.Scene();
    const axesPos = new THREE.Vector3( 0,0,0 );
    axesScene.add( new THREE.ArrowHelper( new THREE.Vector3( 1,0,0 ), axesPos, 60, 0xFF0000, 20, 10 ) );
    axesScene.add( new THREE.ArrowHelper( new THREE.Vector3( 0,1,0 ), axesPos, 60, 0x00FF00, 20, 10 ) );
    axesScene.add( new THREE.ArrowHelper( new THREE.Vector3( 0,0,1 ), axesPos, 60, 0x0000FF, 20, 10 ) );
    this.axesScene = axesScene;
  }

  // Sets up three.js scene
  init() {
    if (this.effect === "noeffect") this.effect = false;

    // set up colors and materials based on color array
    this.three_colors = [];
    Object.keys(this.colors).forEach(color => {
      this.three_colors.push(new THREE.Color(this.colors[color]));
    })
    this.three_materials = [];
    Object.keys(this.colors).forEach(color => {
      this.three_materials.push(
        new THREE.MeshBasicMaterial({
          color: this.colors[color],
          wireframe: false
        })
      );
    });

    // setup render
    this.renderer = new THREE.WebGL1Renderer({
      antialias: true // to get smoother output
    });
    this.renderer.setClearColor(this.backgroundColor, 1);
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.dom_element.appendChild(this.renderer.domElement);

    // to let on-top rendering work
    this.renderer.autoClear = false;

    // create a scene
    this.scene = new THREE.Scene();

    // put a camera in the scene
    this.fov = 45;
    const cameraPosition = this.maxVolumeSize;
    const farClipping = cameraPosition * 2;
    const nearClipping = 10;
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.WIDTH / this.HEIGHT,
      nearClipping,
      farClipping
    );

    if (this.showStats) {
      this.stats = new Stats();
      this.stats.showPanel(0);
      this.stats.domElement.style.position = 'absolute';
      this.dom_element.style.position = 'relative';
      this.stats.domElement.style.top = '0px';
      this.stats.domElement.style.zIndex = 100;
      this.dom_element.appendChild(this.stats.dom);
    }

    this.camera.position.z = cameraPosition;

    if (this.showAxes) {
      this.addAxes();
    }

    if (this.flip === true) {
      this.camera.up.setY(-1);
    }

    if (this.swc) {
      const neuron = this.createNeuron(this.swc);
      const boundingBox = calculateBoundingBox(this.swc);
      const boundingSphere = calculateBoundingSphere(this.swc, boundingBox);
      // store neuron status and bounding sphere for later use
      // when resetting the view.
      neuron.isNeuron = true;
      neuron.boundingSphere = boundingSphere;
      this.scene.add(neuron);
    }

    // for elements that may be rendered on top
    this.sceneOnTopable = new THREE.Scene();

    if (this.metadata) {
      const mElement = createMetadataElement(this.metadata, this.colors);
      this.dom_element.appendChild(mElement);
    }

    this.trackControls = new OrbitUnlimitedControls(this.camera, this.dom_element);
    this.trackControls.maxDistance = cameraPosition;
    this.trackControls.minDistance = 15;
    this.trackControls.addEventListener("change", this.render.bind(this));
    // TODO: have a callback here that reports the current position of the
    // camera. That way we can store it in the state and restore from there.
    this.trackControls.addEventListener("change", () => {
      if (this.cameraChangeCallback) {
        const { position: pos } = this.camera;
        this.cameraChangeCallback({ x: pos.x, y: pos.y, z: pos.z });
      }
    });

    this.raycaster.params.Points.threshold = DEFAULT_POINT_THRESHOLD;

    this.dom_element.addEventListener("click", this.onClick.bind(this), true);
  }

  cameraCoords() {
    const { position: pos } = this.camera;
    return { x: pos.x, y: pos.y, z: pos.z };
  }

  cameraTarget() {
    const { target } = this.trackControls;
    return {x: target.x, y: target.y, z: target.z };
  }

  resetView() {
    this.trackControls.reset();
    this.trackControls.update();
    this.camera.up.set(0, this.flip ? -1 : 1, 0);
  }

  restoreView(x = 0, y = 0, z = 0, target) {
    this.trackControls.object.position.set(x, y, z);
    if (target) {
      this.trackControls.target.set(target.x, target.y, target.z);
    }
    this.trackControls.update();
  }

  resetAroundFirstNeuron({frontToBack} = {frontToBack: true}) {
    const neurons = this.scene.children.filter(c => c.isNeuron);
    if (neurons.length > 0) {
      const target = neurons[0].boundingSphere.center;
      const position = calculateCameraPosition(this.fov, neurons[0].boundingSphere, frontToBack, this.maxVolumeSize);
      this.trackControls.update();
      this.trackControls.target.set(target.x, target.y, target.z);
      this.camera.position.set(position.x, position.y, position.z);
      this.camera.up.set(0, this.flip ? -1 : 1, 0);
    }
  }

  // TODO: alt click should target meshes and center the orbit controls
  // on them if intersected.
  onClick(event) {
    const rect = this.dom_element.getBoundingClientRect();

    const mouse = new THREE.Vector2();

    mouse.x = ((event.clientX - rect.left) / this.WIDTH) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / this.HEIGHT) * 2 + 1;

    this.raycaster.setFromCamera(mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(
      [].concat(this.scene.children, this.sceneOnTopable.children),
      true
    );

    const points = intersects
      .filter(o => o.object.type === "Points")
      .filter(o => o.object.userData.materialShader.uniforms.alpha.value > 0.0)
      .sort((a, b) =>
        a.distanceToRay === b.distanceToRay
          ? a.distance - b.distance
          : a.distanceToRay - b.distanceToRay
      );

    if (points.length > 0) {
      const intersectObject = points[0];

      if (event.altKey) {
        if (this.on_toggle_node) {
          const sampleNumber =
            intersectObject.object.userData.indexLookup[intersectObject.index];
          const tracingId = intersectObject.object.parent.name;

          this.on_toggle_node(tracingId, sampleNumber);
        }
      } else {
        if (event.shiftKey && this.trackControls.clicked) {
          this.trackControls.target = points[0].point;
        }

        if (this.on_select_node) {
          const sampleNumber =
            intersectObject.object.userData.indexLookup[intersectObject.index];
          const tracingId = intersectObject.object.parent.name;

          this.on_select_node(tracingId, sampleNumber, event, points[0].point);
        }
      }
    }
  }

  // animation loop
  animate(timestamp = null) {
    if (this.stats) {
      this.stats.begin();
    }
    if (!this.last_anim_timestamp) {
      this.last_anim_timestamp = timestamp;
      if (this.animated) {
        this.render();
      }
    } else if (timestamp - this.last_anim_timestamp > 50) {
      this.last_anim_timestamp = timestamp;
      if (this.animated) {
        this.render();
      }
      this.trackControls.update();
      if (this.showAxes) {
        this.axesCamera.position.copy( this.camera.position );
        this.axesCamera.position.sub( this.trackControls.target );
        this.axesCamera.position.setLength( 300 );
        this.axesCamera.lookAt( this.axesScene.position );
      }
    }
    if (this.stats) {
      this.stats.end();
    }
    window.requestAnimationFrame(this.animate.bind(this));
  }

  // render the scene
  render() {
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    if (this.onTop) {
      this.renderer.clearDepth();
    }

    this.renderer.render(this.sceneOnTopable, this.camera);
    if (this.showAxes) {
      this.axesRenderer.render(this.axesScene, this.axesCamera);
    }
  }

  /**
   * Load a neuron from an swc file into the current scene.
   * @param {string} filename - unique name for the neuron
   * @param {?string} color - hexadecimal string to set the color of the neuron
   * @param {JSON} nodes - JSON string generated from swcParser
   * @param {boolean} [updateCamera=true] - Should the camera position update
   * after the neuron is added to the scene.
   * @param {boolean} [onTopable=false] - If true, the neuron will be rendered
   * on top of (i.e., not occluded by) other neurons that had onTopable=false
   * @param {boolean} [frontToBack=false] - if true, then look down the Z-stack from point 0
   * @returns {null}
   */
  loadNeuron(filename, color, nodes, updateCamera=true, onTopable=false, frontToBack=false) {
    const neuron = this.createNeuron(nodes, color);
    const boundingBox = calculateBoundingBox(nodes);
    const boundingSphere = calculateBoundingSphere(nodes, boundingBox);
    const target = boundingSphere.center;
    const position = calculateCameraPosition(this.fov, boundingSphere, frontToBack, this.maxVolumeSize);

    if (updateCamera) {
      this.trackControls.update();
      this.trackControls.target.set(target.x, target.y, target.z);
      this.camera.position.set(position.x, position.y, position.z);
    }

    neuron.name = filename;
    // store neuron status and bounding sphere for later use
    // when resetting the view.
    neuron.isNeuron = true;
    neuron.boundingSphere = boundingSphere;
    const scene = onTopable ? this.sceneOnTopable : this.scene;
    scene.add(neuron)
  }

  // use onTopable=true to correspond to loadNeuron(..., onTopable=true)
  neuronLoaded(filename, onTopable=false) {
    const scene = onTopable ? this.sceneOnTopable : this.scene;
    return (scene.getObjectByName(filename) !== undefined);
  }

  // use onTopable=true to correspond to loadNeuron(..., onTopable=true)
  unloadNeuron(filename, onTopable=false) {
    const scene = onTopable ? this.sceneOnTopable : this.scene;
    const neuron = scene.getObjectByName(filename);
    scene.remove(neuron);
  }

  setNeuronVisible(id, visible, onTopable=false) {
    const scene = onTopable ? this.sceneOnTopable : this.scene;
    const neuron = scene.getObjectByName(id);
    if (neuron) {
      neuron.visible = visible;
    }
  }

  // TODO: get this to work with the particle mode

  setNeuronDisplayLevel(id, opacity) {
    if (this.mode !== "particle") {
      const neuron = this.scene.getObjectByName(id);

      if (neuron) {
        neuron.children.forEach(child => {
          if (child.userData.materialShader) {
            child.userData.materialShader.uniforms.alpha.value = opacity;
          }
        });
      }
    }
  }

  loadCompartment(id, color, geometryData, updateCamera=true) {
    const loader = new THREE.OBJLoader();
    let parsed = loader.parse(geometryData);
    parsed = applySemiTransparentShader(parsed, color);
    parsed.name = id;

    this.scene.add(parsed);
    if (updateCamera) {
      this.centerCameraAroundCompartment(parsed);
    }
    this.trackControls.update();
    this.render();
  }

  loadCompartmentFromURL(id, color, URL, updateCamera=true) {
    const loader = new THREE.OBJLoader();

    loader.load(URL, object => {
      const exists = this.scene.getObjectByName(id);
      if (!exists) {
        const shadedObject = applySemiTransparentShader(object, color);
        shadedObject.name = id;
        this.scene.add(object);
        if (updateCamera) {
          this.centerCameraAroundCompartment(shadedObject);
        }
      }
    });
  }

  compartmentLoaded(id) {
    return (this.scene.getObjectByName(id) !== undefined);
  }

  /**
   * Given a compartment object, place the camera focus on it.
   * @param {object} compartment - Three object representing the compartment
   * @return null
   */
  centerCameraAroundCompartment(compartment) {
    const boundingBox = new THREE.Box3().setFromObject(compartment);
    this.camera.position.set(boundingBox.min.x - 10, boundingBox.min.y - 10, boundingBox.min.z - 10);
    this.trackControls.update();
    const boxCenter = boundingBox.getCenter();
    this.trackControls.target = boxCenter;
    this.render();
  }

  unloadCompartment(id) {
    const selectedObj = this.scene.getObjectByName(id);
    this.scene.remove(selectedObj);
  }

  setCompartmentVisible(id, visible) {
    const compartment = this.scene.getObjectByName(id);

    if (compartment) {
      compartment.visible = visible;
    }
  }

  setSize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);

    this.HEIGHT = height;
    this.WIDTH = width;
  }

  setBackground(color) {
    this.backgroundColor = color;
    this.renderer.setClearColor(this.backgroundColor, 1);
  }
}
