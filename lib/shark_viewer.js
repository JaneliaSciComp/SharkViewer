var sharkViewer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/shark_viewer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three-obj-loader/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/three-obj-loader/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function defaultOnError(err) {
  throw new Error(err);
}

module.exports = function (THREE) {

  /**
   * @author mrdoob / http://mrdoob.com/
   */

  THREE.OBJLoader = function (manager) {

    this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

    this.materials = null;

    this.regexp = {
      // v float float float
      vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
      // vn float float float
      normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
      // vt float float
      uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
      // f vertex vertex vertex
      face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
      // f vertex/uv vertex/uv vertex/uv
      face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
      // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
      face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
      // f vertex//normal vertex//normal vertex//normal
      face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
      // o object_name | g group_name
      object_pattern: /^[og]\s*(.+)?/,
      // s boolean
      smoothing_pattern: /^s\s+(\d+|on|off)/,
      // mtllib file_reference
      material_library_pattern: /^mtllib /,
      // usemtl material_name
      material_use_pattern: /^usemtl /
    };
  };

  THREE.OBJLoader.prototype = {

    constructor: THREE.OBJLoader,

    load: function load(url, onLoad, onProgress, onError) {

      var scope = this;
      this.onError = onError || defaultOnError;

      var loader = new THREE.FileLoader(scope.manager);
      loader.setPath(this.path);
      loader.load(url, function (text) {

        onLoad(scope.parse(text));
      }, onProgress, onError);
    },

    setPath: function setPath(value) {

      this.path = value;
    },

    setMaterials: function setMaterials(materials) {

      this.materials = materials;
    },

    _createParserState: function _createParserState() {

      var state = {
        objects: [],
        object: {},

        vertices: [],
        normals: [],
        uvs: [],

        materialLibraries: [],

        startObject: function startObject(name, fromDeclaration) {

          // If the current object (initial from reset) is not from a g/o declaration in the parsed
          // file. We need to use it for the first parsed g/o to keep things in sync.
          if (this.object && this.object.fromDeclaration === false) {

            this.object.name = name;
            this.object.fromDeclaration = fromDeclaration !== false;
            return;
          }

          var previousMaterial = this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined;

          if (this.object && typeof this.object._finalize === 'function') {

            this.object._finalize(true);
          }

          this.object = {
            name: name || '',
            fromDeclaration: fromDeclaration !== false,

            geometry: {
              vertices: [],
              normals: [],
              uvs: []
            },
            materials: [],
            smooth: true,

            startMaterial: function startMaterial(name, libraries) {

              var previous = this._finalize(false);

              // New usemtl declaration overwrites an inherited material, except if faces were declared
              // after the material, then it must be preserved for proper MultiMaterial continuation.
              if (previous && (previous.inherited || previous.groupCount <= 0)) {

                this.materials.splice(previous.index, 1);
              }

              var material = {
                index: this.materials.length,
                name: name || '',
                mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : '',
                smooth: previous !== undefined ? previous.smooth : this.smooth,
                groupStart: previous !== undefined ? previous.groupEnd : 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: false,

                clone: function clone(index) {
                  var cloned = {
                    index: typeof index === 'number' ? index : this.index,
                    name: this.name,
                    mtllib: this.mtllib,
                    smooth: this.smooth,
                    groupStart: 0,
                    groupEnd: -1,
                    groupCount: -1,
                    inherited: false
                  };
                  cloned.clone = this.clone.bind(cloned);
                  return cloned;
                }
              };

              this.materials.push(material);

              return material;
            },

            currentMaterial: function currentMaterial() {

              if (this.materials.length > 0) {
                return this.materials[this.materials.length - 1];
              }

              return undefined;
            },

            _finalize: function _finalize(end) {

              var lastMultiMaterial = this.currentMaterial();
              if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {

                lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                lastMultiMaterial.inherited = false;
              }

              // Ignore objects tail materials if no face declarations followed them before a new o/g started.
              if (end && this.materials.length > 1) {

                for (var mi = this.materials.length - 1; mi >= 0; mi--) {
                  if (this.materials[mi].groupCount <= 0) {
                    this.materials.splice(mi, 1);
                  }
                }
              }

              // Guarantee at least one empty material, this makes the creation later more straight forward.
              if (end && this.materials.length === 0) {

                this.materials.push({
                  name: '',
                  smooth: this.smooth
                });
              }

              return lastMultiMaterial;
            }
          };

          // Inherit previous objects material.
          // Spec tells us that a declared material must be set to all objects until a new material is declared.
          // If a usemtl declaration is encountered while this new object is being parsed, it will
          // overwrite the inherited material. Exception being that there was already face declarations
          // to the inherited material, then it will be preserved for proper MultiMaterial continuation.

          if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {

            var declared = previousMaterial.clone(0);
            declared.inherited = true;
            this.object.materials.push(declared);
          }

          this.objects.push(this.object);
        },

        finalize: function finalize() {

          if (this.object && typeof this.object._finalize === 'function') {

            this.object._finalize(true);
          }
        },

        parseVertexIndex: function parseVertexIndex(value, len) {

          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },

        parseNormalIndex: function parseNormalIndex(value, len) {

          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },

        parseUVIndex: function parseUVIndex(value, len) {

          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 2) * 2;
        },

        addVertex: function addVertex(a, b, c) {

          var src = this.vertices;
          var dst = this.object.geometry.vertices;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[b + 2]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
          dst.push(src[c + 2]);
        },

        addVertexLine: function addVertexLine(a) {

          var src = this.vertices;
          var dst = this.object.geometry.vertices;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
        },

        addNormal: function addNormal(a, b, c) {

          var src = this.normals;
          var dst = this.object.geometry.normals;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[b + 2]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
          dst.push(src[c + 2]);
        },

        addUV: function addUV(a, b, c) {

          var src = this.uvs;
          var dst = this.object.geometry.uvs;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
        },

        addUVLine: function addUVLine(a) {

          var src = this.uvs;
          var dst = this.object.geometry.uvs;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
        },

        addFace: function addFace(a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {

          var vLen = this.vertices.length;

          var ia = this.parseVertexIndex(a, vLen);
          var ib = this.parseVertexIndex(b, vLen);
          var ic = this.parseVertexIndex(c, vLen);
          var id;

          if (d === undefined) {

            this.addVertex(ia, ib, ic);
          } else {

            id = this.parseVertexIndex(d, vLen);

            this.addVertex(ia, ib, id);
            this.addVertex(ib, ic, id);
          }

          if (ua !== undefined) {

            var uvLen = this.uvs.length;

            ia = this.parseUVIndex(ua, uvLen);
            ib = this.parseUVIndex(ub, uvLen);
            ic = this.parseUVIndex(uc, uvLen);

            if (d === undefined) {

              this.addUV(ia, ib, ic);
            } else {

              id = this.parseUVIndex(ud, uvLen);

              this.addUV(ia, ib, id);
              this.addUV(ib, ic, id);
            }
          }

          if (na !== undefined) {

            // Normals are many times the same. If so, skip function call and parseInt.
            var nLen = this.normals.length;
            ia = this.parseNormalIndex(na, nLen);

            ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
            ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

            if (d === undefined) {

              this.addNormal(ia, ib, ic);
            } else {

              id = this.parseNormalIndex(nd, nLen);

              this.addNormal(ia, ib, id);
              this.addNormal(ib, ic, id);
            }
          }
        },

        addLineGeometry: function addLineGeometry(vertices, uvs) {

          this.object.geometry.type = 'Line';

          var vLen = this.vertices.length;
          var uvLen = this.uvs.length;

          for (var vi = 0, l = vertices.length; vi < l; vi++) {

            this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
          }

          for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {

            this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
          }
        }

      };

      state.startObject('', false);

      return state;
    },

    parse: function parse(text, debug) {
      if (typeof debug === 'undefined') {
        debug = true;
      }

      if (debug) {
        console.time('OBJLoader');
      }

      var state = this._createParserState();

      if (text.indexOf('\r\n') !== -1) {

        // This is faster than String.split with regex that splits on both
        text = text.replace(/\r\n/g, '\n');
      }

      if (text.indexOf('\\\n') !== -1) {

        // join lines separated by a line continuation character (\)
        text = text.replace(/\\\n/g, '');
      }

      var lines = text.split('\n');
      var line = '',
          lineFirstChar = '',
          lineSecondChar = '';
      var lineLength = 0;
      var result = [];

      // Faster to just trim left side of the line. Use if available.
      var trimLeft = typeof ''.trimLeft === 'function';

      for (var i = 0, l = lines.length; i < l; i++) {

        line = lines[i];

        line = trimLeft ? line.trimLeft() : line.trim();

        lineLength = line.length;

        if (lineLength === 0) continue;

        lineFirstChar = line.charAt(0);

        // @todo invoke passed in handler if any
        if (lineFirstChar === '#') continue;

        if (lineFirstChar === 'v') {

          lineSecondChar = line.charAt(1);

          if (lineSecondChar === ' ' && (result = this.regexp.vertex_pattern.exec(line)) !== null) {

            // 0                  1      2      3
            // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

            state.vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
          } else if (lineSecondChar === 'n' && (result = this.regexp.normal_pattern.exec(line)) !== null) {

            // 0                   1      2      3
            // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

            state.normals.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
          } else if (lineSecondChar === 't' && (result = this.regexp.uv_pattern.exec(line)) !== null) {

            // 0               1      2
            // ["vt 0.1 0.2", "0.1", "0.2"]

            state.uvs.push(parseFloat(result[1]), parseFloat(result[2]));
          } else {

            this.onError("Unexpected vertex/normal/uv line: '" + line + "'");
          }
        } else if (lineFirstChar === "f") {

          if ((result = this.regexp.face_vertex_uv_normal.exec(line)) !== null) {

            // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
            // 0                        1    2    3    4    5    6    7    8    9   10         11         12
            // ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]

            state.addFace(result[1], result[4], result[7], result[10], result[2], result[5], result[8], result[11], result[3], result[6], result[9], result[12]);
          } else if ((result = this.regexp.face_vertex_uv.exec(line)) !== null) {

            // f vertex/uv vertex/uv vertex/uv
            // 0                  1    2    3    4    5    6   7          8
            // ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]

            state.addFace(result[1], result[3], result[5], result[7], result[2], result[4], result[6], result[8]);
          } else if ((result = this.regexp.face_vertex_normal.exec(line)) !== null) {

            // f vertex//normal vertex//normal vertex//normal
            // 0                     1    2    3    4    5    6   7          8
            // ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]

            state.addFace(result[1], result[3], result[5], result[7], undefined, undefined, undefined, undefined, result[2], result[4], result[6], result[8]);
          } else if ((result = this.regexp.face_vertex.exec(line)) !== null) {

            // f vertex vertex vertex
            // 0            1    2    3   4
            // ["f 1 2 3", "1", "2", "3", undefined]

            state.addFace(result[1], result[2], result[3], result[4]);
          } else {

            this.onError("Unexpected face line: '" + line + "'");
          }
        } else if (lineFirstChar === "l") {

          var lineParts = line.substring(1).trim().split(" ");
          var lineVertices = [],
              lineUVs = [];

          if (line.indexOf("/") === -1) {

            lineVertices = lineParts;
          } else {

            for (var li = 0, llen = lineParts.length; li < llen; li++) {

              var parts = lineParts[li].split("/");

              if (parts[0] !== "") lineVertices.push(parts[0]);
              if (parts[1] !== "") lineUVs.push(parts[1]);
            }
          }
          state.addLineGeometry(lineVertices, lineUVs);
        } else if ((result = this.regexp.object_pattern.exec(line)) !== null) {

          // o object_name
          // or
          // g group_name

          // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
          // var name = result[ 0 ].substr( 1 ).trim();
          var name = (" " + result[0].substr(1).trim()).substr(1);

          state.startObject(name);
        } else if (this.regexp.material_use_pattern.test(line)) {

          // material

          state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
        } else if (this.regexp.material_library_pattern.test(line)) {

          // mtl file

          state.materialLibraries.push(line.substring(7).trim());
        } else if ((result = this.regexp.smoothing_pattern.exec(line)) !== null) {

          // smooth shading

          // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
          // but does not define a usemtl for each face set.
          // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
          // This requires some care to not create extra material on each smooth value for "normal" obj files.
          // where explicit usemtl defines geometry groups.
          // Example asset: examples/models/obj/cerberus/Cerberus.obj

          var value = result[1].trim().toLowerCase();
          state.object.smooth = value === '1' || value === 'on';

          var material = state.object.currentMaterial();
          if (material) {

            material.smooth = state.object.smooth;
          }
        } else {

          // Handle null terminated files without exception
          if (line === '\0') continue;

          this.onError("Unexpected line: '" + line + "'");
        }
      }

      state.finalize();

      var container = new THREE.Group();
      container.materialLibraries = [].concat(state.materialLibraries);

      for (var i = 0, l = state.objects.length; i < l; i++) {

        var object = state.objects[i];
        var geometry = object.geometry;
        var materials = object.materials;
        var isLine = geometry.type === 'Line';

        // Skip o/g line declarations that did not follow with any faces
        if (geometry.vertices.length === 0) continue;

        var buffergeometry = new THREE.BufferGeometry();

        buffergeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometry.vertices), 3));

        if (geometry.normals.length > 0) {

          buffergeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(geometry.normals), 3));
        } else {

          buffergeometry.computeVertexNormals();
        }

        if (geometry.uvs.length > 0) {

          buffergeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.uvs), 2));
        }

        // Create materials

        var createdMaterials = [];

        for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

          var sourceMaterial = materials[mi];
          var material = undefined;

          if (this.materials !== null) {

            material = this.materials.create(sourceMaterial.name);

            // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
            if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {

              var materialLine = new THREE.LineBasicMaterial();
              materialLine.copy(material);
              material = materialLine;
            }
          }

          if (!material) {

            material = !isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial();
            material.name = sourceMaterial.name;
          }

          material.shading = sourceMaterial.smooth ? THREE.SmoothShading : THREE.FlatShading;

          createdMaterials.push(material);
        }

        // Create mesh

        var mesh;

        if (createdMaterials.length > 1) {

          for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

            var sourceMaterial = materials[mi];
            buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
          }

          var multiMaterial = new THREE.MultiMaterial(createdMaterials);
          mesh = !isLine ? new THREE.Mesh(buffergeometry, multiMaterial) : new THREE.LineSegments(buffergeometry, multiMaterial);
        } else {

          mesh = !isLine ? new THREE.Mesh(buffergeometry, createdMaterials[0]) : new THREE.LineSegments(buffergeometry, createdMaterials[0]);
        }

        mesh.name = object.name;

        container.add(mesh);
      }

      if (debug) {
        console.timeEnd('OBJLoader');
      }

      return container;
    }

  };
};

/***/ }),

/***/ "./node_modules/three-orbit-controls/index.js":
/*!****************************************************!*\
  !*** ./node_modules/three-orbit-controls/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function( THREE ) {
	/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author erich666 / http://erichaines.com
	 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe

	function OrbitControls( object, domElement ) {

		this.object = object;

		this.domElement = ( domElement !== undefined ) ? domElement : document;

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();

		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = - Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;

		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// Set to false to disable use of the keys
		this.enableKeys = true;

		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		//
		// public methods
		//

		this.getPolarAngle = function () {

			return spherical.phi;

		};

		this.getAzimuthalAngle = function () {

			return spherical.theta;

		};

		this.reset = function () {

			scope.target.copy( scope.target0 );
			scope.object.position.copy( scope.position0 );
			scope.object.zoom = scope.zoom0;

			scope.object.updateProjectionMatrix();
			scope.dispatchEvent( changeEvent );

			scope.update();

			state = STATE.NONE;

		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function() {

			var offset = new THREE.Vector3();

			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
			var quatInverse = quat.clone().inverse();

			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();

			return function update () {

				var position = scope.object.position;

				offset.copy( position ).sub( scope.target );

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion( quat );

				// angle from z-axis around y-axis
				spherical.setFromVector3( offset );

				if ( scope.autoRotate && state === STATE.NONE ) {

					rotateLeft( getAutoRotationAngle() );

				}

				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;

				// restrict theta to be between desired limits
				spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

				// restrict phi to be between desired limits
				spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

				spherical.makeSafe();


				spherical.radius *= scale;

				// restrict radius to be between desired limits
				spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

				// move target to panned location
				scope.target.add( panOffset );

				offset.setFromSpherical( spherical );

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion( quatInverse );

				position.copy( scope.target ).add( offset );

				scope.object.lookAt( scope.target );

				if ( scope.enableDamping === true ) {

					sphericalDelta.theta *= ( 1 - scope.dampingFactor );
					sphericalDelta.phi *= ( 1 - scope.dampingFactor );

				} else {

					sphericalDelta.set( 0, 0, 0 );

				}

				scale = 1;
				panOffset.set( 0, 0, 0 );

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if ( zoomChanged ||
					lastPosition.distanceToSquared( scope.object.position ) > EPS ||
					8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

					scope.dispatchEvent( changeEvent );

					lastPosition.copy( scope.object.position );
					lastQuaternion.copy( scope.object.quaternion );
					zoomChanged = false;

					return true;

				}

				return false;

			};

		}();

		this.dispose = function() {

			scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
			scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
			scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

			scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
			scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
			scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );

			window.removeEventListener( 'keydown', onKeyDown, false );

			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

		};

		//
		// internals
		//

		var scope = this;

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		var STATE = { NONE : - 1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };

		var state = STATE.NONE;

		var EPS = 0.000001;

		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();

		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		function getAutoRotationAngle() {

			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

		}

		function getZoomScale() {

			return Math.pow( 0.95, scope.zoomSpeed );

		}

		function rotateLeft( angle ) {

			sphericalDelta.theta -= angle;

		}

		function rotateUp( angle ) {

			sphericalDelta.phi -= angle;

		}

		var panLeft = function() {

			var v = new THREE.Vector3();

			return function panLeft( distance, objectMatrix ) {

				v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
				v.multiplyScalar( - distance );

				panOffset.add( v );

			};

		}();

		var panUp = function() {

			var v = new THREE.Vector3();

			return function panUp( distance, objectMatrix ) {

				v.setFromMatrixColumn( objectMatrix, 1 ); // get Y column of objectMatrix
				v.multiplyScalar( distance );

				panOffset.add( v );

			};

		}();

		// deltaX and deltaY are in pixels; right and down are positive
		var pan = function() {

			var offset = new THREE.Vector3();

			return function pan ( deltaX, deltaY ) {

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				if ( scope.object instanceof THREE.PerspectiveCamera ) {

					// perspective
					var position = scope.object.position;
					offset.copy( position ).sub( scope.target );
					var targetDistance = offset.length();

					// half of the fov is center to top of screen
					targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

					// we actually don't use screenWidth, since perspective camera is fixed to screen height
					panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
					panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

				} else if ( scope.object instanceof THREE.OrthographicCamera ) {

					// orthographic
					panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
					panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

				} else {

					// camera neither orthographic nor perspective
					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
					scope.enablePan = false;

				}

			};

		}();

		function dollyIn( dollyScale ) {

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				scale /= dollyScale;

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		function dollyOut( dollyScale ) {

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				scale *= dollyScale;

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate( event ) {

			//console.log( 'handleMouseDownRotate' );

			rotateStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownDolly( event ) {

			//console.log( 'handleMouseDownDolly' );

			dollyStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownPan( event ) {

			//console.log( 'handleMouseDownPan' );

			panStart.set( event.clientX, event.clientY );

		}

		function handleMouseMoveRotate( event ) {

			//console.log( 'handleMouseMoveRotate' );

			rotateEnd.set( event.clientX, event.clientY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			// rotating across whole screen goes 360 degrees around
			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleMouseMoveDolly( event ) {

			//console.log( 'handleMouseMoveDolly' );

			dollyEnd.set( event.clientX, event.clientY );

			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				dollyIn( getZoomScale() );

			} else if ( dollyDelta.y < 0 ) {

				dollyOut( getZoomScale() );

			}

			dollyStart.copy( dollyEnd );

			scope.update();

		}

		function handleMouseMovePan( event ) {

			//console.log( 'handleMouseMovePan' );

			panEnd.set( event.clientX, event.clientY );

			panDelta.subVectors( panEnd, panStart );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

			scope.update();

		}

		function handleMouseUp( event ) {

			//console.log( 'handleMouseUp' );

		}

		function handleMouseWheel( event ) {

			//console.log( 'handleMouseWheel' );

			if ( event.deltaY < 0 ) {

				dollyOut( getZoomScale() );

			} else if ( event.deltaY > 0 ) {

				dollyIn( getZoomScale() );

			}

			scope.update();

		}

		function handleKeyDown( event ) {

			//console.log( 'handleKeyDown' );

			switch ( event.keyCode ) {

				case scope.keys.UP:
					pan( 0, scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.BOTTOM:
					pan( 0, - scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.LEFT:
					pan( scope.keyPanSpeed, 0 );
					scope.update();
					break;

				case scope.keys.RIGHT:
					pan( - scope.keyPanSpeed, 0 );
					scope.update();
					break;

			}

		}

		function handleTouchStartRotate( event ) {

			//console.log( 'handleTouchStartRotate' );

			rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		}

		function handleTouchStartDolly( event ) {

			//console.log( 'handleTouchStartDolly' );

			var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
			var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

			var distance = Math.sqrt( dx * dx + dy * dy );

			dollyStart.set( 0, distance );

		}

		function handleTouchStartPan( event ) {

			//console.log( 'handleTouchStartPan' );

			panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		}

		function handleTouchMoveRotate( event ) {

			//console.log( 'handleTouchMoveRotate' );

			rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			// rotating across whole screen goes 360 degrees around
			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleTouchMoveDolly( event ) {

			//console.log( 'handleTouchMoveDolly' );

			var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
			var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

			var distance = Math.sqrt( dx * dx + dy * dy );

			dollyEnd.set( 0, distance );

			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				dollyOut( getZoomScale() );

			} else if ( dollyDelta.y < 0 ) {

				dollyIn( getZoomScale() );

			}

			dollyStart.copy( dollyEnd );

			scope.update();

		}

		function handleTouchMovePan( event ) {

			//console.log( 'handleTouchMovePan' );

			panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

			panDelta.subVectors( panEnd, panStart );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

			scope.update();

		}

		function handleTouchEnd( event ) {

			//console.log( 'handleTouchEnd' );

		}

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onMouseDown( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			if ( event.button === scope.mouseButtons.ORBIT ) {

				if ( scope.enableRotate === false ) return;

				handleMouseDownRotate( event );

				state = STATE.ROTATE;

			} else if ( event.button === scope.mouseButtons.ZOOM ) {

				if ( scope.enableZoom === false ) return;

				handleMouseDownDolly( event );

				state = STATE.DOLLY;

			} else if ( event.button === scope.mouseButtons.PAN ) {

				if ( scope.enablePan === false ) return;

				handleMouseDownPan( event );

				state = STATE.PAN;

			}

			if ( state !== STATE.NONE ) {

				document.addEventListener( 'mousemove', onMouseMove, false );
				document.addEventListener( 'mouseup', onMouseUp, false );

				scope.dispatchEvent( startEvent );

			}

		}

		function onMouseMove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			if ( state === STATE.ROTATE ) {

				if ( scope.enableRotate === false ) return;

				handleMouseMoveRotate( event );

			} else if ( state === STATE.DOLLY ) {

				if ( scope.enableZoom === false ) return;

				handleMouseMoveDolly( event );

			} else if ( state === STATE.PAN ) {

				if ( scope.enablePan === false ) return;

				handleMouseMovePan( event );

			}

		}

		function onMouseUp( event ) {

			if ( scope.enabled === false ) return;

			handleMouseUp( event );

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( endEvent );

			state = STATE.NONE;

		}

		function onMouseWheel( event ) {

			if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

			event.preventDefault();
			event.stopPropagation();

			handleMouseWheel( event );

			scope.dispatchEvent( startEvent ); // not sure why these are here...
			scope.dispatchEvent( endEvent );

		}

		function onKeyDown( event ) {

			if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

			handleKeyDown( event );

		}

		function onTouchStart( event ) {

			if ( scope.enabled === false ) return;

			switch ( event.touches.length ) {

				case 1:	// one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;

					handleTouchStartRotate( event );

					state = STATE.TOUCH_ROTATE;

					break;

				case 2:	// two-fingered touch: dolly

					if ( scope.enableZoom === false ) return;

					handleTouchStartDolly( event );

					state = STATE.TOUCH_DOLLY;

					break;

				case 3: // three-fingered touch: pan

					if ( scope.enablePan === false ) return;

					handleTouchStartPan( event );

					state = STATE.TOUCH_PAN;

					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) {

				scope.dispatchEvent( startEvent );

			}

		}

		function onTouchMove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();
			event.stopPropagation();

			switch ( event.touches.length ) {

				case 1: // one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;
					if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?...

					handleTouchMoveRotate( event );

					break;

				case 2: // two-fingered touch: dolly

					if ( scope.enableZoom === false ) return;
					if ( state !== STATE.TOUCH_DOLLY ) return; // is this needed?...

					handleTouchMoveDolly( event );

					break;

				case 3: // three-fingered touch: pan

					if ( scope.enablePan === false ) return;
					if ( state !== STATE.TOUCH_PAN ) return; // is this needed?...

					handleTouchMovePan( event );

					break;

				default:

					state = STATE.NONE;

			}

		}

		function onTouchEnd( event ) {

			if ( scope.enabled === false ) return;

			handleTouchEnd( event );

			scope.dispatchEvent( endEvent );

			state = STATE.NONE;

		}

		function onContextMenu( event ) {

			event.preventDefault();

		}

		//

		scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

		scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

		window.addEventListener( 'keydown', onKeyDown, false );

		// force an update at start

		this.update();

	};

	OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
	OrbitControls.prototype.constructor = OrbitControls;

	Object.defineProperties( OrbitControls.prototype, {

		center: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
				return this.target;

			}

		},

		// backward compatibility

		noZoom: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				return ! this.enableZoom;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				this.enableZoom = ! value;

			}

		},

		noRotate: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				return ! this.enableRotate;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				this.enableRotate = ! value;

			}

		},

		noPan: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				return ! this.enablePan;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				this.enablePan = ! value;

			}

		},

		noKeys: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				return ! this.enableKeys;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				this.enableKeys = ! value;

			}

		},

		staticMoving : {

			get: function () {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				return ! this.enableDamping;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				this.enableDamping = ! value;

			}

		},

		dynamicDampingFactor : {

			get: function () {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				return this.dampingFactor;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				this.dampingFactor = value;

			}

		}

	} );

	return OrbitControls;
};


/***/ }),

/***/ "./src/shark_viewer.js":
/*!*****************************!*\
  !*** ./src/shark_viewer.js ***!
  \*****************************/
/*! exports provided: swcParser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SharkViewer; });
/* harmony import */ var _viewer_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer/util */ "./src/viewer/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swcParser", function() { return _viewer_util__WEBPACK_IMPORTED_MODULE_0__["swcParser"]; });





const THREE = __webpack_require__(/*! three */ "three");
__webpack_require__(/*! three-obj-loader */ "./node_modules/three-obj-loader/dist/index.js")(THREE);
const OrbitControls = __webpack_require__(/*! three-orbit-controls */ "./node_modules/three-orbit-controls/index.js")(THREE);

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

function calculateCameraPosition(fov, boundingSphere) {
  const theta = (fov * (Math.PI / 180.0)) / 2.0;
  const d = boundingSphere.radius / Math.sin(theta);
  const { center } = boundingSphere;
  return new THREE.Vector3(center.x, center.y, center.z + d);
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


class SharkViewer {
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
    this.on_select_node = null;
    this.on_toggle_node = null;
    this.show_stats = false;
    this.animated = false;
    this.three = THREE;

    this.showAxes = false;
    this.show_cones = true;
    this.brainboundingbox = null;
    this.last_anim_timestamp = null;
    this.mouseHandler = null;
    this.nodeParticleTexture = _viewer_util__WEBPACK_IMPORTED_MODULE_0__["NODE_PARTICLE_IMAGE"];
    this.min_radius = null;
    this.raycaster = new THREE.Raycaster();
    this.trackControls = null;
    this.backgroundColor = 0xffffff;
    this.renderer = null;
    this.camera = null;
    this.cameraChangeCallback = null;
    this.onTop = false;

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
    this.renderer = new THREE.WebGLRenderer({
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
    const cameraPosition = 100000;
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.WIDTH / this.HEIGHT,
      1,
      cameraPosition
    );

    this.camera.position.z = cameraPosition;

    if (this.showAxes) {
      this.axes = new THREE.AxisHelper(this.showAxes);
      this.scene.add(this.axes);
    }

    if (this.flip === true) {
      this.camera.up.setY(-1);
    }

    const neuron = this.createNeuron(this.swc);
    this.scene.add(neuron);

    // for elements that may be rendered on top
    this.sceneOnTopable = new THREE.Scene();

    if (this.metadata) {
      const mElement = createMetadataElement(this.metadata, this.colors);
      this.dom_element.appendChild(mElement);
    }

    this.trackControls = new OrbitControls(this.camera, this.dom_element);
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
  }

  restoreView(x = 0, y = 0, z = 0, target) {
    this.trackControls.object.position.set(x, y, z);
    if (target) {
      this.trackControls.target.set(target.x, target.y, target.z);
    }
    this.trackControls.update();
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
        if (event.shiftKey) {
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
  }

  // onTopable=true means that setValues({ onTop: true }) will make
  // the neuron be rendered on top of (i.e., not occluded by) other neurons
  // that had onTopable=false
  loadNeuron(filename, color, nodes, updateCamera=true, onTopable=false) {
    const neuron = this.createNeuron(nodes, color);
    const boundingBox = calculateBoundingBox(nodes);
    const boundingSphere = calculateBoundingSphere(nodes, boundingBox);
    const target = boundingSphere.center;
    const position = calculateCameraPosition(this.fov, boundingSphere);

    if (updateCamera) {
      this.camera.position.set(position.x, position.y, position.z);
      this.trackControls.update();
      this.trackControls.target.set(target.x, target.y, target.z);
    }

    neuron.name = filename;
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
        object = applySemiTransparentShader(object, color);
        object.name = id;
        this.scene.add(object);
        if (updateCamera) {
          this.centerCameraAroundCompartment(object);
        }
      }
    });
  }

  compartmentLoaded(id) {
    return (this.scene.getObjectByName(id) !== undefined);
  }

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


