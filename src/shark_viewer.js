import { NODE_PARTICLE_IMAGE, swc_parser } from "./viewer/util";

const THREE = require("three");
require("three-obj-loader")(THREE);
const OrbitControls = require("ndb-three-orbit-controls")(THREE);

const DEFAULT_POINT_THRESHOLD = 50;
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
    this.swc = {};
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
    this.centerpoint = null;
    this.compartment_path = "allen_horta/obj/";
    this.on_select_node = null;
    this.on_toggle_node = null;
    this.show_stats = false;

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

    this.setValues(args);
    // anything after the above line can not be set by the caller.

    // html element that will receive webgl canvas
    this.dom_element = document.getElementById(args.dom_element || "container");

    // height of canvas
    this.HEIGHT = this.dom_element.clientHeight;
    // width of canvas
    this.WIDTH = this.dom_element.clientWidth;
  }

  // sets up user specified configuration
  setValues(values) {
    if (values === undefined) return;
    for (const key in values) {
      const newValue = values[key];
      if (newValue !== undefined) {
        if (key in this) {
          this[key] = newValue;
        }
      }
    }
  }

  // calculates color based on node type
  nodeColor(node) {
    if (node.type < this.three_colors.length) {
      return this.three_colors[node.type];
    }
    return this.three_colors[0];
  }

  calculateBoundingBox(swcJSON) {
    const boundingBox = {
      xmin: Infinity,
      xmax: -Infinity,
      ymin: Infinity,
      ymax: -Infinity,
      zmin: Infinity,
      zmax: -Infinity
    };

    for (const node in swcJSON) {
      if (swcJSON.hasOwnProperty(node)) {
        if (swcJSON[node].x < boundingBox.xmin) {
          boundingBox.xmin = swcJSON[node].x;
        }
        if (swcJSON[node].x > boundingBox.xmax) {
          boundingBox.xmax = swcJSON[node].x;
        }
        if (swcJSON[node].y < boundingBox.ymin) {
          boundingBox.ymin = swcJSON[node].y;
        }
        if (swcJSON[node].y > boundingBox.ymax) {
          boundingBox.ymax = swcJSON[node].y;
        }
        if (swcJSON[node].z < boundingBox.zmin) {
          boundingBox.zmin = swcJSON[node].z;
        }
        if (swcJSON[node].z > boundingBox.zmax) {
          boundingBox.zmax = swcJSON[node].z;
        }
      }
    }
    return boundingBox;
  }

  // calculates camera position based on bounding box
  calculateCameraPosition(fov, center, boundingBox) {
    const x1 = Math.floor(center[0] - boundingBox.xmin) * 2;
    const x2 = Math.floor(boundingBox.xmax - center[0]) * 2;
    const y1 = Math.floor(center[1] - boundingBox.ymin) * 2;
    const y2 = Math.floor(boundingBox.ymax - center[1]) * 2;
    const maxBoundingBox = Math.max(x1, x2, y1, y2);
    // fudge factor 1.15 to ensure whole neuron fits
    return (
      (maxBoundingBox / (Math.tan((fov * (Math.PI / 180.0)) / 2) * 2)) * 1.15
    );
  }

  createMetadataElement(metadata, colors) {
    function convertToHexColor(i) {
      let result = "#000000";
      if (i >= 0 && i <= 15) {
        result = `#00000${i.toString(16)}`;
      } else if (i >= 16 && i <= 255) {
        result = "#0000" + i.toString(16);
      } else if (i >= 256 && i <= 4095) {
        result = "#000" + i.toString(16);
      } else if (i >= 4096 && i <= 65535) {
        result = "#00" + i.toString(16);
      } else if (i >= 65536 && i <= 1048575) {
        result = "#0" + i.toString(16);
      } else if (i >= 1048576 && i <= 16777215) {
        result = "#" + i.toString(16);
      }
      return result;
    }

    const metadiv = document.createElement("div");
    metadiv.id = "node_key";
    metadiv.style.position = "absolute";
    metadiv.style.top = "0px";
    metadiv.style.right = "10px";
    metadiv.style.border = "solid 1px #aaaaaa";
    metadiv.style.borderRadius = "5px";
    metadiv.style.padding = "2px";

    let toinnerhtml = "";
    metadata.forEach(function(m) {
      const mtype = parseInt(m.type, 10);
      const threeColor = mtype < colors.length ? colors[mtype] : colors[0];
      let css_color = threeColor;
      if (typeof threeColor !== "string")
        css_color = convertToHexColor(threeColor);
      toinnerhtml +=
        "<div><span style='height:10px;width:10px;background:" +
        css_color +
        ";display:inline-block;'></span> : " +
        m.label +
        "</div>";
    });
    metadiv.innerHTML = toinnerhtml;
    return metadiv;
  }

  // generates particle vertices
  generateParticle(node) {
    return new THREE.Vector3(node.x, node.y, node.z);
  }

  // generates skeleton vertices
  generateSkeleton(node, nodeParent) {
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
      image.onload = function() {
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

      for (const node in swcJSON) {
        if (swcJSON.hasOwnProperty(node)) {
          let nodeColor = this.nodeColor(swcJSON[node]);

          if (color) {
            nodeColor = new THREE.Color(color);
          }

          const particleVertex = this.generateParticle(swcJSON[node]);

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
        }
      }
      geometry.addAttribute(
        "position",
        new THREE.Float32BufferAttribute(customAttributes.vertices.value, 3)
      );
      geometry.addAttribute(
        "radius",
        new THREE.Float32BufferAttribute(customAttributes.radius.value, 1)
      );
      geometry.addAttribute(
        "typeColor",
        new THREE.Float32BufferAttribute(customAttributes.typeColor.value, 3)
      );

      material = new THREE.ShaderMaterial({
        uniforms: customUniforms,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragementShader,
        transparent: true,
        alphaTest: 0.5 // if having transparency issues, try including: alphaTest: 0.5,
      });
      material.extensions.fragDepth = true;

      let materialShader = null;

      const particles = new THREE.Points(geometry, material);
      particles.userData = { indexLookup, materialShader };

      material.onBeforeCompile = shader => {
        shader.uniforms.alpha = { value: 0 };
        shader.vertexShader = "uniform float alpha;\n" + shader.vertexShader;
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
        for (const node in swcJSON) {
          if (swcJSON.hasOwnProperty(node)) {
            if (swcJSON[node].parent !== -1) {
              const cnode = swcJSON[node];
              const pnode = swcJSON[swcJSON[node].parent];

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

              let child_radius = cone.child.radius * this.radius_scale_factor;

              if (this.min_radius && child_radius < this.min_radius) {
                child_radius = this.min_radius;
              }

              // vertex 1
              coneAttributes.vertices.value.push(cone.child.vertex.x);
              coneAttributes.vertices.value.push(cone.child.vertex.y);
              coneAttributes.vertices.value.push(cone.child.vertex.z);
              coneAttributes.radius.value.push(child_radius);
              coneAttributes.typeColor.value.push(nodeColor.r);
              coneAttributes.typeColor.value.push(nodeColor.g);
              coneAttributes.typeColor.value.push(nodeColor.b);
              coneAttributes.normals.value.push(cone.normal1.x);
              coneAttributes.normals.value.push(cone.normal1.y);
              coneAttributes.normals.value.push(cone.normal1.z);
              coneAttributes.uv.value.push(uvs[0].x);
              coneAttributes.uv.value.push(uvs[0].y);
              coneAttributes.indices.value.push(ix21);
              ix21++;

              // vertex 2
              coneAttributes.vertices.value.push(cone.child.vertex.x);
              coneAttributes.vertices.value.push(cone.child.vertex.y);
              coneAttributes.vertices.value.push(cone.child.vertex.z);
              coneAttributes.radius.value.push(child_radius);
              coneAttributes.typeColor.value.push(nodeColor.r);
              coneAttributes.typeColor.value.push(nodeColor.g);
              coneAttributes.typeColor.value.push(nodeColor.b);
              coneAttributes.normals.value.push(cone.normal2.x);
              coneAttributes.normals.value.push(cone.normal2.y);
              coneAttributes.normals.value.push(cone.normal2.z);
              coneAttributes.uv.value.push(uvs[1].x);
              coneAttributes.uv.value.push(uvs[1].y);
              coneAttributes.indices.value.push(ix21);
              ix21++;

              // vertex 3
              coneAttributes.vertices.value.push(cone.parent.vertex.x);
              coneAttributes.vertices.value.push(cone.parent.vertex.y);
              coneAttributes.vertices.value.push(cone.parent.vertex.z);
              coneAttributes.radius.value.push(child_radius);
              coneAttributes.typeColor.value.push(nodeColor.r);
              coneAttributes.typeColor.value.push(nodeColor.g);
              coneAttributes.typeColor.value.push(nodeColor.b);
              coneAttributes.normals.value.push(cone.normal2.x);
              coneAttributes.normals.value.push(cone.normal2.y);
              coneAttributes.normals.value.push(cone.normal2.z);
              coneAttributes.uv.value.push(uvs[2].x);
              coneAttributes.uv.value.push(uvs[2].y);
              coneAttributes.indices.value.push(ix21);
              ix21++;

              // Triangle #2
              // Parent
              nodeColor = cone.parent.color;
              if (color) {
                nodeColor = new THREE.Color(color);
              }

              let parentRadius = cone.parent.radius * this.radius_scale_factor;
              if (this.min_radius && parentRadius < this.min_radius) {
                parentRadius = this.min_radius;
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
              ix21++;

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
              ix21++;

              // vertex 3
              coneAttributes.vertices.value.push(cone.child.vertex.x);
              coneAttributes.vertices.value.push(cone.child.vertex.y);
              coneAttributes.vertices.value.push(cone.child.vertex.z);
              coneAttributes.radius.value.push(parentRadius);
              coneAttributes.typeColor.value.push(nodeColor.r);
              coneAttributes.typeColor.value.push(nodeColor.g);
              coneAttributes.typeColor.value.push(nodeColor.b);
              coneAttributes.normals.value.push(cone.normal1.x);
              coneAttributes.normals.value.push(cone.normal1.y);
              coneAttributes.normals.value.push(cone.normal1.z);
              coneAttributes.uv.value.push(uvs[2].x);
              coneAttributes.uv.value.push(uvs[2].y);
              coneAttributes.indices.value.push(ix21);
              ix21++;
            }
          }
        }

        coneGeom.setIndex(
          new THREE.Uint32BufferAttribute(coneAttributes.indices.value, 1)
        );
        coneGeom.addAttribute(
          "position",
          new THREE.Float32BufferAttribute(coneAttributes.vertices.value, 3)
        );
        coneGeom.addAttribute(
          "radius",
          new THREE.Float32BufferAttribute(coneAttributes.radius.value, 1)
        );
        coneGeom.addAttribute(
          "typeColor",
          new THREE.Float32BufferAttribute(coneAttributes.typeColor.value, 3)
        );
        coneGeom.addAttribute(
          "normal",
          new THREE.Float32BufferAttribute(coneAttributes.normals.value, 3)
        );
        coneGeom.addAttribute(
          "uv",
          new THREE.Float32BufferAttribute(coneAttributes.uv.value, 2)
        );

        const coneMaterial = new THREE.ShaderMaterial({
          uniforms: coneUniforms,
          vertexShader: this.vertexShaderCone,
          fragmentShader: this.fragmentShaderCone,
          transparent: true,
          depthTest: true,
          side: THREE.DoubleSide,
          alphaTest: 0.5 // if having transparency issues, try including: alphaTest: 0.5,
        });

        const coneMesh = new THREE.Mesh(coneGeom, coneMaterial);

        coneMaterial.onBeforeCompile = function(shader) {
          // console.log( shader )
          shader.uniforms.alpha = { value: 0 };
          shader.vertexShader = "uniform float alpha;\n" + shader.vertexShader;
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
      for (const node in swcJSON) {
        if (swcJSON.hasOwnProperty(node)) {
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
        }
      }
    }

    if (this.mode === "skeleton" || this.show_cones === false) {
      material = new THREE.LineBasicMaterial({
        color: this.colors[this.colors.length - 1]
      });
      if (this.mode === "skeleton") material.color.set(this.colors[0]);
      geometry = new THREE.Geometry();
      for (const node in swcJSON) {
        if (swcJSON.hasOwnProperty(node)) {
          if (swcJSON[node].parent !== -1) {
            const vertices = this.generateSkeleton(
              swcJSON[node],
              swcJSON[swcJSON[node].parent]
            );
            geometry.vertices.push(vertices.child);
            geometry.vertices.push(vertices.parent);
          }
        }
      }
      const line = new THREE.LineSegments(geometry, material);
      neuron.add(line);
    }
    return neuron;
  }

  // Sets up three.js scene
  init() {

    this.vertexShader = [
      "uniform float particleScale;",
      "attribute float radius;",
      "attribute vec3 typeColor;",
      "//attribute float alpha;",
      "varying vec3 vColor;",
      "// varying vec4 mvPosition;",
      "varying float vAlpha;",
      "void main() ",
      "{",
      "vColor = vec3(typeColor); // set RGB color associated to vertex; use later in fragment shader.",
      "vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);",
      "vAlpha = alpha;",
      "// gl_PointSize = size;",
      "gl_PointSize = radius * ((particleScale*2.0) / length(mvPosition.z));",
      "gl_Position = projectionMatrix * mvPosition;",
      "}"
    ].join("\n");

    this.fragementShader = [
      "uniform sampler2D sphereTexture; // Imposter image of sphere",
      "uniform mat4 projectionMatrix;",
      "varying vec3 vColor; // colors associated to vertices; assigned by vertex shader",
      "//varying vec4 mvPosition;",
      "varying float vAlpha;",
      "void main() ",
      "{",
      "// what part of the sphere image?",
      "vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);",
      "vec4 sphereColors = texture2D(sphereTexture, uv);",
      "// avoid further computation at invisible corners",
      "if (sphereColors.a < 0.3) discard;",
      "if (vAlpha < 0.05) discard;",

      "// calculates a color for the particle",
      "// gl_FragColor = vec4(vColor, 1.0);",
      "// sets a white particle texture to desired color",
      "// gl_FragColor = sqrt(gl_FragColor * texture2D(sphereTexture, uv)) + vec4(0.1, 0.1, 0.1, 0.0);",
      "// red channel contains colorizable sphere image",
      "vec3 baseColor = vColor * sphereColors.r;",
      "// green channel contains (white?) specular highlight",
      "vec3 highlightColor = baseColor + sphereColors.ggg;",
      "gl_FragColor = vec4(highlightColor, sphereColors.a * vAlpha);",
      "// TODO blue channel contains depth offset, but we cannot use gl_FragDepth in webgl?",
      "#ifdef GL_EXT_frag_depth",
      "// gl_FragDepthExt = 0.5;",
      "#endif",
      "}"
    ].join("\n");

    this.vertexShaderCone = [
      "attribute float radius;",
      "attribute vec3 typeColor;",
      "// attribute float alpha;",
      "varying vec3 vColor;",
      "varying vec2 sphereUv;",
      "varying float vAlpha;",
      "void main() ",
      "{",
      "   vAlpha = alpha;",
      "	// TODO - offset cone position for different sphere sizes",
      "	// TODO - implement depth buffer on Chrome",
      "	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);",
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
      "}"
    ].join("\n");

    this.fragmentShaderCone = [
      "uniform sampler2D sphereTexture; // Imposter image of sphere",
      "varying vec3 vColor;",
      "varying vec2 sphereUv;",
      "varying float vAlpha;",
      "void main() ",
      "{",
      "   if (vAlpha < 0.05) discard;",
      "	vec4 sphereColors = texture2D(sphereTexture, sphereUv);",
      "	if (sphereColors.a < 0.3) discard;",
      "	vec3 baseColor = vColor * sphereColors.r;",
      "	vec3 highlightColor = baseColor + sphereColors.ggg;",
      "	gl_FragColor = vec4(highlightColor, sphereColors.a * vAlpha);",
      "}"
    ].join("\n");

    if (this.effect === "noeffect") this.effect = false;

    // set up colors and materials based on color array
    this.three_colors = [];
    for (const color in this.colors) {
      if (this.colors.hasOwnProperty(color)) {
        this.three_colors.push(new THREE.Color(this.colors[color]));
      }
    }
    this.three_materials = [];
    for (const color in this.colors) {
      if (this.colors.hasOwnProperty(color)) {
        this.three_materials.push(
          new THREE.MeshBasicMaterial({ color: this.colors[color] })
        );
      }
    }

    // setup render
    this.renderer = new THREE.WebGLRenderer({
      antialias: true // to get smoother output
    });
    this.renderer.setClearColor(this.backgroundColor, 1);
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.dom_element.appendChild(this.renderer.domElement);

    // create a scene
    this.scene = new THREE.Scene();

    // put a camera in the scene
    this.fov = 45;
    // const cameraPosition = this.calculateCameraPosition(fov);
    const cameraPosition = 2000;
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.WIDTH / this.HEIGHT,
      1,
      cameraPosition
    );
    this.scene.add(this.camera);

    this.camera.position.z = cameraPosition;

    // this.axes = buildAxes(10000);
    // this.scene.add(this.axes);

    if (this.flip === true) {
      this.camera.up.setY(-1);
    }

    const neuron = this.createNeuron(this.swc);
    this.scene.add(neuron);

    // Lights
    // doesn't actually work with any of the current shaders
    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 10000);
    this.scene.add(light);

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, -10000);
    this.scene.add(light);

    if (this.metadata) {
      const mElement = this.createMetadataElement(this.metadata, this.colors);
      this.dom_element.appendChild(mElement);
    }

    this.trackControls = new OrbitControls(
      this.camera,
      this.dom_element
    );
    this.trackControls.addEventListener("change", this.render.bind(this));

    this.raycaster.params.Points.threshold = DEFAULT_POINT_THRESHOLD;
  }

  addEventHandler(handler) {
    this.mouseHandler = handler;
    this.mouseHandler.DomElement = this.dom_element;
    this.mouseHandler.addListeners();
    this.mouseHandler.ClickHandler = this.onClick.bind(this);

    this.mouseHandler.ResetHandler = this.onResetView;
  }

  onResetView(r1, r2) {
    this.trackControls.reset();
    this.trackControls.rotateLeft(r1);
    this.trackControls.rotateUp(r2);
    this.trackControls.update();
  }

  onClick(event) {
    const rect = this.dom_element.getBoundingClientRect();

    const mouse = new THREE.Vector2();

    mouse.x = ((event.clientX - rect.left) / this.WIDTH) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / this.HEIGHT) * 2 + 1;

    this.raycaster.setFromCamera(mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true
    );

    const points = intersects
      .filter(o => o.object.type === "Points")
      .filter(o => o.object.userData.materialShader.uniforms.alpha.value > 0.0)
      .sort((a, b) => {
        return a.distanceToRay === b.distanceToRay
          ? a.distance - b.distance
          : a.distanceToRay - b.distanceToRay;
      });

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
        if (!event.shiftKey && !event.altKey && !event.ctrlKey) {
          this.trackControls.target = points[0].point;

          /*
                    const v1 = points[0].point.clone().project(this.camera);
                    const v2 = this.trackControls.target.clone().project(this.camera);

                    const wx = (v1.x + 1) / 2;
                    const wy = (-v1.y + 1) / 2;

                    const wl = wx * this.WIDTH;
                    const wt = wy * this.HEIGHT;

                    const yx = (v2.x + 1) / 2;
                    const yy = (-v2.y + 1) / 2;

                    const yl = yx * this.WIDTH;
                    const yt = yy * this.HEIGHT;

                    this.trackControls.pan(yl - wl, yt - wt);
                    */
        }

        if (this.on_select_node) {
          const sampleNumber =
            intersectObject.object.userData.indexLookup[intersectObject.index];
          const tracingId = intersectObject.object.parent.name;

          this.on_select_node(tracingId, sampleNumber, event);
        }
      }
    }
  }

  // animation loop
  animate(timestamp = null) {
    if (!this.last_anim_timestamp) {
      this.last_anim_timestamp = timestamp;
      this.render();
    } else if (timestamp - this.last_anim_timestamp > 50) {
      this.last_anim_timestamp = timestamp;
      this.trackControls.update();
      this.render();
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }

  // render the scene
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  loadNeuron(filename, color, nodes) {
    const neuron = this.createNeuron(nodes, color);

    neuron.name = filename;
    this.scene.add(neuron);
    if (this.centerpoint !== null) {
      neuron.position.set(
        -this.centerpoint[0],
        -this.centerpoint[1],
        -this.centerpoint[2]
      );
    }
  }

  unloadNeuron(filename) {
    const neuron = this.scene.getObjectByName(filename);
    this.scene.remove(neuron);
  }

  setNeuronVisible(id, visible) {
    const neuron = this.scene.getObjectByName(id);

    if (neuron) {
      neuron.children.map(c => {
        if (c.userData.materialShader) {
          c.userData.materialShader.uniforms.alpha.value = visible ? 1.0 : 0.0;
        }
      });
    }
  }

  setNeuronDisplayLevel(id, opacity) {
    const neuron = this.scene.getObjectByName(id);

    if (neuron) {
      // neuron.visible = visible;

      neuron.children.map(c => {
        if (c.userData.materialShader) {
          c.userData.materialShader.uniforms.alpha.value = opacity;
        }
      });
    }
  }

  loadCompartment(id, geometryFile, color) {
    const loader = new THREE.OBJLoader();

    const that = this;

    loader.load(this.compartment_path + geometryFile, function(object) {
      object.traverse(function(child) {
        child.material = new THREE.ShaderMaterial({
          uniforms: {
            color: { type: "c", value: new THREE.Color(`#${color}`) }
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

      object.name = id;

      if (that.centerpoint !== null) {
        object.position.set(
          -that.centerpoint[0],
          -that.centerpoint[1],
          -that.centerpoint[2]
        );
      }
      that.scene.add(object);
    });
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