/***/ }),

/***/ "./src/viewer/util.js":
/*!****************************!*\
  !*** ./src/viewer/util.js ***!
  \****************************/
/*! exports provided: swcParser, NODE_PARTICLE_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swcParser", function() { return swcParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_PARTICLE_IMAGE", function() { return NODE_PARTICLE_IMAGE; });
// Convert swc file data into json object
function swcParser(swcFile) {
  // split by lines
  const swcAr = swcFile.split("\n");
  const swcJSON = {};

  const float = "-?\\d*(?:\\.\\d+)?";
  const pattern = new RegExp(
    "^[ \\t]*(" +
      [
        "\\d+", // index
        "\\d+", // type
        float, // x
        float, // y
        float, // z
        float, // radius
        "-1|\\d+" // parent
      ].join(")[ \\t]+(") +
      ")[ \\t]*$",
    "m"
  );

  swcAr.forEach(e => {
    // if line is good, put into json
    const match = e.match(pattern);
    if (match) {
      const id = parseInt(match[1], 10);

      swcJSON[id] = {
        id,
        type: parseInt(match[2], 10),
        x: parseFloat(match[3]),
        y: parseFloat(match[4]),
        z: parseFloat(match[5]),
        radius: parseFloat(match[6]),
        parent: parseInt(match[7], 10)
      };
    }
  });

  // return json
  return swcJSON;
}

const NODE_PARTICLE_IMAGE =
  "data:image/png;base64,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";


/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = THREE;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFya1ZpZXdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy90aHJlZS1vYmotbG9hZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvdGhyZWUtb3JiaXQtY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9zcmMvc2hhcmtfdmlld2VyLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vc3JjL3ZpZXdlci91dGlsLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyL2V4dGVybmFsIFwiVEhSRUVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTs7QUFFdkQ7QUFDQTs7QUFFQSwyQ0FBMkMsU0FBUzs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTzs7QUFFOUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVgscURBQXFELFdBQVc7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxPQUFPOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQWtELFlBQVk7O0FBRTlEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG9EQUFvRCxZQUFZOztBQUVo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QUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdEQUFnRDs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwrQ0FBK0M7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7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QTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25yQ0E7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVPO0FBQ1Asa0JBQWtCOzs7Ozs7Ozs7Ozs7QUM3Q2xCLHVCIiwiZmlsZSI6InNoYXJrX3ZpZXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NoYXJrX3ZpZXdlci5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZGVmYXVsdE9uRXJyb3IoZXJyKSB7XG4gIHRocm93IG5ldyBFcnJvcihlcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUSFJFRSkge1xuXG4gIC8qKlxuICAgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICAgKi9cblxuICBUSFJFRS5PQkpMb2FkZXIgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuXG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlciAhPT0gdW5kZWZpbmVkID8gbWFuYWdlciA6IFRIUkVFLkRlZmF1bHRMb2FkaW5nTWFuYWdlcjtcblxuICAgIHRoaXMubWF0ZXJpYWxzID0gbnVsbDtcblxuICAgIHRoaXMucmVnZXhwID0ge1xuICAgICAgLy8gdiBmbG9hdCBmbG9hdCBmbG9hdFxuICAgICAgdmVydGV4X3BhdHRlcm46IC9edlxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyB2biBmbG9hdCBmbG9hdCBmbG9hdFxuICAgICAgbm9ybWFsX3BhdHRlcm46IC9edm5cXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKVxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKykvLFxuICAgICAgLy8gdnQgZmxvYXQgZmxvYXRcbiAgICAgIHV2X3BhdHRlcm46IC9ednRcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyBmIHZlcnRleCB2ZXJ0ZXggdmVydGV4XG4gICAgICBmYWNlX3ZlcnRleDogL15mXFxzKygtP1xcZCspXFxzKygtP1xcZCspXFxzKygtP1xcZCspKD86XFxzKygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvdXYgdmVydGV4L3V2IHZlcnRleC91dlxuICAgICAgZmFjZV92ZXJ0ZXhfdXY6IC9eZlxccysoLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvdXYvbm9ybWFsIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbFxuICAgICAgZmFjZV92ZXJ0ZXhfdXZfbm9ybWFsOiAvXmZcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvL25vcm1hbCB2ZXJ0ZXgvL25vcm1hbCB2ZXJ0ZXgvL25vcm1hbFxuICAgICAgZmFjZV92ZXJ0ZXhfbm9ybWFsOiAvXmZcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspXFxzKygtP1xcZCspXFwvXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKSk/LyxcbiAgICAgIC8vIG8gb2JqZWN0X25hbWUgfCBnIGdyb3VwX25hbWVcbiAgICAgIG9iamVjdF9wYXR0ZXJuOiAvXltvZ11cXHMqKC4rKT8vLFxuICAgICAgLy8gcyBib29sZWFuXG4gICAgICBzbW9vdGhpbmdfcGF0dGVybjogL15zXFxzKyhcXGQrfG9ufG9mZikvLFxuICAgICAgLy8gbXRsbGliIGZpbGVfcmVmZXJlbmNlXG4gICAgICBtYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm46IC9ebXRsbGliIC8sXG4gICAgICAvLyB1c2VtdGwgbWF0ZXJpYWxfbmFtZVxuICAgICAgbWF0ZXJpYWxfdXNlX3BhdHRlcm46IC9edXNlbXRsIC9cbiAgICB9O1xuICB9O1xuXG4gIFRIUkVFLk9CSkxvYWRlci5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvcjogVEhSRUUuT0JKTG9hZGVyLFxuXG4gICAgbG9hZDogZnVuY3Rpb24gbG9hZCh1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvcikge1xuXG4gICAgICB2YXIgc2NvcGUgPSB0aGlzO1xuICAgICAgdGhpcy5vbkVycm9yID0gb25FcnJvciB8fCBkZWZhdWx0T25FcnJvcjtcblxuICAgICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5GaWxlTG9hZGVyKHNjb3BlLm1hbmFnZXIpO1xuICAgICAgbG9hZGVyLnNldFBhdGgodGhpcy5wYXRoKTtcbiAgICAgIGxvYWRlci5sb2FkKHVybCwgZnVuY3Rpb24gKHRleHQpIHtcblxuICAgICAgICBvbkxvYWQoc2NvcGUucGFyc2UodGV4dCkpO1xuICAgICAgfSwgb25Qcm9ncmVzcywgb25FcnJvcik7XG4gICAgfSxcblxuICAgIHNldFBhdGg6IGZ1bmN0aW9uIHNldFBhdGgodmFsdWUpIHtcblxuICAgICAgdGhpcy5wYXRoID0gdmFsdWU7XG4gICAgfSxcblxuICAgIHNldE1hdGVyaWFsczogZnVuY3Rpb24gc2V0TWF0ZXJpYWxzKG1hdGVyaWFscykge1xuXG4gICAgICB0aGlzLm1hdGVyaWFscyA9IG1hdGVyaWFscztcbiAgICB9LFxuXG4gICAgX2NyZWF0ZVBhcnNlclN0YXRlOiBmdW5jdGlvbiBfY3JlYXRlUGFyc2VyU3RhdGUoKSB7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgb2JqZWN0czogW10sXG4gICAgICAgIG9iamVjdDoge30sXG5cbiAgICAgICAgdmVydGljZXM6IFtdLFxuICAgICAgICBub3JtYWxzOiBbXSxcbiAgICAgICAgdXZzOiBbXSxcblxuICAgICAgICBtYXRlcmlhbExpYnJhcmllczogW10sXG5cbiAgICAgICAgc3RhcnRPYmplY3Q6IGZ1bmN0aW9uIHN0YXJ0T2JqZWN0KG5hbWUsIGZyb21EZWNsYXJhdGlvbikge1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgb2JqZWN0IChpbml0aWFsIGZyb20gcmVzZXQpIGlzIG5vdCBmcm9tIGEgZy9vIGRlY2xhcmF0aW9uIGluIHRoZSBwYXJzZWRcbiAgICAgICAgICAvLyBmaWxlLiBXZSBuZWVkIHRvIHVzZSBpdCBmb3IgdGhlIGZpcnN0IHBhcnNlZCBnL28gdG8ga2VlcCB0aGluZ3MgaW4gc3luYy5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LmZyb21EZWNsYXJhdGlvbiA9IGZyb21EZWNsYXJhdGlvbiAhPT0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHByZXZpb3VzTWF0ZXJpYWwgPSB0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsID09PSAnZnVuY3Rpb24nID8gdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdHlwZW9mIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5fZmluYWxpemUodHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vYmplY3QgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lIHx8ICcnLFxuICAgICAgICAgICAgZnJvbURlY2xhcmF0aW9uOiBmcm9tRGVjbGFyYXRpb24gIT09IGZhbHNlLFxuXG4gICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgICAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgICAgICAgICB1dnM6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF0ZXJpYWxzOiBbXSxcbiAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcblxuICAgICAgICAgICAgc3RhcnRNYXRlcmlhbDogZnVuY3Rpb24gc3RhcnRNYXRlcmlhbChuYW1lLCBsaWJyYXJpZXMpIHtcblxuICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSB0aGlzLl9maW5hbGl6ZShmYWxzZSk7XG5cbiAgICAgICAgICAgICAgLy8gTmV3IHVzZW10bCBkZWNsYXJhdGlvbiBvdmVyd3JpdGVzIGFuIGluaGVyaXRlZCBtYXRlcmlhbCwgZXhjZXB0IGlmIGZhY2VzIHdlcmUgZGVjbGFyZWRcbiAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIG1hdGVyaWFsLCB0aGVuIGl0IG11c3QgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG4gICAgICAgICAgICAgIGlmIChwcmV2aW91cyAmJiAocHJldmlvdXMuaW5oZXJpdGVkIHx8IHByZXZpb3VzLmdyb3VwQ291bnQgPD0gMCkpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnNwbGljZShwcmV2aW91cy5pbmRleCwgMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8ICcnLFxuICAgICAgICAgICAgICAgIG10bGxpYjogQXJyYXkuaXNBcnJheShsaWJyYXJpZXMpICYmIGxpYnJhcmllcy5sZW5ndGggPiAwID8gbGlicmFyaWVzW2xpYnJhcmllcy5sZW5ndGggLSAxXSA6ICcnLFxuICAgICAgICAgICAgICAgIHNtb290aDogcHJldmlvdXMgIT09IHVuZGVmaW5lZCA/IHByZXZpb3VzLnNtb290aCA6IHRoaXMuc21vb3RoLFxuICAgICAgICAgICAgICAgIGdyb3VwU3RhcnQ6IHByZXZpb3VzICE9PSB1bmRlZmluZWQgPyBwcmV2aW91cy5ncm91cEVuZCA6IDAsXG4gICAgICAgICAgICAgICAgZ3JvdXBFbmQ6IC0xLFxuICAgICAgICAgICAgICAgIGdyb3VwQ291bnQ6IC0xLFxuICAgICAgICAgICAgICAgIGluaGVyaXRlZDogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG10bGxpYjogdGhpcy5tdGxsaWIsXG4gICAgICAgICAgICAgICAgICAgIHNtb290aDogdGhpcy5zbW9vdGgsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwU3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRW5kOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb3VudDogLTEsXG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBjbG9uZWQuY2xvbmUgPSB0aGlzLmNsb25lLmJpbmQoY2xvbmVkKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBtYXRlcmlhbDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGN1cnJlbnRNYXRlcmlhbDogZnVuY3Rpb24gY3VycmVudE1hdGVyaWFsKCkge1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxzW3RoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9maW5hbGl6ZTogZnVuY3Rpb24gX2ZpbmFsaXplKGVuZCkge1xuXG4gICAgICAgICAgICAgIHZhciBsYXN0TXVsdGlNYXRlcmlhbCA9IHRoaXMuY3VycmVudE1hdGVyaWFsKCk7XG4gICAgICAgICAgICAgIGlmIChsYXN0TXVsdGlNYXRlcmlhbCAmJiBsYXN0TXVsdGlNYXRlcmlhbC5ncm91cEVuZCA9PT0gLTEpIHtcblxuICAgICAgICAgICAgICAgIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID0gdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGggLyAzO1xuICAgICAgICAgICAgICAgIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwQ291bnQgPSBsYXN0TXVsdGlNYXRlcmlhbC5ncm91cEVuZCAtIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwU3RhcnQ7XG4gICAgICAgICAgICAgICAgbGFzdE11bHRpTWF0ZXJpYWwuaW5oZXJpdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZ25vcmUgb2JqZWN0cyB0YWlsIG1hdGVyaWFscyBpZiBubyBmYWNlIGRlY2xhcmF0aW9ucyBmb2xsb3dlZCB0aGVtIGJlZm9yZSBhIG5ldyBvL2cgc3RhcnRlZC5cbiAgICAgICAgICAgICAgaWYgKGVuZCAmJiB0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtaSA9IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDE7IG1pID49IDA7IG1pLS0pIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsc1ttaV0uZ3JvdXBDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnNwbGljZShtaSwgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gR3VhcmFudGVlIGF0IGxlYXN0IG9uZSBlbXB0eSBtYXRlcmlhbCwgdGhpcyBtYWtlcyB0aGUgY3JlYXRpb24gbGF0ZXIgbW9yZSBzdHJhaWdodCBmb3J3YXJkLlxuICAgICAgICAgICAgICBpZiAoZW5kICYmIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgIHNtb290aDogdGhpcy5zbW9vdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBsYXN0TXVsdGlNYXRlcmlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSW5oZXJpdCBwcmV2aW91cyBvYmplY3RzIG1hdGVyaWFsLlxuICAgICAgICAgIC8vIFNwZWMgdGVsbHMgdXMgdGhhdCBhIGRlY2xhcmVkIG1hdGVyaWFsIG11c3QgYmUgc2V0IHRvIGFsbCBvYmplY3RzIHVudGlsIGEgbmV3IG1hdGVyaWFsIGlzIGRlY2xhcmVkLlxuICAgICAgICAgIC8vIElmIGEgdXNlbXRsIGRlY2xhcmF0aW9uIGlzIGVuY291bnRlcmVkIHdoaWxlIHRoaXMgbmV3IG9iamVjdCBpcyBiZWluZyBwYXJzZWQsIGl0IHdpbGxcbiAgICAgICAgICAvLyBvdmVyd3JpdGUgdGhlIGluaGVyaXRlZCBtYXRlcmlhbC4gRXhjZXB0aW9uIGJlaW5nIHRoYXQgdGhlcmUgd2FzIGFscmVhZHkgZmFjZSBkZWNsYXJhdGlvbnNcbiAgICAgICAgICAvLyB0byB0aGUgaW5oZXJpdGVkIG1hdGVyaWFsLCB0aGVuIGl0IHdpbGwgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG5cbiAgICAgICAgICBpZiAocHJldmlvdXNNYXRlcmlhbCAmJiBwcmV2aW91c01hdGVyaWFsLm5hbWUgJiYgdHlwZW9mIHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICB2YXIgZGVjbGFyZWQgPSBwcmV2aW91c01hdGVyaWFsLmNsb25lKDApO1xuICAgICAgICAgICAgZGVjbGFyZWQuaW5oZXJpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0Lm1hdGVyaWFscy5wdXNoKGRlY2xhcmVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9iamVjdHMucHVzaCh0aGlzLm9iamVjdCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuXG4gICAgICAgICAgaWYgKHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5fZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICAgICAgdGhpcy5vYmplY3QuX2ZpbmFsaXplKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZVZlcnRleEluZGV4OiBmdW5jdGlvbiBwYXJzZVZlcnRleEluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAzKSAqIDM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VOb3JtYWxJbmRleDogZnVuY3Rpb24gcGFyc2VOb3JtYWxJbmRleCh2YWx1ZSwgbGVuKSB7XG5cbiAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgIHJldHVybiAoaW5kZXggPj0gMCA/IGluZGV4IC0gMSA6IGluZGV4ICsgbGVuIC8gMykgKiAzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlVVZJbmRleDogZnVuY3Rpb24gcGFyc2VVVkluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAyKSAqIDI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmVydGV4OiBmdW5jdGlvbiBhZGRWZXJ0ZXgoYSwgYiwgYykge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgICAgdmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnZlcnRpY2VzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAyXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmVydGV4TGluZTogZnVuY3Rpb24gYWRkVmVydGV4TGluZShhKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGROb3JtYWw6IGZ1bmN0aW9uIGFkZE5vcm1hbChhLCBiLCBjKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy5ub3JtYWxzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS5ub3JtYWxzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAyXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVVY6IGZ1bmN0aW9uIGFkZFVWKGEsIGIsIGMpIHtcblxuICAgICAgICAgIHZhciBzcmMgPSB0aGlzLnV2cztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudXZzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVVZMaW5lOiBmdW5jdGlvbiBhZGRVVkxpbmUoYSkge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudXZzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRGYWNlOiBmdW5jdGlvbiBhZGRGYWNlKGEsIGIsIGMsIGQsIHVhLCB1YiwgdWMsIHVkLCBuYSwgbmIsIG5jLCBuZCkge1xuXG4gICAgICAgICAgdmFyIHZMZW4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICAgIHZhciBpYSA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleChhLCB2TGVuKTtcbiAgICAgICAgICB2YXIgaWIgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoYiwgdkxlbik7XG4gICAgICAgICAgdmFyIGljID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KGMsIHZMZW4pO1xuICAgICAgICAgIHZhciBpZDtcblxuICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWEsIGliLCBpYyk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWQgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoZCwgdkxlbik7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KGlhLCBpYiwgaWQpO1xuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWIsIGljLCBpZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHVhICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgdmFyIHV2TGVuID0gdGhpcy51dnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBpYSA9IHRoaXMucGFyc2VVVkluZGV4KHVhLCB1dkxlbik7XG4gICAgICAgICAgICBpYiA9IHRoaXMucGFyc2VVVkluZGV4KHViLCB1dkxlbik7XG4gICAgICAgICAgICBpYyA9IHRoaXMucGFyc2VVVkluZGV4KHVjLCB1dkxlbik7XG5cbiAgICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICB0aGlzLmFkZFVWKGlhLCBpYiwgaWMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VVVkluZGV4KHVkLCB1dkxlbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGRVVihpYSwgaWIsIGlkKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRVVihpYiwgaWMsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmEgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAvLyBOb3JtYWxzIGFyZSBtYW55IHRpbWVzIHRoZSBzYW1lLiBJZiBzbywgc2tpcCBmdW5jdGlvbiBjYWxsIGFuZCBwYXJzZUludC5cbiAgICAgICAgICAgIHZhciBuTGVuID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGlhID0gdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5hLCBuTGVuKTtcblxuICAgICAgICAgICAgaWIgPSBuYSA9PT0gbmIgPyBpYSA6IHRoaXMucGFyc2VOb3JtYWxJbmRleChuYiwgbkxlbik7XG4gICAgICAgICAgICBpYyA9IG5hID09PSBuYyA/IGlhIDogdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5jLCBuTGVuKTtcblxuICAgICAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgIHRoaXMuYWRkTm9ybWFsKGlhLCBpYiwgaWMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VOb3JtYWxJbmRleChuZCwgbkxlbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGROb3JtYWwoaWEsIGliLCBpZCk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkTm9ybWFsKGliLCBpYywgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZGRMaW5lR2VvbWV0cnk6IGZ1bmN0aW9uIGFkZExpbmVHZW9tZXRyeSh2ZXJ0aWNlcywgdXZzKSB7XG5cbiAgICAgICAgICB0aGlzLm9iamVjdC5nZW9tZXRyeS50eXBlID0gJ0xpbmUnO1xuXG4gICAgICAgICAgdmFyIHZMZW4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgICB2YXIgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKHZhciB2aSA9IDAsIGwgPSB2ZXJ0aWNlcy5sZW5ndGg7IHZpIDwgbDsgdmkrKykge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleExpbmUodGhpcy5wYXJzZVZlcnRleEluZGV4KHZlcnRpY2VzW3ZpXSwgdkxlbikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIHV2aSA9IDAsIGwgPSB1dnMubGVuZ3RoOyB1dmkgPCBsOyB1dmkrKykge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFVWTGluZSh0aGlzLnBhcnNlVVZJbmRleCh1dnNbdXZpXSwgdXZMZW4pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfTtcblxuICAgICAgc3RhdGUuc3RhcnRPYmplY3QoJycsIGZhbHNlKTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodGV4dCwgZGVidWcpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVidWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlYnVnID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZSgnT0JKTG9hZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX2NyZWF0ZVBhcnNlclN0YXRlKCk7XG5cbiAgICAgIGlmICh0ZXh0LmluZGV4T2YoJ1xcclxcbicpICE9PSAtMSkge1xuXG4gICAgICAgIC8vIFRoaXMgaXMgZmFzdGVyIHRoYW4gU3RyaW5nLnNwbGl0IHdpdGggcmVnZXggdGhhdCBzcGxpdHMgb24gYm90aFxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHJcXG4vZywgJ1xcbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGV4dC5pbmRleE9mKCdcXFxcXFxuJykgIT09IC0xKSB7XG5cbiAgICAgICAgLy8gam9pbiBsaW5lcyBzZXBhcmF0ZWQgYnkgYSBsaW5lIGNvbnRpbnVhdGlvbiBjaGFyYWN0ZXIgKFxcKVxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFxcXFxuL2csICcnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgbGluZSA9ICcnLFxuICAgICAgICAgIGxpbmVGaXJzdENoYXIgPSAnJyxcbiAgICAgICAgICBsaW5lU2Vjb25kQ2hhciA9ICcnO1xuICAgICAgdmFyIGxpbmVMZW5ndGggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAvLyBGYXN0ZXIgdG8ganVzdCB0cmltIGxlZnQgc2lkZSBvZiB0aGUgbGluZS4gVXNlIGlmIGF2YWlsYWJsZS5cbiAgICAgIHZhciB0cmltTGVmdCA9IHR5cGVvZiAnJy50cmltTGVmdCA9PT0gJ2Z1bmN0aW9uJztcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblxuICAgICAgICBsaW5lID0gbGluZXNbaV07XG5cbiAgICAgICAgbGluZSA9IHRyaW1MZWZ0ID8gbGluZS50cmltTGVmdCgpIDogbGluZS50cmltKCk7XG5cbiAgICAgICAgbGluZUxlbmd0aCA9IGxpbmUubGVuZ3RoO1xuXG4gICAgICAgIGlmIChsaW5lTGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICBsaW5lRmlyc3RDaGFyID0gbGluZS5jaGFyQXQoMCk7XG5cbiAgICAgICAgLy8gQHRvZG8gaW52b2tlIHBhc3NlZCBpbiBoYW5kbGVyIGlmIGFueVxuICAgICAgICBpZiAobGluZUZpcnN0Q2hhciA9PT0gJyMnKSBjb250aW51ZTtcblxuICAgICAgICBpZiAobGluZUZpcnN0Q2hhciA9PT0gJ3YnKSB7XG5cbiAgICAgICAgICBsaW5lU2Vjb25kQ2hhciA9IGxpbmUuY2hhckF0KDEpO1xuXG4gICAgICAgICAgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAnICcgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLnZlcnRleF9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAxICAgICAgMiAgICAgIDNcbiAgICAgICAgICAgIC8vIFtcInYgMS4wIDIuMCAzLjBcIiwgXCIxLjBcIiwgXCIyLjBcIiwgXCIzLjBcIl1cblxuICAgICAgICAgICAgc3RhdGUudmVydGljZXMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSwgcGFyc2VGbG9hdChyZXN1bHRbM10pKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAnbicgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLm5vcm1hbF9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAgMSAgICAgIDIgICAgICAzXG4gICAgICAgICAgICAvLyBbXCJ2biAxLjAgMi4wIDMuMFwiLCBcIjEuMFwiLCBcIjIuMFwiLCBcIjMuMFwiXVxuXG4gICAgICAgICAgICBzdGF0ZS5ub3JtYWxzLnB1c2gocGFyc2VGbG9hdChyZXN1bHRbMV0pLCBwYXJzZUZsb2F0KHJlc3VsdFsyXSksIHBhcnNlRmxvYXQocmVzdWx0WzNdKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5lU2Vjb25kQ2hhciA9PT0gJ3QnICYmIChyZXN1bHQgPSB0aGlzLnJlZ2V4cC51dl9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAxICAgICAgMlxuICAgICAgICAgICAgLy8gW1widnQgMC4xIDAuMlwiLCBcIjAuMVwiLCBcIjAuMlwiXVxuXG4gICAgICAgICAgICBzdGF0ZS51dnMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5vbkVycm9yKFwiVW5leHBlY3RlZCB2ZXJ0ZXgvbm9ybWFsL3V2IGxpbmU6ICdcIiArIGxpbmUgKyBcIidcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxpbmVGaXJzdENoYXIgPT09IFwiZlwiKSB7XG5cbiAgICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X3V2X25vcm1hbC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsXG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICAgNyAgICA4ICAgIDkgICAxMCAgICAgICAgIDExICAgICAgICAgMTJcbiAgICAgICAgICAgIC8vIFtcImYgMS8xLzEgMi8yLzIgMy8zLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjFcIiwgXCIyXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFs0XSwgcmVzdWx0WzddLCByZXN1bHRbMTBdLCByZXN1bHRbMl0sIHJlc3VsdFs1XSwgcmVzdWx0WzhdLCByZXN1bHRbMTFdLCByZXN1bHRbM10sIHJlc3VsdFs2XSwgcmVzdWx0WzldLCByZXN1bHRbMTJdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5mYWNlX3ZlcnRleF91di5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC91diB2ZXJ0ZXgvdXYgdmVydGV4L3V2XG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICA3ICAgICAgICAgIDhcbiAgICAgICAgICAgIC8vIFtcImYgMS8xIDIvMiAzLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbM10sIHJlc3VsdFs1XSwgcmVzdWx0WzddLCByZXN1bHRbMl0sIHJlc3VsdFs0XSwgcmVzdWx0WzZdLCByZXN1bHRbOF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X25vcm1hbC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsXG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICA3ICAgICAgICAgIDhcbiAgICAgICAgICAgIC8vIFtcImYgMS8vMSAyLy8yIDMvLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbM10sIHJlc3VsdFs1XSwgcmVzdWx0WzddLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc3VsdFsyXSwgcmVzdWx0WzRdLCByZXN1bHRbNl0sIHJlc3VsdFs4XSk7XG4gICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuZmFjZV92ZXJ0ZXguZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gZiB2ZXJ0ZXggdmVydGV4IHZlcnRleFxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgIDEgICAgMiAgICAzICAgNFxuICAgICAgICAgICAgLy8gW1wiZiAxIDIgM1wiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbMl0sIHJlc3VsdFszXSwgcmVzdWx0WzRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIGZhY2UgbGluZTogJ1wiICsgbGluZSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZUZpcnN0Q2hhciA9PT0gXCJsXCIpIHtcblxuICAgICAgICAgIHZhciBsaW5lUGFydHMgPSBsaW5lLnN1YnN0cmluZygxKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIHZhciBsaW5lVmVydGljZXMgPSBbXSxcbiAgICAgICAgICAgICAgbGluZVVWcyA9IFtdO1xuXG4gICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZihcIi9cIikgPT09IC0xKSB7XG5cbiAgICAgICAgICAgIGxpbmVWZXJ0aWNlcyA9IGxpbmVQYXJ0cztcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBsaSA9IDAsIGxsZW4gPSBsaW5lUGFydHMubGVuZ3RoOyBsaSA8IGxsZW47IGxpKyspIHtcblxuICAgICAgICAgICAgICB2YXIgcGFydHMgPSBsaW5lUGFydHNbbGldLnNwbGl0KFwiL1wiKTtcblxuICAgICAgICAgICAgICBpZiAocGFydHNbMF0gIT09IFwiXCIpIGxpbmVWZXJ0aWNlcy5wdXNoKHBhcnRzWzBdKTtcbiAgICAgICAgICAgICAgaWYgKHBhcnRzWzFdICE9PSBcIlwiKSBsaW5lVVZzLnB1c2gocGFydHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZS5hZGRMaW5lR2VvbWV0cnkobGluZVZlcnRpY2VzLCBsaW5lVVZzKTtcbiAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAub2JqZWN0X3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIC8vIG8gb2JqZWN0X25hbWVcbiAgICAgICAgICAvLyBvclxuICAgICAgICAgIC8vIGcgZ3JvdXBfbmFtZVxuXG4gICAgICAgICAgLy8gV09SS0FST1VORDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Mjg2OVxuICAgICAgICAgIC8vIHZhciBuYW1lID0gcmVzdWx0WyAwIF0uc3Vic3RyKCAxICkudHJpbSgpO1xuICAgICAgICAgIHZhciBuYW1lID0gKFwiIFwiICsgcmVzdWx0WzBdLnN1YnN0cigxKS50cmltKCkpLnN1YnN0cigxKTtcblxuICAgICAgICAgIHN0YXRlLnN0YXJ0T2JqZWN0KG5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVnZXhwLm1hdGVyaWFsX3VzZV9wYXR0ZXJuLnRlc3QobGluZSkpIHtcblxuICAgICAgICAgIC8vIG1hdGVyaWFsXG5cbiAgICAgICAgICBzdGF0ZS5vYmplY3Quc3RhcnRNYXRlcmlhbChsaW5lLnN1YnN0cmluZyg3KS50cmltKCksIHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlZ2V4cC5tYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm4udGVzdChsaW5lKSkge1xuXG4gICAgICAgICAgLy8gbXRsIGZpbGVcblxuICAgICAgICAgIHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzLnB1c2gobGluZS5zdWJzdHJpbmcoNykudHJpbSgpKTtcbiAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuc21vb3RoaW5nX3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIC8vIHNtb290aCBzaGFkaW5nXG5cbiAgICAgICAgICAvLyBAdG9kbyBIYW5kbGUgZmlsZXMgdGhhdCBoYXZlIHZhcnlpbmcgc21vb3RoIHZhbHVlcyBmb3IgYSBzZXQgb2YgZmFjZXMgaW5zaWRlIG9uZSBnZW9tZXRyeSxcbiAgICAgICAgICAvLyBidXQgZG9lcyBub3QgZGVmaW5lIGEgdXNlbXRsIGZvciBlYWNoIGZhY2Ugc2V0LlxuICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGRldGVjdGVkIGFuZCBhIGR1bW15IG1hdGVyaWFsIGNyZWF0ZWQgKGxhdGVyIE11bHRpTWF0ZXJpYWwgYW5kIGdlb21ldHJ5IGdyb3VwcykuXG4gICAgICAgICAgLy8gVGhpcyByZXF1aXJlcyBzb21lIGNhcmUgdG8gbm90IGNyZWF0ZSBleHRyYSBtYXRlcmlhbCBvbiBlYWNoIHNtb290aCB2YWx1ZSBmb3IgXCJub3JtYWxcIiBvYmogZmlsZXMuXG4gICAgICAgICAgLy8gd2hlcmUgZXhwbGljaXQgdXNlbXRsIGRlZmluZXMgZ2VvbWV0cnkgZ3JvdXBzLlxuICAgICAgICAgIC8vIEV4YW1wbGUgYXNzZXQ6IGV4YW1wbGVzL21vZGVscy9vYmovY2VyYmVydXMvQ2VyYmVydXMub2JqXG5cbiAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHRbMV0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgc3RhdGUub2JqZWN0LnNtb290aCA9IHZhbHVlID09PSAnMScgfHwgdmFsdWUgPT09ICdvbic7XG5cbiAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSBzdGF0ZS5vYmplY3QuY3VycmVudE1hdGVyaWFsKCk7XG4gICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG5cbiAgICAgICAgICAgIG1hdGVyaWFsLnNtb290aCA9IHN0YXRlLm9iamVjdC5zbW9vdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gSGFuZGxlIG51bGwgdGVybWluYXRlZCBmaWxlcyB3aXRob3V0IGV4Y2VwdGlvblxuICAgICAgICAgIGlmIChsaW5lID09PSAnXFwwJykgY29udGludWU7XG5cbiAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIGxpbmU6ICdcIiArIGxpbmUgKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhdGUuZmluYWxpemUoKTtcblxuICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgY29udGFpbmVyLm1hdGVyaWFsTGlicmFyaWVzID0gW10uY29uY2F0KHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGF0ZS5vYmplY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXG4gICAgICAgIHZhciBvYmplY3QgPSBzdGF0ZS5vYmplY3RzW2ldO1xuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBvYmplY3QuZ2VvbWV0cnk7XG4gICAgICAgIHZhciBtYXRlcmlhbHMgPSBvYmplY3QubWF0ZXJpYWxzO1xuICAgICAgICB2YXIgaXNMaW5lID0gZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmUnO1xuXG4gICAgICAgIC8vIFNraXAgby9nIGxpbmUgZGVjbGFyYXRpb25zIHRoYXQgZGlkIG5vdCBmb2xsb3cgd2l0aCBhbnkgZmFjZXNcbiAgICAgICAgaWYgKGdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgdmFyIGJ1ZmZlcmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cbiAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS52ZXJ0aWNlcyksIDMpKTtcblxuICAgICAgICBpZiAoZ2VvbWV0cnkubm9ybWFscy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICBidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS5ub3JtYWxzKSwgMykpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZW9tZXRyeS51dnMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkQXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS51dnMpLCAyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgbWF0ZXJpYWxzXG5cbiAgICAgICAgdmFyIGNyZWF0ZWRNYXRlcmlhbHMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBtaSA9IDAsIG1pTGVuID0gbWF0ZXJpYWxzLmxlbmd0aDsgbWkgPCBtaUxlbjsgbWkrKykge1xuXG4gICAgICAgICAgdmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcbiAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFscy5jcmVhdGUoc291cmNlTWF0ZXJpYWwubmFtZSk7XG5cbiAgICAgICAgICAgIC8vIG10bCBldGMuIGxvYWRlcnMgcHJvYmFibHkgY2FuJ3QgY3JlYXRlIGxpbmUgbWF0ZXJpYWxzIGNvcnJlY3RseSwgY29weSBwcm9wZXJ0aWVzIHRvIGEgbGluZSBtYXRlcmlhbC5cbiAgICAgICAgICAgIGlmIChpc0xpbmUgJiYgbWF0ZXJpYWwgJiYgIShtYXRlcmlhbCBpbnN0YW5jZW9mIFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKSkge1xuXG4gICAgICAgICAgICAgIHZhciBtYXRlcmlhbExpbmUgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgICAgbWF0ZXJpYWxMaW5lLmNvcHkobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICBtYXRlcmlhbCA9IG1hdGVyaWFsTGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG5cbiAgICAgICAgICAgIG1hdGVyaWFsID0gIWlzTGluZSA/IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpIDogbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKCk7XG4gICAgICAgICAgICBtYXRlcmlhbC5uYW1lID0gc291cmNlTWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXRlcmlhbC5zaGFkaW5nID0gc291cmNlTWF0ZXJpYWwuc21vb3RoID8gVEhSRUUuU21vb3RoU2hhZGluZyA6IFRIUkVFLkZsYXRTaGFkaW5nO1xuXG4gICAgICAgICAgY3JlYXRlZE1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBtZXNoXG5cbiAgICAgICAgdmFyIG1lc2g7XG5cbiAgICAgICAgaWYgKGNyZWF0ZWRNYXRlcmlhbHMubGVuZ3RoID4gMSkge1xuXG4gICAgICAgICAgZm9yICh2YXIgbWkgPSAwLCBtaUxlbiA9IG1hdGVyaWFscy5sZW5ndGg7IG1pIDwgbWlMZW47IG1pKyspIHtcblxuICAgICAgICAgICAgdmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcbiAgICAgICAgICAgIGJ1ZmZlcmdlb21ldHJ5LmFkZEdyb3VwKHNvdXJjZU1hdGVyaWFsLmdyb3VwU3RhcnQsIHNvdXJjZU1hdGVyaWFsLmdyb3VwQ291bnQsIG1pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbXVsdGlNYXRlcmlhbCA9IG5ldyBUSFJFRS5NdWx0aU1hdGVyaWFsKGNyZWF0ZWRNYXRlcmlhbHMpO1xuICAgICAgICAgIG1lc2ggPSAhaXNMaW5lID8gbmV3IFRIUkVFLk1lc2goYnVmZmVyZ2VvbWV0cnksIG11bHRpTWF0ZXJpYWwpIDogbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhidWZmZXJnZW9tZXRyeSwgbXVsdGlNYXRlcmlhbCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBtZXNoID0gIWlzTGluZSA/IG5ldyBUSFJFRS5NZXNoKGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzWzBdKSA6IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzaC5uYW1lID0gb2JqZWN0Lm5hbWU7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZChtZXNoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgnT0JKTG9hZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIFRIUkVFICkge1xuXHQvKipcblx0ICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cblx0ICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuXHQgKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuXHQgKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcblx0ICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuXHQgKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuXHRmdW5jdGlvbiBPcmJpdENvbnRyb2xzKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdFx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0XHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluWm9vbSA9IDA7XG5cdFx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdFx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdFx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdFx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdFx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0XHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdFx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHRcdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdFx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHRcdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHRcdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdFx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHRcdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0XHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdFx0Ly8gTW91c2UgYnV0dG9uc1xuXHRcdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0XHQvLyBmb3IgcmVzZXRcblx0XHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHRcdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0XHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHRcdC8vXG5cdFx0Ly8gcHVibGljIG1ldGhvZHNcblx0XHQvL1xuXG5cdFx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH07XG5cblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjYWxlID0gMTtcblx0XHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdFx0fTtcblxuXHRcdC8vXG5cdFx0Ly8gaW50ZXJuYWxzXG5cdFx0Ly9cblxuXHRcdHZhciBzY29wZSA9IHRoaXM7XG5cblx0XHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdFx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0XHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0XHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0XHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdFx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0XHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHRcdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHRcdHZhciBzY2FsZSA9IDE7XG5cdFx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHRcdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0fTtcblxuXHRPcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblx0T3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcmJpdENvbnRyb2xzO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBPcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdFx0Y2VudGVyOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRub1pvb206IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9Sb3RhdGU6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9QYW46IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9LZXlzOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0gKTtcblxuXHRyZXR1cm4gT3JiaXRDb250cm9scztcbn07XG4iLCJpbXBvcnQgeyBOT0RFX1BBUlRJQ0xFX0lNQUdFLCBzd2NQYXJzZXIgfSBmcm9tIFwiLi92aWV3ZXIvdXRpbFwiO1xuXG5leHBvcnQgeyBzd2NQYXJzZXIgfTtcblxuY29uc3QgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XG5yZXF1aXJlKFwidGhyZWUtb2JqLWxvYWRlclwiKShUSFJFRSk7XG5jb25zdCBPcmJpdENvbnRyb2xzID0gcmVxdWlyZShcInRocmVlLW9yYml0LWNvbnRyb2xzXCIpKFRIUkVFKTtcblxuY29uc3QgREVGQVVMVF9QT0lOVF9USFJFU0hPTEQgPSA1MDtcblxuY29uc3QgdmVydGV4U2hhZGVyID0gW1xuICBcInVuaWZvcm0gZmxvYXQgcGFydGljbGVTY2FsZTtcIixcbiAgXCJhdHRyaWJ1dGUgZmxvYXQgcmFkaXVzO1wiLFxuICBcImF0dHJpYnV0ZSB2ZWMzIHR5cGVDb2xvcjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzMgdkNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjNCBtdlBvc2l0aW9uO1wiLFxuICBcInZhcnlpbmcgZmxvYXQgdlJhZGl1cztcIixcbiAgXCJ2b2lkIG1haW4oKSBcIixcbiAgXCJ7XCIsXG4gIFwidkNvbG9yID0gdmVjMyh0eXBlQ29sb3IpOyAvLyBzZXQgUkdCIGNvbG9yIGFzc29jaWF0ZWQgdG8gdmVydGV4OyB1c2UgbGF0ZXIgaW4gZnJhZ21lbnQgc2hhZGVyLlwiLFxuICBcIm12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1wiLFxuXG4gIFwiLy8gZ2xfUG9pbnRTaXplID0gc2l6ZTtcIixcbiAgXCJnbF9Qb2ludFNpemUgPSByYWRpdXMgKiAoKHBhcnRpY2xlU2NhbGUqMi4wKSAvIGxlbmd0aChtdlBvc2l0aW9uLnopKTtcIixcbiAgXCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1wiLFxuICBcInZSYWRpdXMgPSByYWRpdXM7XCIsXG4gIFwifVwiXG5dLmpvaW4oXCJcXG5cIik7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gW1xuICBcInVuaWZvcm0gc2FtcGxlcjJEIHNwaGVyZVRleHR1cmU7IC8vIEltcG9zdGVyIGltYWdlIG9mIHNwaGVyZVwiLFxuICBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7IC8vIGNvbG9ycyBhc3NvY2lhdGVkIHRvIHZlcnRpY2VzOyBhc3NpZ25lZCBieSB2ZXJ0ZXggc2hhZGVyXCIsXG4gIFwidmFyeWluZyB2ZWM0IG12UG9zaXRpb247XCIsXG4gIFwidmFyeWluZyBmbG9hdCB2UmFkaXVzO1wiLFxuICBcInZvaWQgbWFpbigpIFwiLFxuICBcIntcIixcbiAgXCIvLyB3aGF0IHBhcnQgb2YgdGhlIHNwaGVyZSBpbWFnZT9cIixcbiAgXCJ2ZWMyIHV2ID0gdmVjMihnbF9Qb2ludENvb3JkLngsIDEuMCAtIGdsX1BvaW50Q29vcmQueSk7XCIsXG4gIFwidmVjNCBzcGhlcmVDb2xvcnMgPSB0ZXh0dXJlMkQoc3BoZXJlVGV4dHVyZSwgdXYpO1wiLFxuICBcIi8vIGF2b2lkIGZ1cnRoZXIgY29tcHV0YXRpb24gYXQgaW52aXNpYmxlIGNvcm5lcnNcIixcbiAgXCJpZiAoc3BoZXJlQ29sb3JzLmEgPCAwLjMpIGRpc2NhcmQ7XCIsXG5cbiAgXCIvLyBjYWxjdWxhdGVzIGEgY29sb3IgZm9yIHRoZSBwYXJ0aWNsZVwiLFxuICBcIi8vIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG9yLCAxLjApO1wiLFxuICBcIi8vIHNldHMgYSB3aGl0ZSBwYXJ0aWNsZSB0ZXh0dXJlIHRvIGRlc2lyZWQgY29sb3JcIixcbiAgXCIvLyBnbF9GcmFnQ29sb3IgPSBzcXJ0KGdsX0ZyYWdDb2xvciAqIHRleHR1cmUyRChzcGhlcmVUZXh0dXJlLCB1dikpICsgdmVjNCgwLjEsIDAuMSwgMC4xLCAwLjApO1wiLFxuICBcIi8vIHJlZCBjaGFubmVsIGNvbnRhaW5zIGNvbG9yaXphYmxlIHNwaGVyZSBpbWFnZVwiLFxuICBcInZlYzMgYmFzZUNvbG9yID0gdkNvbG9yICogc3BoZXJlQ29sb3JzLnI7XCIsXG4gIFwiLy8gZ3JlZW4gY2hhbm5lbCBjb250YWlucyAod2hpdGU/KSBzcGVjdWxhciBoaWdobGlnaHRcIixcbiAgXCJ2ZWMzIGhpZ2hsaWdodENvbG9yID0gYmFzZUNvbG9yICsgc3BoZXJlQ29sb3JzLmdnZztcIixcbiAgXCJnbF9GcmFnQ29sb3IgPSB2ZWM0KGhpZ2hsaWdodENvbG9yLCBzcGhlcmVDb2xvcnMuYSk7XCIsXG4gIFwiLy8gVE9ETyBibHVlIGNoYW5uZWwgY29udGFpbnMgZGVwdGggb2Zmc2V0LCBidXQgd2UgY2Fubm90IHVzZSBnbF9GcmFnRGVwdGggaW4gd2ViZ2w/XCIsXG4gIFwiI2lmZGVmIEdMX0VYVF9mcmFnX2RlcHRoXCIsXG4gIFwiZmxvYXQgZmFyID0gZ2xfRGVwdGhSYW5nZS5mYXI7IGZsb2F0IG5lYXIgPSBnbF9EZXB0aFJhbmdlLm5lYXI7XCIsXG4gIFwiZmxvYXQgZHogPSBzcGhlcmVDb2xvcnMuYiAqIHZSYWRpdXM7XCIsXG4gIFwidmVjNCBjbGlwUG9zID0gcHJvamVjdGlvbk1hdHJpeCAqIChtdlBvc2l0aW9uICsgdmVjNCgwLCAwLCBkeiwgMCkpO1wiLFxuICBcImZsb2F0IG5kY19kZXB0aCA9IGNsaXBQb3Muei9jbGlwUG9zLnc7XCIsXG4gIFwiZmxvYXQgZGVwdGggPSAoKChmYXItbmVhcikgKiBuZGNfZGVwdGgpICsgbmVhciArIGZhcikgLyAyLjA7XCIsXG4gIFwiZ2xfRnJhZ0RlcHRoRVhUID0gZGVwdGg7XCIsXG4gIFwiI2VuZGlmXCIsXG4gIFwifVwiXG5dLmpvaW4oXCJcXG5cIik7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyQW5ub3RhdGlvbiA9IFtcbiAgXCJ1bmlmb3JtIHNhbXBsZXIyRCBzcGhlcmVUZXh0dXJlOyAvLyBJbXBvc3RlciBpbWFnZSBvZiBzcGhlcmVcIixcbiAgXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcIixcbiAgXCJ2YXJ5aW5nIHZlYzMgdkNvbG9yOyAvLyBjb2xvcnMgYXNzb2NpYXRlZCB0byB2ZXJ0aWNlczsgYXNzaWduZWQgYnkgdmVydGV4IHNoYWRlclwiLFxuICBcInZhcnlpbmcgdmVjNCBtdlBvc2l0aW9uO1wiLFxuICBcInZhcnlpbmcgZmxvYXQgdlJhZGl1cztcIixcbiAgXCJ2b2lkIG1haW4oKSBcIixcbiAgXCJ7XCIsXG4gIFwiLy8gd2hhdCBwYXJ0IG9mIHRoZSBzcGhlcmUgaW1hZ2U/XCIsXG4gIFwidmVjMiB1diA9IHZlYzIoZ2xfUG9pbnRDb29yZC54LCAxLjAgLSBnbF9Qb2ludENvb3JkLnkpO1wiLFxuICBcInZlYzQgc3BoZXJlQ29sb3JzID0gdGV4dHVyZTJEKHNwaGVyZVRleHR1cmUsIHV2KTtcIixcbiAgXCIvLyBhdm9pZCBmdXJ0aGVyIGNvbXB1dGF0aW9uIGF0IGludmlzaWJsZSBjb3JuZXJzXCIsXG4gIFwiaWYgKHNwaGVyZUNvbG9ycy5hIDwgMC4zKSBkaXNjYXJkO1wiLFxuXG4gIFwiLy8gY2FsY3VsYXRlcyBhIGNvbG9yIGZvciB0aGUgcGFydGljbGVcIixcbiAgXCIvLyBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvciwgMS4wKTtcIixcbiAgXCIvLyBzZXRzIGEgd2hpdGUgcGFydGljbGUgdGV4dHVyZSB0byBkZXNpcmVkIGNvbG9yXCIsXG4gIFwiLy8gZ2xfRnJhZ0NvbG9yID0gc3FydChnbF9GcmFnQ29sb3IgKiB0ZXh0dXJlMkQoc3BoZXJlVGV4dHVyZSwgdXYpKSArIHZlYzQoMC4xLCAwLjEsIDAuMSwgMC4wKTtcIixcbiAgXCIvLyByZWQgY2hhbm5lbCBjb250YWlucyBjb2xvcml6YWJsZSBzcGhlcmUgaW1hZ2VcIixcbiAgXCJ2ZWMzIGJhc2VDb2xvciA9IHZDb2xvciAqIHNwaGVyZUNvbG9ycy5yO1wiLFxuICBcIi8vIGdyZWVuIGNoYW5uZWwgY29udGFpbnMgKHdoaXRlPykgc3BlY3VsYXIgaGlnaGxpZ2h0XCIsXG4gIFwiZ2xfRnJhZ0NvbG9yID0gdmVjNChiYXNlQ29sb3IsIHNwaGVyZUNvbG9ycy5hKTtcIixcbiAgXCIvLyBUT0RPIGJsdWUgY2hhbm5lbCBjb250YWlucyBkZXB0aCBvZmZzZXQsIGJ1dCB3ZSBjYW5ub3QgdXNlIGdsX0ZyYWdEZXB0aCBpbiB3ZWJnbD9cIixcbiAgXCIjaWZkZWYgR0xfRVhUX2ZyYWdfZGVwdGhcIixcbiAgXCJmbG9hdCBmYXIgPSBnbF9EZXB0aFJhbmdlLmZhcjsgZmxvYXQgbmVhciA9IGdsX0RlcHRoUmFuZ2UubmVhcjtcIixcbiAgXCJmbG9hdCBkeiA9IHNwaGVyZUNvbG9ycy5iICogdlJhZGl1cztcIixcbiAgXCJ2ZWM0IGNsaXBQb3MgPSBwcm9qZWN0aW9uTWF0cml4ICogKG12UG9zaXRpb24gKyB2ZWM0KDAsIDAsIGR6LCAwKSk7XCIsXG4gIFwiZmxvYXQgbmRjX2RlcHRoID0gY2xpcFBvcy56L2NsaXBQb3MudztcIixcbiAgXCJmbG9hdCBkZXB0aCA9ICgoKGZhci1uZWFyKSAqIG5kY19kZXB0aCkgKyBuZWFyICsgZmFyKSAvIDIuMDtcIixcbiAgXCJnbF9GcmFnRGVwdGhFWFQgPSBkZXB0aDtcIixcbiAgXCIjZW5kaWZcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuY29uc3QgdmVydGV4U2hhZGVyQ29uZSA9IFtcbiAgXCJhdHRyaWJ1dGUgZmxvYXQgcmFkaXVzO1wiLFxuICBcImF0dHJpYnV0ZSB2ZWMzIHR5cGVDb2xvcjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzMgdkNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjMiBzcGhlcmVVdjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzQgbXZQb3NpdGlvbjtcIixcbiAgXCJ2YXJ5aW5nIGZsb2F0IGRlcHRoU2NhbGU7XCIsXG4gIFwidm9pZCBtYWluKCkgXCIsXG4gIFwie1wiLFxuICBcIlx0Ly8gVE9ETyAtIG9mZnNldCBjb25lIHBvc2l0aW9uIGZvciBkaWZmZXJlbnQgc3BoZXJlIHNpemVzXCIsXG4gIFwiXHQvLyBUT0RPIC0gaW1wbGVtZW50IGRlcHRoIGJ1ZmZlciBvbiBDaHJvbWVcIixcbiAgXCJcdG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1wiLFxuICBcIlx0Ly8gRXhwYW5kIHF1YWRyaWxhdGVyYWwgcGVycGVuZGljdWxhciB0byBib3RoIHZpZXcvc2NyZWVuIGRpcmVjdGlvbiBhbmQgY29uZSBheGlzXCIsXG4gIFwiXHR2ZWMzIGN5bEF4aXMgPSAobW9kZWxWaWV3TWF0cml4ICogdmVjNChub3JtYWwsIDAuMCkpLnh5ejsgLy8gY29udmVydCBjb25lIGF4aXMgdG8gY2FtZXJhIHNwYWNlXCIsXG4gIFwiXHR2ZWMzIHNpZGVEaXIgPSBub3JtYWxpemUoY3Jvc3ModmVjMygwLjAsMC4wLC0xLjApLCBjeWxBeGlzKSk7XCIsXG4gIFwiXHRtdlBvc2l0aW9uICs9IHZlYzQocmFkaXVzICogc2lkZURpciwgMC4wKTtcIixcbiAgXCJcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XCIsXG4gIFwiXHQvLyBQYXNzIGFuZCBpbnRlcnBvbGF0ZSBjb2xvclwiLFxuICBcIlx0dkNvbG9yID0gdHlwZUNvbG9yO1wiLFxuICBcIlx0Ly8gVGV4dHVyZSBjb29yZGluYXRlc1wiLFxuICBcIlx0c3BoZXJlVXYgPSB1diAtIHZlYzIoMC41LCAwLjUpOyAvLyBtYXAgZnJvbSBbMCwxXSByYW5nZSB0byBbLS41LC41XSwgYmVmb3JlIHJvdGF0aW9uXCIsXG4gICdcdC8vIElmIHNpZGVEaXIgaXMgXCJ1cFwiIG9uIHNjcmVlbiwgbWFrZSBzdXJlIHUgaXMgcG9zaXRpdmUnLFxuICBcIlx0ZmxvYXQgcSA9IHNpZGVEaXIueSAqIHNwaGVyZVV2Lnk7XCIsXG4gIFwiXHRzcGhlcmVVdi55ID0gc2lnbihxKSAqIHNwaGVyZVV2Lnk7XCIsXG4gIFwiXHQvLyByb3RhdGUgdGV4dHVyZSBjb29yZGluYXRlcyB0byBtYXRjaCBjb25lIG9yaWVudGF0aW9uIGFib3V0IHpcIixcbiAgXCJcdGZsb2F0IGFuZ2xlID0gYXRhbihzaWRlRGlyLngvc2lkZURpci55KTtcIixcbiAgXCJcdGZsb2F0IGMgPSBjb3MoYW5nbGUpO1wiLFxuICBcIlx0ZmxvYXQgcyA9IHNpbihhbmdsZSk7XCIsXG4gIFwiXHRtYXQyIHJvdE1hdCA9IG1hdDIoXCIsXG4gIFwiXHRcdGMsIC1zLCBcIixcbiAgXCJcdFx0cywgIGMpO1wiLFxuICBcIlx0c3BoZXJlVXYgPSByb3RNYXQgKiBzcGhlcmVVdjtcIixcbiAgXCJcdHNwaGVyZVV2ICs9IHZlYzIoMC41LCAwLjUpOyAvLyBtYXAgYmFjayBmcm9tIFstLjUsLjVdID0+IFswLDFdXCIsXG4gIFwiXHQvLyBXZSBhcmUgcGFpbnRpbmcgYW4gYW5nbGVkIGNvbmUgb250byBhIGZsYXQgcXVhZCwgc28gZGVwdGggY29ycmVjdGlvbiBpcyBjb21wbGljYXRlZFwiLFxuICBcIiAgIGZsb2F0IGZvcmVzaG9ydGVuaW5nID0gbGVuZ3RoKGN5bEF4aXMpIC8gbGVuZ3RoKGN5bEF4aXMueHkpOyAvLyBjb3JyZWN0IGRlcHRoIGZvciBmb3Jlc2hvcnRlbmluZ1wiLFxuICBcIiAgIC8vIGZvcmVzaG9ydGVuaW5nIGxpbWl0IGlzIGEgdHJhZGVvZmYgYmV0d2VlbiBvdmVyZXh0cnVkZWQgY29uZSBhcnRpZmFjdHMsIGFuZCBkZXB0aCBhcnRpZmFjdHNcIixcbiAgXCIgICBpZiAoZm9yZXNob3J0ZW5pbmcgPiA0LjApIGZvcmVzaG9ydGVuaW5nID0gMC45OyAvLyBoYWNrIHRvIG5vdCBwb3Agb3V0IGF0IGV4dHJlbWUgYW5nbGVzLi4uXCIsXG4gIFwiICAgZGVwdGhTY2FsZSA9IHJhZGl1cyAqIGZvcmVzaG9ydGVuaW5nOyAvLyBjb3JyZWN0IGRlcHRoIGZvciBmb3Jlc2hvcnRlbmluZ1wiLFxuICBcIn1cIlxuXS5qb2luKFwiXFxuXCIpO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlckNvbmUgPSBbXG4gIFwidW5pZm9ybSBzYW1wbGVyMkQgc3BoZXJlVGV4dHVyZTsgLy8gSW1wb3N0ZXIgaW1hZ2Ugb2Ygc3BoZXJlXCIsXG4gIFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XCIsXG4gIFwidmFyeWluZyB2ZWMzIHZDb2xvcjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzIgc3BoZXJlVXY7XCIsXG4gIFwidmFyeWluZyB2ZWM0IG12UG9zaXRpb247XCIsXG4gIFwidmFyeWluZyBmbG9hdCBkZXB0aFNjYWxlO1wiLFxuICBcInZvaWQgbWFpbigpIFwiLFxuICBcIntcIixcbiAgXCJcdHZlYzQgc3BoZXJlQ29sb3JzID0gdGV4dHVyZTJEKHNwaGVyZVRleHR1cmUsIHNwaGVyZVV2KTtcIixcbiAgXCJcdGlmIChzcGhlcmVDb2xvcnMuYSA8IDAuMykgZGlzY2FyZDtcIixcbiAgXCJcdHZlYzMgYmFzZUNvbG9yID0gdkNvbG9yICogc3BoZXJlQ29sb3JzLnI7XCIsXG4gIFwiXHR2ZWMzIGhpZ2hsaWdodENvbG9yID0gYmFzZUNvbG9yICsgc3BoZXJlQ29sb3JzLmdnZztcIixcbiAgXCJcdGdsX0ZyYWdDb2xvciA9IHZlYzQoaGlnaGxpZ2h0Q29sb3IsIHNwaGVyZUNvbG9ycy5hKTtcIixcbiAgXCIjaWZkZWYgR0xfRVhUX2ZyYWdfZGVwdGhcIixcbiAgXCJmbG9hdCBkeiA9IHNwaGVyZUNvbG9ycy5iICogZGVwdGhTY2FsZTtcIixcbiAgXCJ2ZWM0IG12cCA9IG12UG9zaXRpb24gKyB2ZWM0KDAsIDAsIGR6LCAwKTtcIixcbiAgXCJ2ZWM0IGNsaXBQb3MgPSBwcm9qZWN0aW9uTWF0cml4ICogbXZwO1wiLFxuICBcImZsb2F0IG5kY19kZXB0aCA9IGNsaXBQb3Muei9jbGlwUG9zLnc7XCIsXG4gIFwiZmxvYXQgZmFyID0gZ2xfRGVwdGhSYW5nZS5mYXI7IGZsb2F0IG5lYXIgPSBnbF9EZXB0aFJhbmdlLm5lYXI7XCIsXG4gIFwiZmxvYXQgZGVwdGggPSAoKChmYXItbmVhcikgKiBuZGNfZGVwdGgpICsgbmVhciArIGZhcikgLyAyLjA7XCIsXG4gIFwiZ2xfRnJhZ0RlcHRoRVhUID0gZGVwdGg7XCIsXG4gIFwiI2VuZGlmXCIsXG4gIFwifVwiXG5dLmpvaW4oXCJcXG5cIik7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0hleENvbG9yKGkpIHtcbiAgbGV0IHJlc3VsdCA9IFwiIzAwMDAwMFwiO1xuICBpZiAoaSA+PSAwICYmIGkgPD0gMTUpIHtcbiAgICByZXN1bHQgPSBgIzAwMDAwJHtpLnRvU3RyaW5nKDE2KX1gO1xuICB9IGVsc2UgaWYgKGkgPj0gMTYgJiYgaSA8PSAyNTUpIHtcbiAgICByZXN1bHQgPSBgIzAwMDAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSAyNTYgJiYgaSA8PSA0MDk1KSB7XG4gICAgcmVzdWx0ID0gYCMwMDAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSA0MDk2ICYmIGkgPD0gNjU1MzUpIHtcbiAgICByZXN1bHQgPSBgIzAwJHtpLnRvU3RyaW5nKDE2KX1gO1xuICB9IGVsc2UgaWYgKGkgPj0gNjU1MzYgJiYgaSA8PSAxMDQ4NTc1KSB7XG4gICAgcmVzdWx0ID0gYCMwJHtpLnRvU3RyaW5nKDE2KX1gO1xuICB9IGVsc2UgaWYgKGkgPj0gMTA0ODU3NiAmJiBpIDw9IDE2Nzc3MjE1KSB7XG4gICAgcmVzdWx0ID0gYCMke2kudG9TdHJpbmcoMTYpfWA7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRpbmdCb3goc3djSlNPTikge1xuICBjb25zdCBib3VuZGluZ0JveCA9IHtcbiAgICB4bWluOiBJbmZpbml0eSxcbiAgICB4bWF4OiAtSW5maW5pdHksXG4gICAgeW1pbjogSW5maW5pdHksXG4gICAgeW1heDogLUluZmluaXR5LFxuICAgIHptaW46IEluZmluaXR5LFxuICAgIHptYXg6IC1JbmZpbml0eVxuICB9O1xuXG4gIE9iamVjdC52YWx1ZXMoc3djSlNPTikuZm9yRWFjaChub2RlID0+IHtcbiAgICBjb25zdCByID0gbm9kZS5yYWRpdXM7XG4gICAgaWYgKG5vZGUueCAtIHIgPCBib3VuZGluZ0JveC54bWluKSB7XG4gICAgICBib3VuZGluZ0JveC54bWluID0gbm9kZS54IC0gcjtcbiAgICB9XG4gICAgaWYgKG5vZGUueCArIHIgPiBib3VuZGluZ0JveC54bWF4KSB7XG4gICAgICBib3VuZGluZ0JveC54bWF4ID0gbm9kZS54ICsgcjtcbiAgICB9XG4gICAgaWYgKG5vZGUueSAtIHIgPCBib3VuZGluZ0JveC55bWluKSB7XG4gICAgICBib3VuZGluZ0JveC55bWluID0gbm9kZS55IC0gcjtcbiAgICB9XG4gICAgaWYgKG5vZGUueSArIHIgPiBib3VuZGluZ0JveC55bWF4KSB7XG4gICAgICBib3VuZGluZ0JveC55bWF4ID0gbm9kZS55ICsgcjtcbiAgICB9XG4gICAgaWYgKG5vZGUueiAtIHIgPCBib3VuZGluZ0JveC56bWluKSB7XG4gICAgICBib3VuZGluZ0JveC56bWluID0gbm9kZS56IC0gcjtcbiAgICB9XG4gICAgaWYgKG5vZGUueiArIHIgPiBib3VuZGluZ0JveC56bWF4KSB7XG4gICAgICBib3VuZGluZ0JveC56bWF4ID0gbm9kZS56ICsgcjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBib3VuZGluZ0JveDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRpbmdTcGhlcmUoc3djSlNPTiwgYm91bmRpbmdCb3gpIHtcbiAgLy8gU2ltaWxhciB0bzpcbiAgLy8gXCJBbiBFZmZpY2llbnQgQm91bmRpbmcgU3BoZXJlXCIsIGJ5IEphY2sgUml0dGVyIGZyb20gXCJHcmFwaGljcyBHZW1zXCIsIEFjYWRlbWljIFByZXNzLCAxOTkwXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmljaDY2Ni9HcmFwaGljc0dlbXMvYmxvYi9tYXN0ZXIvZ2Vtcy9Cb3VuZFNwaGVyZS5jXG5cbiAgLy8gU3RhcnQgd2l0aCB0aGUgc3BoZXJlIGluc2NyaWJlZCBpbiB0aGUgYm91bmRpbmcgYm94LiAgSXQgbWF5IG1pc3Mgc29tZSBub2Rlcy5cbiAgY29uc3QgcnggPSAoYm91bmRpbmdCb3gueG1heCAtIGJvdW5kaW5nQm94LnhtaW4pIC8gMjtcbiAgY29uc3QgcnkgPSAoYm91bmRpbmdCb3gueW1heCAtIGJvdW5kaW5nQm94LnltaW4pIC8gMjtcbiAgY29uc3QgcnogPSAoYm91bmRpbmdCb3guem1heCAtIGJvdW5kaW5nQm94LnptaW4pIC8gMjtcbiAgbGV0IHJhZGl1cyA9IE1hdGgubWluKHJ4LCByeSwgcnopO1xuICBsZXQgY2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgYm91bmRpbmdCb3gueG1pbiArIHJ4LFxuICAgIGJvdW5kaW5nQm94LnltaW4gKyByeSxcbiAgICBib3VuZGluZ0JveC56bWluICsgcnpcbiAgKTtcblxuICAvLyBGaW5kIGVhY2ggbm9kZSB0aGF0IGlzIG91dHNpZGUgdGhlIGN1cnJlbnQgYm91bmRpbmcgc3BoZXJlLlxuICBsZXQgcmFkaXVzU3EgPSByYWRpdXMgKiByYWRpdXM7XG4gIE9iamVjdC52YWx1ZXMoc3djSlNPTikuZm9yRWFjaChub2RlID0+IHtcbiAgICBjb25zdCBub2RlQ2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMobm9kZS54LCBub2RlLnksIG5vZGUueik7XG4gICAgY29uc3Qgbm9kZUNlbnRlclRvQ2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICBub2RlQ2VudGVyVG9DZW50ZXIuc3ViVmVjdG9ycyhjZW50ZXIsIG5vZGVDZW50ZXIpO1xuICAgIGNvbnN0IGRpc3RTcU5vZGVDZW50ZXJUb0NlbnRlciA9IG5vZGVDZW50ZXJUb0NlbnRlci5kb3Qobm9kZUNlbnRlclRvQ2VudGVyKTtcbiAgICAvLyBJbmNsdWRlIHRoZSBub2RlJ3MgcmFkaXVzIHdoZW4gY2hlY2tpbmcgd2hldGhlciBpdCBpcyBvdXRzaWRlLlxuICAgIGlmIChkaXN0U3FOb2RlQ2VudGVyVG9DZW50ZXIgKyBub2RlLnJhZGl1cyAqIG5vZGUucmFkaXVzID4gcmFkaXVzU3EpIHtcbiAgICAgIC8vIElmIGl0IGlzIG91dHNpZGUsIHRoZW4gdGhlIG5ldyBib3VuZGluZ3Atc3BoZXJlIHJhZGl1cyBpcyB0aGUgYXZlcmFnZSBvZiB0aGUgb2xkIHJhZGl1c1xuICAgICAgLy8gYW5kIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvdXRzaWRlIG9mIHRoZSBub2RlIChpLmUuLCBpbmNsdWRlIGl0cyByYWRpdXMpIHRvIHRoZVxuICAgICAgLy8gb2xkIGJvdW5kaW5nLXNwaGVyZSBjZW50ZXIuXG4gICAgICBjb25zdCBkaXN0Tm9kZUNlbnRlclRvQ2VudGVyID0gTWF0aC5zcXJ0KGRpc3RTcU5vZGVDZW50ZXJUb0NlbnRlcik7XG4gICAgICBjb25zdCBuZXdSYWRpdXMgPSAocmFkaXVzICsgKGRpc3ROb2RlQ2VudGVyVG9DZW50ZXIgKyBub2RlLnJhZGl1cykpIC8gMi4wO1xuICAgICAgLy8gVGhlIG5ldyBib3VuZGluZyBzcGhlcmUgY2VudGVyIHdpbGwgYmUgb24gdGhlIGxpbmUgYmV0d2VlbiB0aGUgbm9kZSBhbmQgdGhlIG9sZCBjZW50ZXIuXG4gICAgICBjb25zdCBub2RlQ2VudGVyVG9DZW50ZXJVbml0ID0gbm9kZUNlbnRlclRvQ2VudGVyXG4gICAgICAgIC5jbG9uZSgpXG4gICAgICAgIC5kaXZpZGVTY2FsYXIoZGlzdE5vZGVDZW50ZXJUb0NlbnRlcik7XG4gICAgICBjb25zdCBub2RlQ2VudGVyVG9OZXdDZW50ZXIgPSBub2RlQ2VudGVyVG9DZW50ZXJVbml0XG4gICAgICAgIC5jbG9uZSgpXG4gICAgICAgIC5tdWx0aXBseVNjYWxhcihuZXdSYWRpdXMgLSBub2RlLnJhZGl1cyk7XG4gICAgICBjZW50ZXIgPSBub2RlQ2VudGVyLmNsb25lKCkuYWRkKG5vZGVDZW50ZXJUb05ld0NlbnRlcik7XG4gICAgICByYWRpdXMgPSBuZXdSYWRpdXM7XG4gICAgICByYWRpdXNTcSA9IHJhZGl1cyAqIHJhZGl1cztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7IGNlbnRlciwgcmFkaXVzIH07XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNhbWVyYVBvc2l0aW9uKGZvdiwgYm91bmRpbmdTcGhlcmUpIHtcbiAgY29uc3QgdGhldGEgPSAoZm92ICogKE1hdGguUEkgLyAxODAuMCkpIC8gMi4wO1xuICBjb25zdCBkID0gYm91bmRpbmdTcGhlcmUucmFkaXVzIC8gTWF0aC5zaW4odGhldGEpO1xuICBjb25zdCB7IGNlbnRlciB9ID0gYm91bmRpbmdTcGhlcmU7XG4gIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyhjZW50ZXIueCwgY2VudGVyLnksIGNlbnRlci56ICsgZCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5U2VtaVRyYW5zcGFyZW50U2hhZGVyKG9iamVjdCwgY29sb3IpIHtcbiAgb2JqZWN0LnRyYXZlcnNlKGNoaWxkID0+IHtcbiAgICBjaGlsZC5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICBjb2xvcjogeyB0eXBlOiBcImNcIiwgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihgJHtjb2xvcn1gKSB9XG4gICAgICB9LFxuICAgICAgdmVydGV4U2hhZGVyOiBgXG4gICAgICAgICNsaW5lIDU4NVxuICAgICAgICB2YXJ5aW5nIHZlYzMgbm9ybWFsX2luX2NhbWVyYTtcbiAgICAgICAgdmFyeWluZyB2ZWMzIHZpZXdfZGlyZWN0aW9uO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc19pbl9jYW1lcmEgPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIHBvc19pbl9jYW1lcmE7XG4gICAgICAgICAgbm9ybWFsX2luX2NhbWVyYSA9IG5vcm1hbGl6ZShtYXQzKG1vZGVsVmlld01hdHJpeCkgKiBub3JtYWwpO1xuICAgICAgICAgIHZpZXdfZGlyZWN0aW9uID0gbm9ybWFsaXplKHBvc19pbl9jYW1lcmEueHl6KTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyOiBgXG4gICAgICAgICNsaW5lIDU5N1xuICAgICAgICB1bmlmb3JtIHZlYzMgY29sb3I7XG4gICAgICAgIHZhcnlpbmcgdmVjMyBub3JtYWxfaW5fY2FtZXJhO1xuICAgICAgICB2YXJ5aW5nIHZlYzMgdmlld19kaXJlY3Rpb247XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIC8vIE1ha2UgZWRnZXMgbW9yZSBvcGFxdWUgdGhhbiBjZW50ZXJcbiAgICAgICAgICBmbG9hdCBlZGdpbmVzcyA9IDEuMCAtIGFicyhkb3Qobm9ybWFsX2luX2NhbWVyYSwgdmlld19kaXJlY3Rpb24pKTtcbiAgICAgICAgICBmbG9hdCBvcGFjaXR5ID0gY2xhbXAoZWRnaW5lc3MgLSAwLjMwLCAwLjAsIDAuNSk7XG4gICAgICAgICAgLy8gRGFya2VuIGNvbXBhcnRtZW50IGF0IHRoZSB2ZXJ5IGVkZ2VcbiAgICAgICAgICBmbG9hdCBibGFja25lc3MgPSBwb3coZWRnaW5lc3MsIDQuMCkgLSAwLjM7XG4gICAgICAgICAgdmVjMyBjID0gbWl4KGNvbG9yLCB2ZWMzKDAsMCwwKSwgYmxhY2tuZXNzKTtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGMsIG9wYWNpdHkpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICBkZXB0aFRlc3Q6IHRydWUsXG4gICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGVcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8vIGdlbmVyYXRlcyBwYXJ0aWNsZSB2ZXJ0aWNlc1xuZnVuY3Rpb24gZ2VuZXJhdGVQYXJ0aWNsZShub2RlKSB7XG4gIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyhub2RlLngsIG5vZGUueSwgbm9kZS56KTtcbn1cblxuLy8gZ2VuZXJhdGVzIHNrZWxldG9uIHZlcnRpY2VzXG5mdW5jdGlvbiBnZW5lcmF0ZVNrZWxldG9uKG5vZGUsIG5vZGVQYXJlbnQpIHtcbiAgY29uc3QgdmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMobm9kZS54LCBub2RlLnksIG5vZGUueik7XG4gIGNvbnN0IHZlcnRleFBhcmVudCA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgIG5vZGVQYXJlbnQueCxcbiAgICBub2RlUGFyZW50LnksXG4gICAgbm9kZVBhcmVudC56XG4gICk7XG4gIHJldHVybiB7XG4gICAgY2hpbGQ6IHZlcnRleCxcbiAgICBwYXJlbnQ6IHZlcnRleFBhcmVudFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZXRhZGF0YUVsZW1lbnQobWV0YWRhdGEsIGNvbG9ycykge1xuICBjb25zdCBtZXRhZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWV0YWRpdi5pZCA9IFwibm9kZV9rZXlcIjtcbiAgbWV0YWRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgbWV0YWRpdi5zdHlsZS50b3AgPSBcIjBweFwiO1xuICBtZXRhZGl2LnN0eWxlLnJpZ2h0ID0gXCIxMHB4XCI7XG4gIG1ldGFkaXYuc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAxcHggI2FhYWFhYVwiO1xuICBtZXRhZGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gIG1ldGFkaXYuc3R5bGUucGFkZGluZyA9IFwiMnB4XCI7XG5cbiAgbGV0IHRvaW5uZXJodG1sID0gXCJcIjtcbiAgbWV0YWRhdGEuZm9yRWFjaChtID0+IHtcbiAgICBjb25zdCBtdHlwZSA9IHBhcnNlSW50KG0udHlwZSwgMTApO1xuICAgIGNvbnN0IHRocmVlQ29sb3IgPSBtdHlwZSA8IGNvbG9ycy5sZW5ndGggPyBjb2xvcnNbbXR5cGVdIDogY29sb3JzWzBdO1xuICAgIGxldCBjc3NDb2xvciA9IHRocmVlQ29sb3I7XG4gICAgaWYgKHR5cGVvZiB0aHJlZUNvbG9yICE9PSBcInN0cmluZ1wiKVxuICAgICAgY3NzQ29sb3IgPSBjb252ZXJ0VG9IZXhDb2xvcih0aHJlZUNvbG9yKTtcbiAgICB0b2lubmVyaHRtbCArPSBgPGRpdj48c3BhbiBzdHlsZT0naGVpZ2h0OjEwcHg7d2lkdGg6MTBweDtiYWNrZ3JvdW5kOiR7Y3NzQ29sb3J9O2A7XG4gICAgdG9pbm5lcmh0bWwgKz0gYGRpc3BsYXk6aW5saW5lLWJsb2NrOyc+PC9zcGFuPiA6ICR7bS5sYWJlbH08L2Rpdj5gO1xuICB9KTtcbiAgbWV0YWRpdi5pbm5lckhUTUwgPSB0b2lubmVyaHRtbDtcbiAgcmV0dXJuIG1ldGFkaXY7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmtWaWV3ZXIge1xuICAvKiBzd2MgbmV1cm9uIGpzb24gb2JqZWN0OlxuICAgKntcbiAgICogIGlkIDoge1xuICAgKiAgICB0eXBlOiA8dHlwZSBudW1iZXIgb2Ygbm9kZSAoc3RyaW5nKT4sXG4gICAqICAgIHg6IDx4IHBvc2l0aW9uIG9mIG5vZGUgKGZsb2F0KT4sXG4gICAqICAgIHk6IDx5IHBvc2l0aW9uIG9mIG5vZGUgKGZsb2F0KT4sXG4gICAqICAgIHo6IDx6IHBvc2l0aW9uIG9mIG5vZGUgKGZsb2F0KT4sXG4gICAqICAgIHBhcmVudDogPGlkIG51bWJlciBvZiBub2RlJ3MgcGFyZW50ICgtMSBpZiBubyBwYXJlbnQpPixcbiAgICogICAgcmFkaXVzOiA8cmFkaXVzIG9mIG5vZGUgKGZsb2F0KT4sXG4gICAqICB9XG4gICAqfVxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncykge1xuICAgIHRoaXMuc3djID0ge307XG4gICAgLy8gbW9kZSAoc3BoZXJlLCBwYXJ0aWNsZSwgc2tlbGV0b24pXG4gICAgdGhpcy5tb2RlID0gXCJwYXJ0aWNsZVwiO1xuICAgIC8vIGZsaXAgeSBheGlzXG4gICAgdGhpcy5mbGlwID0gZmFsc2U7XG4gICAgLy8gY29sb3IgYXJyYXksIG5vZGVzIG9mIHR5cGUgMCBzaG93IGFzIGZpcnN0IGNvbG9yLCBldGMuXG4gICAgdGhpcy5jb2xvcnMgPSBbXG4gICAgICAweDMxZmZkYyxcbiAgICAgIDB4NmQ0ZmYzLFxuICAgICAgMHhhYTNhZjAsXG4gICAgICAweGYzODAzMixcbiAgICAgIDB4NTlmYzIwLFxuICAgICAgMHhmOGQ0M2MsXG4gICAgICAweGZkMmM0ZCxcbiAgICAgIDB4YzljOWM5XG4gICAgXTtcbiAgICB0aGlzLnJhZGl1c19zY2FsZV9mYWN0b3IgPSAxO1xuICAgIHRoaXMubWV0YWRhdGEgPSBmYWxzZTtcbiAgICB0aGlzLm9uX3NlbGVjdF9ub2RlID0gbnVsbDtcbiAgICB0aGlzLm9uX3RvZ2dsZV9ub2RlID0gbnVsbDtcbiAgICB0aGlzLnNob3dfc3RhdHMgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgdGhpcy50aHJlZSA9IFRIUkVFO1xuXG4gICAgdGhpcy5zaG93QXhlcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd19jb25lcyA9IHRydWU7XG4gICAgdGhpcy5icmFpbmJvdW5kaW5nYm94ID0gbnVsbDtcbiAgICB0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXAgPSBudWxsO1xuICAgIHRoaXMubW91c2VIYW5kbGVyID0gbnVsbDtcbiAgICB0aGlzLm5vZGVQYXJ0aWNsZVRleHR1cmUgPSBOT0RFX1BBUlRJQ0xFX0lNQUdFO1xuICAgIHRoaXMubWluX3JhZGl1cyA9IG51bGw7XG4gICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzID0gbnVsbDtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IDB4ZmZmZmZmO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLmNhbWVyYUNoYW5nZUNhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLm9uVG9wID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFZhbHVlcyhhcmdzKTtcbiAgICAvLyBhbnl0aGluZyBhZnRlciB0aGUgYWJvdmUgbGluZSBjYW4gbm90IGJlIHNldCBieSB0aGUgY2FsbGVyLlxuXG4gICAgLy8gaHRtbCBlbGVtZW50IHRoYXQgd2lsbCByZWNlaXZlIHdlYmdsIGNhbnZhc1xuICAgIGlmICh0eXBlb2YgYXJncy5kb21fZWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGhpcy5kb21fZWxlbWVudCA9IGFyZ3MuZG9tX2VsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgYXJncy5kb21fZWxlbWVudCB8fCBcImNvbnRhaW5lclwiXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGhlaWdodCBvZiBjYW52YXNcbiAgICB0aGlzLkhFSUdIVCA9IHRoaXMuZG9tX2VsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIC8vIHdpZHRoIG9mIGNhbnZhc1xuICAgIHRoaXMuV0lEVEggPSB0aGlzLmRvbV9lbGVtZW50LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgLy8gc2V0cyB1cCB1c2VyIHNwZWNpZmllZCBjb25maWd1cmF0aW9uXG4gIHNldFZhbHVlcyh2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgdGhpc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBjYWxjdWxhdGVzIGNvbG9yIGJhc2VkIG9uIG5vZGUgdHlwZVxuICBub2RlQ29sb3Iobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPCB0aGlzLnRocmVlX2NvbG9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRocmVlX2NvbG9yc1tub2RlLnR5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aHJlZV9jb2xvcnNbMF07XG4gIH1cblxuXG5cbiAgICAvLyBnZW5lcmF0ZXMgc3BoZXJlIG1lc2hcbiAgZ2VuZXJhdGVTcGhlcmUobm9kZSkge1xuICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsID0gdGhpcy50aHJlZV9tYXRlcmlhbHNbbm9kZS50eXBlXTtcbiAgICBjb25zdCByMSA9IG5vZGUucmFkaXVzIHx8IDAuMDE7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkocjEpO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgc3BoZXJlTWF0ZXJpYWwpO1xuICAgIG1lc2gucG9zaXRpb24ueCA9IG5vZGUueDtcbiAgICBtZXNoLnBvc2l0aW9uLnkgPSBub2RlLnk7XG4gICAgbWVzaC5wb3NpdGlvbi56ID0gbm9kZS56O1xuICAgIHJldHVybiBtZXNoO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGVzIGNvbmVzIGNvbm5lY3Rpbmcgc3BoZXJlc1xuICBnZW5lcmF0ZUNvbmVHZW9tZXRyeShub2RlLCBub2RlUGFyZW50KSB7XG4gICAgY29uc3QgY29uZU1hdGVyaWFsID0gdGhpcy50aHJlZV9tYXRlcmlhbHNbbm9kZVBhcmVudC50eXBlXTtcbiAgICBjb25zdCBub2RlVmVjID0gbmV3IFRIUkVFLlZlY3RvcjMobm9kZS54LCBub2RlLnksIG5vZGUueik7XG4gICAgY29uc3Qgbm9kZVBhcmVudFZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgbm9kZVBhcmVudC54LFxuICAgICAgbm9kZVBhcmVudC55LFxuICAgICAgbm9kZVBhcmVudC56XG4gICAgKTtcbiAgICBjb25zdCBkaXN0ID0gbm9kZVZlYy5kaXN0YW5jZVRvKG5vZGVQYXJlbnRWZWMpO1xuICAgIGNvbnN0IGN5bEF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMobm9kZVZlYywgbm9kZVBhcmVudFZlYyk7XG4gICAgY3lsQXhpcy5ub3JtYWxpemUoKTtcbiAgICBjb25zdCB0aGV0YSA9IE1hdGguYWNvcyhjeWxBeGlzLnkpO1xuICAgIGNvbnN0IHJvdGF0aW9uQXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgcm90YXRpb25BeGlzLmNyb3NzVmVjdG9ycyhjeWxBeGlzLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XG4gICAgcm90YXRpb25BeGlzLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHIxID0gbm9kZS5yYWRpdXMgfHwgMC4wMTtcbiAgICBjb25zdCByMiA9IG5vZGVQYXJlbnQucmFkaXVzIHx8IDAuMDE7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyMSwgcjIsIGRpc3QpO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgY29uZU1hdGVyaWFsKTtcbiAgICBtZXNoLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICBtZXNoLm1hdHJpeC5tYWtlUm90YXRpb25BeGlzKHJvdGF0aW9uQXhpcywgLXRoZXRhKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgKG5vZGUueCArIG5vZGVQYXJlbnQueCkgLyAyLFxuICAgICAgKG5vZGUueSArIG5vZGVQYXJlbnQueSkgLyAyLFxuICAgICAgKG5vZGUueiArIG5vZGVQYXJlbnQueikgLyAyXG4gICAgKTtcbiAgICBtZXNoLm1hdHJpeC5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cblxuICAvLyBnZW5lcmF0ZXMgY29uZSBwcm9wZXJ0aWVzIGZvciBub2RlLCBwYXJlbnQgcGFpclxuICBnZW5lcmF0ZUNvbmUobm9kZSwgbm9kZVBhcmVudCwgY29sb3IpIHtcbiAgICBjb25zdCBjb25lQ2hpbGQgPSB7fTtcbiAgICBjb25zdCBjb25lUGFyZW50ID0ge307XG5cbiAgICBsZXQgbm9kZUNvbG9yID0gdGhpcy5ub2RlQ29sb3Iobm9kZSk7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBub2RlQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoY29sb3IpO1xuICAgIH1cbiAgICBjb25lQ2hpbGQudmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMobm9kZS54LCBub2RlLnksIG5vZGUueik7XG4gICAgY29uZUNoaWxkLnJhZGl1cyA9IG5vZGUucmFkaXVzO1xuICAgIGNvbmVDaGlsZC5jb2xvciA9IG5vZGVDb2xvcjtcblxuICAgIGxldCBub2RlUGFyZW50Q29sb3IgPSB0aGlzLm5vZGVDb2xvcihub2RlUGFyZW50KTtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIG5vZGVQYXJlbnRDb2xvciA9IG5ldyBUSFJFRS5Db2xvcihjb2xvcik7XG4gICAgfVxuICAgIGNvbmVQYXJlbnQudmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICBub2RlUGFyZW50LngsXG4gICAgICBub2RlUGFyZW50LnksXG4gICAgICBub2RlUGFyZW50LnpcbiAgICApO1xuICAgIGNvbmVQYXJlbnQucmFkaXVzID0gbm9kZVBhcmVudC5yYWRpdXM7XG4gICAgY29uZVBhcmVudC5jb2xvciA9IG5vZGVQYXJlbnRDb2xvcjtcblxuICAgIC8vIG5vcm1hbHNcbiAgICBjb25zdCBuMSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhcbiAgICAgIGNvbmVQYXJlbnQudmVydGV4LFxuICAgICAgY29uZUNoaWxkLnZlcnRleFxuICAgICk7XG4gICAgY29uc3QgbjIgPSBuMS5jbG9uZSgpLm5lZ2F0ZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkOiBjb25lQ2hpbGQsXG4gICAgICBwYXJlbnQ6IGNvbmVQYXJlbnQsXG4gICAgICBub3JtYWwxOiBuMSxcbiAgICAgIG5vcm1hbDI6IG4yXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZU5ldXJvbihzd2NKU09OLCBjb2xvciA9IHVuZGVmaW5lZCkge1xuICAgIC8vIG5ldXJvbiBpcyBvYmplY3QgM2Qgd2hpY2ggZW5zdXJlcyBhbGwgY29tcG9uZW50cyBtb3ZlIHRvZ2V0aGVyXG4gICAgY29uc3QgbmV1cm9uID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgbGV0IGdlb21ldHJ5O1xuICAgIGxldCBtYXRlcmlhbDtcbiAgICAvLyBwYXJ0aWNsZSBtb2RlIHVzZXMgdmVydGV4IGluZm8gdG8gcGxhY2UgdGV4dHVyZSBpbWFnZSwgdmVyeSBmYXN0XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gXCJwYXJ0aWNsZVwiKSB7XG4gICAgICAvLyBzcGVjaWFsIGltcG9zdGVyIGltYWdlIGNvbnRhaW5zOlxuICAgICAgLy8gMSAtIGNvbG9yaXphYmxlIHNwaGVyZSBpbWFnZSBpbiByZWQgY2hhbm5lbFxuICAgICAgLy8gMiAtIHNwZWN1bGFyIGhpZ2hsaWdodCBpbiBncmVlbiBjaGFubmVsXG4gICAgICAvLyAzIC0gZGVwdGggb2Zmc2V0IGluIGJsdWUgY2hhbm5lbCAoY3VycmVudGx5IHVudXNlZClcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGNvbnN0IHNwaGVyZUltZyA9IG5ldyBUSFJFRS5UZXh0dXJlKGltYWdlKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgICAgc3BoZXJlSW1nLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgICBpbWFnZS5zcmMgPSB0aGlzLm5vZGVQYXJ0aWNsZVRleHR1cmU7XG5cbiAgICAgIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICAvLyBwcm9wZXJ0aWVzIHRoYXQgbWF5IGNvbnN0eSBmcm9tIHBhcnRpY2xlIHRvIHBhcnRpY2xlLiBvbmx5IGFjY2Vzc2libGUgaW4gdmVydGV4IHNoYWRlcnMhXG4gICAgICAvL1x0KGNhbiBwYXNzIGNvbG9yIGluZm8gdG8gZnJhZ21lbnQgc2hhZGVyIHZpYSB2Q29sb3IuKVxuICAgICAgLy8gY29tcHV0ZSBzY2FsZSBmb3IgcGFydGljbGVzLCBpbiBwaXhlbHNcbiAgICAgIGNvbnN0IHBhcnRpY2xlU2NhbGUgPVxuICAgICAgICAoMC41ICogdGhpcy5IRUlHSFQpIC9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5nZXRQaXhlbFJhdGlvKCkgL1xuICAgICAgICBNYXRoLnRhbigoMC41ICogdGhpcy5mb3YgKiBNYXRoLlBJKSAvIDE4MC4wKTtcblxuICAgICAgY29uc3QgY3VzdG9tQXR0cmlidXRlcyA9IHtcbiAgICAgICAgcmFkaXVzOiB7IHR5cGU6IFwiZnYxXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICB0eXBlQ29sb3I6IHsgdHlwZTogXCJjXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICB2ZXJ0aWNlczogeyB0eXBlOiBcImZcIiwgdmFsdWU6IFtdIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGN1c3RvbVVuaWZvcm1zID0ge1xuICAgICAgICBwYXJ0aWNsZVNjYWxlOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogcGFydGljbGVTY2FsZSB9LFxuICAgICAgICBzcGhlcmVUZXh0dXJlOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogc3BoZXJlSW1nIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGluZGV4TG9va3VwID0ge307XG5cbiAgICAgIE9iamVjdC5rZXlzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGxldCBub2RlQ29sb3IgPSB0aGlzLm5vZGVDb2xvcihzd2NKU09OW25vZGVdKTtcblxuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICBub2RlQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFydGljbGVWZXJ0ZXggPSBnZW5lcmF0ZVBhcnRpY2xlKHN3Y0pTT05bbm9kZV0pO1xuXG4gICAgICAgIGxldCByYWRpdXMgPSBzd2NKU09OW25vZGVdLnJhZGl1cyAqIHRoaXMucmFkaXVzX3NjYWxlX2ZhY3RvcjtcblxuICAgICAgICBpZiAodGhpcy5taW5fcmFkaXVzICYmIHJhZGl1cyA8IHRoaXMubWluX3JhZGl1cykge1xuICAgICAgICAgIHJhZGl1cyA9IHRoaXMubWluX3JhZGl1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2gocmFkaXVzKTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKHBhcnRpY2xlVmVydGV4LngpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2gocGFydGljbGVWZXJ0ZXgueSk7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChwYXJ0aWNsZVZlcnRleC56KTtcblxuICAgICAgICBpbmRleExvb2t1cFtjdXN0b21BdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5sZW5ndGggLSAxXSA9XG4gICAgICAgICAgc3djSlNPTltub2RlXS5zYW1wbGVOdW1iZXI7XG4gICAgIH0pO1xuICAgICAgZ2VvbWV0cnkuYWRkQXR0cmlidXRlKFxuICAgICAgICBcInBvc2l0aW9uXCIsXG4gICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGN1c3RvbUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUsIDMpXG4gICAgICApO1xuICAgICAgZ2VvbWV0cnkuYWRkQXR0cmlidXRlKFxuICAgICAgICBcInJhZGl1c1wiLFxuICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjdXN0b21BdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZSwgMSlcbiAgICAgICk7XG4gICAgICBnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoXG4gICAgICAgIFwidHlwZUNvbG9yXCIsXG4gICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGN1c3RvbUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLCAzKVxuICAgICAgKTtcblxuICAgICAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICB1bmlmb3JtczogY3VzdG9tVW5pZm9ybXMsXG4gICAgICAgIHZlcnRleFNoYWRlcixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIsXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXG4gICAgICAgIC8vIGFscGhhVGVzdDogMC41IC8vIGlmIGhhdmluZyB0cmFuc3BhcmVuY3kgaXNzdWVzLCB0cnkgaW5jbHVkaW5nOiBhbHBoYVRlc3Q6IDAuNSxcbiAgICAgIH0pO1xuICAgICAgbWF0ZXJpYWwuZXh0ZW5zaW9ucy5mcmFnRGVwdGggPSB0cnVlO1xuXG4gICAgICBsZXQgbWF0ZXJpYWxTaGFkZXIgPSBudWxsO1xuXG4gICAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVEhSRUUuUG9pbnRzKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBwYXJ0aWNsZXMudXNlckRhdGEgPSB7IGluZGV4TG9va3VwLCBtYXRlcmlhbFNoYWRlciB9O1xuXG4gICAgICBtYXRlcmlhbC5vbkJlZm9yZUNvbXBpbGUgPSBzaGFkZXIgPT4ge1xuICAgICAgICBzaGFkZXIudW5pZm9ybXMuYWxwaGEgPSB7IHZhbHVlOiAwIH07XG4gICAgICAgIHNoYWRlci52ZXJ0ZXhTaGFkZXIgPSBgdW5pZm9ybSBmbG9hdCBhbHBoYTtcXG4ke3NoYWRlci52ZXJ0ZXhTaGFkZXJ9YDtcbiAgICAgICAgc2hhZGVyLnZlcnRleFNoYWRlciA9IHNoYWRlci52ZXJ0ZXhTaGFkZXIucmVwbGFjZShcbiAgICAgICAgICBcIiNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XCIsXG4gICAgICAgICAgW1widkFscGhhID0gYWxwaGFcIl0uam9pbihcIlxcblwiKVxuICAgICAgICApO1xuICAgICAgICBtYXRlcmlhbFNoYWRlciA9IHNoYWRlcjtcblxuICAgICAgICBtYXRlcmlhbFNoYWRlci51bmlmb3Jtcy5hbHBoYS52YWx1ZSA9IDAuOTtcblxuICAgICAgICBwYXJ0aWNsZXMudXNlckRhdGEubWF0ZXJpYWxTaGFkZXIgPSBtYXRlcmlhbFNoYWRlcjtcbiAgICAgIH07XG5cbiAgICAgIG5ldXJvbi5hZGQocGFydGljbGVzKTtcblxuICAgICAgaWYgKHRoaXMuc2hvd19jb25lcykge1xuICAgICAgICAvLyBDb25lIHF1YWQgaW1wb3N0ZXJzLCB0byBsaW5rIHNwaGVyZXMgdG9nZXRoZXJcbiAgICAgICAgY29uc3QgY29uZUF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICAgcmFkaXVzOiB7IHR5cGU6IFwiZnYxXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICAgIGluZGljZXM6IHsgdHlwZTogXCJpdjFcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgdHlwZUNvbG9yOiB7IHR5cGU6IFwiY1wiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgICB2ZXJ0aWNlczogeyB0eXBlOiBcImZcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgbm9ybWFsczogeyB0eXBlOiBcImZcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgdXY6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiBbXSB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbmVVbmlmb3JtcyA9IHtcbiAgICAgICAgICBzcGhlcmVUZXh0dXJlOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogc3BoZXJlSW1nIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXZzID0gW1xuICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMCksXG4gICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAxKSxcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMigwLjUsIDEpXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGNvbmVHZW9tID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICAgIGxldCBpeDIxID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIGlmIChzd2NKU09OW25vZGVdLnBhcmVudCAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIFBhaW50IHR3byB0cmlhbmdsZXMgdG8gbWFrZSBhIGNvbmUtaW1wb3N0ZXIgcXVhZHJpbGF0ZXJhbFxuICAgICAgICAgICAgLy8gVHJpYW5nbGUgIzFcbiAgICAgICAgICAgIGNvbnN0IGNvbmUgPSB0aGlzLmdlbmVyYXRlQ29uZShcbiAgICAgICAgICAgICAgc3djSlNPTltub2RlXSxcbiAgICAgICAgICAgICAgc3djSlNPTltzd2NKU09OW25vZGVdLnBhcmVudF0sXG4gICAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IG5vZGVDb2xvciA9IGNvbmUuY2hpbGQuY29sb3I7XG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgICAgbm9kZUNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhcmVudFJhZGl1cyA9IGNvbmUucGFyZW50LnJhZGl1cyAqIHRoaXMucmFkaXVzX3NjYWxlX2ZhY3RvcjtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbl9yYWRpdXMgJiYgcGFyZW50UmFkaXVzIDwgdGhpcy5taW5fcmFkaXVzKSB7XG4gICAgICAgICAgICAgIHBhcmVudFJhZGl1cyA9IHRoaXMubWluX3JhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNoaWxkUmFkaXVzID0gY29uZS5jaGlsZC5yYWRpdXMgKiB0aGlzLnJhZGl1c19zY2FsZV9mYWN0b3I7XG4gICAgICAgICAgICBpZiAodGhpcy5taW5fcmFkaXVzICYmIGNoaWxkUmFkaXVzIDwgdGhpcy5taW5fcmFkaXVzKSB7XG4gICAgICAgICAgICAgIGNoaWxkUmFkaXVzID0gdGhpcy5taW5fcmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggMVxuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2goY2hpbGRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMF0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1swXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcblxuICAgICAgICAgICAgLy8gdmVydGV4IDJcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKGNoaWxkUmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzFdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMV0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAzXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChwYXJlbnRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMl0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1syXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcblxuICAgICAgICAgICAgLy8gVHJpYW5nbGUgIzJcbiAgICAgICAgICAgIC8vIFBhcmVudFxuICAgICAgICAgICAgbm9kZUNvbG9yID0gY29uZS5wYXJlbnQuY29sb3I7XG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgICAgbm9kZUNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdmVydGV4IDFcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKHBhcmVudFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1swXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzBdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggMlxuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2gocGFyZW50UmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzFdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMV0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAzXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChjaGlsZFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1syXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzJdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmVHZW9tLnNldEluZGV4KFxuICAgICAgICAgIG5ldyBUSFJFRS5VaW50MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZSwgMSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uZUdlb20uYWRkQXR0cmlidXRlKFxuICAgICAgICAgIFwicG9zaXRpb25cIixcbiAgICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZSwgMylcbiAgICAgICAgKTtcbiAgICAgICAgY29uZUdlb20uYWRkQXR0cmlidXRlKFxuICAgICAgICAgIFwicmFkaXVzXCIsXG4gICAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLCAxKVxuICAgICAgICApO1xuICAgICAgICBjb25lR2VvbS5hZGRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJ0eXBlQ29sb3JcIixcbiAgICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUsIDMpXG4gICAgICAgICk7XG4gICAgICAgIGNvbmVHZW9tLmFkZEF0dHJpYnV0ZShcbiAgICAgICAgICBcIm5vcm1hbFwiLFxuICAgICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUsIDMpXG4gICAgICAgICk7XG4gICAgICAgIGNvbmVHZW9tLmFkZEF0dHJpYnV0ZShcbiAgICAgICAgICBcInV2XCIsXG4gICAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMudXYudmFsdWUsIDIpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY29uZU1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICB1bmlmb3JtczogY29uZVVuaWZvcm1zLFxuICAgICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4U2hhZGVyQ29uZSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZnJhZ21lbnRTaGFkZXJDb25lLFxuICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgIGRlcHRoVGVzdDogdHJ1ZSxcbiAgICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgICAgICAgIGFscGhhVGVzdDogMC41IC8vIGlmIGhhdmluZyB0cmFuc3BhcmVuY3kgaXNzdWVzLCB0cnkgaW5jbHVkaW5nOiBhbHBoYVRlc3Q6IDAuNSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uZU1hdGVyaWFsLmV4dGVuc2lvbnMuZnJhZ0RlcHRoID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBjb25lTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGNvbmVHZW9tLCBjb25lTWF0ZXJpYWwpO1xuXG4gICAgICAgIGNvbmVNYXRlcmlhbC5vbkJlZm9yZUNvbXBpbGUgPSBzaGFkZXIgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBzaGFkZXIgKVxuICAgICAgICAgIHNoYWRlci51bmlmb3Jtcy5hbHBoYSA9IHsgdmFsdWU6IDAgfTtcbiAgICAgICAgICBzaGFkZXIudmVydGV4U2hhZGVyID0gYHVuaWZvcm0gZmxvYXQgYWxwaGE7XFxuJHtzaGFkZXIudmVydGV4U2hhZGVyfWA7XG4gICAgICAgICAgc2hhZGVyLnZlcnRleFNoYWRlciA9IHNoYWRlci52ZXJ0ZXhTaGFkZXIucmVwbGFjZShcbiAgICAgICAgICAgIFwiI2luY2x1ZGUgPGJlZ2luX3ZlcnRleD5cIixcbiAgICAgICAgICAgIFtcInZBbHBoYSA9IGFscGhhXCJdLmpvaW4oXCJcXG5cIilcbiAgICAgICAgICApO1xuICAgICAgICAgIG1hdGVyaWFsU2hhZGVyID0gc2hhZGVyO1xuXG4gICAgICAgICAgbWF0ZXJpYWxTaGFkZXIudW5pZm9ybXMuYWxwaGEudmFsdWUgPSAwLjk7XG5cbiAgICAgICAgICBjb25lTWVzaC51c2VyRGF0YSA9IHsgbWF0ZXJpYWxTaGFkZXIgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBuZXVyb24uYWRkKGNvbmVNZXNoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc3BoZXJlIG1vZGUgcmVuZGVycyAzZCBzcGhlcmVcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT09IFwic3BoZXJlXCIpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IHNwaGVyZSA9IHRoaXMuZ2VuZXJhdGVTcGhlcmUoc3djSlNPTltub2RlXSk7XG4gICAgICAgIG5ldXJvbi5hZGQoc3BoZXJlKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd19jb25lcykge1xuICAgICAgICAgIGlmIChzd2NKU09OW25vZGVdLnBhcmVudCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmUgPSB0aGlzLmdlbmVyYXRlQ29uZUdlb21ldHJ5KFxuICAgICAgICAgICAgICBzd2NKU09OW25vZGVdLFxuICAgICAgICAgICAgICBzd2NKU09OW3N3Y0pTT05bbm9kZV0ucGFyZW50XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ldXJvbi5hZGQoY29uZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBcInNrZWxldG9uXCIgfHwgdGhpcy5zaG93X2NvbmVzID09PSBmYWxzZSkge1xuICAgICAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJza2VsZXRvblwiKSBtYXRlcmlhbC5jb2xvci5zZXQodGhpcy5jb2xvcnNbMF0pO1xuICAgICAgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcbiAgICAgIE9iamVjdC5rZXlzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChzd2NKU09OW25vZGVdLnBhcmVudCAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IGdlbmVyYXRlU2tlbGV0b24oXG4gICAgICAgICAgICBzd2NKU09OW25vZGVdLFxuICAgICAgICAgICAgc3djSlNPTltzd2NKU09OW25vZGVdLnBhcmVudF1cbiAgICAgICAgICApO1xuICAgICAgICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2godmVydGljZXMuY2hpbGQpO1xuICAgICAgICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2godmVydGljZXMucGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBsaW5lID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgbmV1cm9uLmFkZChsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldXJvbjtcbiAgfVxuXG4gIC8vIFNldHMgdXAgdGhyZWUuanMgc2NlbmVcbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5lZmZlY3QgPT09IFwibm9lZmZlY3RcIikgdGhpcy5lZmZlY3QgPSBmYWxzZTtcblxuICAgIC8vIHNldCB1cCBjb2xvcnMgYW5kIG1hdGVyaWFscyBiYXNlZCBvbiBjb2xvciBhcnJheVxuICAgIHRoaXMudGhyZWVfY29sb3JzID0gW107XG4gICAgT2JqZWN0LmtleXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgdGhpcy50aHJlZV9jb2xvcnMucHVzaChuZXcgVEhSRUUuQ29sb3IodGhpcy5jb2xvcnNbY29sb3JdKSk7XG4gICAgfSlcbiAgICB0aGlzLnRocmVlX21hdGVyaWFscyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgIHRoaXMudGhyZWVfbWF0ZXJpYWxzLnB1c2goXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzW2NvbG9yXSxcbiAgICAgICAgICB3aXJlZnJhbWU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0dXAgcmVuZGVyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFudGlhbGlhczogdHJ1ZSAvLyB0byBnZXQgc21vb3RoZXIgb3V0cHV0XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yLCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5XSURUSCwgdGhpcy5IRUlHSFQpO1xuICAgIHRoaXMuZG9tX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIC8vIHRvIGxldCBvbi10b3AgcmVuZGVyaW5nIHdvcmtcbiAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuXG4gICAgLy8gY3JlYXRlIGEgc2NlbmVcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAvLyBwdXQgYSBjYW1lcmEgaW4gdGhlIHNjZW5lXG4gICAgdGhpcy5mb3YgPSA0NTtcbiAgICBjb25zdCBjYW1lcmFQb3NpdGlvbiA9IDEwMDAwMDtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIHRoaXMuZm92LFxuICAgICAgdGhpcy5XSURUSCAvIHRoaXMuSEVJR0hULFxuICAgICAgMSxcbiAgICAgIGNhbWVyYVBvc2l0aW9uXG4gICAgKTtcblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSBjYW1lcmFQb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLnNob3dBeGVzKSB7XG4gICAgICB0aGlzLmF4ZXMgPSBuZXcgVEhSRUUuQXhpc0hlbHBlcih0aGlzLnNob3dBeGVzKTtcbiAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYXhlcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmxpcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jYW1lcmEudXAuc2V0WSgtMSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV1cm9uID0gdGhpcy5jcmVhdGVOZXVyb24odGhpcy5zd2MpO1xuICAgIHRoaXMuc2NlbmUuYWRkKG5ldXJvbik7XG5cbiAgICAvLyBmb3IgZWxlbWVudHMgdGhhdCBtYXkgYmUgcmVuZGVyZWQgb24gdG9wXG4gICAgdGhpcy5zY2VuZU9uVG9wYWJsZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgaWYgKHRoaXMubWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IG1FbGVtZW50ID0gY3JlYXRlTWV0YWRhdGFFbGVtZW50KHRoaXMubWV0YWRhdGEsIHRoaXMuY29sb3JzKTtcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQuYXBwZW5kQ2hpbGQobUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLmRvbV9lbGVtZW50KTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICAvLyBUT0RPOiBoYXZlIGEgY2FsbGJhY2sgaGVyZSB0aGF0IHJlcG9ydHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlXG4gICAgLy8gY2FtZXJhLiBUaGF0IHdheSB3ZSBjYW4gc3RvcmUgaXQgaW4gdGhlIHN0YXRlIGFuZCByZXN0b3JlIGZyb20gdGhlcmUuXG4gICAgdGhpcy50cmFja0NvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FtZXJhQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbjogcG9zIH0gPSB0aGlzLmNhbWVyYTtcbiAgICAgICAgdGhpcy5jYW1lcmFDaGFuZ2VDYWxsYmFjayh7IHg6IHBvcy54LCB5OiBwb3MueSwgejogcG9zLnogfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJheWNhc3Rlci5wYXJhbXMuUG9pbnRzLnRocmVzaG9sZCA9IERFRkFVTFRfUE9JTlRfVEhSRVNIT0xEO1xuXG4gICAgdGhpcy5kb21fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuICB9XG5cbiAgY2FtZXJhQ29vcmRzKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb246IHBvcyB9ID0gdGhpcy5jYW1lcmE7XG4gICAgcmV0dXJuIHsgeDogcG9zLngsIHk6IHBvcy55LCB6OiBwb3MueiB9O1xuICB9XG5cbiAgY2FtZXJhVGFyZ2V0KCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSB0aGlzLnRyYWNrQ29udHJvbHM7XG4gICAgcmV0dXJuIHt4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnksIHo6IHRhcmdldC56IH07XG4gIH1cblxuICByZXNldFZpZXcoKSB7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnJlc2V0KCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcmVzdG9yZVZpZXcoeCA9IDAsIHkgPSAwLCB6ID0gMCwgdGFyZ2V0KSB7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLm9iamVjdC5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnRhcmdldC5zZXQodGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQueik7XG4gICAgfVxuICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgfVxuXG4gIC8vIFRPRE86IGFsdCBjbGljayBzaG91bGQgdGFyZ2V0IG1lc2hlcyBhbmQgY2VudGVyIHRoZSBvcmJpdCBjb250cm9sc1xuICAvLyBvbiB0aGVtIGlmIGludGVyc2VjdGVkLlxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZG9tX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICBtb3VzZS54ID0gKChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHRoaXMuV0lEVEgpICogMiAtIDE7XG4gICAgbW91c2UueSA9IC0oKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyB0aGlzLkhFSUdIVCkgKiAyICsgMTtcblxuICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobW91c2UsIHRoaXMuY2FtZXJhKTtcblxuICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKFxuICAgICAgW10uY29uY2F0KHRoaXMuc2NlbmUuY2hpbGRyZW4sIHRoaXMuc2NlbmVPblRvcGFibGUuY2hpbGRyZW4pLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBjb25zdCBwb2ludHMgPSBpbnRlcnNlY3RzXG4gICAgICAuZmlsdGVyKG8gPT4gby5vYmplY3QudHlwZSA9PT0gXCJQb2ludHNcIilcbiAgICAgIC5maWx0ZXIobyA9PiBvLm9iamVjdC51c2VyRGF0YS5tYXRlcmlhbFNoYWRlci51bmlmb3Jtcy5hbHBoYS52YWx1ZSA+IDAuMClcbiAgICAgIC5zb3J0KChhLCBiKSA9PlxuICAgICAgICBhLmRpc3RhbmNlVG9SYXkgPT09IGIuZGlzdGFuY2VUb1JheVxuICAgICAgICAgID8gYS5kaXN0YW5jZSAtIGIuZGlzdGFuY2VcbiAgICAgICAgICA6IGEuZGlzdGFuY2VUb1JheSAtIGIuZGlzdGFuY2VUb1JheVxuICAgICAgKTtcblxuICAgIGlmIChwb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0T2JqZWN0ID0gcG9pbnRzWzBdO1xuXG4gICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgIGlmICh0aGlzLm9uX3RvZ2dsZV9ub2RlKSB7XG4gICAgICAgICAgY29uc3Qgc2FtcGxlTnVtYmVyID1cbiAgICAgICAgICAgIGludGVyc2VjdE9iamVjdC5vYmplY3QudXNlckRhdGEuaW5kZXhMb29rdXBbaW50ZXJzZWN0T2JqZWN0LmluZGV4XTtcbiAgICAgICAgICBjb25zdCB0cmFjaW5nSWQgPSBpbnRlcnNlY3RPYmplY3Qub2JqZWN0LnBhcmVudC5uYW1lO1xuXG4gICAgICAgICAgdGhpcy5vbl90b2dnbGVfbm9kZSh0cmFjaW5nSWQsIHNhbXBsZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMudHJhY2tDb250cm9scy50YXJnZXQgPSBwb2ludHNbMF0ucG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbl9zZWxlY3Rfbm9kZSkge1xuICAgICAgICAgIGNvbnN0IHNhbXBsZU51bWJlciA9XG4gICAgICAgICAgICBpbnRlcnNlY3RPYmplY3Qub2JqZWN0LnVzZXJEYXRhLmluZGV4TG9va3VwW2ludGVyc2VjdE9iamVjdC5pbmRleF07XG4gICAgICAgICAgY29uc3QgdHJhY2luZ0lkID0gaW50ZXJzZWN0T2JqZWN0Lm9iamVjdC5wYXJlbnQubmFtZTtcblxuICAgICAgICAgIHRoaXMub25fc2VsZWN0X25vZGUodHJhY2luZ0lkLCBzYW1wbGVOdW1iZXIsIGV2ZW50LCBwb2ludHNbMF0ucG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYW5pbWF0aW9uIGxvb3BcbiAgYW5pbWF0ZSh0aW1lc3RhbXAgPSBudWxsKSB7XG4gICAgaWYgKCF0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXApIHtcbiAgICAgIHRoaXMubGFzdF9hbmltX3RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aW1lc3RhbXAgLSB0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXAgPiA1MCkge1xuICAgICAgdGhpcy5sYXN0X2FuaW1fdGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgICB9XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvLyByZW5kZXIgdGhlIHNjZW5lXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgaWYgKHRoaXMub25Ub3ApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmVPblRvcGFibGUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIC8vIG9uVG9wYWJsZT10cnVlIG1lYW5zIHRoYXQgc2V0VmFsdWVzKHsgb25Ub3A6IHRydWUgfSkgd2lsbCBtYWtlXG4gIC8vIHRoZSBuZXVyb24gYmUgcmVuZGVyZWQgb24gdG9wIG9mIChpLmUuLCBub3Qgb2NjbHVkZWQgYnkpIG90aGVyIG5ldXJvbnNcbiAgLy8gdGhhdCBoYWQgb25Ub3BhYmxlPWZhbHNlXG4gIGxvYWROZXVyb24oZmlsZW5hbWUsIGNvbG9yLCBub2RlcywgdXBkYXRlQ2FtZXJhPXRydWUsIG9uVG9wYWJsZT1mYWxzZSkge1xuICAgIGNvbnN0IG5ldXJvbiA9IHRoaXMuY3JlYXRlTmV1cm9uKG5vZGVzLCBjb2xvcik7XG4gICAgY29uc3QgYm91bmRpbmdCb3ggPSBjYWxjdWxhdGVCb3VuZGluZ0JveChub2Rlcyk7XG4gICAgY29uc3QgYm91bmRpbmdTcGhlcmUgPSBjYWxjdWxhdGVCb3VuZGluZ1NwaGVyZShub2RlcywgYm91bmRpbmdCb3gpO1xuICAgIGNvbnN0IHRhcmdldCA9IGJvdW5kaW5nU3BoZXJlLmNlbnRlcjtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZUNhbWVyYVBvc2l0aW9uKHRoaXMuZm92LCBib3VuZGluZ1NwaGVyZSk7XG5cbiAgICBpZiAodXBkYXRlQ2FtZXJhKSB7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudXBkYXRlKCk7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0LnNldCh0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC56KTtcbiAgICB9XG5cbiAgICBuZXVyb24ubmFtZSA9IGZpbGVuYW1lO1xuICAgIGNvbnN0IHNjZW5lID0gb25Ub3BhYmxlID8gdGhpcy5zY2VuZU9uVG9wYWJsZSA6IHRoaXMuc2NlbmU7XG4gICAgc2NlbmUuYWRkKG5ldXJvbilcbiAgfVxuXG4gIC8vIHVzZSBvblRvcGFibGU9dHJ1ZSB0byBjb3JyZXNwb25kIHRvIGxvYWROZXVyb24oLi4uLCBvblRvcGFibGU9dHJ1ZSlcbiAgbmV1cm9uTG9hZGVkKGZpbGVuYW1lLCBvblRvcGFibGU9ZmFsc2UpIHtcbiAgICBjb25zdCBzY2VuZSA9IG9uVG9wYWJsZSA/IHRoaXMuc2NlbmVPblRvcGFibGUgOiB0aGlzLnNjZW5lO1xuICAgIHJldHVybiAoc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGZpbGVuYW1lKSAhPT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8vIHVzZSBvblRvcGFibGU9dHJ1ZSB0byBjb3JyZXNwb25kIHRvIGxvYWROZXVyb24oLi4uLCBvblRvcGFibGU9dHJ1ZSlcbiAgdW5sb2FkTmV1cm9uKGZpbGVuYW1lLCBvblRvcGFibGU9ZmFsc2UpIHtcbiAgICBjb25zdCBzY2VuZSA9IG9uVG9wYWJsZSA/IHRoaXMuc2NlbmVPblRvcGFibGUgOiB0aGlzLnNjZW5lO1xuICAgIGNvbnN0IG5ldXJvbiA9IHNjZW5lLmdldE9iamVjdEJ5TmFtZShmaWxlbmFtZSk7XG4gICAgc2NlbmUucmVtb3ZlKG5ldXJvbik7XG4gIH1cblxuICBzZXROZXVyb25WaXNpYmxlKGlkLCB2aXNpYmxlLCBvblRvcGFibGU9ZmFsc2UpIHtcbiAgICBjb25zdCBzY2VuZSA9IG9uVG9wYWJsZSA/IHRoaXMuc2NlbmVPblRvcGFibGUgOiB0aGlzLnNjZW5lO1xuICAgIGNvbnN0IG5ldXJvbiA9IHNjZW5lLmdldE9iamVjdEJ5TmFtZShpZCk7XG4gICAgaWYgKG5ldXJvbikge1xuICAgICAgbmV1cm9uLnZpc2libGUgPSB2aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE86IGdldCB0aGlzIHRvIHdvcmsgd2l0aCB0aGUgcGFydGljbGUgbW9kZVxuXG4gIHNldE5ldXJvbkRpc3BsYXlMZXZlbChpZCwgb3BhY2l0eSkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09IFwicGFydGljbGVcIikge1xuICAgICAgY29uc3QgbmV1cm9uID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuXG4gICAgICBpZiAobmV1cm9uKSB7XG4gICAgICAgIG5ldXJvbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQudXNlckRhdGEubWF0ZXJpYWxTaGFkZXIpIHtcbiAgICAgICAgICAgIGNoaWxkLnVzZXJEYXRhLm1hdGVyaWFsU2hhZGVyLnVuaWZvcm1zLmFscGhhLnZhbHVlID0gb3BhY2l0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRDb21wYXJ0bWVudChpZCwgY29sb3IsIGdlb21ldHJ5RGF0YSwgdXBkYXRlQ2FtZXJhPXRydWUpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTG9hZGVyKCk7XG4gICAgbGV0IHBhcnNlZCA9IGxvYWRlci5wYXJzZShnZW9tZXRyeURhdGEpO1xuICAgIHBhcnNlZCA9IGFwcGx5U2VtaVRyYW5zcGFyZW50U2hhZGVyKHBhcnNlZCwgY29sb3IpO1xuICAgIHBhcnNlZC5uYW1lID0gaWQ7XG5cbiAgICB0aGlzLnNjZW5lLmFkZChwYXJzZWQpO1xuICAgIGlmICh1cGRhdGVDYW1lcmEpIHtcbiAgICAgIHRoaXMuY2VudGVyQ2FtZXJhQXJvdW5kQ29tcGFydG1lbnQocGFyc2VkKTtcbiAgICB9XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBsb2FkQ29tcGFydG1lbnRGcm9tVVJMKGlkLCBjb2xvciwgVVJMLCB1cGRhdGVDYW1lcmE9dHJ1ZSkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKTtcblxuICAgIGxvYWRlci5sb2FkKFVSTCwgb2JqZWN0ID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGlkKTtcbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIG9iamVjdCA9IGFwcGx5U2VtaVRyYW5zcGFyZW50U2hhZGVyKG9iamVjdCwgY29sb3IpO1xuICAgICAgICBvYmplY3QubmFtZSA9IGlkO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChvYmplY3QpO1xuICAgICAgICBpZiAodXBkYXRlQ2FtZXJhKSB7XG4gICAgICAgICAgdGhpcy5jZW50ZXJDYW1lcmFBcm91bmRDb21wYXJ0bWVudChvYmplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJ0bWVudExvYWRlZChpZCkge1xuICAgIHJldHVybiAodGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpICE9PSB1bmRlZmluZWQpO1xuICB9XG5cbiAgY2VudGVyQ2FtZXJhQXJvdW5kQ29tcGFydG1lbnQoY29tcGFydG1lbnQpIHtcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKCkuc2V0RnJvbU9iamVjdChjb21wYXJ0bWVudCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KGJvdW5kaW5nQm94Lm1pbi54IC0gMTAsIGJvdW5kaW5nQm94Lm1pbi55IC0gMTAsIGJvdW5kaW5nQm94Lm1pbi56IC0gMTApO1xuICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgICBjb25zdCBib3hDZW50ZXIgPSBib3VuZGluZ0JveC5nZXRDZW50ZXIoKTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0ID0gYm94Q2VudGVyO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB1bmxvYWRDb21wYXJ0bWVudChpZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkT2JqID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlKHNlbGVjdGVkT2JqKTtcbiAgfVxuXG4gIHNldENvbXBhcnRtZW50VmlzaWJsZShpZCwgdmlzaWJsZSkge1xuICAgIGNvbnN0IGNvbXBhcnRtZW50ID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuXG4gICAgaWYgKGNvbXBhcnRtZW50KSB7XG4gICAgICBjb21wYXJ0bWVudC52aXNpYmxlID0gdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICB0aGlzLkhFSUdIVCA9IGhlaWdodDtcbiAgICB0aGlzLldJRFRIID0gd2lkdGg7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IsIDEpO1xuICB9XG59XG4iLCIvLyBDb252ZXJ0IHN3YyBmaWxlIGRhdGEgaW50byBqc29uIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHN3Y1BhcnNlcihzd2NGaWxlKSB7XG4gIC8vIHNwbGl0IGJ5IGxpbmVzXG4gIGNvbnN0IHN3Y0FyID0gc3djRmlsZS5zcGxpdChcIlxcblwiKTtcbiAgY29uc3Qgc3djSlNPTiA9IHt9O1xuXG4gIGNvbnN0IGZsb2F0ID0gXCItP1xcXFxkKig/OlxcXFwuXFxcXGQrKT9cIjtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgXCJeWyBcXFxcdF0qKFwiICtcbiAgICAgIFtcbiAgICAgICAgXCJcXFxcZCtcIiwgLy8gaW5kZXhcbiAgICAgICAgXCJcXFxcZCtcIiwgLy8gdHlwZVxuICAgICAgICBmbG9hdCwgLy8geFxuICAgICAgICBmbG9hdCwgLy8geVxuICAgICAgICBmbG9hdCwgLy8gelxuICAgICAgICBmbG9hdCwgLy8gcmFkaXVzXG4gICAgICAgIFwiLTF8XFxcXGQrXCIgLy8gcGFyZW50XG4gICAgICBdLmpvaW4oXCIpWyBcXFxcdF0rKFwiKSArXG4gICAgICBcIilbIFxcXFx0XSokXCIsXG4gICAgXCJtXCJcbiAgKTtcblxuICBzd2NBci5mb3JFYWNoKGUgPT4ge1xuICAgIC8vIGlmIGxpbmUgaXMgZ29vZCwgcHV0IGludG8ganNvblxuICAgIGNvbnN0IG1hdGNoID0gZS5tYXRjaChwYXR0ZXJuKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcblxuICAgICAgc3djSlNPTltpZF0gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlOiBwYXJzZUludChtYXRjaFsyXSwgMTApLFxuICAgICAgICB4OiBwYXJzZUZsb2F0KG1hdGNoWzNdKSxcbiAgICAgICAgeTogcGFyc2VGbG9hdChtYXRjaFs0XSksXG4gICAgICAgIHo6IHBhcnNlRmxvYXQobWF0Y2hbNV0pLFxuICAgICAgICByYWRpdXM6IHBhcnNlRmxvYXQobWF0Y2hbNl0pLFxuICAgICAgICBwYXJlbnQ6IHBhcnNlSW50KG1hdGNoWzddLCAxMClcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICAvLyByZXR1cm4ganNvblxuICByZXR1cm4gc3djSlNPTjtcbn1cblxuZXhwb3J0IGNvbnN0IE5PREVfUEFSVElDTEVfSU1BR0UgPVxuICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUgzZ0VIRFF3M1dJZS9wZ0FBQUIxcFZGaDBRMjl0YldWdWRBQUFBQUFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJrTG1VSEFBQWdBRWxFUVZSNDJ1eTllNUR0MlZYZjkxbHIvMzduZE44N2QrNjhyelI2WGIyUWhKQUV3aGdic0RCZ1hqS0pjY0IyeXNnNGZzUXBLb21KUThxcGNoNStWSkhZaVpPVUU1dUtVMFVTdTR3ZHUwalpCSXRuWW9PTkRVaUFFQ0NFcEJscEdLVFIzSm01TTNmdXE3dlA3N2ZYeWg5NzdmM2J2OU45TlpJc3dCaDZxdWQybjNQNlBIN3I5VjNmOWRqQ3YyRmZyNGVIZmdtZUF2ZzZlSHVHNDdmQ1Y0OXc4Rkg0d0RmQmYzUUE1MzVXK09rYnpyWFBoczg3aE1QM3dFL2VoR2N2d29PZkJXLytBZmk3ajhKN1hnRnZmZ29lZVFJZWVSSis1U1B3L0w5SjEwdCtBNzVmNzI5NEpWejhDTng0Qzd6c3krQ2Iveno4cFYrQkozNlNTei83RGNyYkJ3NjVaZHVUODRudG5FRU9jZkpHWkZmKzNrZkloNkEzSVJ2b0FhNTVKeGhrVHRqQjlPRjg5UGdINEFPUGNPWG5BYjBBOS80Yy9KTjN3dzgvQ3MvOGxnTDhHbjU5Rmp6d1FYam1XK0EvZXdZKzhudmhqMzhSbDc3NGFUMjgra1o0VmJJdCtmd0d6OEJ1ZE5tT29rZVEwMGc2RDF3SFN3UDZNREJSZk1WZGtPOEhuZ2Q1RnFaeFpuc0l4c1I4ZlVMVENIbENkT0xFMkczMXhpWURaa2U4bnlzZithZncvVDhCLytqZDhNK3V3c2x2S2NCbitPdmxjUGUzd3YvK2svRGRmd3YrM2s5ejZZblBUenc4K3ozTXRpR2xFZldSbmNDb2h6Q0J2Qkg4WkdDNFA4RmI0VGhCZW1CQVhxSE16d0k3R0Y0R0hNRDBVZERid0l0Qk1jYWZoM3dGMHZFTUp6QmJadjRvK0FkbjVIaEdtSERBeDlzQXpOTU9PT0dqSEQzenYzRGwyejhFUC9JVWZQU0R2d0c4dzcvV0N2QW1lRWtHL3lMNC9mOE4vUFdCeXdoYkg5akl3T2duakhMQXlNd0FuemV3dTdYbG5xK0hXdzhvSENSNENmaHhRalF4WDRSOEFwdGJrTThuWEVDT1lNZ3dueSt2bDA0eWVVeWtUVVljc21XNG1VbEhNRmpHTWZKVnhkOXY4SzRUN0JId1BPUE13RzBFK0JDM1B2WkJUajd3Q0VlLzlBUlhIdmtZUFBKTytON2ZVb0JQNGVzTjhQSXZnMjk2Qi95cE4zRHA4blc5NS9aRjI1eURjMndWWmp0RTdoNFlIdHd5dlVVWnZnQ21leFA2Y0dJNlR2aVkwR05JeHdsWFhjQkRTZ0JZRWp4QlRqRHN3SzNjcndwNjdQZ0lua0J5ampzZ1l5QVoxUXpuUVdRSE56UDVnNGIvMUF6dkFuL2lCR05tNGpiT3hJN2R5ZnU1OXVHL3paVy8vTlB3Z3grRUs3K2xBSi9nNjdQaDRjK0ZyL3pUOEZkZXc2VkxHKzdCMG5rOG4yTUEwc0VCdStNdGQzMmRzbnRMWXZOdzR2aXVoQThKMTRRY2oyeHZ3RHlBSFF5b2dhbDJxREV0a2hiSS9ZdHJFWG95UTJaSWxyR1UwSnpCRFpNTUN1QzRaRWlHcDR4dE16cGsyR1hzaVF3L3MyUCttY3o4K0RFY1R6QlBrRy9oZHNLLzRMSDMvalg0OTUrQVgzNDBNcFhmekFyUUVQMVh3VmQ5Q1h6VEEvRGd2ODNscnozZ0FxNmpKenNubWc1UUV2S2lEY01yRXNNM0p5YmJ3R0VpWjJYWUpaSUxtWVFuUlN5QlE5Nk81ZG10Zk1UcUNjb25WbEREVWNDUUhQZGhNTlRiSUxtUkJkUWRwSVFGc1BKOGFRSXllWERRakNmRDJJR0JQcnZESHMzWUwreVlmL0VFZTNwbWxvbmI2ZmJ1eCtjYjcvcVgwMlB2L0p2d2wzOHpLNEFBL25wNDVYOEkzL0ZGOEtYM2N2bndnQXNNak5qaE9ZYjVnQ0Z2MlY0Y3laOFA2UXMzakMvZk1COHBUbUx3Z2JSVFJCSW5HOFUxQVlKWUViQ3I0aEtDVmNFazRWNmNRSmh5a1dWeEU4MExGSTl2Y1YrT04rdTRXRkVNaC9JaUR1VHk5NUxKNFJFOHpkaDJJbG1HNTNhY1BKcnhIOXVSMzUyeDZSalNSUGJiWURmNEd6ejJQLzR3Zk9kajhNaFYyUDFtVWdEOWsvQVh2eFgrUytPU0hYS1BIT3A1U1p4anNBTkd0c2hHMGRkdU9QaTNOdGpESXo0azVHZ0ltV3l4RGNYdFR3bDFiVUlVRjV5UlBDaXVZQ0tvZzhUOXJvb2x3OE1UQ0VXTzRReFF0VkNpVUE0Z21aY3dNRmdKRldRUUwxNUVacVFHR1oyS011aUViUnlHQ1RtWFFYWU1UMlJ1L2NRRS8vaUUrZG94ODNTYng1bWUrZ2x1L0lzZjRMSC85WWZnaDM1VEtNQXI0YUhmRG4vMHozRHB2N3ZBSVluNzJPZzVOall3Y0o3TlJwSGRJY00zYkJpK1JzbTNCcmE3UkpIbUNENkU5UTVoemlta0YxYnNLVDZaa3BYaUJWUndCQ3hjUUNxQ3pPRWhrcGNySWRtYUlnaU9LbUFlRjhsSzNOZGkvU2JnWTl6R1hMeURXSGlOekpRTWhvd3drWFZHYlNMUG1aUDM3dEIvTnJGNzd3bG14d2kzbWJqRlZhNWQrK05jZWV0TnVQa1JlUHJYU2g3cDExRDIyN2ZCVjM0RC9NOS9nTXQvNUM3dUd6WjZMeXAzc1VtSERIWU9ZWXRmUG1UN2ppMEhieDN4cTFzMmVRUFRBVEtOeUR3d1RDT3kyNEtOeURTUzVvVE9BOHdiMGpTZ3U0VG1BYzhET2cxb1RvZ04rRHdpZVFBZk1FdTREWWdOU0U1SVRtQUpzWVJNUXp5dWhCcXhBWm0xcEF6MThaWlFHNHBTWlMyUElTRnpDZ1ZNT01KZ0FpUnlFcWF0b29jSjNxUWNmS2x3K0ViRmR3bDdlc0RuUXc1MDJOenI1MTUvZ1dzdi9TRDgyRWtGRy8rbWVJQi9ENzdqRDNMcFcrN2pIdUE4Mi9GdU5yYmxNRy9ZakJ2U3RPSGdkNHdjL3E0QkxvM284UWk1dUhoUVVrN2dJNEpHVkI0UVV4d0p0NTlxdmdaSnlRaElQRGJraDRDVFNuaHZscjQ0RHdBeGkxY29pSjhoL3NVUTh3Z0xCc254VFhtQ3JBWXlSeWFSeTg4cGh6ZVlJUmU4a0xjVE1PR2JtYXpIekUvc21INGtNLzNFRWZuWkdUamltR3Z6ZDNMdGIvd0RydnpYajhQMTM5QUtjRGVraCtGei96RDg3Yy9sOG1jZmNzRVBPU2NqaDV3L09NL21lT1JnczRIZGhzTzNqTnoxN3d6QUNIbGt5QW1PRlZJQ0hZc0M1QUZNRVJVOHJFdHEvSGNKSENERjVZc3VLV0F4VkpDaU1CNCtYMWdxQ3hKMlcrQnBFYXc0YVB6ck1rT3FVTU9LK3gvb2dLQ1h0RkJ6T0lFWnhNbHBoclREa3dFWkh5Zm16Y1M4eVlqdU9MUk1ldVNJcS8vWHhPNDl0NEFqWm03emZtNTg1Sy93MkIvOGwvQlR2MkZEd0IrRi8rTS9nTzk0a01zUGp0em5JeGRreTkxc09jY3dieGs1WUV6blNHOFlPUCtOaDR6SEIraThJUjF2a05zYmtvOW8za0Fla04wSWt4YjNQQ1ZrMmhTWGV6S0NWZVVZeXMvVGdNd0p6eHFrd0lEbmhGdHhCVEtQNVcvbkZIOHJTQjZRU2N2dDB3Q2VRdWtTa2dFcHQwbVdFZ0t5UXBiaThpM2NDelVOTGNvb1dZdDNraEV4Ujd4Z0djMERraDMzZ1NrNUp3K015QnRodURDdysraElPbGJ1eCs5OWpudTV6ZFZIUC82clNDbi9xbm1BTDRFLzlwWHc3Wi9MNjE0OGM1N3ozTTJHTGVmMGtBUGJzR1dETWZMUUd6WWMvdTZSZE4vQThQeFEwUDR1cUxqTmdCd25GQ2x4T2cvbDRwSkFwQUJDcXl4T2VBQVZFQ2xvUDk2TFV6eEJGcUg1OXlURitpVkU1eVd3TkxlUXdnTmdDSkNUb2ZXQnliRklCVlVOeE1nQkNQTUlQbVNFR2ZXTURZNXJobUhHVTBrWDBSMittVEdaY1owZ1RmamhEdktPMjkrMzQrWjNUUXo1RmlkY0I3dkZML0NCWC9wRDhJYmZFQjdncGZDS2I0Qi84SFl1L2FjUDhhb0x3Z1dVZXpqSElZa3RneHl5OVMySmtjTkxoOXozdXc3UWl3TnljOFJ0eEcyRHpodGtONUNPeDRJQjVrMVJpckJJcHJGWTlod1duaFBrRVhZS1B1QW5CWkRKVkFDZXV3TERZcFZaaXplWmk2ZkFBbXRZV0hnT1FHZUM1QkhKR21CU1N5eXhDRUdXY0VzQkJxVjRDeGZTcnVBU0l4V3l5YlNBamhxUFRDSUVTY3RpWkZJUVlmTW01Y0piakpPUEozWlhOaVNVZTducmdST0czYzl5NjhjKzAwYjdHVmVBTjhBN3ZvTEwvN0Z3bjIrNUtNcmRiRGxnU09jWWZjUEJjTUJnRzRiTklRKzliWXU5Y2lROW41RGRBVHFQeUx4QmRvSEdwNElIWkI2S3U5NE5NSTh3RGZpY1lDN0NJUTlOK0VVcFNyQzJLZUZUS245L29zZ3VsVkNReStQRVVoSG9yR2lXZ3ZiblVCb3I0VUJud1ZFc0o4UWtYTHhpbmlJRGlOVFRGRndSazVLeWl1S3lFRk9sZktpNGg4Q2xLSlQ0Y3A4NEhBMkprNGNTNmNVSmZRNU9yaXNUeXQzR2k0NFpucHk1OWZRMXVQMnZXd2dRd1A4MC9NeHJ1ZnptRFJkUzRpSWJEampna0swZWNtZ2J6ckhoa0FPMk9uTFg1eVR1Ly9JUmJvd01Sd2xTU2JHMHh1Z3N4V29ad2xVbjBxNHdmSVc2MWJBa2JjeWZtVVFhWDYwdFFHQ2lFVVVlaUQrTEZ1WXZCWVpqb1huUkVpSFFjUDhTMllBVTk1K3dDUDFXeUtBaHNvUEI0c25xN2JtRWhyRndBeVZ6bUxHaE1JWm9DUXVXU2tod2RtUXgwbmlFWEp5NDlmZ1J6LzlYTy96WkkyUnpqTytlNTl1NDhmVS95R1BmODYrYkFveHZnYmYvRVM3L3d3UHVFK01jRzg1empnMEhISExBaHZQamhtMGVHZTJBQjErV3VQRFdrWU1IUnVSb0pFMERLUWVBeTZtQXBiQzBJdWdTKzFOV1RCS2FCVFJoQnVxS1VOQTlLQ1phczdaUWpPSnVDL01uamZXdFZUNWZma1JrS1F5SkxPakJVZ1VKaFNoU01qWjZRZjZqSTJSSTRJUEJKaGV5U0F4TGptb3VBaDhOMG95UGhxVmNhZ21ENGVPTXBRa2ZKanhONURIam13bmttTjI1bWJ1Zm0zam1PMjV5NHlkM0pHN3hQTS96UVo1Nno3ZHk1UXV1NzlXemZ0MUN3SnZocS80WWwvNnhjcDhJRjFBOXowWTNKRGxra0FNR1BlRGN1Q1ZOQndnakQzenhsczM1TGJJcnNWM21BYzhscnJ1RkI1aHFyRTlCNGxUWFhYNzN1U2lMMjRCbFhWeDdWcGdDSzJTRldYQkw4UmpCYzRvd0VTSEFOSjViY2RPQzdpZGdMcTdjYzlFU01TMUtPUXMrSys0MUE1RG0vcG1MVjVLcGVDa0gzRXRLaXBkUVFpNXFWV29LUmZYY1N4Z1IwYUtnTG9nVkxISHpmaWU5WHNoUE90UEhJREZ3TDhPbHE1eTducm4yNUROdzdkZFZBYjRDL3Z6djRQS2Z1Y2g5RDhGRmxQT01jc2hvNXhsOHl5QmJ0bWxiNHJ0djJGN2NjdC9uRE9qeEFDY0Rza3V3RzVGcEtMRjhHaVB0R3pCUCtGeENBN3VFVmJDV1E2QVJyeVZINmhiQ0xzQ3d4RzMzVklTUlN5cFlRRno5dDRBNm1VTFFKbmd1aWxGd2dKUndNOWNZRDhFdkJ6TVlxV0NBUW5FSmtGY1V4TE1XWVllU1dBamVTYmdVNENpcUJWQUdMZTFOSk1VTjZReCsvMEM2VzVuZXAvaVJrRjNsUy9DdnZnZDUvZi9McmIvejY2WUFkOFBoTjNQcC83N0VmUzl6TGpKd25zU0dKQWNNc21YMExZTnYyVEl3MkJiVkRmZStPbkh1NGdiZmpjaXVDSnJkZ09ZeDh2ZWhDTk5TV0d2azhGN3lkcmVDNW4wdWxLeFA1V2NMNnk3V0dmOEd3SE1MejFBVm9QKzJzR0pYWktwY1FRQS9LOENQckpoTDVQRlNBR0ZnRUhNcHIrY0JDQzJSM1l0SGNDbldYS3BTcUpXZnhTZ2hTd1EzRFNqanVDZ3VqcURCRXpnMktENDU0NnVkelhubjVuc1VuUVZCL1NVTXIza0tlZnlEM1ByWlgzTUZlQlc4OFM5eTZXUG5lR2dMRjBtY1owd2JSamxFN1R5amIwaHNHZG1RWkdUd0RlZnZIcm40NmczSmk2WHJOQmIzSG1pZFhhUmw4NEJQUWV4RU91ZFQ0ZTQ5Y0VLMWN1WVFLa05uMVNVOXF4dy91U3BEY2R0bWlsVUVQbFhYWFJXaUZKcmNwTGo5T1JYQmVMRlVuOE9kV3lrd2xkQ2d1SG14Yk91bzZlaEZ3SXBiZDVmeVk0QlhsMUt0TEp4R3FVVzdsNUFnbGtDOUpJc201QXk4WExqdnBjNno3MUxjUkFUbFRReS8rOTA4OVYxWFAwM2ErTk5TZ0RmQ2Izc3pmTXVMZWVsdnkxendEZWRGT0UveUF3WTVZUFFOeXBhQkRZbUJ3VGRzZGVUOC9RUG5MZzM0Y1hINVBvL29YSVRyODFnc2VpN0swTDduU04xQ29EWWxQTmc0c3dHM0VFNTE5MVppdklWVnV0WHY5ZS9FMytIRk5STzNTN2gybTZ2ckRpdU5GRSt5Tk9yWnF5TDBHQ0I0WjQvZWhJSVZ0SGtFejhFWjRLVkhRYXlRMEFVVU5MRHE2cUNwUEE1QmRzSjBEbmlSSUNqemh5Qm5ZNE1mN0xqcmduSDE2U2ZnbzUrcUxJZFB3KzFmL0VQd0QxN001VmVPM01QTW9hQmJFZ214QTVRdEkxc1NHd1pHRWlNd2tvZVJkRGhnODRnY0pkd0tzWk5KREhNUjhFeXByR25XaGVjUHEzSUU5NkhGMk54Z3ZDeWRIQjYzQjlIU1dEL1ZRdTlYNEZYUnY4V0ZsdmpYYXMzQXczQzlKQ0twM3FmQkZucDVqWnhRQ3RxUElpQ1NCVThLUHBPU3dwU3hzWlNHTVlubks5U3hlaWJiQnZlTTJRWnNMa28xTFBtWnNjV2xKQ0hubnpGMkZ6S0hYd28zMzVPUkR4NEM4QTFNZi9LMXZPNTN2cHNQZk02dnFnZTRHN1pmQ3QvK3hWeittc3dGakxzWk9ZLzZBY2tQU1J3d3lJajRsb0VCWmNQSWlEQnk3akJ4L29FTmd3U3ZYeG00WFFGd2JrUHhDcm1nZkxLVTIzS0p4V1pEQTNReWx4aHZ0Vm9Zb013QzBFbmw2YWNJRVZOWTdSUmhJRmk3a2k3V1hvT0l6Ulg0UmR5dWdBNFRaSmFDS1lSaTliTmdFUm9La1JQS0Y3UzBHd1hzZVhpcDZGTW9hRTlhaENBSUk2OWRjaDVGS2hjY1IxeEx5OWtBYm9uTmcrRFBDTlA3amV6S2pQZzk3QjQ2NE55TGZvWnI3L3pWVW9EMGhmQ09Qd0RmcnJ4TWxJc1loMnpZb2h5Z0hEQ3dKZmtHWlVUWmtNSURLQU9IQnlPSDl3NmtYVW5oZEM1dW43bTY3UUJnOHhEc1dDbStGQUEzaE1WcEE0ZTF1T00xVmN1RllmT0t3TDM4SzU0d0x5U1JTMkhvekN2TnF3RWVGMWR1QWZqcTd4NXBXZ2tQUXFhK1pzVHp3QTMxOVJycWQxcWFhTlQ0cnkxc0VDbGliWTAwSkxnTFdZZ0s4K0tsOE1BSklPSjRodk52TXA1K256TThuY2trVVFaL0Zma3RMMExlL0l2YytuOU9Qa21PSUgwS29PK1Z2eE8rN2VXODduV1pDMnk0bTRGRFJBOFo1WUJCTmd5eUpmbElZb3N3TWpJV0RLQURtKzNBd1lVUk9TazBMMU54OVdJSjk2RVZleVRpdUZXa1g0SGRWQkg4c0ZUaGFpNWVZeXdsWkxTODNOTTZCbHYzYjZSb3EvdXE1V2RwbVVFTk9UWG0xM1RRNiswVzlHSllMRFZjbVJSZ1dNTlJrRlB1MmdUdENCWmV3bXY4cjBvZ0h0N0N3NHVBaUdEWk1CTnlNdTU3cWZMMFQyZUdDZFJkTWptOUhGNzNFYTcrN0MvREwzMUdGZUF2d0lkZnllWFBVUzdLd0YwbzV4QU9HSHlMK29Za3hmS1RiMUdHY1AwRGlaRlJSc2JEa1lOTlFuWURHbVZiaVRLdUJ2alRBSFhtUS9Ec05ZOGZzTUFKWXNIZld2UnhpeUlTblRlV1NycldXc1JPZjF2dnFwRUd6c1FEalZmaHE1TEQwZ3YxTE1XTGVIaUtac1dsWG1nV25zUEJ2WFNmbVdoWVAzR2ZZdWFsRnBBOXdsd1FSRlFGQ2lYSVVocEpwSG9BSWh3VVFDQWJSZTkyNW1maCtCSG5KRnBkQk5kWHNQM2k3K1hhLy9USk1MMmZqQUlNcjRlMy9oNHUvV25oUG9GN2NjNXp3QmJoZ01RQmlTMHFHN0FSWmN1R29TZ0RJNG1FK3NqNWMwVXRTbjFlbS9DbHRtZmxjUGtlNUk1cDVOM0ZHelFMbDBJSUZaNi9JdnNJSDJqcEV2SXVEQVRSWXVFSnRBcGFKTEFGelMxTGpkOGh1TW9Ia0tWWWFVMEZQZTZyOGQ4V3dYbGUwcnptRWFwZzQ3VzllWk1TUm9vbjg4V0x0Q1lrd1VvM0NtSWc1dmhRc0lpY0dPYWdoNW5qOTRGTVRuYkRnUkcvK3dRWmY0bGIvK1NGbE9BRkZlQzE4TWJmRFgvcFpiejBkYzRGRW5laHVrWDBvSUE5M1RMNGlPcUcwVWRHTm9nT3BXMmJnY1FHSVhGd2ZrUnRRRjFKYzBJWVNxVXZldXdLV1ZJRXJqbmNkeTdDSlNwbitGRGNZVXUxaW1LVUZDOG8yaHFqZlFGdkhtSEN2ZFFLYXZwWFhHeTRlU25ld1NqZlh1c0w0ZTdMejZFNDNubUN5T3ZkV1pRcCtvUzllZ1Nqd3hMTC9TYTFMOGxibUNoZEJsNjRBQTk5aUd6RkhVd05WOEdHOG9EeGtuRDF2WTVlZGVZQkpoTkdNcStEdDcyTHEzL3IrUmVnaWw5UUFiNE0vdk0zY1BsckwzRHhyc1E5d0FHcUI0eStSZndBOVMycWtmTjdRZnppQ1EwL29Bd01ES1FoTVVoeDQycGpoSUJvNjdLU0VXaXUxbHh3QVZaNisyczZXQzVTV21qWUxyOHVlWmkwMkk5TEorUjR2Q3g0d0gwaGRPaXhRRlV3RDBGblJaQUNEazN3RnI4MVhIc0JmU1pTdUh3dmp4RVR6TUhuSUl0d2NqQ0RoUWFRTUh4WjVobXloTEpJaXdqTkc3Z2dZZ2lSR2NUdG51RGd4Y1p6UHlwTVc0TTVjMFR5aVdNdUlxLy9DVzU5MTcrU0F2eForTUY3ZU5sZHlnV0VMY0tHVWMralZvUXVqQ0Fia2xWckwrNi8ySDhOQllra2lVRkwvTmZhYmV1bDhxY2hVTGVFUzJxa2phSm9oSUVlOEpXTEhsaWdXbkhnZ2FXQzJBczh1SGFYRlVXTExHRFB2SFB6ZEc0NmZwYTRIdzlVTDFWUW5WSllaL2tOd1VjTUQrcllWUm9tOUU2aHJLYUZKcVZOZmRjNzd3SXNuS0pVSllSWmVaTFJ5VHZuK0FPT1h4TmNackpuRVZRdVlpLzVPRmQvNmdsNDlGTW1nbDRDRDcwSi92ak1aV1pHUmc1SUhDSzZRVWxvZ0R4bFJLeUlXMGpoOWdlVTB1Q1pvbmMvVWRJNW9aUnZTeDRlUWd6aXA3Umg2MktSQVd1UW9nd1dLRnhWbGc3Z21QY3pha3ExZkNzVS9CRFRRZVgzK0ZWTGliNWxYaDdEZ2xYUFBMcEZ6YkU2STVCOTZTSTFiV1hmMHVRUk1GOEtRZytFV0xaT0RORnRuQUxnVGNDMmZIUVNXQVkyRGo2Z0E4emk1YkprMEYyaGcyeHhCZEhVT3NDaFl6Y3poNWNIaHZ1TjZ4K2I4WFJZbWsvSmpKdy9mQU9YLy9DN2Vld0hQMlVGT0FjdmZqVjhqWEVCNVZ3SWFJUElCdk5pK2NxQWhMVVhwUkNFQkhHTG9vZ3Eya0NmQkhBckxkMFc3VkRxeTRDSHlKTE9XZC93RWFCS1JNaForeXArY2RNYTBWU2s5WGxuYTgzZDhkcTBmRHBudW9aQWNQT1lKL0ZRckM0MlE2RDNJUFpMczJCaE1nT2xpMW5NSDNyeEhDS0VlY2RUQ05rTFNCUXRuZU5zU2hOMDljTWFCSk40S3JlNVlZZmV4T1QxdFpsTHZVS01nWkdiUjg2RjMrNWNlMTltNXhPdWg1Z1p4amxHcGdkZUJBOC9DVTk4U2lIZ20rRUhYczdsenp2SFhjUEFCWVR6Q0llSWJGRGJMRHcvSThJRzFiRjA4VEtpY1krUVNENGdPcUNlU0ZwU1B2RnluMVp2RUQzKzFjV0xCRkhUcG42VzVwQlNaRm04aDRUU2VOZGYxM3VCbGhLYUJPTVdJU0NhUjZ2clh2NUdsL2p2cGExcmNjWFN5clRXbEtpYlBQSU95TG5VYVlLaVJrNGpoS1NHRUZuQ2dXUndDZVVKN3lFbVVTT0lieEZRSTZ2Z1lxWDhNQmlqWitTQzgrUS9BeEVqQTlsM25BQVBzM3Z0UjluKy9PTmNlKzhuclFBdmdrdmZDSDlWZU5rZzNGc0VUeFI0WkNUNUFjcFEwajgySkUzbGZrL2hGWVlJRHlYZTQ0bWtJMGtLMnRkQTlvaTJpcDFHcDYrUVNsN3ZLWkI0S2tnNVBJTkVlQkRWUU5EUmd0MERPSXVldktVWWdFaTk4QnFHcjUyU0xBcFE0bnNJczk0dXVxUnZ6YVZFUmE4WWZXQ0lHb3FLQXVTWVZZUUNFb3VYRVRxUnhtQ0xMOW1EZU1FRFhsTEFPb1lxTGlVRGtCaHg4eUNJUWhGc2w1bXVPTWRQT3FhWjNZRXh6ekJodkppVEwvb0Zydjc5MjJkVURJYzdzSDVmSlZ3bWNRNFlDcjNKQnRGRXRoTFhwWnZMazNEL1JmZ0w2U0tVN1J4Q0NDaDYrYXJyVDRIWUpacXZOWkMrV3dnOW1MamE4cVV4Y2lVcW5hVnJlUHhPWUNyTDRFZWxXT014MGdtZ2ZkbFpKaEdQMHFCcVhUQXJOWHFSZ2d2cXVMR3BGYUNYbzM5UUpRQ0dSdlFPTFZIRnN3WEo1U0ZZUTRkVTdBRXJ5bWFnbGtOWlUvRWtDaHdOcFNwa3FSU1VUZ3hqQkl6eHZzUk9qYVBTbTRidERvRWR4b0ZmNEo2SFBvZEw3L2dScnZ5M0wrZ0IzZ2hmOTJYd0Z5L3lzZ2VkY3lqbnc5SVBTTEpoa0lQQy9MRUp2ajgxRnJERThoRUpLQ2dNaUJTeVI2VW9UWkxVMEwyWU5xRUxpenV2Ymw5V3d4WWxkUlBwS0YzcHNVRC9MUzFWcXk1N2JmRWFxaERzWHVUNXBYK1FVMkNTanVGYnZFSll0VkJxQ1RVc05FOFIvSC93T3hiZXd3TXpGRTZnSW51dkZlTFdzMWd6Q3RSTCtFaUdpTU1Nekk0Rkw4Q1FjVEVzd2UwUE9QbHB4N016U3lhN2tObkpUT1lDOXBvUGNmWHYzTjdyS05aOUJiZ1hYdnN3bDErVkF1V1hoMnlpTER1R3U1WkE5cWxONkRaMEg1WmFZM3o1ZlJGVTlzVWJxTlVlK3pwekZSaUFGSzVUV3pHbEFUNml4MTdsRE9IZlNSbjI3K3N5QlYzLzN1WUpyYXNCc09DUFN1UTBjR3JhNHIvWG1vTEp3ak5VUWlzTGMwN1lKTmlrekhOcFcyZFgreG1WbkpWOHJFekh5andMZWFmTXg4cWNGWnNUZVpld25aSkpoUnJmSmZ4NGhPT1IrU2h4enl1RUcxUENEMHFJelpwQ2RnT1hPUCtLMTNQNWo1eWEwOStML2ZjL0JLOVd0Z2M3YWxHbkNMZ2kvdlcvS2RJOUtjSmNoWURVQkdkdHFLNG9nM2VQOFI3bDF3bTlISlU0VzRDZFVhcHBWb2N5cEhnREVZbGF3RnJRYmwwaHB6WnRzQWYyYkU4eHBPc3YwT0FEb29LWHN5NmtVYVNrMVhQVTkyVzJLSUtqekZFenlGR3F0aXpNbmtxTklYb2E1dWhXeXBNeVQ4bzBLZk9VeUpPU2N5S2ZERXc3SmNlM0hTdjV1Q2pDbk10dGMwNGtVNDVPUmlhVWJDUFpCNXlSaVFSc21SbjVDdmoyVDRnQjdvR1gzd052Y000RGg4eHNHRG1NWEdVc1lNOU9vMjBsWVlFTSt2czhsS1NvV2pmTHY0KzY2UUJlZGZ1YTF2ZmJrdDRaaWdaaEkrR09GeVVvN3JwNWlCYjdnNnRIb2lRdnJYdGNOZmlCYmdWTTZTK1JoWTlWWDlYczYzK0doUklVNU83WkNzVmhIVkIwaS9uQjh2dzVLYmlqT1pFVk5IdnBTZ0xVcldRQ21tQTJOQWx5bExCc2NLamtJWlV3Y0JMWEpTZElNM0kwc2p2T25MODdjWEpySnRmc2lRMHdzZVdReDdqdzh3L0F4V2U2YmFjckJYZ0kzbllmbDErM3R2QWlXTkUrTm11ejlCcTdxeFd2NzR1LzBXRng1MXFFbTZ4M3h4UmdWNnR4NFlLbGQ4Kzl5Ni9XMW9GQXJmRzlLUUt0WWdkYWhCeWlqUUhmOHJ2dEQrS25pTTIxZDhNNm9GZ0RkVGlMOEFKRk03VEY5UElBaTg0Z0M0OWhVU3BXc2hWQXFHS1FKUVpaU3F6UGtvSjhLcVZ2SFdaa3pFalNNdjJVdzB4S2R3aCtLSEEwTUcweTZUQ3hPeDZaYzhZWm1YVmlZa05peDQ3QkgrYmNiMzhSbDk3K0RGZitYdFB4N3BOdnZnVCtpd2ZaUGd3akExdUdaczFqaVNtVzJyU090OWdmMDdJaDhQb2ZYWXFtdGJldWhRSmxHYnZVczkxeEFEU3pQbVRJR2Q0aldxNmJ1eFZ5L0YzakVKQ09WSXJuM1FPS3JyV0czK09ONHM2emRjV2hXaXlLMENJc1hVR1ZHallUc2k4RHExYWJUV28yRXhqSTVoSmFjcFlXQWlvV21MTXdUMEtlbFRrUHpEbkYvWWs4cDhBSUNUdEtaQXBlRUFhT2QvWGFEa3cyQnVXWnVGMW1uZmgzdWVmdlBnRDNWWC9YUE1EbndOc2VoQWM5UU1PTU1zYlBGWlFsVXJkdWhVRHdRN2l2Nml2S0IwMW51blpwdVcrTitkWndRWW1INlN3MDMxeXZOa3ZmQjNQTGR3OXRaTjFoYzRmaEtNZGJsODdldEZzUU9kNHhnN1pVOCtJV05jTGxWc28yZnU1cUExWUxRRkVZS2w2dCs1bVNJbWF2NUpJWFlpajRhVW5sU3RiMUZSSVlTSk9TVHhKcFROeDhNbk5DWXFNRHM4MDRpZGtHZG13NFpJTnhnY2U0L2ZGbjRObFRJUEF5ZkwxenFWU1RHU0pYcDBQelE3amFhbFZqc1NKZG8rNVdJQWxSVmt0cWoxRmRXWjkzMWdaQ1JqcGUvN1JYOEU4b2ZEa0QrZThyd2ZJNC93VFpBWlhGc3pzOS94NTUxSjVUTUkyNWdnQ1F4cnF6cU84b3pxN01sc2d1bUtkaTZYUHhBalpMUWZvN3NDazFJSmh6S3NCeWxwSWxISmZNNHZuSFM5NldUVXZyR2lPa3hKemdOb2tuU0g2ZWN5OStDNWYvN0NrTThGcDRPeHppbkd1eDMzVnM2WmtIeW84cHlScFpHd3BXbFlpblN3Z290MnZuOWdzVnE2cHJqbCtseFVmUUZUTjNsb0I5N3paWkNlWk9saTkzSEl2ME0veENFYjZ6enhkVkQyYkxBR0o4Vm92N0FsRXFuWEpFdEJXUFVCQWJDdFdMNThnZU80bThsQkRxMUpBcDgrZ2tVMndYYzVCbVZETTBMMjNxZnFoTVI0bmJ0eEp6R3NpZXlaYVltQ0RCUEk4SU95NHdDTUFKMjBkV0h1QUJ1UCtsOEVyblFqaWMyTUJscFVKbm1sb29XSWlVVkVhZHFxVmIrUmt0WGtHMHhueTZXRnZMb1hWSU00UlhPWUE2eU5sQUgzc1dkMXI0aXllUlZXajVSTisyc3RyVEhxSy96L2R1YzZSdzhTcmttRWcyMkh0Y0dFWjErWlhVOFdvNFM2cnFYVWVTbXpDNU1xbEVPdFlBQUNBQVNVUkJWSHZCQktVZmdjSUR4TDlUTGh6QnRGT21uYkl6eFhiS3JTdkNGSGhpTnFHc08wanM4a2htWUdhREFlY1llU21iUDFIcWthRUFyNEN2eWx6aWhESEtPNlZFbFJzUnBIdHV1TXVSS2NqZVVFeWxyVXZ4cmd4YmQvVlUxMTdZTVczV1lhMEpYcnRhN1ozaWU4ZmNuU2x3VnZlZjliZHI1Vm1VeS9TRkZjSTZvTGNRVTlLd2tjZFNxclBldjB2QlErYks1Q1hjdVF1ektkbUZPUmRXTWVkeWpXWXJ1R2oyK0hjcWlwSG44cnROaFF1WVorWG0wMTJvWWNBSVRnREZyR1NPR2VXakRMeVI4ZTB2NTlLWE53VzRCRjgrYzFoNjl0Z3lSVHFVYWxvVTgvZHo1Nkp0TDM1Szc0S3RTd1dqYzFhNlZNN2pUZlYvYjMzc3QxTEt6ZWlaZGY3OWVMd0luRHNLdlBjU244ZzdaRDF0L2Z2S1lsMERTQTExYnRJVXlFeFgrTUcxZkxZcTVHeTBjR0hSWlZ3OHlmSjVMWWVnVFpnblpUZVhsdlY1Qi9Pc3pDZVUyMlpsM2duWG4xYm1YU0tqekZxVXpKMHlYMGtpeDdqT1BSSDFYOHZodHpRTWNBTFB6YkE3WU54NHVIOWpKTmQ0YktVQU0zUkVqL2JMR1dFTjlFNlJqZHJhcVB0aWptdTVtSlYwYWRzMFZoZTlMSHpXVXluZzJmSGV6NGovL29LWkFOM00zdjZYcjNvRGZPLzJwYkNrcmR0RTFXTnlLZDYvRmVYUDBSRk1MQ0t6bEZmOWhpcEY0SXZuQ2R5Z2hTK1lBUWJGYzQ1d2JPZ0FPU3ZYbjFPeXcwUml0b3hwMlo4OE1iZlh2RTVwNWpsZzVDcDhQeUREQTNEM0FMWmh1L0dpREJ4RVhFK3RWcFFhNTIwTGxZSWdaS013aExvd2JVYWhPVk1YczNNVWljdDYzc2lmUlVoaGNZSWlxYmkrZWorZFI3Q3V5K2Mwb3VjRkZlT0ZkbUw0M205VmFmS1p5ckE4cW9KRjYwcTgyV1NWU3FvV2JrSlVXbU5KcnVraE5NVXVua0x4NkR5YXBhdGdWdU1RQTExNkN0Z3BSN2VFNDEwRm5XQXFaUTQyMXRHWVZnNG5NVVY0dU03MmNjQ0hpL0R5KytGTkoydzRZV0NNb3NmVW1IbGxqdEc3MlhyaEw4UklrV3FraEZZZm9lME4xUnBBMXZKOGRYaEN2SWFEb3M5K2g1emVXKy9zd2h0ODZzSS8yd3ZZbm8zM3dxLzM1TzQzVTI5aHdJSVZNSlhXK1d2ZGJySm15ZVo3b0hNdi80L2F2bG5waVpsZGdrOHN0TFpraWMwbmVXbDgzUnEyVTVUTWphc2xYTTRJVTlLVzRHVnl3d0Z6ZHowekExL0c1dTgvQTY4WnpzR3JIK0RTNjBaR0xOeC9qaUtQczA3WHZERm1KVmJOcWd5VkpZc1dhUTFRcUtIWjJzVjNNV25nVHpVNlorTnZ2RXZwY2hETWZVMi9qOHM1cU9OMVdQaEVucUZDRTJudTk3UWkrTjdqUTJpeEw3angvVlhvZExOODNZWWhaY2tLbG80Z2FVMmcxb1ZNaXliUjJ1enBvazBOc3ltZW5Kd0x4VFJKNXdHeU1nL0NrSlRqbThxTm03RVNMOER6VEdKbVpnNmptMjIvQTJEZ01jWi9laDJlSE03QmErK0RsMDBCRWl5c3ZtaDNBUlVTeElLVTdYZU5yYk05UzlLNFRXd3RyQnBJUFBvNHBYTDVUUWtrWGxkSUVVcHlsM0QyZ3BFdUxLd2hoOFNTcUk3STBmMTV1OU54M3M4SURSWmV3THVmcStYN2lnK0kyMVo4Z2F4OWlnYmF4eGRYenpJQVpLR1FHY0ZIS2JPS0xEMmxMcVYyVUJuQjNFMml6Um1ldXdZN2d6azZUbWVVT1JTVU9EQmpXYW85VWphUkpuOHRmTjJIdVB5MXd6WDR1WUhEelZCYURWRlN1THdGNW5rSXhtMjU5cklxa0N4SVhGckZqdFlpMm9lQjVhSkw4Q1cxWHFndGZxWU92Rm5MbTNzUmhYTHRZUVZmeGV6VHc1Wml2WWlXQzcwMFlVUVFhS1NXTDZTUEZTVXdxeU1Fc2lvaytVcDVPaktweG5oZEZBTHorUHVlM3lqUGJkRm5hT3BrRStZc0RLRkVGaUREZ2lnNk9oS09qOHMxeXZHK1NyOUlUY2VuMVd1QWtjdlZsUzBqd01ud0l2aGNEZUdmMUkxcUpEYnhBU3kwYm1mUitPV3RUd2NpNVpEb0I2Z1h4Y05MK01wOXh4N25VNXk5a0xXN3hhUWg2TVFDYkx4UlRuTEsxcGFJSzNjQWZOSTFlVWtYblhzdWY5LzlFMW1LUjQ3dlhmcFhPblV5clBqQVBodnlVSVcreW16ZDdJQ0lORXZPWFRtNmNTTlcyOU9GS1pkT283bk5PeGp6YmJoOUs3ck1VOVJTZ2gzTW9kRzVDMXZsOStJQktLcHg4aUsyWHoyOERyN0ptbkFneC84emlhMldsaTAxWFpvWWJmblFDekFNTjI4U0hXcEZvUWFXc3hpcSs3WXVoaWNyakdDejhJb0pna2lwZnl1MktKQjBKVjAvUlFDeEZ5N09TZ1ZwejdYRTZ3VUExakp5RTdnV0Y1OVh3SEJmWWZvdXdsWVFqcUZSWHhwRm04Skl6QjNVOENDQnBhVUJYUS9EZ0hMc0VFbWFzdURDN1oxeU8wZmppaHN6TURWK1JVUDQyZ0p3MWtTMkt0K0J6TGdWZUZDZmdKODc1b0xER016Zlluc1Y2VTRLUnhUcU02Y0ZjVG85RGJwY1dPdmdHejFwWkRXK1M4UzltallWMXN0NzEyMTB6OTliK2dLdTdCUzNMM3RWdnZYZlZrWFBIVDR4WGQ2emhVRHlpcDA4L2ZyV3dPY2Rxb3U2eEduUmRkMnRBa3VQRkhyQkZMSlNsSndvSFVSWjJqNHJnczA3bWlMdFUyYzJPTEVTTG1ySXk3cVBqeFlUTEMwaXlnYTR5ZVk5d3c2ZUdkZ0pRZnQ2ZE42Q01vVjczR2hoOW1ZREdXUHBaVXl1SkpSYytBbXlMUytXOTdvQmU2RlFWNi9ZTWp1aHZhQjBFYVphbjByS25oMnU4M1NCRlI1WUEwZTZrTlNCVjJ0TFJkdnY5UTI1Q2JrUlB0NHdocjhBajJEVjNYZGcwRHRSWkpNV1Fsckp1QTJuVks4UWowdHh6STBZazhOdWdsMnV5bHk5Uk90MjZhN0hIaWxueTdzOEFnNkIxOE9mMGdUM1pqYkJHSlczbXdOekVoei9iQ1h4TVMzRmlZSkFOZmpsTW9pdzYvTnFQWjBHMlIwczFicUtXWFd6YnZWYndrSVhnSmM3SVp4TzNGZ3VwdTY3NWp0ekFGYUZGcGxGWGR5d3l2LzNsTWVhOTVCVEN0RUFwcTRCd2pxVjdJWkF1MjZsL2JVZW1XSm9VNFpkRm5hNTh2b0ZvN2dveVpacnVmcDhabWMweUtabzhSMFkyZDB6dkFLK01EWGlJQTVKVW1uKzM3cVlqa0R5c01PdytOck5YNW9jQzhncjd0MWJyYm5ZUWxwaWVsemcxRnR5WUlGWnluQms2K0V6V2VYd0JST3Nad0UxRUxYczRZRDZuQldBYVFpdERXVHVFZGVsTVdTTjdHc1c0Q3JNNWgzanU2Ui9QWEZrSFNOYU9wcTlEWWpXaFNMV21EMmE0dGZzSW5jaEoxUFd3KzNvRlUxV0d0emFWTFJyY0l6eWRKdVpNTnRUS21NSFBNbm1weFE0UG1wV1ZXZnFXTTVVd1phWitXcjl3TTU2WGQ0ZnRpaHB6OXpGM1RWaTkxT1A5NXAyNVJMWGNyTkE3MHl1dU15ODU0b3JWc2w3MXV6eGI4TWEzUnBoNnhUUFdmODllMmxpZTVmS0hYc0tLZ1ZiRmFoUHZobzI2a0xEM09FQmkrdWRiZkYwbHN2VTBjU2RsdjFFMTFDOTM1WTNsMlMvNWJ1eXNMU1VPNVdzNzJuOUZYalBwanV5emp0ZzVpdkN4K0lDR1NtdFU2cm1taFZtbk53SnVEdGhieG5vN1RVOFFrNERSblNyZDdybmJxVEozblB2aDRYKzk5NTlyNGlYUG03Yk9wV3JHMkY3anFDUk5kWlovNW1OSXQ1U3IvMzN1QkJSckFDa2RiZGJjKzB3WStSSzZIU2ZyVEtXeFZ1VVdVSFdQVGVuRktLZkFGcXlQWGdBdm1BWTRXTHFPQURPaUVGMDliOXMybEs4ZVM4aGMyT3ZpaGRuTENJRlE5aFNSRkwwRkhEUzJwcmZ1V0h0QUp5Y01kQWczYUdmYlRXLzFWZnNHRUJkWDNFN2xiOHZDakgzbjk5WTBWZDBrTTVYTllLMTBIdWg3U3RENWZXOFRwTGlEVXVoaS9IbHZkcWpyYnlPbFRFeEZLd1U2cWY5V1MvZGw2VTNCUWhlOEdCNEdENS9adk9KSE51cDN3d3ZMZHRXMzFacUxKT3FzOFBaNG0ySHdSd2pubFZndFhxbWUxSE56THQyczRWWnE2UGZ5VllmZjdrT1p4SkQ2NHloZjI1V3dhdXY3TzJ6ZWk5VU5heEtWM3hsWHFuSEdvaWFMVjdDOXEwL0RDWUZtQzdXM1hPSzBHUEszTGozZ20vU25zQ3RpNXFZa2RVNkVtNHg2aWZoSjRjTU40UmQyTE8xanpCME5wajI5VkFGTit2VVRWYjBwM1lwaWV5QjRXVFZEY1dLMURzVWFpMWlWdDJGNGw3Y3E1N0I3OWtwK3JldjEvdUtLSkk5MG1mbC9zL3NGUFJUaXBDalFJVDZ1aFM4bWpId0xveDUrN2RtU2JQMTNJUUhGdkRDaVhUZUtIZlBVZDlUb213dFJYSTczVFRPdFd5aGVwMEZMTzhwZHdGcGd1ZjBQZkMvcFdqLzdrV3h4RkU3N1RDNzRvZnJ2bDBzUlZWVnpyaWNhMUptemNORmZLOXJXODNKdVZ1Z0ZTNHN0NHZwcDJLNm5RRXkvUTZ2UDNmNHdsZjR3TTlnK0ZqVkdsYjR4QmF2MW1PWE9tQ3llaDVkdUE5NlBHUEZVL2J2Y2tXQ3RiUSt3b2ZaR2lESG8zTjRKT3ZWV3RieFAyRTRzeCt5ZTJDNEh6NFBkaVRtZUVCZWFkcFptR0JicDFiTkEwUXRzY1hNVUUybFVCT3ZiUzIvOEZVZHJRSXM3ZW5rVTc3WDI0UlB1Z01KSkwweTJsSVZVQ3FGNjNIV29MZWFnZlNqTVYzY3R6TmkvVnBCZlVtUGJYMWRWZ1doUU9nV3FlVk1YenRZNk9UcUhUU1EyYXkrNThWOEZXOHNqcUxLM1lYSWtXTG1QanowWWNIM1UwRkZRQzdDbTNXR3AwOEtCdHdUZU82Y2hyVjRuV0llcnFMbjJ2anBYU1hNMjhXeVJkaDdpTG12dnVVT29DeldlNXBlNlMvWWZ2OU95ZUg3RE1HYksvWHVlZnQ0bi9kUXVuVDI3MmNvVzE3MUE1ek5CeHJlZ0dpT1dzbmNlU3ByeXI5V2lGMnVYbVA1N0hrdno3alRXYktwaG9EdThTc2xrMUxkeVIwUEFQQVIrQzc5S1B4Z2d1M1U3c3hkckxPMVpYYUhLcTJzejRMajBwb05sQlJtRGdEb2U4T1UxZ2x5Tmw4T2NzSzdZQk5XcEd1WFh1UGhrbTc2NllVUG5RdHRBdWthT1ZacVkwdEw2Ym9vdEZodzFxbzAzbzRVNkJVaHI5U3JqUU91UXFVMTExMStucHJucklycWtWVlo1NG5LODJhdHlyV1BNUGJNeXF5Y2RMNWlpbnAybzZwQktSMWQ1K1JuQjRIdHlBblhtWnpvUWl1dGhVTnprU1VWV3R4NC9iM0VVV3U5UTBWN2JjK1grRElJMFFEaGNwbWxkZHpVRE1FYUg2N1dGM3I5ako2OC9UQndGamtzTFFQd0ZhaVRsbkw2R1JnL3R5cDlGM2REMmF2ZzVReGNVZFU4MjlwajJVcW9TOGlxMTJ5M0YzUlcrR2h2Z0RYVE1aQm1LMzZnS1VvZlN0eFhmNTJCRzdDN0Y5NnN2d2pmLy9NY2ZkL2RURklkWGVwc0pPL1YwM0t2ZFdvZGtQSDJ4cXg3STNQTkw3VGMwdWNhMVNIbWNFdmVVYzhaWjRybnJGYU1ldVMrcDcvOVZQanhsZXMveTc3ZC9CUXVXVkI3cFc2akNhUlREbTBDOUtiZ3VYVUEwR3lzb2YvdVBjOTRzSHNXWWNxYjhPK2NjUG9aTFNkK0tqUzBNTlhPUHZDbHJ0T3ViQ0tUT1diNmxSaytwQUF2aGJlTXA2Si9YbVgvdHNMSUZtN1Y5dkI3RDJ5OGhSR0FPVFJWT25mYUxyWjZFM3BUcVNid0JTKzA3elBjL2xvTlR1Y2UrNHJRUDhmS3hmZFcySkQ5SWtCVEQ0R0dvcll3dFRCMWM4MVFkRkcwdVU4NTQzUE5SdGN5dDJ3YjZMY0M1dTcxYmVtbGl2ZGdaM0tkdG8ra3JRdnJBZmh2d3Z1ZTVlaVI0UUY0OEFKWFhuTE1RMDF2YXlaWmVvTlR2QkZycEhCaDlUeVFzM2RsbGVMc2h5Q0ZLa000WTZRNHRTTmpVV2JRaHBDclZYdDdob2pOMmpNVGRLRkFHaWoxRlV1eWxGNGx1bW1XT053ekFMWEF0TEFFZWEvaGMxK0JGdWJPbXhBcjZMUk9uV1lXcGFtZXl5S1V6Umltamlabnl0NEV1d2EyOVhlTDU3TE92ZHVLSGV6Tk5EZHc1NmhWSlpqQjY1anZIRzArN1cvMEZsYytwcy9BTSsrQ3YxNGYxQk9XdWRYS0o5YVZmbWNPOTA5YTRtUk5SZWJtTTZ5NVdiUHlnV3FoeHpVV0hUWE8yMWYvcjY5djFvY0piOTlUQ3hGeHUzbnpJQmxuOW1xRjN2RUd0WFJlYnNmSzM4MGRxTFE5bDF1ekNVa2wvRmdBTWpmdlBvT3Y2TndtTUZzeW9aYnU0ZXh5dmJibGJ4dy9sVm5VQlZFTHFyY0ZGOFJXc214ZDVuR3FRVzBPeTdlT0hNb3RhN2lmNlUzWDRab0Mvajc0YTA5ejQ4Tlc1a2tqMGtmdmpGbWpmT2Q0Z2R4eVVtZk85ZEhPVEk3ODE5b0Z6WHV4ZGE0WHlYd2xpRFV6dDdqUmRYcm9lekUrY0VlaW5PaXQ2OWlkcmY1ZXZ1ZFFtaGxuQ3NIM21ZQjNRdWpqT2poejlnN2toZkN0Uy9mNkNrR0VDWS8zTUdrTmM4NHVDSzQrSWE3TjhqVkY4MmJwOWZaNkRZeFpGMnhVa1VRamdQWTlScFNDYytjakVqc1NSenpKN3FmYWFOaEg0WkVEanU3VnpsWFV4bkRYb3FVcExFeWJLQk56TGJlRXBwWVVKSGZrYjRvM2FneUJxYVZkNWpJcWxScU1rZWIrOTFHL1JVbTZidm5UVmZlUE0zdm4vclZ2LzY0azBsNkt0dGVnb1IwM1VNdmRkTjZndDhhcVZIVDByR3NSdEdoUmNEYzZ6MEM3YnQ2eW5MMncwanpYTW1TT1dxeDdYYTdrM05pZ0JZOFV1bmVmclYxQ1MvbDVpbGJmeFF0OG5HdmYzUVBhN2NmZ3h5OXlHOGdyTDVBdFI1d3VTWi91VVJxT01VVU9LbnR1YzQ1MHBINDQxR0kyd05oRmZwdDF1UkJ6WjNXNXMvZGxRWXQxdWJNM3oyT2RCOG5Xb1h0ZFhLdWRJblY3QUxwNEhQYThEalhlVjRISCs1MXQ4VUMxY0ZPNWZNT1liZkU0TGRSRWFqZzM0UlNCVHcwNDIwcXhOR3FDcTRZNml4UlByWDN1M0djRURSek9aeFRNZC9IOEUwL0REL2NLY1BKelhQbk9qMU9XdzV4cmlVclZuamsrSkUwTGM0dGZobHRtRjI1L0poZkJWOEtuaitIbUVkTnBZbG1FR2JlcHJjaWkzSm9uckV0NitrQmdLK1ZabnRrNm9tZ1JsblVLVk4yL3NVYjFmZkpvVk1FRm1yZEZhUXJsYTNzWlJCR29hOFVNUlFsMkRhUXRlVVVWWE9xQ1RiMXV0VFpRWWZrYzM2Vk9ZczN5cXh5SzhDM3lmR09YcWplMzJNTmVXY09aNjB3ZnVjNlZxL1FWb1B2aFZYZHhnMXRjOUMyejFMcEFxK0pwMGFJY0x6eVFZNGpFQWxrYXV6cFVwa2F5a204S0dxRkNZbjJrdFgwNlpVNndDR3NYdzZpNXRxV3FCeEZrclJ1MmNBOWx6V28vUjF6M2tuZzMwYk9NZjNCR0pYRGR2MWhyOG8xbWF0TkpTNlpUYXg2VkY1QncwMWpQQVlRU2F1ZXB6Tm8ya1h4RzJTbzM0VmdEa2tzNnQzaXNyRjdDaDNtTTcvdGVtcDR4eTZFUUdUeVh3ZDNXVTVUWlJRcjRVWGJmZDZwbDRNZmhyejRDSC9OR0NPMVlsdHRYVkw3VTM5cUtGRjEwdWFZaXN4bTdoajV0Ulhya0xrYzFzOUJYWHhCeFJlVm1IWWpzbVFNTGlyaGNsRXAyMklwbnEvR3h0K1NLWjlZQ2E5NUVhK0ZteVNqbW5vN3R3NUo2cWJGYk9heHBUVTFieTBxYTUxakIxM285bHRyaDNIa0U2OTV2dFdiWGVVSHoxZjFqWk0zdHN5OEZQQ3VGUGN0UjRDdmV1ZVQvR2JqTkUxejdoN1FSMHZpNkcrNi96R012T2VBQ3h4eTJtRkdXRVJjK0lPbEFaaTY3ZTBrRm1vV2dVcHRkSzVDcWdCYU5kVkVlZGk5dFNyV3VsNnhSYm5tY282SHR1ZlVqTENPa2hZT0szN3Y5a1F1TWxLVUZXcnZtUzEyT1dsblFlbGk2TGcyZU9hanZ0Q3JJZENSU0FEN3JtdUlXcFZ1RTd5dnl6RmJoQ2ZZVnc1b2dxMkZOalVYTVpTQTQwOUpwYTR5c3I0aTZuREpKWi9LVTl6c2ZHeitabVhpY0t6OTJxclBxT2x6OUh2akR0OWd4YytTd0M5WTRvMlJTV09zU1R6TW5FWmQ2TzY1V3Y0TjJmKzdBVzdXV0dRdnJXYUoxVFJPcjlkZi81djYrOWp4QmxMaXZpakpJWEF5ckhzQWFVS3ZBckwySGlMTkw4V3BKSFhlZFJSZVBVeTdvMUQyMjRvaFpRL2dWSTRRZzk4bnAzS3phOXhpODljK0xkNjFWVnp2Rjl1WEFWeFhzNWVCbHNubkhFbFpXWmtkbVJ5N3UvMGVpQTNEbEFSemdXWGpuMDV5ODcyR21OMXI4U1JrNEdqQU9HSmxpd3JSL3N6bW1ncGNVVUVNbGF0eWVnUkZGMVJoaTlrOERGMVI4VUJiVFNYZWhKRHlMdGI3RE9sc3pkMU1jc3BxMTc1ZExsVVcxZVVWaGVUZjMxRGRnclBjRTdGY09GclRkM1JOTTRLU0IrbGVyWTd2WTNSa0dIWm5qSzRPaFdYODFwMVVuWWZiQTd0YmRQM2VzZ1lkaUZRaE9LRVlKdjFQay81bkh1ZjNQZjRtVHYzeFdzeWdBdCtGRXVIYjhFaDc0Nm9HRElaRnd0dVc4SDhxUmF5bVdIWmxyV3d5N2RQZjFhOTYwdFY1SXdMUjZha1lGZGFrYkZMRnVNR1JwMlZnUGp2U3QybjNQMzM0TlJWYmw0Sm9VZVh1WDgxNEhrSFgrME1YajBJWW9SN3V2K1BpV3c0dXprK0paSmdmM1h0QytGNXVyMkx3amlTT2N1RFVmdVhqUzhvclo1MVp6TFZnZzR4NitVU2RNY2xsQnkxUk9FTEVaOTJuSjNNSVB3ekhLQ1k5eDgzcy93UFBmQmJlT1RtR0ErdlV4K1A2TDdBNTJIQUhiUUk2cEhRSlZ5SnVNTUpmRlVWWVd2NHhkSFkvV0lpbmRFR1VPeTdXWUhyYTJBeUExZXNlYTdzZUJjazJWY2hzV0RZeWhaVVpBQWh0NExLMFUyN2RqQ1d1OTg5YVB4YUg0dWpYTWZGVis3UUhoYktkZFBLczgzam93NTEyZTc4MmxUN1lRYnFmVk1VZktsNW1DRkNvdWYwMjJRd2JOVWZmUEpLMGdkaUl6QlRhYjJURWZIN1A3TUZ4NXRwZjNLUVVZSUQzUHRjZk9jLzd5Q1NmQTRZSUZiQ3BKbjVhMXNVVVo1dGJpMmRCOUZJNFdZT2p4aU55NHhqb1lvUmh6MjBDNCtBMFBWeTlkWTNwcWxhNVNCN2ZWdHFKUzlkSzlGU3hMZTd5MzdxV3lsVG04VWRlbFBMZWVlVC9WVmxvYk4yZXpQWlp3R1dITkt6NnhGMzVldFlqU2dUaGJaUVFWNmNmakxUS0dzamlwNERBTlJiQmFqbzlNSzllY3Z6Ujc1STc4U1p6d0RMYy9mSTFySHpxem02ai91Z25YajdsMTd1VTg4QlhPeGtkRzhWajlYbllGbDVYeDZtTWIyRnoyK0N5YkErcklzOFlvbVhacjJxUnJ3TXBkSnQ5R25EeUNRSXhDcjFhMzdrMGYreWwrajFVSGJqbHpxZXVmY1NkN1o0dFNUdDdJZlkxZmFnL0ZZdGN6aHZrYXlYZnJJL2FzdnR3K3IzcWNnZzVUQzdkdksrdy85OVVITDUwOFdlSXNXZ3ozdWFSOVptRXlHZk1DOEh6SXpEYVI5SVJzQmVrWDZ1a1laVUk1NG1lNDltMi96QzkvOXhrR2YvcnJHZmc3dDdueG4xeGtmTWc0S0s2ZkNSZ1lyWjV6Tm5jRXpSeUFTN3RtY0VPdDFBdjZxY0FsL3VkdWJFcWlUU0VoWm1HSjVkZ3BpZkt4bUt3V01Fd0JIdmNYTHFXOTlRKzdWVXQ0MlZRMjc0K2NkYjNtcy9lOWlyN1gwN2ptQlRqVlplaGRHcGRQVWVaZ0lVRGZRL3dPR2x5L0JSRWRvWFlLOWNoWVEvM1d0ZHBrTGRZUEU5a3FRS3c0SUFjR3VNMVRuUHpRSGZzSjk3OXV3UFZqcmozOUdoNzQrcklhZmd3aERiSDVvNTh3U3gzVTAxT2JQSmJOWGt1d2xjNFR5R3FMZUxIeU9qU2FZNXZtWE1HamVwd28xZzl4bE1ITjNtSlg4My9xN1pCUXZHODRDWUFYaEZHV0tGbjd1bjZ3bEs0V3dmc2VvN2R1K2JRVjh1OHpnS2xyZzdFVjJaTnhjZFJ5aDRJcWlsK0syWm1wcEhzZXdrL0YyclBNSUJQNGpITE16QVFjQTdlWk9UcTV5clZmK0FVZS9SL09rdlVkRDQ0MGVIYmdCak1qY01DSWtqbHNUU0tGQUo1SUpGdzFLb2JGK3FkdUNxV0dpR3JsVWI5Ym9YejJCajVtVW1DR2VsSnVHVWViVGNQUEZNOVFUeTl5NndmSnlsNit0bHVvbmcyZ1pXclMzYnRGRmJROXZtYmVEYkRzdDRiN3FlR01maUtoQjNxOXhaZVliRTE4dXVJQnJXdlN0SEx3SkhPMGMrVVZXMWpwWGNVeEsrd2Vtc2xSaWtjbnNEbmtVZFpEbnJCalMrWXBwcDk0RHlmZmVpYzUzMGtCNUJmaGUxL0hZei82V1Z6NDBpMHpKK3lBbzNEZmhRK3dtRWhMc1VReWE1d2ZhZ1RNcXduZzNHMGVxRmFmVDAyOTlqTXNNNm5oL3RRUG1GaU51c3Z5aHVVY0FRdUYwTDExanJTajJuWFZOTnFYb0U5UEF5eDFkazYxd3hXRldZcE9xY3YvMTNuL0lzaTVaKzFXaGFGUUJnM0wxOUxNMFhKK25VUEFjNUJEVTJuMjBCbHNJblUxZ0JTeU9oZkk1UXEzZitDRXh6N09KMm9wdjlQWERwNTREZktOemwxalVEazRRMWlvUnlpSWd5VGlHTlo2OGV2cElYN3FQTi9hdHRYbi9IMnhadDMvRzU0N3VzYThoWHpST0hLejYwcTB2WWpiWTNUMjVnTDYvN1N2RFNoazc3c0wxL1BJRm1OcTY0cGhYbFVxbHk2ZmNvODBtNjlnTDJxZG1zRUw2amZKWkp0UnovSDhlYW12dWkxMVU4bTRUT1Y4SXA5YWJ4UWM0NDN4TytLWW0xemdPdS9rdlY5NUFyYytWUThBd0lmaGg1N2t5bzgreEVOZnZXSEVTRktLUkQwUVZDWm14bFFQZXB6YW9zZmNXUC8xVm8yeVJISnVZV0xkN3J6ZTk2R3IzcmZhNHhkZ1Q4dEdyTlR0Ny9CVHk1MXpHNHlVMWFhUUVsNXk4eVI5dzhqK1hPQWFGSjV1QkxmdU1YbXZSV3RKOVhKVDBjWHR6NXJiNzhXNmMrdkx6TlJRTUFYb3l5WFdxN0d6WFdNRGExS2RtWmpaY1k0ZDE1bXYvRFRUSnp3Ni9nVVZBT0JINFZ2K0JEYytNclZ6QkRmVWJhSXBzbjFsWGhZQUpBR2Yyc3FLeEE1ajB6akNmc0ZqcVZqdE4wVFBUVnk1emJOVlplZ1BocTV6U2prUVJUK0N1Z2FoNVZtWEhxSzB0NHJGdTFGenM0WFh0RlYzelJydFMvZ0RhWUszUGViUE83Sm1xWGJRZ0oxQkwzeG1rdVhJSHJySlJjMEx0YXNGMmVkcFhoVjNDdEkvaVhhdll6SW5mSnpiNzNxTXAvN1BGNUp2ZW9INzVTWmN5MXdiTHJOOW0zRlhxK1RuaHZicmFXR0Z6Wk9BM01uTEh2M0J5NUpKamNNU2tpcEpZblpmU3BWT1JicnplRG5WeGJzdWwvaHE1cmRmd2JLc2FQTzluU1ZyRXRsWEdOMkNkaXFOcEw1Qy9Pc1ViczM4cmNtZlpWaGtRZmh6ZTRVQWJSSTVmdEM2TlMxMHI2NTlKbnR4OVhNbGhtVUdMMnNuVEtkeUdvanZndURaUVZoOWVTZEhLRWRzdU1XN3VQR09LL3p5TDl4aHl2MlRWZ0FBK1JYNDBXT3UzYnpFQTI4VHhvRnVrMWlOb2swRmtqSUlpSlNqVGx5WGJSWDFGQTJ0QnluSGFkdnRxTlc2WGswazByYXpwL090ZFJZdTdlR1o5YWF4S2tnN281bTAyMVhXMUNXdld6NjdZczArc1BOVmlkZFc2bVNOOWN1ckZMRjBqNVo2UVVYdFR2YWxXY01rbXRJODBqK2RNYy9nRTZhWldTYXdDZmNaWmRkR1RESzd3QUMzbWRrQnQ4eTUrZnlQOFl2ZitrTEMvMlFWQU1CdndvY3VzZjNpKzlGWGxDMXpaWC93R1B2RkM4VlMxcjlyRXNRVEtuR1NZSnpHWGJjSnRYTjBXZGJDMUFNZlBjN3BMYWQxZXdjSWU2allwNGkrMnRqaEhhcjNicndyNzFtK2RVV1ovUm1pM3RwenFOdTZNV1h0MHBkMnNOeHdnSGVVYno4N0JET0lrMzN1L25JdVpXekxwZjd2Y3hSOVNnRWNuOEk3VE1IeUJRL0FNWENDeDc4SEhQTW8xOS81VXp6LysyOXk3YmxQUnJDZnJBSndBcmVOYTArK2tidmZrVkYzVkR3Mmd3elI4MnVxNVZpVU9DSEVKYlovcnM3S1dmWVByOHNmdms3ZDNQY2cxL3AzV1lsZTluNzNHQTFmUkp4T1RRNHRZY0xQdFBLK1JXdFJHRm1CdWlVTHlMMVNxYTNkZlUvNFlNWE5CNkZqa1EwVUJyUU1jdVEyVmpzM1ljOHlnK3h3bjBsTU9NZGgrVHVVRTR3VFA4ZVJmSUJyLy8xSGVQUkhPSHVkNGFldkFBQlg0ZkdSNFlGWHNQbUNtY0dWTVk0MEdLSjV0aXo5RlN1bmFVdWNDNkJkMnVmZGFuVUxTbWgvZkh3dEhqbWpwOWRYMDhTK0YvUG5sYlV1d3hPK3R6TGl0T1hYL2pzcnpLQjNISDdYc2VNZDVUdnZOY0lJdVhQM2tRMVUvbDhObDJMaDVubFY5clVHNm1iUU9XTC9Mckw3dWFSK05xR1I2c0V1TFA4SU9NSzVKZS9uK2YvdlBWejljM0JyOThuSzlGTlNBQ0EveHExM3ZocjVneGNZSG5LR05rcmExajU1YWV4VVg5YWdEYjR1M0V3cVVaQ1QxZGhYUDFKbFFSYlhWVS9yUlM5NzQ5Z3J4ZG52RHZUTzVaZmZ0TGxtVnMyY3JYdXhuUlZ2cTU3OW5neW03M1JTQzJYcDM3MjFHWXNDN01wanZOWDRjNWZDNVM1c3pKaVV0TThsazNVaWgvQ0pWVDRsMzY5MGJ4bjB1TW5OUjMrSTkvNDJ1RFY5S2dMOVZCV0EwamwwNnljL24zdi9sT0dNYklMckt3NStpdXlnY3ZxNEZvYkxKUTd5bHVMWVlsdDJsb1hmV1kxL3EwUzdsN1RkUFhhcUpPT2RiN0V6aGo5OXIzYTNudVdUVmRsMkRmRFdvMnA5S3VmZG9GYTBZbGxtdlR0OGJzemN3djNQTFFSby9EeEh1MTF1UGZ5UjcvdU1TMkg1WERKcUZlaWRBRHRtVGtqY3dpUHQrem11L2MzMzgreWZ1OEcxSno1VldYNWFDbkFkbnJyQTFaY0xkNy9vWWZTdTV3TjJIUVRuTDVGM0swSk81WEJFbnpQdktBQUFDOEJKUkVGVUUyL2JLaFFwVlRFdng2VUlWVGxvNWRseXdHYnB6aEVwd0xHdm1zdWVoZE9OcC9mT1hVNXQyMW1uY3V2NnZlODFkdldwWEtuWWxSZ2Q4d3Vla1hpUFpTVmE2VFdhR3RsVENKMjUrWmZjam5Nb0hINEJld1RZSzIzMFUxRXVxV0R3aE1URWpsMjQvd0w2aXNuZFpzY05mcHdiMy93TWovN2NweVBMVDBzQkFQOFFmSTh6UFBjeStIM0hxQStvR0ltVExqVTB5djU2ODNJeXBzV2hHUjZuWXhZQkYvcE5QVnhCckZGZmR0T1hiRUQzQnNHdDBURFdCSjNiWWU1bjJYK3oyVk4wY0Q2bEFONndmRi9weTJLNFJFb25KYTZMQkdjWDh3MFdTbEo0Z0xuTEJ1YndKSE56OXhYcDUvYTRxYlNBeXd4V2FkMHBtanBQUW5tT21ObXg0WWhEcms5YnJuM29uL09Cdi9CcHl2SFRWZ0FBcm5EclBROHovTTU3Mkx6R0dEaEJLSFhCWWVXd2RUbE1KZ1FhUFhSU3VRRS90V0JSenpqSHkvZW9ZVmREeElNaHRxNzdzRytYWEViSytBUzV2bmZGbTc2bGU3RjJDd1VOVng4NXZYdjA1YWxoTWlQbWpiYjFDQkh1Yy9NZ0RRUnE0ZlNMQjVqSU9xTVNnSThKOXdyMEpqeUVUN2o5a1NNZnVDVS96YzN2K1lkYy9UMXdLLys2S0FEQWM5ejZGeDlISG44OXcxZEtlSUdxQkpXbXNZaDhXWjBjOWZ5MlhjNXRsZFJaUHg2MXQ2dW4zUmRkTzVpVnc1YThIczNiLy9WeXpsanZCM1N2Y1hPOTMyTWhicko2SzhxNGVMelA4QVNwc25wNXFRZDZMaDRoWFAxYzgzdlBiVHhHS3JHVE1sbEM0QjZFams2UUp2QWQyYVlRK0FsenBIa1Y3YytjTUhCTEh1UDVmL29ZVC8zVjU3bnk2TCtLL0lUUHpGZjZSaTY5KzhVODlIbm51TWhOemxNMjBtL0lISkRZb294eFRNRUd0QjVDUFpKc2lLR3dPTEZNbFNSREZKYUdPSGxzb0Q5bFZMdFRTNVAyZS9IamJPUHVyS0MwS2pMcjNxaVlySDJNU2h1RnIwdWtZZG1xUlhRTDEzRzJmcTFlN2pLRG9xVFdTcnI5S3Vxc1ZseDhqT0FXM0ZBcWdZUzdUNjJqOXpocUFzZFJpdCtoM1BJZjV2bmYvOHM4OVU2NE12K3JDdTR6cFFBQXZJcEx2Ky8zOHRBLzJuSFI3K2E4M0dCRDRoQTRDSUVmaEJJTTBVMjBaVG5OcW5RWHBSU2JiSE5xQWsra1R2Z0pWaWVZTGtmU0VtY1YxWU1yMGw2TGVUOFRzTitJME8vWHEzdDlhaEZxMmh0bll6WFk2ZDBLdG1Xdlo1dnkwUnkxZXlOYnJRbGt5S0VBR29VZE8ybjkvcW5GL2hNU3g4SDVIM0diVy9ZMHo3LzMrL241dDM2bVpKWStrd3J3SExjKy9ETE9mY21MOEZkQzVpakd2bkxYcGkxZENhWnVzeXFaUUZUOHhPTlE1VzYvbUFaZWFMSGUxMVYvNmZwMnVubDVEWXRUemZFNjF2RUFIYTZRb0pUY2dxRUxJc2U5Q0NzMlFkai8zOTdaL05aNVZHSDhOelAzdnZiMVIydzNqVysrU0ZLMWZLb2xTQlFRVkVpSWlpSlVzYWpFQ2lHeDZhSklzRU1DdFd6WkZKVWxRa1hBUDFBcUZwUkYxRVJGb0NJMXFnUnExQ1k0YlUyaU5IRStIQ2UyNzczdng4eXdtRFB6em5WYWdWUVNPNExaMkltdjQvaWU4NTQ1NXpuUGVZNzA3cldPU2FETk1FQ2Jtc3RwZk1QSUhKSUtXTDVXRHVzQ2RTdFVCSUhPNVYySmwyMS9XbXA3VDRtaHBLSml4SVpYRE5WSmJ2endWZGFmaERXM0l4MEFjRFZyNXlyVVBZWmlkdzgvVmRMMVdrelVqRzBTYTFtNVNvZHRKQ2hSM1pCc1cva2d0R0JNSEVKMVk4TWIzb1BTYml5cHcyY0lvRXp2T2lYQXM1ZkJTaFZZdDByQUc2ZGtoaDhYaktUYVRENStqRVBxM25zYVpmR3BiKzlSUXNNT3lhS1FPTFFQdlh2VnlMOG5kNzIzZUYyQmRQK01xNldlRDhDT0ZaZzNZUHdsbmdHYWRYV1cxV05MWEh1MjVNTDEvNmJCRkxmbkZJRCtBUThOSFZQQUxEQ0JaUkpMSVNHL0l4OG5NUmdNWGRCZDJYZlhvU09oUHN3aGROQkdTVTRRNzMzQ2E2MnNiNCs3emwybUhhNFZIVmwzWjIveGRwMTBDWk9HZmtZcGlPU1ZWbUpGUW4rY3o4OEZIV09ZVDBJWVZuaDlYa0ovSFFZMnNGaFZZM3lEY1UyR0F0YmlBSTA0UVFCNDV0bmtCc09MZjJMdG1iT2MrZTN0TUpTNVRRNWdBNzFjdlRhQW0vdlJEemRTM0FXZXVrcFR3V09ObWhTaTIwSXNDVW02SUwzaWZkdkhDN1FvSDdKeGFVL3BqZ1BsQXNLSVEvdFFOY1Q2WGVleXp6NWsrMGJKaUpaRUh1OXRldm9Ub3FmRHo4SGJyQlZrUS9ubVdpNmYxUUhvYVh3VHJoNFhyZ0hkcVdsOERhNUMrNFpHcUZ5TmhIdW82VEtrWWNBTVF6eEROcmpKS2RaZlBQVWg2dnp0Y2dBQWQ1M05KYysxUzd1WmVYUWFmMCs0UlkzU0FoTzFtWE1jRUxmaUhDR2NhaDhNRjJmMGxJN2JwS0x4eVhxS0t0ekxXS3lQN3VWUTNxZjczT2x3dDRjeTB1TjlhTTE2MVVpZFR6Q3cvQnlyQTQ0ZnN2VTZYUVdKMGF0RGVJOGgzbnBoOEZDTFUyWWxucTNRdmhZWXFFd1NrYkd6cHhuUm84UlRlY2VtV21YajdNdXNmbldKdDMvOW4vVDFkOW9WY010NW5DTXY3MmYyMFlJNUtqcFVUSWV3VDBGQmdaVzloVVlxQXlNTERnTnZzSnV5L2xCQ0N0SGZHaWtKVFNvRmRhWnViREt1c1lHMFVJbHNsRFdLUzdtc1FMUmpmY21BMEd0YXphTTRNMWhwSjR6Y2RnUU1ZZnFFSzRDc3BITXAzQWY2ZHFSMXRRMGRTNG1oNFUxdS9QS2ZYUDdaUlZiZXVkMTJNWGZLQVpaWSs5MG02bDJITTlQNEI3cG9GZWZ3Q3hHZnNsdVZRTWJhT0FMWWVnRmdmTnE0bTc0dUczWlRYejdVOXJidHl5dUxkbkVCUWN2UVNZaWRhZ1NwYTZkMG8ySmFveHRaVitZRXVSTWtUNm9CTHpONXFHRGt3Tnl0Sk5RMzhwdkdqbDVvNnhwR2FJYnkrU2FYS1AvOGQxYS9kNGxydjdqRXl0VTdZWmM3RmdFeWh6djhYWTY4M21OMlB2QlhleXd3d1lnQ1E0R1ZhQkNCSVpPd2dnZ0VSUkJKeTR4Q3JQODdNdmdweldtdlplbGtvQ0hyZGljdE9KVnQwR3FURnF0YllXYWRVVHJEcHN3V0VMSlIxTmcwWURNZFB1MG9YTU13NndqR1lRMHJNbEVOTmJOWWhnenBVVEhFMG1PZDl4aTg5Z2JyVDU5aitmaWROTWlkZG9CMERzRmpEL0R4cC9Zdy9jZ0NVNHRoYlcyNEZvSVRCSUFvT2tMNHZGMkZick85dVBGclpteFJtNmJ6UGd0bThpckFiQldnSXNwTnVVUXNpYXJvR0ZIMHRzMFlFQlFNbklzN1JXR05xSy9VSk1QSGFkMnBnTy83QVNOL2lJRitoZFdmbm1UNUo5dGhCN05kRG5BRHpvKzQ5amVMNit5bjgwV2Z5Q0dOR0thV3ZwNFZETjl1b1c0Z2VIbGsvSVg3TjRSMW05UUdYTWJUYnpFN214Rzc0anJyMk1CcDhDbjVheEpKdzNxSFY1VlVCclVnZG5YV3p3OVBlVU9Ob1V6OSs0WmFSbGtIUU1VRVF6U2J3SEIwaWRVVHIzRGxzZE5jZUhHN0hzWnRpd0JiejFHTy9QZ0FzNC92WmVyekJkMENKaVVLOUdnWG5iV3dzZDJTSEJaYnFPcG1iSmRZNXV0cFNrV2pUYlpTTjgyTk9ZR1M4dzE3N1JOdXgvZ0ZzZFVyZkgySkd5YWJ6MitvTURpdktGWEJDRVBOR2RhT3ZVMzUzQVdXajJYL1NmOC83UUM3WUhFT0RuK1dJNzg2d094UlRSZkhGSlVBUmNpMUVMUUVDd25EM1pRZkdCbFVhYThFazcydjVsYncvd09PenFRdTdCWjE3amg2YlZLRHlHWUthYkdjcldpSFBpdm1LTGxNd3l5RGxiOVMvMmlUOWZQbldENnhVOTczSGVNQVc1eWhmNEQrMTQreStJeWllM2lPcVFrcnlaL0JVTWwwa3NraWcwMmxZREI4ZkVVMHE1VS81ZmU5U2VKUmpxNllQZ2hXdWt5R3ZjNnhMYUlFbmgzckJnYWpENmdaMHZoOVdBVWpOb0NLd1h0bjJIeWhvbnp1TFpiUGJmY1RmMWM0UUR3ZmcyOU4wLy9JQkwzN0ZwaDlhQi9kcnhSMHNmUUVXa1p3QkZKMGlNN1FDcVByTVZTQUxSVFR2RGtjQTM1VTc0d0d0a25rSW5CemloVHVRMzNmZ0ZlVXdob1lxWXI2NUI0R0R4NW4vZW1yREg5L2xaVnp0eFBNK1RDbnM1TWQ0Qi93QXF5d0N4YjY4S1ZKK290OTVqOWxHQUJUOHFvZU52MGFKaW1hbVdReWFHY1oyMnlna2pYcVZmWjNzWnd6MlhlMTJVREZGSUdXWVFnU1dtQ1pvUUdHYXBYNjRnenMrd3ViMzFtbS9BTXMzOWhKVC9wZEdRRSs0RXdjZ2kvdnBmL0VFZWEvc1lmaXZvcXVsSS9oL3Ara0k3UTB4RnpJOVJGcmd4WWRiSi82dG92Vmh2ZUdFbndIbEtWa0doaEpramNCbkdid3g3UHdteDdWL2FjNDh5eXdHN2gyTjcyWmQ2TURiTTBYN3QxRC8yc0g0WWxQMFB2bU8weThXbE5jWDZUN21UazRWTkR0YXBHNGJKSXhPeFRBQmpBalVhQUM1b25FNjJEOEN0aEZ6WnZVTDAzRDV6NUp2WGdDZnI1QWRmKzdsTTh2TVR3T0srWDd2S2YrL3c2d2ZXZCtILzBETS9EUkNYb1Azb1RYRitIVEI1bjQ5aFU0RFZ6MkZMTjc0UXNhUnVmaFpBLzI3SVdIUzFoN2krcjVCWXBIRnFnT3ZnSGZuNlE4c01UeVMvZlM3OE9LdndwWDdpWUQvN3Z6TDUxR1ZNaWJUUnFzQUFBQUFFbEZUa1N1UW1DQ1wiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBUSFJFRTsiXSwic291cmNlUm9vdCI6IiJ9