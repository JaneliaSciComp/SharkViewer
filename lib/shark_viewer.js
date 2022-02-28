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

/***/ "./node_modules/@janelia/three-orbit-unlimited-controls/dist/OrbitUnlimitedControls.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@janelia/three-orbit-unlimited-controls/dist/OrbitUnlimitedControls.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

var THREE = _interopRequireWildcard(__webpack_require__(/*! three */ "three"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// The states of the simple finite state machine for the trackballs interaction.
// The 'INDETERMINATE' state is for when the mouse is down but it has not yet moved
// far enough to know if it is a drag operation (for rotation) or just a click.
var State = Object.freeze({
  INACTIVE: Symbol('INACTIVE'),
  INDETERMINATE: Symbol('INDETERMINATE'),
  ROTATING: Symbol('ROTATING'),
  DOLLYING: Symbol('DOLLYING'),
  PANNING: Symbol('PANNING')
});
var ClickThreshold = 2;

var OrbitUnlimitedControls = /*#__PURE__*/function (_THREE$EventDispatche) {
  _inherits(OrbitUnlimitedControls, _THREE$EventDispatche);

  var _super = _createSuper(OrbitUnlimitedControls);

  function OrbitUnlimitedControls(object, domElement) {
    var _this;

    _classCallCheck(this, OrbitUnlimitedControls);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.target.copy(_this.target0);

      _this.object.position.copy(_this.position0);

      _this.update();
    });

    _defineProperty(_assertThisInitialized(_this), "update", function () {
      _this.object.lookAt(_this.target);

      if (_this.state !== State.ROTATING) {
        _this.fixUp();
      }

      _this.dispatchEvent(_this.changeEvent);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      _this.state = State.INDETERMINATE;
      _this.prev = new THREE.Vector2(event.clientX, event.clientY);
      event.preventDefault(); // Manually set the focus, because preventDefault() prevents automatic setting.

      if (_this.domElement.focus) {
        _this.domElement.focus();
      } else {
        window.focus();
      }

      document.addEventListener('mousemove', _this.onMouseMove, false);
      document.addEventListener('mouseup', _this.onMouseUp, false);

      _this.domElement.addEventListener('contextmenu', _this.onContextMenu, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseWheel", function (event) {
      event.preventDefault();
      _this.state = State.DOLLYING;
      _this.prev = new THREE.Vector2(0, 0);

      _this.dolly(0, -event.deltaY);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (event) {
      event.preventDefault();

      switch (event.buttons) {
        case 1:
          if (event.altKey) {
            // On macOS, altKey indicates the 'option' key.
            _this.pan(event.clientX, event.clientY);
          } else {
            _this.rotate(event.clientX, event.clientY);
          }

          break;

        case 2:
          _this.pan(event.clientX, event.clientY);

          break;

        case 4:
          _this.dolly(event.clientX, event.clientY);

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.state === State.ROTATING) {
        // At the end of the dragging operation, recompute this.camera.up so it is orthogonal
        // to the vector from this.camera.position to this.target.
        _this.fixUp();
      }

      _this.clicked = _this.state === State.INDETERMINATE;
      _this.state = State.INACTIVE;
      document.removeEventListener('mousemove', _this.onMouseMove, false);
      document.removeEventListener('mouseup', _this.onMouseUp, false);

      _this.domElement.removeEventListener('contextmenu', _this.onContextMenu, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var doPan = false;
      var x;
      var y;

      switch (event.keyCode) {
        case _this.keys.UP:
          doPan = true;
          var _ref = [0, _this.keyPanSpeed];
          x = _ref[0];
          y = _ref[1];
          break;

        case _this.keys.DOWN:
          doPan = true;
          x = 0;
          y = -_this.keyPanSpeed;
          break;

        case _this.keys.LEFT:
          doPan = true;
          var _ref2 = [_this.keyPanSpeed, 0];
          x = _ref2[0];
          y = _ref2[1];
          break;

        case _this.keys.RIGHT:
          doPan = true;
          x = -_this.keyPanSpeed;
          y = 0;
          break;

        default:
          break;
      }

      if (doPan) {
        event.preventDefault();
        _this.state = State.PANNING;
        _this.prev = new THREE.Vector2(0, 0);

        _this.pan(x, y);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onContextMenu", function (event) {
      // Prevent the context menu from appearing when the secondary button is clicked,
      // since that buttton is used for panning.
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "rotate", function (x, y) {
      var curr = new THREE.Vector2(x, y);

      if (_this.state === State.INDETERMINATE) {
        var distance = curr.manhattanDistanceTo(_this.prev);

        if (distance > ClickThreshold) {
          _this.state = State.ROTATING; // When the mouse has moved far enough that we know the user is not just clicking,
          // prepare to convert each subsequent mouse motion into camera rotation using
          // spherical coordinates.  We use spherical coordinates to compute the new, rotated
          // position of the camera as if the camera started in a default orientation,
          // positioned on the positive Z axis looking towards the origin.  Then we map the
          // rotated position to the camera's true configuration.  The orientation part of that
          // mapping is a "basis matrix", which repositions a point expressed relative to the
          // standard X, Y an Z axes to a new point where the axes have changed as follows:
          // - the Z axis has become the (normalized) vector from this.target to this.object.position
          // - the Y axis has become this.object.up
          // - the X axis has become the (normalized) cross product of the other two axes
          // The remaining part of the mapping translates the origin to the location of
          // this.target.

          var zAxis = new THREE.Vector3().subVectors(_this.object.position, _this.target);
          _this.radius = zAxis.length();
          zAxis.divideScalar(_this.radius);
          var yAxis = _this.object.up;
          var xAxis = new THREE.Vector3().crossVectors(yAxis, zAxis).normalize();
          _this.basisMatrix = new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis);
          var tr = new THREE.Matrix4().makeTranslation(_this.target.x, _this.target.y, _this.target.z);

          _this.basisMatrix.premultiply(tr);
        }
      }

      if (_this.state === State.ROTATING) {
        // Compute the new, rotated position of the camera based on spherical coordinates.  Use the
        // "physics (ISO convention)" version of spherical coordinates described here, but with the
        // axes spun, to make their X become our Z, their Y become our X and their Z become our Y.
        // Based on the following approach, using spherical coordinates:
        // https://en.wikipedia.org/wiki/Spherical_coordinate_system
        // The algorithm combines details of these two approaches:
        // 1. Livingston et al.:
        // http://www.cs.unc.edu/~livingst/navigate.html
        // 2. Rohner:
        // https://andreasrohner.at/posts/Web%20Development/JavaScript/Simple-orbital-camera-controls-for-THREE-js/
        // Like Livingston et al., use spherical coordinates as if the camera is in a default
        // orientation, positioned on the positive Z axis looking towards the origin, and then use
        // a basis matrix to map the result according to the camera's true configuration.  With this
        // approach, the inclination (theta) and azimuth (phi) are computed directly from the the
        // amount the mouse has moved since the initial location on the 'mousedown' event.  Note that
        // the inclination starts at pi/2, not 0.  Note also that Livingtson et al. swap the meanings
        // of phi and theta.
        var delta = new THREE.Vector2().subVectors(curr, _this.prev);
        var speed = 2.0 * _this.rotateSpeed;
        delta.multiplyScalar(speed);
        var phi = -delta.x * (Math.PI / _this.domElement.clientWidth);
        var theta = -delta.y * (Math.PI / _this.domElement.clientHeight) + Math.PI / 2; // Prevent the inclination from getting too close to 0 or pi.  In either of those case,
        // spherical coordinates stop working, due to "gimbal lock".

        var eps = 0.01;
        theta = Math.max(theta, eps);
        theta = Math.min(theta, Math.PI - eps); // Given the inclination and azimuth determined by the latest mouse position, compute the
        // new position of the camera using spherical coordinates.  Both Livingston et al. and Rohner
        // do a version of this computation, but Rohner's is easier to understand.  Note that Rohner
        // has the camera looking down the X axis initially, with Z being the initial "up".  We follow
        // the more standard convention of having the camera look down the Z axis, with Y being "up".
        // So Rohner's X is our Z, Y is our X, Rohner's Z is our Y.

        var pos = new THREE.Vector3();
        pos.z = _this.radius * Math.sin(theta) * Math.cos(phi);
        pos.x = _this.radius * Math.sin(theta) * Math.sin(phi);
        pos.y = _this.radius * Math.cos(theta); // Finally, use the basis matrix to update the new camera position to account for the actual
        // configuration of the camera as of the "mousedown" event.

        pos.applyMatrix4(_this.basisMatrix);

        _this.object.position.copy(pos); // Then use a "lookAt" matrix to further update the camera to point at this.target.
        // As Rohner points out, "lookAt" requires this.object.up, but as long as the elevation
        // does not go to 0 or pi, the this.object.up as of the 'mousedown' event will work.
        // Also, trigger rendering based on the updated camera.  But do not call this.fixup(),
        // as doing so will result in twisting about the view axis.  Call this.fixup() only
        // when dragging is done


        _this.update();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dolly", function (x, y) {
      var curr = new THREE.Vector2(x, y);

      if (_this.state === State.INDETERMINATE) {
        var distance = curr.manhattanDistanceTo(_this.prev);

        if (distance > ClickThreshold) {
          _this.state = State.DOLLYING;
        }
      }

      if (_this.state === State.DOLLYING) {
        // "Dollying" (giving a "zooming" effect by moving the position of the camera, instead of by
        // changing the field of view) involves finding a new posiiton along the vector from the
        // camera to the target.
        var toTarget = new THREE.Vector3().subVectors(_this.target, _this.object.position);
        var distToTarget = toTarget.length(); // The maximum distance the camera can move on a single mouse drag is determined by
        // this.maxDistance and this.minDistance, with a cap.

        var distLimit = 2 * distToTarget;
        var distForFullDrag = Math.min(_this.maxDistance - _this.minDistance, distLimit); // Use that maximum distance, with the height of the DOM element being the maximum
        // number of pixels moved in a mouse drag, to get a scaling factor.

        var heightPx = _this.domElement.clientHeight;
        var pxToWorld = distForFullDrag / heightPx; // Adjust this factor by the zoomSpeed from the public API and convert the latest mouse move
        // to a distance for moving the camera.

        var speed = _this.zoomSpeed * pxToWorld;
        var deltaY = _this.prev.y - y;
        var delta = speed * deltaY; // Apply the scaling factor to convert the pixels in the latest mouse move to a world
        // distance.

        if (_this.minDistance <= distToTarget + delta && distToTarget + delta <= _this.maxDistance) {
          var deltaToTarget = toTarget.multiplyScalar(delta / distToTarget);

          _this.object.position.sub(deltaToTarget);

          _this.update();

          _this.prev = curr;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pan", function (x, y) {
      var curr = new THREE.Vector2(x, y);

      if (_this.state === State.INDETERMINATE) {
        var distance = curr.manhattanDistanceTo(_this.prev);

        if (distance > ClickThreshold) {
          _this.state = State.PANNING;
        }
      }

      if (_this.state === State.PANNING) {
        // Panning moves the position of the camera in the plane whose normal is the viewing vector,
        // the vector from the current camera position to the target.  So treat that vector as the
        // Z axis, and find the corresponding X and Y axes.
        var zAxis = new THREE.Vector3().subVectors(_this.target, _this.object.position);
        var distToTarget = zAxis.length();
        zAxis.divideScalar(distToTarget);

        var yAxis = _this.object.up.clone();

        var xAxis = new THREE.Vector3().crossVectors(yAxis, zAxis).normalize(); // The maximum distance the camera can move (along these X and Y axes) on a single mouse drag
        // is the distance that would move the target point outside the viewing frustum.  To compute
        // that maximum distance, think of the frustum as two right triangles sharing the viewing
        // vector as one side; that maximum distance is twice the side opposite the corner where the
        // camera is located.  At that corner, the angle of each triangle is half this.object.fov,
        // and the rest follows from basic trigonometry.

        var halfHeightWorld = Math.tan(_this.object.fov / 2 * (Math.PI / 360)) * distToTarget; // Use that maximum distance, with the height of the DOM element being the maximum
        // number of pixels moved in a mouse drag, to get a scaling factor.

        var halfHeightPx = _this.domElement.clientHeight / 2;
        var pxToWorld = halfHeightWorld / halfHeightPx; // Apply the scaling factor to convert the pixels in the latest mouse move to a world
        // distance.

        var delta = new THREE.Vector2().subVectors(curr, _this.prev);
        var deltaX = xAxis.multiplyScalar(delta.x * pxToWorld);
        var deltaY = yAxis.multiplyScalar(delta.y * pxToWorld);

        _this.object.position.add(deltaX);

        _this.object.position.add(deltaY); // Note that when panning, the target moves along with the camera, staying offset by the
        // same viewing vector that was in use at the start of the mouse movement.


        var toTarget = zAxis.multiplyScalar(distToTarget);
        var target = new THREE.Vector3().addVectors(_this.object.position, toTarget);
        _this.target = target;

        _this.update();

        _this.prev = curr;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fixUp", function () {
      // The current this.object.up may be almost aligned with this "view" vector.
      var view = new THREE.Vector3().subVectors(_this.target, _this.object.position).normalize(); // So first find the vector off to the side, orthogonal to both this.object.up and
      // the "view" vector.

      var side = new THREE.Vector3().crossVectors(view, _this.object.up).normalize(); // Then find the vector orthogonal to both this "side" vector and the "view" vector.
      // This vector will be the new "up" vector.

      var up = new THREE.Vector3().crossVectors(side, view).normalize();

      _this.object.up.copy(up);
    });

    _this.object = object;
    _this.domElement = domElement; //
    // Public API that mirrors THREE.OrbitControls

    _this.keyPanSpeed = 7;
    _this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };
    _this.maxDistance = Infinity;
    _this.minDistance = 0;
    _this.rotateSpeed = 1;
    _this.target = new THREE.Vector3();
    _this.zoomSpeed = 1; // New public API
    // The standard 'click' event is sent by this.domElement for any 'mousedown'
    // followed by 'mouseup'.  But a more useful definition of a 'click' is when
    // the cursor moves less than ClickThreshold pixels between the 'mousedown'
    // and the 'mouseup'.  In that case, this.clicked will be true.

    _this.clicked = false; //

    _this.state = State.INACTIVE;
    _this.changeEvent = {
      type: 'change'
    };

    _this.domElement.addEventListener('mousedown', _this.onMouseDown, false);

    _this.domElement.addEventListener('wheel', _this.onMouseWheel, false);

    _this.domElement.addEventListener('keydown', _this.onKeyDown, false);

    if (_this.domElement.tabIndex === -1) {
      // Must be set for 'keydown' to be received.
      _this.domElement.tabIndex = 0;
    } // Used by reset().


    _this.target0 = _this.target.clone();
    _this.position0 = _this.object.position.clone();

    _this.update();

    return _this;
  }

  return OrbitUnlimitedControls;
}(THREE.EventDispatcher);

var _default = OrbitUnlimitedControls;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.13.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

const OrbitUnlimitedControls = __webpack_require__(/*! @janelia/three-orbit-unlimited-controls */ "./node_modules/@janelia/three-orbit-unlimited-controls/dist/OrbitUnlimitedControls.js").default;

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
    this.camera.up.set(0,1,0);
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
      this.camera.up.set(0,1,0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFya1ZpZXdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9AamFuZWxpYS90aHJlZS1vcmJpdC11bmxpbWl0ZWQtY29udHJvbHMvZGlzdC9PcmJpdFVubGltaXRlZENvbnRyb2xzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy90aHJlZS1vYmotbG9hZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vc3JjL3NoYXJrX3ZpZXdlci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL3NyYy92aWV3ZXIvdXRpbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci9leHRlcm5hbCBcIlRIUkVFXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWIsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRXhYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsbUJBQU8sQ0FBQyx5R0FBMEM7O0FBRWxELG1CQUFPLENBQUMsdUhBQWlEOztBQUV6RCxvQ0FBb0MsbUJBQU8sQ0FBQyxvQkFBTzs7QUFFbkQsZ0RBQWdELGdEQUFnRCx1Q0FBdUMsc0NBQXNDLG9GQUFvRiwyREFBMkQsRUFBRSxlQUFlOztBQUU3VSxvREFBb0QsNkNBQTZDLFlBQVksRUFBRSw4RUFBOEUsU0FBUyxrQkFBa0IsRUFBRSxtREFBbUQsK0JBQStCLHVCQUF1QixFQUFFLGlCQUFpQixzRkFBc0YsdUJBQXVCLDJFQUEyRSxxRkFBcUYsc0NBQXNDLDBDQUEwQyxFQUFFLE9BQU8sd0JBQXdCLEVBQUUsRUFBRSxFQUFFLHlCQUF5QixhQUFhLHdCQUF3QixFQUFFLGVBQWU7O0FBRXp5QixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUV4SyxnQ0FBZ0MsNkRBQTZELHlDQUF5Qyw4Q0FBOEMsaUNBQWlDLG1EQUFtRCx5REFBeUQsRUFBRSxPQUFPLHVDQUF1QyxFQUFFLGlEQUFpRCxHQUFHOztBQUV2YSxpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssc0NBQXNDLHdFQUF3RSwwQ0FBMEMsOENBQThDLE1BQU0sNkVBQTZFLEdBQUcsYUFBYSxFQUFFLFlBQVksY0FBYyxFQUFFOztBQUV2VSw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTs7QUFFdkQ7QUFDQTs7QUFFQSwyQ0FBMkMsU0FBUzs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTzs7QUFFOUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVgscURBQXFELFdBQVc7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxPQUFPOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQWtELFlBQVk7O0FBRTlEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLHFEQUFxRCxJQUFJLG9CQUFvQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsY0FBYyxHQUFHO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLG1DQUFtQywrQkFBK0I7QUFDbEU7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFlBQVksSUFBSSxrQkFBa0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNueENBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDN0NsQix1QiIsImZpbGUiOiJzaGFya192aWV3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zaGFya192aWV3ZXIuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCIpO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIik7XG5cbnZhciBUSFJFRSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLy8gVGhlIHN0YXRlcyBvZiB0aGUgc2ltcGxlIGZpbml0ZSBzdGF0ZSBtYWNoaW5lIGZvciB0aGUgdHJhY2tiYWxscyBpbnRlcmFjdGlvbi5cbi8vIFRoZSAnSU5ERVRFUk1JTkFURScgc3RhdGUgaXMgZm9yIHdoZW4gdGhlIG1vdXNlIGlzIGRvd24gYnV0IGl0IGhhcyBub3QgeWV0IG1vdmVkXG4vLyBmYXIgZW5vdWdoIHRvIGtub3cgaWYgaXQgaXMgYSBkcmFnIG9wZXJhdGlvbiAoZm9yIHJvdGF0aW9uKSBvciBqdXN0IGEgY2xpY2suXG52YXIgU3RhdGUgPSBPYmplY3QuZnJlZXplKHtcbiAgSU5BQ1RJVkU6IFN5bWJvbCgnSU5BQ1RJVkUnKSxcbiAgSU5ERVRFUk1JTkFURTogU3ltYm9sKCdJTkRFVEVSTUlOQVRFJyksXG4gIFJPVEFUSU5HOiBTeW1ib2woJ1JPVEFUSU5HJyksXG4gIERPTExZSU5HOiBTeW1ib2woJ0RPTExZSU5HJyksXG4gIFBBTk5JTkc6IFN5bWJvbCgnUEFOTklORycpXG59KTtcbnZhciBDbGlja1RocmVzaG9sZCA9IDI7XG5cbnZhciBPcmJpdFVubGltaXRlZENvbnRyb2xzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfVEhSRUUkRXZlbnREaXNwYXRjaGUpIHtcbiAgX2luaGVyaXRzKE9yYml0VW5saW1pdGVkQ29udHJvbHMsIF9USFJFRSRFdmVudERpc3BhdGNoZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihPcmJpdFVubGltaXRlZENvbnRyb2xzKTtcblxuICBmdW5jdGlvbiBPcmJpdFVubGltaXRlZENvbnRyb2xzKG9iamVjdCwgZG9tRWxlbWVudCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcmJpdFVubGltaXRlZENvbnRyb2xzKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzZXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMudGFyZ2V0LmNvcHkoX3RoaXMudGFyZ2V0MCk7XG5cbiAgICAgIF90aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KF90aGlzLnBvc2l0aW9uMCk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5vYmplY3QubG9va0F0KF90aGlzLnRhcmdldCk7XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZSAhPT0gU3RhdGUuUk9UQVRJTkcpIHtcbiAgICAgICAgX3RoaXMuZml4VXAoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuZGlzcGF0Y2hFdmVudChfdGhpcy5jaGFuZ2VFdmVudCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Nb3VzZURvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLklOREVURVJNSU5BVEU7XG4gICAgICBfdGhpcy5wcmV2ID0gbmV3IFRIUkVFLlZlY3RvcjIoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBNYW51YWxseSBzZXQgdGhlIGZvY3VzLCBiZWNhdXNlIHByZXZlbnREZWZhdWx0KCkgcHJldmVudHMgYXV0b21hdGljIHNldHRpbmcuXG5cbiAgICAgIGlmIChfdGhpcy5kb21FbGVtZW50LmZvY3VzKSB7XG4gICAgICAgIF90aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfdGhpcy5vbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLm9uTW91c2VVcCwgZmFsc2UpO1xuXG4gICAgICBfdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgX3RoaXMub25Db250ZXh0TWVudSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTW91c2VXaGVlbFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLkRPTExZSU5HO1xuICAgICAgX3RoaXMucHJldiA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xuXG4gICAgICBfdGhpcy5kb2xseSgwLCAtZXZlbnQuZGVsdGFZKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk1vdXNlTW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQuYnV0dG9ucykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgLy8gT24gbWFjT1MsIGFsdEtleSBpbmRpY2F0ZXMgdGhlICdvcHRpb24nIGtleS5cbiAgICAgICAgICAgIF90aGlzLnBhbihldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMucm90YXRlKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfdGhpcy5wYW4oZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX3RoaXMuZG9sbHkoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTW91c2VVcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFN0YXRlLlJPVEFUSU5HKSB7XG4gICAgICAgIC8vIEF0IHRoZSBlbmQgb2YgdGhlIGRyYWdnaW5nIG9wZXJhdGlvbiwgcmVjb21wdXRlIHRoaXMuY2FtZXJhLnVwIHNvIGl0IGlzIG9ydGhvZ29uYWxcbiAgICAgICAgLy8gdG8gdGhlIHZlY3RvciBmcm9tIHRoaXMuY2FtZXJhLnBvc2l0aW9uIHRvIHRoaXMudGFyZ2V0LlxuICAgICAgICBfdGhpcy5maXhVcCgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGlja2VkID0gX3RoaXMuc3RhdGUgPT09IFN0YXRlLklOREVURVJNSU5BVEU7XG4gICAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLklOQUNUSVZFO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5vbk1vdXNlVXAsIGZhbHNlKTtcblxuICAgICAgX3RoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIF90aGlzLm9uQ29udGV4dE1lbnUsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbktleURvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgZG9QYW4gPSBmYWxzZTtcbiAgICAgIHZhciB4O1xuICAgICAgdmFyIHk7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIF90aGlzLmtleXMuVVA6XG4gICAgICAgICAgZG9QYW4gPSB0cnVlO1xuICAgICAgICAgIHZhciBfcmVmID0gWzAsIF90aGlzLmtleVBhblNwZWVkXTtcbiAgICAgICAgICB4ID0gX3JlZlswXTtcbiAgICAgICAgICB5ID0gX3JlZlsxXTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIF90aGlzLmtleXMuRE9XTjpcbiAgICAgICAgICBkb1BhbiA9IHRydWU7XG4gICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgeSA9IC1fdGhpcy5rZXlQYW5TcGVlZDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIF90aGlzLmtleXMuTEVGVDpcbiAgICAgICAgICBkb1BhbiA9IHRydWU7XG4gICAgICAgICAgdmFyIF9yZWYyID0gW190aGlzLmtleVBhblNwZWVkLCAwXTtcbiAgICAgICAgICB4ID0gX3JlZjJbMF07XG4gICAgICAgICAgeSA9IF9yZWYyWzFdO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgX3RoaXMua2V5cy5SSUdIVDpcbiAgICAgICAgICBkb1BhbiA9IHRydWU7XG4gICAgICAgICAgeCA9IC1fdGhpcy5rZXlQYW5TcGVlZDtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9QYW4pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5QQU5OSU5HO1xuICAgICAgICBfdGhpcy5wcmV2ID0gbmV3IFRIUkVFLlZlY3RvcjIoMCwgMCk7XG5cbiAgICAgICAgX3RoaXMucGFuKHgsIHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ29udGV4dE1lbnVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IHRoZSBjb250ZXh0IG1lbnUgZnJvbSBhcHBlYXJpbmcgd2hlbiB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiBpcyBjbGlja2VkLFxuICAgICAgLy8gc2luY2UgdGhhdCBidXR0dG9uIGlzIHVzZWQgZm9yIHBhbm5pbmcuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJvdGF0ZVwiLCBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgdmFyIGN1cnIgPSBuZXcgVEhSRUUuVmVjdG9yMih4LCB5KTtcblxuICAgICAgaWYgKF90aGlzLnN0YXRlID09PSBTdGF0ZS5JTkRFVEVSTUlOQVRFKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnIubWFuaGF0dGFuRGlzdGFuY2VUbyhfdGhpcy5wcmV2KTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPiBDbGlja1RocmVzaG9sZCkge1xuICAgICAgICAgIF90aGlzLnN0YXRlID0gU3RhdGUuUk9UQVRJTkc7IC8vIFdoZW4gdGhlIG1vdXNlIGhhcyBtb3ZlZCBmYXIgZW5vdWdoIHRoYXQgd2Uga25vdyB0aGUgdXNlciBpcyBub3QganVzdCBjbGlja2luZyxcbiAgICAgICAgICAvLyBwcmVwYXJlIHRvIGNvbnZlcnQgZWFjaCBzdWJzZXF1ZW50IG1vdXNlIG1vdGlvbiBpbnRvIGNhbWVyYSByb3RhdGlvbiB1c2luZ1xuICAgICAgICAgIC8vIHNwaGVyaWNhbCBjb29yZGluYXRlcy4gIFdlIHVzZSBzcGhlcmljYWwgY29vcmRpbmF0ZXMgdG8gY29tcHV0ZSB0aGUgbmV3LCByb3RhdGVkXG4gICAgICAgICAgLy8gcG9zaXRpb24gb2YgdGhlIGNhbWVyYSBhcyBpZiB0aGUgY2FtZXJhIHN0YXJ0ZWQgaW4gYSBkZWZhdWx0IG9yaWVudGF0aW9uLFxuICAgICAgICAgIC8vIHBvc2l0aW9uZWQgb24gdGhlIHBvc2l0aXZlIFogYXhpcyBsb29raW5nIHRvd2FyZHMgdGhlIG9yaWdpbi4gIFRoZW4gd2UgbWFwIHRoZVxuICAgICAgICAgIC8vIHJvdGF0ZWQgcG9zaXRpb24gdG8gdGhlIGNhbWVyYSdzIHRydWUgY29uZmlndXJhdGlvbi4gIFRoZSBvcmllbnRhdGlvbiBwYXJ0IG9mIHRoYXRcbiAgICAgICAgICAvLyBtYXBwaW5nIGlzIGEgXCJiYXNpcyBtYXRyaXhcIiwgd2hpY2ggcmVwb3NpdGlvbnMgYSBwb2ludCBleHByZXNzZWQgcmVsYXRpdmUgdG8gdGhlXG4gICAgICAgICAgLy8gc3RhbmRhcmQgWCwgWSBhbiBaIGF4ZXMgdG8gYSBuZXcgcG9pbnQgd2hlcmUgdGhlIGF4ZXMgaGF2ZSBjaGFuZ2VkIGFzIGZvbGxvd3M6XG4gICAgICAgICAgLy8gLSB0aGUgWiBheGlzIGhhcyBiZWNvbWUgdGhlIChub3JtYWxpemVkKSB2ZWN0b3IgZnJvbSB0aGlzLnRhcmdldCB0byB0aGlzLm9iamVjdC5wb3NpdGlvblxuICAgICAgICAgIC8vIC0gdGhlIFkgYXhpcyBoYXMgYmVjb21lIHRoaXMub2JqZWN0LnVwXG4gICAgICAgICAgLy8gLSB0aGUgWCBheGlzIGhhcyBiZWNvbWUgdGhlIChub3JtYWxpemVkKSBjcm9zcyBwcm9kdWN0IG9mIHRoZSBvdGhlciB0d28gYXhlc1xuICAgICAgICAgIC8vIFRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgbWFwcGluZyB0cmFuc2xhdGVzIHRoZSBvcmlnaW4gdG8gdGhlIGxvY2F0aW9uIG9mXG4gICAgICAgICAgLy8gdGhpcy50YXJnZXQuXG5cbiAgICAgICAgICB2YXIgekF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMoX3RoaXMub2JqZWN0LnBvc2l0aW9uLCBfdGhpcy50YXJnZXQpO1xuICAgICAgICAgIF90aGlzLnJhZGl1cyA9IHpBeGlzLmxlbmd0aCgpO1xuICAgICAgICAgIHpBeGlzLmRpdmlkZVNjYWxhcihfdGhpcy5yYWRpdXMpO1xuICAgICAgICAgIHZhciB5QXhpcyA9IF90aGlzLm9iamVjdC51cDtcbiAgICAgICAgICB2YXIgeEF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyh5QXhpcywgekF4aXMpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgIF90aGlzLmJhc2lzTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlQmFzaXMoeEF4aXMsIHlBeGlzLCB6QXhpcyk7XG4gICAgICAgICAgdmFyIHRyID0gbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oX3RoaXMudGFyZ2V0LngsIF90aGlzLnRhcmdldC55LCBfdGhpcy50YXJnZXQueik7XG5cbiAgICAgICAgICBfdGhpcy5iYXNpc01hdHJpeC5wcmVtdWx0aXBseSh0cik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnN0YXRlID09PSBTdGF0ZS5ST1RBVElORykge1xuICAgICAgICAvLyBDb21wdXRlIHRoZSBuZXcsIHJvdGF0ZWQgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSBiYXNlZCBvbiBzcGhlcmljYWwgY29vcmRpbmF0ZXMuICBVc2UgdGhlXG4gICAgICAgIC8vIFwicGh5c2ljcyAoSVNPIGNvbnZlbnRpb24pXCIgdmVyc2lvbiBvZiBzcGhlcmljYWwgY29vcmRpbmF0ZXMgZGVzY3JpYmVkIGhlcmUsIGJ1dCB3aXRoIHRoZVxuICAgICAgICAvLyBheGVzIHNwdW4sIHRvIG1ha2UgdGhlaXIgWCBiZWNvbWUgb3VyIFosIHRoZWlyIFkgYmVjb21lIG91ciBYIGFuZCB0aGVpciBaIGJlY29tZSBvdXIgWS5cbiAgICAgICAgLy8gQmFzZWQgb24gdGhlIGZvbGxvd2luZyBhcHByb2FjaCwgdXNpbmcgc3BoZXJpY2FsIGNvb3JkaW5hdGVzOlxuICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TcGhlcmljYWxfY29vcmRpbmF0ZV9zeXN0ZW1cbiAgICAgICAgLy8gVGhlIGFsZ29yaXRobSBjb21iaW5lcyBkZXRhaWxzIG9mIHRoZXNlIHR3byBhcHByb2FjaGVzOlxuICAgICAgICAvLyAxLiBMaXZpbmdzdG9uIGV0IGFsLjpcbiAgICAgICAgLy8gaHR0cDovL3d3dy5jcy51bmMuZWR1L35saXZpbmdzdC9uYXZpZ2F0ZS5odG1sXG4gICAgICAgIC8vIDIuIFJvaG5lcjpcbiAgICAgICAgLy8gaHR0cHM6Ly9hbmRyZWFzcm9obmVyLmF0L3Bvc3RzL1dlYiUyMERldmVsb3BtZW50L0phdmFTY3JpcHQvU2ltcGxlLW9yYml0YWwtY2FtZXJhLWNvbnRyb2xzLWZvci1USFJFRS1qcy9cbiAgICAgICAgLy8gTGlrZSBMaXZpbmdzdG9uIGV0IGFsLiwgdXNlIHNwaGVyaWNhbCBjb29yZGluYXRlcyBhcyBpZiB0aGUgY2FtZXJhIGlzIGluIGEgZGVmYXVsdFxuICAgICAgICAvLyBvcmllbnRhdGlvbiwgcG9zaXRpb25lZCBvbiB0aGUgcG9zaXRpdmUgWiBheGlzIGxvb2tpbmcgdG93YXJkcyB0aGUgb3JpZ2luLCBhbmQgdGhlbiB1c2VcbiAgICAgICAgLy8gYSBiYXNpcyBtYXRyaXggdG8gbWFwIHRoZSByZXN1bHQgYWNjb3JkaW5nIHRvIHRoZSBjYW1lcmEncyB0cnVlIGNvbmZpZ3VyYXRpb24uICBXaXRoIHRoaXNcbiAgICAgICAgLy8gYXBwcm9hY2gsIHRoZSBpbmNsaW5hdGlvbiAodGhldGEpIGFuZCBhemltdXRoIChwaGkpIGFyZSBjb21wdXRlZCBkaXJlY3RseSBmcm9tIHRoZSB0aGVcbiAgICAgICAgLy8gYW1vdW50IHRoZSBtb3VzZSBoYXMgbW92ZWQgc2luY2UgdGhlIGluaXRpYWwgbG9jYXRpb24gb24gdGhlICdtb3VzZWRvd24nIGV2ZW50LiAgTm90ZSB0aGF0XG4gICAgICAgIC8vIHRoZSBpbmNsaW5hdGlvbiBzdGFydHMgYXQgcGkvMiwgbm90IDAuICBOb3RlIGFsc28gdGhhdCBMaXZpbmd0c29uIGV0IGFsLiBzd2FwIHRoZSBtZWFuaW5nc1xuICAgICAgICAvLyBvZiBwaGkgYW5kIHRoZXRhLlxuICAgICAgICB2YXIgZGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpLnN1YlZlY3RvcnMoY3VyciwgX3RoaXMucHJldik7XG4gICAgICAgIHZhciBzcGVlZCA9IDIuMCAqIF90aGlzLnJvdGF0ZVNwZWVkO1xuICAgICAgICBkZWx0YS5tdWx0aXBseVNjYWxhcihzcGVlZCk7XG4gICAgICAgIHZhciBwaGkgPSAtZGVsdGEueCAqIChNYXRoLlBJIC8gX3RoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICAgIHZhciB0aGV0YSA9IC1kZWx0YS55ICogKE1hdGguUEkgLyBfdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodCkgKyBNYXRoLlBJIC8gMjsgLy8gUHJldmVudCB0aGUgaW5jbGluYXRpb24gZnJvbSBnZXR0aW5nIHRvbyBjbG9zZSB0byAwIG9yIHBpLiAgSW4gZWl0aGVyIG9mIHRob3NlIGNhc2UsXG4gICAgICAgIC8vIHNwaGVyaWNhbCBjb29yZGluYXRlcyBzdG9wIHdvcmtpbmcsIGR1ZSB0byBcImdpbWJhbCBsb2NrXCIuXG5cbiAgICAgICAgdmFyIGVwcyA9IDAuMDE7XG4gICAgICAgIHRoZXRhID0gTWF0aC5tYXgodGhldGEsIGVwcyk7XG4gICAgICAgIHRoZXRhID0gTWF0aC5taW4odGhldGEsIE1hdGguUEkgLSBlcHMpOyAvLyBHaXZlbiB0aGUgaW5jbGluYXRpb24gYW5kIGF6aW11dGggZGV0ZXJtaW5lZCBieSB0aGUgbGF0ZXN0IG1vdXNlIHBvc2l0aW9uLCBjb21wdXRlIHRoZVxuICAgICAgICAvLyBuZXcgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSB1c2luZyBzcGhlcmljYWwgY29vcmRpbmF0ZXMuICBCb3RoIExpdmluZ3N0b24gZXQgYWwuIGFuZCBSb2huZXJcbiAgICAgICAgLy8gZG8gYSB2ZXJzaW9uIG9mIHRoaXMgY29tcHV0YXRpb24sIGJ1dCBSb2huZXIncyBpcyBlYXNpZXIgdG8gdW5kZXJzdGFuZC4gIE5vdGUgdGhhdCBSb2huZXJcbiAgICAgICAgLy8gaGFzIHRoZSBjYW1lcmEgbG9va2luZyBkb3duIHRoZSBYIGF4aXMgaW5pdGlhbGx5LCB3aXRoIFogYmVpbmcgdGhlIGluaXRpYWwgXCJ1cFwiLiAgV2UgZm9sbG93XG4gICAgICAgIC8vIHRoZSBtb3JlIHN0YW5kYXJkIGNvbnZlbnRpb24gb2YgaGF2aW5nIHRoZSBjYW1lcmEgbG9vayBkb3duIHRoZSBaIGF4aXMsIHdpdGggWSBiZWluZyBcInVwXCIuXG4gICAgICAgIC8vIFNvIFJvaG5lcidzIFggaXMgb3VyIFosIFkgaXMgb3VyIFgsIFJvaG5lcidzIFogaXMgb3VyIFkuXG5cbiAgICAgICAgdmFyIHBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIHBvcy56ID0gX3RoaXMucmFkaXVzICogTWF0aC5zaW4odGhldGEpICogTWF0aC5jb3MocGhpKTtcbiAgICAgICAgcG9zLnggPSBfdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGV0YSkgKiBNYXRoLnNpbihwaGkpO1xuICAgICAgICBwb3MueSA9IF90aGlzLnJhZGl1cyAqIE1hdGguY29zKHRoZXRhKTsgLy8gRmluYWxseSwgdXNlIHRoZSBiYXNpcyBtYXRyaXggdG8gdXBkYXRlIHRoZSBuZXcgY2FtZXJhIHBvc2l0aW9uIHRvIGFjY291bnQgZm9yIHRoZSBhY3R1YWxcbiAgICAgICAgLy8gY29uZmlndXJhdGlvbiBvZiB0aGUgY2FtZXJhIGFzIG9mIHRoZSBcIm1vdXNlZG93blwiIGV2ZW50LlxuXG4gICAgICAgIHBvcy5hcHBseU1hdHJpeDQoX3RoaXMuYmFzaXNNYXRyaXgpO1xuXG4gICAgICAgIF90aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KHBvcyk7IC8vIFRoZW4gdXNlIGEgXCJsb29rQXRcIiBtYXRyaXggdG8gZnVydGhlciB1cGRhdGUgdGhlIGNhbWVyYSB0byBwb2ludCBhdCB0aGlzLnRhcmdldC5cbiAgICAgICAgLy8gQXMgUm9obmVyIHBvaW50cyBvdXQsIFwibG9va0F0XCIgcmVxdWlyZXMgdGhpcy5vYmplY3QudXAsIGJ1dCBhcyBsb25nIGFzIHRoZSBlbGV2YXRpb25cbiAgICAgICAgLy8gZG9lcyBub3QgZ28gdG8gMCBvciBwaSwgdGhlIHRoaXMub2JqZWN0LnVwIGFzIG9mIHRoZSAnbW91c2Vkb3duJyBldmVudCB3aWxsIHdvcmsuXG4gICAgICAgIC8vIEFsc28sIHRyaWdnZXIgcmVuZGVyaW5nIGJhc2VkIG9uIHRoZSB1cGRhdGVkIGNhbWVyYS4gIEJ1dCBkbyBub3QgY2FsbCB0aGlzLmZpeHVwKCksXG4gICAgICAgIC8vIGFzIGRvaW5nIHNvIHdpbGwgcmVzdWx0IGluIHR3aXN0aW5nIGFib3V0IHRoZSB2aWV3IGF4aXMuICBDYWxsIHRoaXMuZml4dXAoKSBvbmx5XG4gICAgICAgIC8vIHdoZW4gZHJhZ2dpbmcgaXMgZG9uZVxuXG5cbiAgICAgICAgX3RoaXMudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZG9sbHlcIiwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHZhciBjdXJyID0gbmV3IFRIUkVFLlZlY3RvcjIoeCwgeSk7XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuSU5ERVRFUk1JTkFURSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBjdXJyLm1hbmhhdHRhbkRpc3RhbmNlVG8oX3RoaXMucHJldik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlID4gQ2xpY2tUaHJlc2hvbGQpIHtcbiAgICAgICAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLkRPTExZSU5HO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuRE9MTFlJTkcpIHtcbiAgICAgICAgLy8gXCJEb2xseWluZ1wiIChnaXZpbmcgYSBcInpvb21pbmdcIiBlZmZlY3QgYnkgbW92aW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhLCBpbnN0ZWFkIG9mIGJ5XG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBmaWVsZCBvZiB2aWV3KSBpbnZvbHZlcyBmaW5kaW5nIGEgbmV3IHBvc2lpdG9uIGFsb25nIHRoZSB2ZWN0b3IgZnJvbSB0aGVcbiAgICAgICAgLy8gY2FtZXJhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIHZhciB0b1RhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhfdGhpcy50YXJnZXQsIF90aGlzLm9iamVjdC5wb3NpdGlvbik7XG4gICAgICAgIHZhciBkaXN0VG9UYXJnZXQgPSB0b1RhcmdldC5sZW5ndGgoKTsgLy8gVGhlIG1heGltdW0gZGlzdGFuY2UgdGhlIGNhbWVyYSBjYW4gbW92ZSBvbiBhIHNpbmdsZSBtb3VzZSBkcmFnIGlzIGRldGVybWluZWQgYnlcbiAgICAgICAgLy8gdGhpcy5tYXhEaXN0YW5jZSBhbmQgdGhpcy5taW5EaXN0YW5jZSwgd2l0aCBhIGNhcC5cblxuICAgICAgICB2YXIgZGlzdExpbWl0ID0gMiAqIGRpc3RUb1RhcmdldDtcbiAgICAgICAgdmFyIGRpc3RGb3JGdWxsRHJhZyA9IE1hdGgubWluKF90aGlzLm1heERpc3RhbmNlIC0gX3RoaXMubWluRGlzdGFuY2UsIGRpc3RMaW1pdCk7IC8vIFVzZSB0aGF0IG1heGltdW0gZGlzdGFuY2UsIHdpdGggdGhlIGhlaWdodCBvZiB0aGUgRE9NIGVsZW1lbnQgYmVpbmcgdGhlIG1heGltdW1cbiAgICAgICAgLy8gbnVtYmVyIG9mIHBpeGVscyBtb3ZlZCBpbiBhIG1vdXNlIGRyYWcsIHRvIGdldCBhIHNjYWxpbmcgZmFjdG9yLlxuXG4gICAgICAgIHZhciBoZWlnaHRQeCA9IF90aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICB2YXIgcHhUb1dvcmxkID0gZGlzdEZvckZ1bGxEcmFnIC8gaGVpZ2h0UHg7IC8vIEFkanVzdCB0aGlzIGZhY3RvciBieSB0aGUgem9vbVNwZWVkIGZyb20gdGhlIHB1YmxpYyBBUEkgYW5kIGNvbnZlcnQgdGhlIGxhdGVzdCBtb3VzZSBtb3ZlXG4gICAgICAgIC8vIHRvIGEgZGlzdGFuY2UgZm9yIG1vdmluZyB0aGUgY2FtZXJhLlxuXG4gICAgICAgIHZhciBzcGVlZCA9IF90aGlzLnpvb21TcGVlZCAqIHB4VG9Xb3JsZDtcbiAgICAgICAgdmFyIGRlbHRhWSA9IF90aGlzLnByZXYueSAtIHk7XG4gICAgICAgIHZhciBkZWx0YSA9IHNwZWVkICogZGVsdGFZOyAvLyBBcHBseSB0aGUgc2NhbGluZyBmYWN0b3IgdG8gY29udmVydCB0aGUgcGl4ZWxzIGluIHRoZSBsYXRlc3QgbW91c2UgbW92ZSB0byBhIHdvcmxkXG4gICAgICAgIC8vIGRpc3RhbmNlLlxuXG4gICAgICAgIGlmIChfdGhpcy5taW5EaXN0YW5jZSA8PSBkaXN0VG9UYXJnZXQgKyBkZWx0YSAmJiBkaXN0VG9UYXJnZXQgKyBkZWx0YSA8PSBfdGhpcy5tYXhEaXN0YW5jZSkge1xuICAgICAgICAgIHZhciBkZWx0YVRvVGFyZ2V0ID0gdG9UYXJnZXQubXVsdGlwbHlTY2FsYXIoZGVsdGEgLyBkaXN0VG9UYXJnZXQpO1xuXG4gICAgICAgICAgX3RoaXMub2JqZWN0LnBvc2l0aW9uLnN1YihkZWx0YVRvVGFyZ2V0KTtcblxuICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgX3RoaXMucHJldiA9IGN1cnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYW5cIiwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHZhciBjdXJyID0gbmV3IFRIUkVFLlZlY3RvcjIoeCwgeSk7XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuSU5ERVRFUk1JTkFURSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBjdXJyLm1hbmhhdHRhbkRpc3RhbmNlVG8oX3RoaXMucHJldik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlID4gQ2xpY2tUaHJlc2hvbGQpIHtcbiAgICAgICAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLlBBTk5JTkc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnN0YXRlID09PSBTdGF0ZS5QQU5OSU5HKSB7XG4gICAgICAgIC8vIFBhbm5pbmcgbW92ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEgaW4gdGhlIHBsYW5lIHdob3NlIG5vcm1hbCBpcyB0aGUgdmlld2luZyB2ZWN0b3IsXG4gICAgICAgIC8vIHRoZSB2ZWN0b3IgZnJvbSB0aGUgY3VycmVudCBjYW1lcmEgcG9zaXRpb24gdG8gdGhlIHRhcmdldC4gIFNvIHRyZWF0IHRoYXQgdmVjdG9yIGFzIHRoZVxuICAgICAgICAvLyBaIGF4aXMsIGFuZCBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIFggYW5kIFkgYXhlcy5cbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKF90aGlzLnRhcmdldCwgX3RoaXMub2JqZWN0LnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIGRpc3RUb1RhcmdldCA9IHpBeGlzLmxlbmd0aCgpO1xuICAgICAgICB6QXhpcy5kaXZpZGVTY2FsYXIoZGlzdFRvVGFyZ2V0KTtcblxuICAgICAgICB2YXIgeUF4aXMgPSBfdGhpcy5vYmplY3QudXAuY2xvbmUoKTtcblxuICAgICAgICB2YXIgeEF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyh5QXhpcywgekF4aXMpLm5vcm1hbGl6ZSgpOyAvLyBUaGUgbWF4aW11bSBkaXN0YW5jZSB0aGUgY2FtZXJhIGNhbiBtb3ZlIChhbG9uZyB0aGVzZSBYIGFuZCBZIGF4ZXMpIG9uIGEgc2luZ2xlIG1vdXNlIGRyYWdcbiAgICAgICAgLy8gaXMgdGhlIGRpc3RhbmNlIHRoYXQgd291bGQgbW92ZSB0aGUgdGFyZ2V0IHBvaW50IG91dHNpZGUgdGhlIHZpZXdpbmcgZnJ1c3R1bS4gIFRvIGNvbXB1dGVcbiAgICAgICAgLy8gdGhhdCBtYXhpbXVtIGRpc3RhbmNlLCB0aGluayBvZiB0aGUgZnJ1c3R1bSBhcyB0d28gcmlnaHQgdHJpYW5nbGVzIHNoYXJpbmcgdGhlIHZpZXdpbmdcbiAgICAgICAgLy8gdmVjdG9yIGFzIG9uZSBzaWRlOyB0aGF0IG1heGltdW0gZGlzdGFuY2UgaXMgdHdpY2UgdGhlIHNpZGUgb3Bwb3NpdGUgdGhlIGNvcm5lciB3aGVyZSB0aGVcbiAgICAgICAgLy8gY2FtZXJhIGlzIGxvY2F0ZWQuICBBdCB0aGF0IGNvcm5lciwgdGhlIGFuZ2xlIG9mIGVhY2ggdHJpYW5nbGUgaXMgaGFsZiB0aGlzLm9iamVjdC5mb3YsXG4gICAgICAgIC8vIGFuZCB0aGUgcmVzdCBmb2xsb3dzIGZyb20gYmFzaWMgdHJpZ29ub21ldHJ5LlxuXG4gICAgICAgIHZhciBoYWxmSGVpZ2h0V29ybGQgPSBNYXRoLnRhbihfdGhpcy5vYmplY3QuZm92IC8gMiAqIChNYXRoLlBJIC8gMzYwKSkgKiBkaXN0VG9UYXJnZXQ7IC8vIFVzZSB0aGF0IG1heGltdW0gZGlzdGFuY2UsIHdpdGggdGhlIGhlaWdodCBvZiB0aGUgRE9NIGVsZW1lbnQgYmVpbmcgdGhlIG1heGltdW1cbiAgICAgICAgLy8gbnVtYmVyIG9mIHBpeGVscyBtb3ZlZCBpbiBhIG1vdXNlIGRyYWcsIHRvIGdldCBhIHNjYWxpbmcgZmFjdG9yLlxuXG4gICAgICAgIHZhciBoYWxmSGVpZ2h0UHggPSBfdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodCAvIDI7XG4gICAgICAgIHZhciBweFRvV29ybGQgPSBoYWxmSGVpZ2h0V29ybGQgLyBoYWxmSGVpZ2h0UHg7IC8vIEFwcGx5IHRoZSBzY2FsaW5nIGZhY3RvciB0byBjb252ZXJ0IHRoZSBwaXhlbHMgaW4gdGhlIGxhdGVzdCBtb3VzZSBtb3ZlIHRvIGEgd29ybGRcbiAgICAgICAgLy8gZGlzdGFuY2UuXG5cbiAgICAgICAgdmFyIGRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKS5zdWJWZWN0b3JzKGN1cnIsIF90aGlzLnByZXYpO1xuICAgICAgICB2YXIgZGVsdGFYID0geEF4aXMubXVsdGlwbHlTY2FsYXIoZGVsdGEueCAqIHB4VG9Xb3JsZCk7XG4gICAgICAgIHZhciBkZWx0YVkgPSB5QXhpcy5tdWx0aXBseVNjYWxhcihkZWx0YS55ICogcHhUb1dvcmxkKTtcblxuICAgICAgICBfdGhpcy5vYmplY3QucG9zaXRpb24uYWRkKGRlbHRhWCk7XG5cbiAgICAgICAgX3RoaXMub2JqZWN0LnBvc2l0aW9uLmFkZChkZWx0YVkpOyAvLyBOb3RlIHRoYXQgd2hlbiBwYW5uaW5nLCB0aGUgdGFyZ2V0IG1vdmVzIGFsb25nIHdpdGggdGhlIGNhbWVyYSwgc3RheWluZyBvZmZzZXQgYnkgdGhlXG4gICAgICAgIC8vIHNhbWUgdmlld2luZyB2ZWN0b3IgdGhhdCB3YXMgaW4gdXNlIGF0IHRoZSBzdGFydCBvZiB0aGUgbW91c2UgbW92ZW1lbnQuXG5cblxuICAgICAgICB2YXIgdG9UYXJnZXQgPSB6QXhpcy5tdWx0aXBseVNjYWxhcihkaXN0VG9UYXJnZXQpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5hZGRWZWN0b3JzKF90aGlzLm9iamVjdC5wb3NpdGlvbiwgdG9UYXJnZXQpO1xuICAgICAgICBfdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cbiAgICAgICAgX3RoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgX3RoaXMucHJldiA9IGN1cnI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZml4VXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVGhlIGN1cnJlbnQgdGhpcy5vYmplY3QudXAgbWF5IGJlIGFsbW9zdCBhbGlnbmVkIHdpdGggdGhpcyBcInZpZXdcIiB2ZWN0b3IuXG4gICAgICB2YXIgdmlldyA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhfdGhpcy50YXJnZXQsIF90aGlzLm9iamVjdC5wb3NpdGlvbikubm9ybWFsaXplKCk7IC8vIFNvIGZpcnN0IGZpbmQgdGhlIHZlY3RvciBvZmYgdG8gdGhlIHNpZGUsIG9ydGhvZ29uYWwgdG8gYm90aCB0aGlzLm9iamVjdC51cCBhbmRcbiAgICAgIC8vIHRoZSBcInZpZXdcIiB2ZWN0b3IuXG5cbiAgICAgIHZhciBzaWRlID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnModmlldywgX3RoaXMub2JqZWN0LnVwKS5ub3JtYWxpemUoKTsgLy8gVGhlbiBmaW5kIHRoZSB2ZWN0b3Igb3J0aG9nb25hbCB0byBib3RoIHRoaXMgXCJzaWRlXCIgdmVjdG9yIGFuZCB0aGUgXCJ2aWV3XCIgdmVjdG9yLlxuICAgICAgLy8gVGhpcyB2ZWN0b3Igd2lsbCBiZSB0aGUgbmV3IFwidXBcIiB2ZWN0b3IuXG5cbiAgICAgIHZhciB1cCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKHNpZGUsIHZpZXcpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICBfdGhpcy5vYmplY3QudXAuY29weSh1cCk7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgX3RoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vXG4gICAgLy8gUHVibGljIEFQSSB0aGF0IG1pcnJvcnMgVEhSRUUuT3JiaXRDb250cm9sc1xuXG4gICAgX3RoaXMua2V5UGFuU3BlZWQgPSA3O1xuICAgIF90aGlzLmtleXMgPSB7XG4gICAgICBMRUZUOiAzNyxcbiAgICAgIFVQOiAzOCxcbiAgICAgIFJJR0hUOiAzOSxcbiAgICAgIERPV046IDQwXG4gICAgfTtcbiAgICBfdGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuICAgIF90aGlzLm1pbkRpc3RhbmNlID0gMDtcbiAgICBfdGhpcy5yb3RhdGVTcGVlZCA9IDE7XG4gICAgX3RoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICBfdGhpcy56b29tU3BlZWQgPSAxOyAvLyBOZXcgcHVibGljIEFQSVxuICAgIC8vIFRoZSBzdGFuZGFyZCAnY2xpY2snIGV2ZW50IGlzIHNlbnQgYnkgdGhpcy5kb21FbGVtZW50IGZvciBhbnkgJ21vdXNlZG93bidcbiAgICAvLyBmb2xsb3dlZCBieSAnbW91c2V1cCcuICBCdXQgYSBtb3JlIHVzZWZ1bCBkZWZpbml0aW9uIG9mIGEgJ2NsaWNrJyBpcyB3aGVuXG4gICAgLy8gdGhlIGN1cnNvciBtb3ZlcyBsZXNzIHRoYW4gQ2xpY2tUaHJlc2hvbGQgcGl4ZWxzIGJldHdlZW4gdGhlICdtb3VzZWRvd24nXG4gICAgLy8gYW5kIHRoZSAnbW91c2V1cCcuICBJbiB0aGF0IGNhc2UsIHRoaXMuY2xpY2tlZCB3aWxsIGJlIHRydWUuXG5cbiAgICBfdGhpcy5jbGlja2VkID0gZmFsc2U7IC8vXG5cbiAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLklOQUNUSVZFO1xuICAgIF90aGlzLmNoYW5nZUV2ZW50ID0ge1xuICAgICAgdHlwZTogJ2NoYW5nZSdcbiAgICB9O1xuXG4gICAgX3RoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBfdGhpcy5vbk1vdXNlRG93biwgZmFsc2UpO1xuXG4gICAgX3RoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIF90aGlzLm9uTW91c2VXaGVlbCwgZmFsc2UpO1xuXG4gICAgX3RoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXMub25LZXlEb3duLCBmYWxzZSk7XG5cbiAgICBpZiAoX3RoaXMuZG9tRWxlbWVudC50YWJJbmRleCA9PT0gLTEpIHtcbiAgICAgIC8vIE11c3QgYmUgc2V0IGZvciAna2V5ZG93bicgdG8gYmUgcmVjZWl2ZWQuXG4gICAgICBfdGhpcy5kb21FbGVtZW50LnRhYkluZGV4ID0gMDtcbiAgICB9IC8vIFVzZWQgYnkgcmVzZXQoKS5cblxuXG4gICAgX3RoaXMudGFyZ2V0MCA9IF90aGlzLnRhcmdldC5jbG9uZSgpO1xuICAgIF90aGlzLnBvc2l0aW9uMCA9IF90aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXG4gICAgX3RoaXMudXBkYXRlKCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gT3JiaXRVbmxpbWl0ZWRDb250cm9scztcbn0oVEhSRUUuRXZlbnREaXNwYXRjaGVyKTtcblxudmFyIF9kZWZhdWx0ID0gT3JiaXRVbmxpbWl0ZWRDb250cm9scztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSB7XG4gIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoQXJyYXlQcm90b3R5cGUsIFVOU0NPUEFCTEVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjcmVhdGUobnVsbClcbiAgfSk7XG59XG5cbi8vIGFkZCBhIGtleSB0byBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXModGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgICB9XG4gIH1cblxuICAvLyBmaXggQXJyYXkucHJvdG90eXBlLnsgdmFsdWVzLCBAQGl0ZXJhdG9yIH0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5hdGl2ZUl0ZXJhdG9yLmNhbGwodGhpcyk7IH07XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yKTtcbiAgfVxuICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgdmVyc2lvbiA9IG1hdGNoWzBdIDwgNCA/IDEgOiBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aWVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnRvU3RyaW5nO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAodHlwZW9mIHN0b3JlLmluc3BlY3RTb3VyY2UgIT0gJ2Z1bmN0aW9uJykge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAod21oYXMuY2FsbChzdG9yZSwgaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKG9iamVjdEhhcyhpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9IEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0ID0ge307XG4gIC8vIEZGNDQtIGxlZ2FjeSBpdGVyYXRvcnMgY2FzZVxuICByZXR1cm4gSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdLmNhbGwodGVzdCkgIT09IHRlc3Q7XG59KTtcblxuaWYgKE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLUBAaXRlcmF0b3JcbmlmICgoIUlTX1BVUkUgfHwgTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIHJldHVybiAhU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSAqL1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IGRvY3VtZW50LmRvbWFpbiAmJiBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gYWN0aXZlWERvY3VtZW50ID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKCk7XG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIHZhciBzdGF0ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgfVxuICAgIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICAgIGlmICghc3RhdGUuc291cmNlKSB7XG4gICAgICBzdGF0ZS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gICAgfVxuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4xMy4xJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDIxIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkgfHwgIShOQVRJVkVfU1lNQk9MIHx8IHR5cGVvZiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPT0gJ3N0cmluZycpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICAgIH1cbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25cbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xuXG52YXIgTmF0aXZlU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcblxuaWYgKERFU0NSSVBUT1JTICYmIHR5cGVvZiBOYXRpdmVTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAoISgnZGVzY3JpcHRpb24nIGluIE5hdGl2ZVN5bWJvbC5wcm90b3R5cGUpIHx8XG4gIC8vIFNhZmFyaSAxMiBidWdcbiAgTmF0aXZlU3ltYm9sKCkuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZFxuKSkge1xuICB2YXIgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlID0ge307XG4gIC8vIHdyYXAgU3ltYm9sIGNvbnN0cnVjdG9yIGZvciBjb3JyZWN0IHdvcmsgd2l0aCB1bmRlZmluZWQgZGVzY3JpcHRpb25cbiAgdmFyIFN5bWJvbFdyYXBwZXIgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBpbnN0YW5jZW9mIFN5bWJvbFdyYXBwZXJcbiAgICAgID8gbmV3IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbilcbiAgICAgIC8vIGluIEVkZ2UgMTMsIFN0cmluZyhTeW1ib2wodW5kZWZpbmVkKSkgPT09ICdTeW1ib2wodW5kZWZpbmVkKSdcbiAgICAgIDogZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/IE5hdGl2ZVN5bWJvbCgpIDogTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmVbcmVzdWx0XSA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICB2YXIgc3ltYm9sUHJvdG90eXBlID0gU3ltYm9sV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuICBzeW1ib2xQcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW1ib2xXcmFwcGVyO1xuXG4gIHZhciBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIG5hdGl2ZSA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ3Rlc3QnKSkgPT0gJ1N5bWJvbCh0ZXN0KSc7XG4gIHZhciByZWdleHAgPSAvXlN5bWJvbFxcKCguKilcXClbXildKyQvO1xuICBkZWZpbmVQcm9wZXJ0eShzeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBzeW1ib2wgPSBpc09iamVjdCh0aGlzKSA/IHRoaXMudmFsdWVPZigpIDogdGhpcztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xUb1N0cmluZy5jYWxsKHN5bWJvbCk7XG4gICAgICBpZiAoaGFzKEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSwgc3ltYm9sKSkgcmV0dXJuICcnO1xuICAgICAgdmFyIGRlc2MgPSBuYXRpdmUgPyBzdHJpbmcuc2xpY2UoNywgLTEpIDogc3RyaW5nLnJlcGxhY2UocmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgIFN5bWJvbDogU3ltYm9sV3JhcHBlclxuICB9KTtcbn1cbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBBcnJheUl0ZXJhdG9yTWV0aG9kcyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvck1ldGhvZHMudmFsdWVzO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gIT09IEFycmF5VmFsdWVzKSB0cnkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdID0gQXJyYXlWYWx1ZXM7XG4gICAgfVxuICAgIGlmICghQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIENPTExFQ1RJT05fTkFNRSk7XG4gICAgfVxuICAgIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkgZm9yICh2YXIgTUVUSE9EX05BTUUgaW4gQXJyYXlJdGVyYXRvck1ldGhvZHMpIHtcbiAgICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdICE9PSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pIHRyeSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBNRVRIT0RfTkFNRSwgQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdID0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkZWZhdWx0T25FcnJvcihlcnIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGVycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRIUkVFKSB7XG5cbiAgLyoqXG4gICAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb20vXG4gICAqL1xuXG4gIFRIUkVFLk9CSkxvYWRlciA9IGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG5cbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyICE9PSB1bmRlZmluZWQgPyBtYW5hZ2VyIDogVEhSRUUuRGVmYXVsdExvYWRpbmdNYW5hZ2VyO1xuXG4gICAgdGhpcy5tYXRlcmlhbHMgPSBudWxsO1xuXG4gICAgdGhpcy5yZWdleHAgPSB7XG4gICAgICAvLyB2IGZsb2F0IGZsb2F0IGZsb2F0XG4gICAgICB2ZXJ0ZXhfcGF0dGVybjogL152XFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKVxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspLyxcbiAgICAgIC8vIHZuIGZsb2F0IGZsb2F0IGZsb2F0XG4gICAgICBub3JtYWxfcGF0dGVybjogL152blxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyB2dCBmbG9hdCBmbG9hdFxuICAgICAgdXZfcGF0dGVybjogL152dFxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspLyxcbiAgICAgIC8vIGYgdmVydGV4IHZlcnRleCB2ZXJ0ZXhcbiAgICAgIGZhY2VfdmVydGV4OiAvXmZcXHMrKC0/XFxkKylcXHMrKC0/XFxkKylcXHMrKC0/XFxkKykoPzpcXHMrKC0/XFxkKykpPy8sXG4gICAgICAvLyBmIHZlcnRleC91diB2ZXJ0ZXgvdXYgdmVydGV4L3V2XG4gICAgICBmYWNlX3ZlcnRleF91djogL15mXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcLygtP1xcZCspKD86XFxzKygtP1xcZCspXFwvKC0/XFxkKykpPy8sXG4gICAgICAvLyBmIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsXG4gICAgICBmYWNlX3ZlcnRleF91dl9ub3JtYWw6IC9eZlxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKykpPy8sXG4gICAgICAvLyBmIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsXG4gICAgICBmYWNlX3ZlcnRleF9ub3JtYWw6IC9eZlxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspXFxzKygtP1xcZCspXFwvXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspKT8vLFxuICAgICAgLy8gbyBvYmplY3RfbmFtZSB8IGcgZ3JvdXBfbmFtZVxuICAgICAgb2JqZWN0X3BhdHRlcm46IC9eW29nXVxccyooLispPy8sXG4gICAgICAvLyBzIGJvb2xlYW5cbiAgICAgIHNtb290aGluZ19wYXR0ZXJuOiAvXnNcXHMrKFxcZCt8b258b2ZmKS8sXG4gICAgICAvLyBtdGxsaWIgZmlsZV9yZWZlcmVuY2VcbiAgICAgIG1hdGVyaWFsX2xpYnJhcnlfcGF0dGVybjogL15tdGxsaWIgLyxcbiAgICAgIC8vIHVzZW10bCBtYXRlcmlhbF9uYW1lXG4gICAgICBtYXRlcmlhbF91c2VfcGF0dGVybjogL151c2VtdGwgL1xuICAgIH07XG4gIH07XG5cbiAgVEhSRUUuT0JKTG9hZGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yOiBUSFJFRS5PQkpMb2FkZXIsXG5cbiAgICBsb2FkOiBmdW5jdGlvbiBsb2FkKHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yKSB7XG5cbiAgICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgICB0aGlzLm9uRXJyb3IgPSBvbkVycm9yIHx8IGRlZmF1bHRPbkVycm9yO1xuXG4gICAgICB2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkZpbGVMb2FkZXIoc2NvcGUubWFuYWdlcik7XG4gICAgICBsb2FkZXIuc2V0UGF0aCh0aGlzLnBhdGgpO1xuICAgICAgbG9hZGVyLmxvYWQodXJsLCBmdW5jdGlvbiAodGV4dCkge1xuXG4gICAgICAgIG9uTG9hZChzY29wZS5wYXJzZSh0ZXh0KSk7XG4gICAgICB9LCBvblByb2dyZXNzLCBvbkVycm9yKTtcbiAgICB9LFxuXG4gICAgc2V0UGF0aDogZnVuY3Rpb24gc2V0UGF0aCh2YWx1ZSkge1xuXG4gICAgICB0aGlzLnBhdGggPSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2V0TWF0ZXJpYWxzOiBmdW5jdGlvbiBzZXRNYXRlcmlhbHMobWF0ZXJpYWxzKSB7XG5cbiAgICAgIHRoaXMubWF0ZXJpYWxzID0gbWF0ZXJpYWxzO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlUGFyc2VyU3RhdGU6IGZ1bmN0aW9uIF9jcmVhdGVQYXJzZXJTdGF0ZSgpIHtcblxuICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBvYmplY3RzOiBbXSxcbiAgICAgICAgb2JqZWN0OiB7fSxcblxuICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgICB1dnM6IFtdLFxuXG4gICAgICAgIG1hdGVyaWFsTGlicmFyaWVzOiBbXSxcblxuICAgICAgICBzdGFydE9iamVjdDogZnVuY3Rpb24gc3RhcnRPYmplY3QobmFtZSwgZnJvbURlY2xhcmF0aW9uKSB7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBvYmplY3QgKGluaXRpYWwgZnJvbSByZXNldCkgaXMgbm90IGZyb20gYSBnL28gZGVjbGFyYXRpb24gaW4gdGhlIHBhcnNlZFxuICAgICAgICAgIC8vIGZpbGUuIFdlIG5lZWQgdG8gdXNlIGl0IGZvciB0aGUgZmlyc3QgcGFyc2VkIGcvbyB0byBrZWVwIHRoaW5ncyBpbiBzeW5jLlxuICAgICAgICAgIGlmICh0aGlzLm9iamVjdCAmJiB0aGlzLm9iamVjdC5mcm9tRGVjbGFyYXRpb24gPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHRoaXMub2JqZWN0Lm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID0gZnJvbURlY2xhcmF0aW9uICE9PSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcHJldmlvdXNNYXRlcmlhbCA9IHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwgPT09ICdmdW5jdGlvbicgPyB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwoKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmICh0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuX2ZpbmFsaXplID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgICAgICAgIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSh0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9iamVjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwgJycsXG4gICAgICAgICAgICBmcm9tRGVjbGFyYXRpb246IGZyb21EZWNsYXJhdGlvbiAhPT0gZmFsc2UsXG5cbiAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgIHZlcnRpY2VzOiBbXSxcbiAgICAgICAgICAgICAgbm9ybWFsczogW10sXG4gICAgICAgICAgICAgIHV2czogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXRlcmlhbHM6IFtdLFxuICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuXG4gICAgICAgICAgICBzdGFydE1hdGVyaWFsOiBmdW5jdGlvbiBzdGFydE1hdGVyaWFsKG5hbWUsIGxpYnJhcmllcykge1xuXG4gICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IHRoaXMuX2ZpbmFsaXplKGZhbHNlKTtcblxuICAgICAgICAgICAgICAvLyBOZXcgdXNlbXRsIGRlY2xhcmF0aW9uIG92ZXJ3cml0ZXMgYW4gaW5oZXJpdGVkIG1hdGVyaWFsLCBleGNlcHQgaWYgZmFjZXMgd2VyZSBkZWNsYXJlZFxuICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgbWF0ZXJpYWwsIHRoZW4gaXQgbXVzdCBiZSBwcmVzZXJ2ZWQgZm9yIHByb3BlciBNdWx0aU1hdGVyaWFsIGNvbnRpbnVhdGlvbi5cbiAgICAgICAgICAgICAgaWYgKHByZXZpb3VzICYmIChwcmV2aW91cy5pbmhlcml0ZWQgfHwgcHJldmlvdXMuZ3JvdXBDb3VudCA8PSAwKSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMuc3BsaWNlKHByZXZpb3VzLmluZGV4LCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBtYXRlcmlhbCA9IHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5tYXRlcmlhbHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwgJycsXG4gICAgICAgICAgICAgICAgbXRsbGliOiBBcnJheS5pc0FycmF5KGxpYnJhcmllcykgJiYgbGlicmFyaWVzLmxlbmd0aCA+IDAgPyBsaWJyYXJpZXNbbGlicmFyaWVzLmxlbmd0aCAtIDFdIDogJycsXG4gICAgICAgICAgICAgICAgc21vb3RoOiBwcmV2aW91cyAhPT0gdW5kZWZpbmVkID8gcHJldmlvdXMuc21vb3RoIDogdGhpcy5zbW9vdGgsXG4gICAgICAgICAgICAgICAgZ3JvdXBTdGFydDogcHJldmlvdXMgIT09IHVuZGVmaW5lZCA/IHByZXZpb3VzLmdyb3VwRW5kIDogMCxcbiAgICAgICAgICAgICAgICBncm91cEVuZDogLTEsXG4gICAgICAgICAgICAgICAgZ3JvdXBDb3VudDogLTEsXG4gICAgICAgICAgICAgICAgaW5oZXJpdGVkOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShpbmRleCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbXRsbGliOiB0aGlzLm10bGxpYixcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoOiB0aGlzLnNtb290aCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBTdGFydDogMCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBFbmQ6IC0xLFxuICAgICAgICAgICAgICAgICAgICBncm91cENvdW50OiAtMSxcbiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGNsb25lZC5jbG9uZSA9IHRoaXMuY2xvbmUuYmluZChjbG9uZWQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGVyaWFsO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY3VycmVudE1hdGVyaWFsOiBmdW5jdGlvbiBjdXJyZW50TWF0ZXJpYWwoKSB7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbHNbdGhpcy5tYXRlcmlhbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgX2ZpbmFsaXplOiBmdW5jdGlvbiBfZmluYWxpemUoZW5kKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGxhc3RNdWx0aU1hdGVyaWFsID0gdGhpcy5jdXJyZW50TWF0ZXJpYWwoKTtcbiAgICAgICAgICAgICAgaWYgKGxhc3RNdWx0aU1hdGVyaWFsICYmIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID09PSAtMSkge1xuXG4gICAgICAgICAgICAgICAgbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBFbmQgPSB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCAvIDM7XG4gICAgICAgICAgICAgICAgbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBDb3VudCA9IGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kIC0gbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBTdGFydDtcbiAgICAgICAgICAgICAgICBsYXN0TXVsdGlNYXRlcmlhbC5pbmhlcml0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIElnbm9yZSBvYmplY3RzIHRhaWwgbWF0ZXJpYWxzIGlmIG5vIGZhY2UgZGVjbGFyYXRpb25zIGZvbGxvd2VkIHRoZW0gYmVmb3JlIGEgbmV3IG8vZyBzdGFydGVkLlxuICAgICAgICAgICAgICBpZiAoZW5kICYmIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIG1pID0gdGhpcy5tYXRlcmlhbHMubGVuZ3RoIC0gMTsgbWkgPj0gMDsgbWktLSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWxzW21pXS5ncm91cENvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMuc3BsaWNlKG1pLCAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBHdWFyYW50ZWUgYXQgbGVhc3Qgb25lIGVtcHR5IG1hdGVyaWFsLCB0aGlzIG1ha2VzIHRoZSBjcmVhdGlvbiBsYXRlciBtb3JlIHN0cmFpZ2h0IGZvcndhcmQuXG4gICAgICAgICAgICAgIGlmIChlbmQgJiYgdGhpcy5tYXRlcmlhbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgc21vb3RoOiB0aGlzLnNtb290aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGxhc3RNdWx0aU1hdGVyaWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBJbmhlcml0IHByZXZpb3VzIG9iamVjdHMgbWF0ZXJpYWwuXG4gICAgICAgICAgLy8gU3BlYyB0ZWxscyB1cyB0aGF0IGEgZGVjbGFyZWQgbWF0ZXJpYWwgbXVzdCBiZSBzZXQgdG8gYWxsIG9iamVjdHMgdW50aWwgYSBuZXcgbWF0ZXJpYWwgaXMgZGVjbGFyZWQuXG4gICAgICAgICAgLy8gSWYgYSB1c2VtdGwgZGVjbGFyYXRpb24gaXMgZW5jb3VudGVyZWQgd2hpbGUgdGhpcyBuZXcgb2JqZWN0IGlzIGJlaW5nIHBhcnNlZCwgaXQgd2lsbFxuICAgICAgICAgIC8vIG92ZXJ3cml0ZSB0aGUgaW5oZXJpdGVkIG1hdGVyaWFsLiBFeGNlcHRpb24gYmVpbmcgdGhhdCB0aGVyZSB3YXMgYWxyZWFkeSBmYWNlIGRlY2xhcmF0aW9uc1xuICAgICAgICAgIC8vIHRvIHRoZSBpbmhlcml0ZWQgbWF0ZXJpYWwsIHRoZW4gaXQgd2lsbCBiZSBwcmVzZXJ2ZWQgZm9yIHByb3BlciBNdWx0aU1hdGVyaWFsIGNvbnRpbnVhdGlvbi5cblxuICAgICAgICAgIGlmIChwcmV2aW91c01hdGVyaWFsICYmIHByZXZpb3VzTWF0ZXJpYWwubmFtZSAmJiB0eXBlb2YgcHJldmlvdXNNYXRlcmlhbC5jbG9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIHZhciBkZWNsYXJlZCA9IHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUoMCk7XG4gICAgICAgICAgICBkZWNsYXJlZC5pbmhlcml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vYmplY3QubWF0ZXJpYWxzLnB1c2goZGVjbGFyZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKHRoaXMub2JqZWN0KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gZmluYWxpemUoKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdHlwZW9mIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5fZmluYWxpemUodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlVmVydGV4SW5kZXg6IGZ1bmN0aW9uIHBhcnNlVmVydGV4SW5kZXgodmFsdWUsIGxlbikge1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgICAgICByZXR1cm4gKGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDMpICogMztcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZU5vcm1hbEluZGV4OiBmdW5jdGlvbiBwYXJzZU5vcm1hbEluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAzKSAqIDM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VVVkluZGV4OiBmdW5jdGlvbiBwYXJzZVVWSW5kZXgodmFsdWUsIGxlbikge1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgICAgICByZXR1cm4gKGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDIpICogMjtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRWZXJ0ZXg6IGZ1bmN0aW9uIGFkZFZlcnRleChhLCBiLCBjKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRWZXJ0ZXhMaW5lOiBmdW5jdGlvbiBhZGRWZXJ0ZXhMaW5lKGEpIHtcblxuICAgICAgICAgIHZhciBzcmMgPSB0aGlzLnZlcnRpY2VzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS52ZXJ0aWNlcztcblxuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMF0pO1xuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMV0pO1xuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMl0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZE5vcm1hbDogZnVuY3Rpb24gYWRkTm9ybWFsKGEsIGIsIGMpIHtcblxuICAgICAgICAgIHZhciBzcmMgPSB0aGlzLm5vcm1hbHM7XG4gICAgICAgICAgdmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5Lm5vcm1hbHM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRVVjogZnVuY3Rpb24gYWRkVVYoYSwgYiwgYykge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudXZzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRVVkxpbmU6IGZ1bmN0aW9uIGFkZFVWTGluZShhKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy51dnM7XG4gICAgICAgICAgdmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnV2cztcblxuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMF0pO1xuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEZhY2U6IGZ1bmN0aW9uIGFkZEZhY2UoYSwgYiwgYywgZCwgdWEsIHViLCB1YywgdWQsIG5hLCBuYiwgbmMsIG5kKSB7XG5cbiAgICAgICAgICB2YXIgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgICAgdmFyIGlhID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KGEsIHZMZW4pO1xuICAgICAgICAgIHZhciBpYiA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleChiLCB2TGVuKTtcbiAgICAgICAgICB2YXIgaWMgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoYywgdkxlbik7XG4gICAgICAgICAgdmFyIGlkO1xuXG4gICAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleChpYSwgaWIsIGljKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleChkLCB2TGVuKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWEsIGliLCBpZCk7XG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleChpYiwgaWMsIGlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodWEgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICB2YXIgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlhID0gdGhpcy5wYXJzZVVWSW5kZXgodWEsIHV2TGVuKTtcbiAgICAgICAgICAgIGliID0gdGhpcy5wYXJzZVVWSW5kZXgodWIsIHV2TGVuKTtcbiAgICAgICAgICAgIGljID0gdGhpcy5wYXJzZVVWSW5kZXgodWMsIHV2TGVuKTtcblxuICAgICAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgIHRoaXMuYWRkVVYoaWEsIGliLCBpYyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIGlkID0gdGhpcy5wYXJzZVVWSW5kZXgodWQsIHV2TGVuKTtcblxuICAgICAgICAgICAgICB0aGlzLmFkZFVWKGlhLCBpYiwgaWQpO1xuICAgICAgICAgICAgICB0aGlzLmFkZFVWKGliLCBpYywgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuYSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIC8vIE5vcm1hbHMgYXJlIG1hbnkgdGltZXMgdGhlIHNhbWUuIElmIHNvLCBza2lwIGZ1bmN0aW9uIGNhbGwgYW5kIHBhcnNlSW50LlxuICAgICAgICAgICAgdmFyIG5MZW4gPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xuICAgICAgICAgICAgaWEgPSB0aGlzLnBhcnNlTm9ybWFsSW5kZXgobmEsIG5MZW4pO1xuXG4gICAgICAgICAgICBpYiA9IG5hID09PSBuYiA/IGlhIDogdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5iLCBuTGVuKTtcbiAgICAgICAgICAgIGljID0gbmEgPT09IG5jID8gaWEgOiB0aGlzLnBhcnNlTm9ybWFsSW5kZXgobmMsIG5MZW4pO1xuXG4gICAgICAgICAgICBpZiAoZCA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGROb3JtYWwoaWEsIGliLCBpYyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIGlkID0gdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5kLCBuTGVuKTtcblxuICAgICAgICAgICAgICB0aGlzLmFkZE5vcm1hbChpYSwgaWIsIGlkKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGROb3JtYWwoaWIsIGljLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZExpbmVHZW9tZXRyeTogZnVuY3Rpb24gYWRkTGluZUdlb21ldHJ5KHZlcnRpY2VzLCB1dnMpIHtcblxuICAgICAgICAgIHRoaXMub2JqZWN0Lmdlb21ldHJ5LnR5cGUgPSAnTGluZSc7XG5cbiAgICAgICAgICB2YXIgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICAgIHZhciB1dkxlbiA9IHRoaXMudXZzLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAodmFyIHZpID0gMCwgbCA9IHZlcnRpY2VzLmxlbmd0aDsgdmkgPCBsOyB2aSsrKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4TGluZSh0aGlzLnBhcnNlVmVydGV4SW5kZXgodmVydGljZXNbdmldLCB2TGVuKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgdXZpID0gMCwgbCA9IHV2cy5sZW5ndGg7IHV2aSA8IGw7IHV2aSsrKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVVZMaW5lKHRoaXMucGFyc2VVVkluZGV4KHV2c1t1dmldLCB1dkxlbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9O1xuXG4gICAgICBzdGF0ZS5zdGFydE9iamVjdCgnJywgZmFsc2UpO1xuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh0ZXh0LCBkZWJ1Zykge1xuICAgICAgaWYgKHR5cGVvZiBkZWJ1ZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGVidWcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS50aW1lKCdPQkpMb2FkZXInKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5fY3JlYXRlUGFyc2VyU3RhdGUoKTtcblxuICAgICAgaWYgKHRleHQuaW5kZXhPZignXFxyXFxuJykgIT09IC0xKSB7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmYXN0ZXIgdGhhbiBTdHJpbmcuc3BsaXQgd2l0aCByZWdleCB0aGF0IHNwbGl0cyBvbiBib3RoXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcclxcbi9nLCAnXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXh0LmluZGV4T2YoJ1xcXFxcXG4nKSAhPT0gLTEpIHtcblxuICAgICAgICAvLyBqb2luIGxpbmVzIHNlcGFyYXRlZCBieSBhIGxpbmUgY29udGludWF0aW9uIGNoYXJhY3RlciAoXFwpXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFxcXG4vZywgJycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBsaW5lID0gJycsXG4gICAgICAgICAgbGluZUZpcnN0Q2hhciA9ICcnLFxuICAgICAgICAgIGxpbmVTZWNvbmRDaGFyID0gJyc7XG4gICAgICB2YXIgbGluZUxlbmd0aCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgIC8vIEZhc3RlciB0byBqdXN0IHRyaW0gbGVmdCBzaWRlIG9mIHRoZSBsaW5lLiBVc2UgaWYgYXZhaWxhYmxlLlxuICAgICAgdmFyIHRyaW1MZWZ0ID0gdHlwZW9mICcnLnRyaW1MZWZ0ID09PSAnZnVuY3Rpb24nO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXG4gICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcblxuICAgICAgICBsaW5lID0gdHJpbUxlZnQgPyBsaW5lLnRyaW1MZWZ0KCkgOiBsaW5lLnRyaW0oKTtcblxuICAgICAgICBsaW5lTGVuZ3RoID0gbGluZS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxpbmVMZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgIGxpbmVGaXJzdENoYXIgPSBsaW5lLmNoYXJBdCgwKTtcblxuICAgICAgICAvLyBAdG9kbyBpbnZva2UgcGFzc2VkIGluIGhhbmRsZXIgaWYgYW55XG4gICAgICAgIGlmIChsaW5lRmlyc3RDaGFyID09PSAnIycpIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmIChsaW5lRmlyc3RDaGFyID09PSAndicpIHtcblxuICAgICAgICAgIGxpbmVTZWNvbmRDaGFyID0gbGluZS5jaGFyQXQoMSk7XG5cbiAgICAgICAgICBpZiAobGluZVNlY29uZENoYXIgPT09ICcgJyAmJiAocmVzdWx0ID0gdGhpcy5yZWdleHAudmVydGV4X3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgICAgICAgIDEgICAgICAyICAgICAgM1xuICAgICAgICAgICAgLy8gW1widiAxLjAgMi4wIDMuMFwiLCBcIjEuMFwiLCBcIjIuMFwiLCBcIjMuMFwiXVxuXG4gICAgICAgICAgICBzdGF0ZS52ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQocmVzdWx0WzFdKSwgcGFyc2VGbG9hdChyZXN1bHRbMl0pLCBwYXJzZUZsb2F0KHJlc3VsdFszXSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGluZVNlY29uZENoYXIgPT09ICduJyAmJiAocmVzdWx0ID0gdGhpcy5yZWdleHAubm9ybWFsX3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgICAgICAgICAxICAgICAgMiAgICAgIDNcbiAgICAgICAgICAgIC8vIFtcInZuIDEuMCAyLjAgMy4wXCIsIFwiMS4wXCIsIFwiMi4wXCIsIFwiMy4wXCJdXG5cbiAgICAgICAgICAgIHN0YXRlLm5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSwgcGFyc2VGbG9hdChyZXN1bHRbM10pKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAndCcgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLnV2X3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgICAgIDEgICAgICAyXG4gICAgICAgICAgICAvLyBbXCJ2dCAwLjEgMC4yXCIsIFwiMC4xXCIsIFwiMC4yXCJdXG5cbiAgICAgICAgICAgIHN0YXRlLnV2cy5wdXNoKHBhcnNlRmxvYXQocmVzdWx0WzFdKSwgcGFyc2VGbG9hdChyZXN1bHRbMl0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIHZlcnRleC9ub3JtYWwvdXYgbGluZTogJ1wiICsgbGluZSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZUZpcnN0Q2hhciA9PT0gXCJmXCIpIHtcblxuICAgICAgICAgIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuZmFjZV92ZXJ0ZXhfdXZfbm9ybWFsLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIGYgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsIHZlcnRleC91di9ub3JtYWxcbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAgICAgICAxICAgIDIgICAgMyAgICA0ICAgIDUgICAgNiAgICA3ICAgIDggICAgOSAgIDEwICAgICAgICAgMTEgICAgICAgICAxMlxuICAgICAgICAgICAgLy8gW1wiZiAxLzEvMSAyLzIvMiAzLzMvM1wiLCBcIjFcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiMlwiLCBcIjNcIiwgXCIzXCIsIFwiM1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuXG4gICAgICAgICAgICBzdGF0ZS5hZGRGYWNlKHJlc3VsdFsxXSwgcmVzdWx0WzRdLCByZXN1bHRbN10sIHJlc3VsdFsxMF0sIHJlc3VsdFsyXSwgcmVzdWx0WzVdLCByZXN1bHRbOF0sIHJlc3VsdFsxMV0sIHJlc3VsdFszXSwgcmVzdWx0WzZdLCByZXN1bHRbOV0sIHJlc3VsdFsxMl0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X3V2LmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIGYgdmVydGV4L3V2IHZlcnRleC91diB2ZXJ0ZXgvdXZcbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAxICAgIDIgICAgMyAgICA0ICAgIDUgICAgNiAgIDcgICAgICAgICAgOFxuICAgICAgICAgICAgLy8gW1wiZiAxLzEgMi8yIDMvM1wiLCBcIjFcIiwgXCIxXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFszXSwgcmVzdWx0WzVdLCByZXN1bHRbN10sIHJlc3VsdFsyXSwgcmVzdWx0WzRdLCByZXN1bHRbNl0sIHJlc3VsdFs4XSk7XG4gICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuZmFjZV92ZXJ0ZXhfbm9ybWFsLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIGYgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWxcbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAgICAxICAgIDIgICAgMyAgICA0ICAgIDUgICAgNiAgIDcgICAgICAgICAgOFxuICAgICAgICAgICAgLy8gW1wiZiAxLy8xIDIvLzIgMy8vM1wiLCBcIjFcIiwgXCIxXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFszXSwgcmVzdWx0WzVdLCByZXN1bHRbN10sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcmVzdWx0WzJdLCByZXN1bHRbNF0sIHJlc3VsdFs2XSwgcmVzdWx0WzhdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5mYWNlX3ZlcnRleC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleCB2ZXJ0ZXggdmVydGV4XG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgMSAgICAyICAgIDMgICA0XG4gICAgICAgICAgICAvLyBbXCJmIDEgMiAzXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFsyXSwgcmVzdWx0WzNdLCByZXN1bHRbNF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMub25FcnJvcihcIlVuZXhwZWN0ZWQgZmFjZSBsaW5lOiAnXCIgKyBsaW5lICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsaW5lRmlyc3RDaGFyID09PSBcImxcIikge1xuXG4gICAgICAgICAgdmFyIGxpbmVQYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEpLnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgdmFyIGxpbmVWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgICAgICBsaW5lVVZzID0gW107XG5cbiAgICAgICAgICBpZiAobGluZS5pbmRleE9mKFwiL1wiKSA9PT0gLTEpIHtcblxuICAgICAgICAgICAgbGluZVZlcnRpY2VzID0gbGluZVBhcnRzO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGxpID0gMCwgbGxlbiA9IGxpbmVQYXJ0cy5sZW5ndGg7IGxpIDwgbGxlbjsgbGkrKykge1xuXG4gICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGxpbmVQYXJ0c1tsaV0uc3BsaXQoXCIvXCIpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gXCJcIikgbGluZVZlcnRpY2VzLnB1c2gocGFydHNbMF0pO1xuICAgICAgICAgICAgICBpZiAocGFydHNbMV0gIT09IFwiXCIpIGxpbmVVVnMucHVzaChwYXJ0c1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlLmFkZExpbmVHZW9tZXRyeShsaW5lVmVydGljZXMsIGxpbmVVVnMpO1xuICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5vYmplY3RfcGF0dGVybi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgLy8gbyBvYmplY3RfbmFtZVxuICAgICAgICAgIC8vIG9yXG4gICAgICAgICAgLy8gZyBncm91cF9uYW1lXG5cbiAgICAgICAgICAvLyBXT1JLQVJPVU5EOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yODY5XG4gICAgICAgICAgLy8gdmFyIG5hbWUgPSByZXN1bHRbIDAgXS5zdWJzdHIoIDEgKS50cmltKCk7XG4gICAgICAgICAgdmFyIG5hbWUgPSAoXCIgXCIgKyByZXN1bHRbMF0uc3Vic3RyKDEpLnRyaW0oKSkuc3Vic3RyKDEpO1xuXG4gICAgICAgICAgc3RhdGUuc3RhcnRPYmplY3QobmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZWdleHAubWF0ZXJpYWxfdXNlX3BhdHRlcm4udGVzdChsaW5lKSkge1xuXG4gICAgICAgICAgLy8gbWF0ZXJpYWxcblxuICAgICAgICAgIHN0YXRlLm9iamVjdC5zdGFydE1hdGVyaWFsKGxpbmUuc3Vic3RyaW5nKDcpLnRyaW0oKSwgc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVnZXhwLm1hdGVyaWFsX2xpYnJhcnlfcGF0dGVybi50ZXN0KGxpbmUpKSB7XG5cbiAgICAgICAgICAvLyBtdGwgZmlsZVxuXG4gICAgICAgICAgc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMucHVzaChsaW5lLnN1YnN0cmluZyg3KS50cmltKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5zbW9vdGhpbmdfcGF0dGVybi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgLy8gc21vb3RoIHNoYWRpbmdcblxuICAgICAgICAgIC8vIEB0b2RvIEhhbmRsZSBmaWxlcyB0aGF0IGhhdmUgdmFyeWluZyBzbW9vdGggdmFsdWVzIGZvciBhIHNldCBvZiBmYWNlcyBpbnNpZGUgb25lIGdlb21ldHJ5LFxuICAgICAgICAgIC8vIGJ1dCBkb2VzIG5vdCBkZWZpbmUgYSB1c2VtdGwgZm9yIGVhY2ggZmFjZSBzZXQuXG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgZGV0ZWN0ZWQgYW5kIGEgZHVtbXkgbWF0ZXJpYWwgY3JlYXRlZCAobGF0ZXIgTXVsdGlNYXRlcmlhbCBhbmQgZ2VvbWV0cnkgZ3JvdXBzKS5cbiAgICAgICAgICAvLyBUaGlzIHJlcXVpcmVzIHNvbWUgY2FyZSB0byBub3QgY3JlYXRlIGV4dHJhIG1hdGVyaWFsIG9uIGVhY2ggc21vb3RoIHZhbHVlIGZvciBcIm5vcm1hbFwiIG9iaiBmaWxlcy5cbiAgICAgICAgICAvLyB3aGVyZSBleHBsaWNpdCB1c2VtdGwgZGVmaW5lcyBnZW9tZXRyeSBncm91cHMuXG4gICAgICAgICAgLy8gRXhhbXBsZSBhc3NldDogZXhhbXBsZXMvbW9kZWxzL29iai9jZXJiZXJ1cy9DZXJiZXJ1cy5vYmpcblxuICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdFsxXS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBzdGF0ZS5vYmplY3Quc21vb3RoID0gdmFsdWUgPT09ICcxJyB8fCB2YWx1ZSA9PT0gJ29uJztcblxuICAgICAgICAgIHZhciBtYXRlcmlhbCA9IHN0YXRlLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwoKTtcbiAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcblxuICAgICAgICAgICAgbWF0ZXJpYWwuc21vb3RoID0gc3RhdGUub2JqZWN0LnNtb290aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBIYW5kbGUgbnVsbCB0ZXJtaW5hdGVkIGZpbGVzIHdpdGhvdXQgZXhjZXB0aW9uXG4gICAgICAgICAgaWYgKGxpbmUgPT09ICdcXDAnKSBjb250aW51ZTtcblxuICAgICAgICAgIHRoaXMub25FcnJvcihcIlVuZXhwZWN0ZWQgbGluZTogJ1wiICsgbGluZSArIFwiJ1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGF0ZS5maW5hbGl6ZSgpO1xuXG4gICAgICB2YXIgY29udGFpbmVyID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICBjb250YWluZXIubWF0ZXJpYWxMaWJyYXJpZXMgPSBbXS5jb25jYXQoc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0YXRlLm9iamVjdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIG9iamVjdCA9IHN0YXRlLm9iamVjdHNbaV07XG4gICAgICAgIHZhciBnZW9tZXRyeSA9IG9iamVjdC5nZW9tZXRyeTtcbiAgICAgICAgdmFyIG1hdGVyaWFscyA9IG9iamVjdC5tYXRlcmlhbHM7XG4gICAgICAgIHZhciBpc0xpbmUgPSBnZW9tZXRyeS50eXBlID09PSAnTGluZSc7XG5cbiAgICAgICAgLy8gU2tpcCBvL2cgbGluZSBkZWNsYXJhdGlvbnMgdGhhdCBkaWQgbm90IGZvbGxvdyB3aXRoIGFueSBmYWNlc1xuICAgICAgICBpZiAoZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgYnVmZmVyZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcblxuICAgICAgICBidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGdlb21ldHJ5LnZlcnRpY2VzKSwgMykpO1xuXG4gICAgICAgIGlmIChnZW9tZXRyeS5ub3JtYWxzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgIGJ1ZmZlcmdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGdlb21ldHJ5Lm5vcm1hbHMpLCAzKSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBidWZmZXJnZW9tZXRyeS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlb21ldHJ5LnV2cy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICBidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGdlb21ldHJ5LnV2cyksIDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBtYXRlcmlhbHNcblxuICAgICAgICB2YXIgY3JlYXRlZE1hdGVyaWFscyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIG1pID0gMCwgbWlMZW4gPSBtYXRlcmlhbHMubGVuZ3RoOyBtaSA8IG1pTGVuOyBtaSsrKSB7XG5cbiAgICAgICAgICB2YXIgc291cmNlTWF0ZXJpYWwgPSBtYXRlcmlhbHNbbWldO1xuICAgICAgICAgIHZhciBtYXRlcmlhbCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFscyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzLmNyZWF0ZShzb3VyY2VNYXRlcmlhbC5uYW1lKTtcblxuICAgICAgICAgICAgLy8gbXRsIGV0Yy4gbG9hZGVycyBwcm9iYWJseSBjYW4ndCBjcmVhdGUgbGluZSBtYXRlcmlhbHMgY29ycmVjdGx5LCBjb3B5IHByb3BlcnRpZXMgdG8gYSBsaW5lIG1hdGVyaWFsLlxuICAgICAgICAgICAgaWYgKGlzTGluZSAmJiBtYXRlcmlhbCAmJiAhKG1hdGVyaWFsIGluc3RhbmNlb2YgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwpKSB7XG5cbiAgICAgICAgICAgICAgdmFyIG1hdGVyaWFsTGluZSA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCgpO1xuICAgICAgICAgICAgICBtYXRlcmlhbExpbmUuY29weShtYXRlcmlhbCk7XG4gICAgICAgICAgICAgIG1hdGVyaWFsID0gbWF0ZXJpYWxMaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcblxuICAgICAgICAgICAgbWF0ZXJpYWwgPSAhaXNMaW5lID8gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCkgOiBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLm5hbWUgPSBzb3VyY2VNYXRlcmlhbC5uYW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdGVyaWFsLnNoYWRpbmcgPSBzb3VyY2VNYXRlcmlhbC5zbW9vdGggPyBUSFJFRS5TbW9vdGhTaGFkaW5nIDogVEhSRUUuRmxhdFNoYWRpbmc7XG5cbiAgICAgICAgICBjcmVhdGVkTWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG1lc2hcblxuICAgICAgICB2YXIgbWVzaDtcblxuICAgICAgICBpZiAoY3JlYXRlZE1hdGVyaWFscy5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICBmb3IgKHZhciBtaSA9IDAsIG1pTGVuID0gbWF0ZXJpYWxzLmxlbmd0aDsgbWkgPCBtaUxlbjsgbWkrKykge1xuXG4gICAgICAgICAgICB2YXIgc291cmNlTWF0ZXJpYWwgPSBtYXRlcmlhbHNbbWldO1xuICAgICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkR3JvdXAoc291cmNlTWF0ZXJpYWwuZ3JvdXBTdGFydCwgc291cmNlTWF0ZXJpYWwuZ3JvdXBDb3VudCwgbWkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtdWx0aU1hdGVyaWFsID0gbmV3IFRIUkVFLk11bHRpTWF0ZXJpYWwoY3JlYXRlZE1hdGVyaWFscyk7XG4gICAgICAgICAgbWVzaCA9ICFpc0xpbmUgPyBuZXcgVEhSRUUuTWVzaChidWZmZXJnZW9tZXRyeSwgbXVsdGlNYXRlcmlhbCkgOiBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGJ1ZmZlcmdlb21ldHJ5LCBtdWx0aU1hdGVyaWFsKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIG1lc2ggPSAhaXNMaW5lID8gbmV3IFRIUkVFLk1lc2goYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHNbMF0pIDogbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhidWZmZXJnZW9tZXRyeSwgY3JlYXRlZE1hdGVyaWFsc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNoLm5hbWUgPSBvYmplY3QubmFtZTtcblxuICAgICAgICBjb250YWluZXIuYWRkKG1lc2gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS50aW1lRW5kKCdPQkpMb2FkZXInKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgfTtcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgTk9ERV9QQVJUSUNMRV9JTUFHRSwgc3djUGFyc2VyIH0gZnJvbSBcIi4vdmlld2VyL3V0aWxcIjtcblxuZXhwb3J0IHsgc3djUGFyc2VyIH07XG5cbmNvbnN0IFRIUkVFID0gcmVxdWlyZShcInRocmVlXCIpO1xucmVxdWlyZShcInRocmVlLW9iai1sb2FkZXJcIikoVEhSRUUpO1xuXG5jb25zdCBPcmJpdFVubGltaXRlZENvbnRyb2xzID0gcmVxdWlyZShcIkBqYW5lbGlhL3RocmVlLW9yYml0LXVubGltaXRlZC1jb250cm9sc1wiKS5kZWZhdWx0O1xuXG5jb25zdCBERUZBVUxUX1BPSU5UX1RIUkVTSE9MRCA9IDUwO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSBbXG4gIFwidW5pZm9ybSBmbG9hdCBwYXJ0aWNsZVNjYWxlO1wiLFxuICBcImF0dHJpYnV0ZSBmbG9hdCByYWRpdXM7XCIsXG4gIFwiYXR0cmlidXRlIHZlYzMgdHlwZUNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7XCIsXG4gIFwidmFyeWluZyB2ZWM0IG12UG9zaXRpb247XCIsXG4gIFwidmFyeWluZyBmbG9hdCB2UmFkaXVzO1wiLFxuICBcInZvaWQgbWFpbigpIFwiLFxuICBcIntcIixcbiAgXCJ2Q29sb3IgPSB2ZWMzKHR5cGVDb2xvcik7IC8vIHNldCBSR0IgY29sb3IgYXNzb2NpYXRlZCB0byB2ZXJ0ZXg7IHVzZSBsYXRlciBpbiBmcmFnbWVudCBzaGFkZXIuXCIsXG4gIFwibXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XCIsXG5cbiAgXCIvLyBnbF9Qb2ludFNpemUgPSBzaXplO1wiLFxuICBcImdsX1BvaW50U2l6ZSA9IHJhZGl1cyAqICgocGFydGljbGVTY2FsZSoyLjApIC8gbGVuZ3RoKG12UG9zaXRpb24ueikpO1wiLFxuICBcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XCIsXG4gIFwidlJhZGl1cyA9IHJhZGl1cztcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBbXG4gIFwidW5pZm9ybSBzYW1wbGVyMkQgc3BoZXJlVGV4dHVyZTsgLy8gSW1wb3N0ZXIgaW1hZ2Ugb2Ygc3BoZXJlXCIsXG4gIFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XCIsXG4gIFwidmFyeWluZyB2ZWMzIHZDb2xvcjsgLy8gY29sb3JzIGFzc29jaWF0ZWQgdG8gdmVydGljZXM7IGFzc2lnbmVkIGJ5IHZlcnRleCBzaGFkZXJcIixcbiAgXCJ2YXJ5aW5nIHZlYzQgbXZQb3NpdGlvbjtcIixcbiAgXCJ2YXJ5aW5nIGZsb2F0IHZSYWRpdXM7XCIsXG4gIFwidm9pZCBtYWluKCkgXCIsXG4gIFwie1wiLFxuICBcIi8vIHdoYXQgcGFydCBvZiB0aGUgc3BoZXJlIGltYWdlP1wiLFxuICBcInZlYzIgdXYgPSB2ZWMyKGdsX1BvaW50Q29vcmQueCwgMS4wIC0gZ2xfUG9pbnRDb29yZC55KTtcIixcbiAgXCJ2ZWM0IHNwaGVyZUNvbG9ycyA9IHRleHR1cmUyRChzcGhlcmVUZXh0dXJlLCB1dik7XCIsXG4gIFwiLy8gYXZvaWQgZnVydGhlciBjb21wdXRhdGlvbiBhdCBpbnZpc2libGUgY29ybmVyc1wiLFxuICBcImlmIChzcGhlcmVDb2xvcnMuYSA8IDAuMykgZGlzY2FyZDtcIixcblxuICBcIi8vIGNhbGN1bGF0ZXMgYSBjb2xvciBmb3IgdGhlIHBhcnRpY2xlXCIsXG4gIFwiLy8gZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3IsIDEuMCk7XCIsXG4gIFwiLy8gc2V0cyBhIHdoaXRlIHBhcnRpY2xlIHRleHR1cmUgdG8gZGVzaXJlZCBjb2xvclwiLFxuICBcIi8vIGdsX0ZyYWdDb2xvciA9IHNxcnQoZ2xfRnJhZ0NvbG9yICogdGV4dHVyZTJEKHNwaGVyZVRleHR1cmUsIHV2KSkgKyB2ZWM0KDAuMSwgMC4xLCAwLjEsIDAuMCk7XCIsXG4gIFwiLy8gcmVkIGNoYW5uZWwgY29udGFpbnMgY29sb3JpemFibGUgc3BoZXJlIGltYWdlXCIsXG4gIFwidmVjMyBiYXNlQ29sb3IgPSB2Q29sb3IgKiBzcGhlcmVDb2xvcnMucjtcIixcbiAgXCIvLyBncmVlbiBjaGFubmVsIGNvbnRhaW5zICh3aGl0ZT8pIHNwZWN1bGFyIGhpZ2hsaWdodFwiLFxuICBcInZlYzMgaGlnaGxpZ2h0Q29sb3IgPSBiYXNlQ29sb3IgKyBzcGhlcmVDb2xvcnMuZ2dnO1wiLFxuICBcImdsX0ZyYWdDb2xvciA9IHZlYzQoaGlnaGxpZ2h0Q29sb3IsIHNwaGVyZUNvbG9ycy5hKTtcIixcbiAgXCIvLyBUT0RPIGJsdWUgY2hhbm5lbCBjb250YWlucyBkZXB0aCBvZmZzZXQsIGJ1dCB3ZSBjYW5ub3QgdXNlIGdsX0ZyYWdEZXB0aCBpbiB3ZWJnbD9cIixcbiAgXCIjaWZkZWYgR0xfRVhUX2ZyYWdfZGVwdGhcIixcbiAgXCJmbG9hdCBmYXIgPSBnbF9EZXB0aFJhbmdlLmZhcjsgZmxvYXQgbmVhciA9IGdsX0RlcHRoUmFuZ2UubmVhcjtcIixcbiAgXCJmbG9hdCBkeiA9IHNwaGVyZUNvbG9ycy5iICogdlJhZGl1cztcIixcbiAgXCJ2ZWM0IGNsaXBQb3MgPSBwcm9qZWN0aW9uTWF0cml4ICogKG12UG9zaXRpb24gKyB2ZWM0KDAsIDAsIGR6LCAwKSk7XCIsXG4gIFwiZmxvYXQgbmRjX2RlcHRoID0gY2xpcFBvcy56L2NsaXBQb3MudztcIixcbiAgXCJmbG9hdCBkZXB0aCA9ICgoKGZhci1uZWFyKSAqIG5kY19kZXB0aCkgKyBuZWFyICsgZmFyKSAvIDIuMDtcIixcbiAgXCJnbF9GcmFnRGVwdGhFWFQgPSBkZXB0aDtcIixcbiAgXCIjZW5kaWZcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJBbm5vdGF0aW9uID0gW1xuICBcInVuaWZvcm0gc2FtcGxlcjJEIHNwaGVyZVRleHR1cmU7IC8vIEltcG9zdGVyIGltYWdlIG9mIHNwaGVyZVwiLFxuICBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7IC8vIGNvbG9ycyBhc3NvY2lhdGVkIHRvIHZlcnRpY2VzOyBhc3NpZ25lZCBieSB2ZXJ0ZXggc2hhZGVyXCIsXG4gIFwidmFyeWluZyB2ZWM0IG12UG9zaXRpb247XCIsXG4gIFwidmFyeWluZyBmbG9hdCB2UmFkaXVzO1wiLFxuICBcInZvaWQgbWFpbigpIFwiLFxuICBcIntcIixcbiAgXCIvLyB3aGF0IHBhcnQgb2YgdGhlIHNwaGVyZSBpbWFnZT9cIixcbiAgXCJ2ZWMyIHV2ID0gdmVjMihnbF9Qb2ludENvb3JkLngsIDEuMCAtIGdsX1BvaW50Q29vcmQueSk7XCIsXG4gIFwidmVjNCBzcGhlcmVDb2xvcnMgPSB0ZXh0dXJlMkQoc3BoZXJlVGV4dHVyZSwgdXYpO1wiLFxuICBcIi8vIGF2b2lkIGZ1cnRoZXIgY29tcHV0YXRpb24gYXQgaW52aXNpYmxlIGNvcm5lcnNcIixcbiAgXCJpZiAoc3BoZXJlQ29sb3JzLmEgPCAwLjMpIGRpc2NhcmQ7XCIsXG5cbiAgXCIvLyBjYWxjdWxhdGVzIGEgY29sb3IgZm9yIHRoZSBwYXJ0aWNsZVwiLFxuICBcIi8vIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG9yLCAxLjApO1wiLFxuICBcIi8vIHNldHMgYSB3aGl0ZSBwYXJ0aWNsZSB0ZXh0dXJlIHRvIGRlc2lyZWQgY29sb3JcIixcbiAgXCIvLyBnbF9GcmFnQ29sb3IgPSBzcXJ0KGdsX0ZyYWdDb2xvciAqIHRleHR1cmUyRChzcGhlcmVUZXh0dXJlLCB1dikpICsgdmVjNCgwLjEsIDAuMSwgMC4xLCAwLjApO1wiLFxuICBcIi8vIHJlZCBjaGFubmVsIGNvbnRhaW5zIGNvbG9yaXphYmxlIHNwaGVyZSBpbWFnZVwiLFxuICBcInZlYzMgYmFzZUNvbG9yID0gdkNvbG9yICogc3BoZXJlQ29sb3JzLnI7XCIsXG4gIFwiLy8gZ3JlZW4gY2hhbm5lbCBjb250YWlucyAod2hpdGU/KSBzcGVjdWxhciBoaWdobGlnaHRcIixcbiAgXCJnbF9GcmFnQ29sb3IgPSB2ZWM0KGJhc2VDb2xvciwgc3BoZXJlQ29sb3JzLmEpO1wiLFxuICBcIi8vIFRPRE8gYmx1ZSBjaGFubmVsIGNvbnRhaW5zIGRlcHRoIG9mZnNldCwgYnV0IHdlIGNhbm5vdCB1c2UgZ2xfRnJhZ0RlcHRoIGluIHdlYmdsP1wiLFxuICBcIiNpZmRlZiBHTF9FWFRfZnJhZ19kZXB0aFwiLFxuICBcImZsb2F0IGZhciA9IGdsX0RlcHRoUmFuZ2UuZmFyOyBmbG9hdCBuZWFyID0gZ2xfRGVwdGhSYW5nZS5uZWFyO1wiLFxuICBcImZsb2F0IGR6ID0gc3BoZXJlQ29sb3JzLmIgKiB2UmFkaXVzO1wiLFxuICBcInZlYzQgY2xpcFBvcyA9IHByb2plY3Rpb25NYXRyaXggKiAobXZQb3NpdGlvbiArIHZlYzQoMCwgMCwgZHosIDApKTtcIixcbiAgXCJmbG9hdCBuZGNfZGVwdGggPSBjbGlwUG9zLnovY2xpcFBvcy53O1wiLFxuICBcImZsb2F0IGRlcHRoID0gKCgoZmFyLW5lYXIpICogbmRjX2RlcHRoKSArIG5lYXIgKyBmYXIpIC8gMi4wO1wiLFxuICBcImdsX0ZyYWdEZXB0aEVYVCA9IGRlcHRoO1wiLFxuICBcIiNlbmRpZlwiLFxuICBcIn1cIlxuXS5qb2luKFwiXFxuXCIpO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJDb25lID0gW1xuICBcImF0dHJpYnV0ZSBmbG9hdCByYWRpdXM7XCIsXG4gIFwiYXR0cmlidXRlIHZlYzMgdHlwZUNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7XCIsXG4gIFwidmFyeWluZyB2ZWMyIHNwaGVyZVV2O1wiLFxuICBcInZhcnlpbmcgdmVjNCBtdlBvc2l0aW9uO1wiLFxuICBcInZhcnlpbmcgZmxvYXQgZGVwdGhTY2FsZTtcIixcbiAgXCJ2b2lkIG1haW4oKSBcIixcbiAgXCJ7XCIsXG4gIFwiXHQvLyBUT0RPIC0gb2Zmc2V0IGNvbmUgcG9zaXRpb24gZm9yIGRpZmZlcmVudCBzcGhlcmUgc2l6ZXNcIixcbiAgXCJcdC8vIFRPRE8gLSBpbXBsZW1lbnQgZGVwdGggYnVmZmVyIG9uIENocm9tZVwiLFxuICBcIlx0bXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XCIsXG4gIFwiXHQvLyBFeHBhbmQgcXVhZHJpbGF0ZXJhbCBwZXJwZW5kaWN1bGFyIHRvIGJvdGggdmlldy9zY3JlZW4gZGlyZWN0aW9uIGFuZCBjb25lIGF4aXNcIixcbiAgXCJcdHZlYzMgY3lsQXhpcyA9IChtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KG5vcm1hbCwgMC4wKSkueHl6OyAvLyBjb252ZXJ0IGNvbmUgYXhpcyB0byBjYW1lcmEgc3BhY2VcIixcbiAgXCJcdHZlYzMgc2lkZURpciA9IG5vcm1hbGl6ZShjcm9zcyh2ZWMzKDAuMCwwLjAsLTEuMCksIGN5bEF4aXMpKTtcIixcbiAgXCJcdG12UG9zaXRpb24gKz0gdmVjNChyYWRpdXMgKiBzaWRlRGlyLCAwLjApO1wiLFxuICBcIlx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcIixcbiAgXCJcdC8vIFBhc3MgYW5kIGludGVycG9sYXRlIGNvbG9yXCIsXG4gIFwiXHR2Q29sb3IgPSB0eXBlQ29sb3I7XCIsXG4gIFwiXHQvLyBUZXh0dXJlIGNvb3JkaW5hdGVzXCIsXG4gIFwiXHRzcGhlcmVVdiA9IHV2IC0gdmVjMigwLjUsIDAuNSk7IC8vIG1hcCBmcm9tIFswLDFdIHJhbmdlIHRvIFstLjUsLjVdLCBiZWZvcmUgcm90YXRpb25cIixcbiAgJ1x0Ly8gSWYgc2lkZURpciBpcyBcInVwXCIgb24gc2NyZWVuLCBtYWtlIHN1cmUgdSBpcyBwb3NpdGl2ZScsXG4gIFwiXHRmbG9hdCBxID0gc2lkZURpci55ICogc3BoZXJlVXYueTtcIixcbiAgXCJcdHNwaGVyZVV2LnkgPSBzaWduKHEpICogc3BoZXJlVXYueTtcIixcbiAgXCJcdC8vIHJvdGF0ZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIHRvIG1hdGNoIGNvbmUgb3JpZW50YXRpb24gYWJvdXQgelwiLFxuICBcIlx0ZmxvYXQgYW5nbGUgPSBhdGFuKHNpZGVEaXIueC9zaWRlRGlyLnkpO1wiLFxuICBcIlx0ZmxvYXQgYyA9IGNvcyhhbmdsZSk7XCIsXG4gIFwiXHRmbG9hdCBzID0gc2luKGFuZ2xlKTtcIixcbiAgXCJcdG1hdDIgcm90TWF0ID0gbWF0MihcIixcbiAgXCJcdFx0YywgLXMsIFwiLFxuICBcIlx0XHRzLCAgYyk7XCIsXG4gIFwiXHRzcGhlcmVVdiA9IHJvdE1hdCAqIHNwaGVyZVV2O1wiLFxuICBcIlx0c3BoZXJlVXYgKz0gdmVjMigwLjUsIDAuNSk7IC8vIG1hcCBiYWNrIGZyb20gWy0uNSwuNV0gPT4gWzAsMV1cIixcbiAgXCJcdC8vIFdlIGFyZSBwYWludGluZyBhbiBhbmdsZWQgY29uZSBvbnRvIGEgZmxhdCBxdWFkLCBzbyBkZXB0aCBjb3JyZWN0aW9uIGlzIGNvbXBsaWNhdGVkXCIsXG4gIFwiICAgZmxvYXQgZm9yZXNob3J0ZW5pbmcgPSBsZW5ndGgoY3lsQXhpcykgLyBsZW5ndGgoY3lsQXhpcy54eSk7IC8vIGNvcnJlY3QgZGVwdGggZm9yIGZvcmVzaG9ydGVuaW5nXCIsXG4gIFwiICAgLy8gZm9yZXNob3J0ZW5pbmcgbGltaXQgaXMgYSB0cmFkZW9mZiBiZXR3ZWVuIG92ZXJleHRydWRlZCBjb25lIGFydGlmYWN0cywgYW5kIGRlcHRoIGFydGlmYWN0c1wiLFxuICBcIiAgIGlmIChmb3Jlc2hvcnRlbmluZyA+IDQuMCkgZm9yZXNob3J0ZW5pbmcgPSAwLjk7IC8vIGhhY2sgdG8gbm90IHBvcCBvdXQgYXQgZXh0cmVtZSBhbmdsZXMuLi5cIixcbiAgXCIgICBkZXB0aFNjYWxlID0gcmFkaXVzICogZm9yZXNob3J0ZW5pbmc7IC8vIGNvcnJlY3QgZGVwdGggZm9yIGZvcmVzaG9ydGVuaW5nXCIsXG4gIFwifVwiXG5dLmpvaW4oXCJcXG5cIik7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyQ29uZSA9IFtcbiAgXCJ1bmlmb3JtIHNhbXBsZXIyRCBzcGhlcmVUZXh0dXJlOyAvLyBJbXBvc3RlciBpbWFnZSBvZiBzcGhlcmVcIixcbiAgXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcIixcbiAgXCJ2YXJ5aW5nIHZlYzMgdkNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjMiBzcGhlcmVVdjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzQgbXZQb3NpdGlvbjtcIixcbiAgXCJ2YXJ5aW5nIGZsb2F0IGRlcHRoU2NhbGU7XCIsXG4gIFwidm9pZCBtYWluKCkgXCIsXG4gIFwie1wiLFxuICBcIlx0dmVjNCBzcGhlcmVDb2xvcnMgPSB0ZXh0dXJlMkQoc3BoZXJlVGV4dHVyZSwgc3BoZXJlVXYpO1wiLFxuICBcIlx0aWYgKHNwaGVyZUNvbG9ycy5hIDwgMC4zKSBkaXNjYXJkO1wiLFxuICBcIlx0dmVjMyBiYXNlQ29sb3IgPSB2Q29sb3IgKiBzcGhlcmVDb2xvcnMucjtcIixcbiAgXCJcdHZlYzMgaGlnaGxpZ2h0Q29sb3IgPSBiYXNlQ29sb3IgKyBzcGhlcmVDb2xvcnMuZ2dnO1wiLFxuICBcIlx0Z2xfRnJhZ0NvbG9yID0gdmVjNChoaWdobGlnaHRDb2xvciwgc3BoZXJlQ29sb3JzLmEpO1wiLFxuICBcIiNpZmRlZiBHTF9FWFRfZnJhZ19kZXB0aFwiLFxuICBcImZsb2F0IGR6ID0gc3BoZXJlQ29sb3JzLmIgKiBkZXB0aFNjYWxlO1wiLFxuICBcInZlYzQgbXZwID0gbXZQb3NpdGlvbiArIHZlYzQoMCwgMCwgZHosIDApO1wiLFxuICBcInZlYzQgY2xpcFBvcyA9IHByb2plY3Rpb25NYXRyaXggKiBtdnA7XCIsXG4gIFwiZmxvYXQgbmRjX2RlcHRoID0gY2xpcFBvcy56L2NsaXBQb3MudztcIixcbiAgXCJmbG9hdCBmYXIgPSBnbF9EZXB0aFJhbmdlLmZhcjsgZmxvYXQgbmVhciA9IGdsX0RlcHRoUmFuZ2UubmVhcjtcIixcbiAgXCJmbG9hdCBkZXB0aCA9ICgoKGZhci1uZWFyKSAqIG5kY19kZXB0aCkgKyBuZWFyICsgZmFyKSAvIDIuMDtcIixcbiAgXCJnbF9GcmFnRGVwdGhFWFQgPSBkZXB0aDtcIixcbiAgXCIjZW5kaWZcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuZnVuY3Rpb24gY29udmVydFRvSGV4Q29sb3IoaSkge1xuICBsZXQgcmVzdWx0ID0gXCIjMDAwMDAwXCI7XG4gIGlmIChpID49IDAgJiYgaSA8PSAxNSkge1xuICAgIHJlc3VsdCA9IGAjMDAwMDAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSAxNiAmJiBpIDw9IDI1NSkge1xuICAgIHJlc3VsdCA9IGAjMDAwMCR7aS50b1N0cmluZygxNil9YDtcbiAgfSBlbHNlIGlmIChpID49IDI1NiAmJiBpIDw9IDQwOTUpIHtcbiAgICByZXN1bHQgPSBgIzAwMCR7aS50b1N0cmluZygxNil9YDtcbiAgfSBlbHNlIGlmIChpID49IDQwOTYgJiYgaSA8PSA2NTUzNSkge1xuICAgIHJlc3VsdCA9IGAjMDAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSA2NTUzNiAmJiBpIDw9IDEwNDg1NzUpIHtcbiAgICByZXN1bHQgPSBgIzAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSAxMDQ4NTc2ICYmIGkgPD0gMTY3NzcyMTUpIHtcbiAgICByZXN1bHQgPSBgIyR7aS50b1N0cmluZygxNil9YDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCb3VuZGluZ0JveChzd2NKU09OKSB7XG4gIGNvbnN0IGJvdW5kaW5nQm94ID0ge1xuICAgIHhtaW46IEluZmluaXR5LFxuICAgIHhtYXg6IC1JbmZpbml0eSxcbiAgICB5bWluOiBJbmZpbml0eSxcbiAgICB5bWF4OiAtSW5maW5pdHksXG4gICAgem1pbjogSW5maW5pdHksXG4gICAgem1heDogLUluZmluaXR5XG4gIH07XG5cbiAgT2JqZWN0LnZhbHVlcyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGNvbnN0IHIgPSBub2RlLnJhZGl1cztcbiAgICBpZiAobm9kZS54IC0gciA8IGJvdW5kaW5nQm94LnhtaW4pIHtcbiAgICAgIGJvdW5kaW5nQm94LnhtaW4gPSBub2RlLnggLSByO1xuICAgIH1cbiAgICBpZiAobm9kZS54ICsgciA+IGJvdW5kaW5nQm94LnhtYXgpIHtcbiAgICAgIGJvdW5kaW5nQm94LnhtYXggPSBub2RlLnggKyByO1xuICAgIH1cbiAgICBpZiAobm9kZS55IC0gciA8IGJvdW5kaW5nQm94LnltaW4pIHtcbiAgICAgIGJvdW5kaW5nQm94LnltaW4gPSBub2RlLnkgLSByO1xuICAgIH1cbiAgICBpZiAobm9kZS55ICsgciA+IGJvdW5kaW5nQm94LnltYXgpIHtcbiAgICAgIGJvdW5kaW5nQm94LnltYXggPSBub2RlLnkgKyByO1xuICAgIH1cbiAgICBpZiAobm9kZS56IC0gciA8IGJvdW5kaW5nQm94LnptaW4pIHtcbiAgICAgIGJvdW5kaW5nQm94LnptaW4gPSBub2RlLnogLSByO1xuICAgIH1cbiAgICBpZiAobm9kZS56ICsgciA+IGJvdW5kaW5nQm94LnptYXgpIHtcbiAgICAgIGJvdW5kaW5nQm94LnptYXggPSBub2RlLnogKyByO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGJvdW5kaW5nQm94O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCb3VuZGluZ1NwaGVyZShzd2NKU09OLCBib3VuZGluZ0JveCkge1xuICAvLyBTaW1pbGFyIHRvOlxuICAvLyBcIkFuIEVmZmljaWVudCBCb3VuZGluZyBTcGhlcmVcIiwgYnkgSmFjayBSaXR0ZXIgZnJvbSBcIkdyYXBoaWNzIEdlbXNcIiwgQWNhZGVtaWMgUHJlc3MsIDE5OTBcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VyaWNoNjY2L0dyYXBoaWNzR2Vtcy9ibG9iL21hc3Rlci9nZW1zL0JvdW5kU3BoZXJlLmNcblxuICAvLyBTdGFydCB3aXRoIHRoZSBzcGhlcmUgaW5zY3JpYmVkIGluIHRoZSBib3VuZGluZyBib3guICBJdCBtYXkgbWlzcyBzb21lIG5vZGVzLlxuICBjb25zdCByeCA9IChib3VuZGluZ0JveC54bWF4IC0gYm91bmRpbmdCb3gueG1pbikgLyAyO1xuICBjb25zdCByeSA9IChib3VuZGluZ0JveC55bWF4IC0gYm91bmRpbmdCb3gueW1pbikgLyAyO1xuICBjb25zdCByeiA9IChib3VuZGluZ0JveC56bWF4IC0gYm91bmRpbmdCb3guem1pbikgLyAyO1xuICBsZXQgcmFkaXVzID0gTWF0aC5taW4ocngsIHJ5LCByeik7XG4gIGxldCBjZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICBib3VuZGluZ0JveC54bWluICsgcngsXG4gICAgYm91bmRpbmdCb3gueW1pbiArIHJ5LFxuICAgIGJvdW5kaW5nQm94LnptaW4gKyByelxuICApO1xuXG4gIC8vIEZpbmQgZWFjaCBub2RlIHRoYXQgaXMgb3V0c2lkZSB0aGUgY3VycmVudCBib3VuZGluZyBzcGhlcmUuXG4gIGxldCByYWRpdXNTcSA9IHJhZGl1cyAqIHJhZGl1cztcbiAgT2JqZWN0LnZhbHVlcyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGNvbnN0IG5vZGVDZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMyhub2RlLngsIG5vZGUueSwgbm9kZS56KTtcbiAgICBjb25zdCBub2RlQ2VudGVyVG9DZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIG5vZGVDZW50ZXJUb0NlbnRlci5zdWJWZWN0b3JzKGNlbnRlciwgbm9kZUNlbnRlcik7XG4gICAgY29uc3QgZGlzdFNxTm9kZUNlbnRlclRvQ2VudGVyID0gbm9kZUNlbnRlclRvQ2VudGVyLmRvdChub2RlQ2VudGVyVG9DZW50ZXIpO1xuICAgIC8vIEluY2x1ZGUgdGhlIG5vZGUncyByYWRpdXMgd2hlbiBjaGVja2luZyB3aGV0aGVyIGl0IGlzIG91dHNpZGUuXG4gICAgaWYgKGRpc3RTcU5vZGVDZW50ZXJUb0NlbnRlciArIG5vZGUucmFkaXVzICogbm9kZS5yYWRpdXMgPiByYWRpdXNTcSkge1xuICAgICAgLy8gSWYgaXQgaXMgb3V0c2lkZSwgdGhlbiB0aGUgbmV3IGJvdW5kaW5ncC1zcGhlcmUgcmFkaXVzIGlzIHRoZSBhdmVyYWdlIG9mIHRoZSBvbGQgcmFkaXVzXG4gICAgICAvLyBhbmQgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG91dHNpZGUgb2YgdGhlIG5vZGUgKGkuZS4sIGluY2x1ZGUgaXRzIHJhZGl1cykgdG8gdGhlXG4gICAgICAvLyBvbGQgYm91bmRpbmctc3BoZXJlIGNlbnRlci5cbiAgICAgIGNvbnN0IGRpc3ROb2RlQ2VudGVyVG9DZW50ZXIgPSBNYXRoLnNxcnQoZGlzdFNxTm9kZUNlbnRlclRvQ2VudGVyKTtcbiAgICAgIGNvbnN0IG5ld1JhZGl1cyA9IChyYWRpdXMgKyAoZGlzdE5vZGVDZW50ZXJUb0NlbnRlciArIG5vZGUucmFkaXVzKSkgLyAyLjA7XG4gICAgICAvLyBUaGUgbmV3IGJvdW5kaW5nIHNwaGVyZSBjZW50ZXIgd2lsbCBiZSBvbiB0aGUgbGluZSBiZXR3ZWVuIHRoZSBub2RlIGFuZCB0aGUgb2xkIGNlbnRlci5cbiAgICAgIGNvbnN0IG5vZGVDZW50ZXJUb0NlbnRlclVuaXQgPSBub2RlQ2VudGVyVG9DZW50ZXJcbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLmRpdmlkZVNjYWxhcihkaXN0Tm9kZUNlbnRlclRvQ2VudGVyKTtcbiAgICAgIGNvbnN0IG5vZGVDZW50ZXJUb05ld0NlbnRlciA9IG5vZGVDZW50ZXJUb0NlbnRlclVuaXRcbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLm11bHRpcGx5U2NhbGFyKG5ld1JhZGl1cyAtIG5vZGUucmFkaXVzKTtcbiAgICAgIGNlbnRlciA9IG5vZGVDZW50ZXIuY2xvbmUoKS5hZGQobm9kZUNlbnRlclRvTmV3Q2VudGVyKTtcbiAgICAgIHJhZGl1cyA9IG5ld1JhZGl1cztcbiAgICAgIHJhZGl1c1NxID0gcmFkaXVzICogcmFkaXVzO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHsgY2VudGVyLCByYWRpdXMgfTtcbn1cbi8qKiBcbiAqIENhbGN1bGF0ZSB0aGUgY2FtZXJhIHBvc2l0aW9uIG9uIHRoZSBlZGdlIG9mIHRoZSBib3VuZGluZyBzcGhlcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3YgLSB0aGUgZmllbGQgb2YgdmlldyBmb3IgdGhlIHNjZW5lXG4gKiBAcGFyYW0ge09iamVjdH0gYm91bmRpbmdTcGhlcmUgLSBvYmplY3QgZGVzY3JpYmluZyByYWRpdXMgYW5kIGNlbnRlciBwb2ludCBvZiB0aGUgc3BoZXJlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZyb250VG9CYWNrIC0gaWYgdHJ1ZSwgdGhlbiBsb29rIGRvd24gdGhlIFotc3RhY2sgZnJvbSBwb2ludCAwXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUSFJFRS5WZWN0b3IzIG9iamVjdCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBjYW1lcmFcbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlQ2FtZXJhUG9zaXRpb24oZm92LCBib3VuZGluZ1NwaGVyZSwgZnJvbnRUb0JhY2ssIG1heFZvbHVtZVNpemUpIHtcbiAgY29uc3QgdGhldGEgPSAoZm92ICogKE1hdGguUEkgLyAxODAuMCkpIC8gMi4wO1xuICBjb25zdCBkID0gYm91bmRpbmdTcGhlcmUucmFkaXVzIC8gTWF0aC5zaW4odGhldGEpO1xuICBjb25zdCB7IGNlbnRlciB9ID0gYm91bmRpbmdTcGhlcmU7XG4gIC8vIElmIG5lZ2F0aXZlIHogaXMgZ3JlYXRlciB0aGFuIHRoZSAubWF4Vm9sdW1lU2l6ZSwgdGhlIGNhbWVyYSB3aWxsXG4gIC8vIGdldCBzdHVjayBhdCB0aGF0IHBvaW50IGFuZCB3b250IGJlIGFibGUgdG8gZG9sbHkgaW4gb3Igb3V0LiBGb3JjaW5nXG4gIC8vIHRoZSB6IHBvc2l0aW9uIHRvIGJlIGF0IGxlYXN0IGhhbGYgdGhlIG5lZ2F0aXZlIG1heFZvbHVtZVNpemUgc2VlbXNcbiAgLy8gdG8gZml4IHRoZSBpc3N1ZS5cbiAgY29uc3QgeiA9IE1hdGgubWF4KC0obWF4Vm9sdW1lU2l6ZS8yKSwgZnJvbnRUb0JhY2sgPyBjZW50ZXIueiAtIGQgOiBjZW50ZXIueiArIGQpO1xuICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjMoY2VudGVyLngsIGNlbnRlci55LCB6KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlTZW1pVHJhbnNwYXJlbnRTaGFkZXIob2JqZWN0LCBjb2xvcikge1xuICBvYmplY3QudHJhdmVyc2UoY2hpbGQgPT4ge1xuICAgIGNoaWxkLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIGNvbG9yOiB7IHR5cGU6IFwiY1wiLCB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGAke2NvbG9yfWApIH1cbiAgICAgIH0sXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IGBcbiAgICAgICAgI2xpbmUgNTg1XG4gICAgICAgIHZhcnlpbmcgdmVjMyBub3JtYWxfaW5fY2FtZXJhO1xuICAgICAgICB2YXJ5aW5nIHZlYzMgdmlld19kaXJlY3Rpb247XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZlYzQgcG9zX2luX2NhbWVyYSA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogcG9zX2luX2NhbWVyYTtcbiAgICAgICAgICBub3JtYWxfaW5fY2FtZXJhID0gbm9ybWFsaXplKG1hdDMobW9kZWxWaWV3TWF0cml4KSAqIG5vcm1hbCk7XG4gICAgICAgICAgdmlld19kaXJlY3Rpb24gPSBub3JtYWxpemUocG9zX2luX2NhbWVyYS54eXopO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcbiAgICAgICAgI2xpbmUgNTk3XG4gICAgICAgIHVuaWZvcm0gdmVjMyBjb2xvcjtcbiAgICAgICAgdmFyeWluZyB2ZWMzIG5vcm1hbF9pbl9jYW1lcmE7XG4gICAgICAgIHZhcnlpbmcgdmVjMyB2aWV3X2RpcmVjdGlvbjtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgLy8gTWFrZSBlZGdlcyBtb3JlIG9wYXF1ZSB0aGFuIGNlbnRlclxuICAgICAgICAgIGZsb2F0IGVkZ2luZXNzID0gMS4wIC0gYWJzKGRvdChub3JtYWxfaW5fY2FtZXJhLCB2aWV3X2RpcmVjdGlvbikpO1xuICAgICAgICAgIGZsb2F0IG9wYWNpdHkgPSBjbGFtcChlZGdpbmVzcyAtIDAuMzAsIDAuMCwgMC41KTtcbiAgICAgICAgICAvLyBEYXJrZW4gY29tcGFydG1lbnQgYXQgdGhlIHZlcnkgZWRnZVxuICAgICAgICAgIGZsb2F0IGJsYWNrbmVzcyA9IHBvdyhlZGdpbmVzcywgNC4wKSAtIDAuMztcbiAgICAgICAgICB2ZWMzIGMgPSBtaXgoY29sb3IsIHZlYzMoMCwwLDApLCBibGFja25lc3MpO1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYywgb3BhY2l0eSk7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGRlcHRoVGVzdDogdHJ1ZSxcbiAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLy8gZ2VuZXJhdGVzIHBhcnRpY2xlIHZlcnRpY2VzXG5mdW5jdGlvbiBnZW5lcmF0ZVBhcnRpY2xlKG5vZGUpIHtcbiAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKG5vZGUueCwgbm9kZS55LCBub2RlLnopO1xufVxuXG4vLyBnZW5lcmF0ZXMgc2tlbGV0b24gdmVydGljZXNcbmZ1bmN0aW9uIGdlbmVyYXRlU2tlbGV0b24obm9kZSwgbm9kZVBhcmVudCkge1xuICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMyhub2RlLngsIG5vZGUueSwgbm9kZS56KTtcbiAgY29uc3QgdmVydGV4UGFyZW50ID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgbm9kZVBhcmVudC54LFxuICAgIG5vZGVQYXJlbnQueSxcbiAgICBub2RlUGFyZW50LnpcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBjaGlsZDogdmVydGV4LFxuICAgIHBhcmVudDogdmVydGV4UGFyZW50XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1ldGFkYXRhRWxlbWVudChtZXRhZGF0YSwgY29sb3JzKSB7XG4gIGNvbnN0IG1ldGFkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXRhZGl2LmlkID0gXCJub2RlX2tleVwiO1xuICBtZXRhZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBtZXRhZGl2LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gIG1ldGFkaXYuc3R5bGUucmlnaHQgPSBcIjEwcHhcIjtcbiAgbWV0YWRpdi5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIDFweCAjYWFhYWFhXCI7XG4gIG1ldGFkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgbWV0YWRpdi5zdHlsZS5wYWRkaW5nID0gXCIycHhcIjtcblxuICBsZXQgdG9pbm5lcmh0bWwgPSBcIlwiO1xuICBtZXRhZGF0YS5mb3JFYWNoKG0gPT4ge1xuICAgIGNvbnN0IG10eXBlID0gcGFyc2VJbnQobS50eXBlLCAxMCk7XG4gICAgY29uc3QgdGhyZWVDb2xvciA9IG10eXBlIDwgY29sb3JzLmxlbmd0aCA/IGNvbG9yc1ttdHlwZV0gOiBjb2xvcnNbMF07XG4gICAgbGV0IGNzc0NvbG9yID0gdGhyZWVDb2xvcjtcbiAgICBpZiAodHlwZW9mIHRocmVlQ29sb3IgIT09IFwic3RyaW5nXCIpXG4gICAgICBjc3NDb2xvciA9IGNvbnZlcnRUb0hleENvbG9yKHRocmVlQ29sb3IpO1xuICAgIHRvaW5uZXJodG1sICs9IGA8ZGl2PjxzcGFuIHN0eWxlPSdoZWlnaHQ6MTBweDt3aWR0aDoxMHB4O2JhY2tncm91bmQ6JHtjc3NDb2xvcn07YDtcbiAgICB0b2lubmVyaHRtbCArPSBgZGlzcGxheTppbmxpbmUtYmxvY2s7Jz48L3NwYW4+IDogJHttLmxhYmVsfTwvZGl2PmA7XG4gIH0pO1xuICBtZXRhZGl2LmlubmVySFRNTCA9IHRvaW5uZXJodG1sO1xuICByZXR1cm4gbWV0YWRpdjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFya1ZpZXdlciB7XG4gIC8qIHN3YyBuZXVyb24ganNvbiBvYmplY3Q6XG4gICAqe1xuICAgKiAgaWQgOiB7XG4gICAqICAgIHR5cGU6IDx0eXBlIG51bWJlciBvZiBub2RlIChzdHJpbmcpPixcbiAgICogICAgeDogPHggcG9zaXRpb24gb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogICAgeTogPHkgcG9zaXRpb24gb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogICAgejogPHogcG9zaXRpb24gb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogICAgcGFyZW50OiA8aWQgbnVtYmVyIG9mIG5vZGUncyBwYXJlbnQgKC0xIGlmIG5vIHBhcmVudCk+LFxuICAgKiAgICByYWRpdXM6IDxyYWRpdXMgb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogIH1cbiAgICp9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgdGhpcy5zd2MgPSBudWxsO1xuICAgIC8vIG1vZGUgKHNwaGVyZSwgcGFydGljbGUsIHNrZWxldG9uKVxuICAgIHRoaXMubW9kZSA9IFwicGFydGljbGVcIjtcbiAgICAvLyBmbGlwIHkgYXhpc1xuICAgIHRoaXMuZmxpcCA9IGZhbHNlO1xuICAgIC8vIGNvbG9yIGFycmF5LCBub2RlcyBvZiB0eXBlIDAgc2hvdyBhcyBmaXJzdCBjb2xvciwgZXRjLlxuICAgIHRoaXMuY29sb3JzID0gW1xuICAgICAgMHgzMWZmZGMsXG4gICAgICAweDZkNGZmMyxcbiAgICAgIDB4YWEzYWYwLFxuICAgICAgMHhmMzgwMzIsXG4gICAgICAweDU5ZmMyMCxcbiAgICAgIDB4ZjhkNDNjLFxuICAgICAgMHhmZDJjNGQsXG4gICAgICAweGM5YzljOVxuICAgIF07XG4gICAgdGhpcy5yYWRpdXNfc2NhbGVfZmFjdG9yID0gMTtcbiAgICB0aGlzLm1ldGFkYXRhID0gZmFsc2U7XG4gICAgdGhpcy5vbl9zZWxlY3Rfbm9kZSA9IG51bGw7XG4gICAgdGhpcy5vbl90b2dnbGVfbm9kZSA9IG51bGw7XG4gICAgdGhpcy5zaG93X3N0YXRzID0gZmFsc2U7XG4gICAgdGhpcy5hbmltYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMudGhyZWUgPSBUSFJFRTtcblxuICAgIHRoaXMuc2hvd0F4ZXMgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dfY29uZXMgPSB0cnVlO1xuICAgIHRoaXMuYnJhaW5ib3VuZGluZ2JveCA9IG51bGw7XG4gICAgdGhpcy5sYXN0X2FuaW1fdGltZXN0YW1wID0gbnVsbDtcbiAgICB0aGlzLm1vdXNlSGFuZGxlciA9IG51bGw7XG4gICAgdGhpcy5ub2RlUGFydGljbGVUZXh0dXJlID0gTk9ERV9QQVJUSUNMRV9JTUFHRTtcbiAgICB0aGlzLm1pbl9yYWRpdXMgPSBudWxsO1xuICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuICAgIHRoaXMudHJhY2tDb250cm9scyA9IG51bGw7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAweGZmZmZmZjtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmFDaGFuZ2VDYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy5vblRvcCA9IGZhbHNlO1xuICAgIHRoaXMubWF4Vm9sdW1lU2l6ZSA9IDEwMDAwMDtcblxuICAgIHRoaXMuc2V0VmFsdWVzKGFyZ3MpO1xuICAgIC8vIGFueXRoaW5nIGFmdGVyIHRoZSBhYm92ZSBsaW5lIGNhbiBub3QgYmUgc2V0IGJ5IHRoZSBjYWxsZXIuXG5cbiAgICAvLyBodG1sIGVsZW1lbnQgdGhhdCB3aWxsIHJlY2VpdmUgd2ViZ2wgY2FudmFzXG4gICAgaWYgKHR5cGVvZiBhcmdzLmRvbV9lbGVtZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aGlzLmRvbV9lbGVtZW50ID0gYXJncy5kb21fZWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21fZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBhcmdzLmRvbV9lbGVtZW50IHx8IFwiY29udGFpbmVyXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gaGVpZ2h0IG9mIGNhbnZhc1xuICAgIHRoaXMuSEVJR0hUID0gdGhpcy5kb21fZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgLy8gd2lkdGggb2YgY2FudmFzXG4gICAgdGhpcy5XSURUSCA9IHRoaXMuZG9tX2VsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICAvLyBzZXRzIHVwIHVzZXIgc3BlY2lmaWVkIGNvbmZpZ3VyYXRpb25cbiAgc2V0VmFsdWVzKHZhbHVlcykge1xuICAgIGlmICh2YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGtleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZXMgY29sb3IgYmFzZWQgb24gbm9kZSB0eXBlXG4gIG5vZGVDb2xvcihub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA8IHRoaXMudGhyZWVfY29sb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhyZWVfY29sb3JzW25vZGUudHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRocmVlX2NvbG9yc1swXTtcbiAgfVxuXG5cblxuICAgIC8vIGdlbmVyYXRlcyBzcGhlcmUgbWVzaFxuICBnZW5lcmF0ZVNwaGVyZShub2RlKSB7XG4gICAgY29uc3Qgc3BoZXJlTWF0ZXJpYWwgPSB0aGlzLnRocmVlX21hdGVyaWFsc1tub2RlLnR5cGVdO1xuICAgIGNvbnN0IHIxID0gbm9kZS5yYWRpdXMgfHwgMC4wMTtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeShyMSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBzcGhlcmVNYXRlcmlhbCk7XG4gICAgbWVzaC5wb3NpdGlvbi54ID0gbm9kZS54O1xuICAgIG1lc2gucG9zaXRpb24ueSA9IG5vZGUueTtcbiAgICBtZXNoLnBvc2l0aW9uLnogPSBub2RlLno7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cblxuICAvLyBnZW5lcmF0ZXMgY29uZXMgY29ubmVjdGluZyBzcGhlcmVzXG4gIGdlbmVyYXRlQ29uZUdlb21ldHJ5KG5vZGUsIG5vZGVQYXJlbnQpIHtcbiAgICBjb25zdCBjb25lTWF0ZXJpYWwgPSB0aGlzLnRocmVlX21hdGVyaWFsc1tub2RlUGFyZW50LnR5cGVdO1xuICAgIGNvbnN0IG5vZGVWZWMgPSBuZXcgVEhSRUUuVmVjdG9yMyhub2RlLngsIG5vZGUueSwgbm9kZS56KTtcbiAgICBjb25zdCBub2RlUGFyZW50VmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICBub2RlUGFyZW50LngsXG4gICAgICBub2RlUGFyZW50LnksXG4gICAgICBub2RlUGFyZW50LnpcbiAgICApO1xuICAgIGNvbnN0IGRpc3QgPSBub2RlVmVjLmRpc3RhbmNlVG8obm9kZVBhcmVudFZlYyk7XG4gICAgY29uc3QgY3lsQXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhub2RlVmVjLCBub2RlUGFyZW50VmVjKTtcbiAgICBjeWxBeGlzLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHRoZXRhID0gTWF0aC5hY29zKGN5bEF4aXMueSk7XG4gICAgY29uc3Qgcm90YXRpb25BeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICByb3RhdGlvbkF4aXMuY3Jvc3NWZWN0b3JzKGN5bEF4aXMsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKTtcbiAgICByb3RhdGlvbkF4aXMubm9ybWFsaXplKCk7XG4gICAgY29uc3QgcjEgPSBub2RlLnJhZGl1cyB8fCAwLjAxO1xuICAgIGNvbnN0IHIyID0gbm9kZVBhcmVudC5yYWRpdXMgfHwgMC4wMTtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIxLCByMiwgZGlzdCk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBjb25lTWF0ZXJpYWwpO1xuICAgIG1lc2gubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgIG1lc2gubWF0cml4Lm1ha2VSb3RhdGlvbkF4aXMocm90YXRpb25BeGlzLCAtdGhldGEpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAobm9kZS54ICsgbm9kZVBhcmVudC54KSAvIDIsXG4gICAgICAobm9kZS55ICsgbm9kZVBhcmVudC55KSAvIDIsXG4gICAgICAobm9kZS56ICsgbm9kZVBhcmVudC56KSAvIDJcbiAgICApO1xuICAgIG1lc2gubWF0cml4LnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuXG4gIC8vIGdlbmVyYXRlcyBjb25lIHByb3BlcnRpZXMgZm9yIG5vZGUsIHBhcmVudCBwYWlyXG4gIGdlbmVyYXRlQ29uZShub2RlLCBub2RlUGFyZW50LCBjb2xvcikge1xuICAgIGNvbnN0IGNvbmVDaGlsZCA9IHt9O1xuICAgIGNvbnN0IGNvbmVQYXJlbnQgPSB7fTtcblxuICAgIGxldCBub2RlQ29sb3IgPSB0aGlzLm5vZGVDb2xvcihub2RlKTtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIG5vZGVDb2xvciA9IG5ldyBUSFJFRS5Db2xvcihjb2xvcik7XG4gICAgfVxuICAgIGNvbmVDaGlsZC52ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMyhub2RlLngsIG5vZGUueSwgbm9kZS56KTtcbiAgICBjb25lQ2hpbGQucmFkaXVzID0gbm9kZS5yYWRpdXM7XG4gICAgY29uZUNoaWxkLmNvbG9yID0gbm9kZUNvbG9yO1xuXG4gICAgbGV0IG5vZGVQYXJlbnRDb2xvciA9IHRoaXMubm9kZUNvbG9yKG5vZGVQYXJlbnQpO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgbm9kZVBhcmVudENvbG9yID0gbmV3IFRIUkVFLkNvbG9yKGNvbG9yKTtcbiAgICB9XG4gICAgY29uZVBhcmVudC52ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgIG5vZGVQYXJlbnQueCxcbiAgICAgIG5vZGVQYXJlbnQueSxcbiAgICAgIG5vZGVQYXJlbnQuelxuICAgICk7XG4gICAgY29uZVBhcmVudC5yYWRpdXMgPSBub2RlUGFyZW50LnJhZGl1cztcbiAgICBjb25lUGFyZW50LmNvbG9yID0gbm9kZVBhcmVudENvbG9yO1xuXG4gICAgLy8gbm9ybWFsc1xuICAgIGNvbnN0IG4xID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKFxuICAgICAgY29uZVBhcmVudC52ZXJ0ZXgsXG4gICAgICBjb25lQ2hpbGQudmVydGV4XG4gICAgKTtcbiAgICBjb25zdCBuMiA9IG4xLmNsb25lKCkubmVnYXRlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGQ6IGNvbmVDaGlsZCxcbiAgICAgIHBhcmVudDogY29uZVBhcmVudCxcbiAgICAgIG5vcm1hbDE6IG4xLFxuICAgICAgbm9ybWFsMjogbjJcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlTmV1cm9uKHN3Y0pTT04sIGNvbG9yID0gdW5kZWZpbmVkKSB7XG4gICAgLy8gbmV1cm9uIGlzIG9iamVjdCAzZCB3aGljaCBlbnN1cmVzIGFsbCBjb21wb25lbnRzIG1vdmUgdG9nZXRoZXJcbiAgICBjb25zdCBuZXVyb24gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICBsZXQgZ2VvbWV0cnk7XG4gICAgbGV0IG1hdGVyaWFsO1xuICAgIC8vIHBhcnRpY2xlIG1vZGUgdXNlcyB2ZXJ0ZXggaW5mbyB0byBwbGFjZSB0ZXh0dXJlIGltYWdlLCB2ZXJ5IGZhc3RcbiAgICBpZiAodGhpcy5tb2RlID09PSBcInBhcnRpY2xlXCIpIHtcbiAgICAgIC8vIHNwZWNpYWwgaW1wb3N0ZXIgaW1hZ2UgY29udGFpbnM6XG4gICAgICAvLyAxIC0gY29sb3JpemFibGUgc3BoZXJlIGltYWdlIGluIHJlZCBjaGFubmVsXG4gICAgICAvLyAyIC0gc3BlY3VsYXIgaGlnaGxpZ2h0IGluIGdyZWVuIGNoYW5uZWxcbiAgICAgIC8vIDMgLSBkZXB0aCBvZmZzZXQgaW4gYmx1ZSBjaGFubmVsIChjdXJyZW50bHkgdW51c2VkKVxuICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3Qgc3BoZXJlSW1nID0gbmV3IFRIUkVFLlRleHR1cmUoaW1hZ2UpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgICBzcGhlcmVJbWcubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMubm9kZVBhcnRpY2xlVGV4dHVyZTtcblxuICAgICAgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgIC8vIHByb3BlcnRpZXMgdGhhdCBtYXkgY29uc3R5IGZyb20gcGFydGljbGUgdG8gcGFydGljbGUuIG9ubHkgYWNjZXNzaWJsZSBpbiB2ZXJ0ZXggc2hhZGVycyFcbiAgICAgIC8vXHQoY2FuIHBhc3MgY29sb3IgaW5mbyB0byBmcmFnbWVudCBzaGFkZXIgdmlhIHZDb2xvci4pXG4gICAgICAvLyBjb21wdXRlIHNjYWxlIGZvciBwYXJ0aWNsZXMsIGluIHBpeGVsc1xuICAgICAgY29uc3QgcGFydGljbGVTY2FsZSA9XG4gICAgICAgICgwLjUgKiB0aGlzLkhFSUdIVCkgL1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmdldFBpeGVsUmF0aW8oKSAvXG4gICAgICAgIE1hdGgudGFuKCgwLjUgKiB0aGlzLmZvdiAqIE1hdGguUEkpIC8gMTgwLjApO1xuXG4gICAgICBjb25zdCBjdXN0b21BdHRyaWJ1dGVzID0ge1xuICAgICAgICByYWRpdXM6IHsgdHlwZTogXCJmdjFcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgIHR5cGVDb2xvcjogeyB0eXBlOiBcImNcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgIHZlcnRpY2VzOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogW10gfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgY3VzdG9tVW5pZm9ybXMgPSB7XG4gICAgICAgIHBhcnRpY2xlU2NhbGU6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiBwYXJ0aWNsZVNjYWxlIH0sXG4gICAgICAgIHNwaGVyZVRleHR1cmU6IHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBzcGhlcmVJbWcgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5kZXhMb29rdXAgPSB7fTtcblxuICAgICAgT2JqZWN0LmtleXMoc3djSlNPTikuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbGV0IG5vZGVDb2xvciA9IHRoaXMubm9kZUNvbG9yKHN3Y0pTT05bbm9kZV0pO1xuXG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgIG5vZGVDb2xvciA9IG5ldyBUSFJFRS5Db2xvcihjb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJ0aWNsZVZlcnRleCA9IGdlbmVyYXRlUGFydGljbGUoc3djSlNPTltub2RlXSk7XG5cbiAgICAgICAgbGV0IHJhZGl1cyA9IHN3Y0pTT05bbm9kZV0ucmFkaXVzICogdGhpcy5yYWRpdXNfc2NhbGVfZmFjdG9yO1xuXG4gICAgICAgIGlmICh0aGlzLm1pbl9yYWRpdXMgJiYgcmFkaXVzIDwgdGhpcy5taW5fcmFkaXVzKSB7XG4gICAgICAgICAgcmFkaXVzID0gdGhpcy5taW5fcmFkaXVzO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChyYWRpdXMpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2gocGFydGljbGVWZXJ0ZXgueCk7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChwYXJ0aWNsZVZlcnRleC55KTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKHBhcnRpY2xlVmVydGV4LnopO1xuXG4gICAgICAgIGluZGV4TG9va3VwW2N1c3RvbUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLmxlbmd0aCAtIDFdID1cbiAgICAgICAgICBzd2NKU09OW25vZGVdLnNhbXBsZU51bWJlcjtcbiAgICAgfSk7XG4gICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwicG9zaXRpb25cIixcbiAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY3VzdG9tQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZSwgMylcbiAgICAgICk7XG4gICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwicmFkaXVzXCIsXG4gICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGN1c3RvbUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLCAxKVxuICAgICAgKTtcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJ0eXBlQ29sb3JcIixcbiAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY3VzdG9tQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUsIDMpXG4gICAgICApO1xuXG4gICAgICBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgIHVuaWZvcm1zOiBjdXN0b21Vbmlmb3JtcyxcbiAgICAgICAgdmVydGV4U2hhZGVyLFxuICAgICAgICBmcmFnbWVudFNoYWRlcixcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWVcbiAgICAgICAgLy8gYWxwaGFUZXN0OiAwLjUgLy8gaWYgaGF2aW5nIHRyYW5zcGFyZW5jeSBpc3N1ZXMsIHRyeSBpbmNsdWRpbmc6IGFscGhhVGVzdDogMC41LFxuICAgICAgfSk7XG4gICAgICBtYXRlcmlhbC5leHRlbnNpb25zLmZyYWdEZXB0aCA9IHRydWU7XG5cbiAgICAgIGxldCBtYXRlcmlhbFNoYWRlciA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUSFJFRS5Qb2ludHMoZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIHBhcnRpY2xlcy51c2VyRGF0YSA9IHsgaW5kZXhMb29rdXAsIG1hdGVyaWFsU2hhZGVyIH07XG5cbiAgICAgIG1hdGVyaWFsLm9uQmVmb3JlQ29tcGlsZSA9IHNoYWRlciA9PiB7XG4gICAgICAgIHNoYWRlci51bmlmb3Jtcy5hbHBoYSA9IHsgdmFsdWU6IDAgfTtcbiAgICAgICAgc2hhZGVyLnZlcnRleFNoYWRlciA9IGB1bmlmb3JtIGZsb2F0IGFscGhhO1xcbiR7c2hhZGVyLnZlcnRleFNoYWRlcn1gO1xuICAgICAgICBzaGFkZXIudmVydGV4U2hhZGVyID0gc2hhZGVyLnZlcnRleFNoYWRlci5yZXBsYWNlKFxuICAgICAgICAgIFwiI2luY2x1ZGUgPGJlZ2luX3ZlcnRleD5cIixcbiAgICAgICAgICBbXCJ2QWxwaGEgPSBhbHBoYVwiXS5qb2luKFwiXFxuXCIpXG4gICAgICAgICk7XG4gICAgICAgIG1hdGVyaWFsU2hhZGVyID0gc2hhZGVyO1xuXG4gICAgICAgIG1hdGVyaWFsU2hhZGVyLnVuaWZvcm1zLmFscGhhLnZhbHVlID0gMC45O1xuXG4gICAgICAgIHBhcnRpY2xlcy51c2VyRGF0YS5tYXRlcmlhbFNoYWRlciA9IG1hdGVyaWFsU2hhZGVyO1xuICAgICAgfTtcblxuICAgICAgbmV1cm9uLmFkZChwYXJ0aWNsZXMpO1xuXG4gICAgICBpZiAodGhpcy5zaG93X2NvbmVzKSB7XG4gICAgICAgIC8vIENvbmUgcXVhZCBpbXBvc3RlcnMsIHRvIGxpbmsgc3BoZXJlcyB0b2dldGhlclxuICAgICAgICBjb25zdCBjb25lQXR0cmlidXRlcyA9IHtcbiAgICAgICAgICByYWRpdXM6IHsgdHlwZTogXCJmdjFcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgaW5kaWNlczogeyB0eXBlOiBcIml2MVwiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgICB0eXBlQ29sb3I6IHsgdHlwZTogXCJjXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICAgIHZlcnRpY2VzOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgICBub3JtYWxzOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgICB1djogeyB0eXBlOiBcImZcIiwgdmFsdWU6IFtdIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29uZVVuaWZvcm1zID0ge1xuICAgICAgICAgIHNwaGVyZVRleHR1cmU6IHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBzcGhlcmVJbWcgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1dnMgPSBbXG4gICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAwKSxcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMigwLjUsIDEpLFxuICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMSlcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgY29uZUdlb20gPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgICAgbGV0IGl4MjEgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgaWYgKHN3Y0pTT05bbm9kZV0ucGFyZW50ICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gUGFpbnQgdHdvIHRyaWFuZ2xlcyB0byBtYWtlIGEgY29uZS1pbXBvc3RlciBxdWFkcmlsYXRlcmFsXG4gICAgICAgICAgICAvLyBUcmlhbmdsZSAjMVxuICAgICAgICAgICAgY29uc3QgY29uZSA9IHRoaXMuZ2VuZXJhdGVDb25lKFxuICAgICAgICAgICAgICBzd2NKU09OW25vZGVdLFxuICAgICAgICAgICAgICBzd2NKU09OW3N3Y0pTT05bbm9kZV0ucGFyZW50XSxcbiAgICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgbm9kZUNvbG9yID0gY29uZS5jaGlsZC5jb2xvcjtcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICBub2RlQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGFyZW50UmFkaXVzID0gY29uZS5wYXJlbnQucmFkaXVzICogdGhpcy5yYWRpdXNfc2NhbGVfZmFjdG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMubWluX3JhZGl1cyAmJiBwYXJlbnRSYWRpdXMgPCB0aGlzLm1pbl9yYWRpdXMpIHtcbiAgICAgICAgICAgICAgcGFyZW50UmFkaXVzID0gdGhpcy5taW5fcmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2hpbGRSYWRpdXMgPSBjb25lLmNoaWxkLnJhZGl1cyAqIHRoaXMucmFkaXVzX3NjYWxlX2ZhY3RvcjtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbl9yYWRpdXMgJiYgY2hpbGRSYWRpdXMgPCB0aGlzLm1pbl9yYWRpdXMpIHtcbiAgICAgICAgICAgICAgY2hpbGRSYWRpdXMgPSB0aGlzLm1pbl9yYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAxXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChjaGlsZFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1swXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzBdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggMlxuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2goY2hpbGRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMV0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1sxXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcblxuICAgICAgICAgICAgLy8gdmVydGV4IDNcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKHBhcmVudFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1syXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzJdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuXG4gICAgICAgICAgICAvLyBUcmlhbmdsZSAjMlxuICAgICAgICAgICAgLy8gUGFyZW50XG4gICAgICAgICAgICBub2RlQ29sb3IgPSBjb25lLnBhcmVudC5jb2xvcjtcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICBub2RlQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggMVxuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2gocGFyZW50UmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzBdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMF0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAyXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChwYXJlbnRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMV0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1sxXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcblxuICAgICAgICAgICAgLy8gdmVydGV4IDNcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKGNoaWxkUmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzJdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMl0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uZUdlb20uc2V0SW5kZXgoXG4gICAgICAgICAgbmV3IFRIUkVFLlVpbnQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLCAxKVxuICAgICAgICApO1xuICAgICAgICBjb25lR2VvbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJwb3NpdGlvblwiLFxuICAgICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLCAzKVxuICAgICAgICApO1xuICAgICAgICBjb25lR2VvbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJyYWRpdXNcIixcbiAgICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUsIDEpXG4gICAgICAgICk7XG4gICAgICAgIGNvbmVHZW9tLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInR5cGVDb2xvclwiLFxuICAgICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZSwgMylcbiAgICAgICAgKTtcbiAgICAgICAgY29uZUdlb20uc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwibm9ybWFsXCIsXG4gICAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZSwgMylcbiAgICAgICAgKTtcbiAgICAgICAgY29uZUdlb20uc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwidXZcIixcbiAgICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy51di52YWx1ZSwgMilcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb25lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgIHVuaWZvcm1zOiBjb25lVW5pZm9ybXMsXG4gICAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhTaGFkZXJDb25lLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudFNoYWRlckNvbmUsXG4gICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgZGVwdGhUZXN0OiB0cnVlLFxuICAgICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG4gICAgICAgICAgYWxwaGFUZXN0OiAwLjUgLy8gaWYgaGF2aW5nIHRyYW5zcGFyZW5jeSBpc3N1ZXMsIHRyeSBpbmNsdWRpbmc6IGFscGhhVGVzdDogMC41LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25lTWF0ZXJpYWwuZXh0ZW5zaW9ucy5mcmFnRGVwdGggPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGNvbmVNZXNoID0gbmV3IFRIUkVFLk1lc2goY29uZUdlb20sIGNvbmVNYXRlcmlhbCk7XG5cbiAgICAgICAgY29uZU1hdGVyaWFsLm9uQmVmb3JlQ29tcGlsZSA9IHNoYWRlciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coIHNoYWRlciApXG4gICAgICAgICAgc2hhZGVyLnVuaWZvcm1zLmFscGhhID0geyB2YWx1ZTogMCB9O1xuICAgICAgICAgIHNoYWRlci52ZXJ0ZXhTaGFkZXIgPSBgdW5pZm9ybSBmbG9hdCBhbHBoYTtcXG4ke3NoYWRlci52ZXJ0ZXhTaGFkZXJ9YDtcbiAgICAgICAgICBzaGFkZXIudmVydGV4U2hhZGVyID0gc2hhZGVyLnZlcnRleFNoYWRlci5yZXBsYWNlKFxuICAgICAgICAgICAgXCIjaW5jbHVkZSA8YmVnaW5fdmVydGV4PlwiLFxuICAgICAgICAgICAgW1widkFscGhhID0gYWxwaGFcIl0uam9pbihcIlxcblwiKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbWF0ZXJpYWxTaGFkZXIgPSBzaGFkZXI7XG5cbiAgICAgICAgICBtYXRlcmlhbFNoYWRlci51bmlmb3Jtcy5hbHBoYS52YWx1ZSA9IDAuOTtcblxuICAgICAgICAgIGNvbmVNZXNoLnVzZXJEYXRhID0geyBtYXRlcmlhbFNoYWRlciB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIG5ldXJvbi5hZGQoY29uZU1lc2gpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzcGhlcmUgbW9kZSByZW5kZXJzIDNkIHNwaGVyZVxuICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gXCJzcGhlcmVcIikge1xuICAgICAgT2JqZWN0LmtleXMoc3djSlNPTikuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgY29uc3Qgc3BoZXJlID0gdGhpcy5nZW5lcmF0ZVNwaGVyZShzd2NKU09OW25vZGVdKTtcbiAgICAgICAgbmV1cm9uLmFkZChzcGhlcmUpO1xuICAgICAgICBpZiAodGhpcy5zaG93X2NvbmVzKSB7XG4gICAgICAgICAgaWYgKHN3Y0pTT05bbm9kZV0ucGFyZW50ICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgY29uZSA9IHRoaXMuZ2VuZXJhdGVDb25lR2VvbWV0cnkoXG4gICAgICAgICAgICAgIHN3Y0pTT05bbm9kZV0sXG4gICAgICAgICAgICAgIHN3Y0pTT05bc3djSlNPTltub2RlXS5wYXJlbnRdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbmV1cm9uLmFkZChjb25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFwic2tlbGV0b25cIiB8fCB0aGlzLnNob3dfY29uZXMgPT09IGZhbHNlKSB7XG4gICAgICBtYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSBcInNrZWxldG9uXCIpIG1hdGVyaWFsLmNvbG9yLnNldCh0aGlzLmNvbG9yc1swXSk7XG4gICAgICBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuICAgICAgT2JqZWN0LmtleXMoc3djSlNPTikuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKHN3Y0pTT05bbm9kZV0ucGFyZW50ICE9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gZ2VuZXJhdGVTa2VsZXRvbihcbiAgICAgICAgICAgIHN3Y0pTT05bbm9kZV0sXG4gICAgICAgICAgICBzd2NKU09OW3N3Y0pTT05bbm9kZV0ucGFyZW50XVxuICAgICAgICAgICk7XG4gICAgICAgICAgZ2VvbWV0cnkudmVydGljZXMucHVzaCh2ZXJ0aWNlcy5jaGlsZCk7XG4gICAgICAgICAgZ2VvbWV0cnkudmVydGljZXMucHVzaCh2ZXJ0aWNlcy5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGxpbmUgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBuZXVyb24uYWRkKGxpbmUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV1cm9uO1xuICB9XG5cbiAgLy8gY29waWVkIGZyb20gZXhhbXBsZSBhdCBodHRwOi8vanNmaWRkbGUubmV0L2I5N3pkMWEzLzE2L1xuICBhZGRBeGVzKCkge1xuICAgIGNvbnN0IENBTlZBU19XSURUSCA9IDIwMDtcbiAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gMjAwO1xuICAgIGNvbnN0IGF4ZXNSZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7IGFscGhhOiB0cnVlIH0gKTsgLy8gY2xlYXJcbiAgICBheGVzUmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgwMDAwMDAsIDAgKTtcbiAgICBheGVzUmVuZGVyZXIuc2V0U2l6ZSggQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUICk7XG4gICAgdGhpcy5heGVzUmVuZGVyZXIgPSBheGVzUmVuZGVyZXI7XG5cbiAgICBjb25zdCBheGVzQ2FudmFzID0gdGhpcy5kb21fZWxlbWVudC5hcHBlbmRDaGlsZCggYXhlc1JlbmRlcmVyLmRvbUVsZW1lbnQgKTtcbiAgICBheGVzQ2FudmFzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXhlc0NhbnZhcycpO1xuICAgIGF4ZXNDYW52YXMuc3R5bGUud2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgYXhlc0NhbnZhcy5zdHlsZS5oZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuICAgIGF4ZXNDYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYXhlc0NhbnZhcy5zdHlsZS56SW5kZXggPSAyMDA7XG4gICAgYXhlc0NhbnZhcy5zdHlsZS5ib3R0b20gPSBcIjVweFwiO1xuICAgIGF4ZXNDYW52YXMuc3R5bGUucmlnaHQgPSBcIjVweFwiO1xuXG5cblxuICAgIGNvbnN0IGF4ZXNDYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDUwLCBDQU5WQVNfV0lEVEggLyBDQU5WQVNfSEVJR0hULCAxLCAxMDAwICk7XG4gICAgYXhlc0NhbWVyYS51cCA9IHRoaXMuY2FtZXJhLnVwOyAvLyBpbXBvcnRhbnQhXG4gICAgdGhpcy5heGVzQ2FtZXJhID0gYXhlc0NhbWVyYTtcblxuICAgIGNvbnN0IGF4ZXNTY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGNvbnN0IGF4ZXNQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwwLDAgKTtcbiAgICBheGVzU2NlbmUuYWRkKCBuZXcgVEhSRUUuQXJyb3dIZWxwZXIoIG5ldyBUSFJFRS5WZWN0b3IzKCAxLDAsMCApLCBheGVzUG9zLCA2MCwgMHhGRjAwMDAsIDIwLCAxMCApICk7XG4gICAgYXhlc1NjZW5lLmFkZCggbmV3IFRIUkVFLkFycm93SGVscGVyKCBuZXcgVEhSRUUuVmVjdG9yMyggMCwxLDAgKSwgYXhlc1BvcywgNjAsIDB4MDBGRjAwLCAyMCwgMTAgKSApO1xuICAgIGF4ZXNTY2VuZS5hZGQoIG5ldyBUSFJFRS5BcnJvd0hlbHBlciggbmV3IFRIUkVFLlZlY3RvcjMoIDAsMCwxICksIGF4ZXNQb3MsIDYwLCAweDAwMDBGRiwgMjAsIDEwICkgKTtcbiAgICB0aGlzLmF4ZXNTY2VuZSA9IGF4ZXNTY2VuZTtcbiAgfVxuXG4gIC8vIFNldHMgdXAgdGhyZWUuanMgc2NlbmVcbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5lZmZlY3QgPT09IFwibm9lZmZlY3RcIikgdGhpcy5lZmZlY3QgPSBmYWxzZTtcblxuICAgIC8vIHNldCB1cCBjb2xvcnMgYW5kIG1hdGVyaWFscyBiYXNlZCBvbiBjb2xvciBhcnJheVxuICAgIHRoaXMudGhyZWVfY29sb3JzID0gW107XG4gICAgT2JqZWN0LmtleXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgdGhpcy50aHJlZV9jb2xvcnMucHVzaChuZXcgVEhSRUUuQ29sb3IodGhpcy5jb2xvcnNbY29sb3JdKSk7XG4gICAgfSlcbiAgICB0aGlzLnRocmVlX21hdGVyaWFscyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgIHRoaXMudGhyZWVfbWF0ZXJpYWxzLnB1c2goXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzW2NvbG9yXSxcbiAgICAgICAgICB3aXJlZnJhbWU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0dXAgcmVuZGVyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTDFSZW5kZXJlcih7XG4gICAgICBhbnRpYWxpYXM6IHRydWUgLy8gdG8gZ2V0IHNtb290aGVyIG91dHB1dFxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMuV0lEVEgsIHRoaXMuSEVJR0hUKTtcbiAgICB0aGlzLmRvbV9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAvLyB0byBsZXQgb24tdG9wIHJlbmRlcmluZyB3b3JrXG4gICAgdGhpcy5yZW5kZXJlci5hdXRvQ2xlYXIgPSBmYWxzZTtcblxuICAgIC8vIGNyZWF0ZSBhIHNjZW5lXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgLy8gcHV0IGEgY2FtZXJhIGluIHRoZSBzY2VuZVxuICAgIHRoaXMuZm92ID0gNDU7XG4gICAgY29uc3QgY2FtZXJhUG9zaXRpb24gPSB0aGlzLm1heFZvbHVtZVNpemU7XG4gICAgY29uc3QgZmFyQ2xpcHBpbmcgPSBjYW1lcmFQb3NpdGlvbiAqIDI7XG4gICAgY29uc3QgbmVhckNsaXBwaW5nID0gMTA7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICB0aGlzLmZvdixcbiAgICAgIHRoaXMuV0lEVEggLyB0aGlzLkhFSUdIVCxcbiAgICAgIG5lYXJDbGlwcGluZyxcbiAgICAgIGZhckNsaXBwaW5nXG4gICAgKTtcblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSBjYW1lcmFQb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLnNob3dBeGVzKSB7XG4gICAgICB0aGlzLmFkZEF4ZXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mbGlwID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNhbWVyYS51cC5zZXRZKC0xKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zd2MpIHtcbiAgICAgIGNvbnN0IG5ldXJvbiA9IHRoaXMuY3JlYXRlTmV1cm9uKHRoaXMuc3djKTtcbiAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gY2FsY3VsYXRlQm91bmRpbmdCb3godGhpcy5zd2MpO1xuICAgICAgY29uc3QgYm91bmRpbmdTcGhlcmUgPSBjYWxjdWxhdGVCb3VuZGluZ1NwaGVyZSh0aGlzLnN3YywgYm91bmRpbmdCb3gpO1xuICAgICAgLy8gc3RvcmUgbmV1cm9uIHN0YXR1cyBhbmQgYm91bmRpbmcgc3BoZXJlIGZvciBsYXRlciB1c2VcbiAgICAgIC8vIHdoZW4gcmVzZXR0aW5nIHRoZSB2aWV3LlxuICAgICAgbmV1cm9uLmlzTmV1cm9uID0gdHJ1ZTtcbiAgICAgIG5ldXJvbi5ib3VuZGluZ1NwaGVyZSA9IGJvdW5kaW5nU3BoZXJlO1xuICAgICAgdGhpcy5zY2VuZS5hZGQobmV1cm9uKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgZWxlbWVudHMgdGhhdCBtYXkgYmUgcmVuZGVyZWQgb24gdG9wXG4gICAgdGhpcy5zY2VuZU9uVG9wYWJsZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgaWYgKHRoaXMubWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IG1FbGVtZW50ID0gY3JlYXRlTWV0YWRhdGFFbGVtZW50KHRoaXMubWV0YWRhdGEsIHRoaXMuY29sb3JzKTtcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQuYXBwZW5kQ2hpbGQobUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tDb250cm9scyA9IG5ldyBPcmJpdFVubGltaXRlZENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLmRvbV9lbGVtZW50KTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMubWF4RGlzdGFuY2UgPSBjYW1lcmFQb3NpdGlvbjtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMubWluRGlzdGFuY2UgPSAxNTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICAvLyBUT0RPOiBoYXZlIGEgY2FsbGJhY2sgaGVyZSB0aGF0IHJlcG9ydHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlXG4gICAgLy8gY2FtZXJhLiBUaGF0IHdheSB3ZSBjYW4gc3RvcmUgaXQgaW4gdGhlIHN0YXRlIGFuZCByZXN0b3JlIGZyb20gdGhlcmUuXG4gICAgdGhpcy50cmFja0NvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FtZXJhQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbjogcG9zIH0gPSB0aGlzLmNhbWVyYTtcbiAgICAgICAgdGhpcy5jYW1lcmFDaGFuZ2VDYWxsYmFjayh7IHg6IHBvcy54LCB5OiBwb3MueSwgejogcG9zLnogfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJheWNhc3Rlci5wYXJhbXMuUG9pbnRzLnRocmVzaG9sZCA9IERFRkFVTFRfUE9JTlRfVEhSRVNIT0xEO1xuXG4gICAgdGhpcy5kb21fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuICB9XG5cbiAgY2FtZXJhQ29vcmRzKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb246IHBvcyB9ID0gdGhpcy5jYW1lcmE7XG4gICAgcmV0dXJuIHsgeDogcG9zLngsIHk6IHBvcy55LCB6OiBwb3MueiB9O1xuICB9XG5cbiAgY2FtZXJhVGFyZ2V0KCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSB0aGlzLnRyYWNrQ29udHJvbHM7XG4gICAgcmV0dXJuIHt4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnksIHo6IHRhcmdldC56IH07XG4gIH1cblxuICByZXNldFZpZXcoKSB7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnJlc2V0KCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMuY2FtZXJhLnVwLnNldCgwLDEsMCk7XG4gIH1cblxuICByZXN0b3JlVmlldyh4ID0gMCwgeSA9IDAsIHogPSAwLCB0YXJnZXQpIHtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMub2JqZWN0LnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0LnNldCh0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC56KTtcbiAgICB9XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcmVzZXRBcm91bmRGaXJzdE5ldXJvbih7ZnJvbnRUb0JhY2t9ID0ge2Zyb250VG9CYWNrOiB0cnVlfSkge1xuICAgIGNvbnN0IG5ldXJvbnMgPSB0aGlzLnNjZW5lLmNoaWxkcmVuLmZpbHRlcihjID0+IGMuaXNOZXVyb24pO1xuICAgIGlmIChuZXVyb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IG5ldXJvbnNbMF0uYm91bmRpbmdTcGhlcmUuY2VudGVyO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVDYW1lcmFQb3NpdGlvbih0aGlzLmZvdiwgbmV1cm9uc1swXS5ib3VuZGluZ1NwaGVyZSwgZnJvbnRUb0JhY2ssIHRoaXMubWF4Vm9sdW1lU2l6ZSk7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudXBkYXRlKCk7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0LnNldCh0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC56KTtcbiAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICAgIHRoaXMuY2FtZXJhLnVwLnNldCgwLDEsMCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETzogYWx0IGNsaWNrIHNob3VsZCB0YXJnZXQgbWVzaGVzIGFuZCBjZW50ZXIgdGhlIG9yYml0IGNvbnRyb2xzXG4gIC8vIG9uIHRoZW0gaWYgaW50ZXJzZWN0ZWQuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5kb21fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIG1vdXNlLnggPSAoKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gdGhpcy5XSURUSCkgKiAyIC0gMTtcbiAgICBtb3VzZS55ID0gLSgoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIHRoaXMuSEVJR0hUKSAqIDIgKyAxO1xuXG4gICAgdGhpcy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShtb3VzZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoXG4gICAgICBbXS5jb25jYXQodGhpcy5zY2VuZS5jaGlsZHJlbiwgdGhpcy5zY2VuZU9uVG9wYWJsZS5jaGlsZHJlbiksXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIGNvbnN0IHBvaW50cyA9IGludGVyc2VjdHNcbiAgICAgIC5maWx0ZXIobyA9PiBvLm9iamVjdC50eXBlID09PSBcIlBvaW50c1wiKVxuICAgICAgLmZpbHRlcihvID0+IG8ub2JqZWN0LnVzZXJEYXRhLm1hdGVyaWFsU2hhZGVyLnVuaWZvcm1zLmFscGhhLnZhbHVlID4gMC4wKVxuICAgICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICAgIGEuZGlzdGFuY2VUb1JheSA9PT0gYi5kaXN0YW5jZVRvUmF5XG4gICAgICAgICAgPyBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZVxuICAgICAgICAgIDogYS5kaXN0YW5jZVRvUmF5IC0gYi5kaXN0YW5jZVRvUmF5XG4gICAgICApO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3RPYmplY3QgPSBwb2ludHNbMF07XG5cbiAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgaWYgKHRoaXMub25fdG9nZ2xlX25vZGUpIHtcbiAgICAgICAgICBjb25zdCBzYW1wbGVOdW1iZXIgPVxuICAgICAgICAgICAgaW50ZXJzZWN0T2JqZWN0Lm9iamVjdC51c2VyRGF0YS5pbmRleExvb2t1cFtpbnRlcnNlY3RPYmplY3QuaW5kZXhdO1xuICAgICAgICAgIGNvbnN0IHRyYWNpbmdJZCA9IGludGVyc2VjdE9iamVjdC5vYmplY3QucGFyZW50Lm5hbWU7XG5cbiAgICAgICAgICB0aGlzLm9uX3RvZ2dsZV9ub2RlKHRyYWNpbmdJZCwgc2FtcGxlTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMudHJhY2tDb250cm9scy5jbGlja2VkKSB7XG4gICAgICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnRhcmdldCA9IHBvaW50c1swXS5wb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uX3NlbGVjdF9ub2RlKSB7XG4gICAgICAgICAgY29uc3Qgc2FtcGxlTnVtYmVyID1cbiAgICAgICAgICAgIGludGVyc2VjdE9iamVjdC5vYmplY3QudXNlckRhdGEuaW5kZXhMb29rdXBbaW50ZXJzZWN0T2JqZWN0LmluZGV4XTtcbiAgICAgICAgICBjb25zdCB0cmFjaW5nSWQgPSBpbnRlcnNlY3RPYmplY3Qub2JqZWN0LnBhcmVudC5uYW1lO1xuXG4gICAgICAgICAgdGhpcy5vbl9zZWxlY3Rfbm9kZSh0cmFjaW5nSWQsIHNhbXBsZU51bWJlciwgZXZlbnQsIHBvaW50c1swXS5wb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhbmltYXRpb24gbG9vcFxuICBhbmltYXRlKHRpbWVzdGFtcCA9IG51bGwpIHtcbiAgICBpZiAoIXRoaXMubGFzdF9hbmltX3RpbWVzdGFtcCkge1xuICAgICAgdGhpcy5sYXN0X2FuaW1fdGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRpbWVzdGFtcCAtIHRoaXMubGFzdF9hbmltX3RpbWVzdGFtcCA+IDUwKSB7XG4gICAgICB0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICBpZiAodGhpcy5hbmltYXRlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuc2hvd0F4ZXMpIHtcbiAgICAgICAgdGhpcy5heGVzQ2FtZXJhLnBvc2l0aW9uLmNvcHkoIHRoaXMuY2FtZXJhLnBvc2l0aW9uICk7XG4gICAgICAgIHRoaXMuYXhlc0NhbWVyYS5wb3NpdGlvbi5zdWIoIHRoaXMudHJhY2tDb250cm9scy50YXJnZXQgKTtcbiAgICAgICAgdGhpcy5heGVzQ2FtZXJhLnBvc2l0aW9uLnNldExlbmd0aCggMzAwICk7XG4gICAgICAgIHRoaXMuYXhlc0NhbWVyYS5sb29rQXQoIHRoaXMuYXhlc1NjZW5lLnBvc2l0aW9uICk7XG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLy8gcmVuZGVyIHRoZSBzY2VuZVxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblxuICAgIGlmICh0aGlzLm9uVG9wKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyRGVwdGgoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lT25Ub3BhYmxlLCB0aGlzLmNhbWVyYSk7XG4gICAgaWYgKHRoaXMuc2hvd0F4ZXMpIHtcbiAgICAgIHRoaXMuYXhlc1JlbmRlcmVyLnJlbmRlcih0aGlzLmF4ZXNTY2VuZSwgdGhpcy5heGVzQ2FtZXJhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhIG5ldXJvbiBmcm9tIGFuIHN3YyBmaWxlIGludG8gdGhlIGN1cnJlbnQgc2NlbmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZSAtIHVuaXF1ZSBuYW1lIGZvciB0aGUgbmV1cm9uXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY29sb3IgLSBoZXhhZGVjaW1hbCBzdHJpbmcgdG8gc2V0IHRoZSBjb2xvciBvZiB0aGUgbmV1cm9uXG4gICAqIEBwYXJhbSB7SlNPTn0gbm9kZXMgLSBKU09OIHN0cmluZyBnZW5lcmF0ZWQgZnJvbSBzd2NQYXJzZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlQ2FtZXJhPXRydWVdIC0gU2hvdWxkIHRoZSBjYW1lcmEgcG9zaXRpb24gdXBkYXRlXG4gICAqIGFmdGVyIHRoZSBuZXVyb24gaXMgYWRkZWQgdG8gdGhlIHNjZW5lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvblRvcGFibGU9ZmFsc2VdIC0gSWYgdHJ1ZSwgdGhlIG5ldXJvbiB3aWxsIGJlIHJlbmRlcmVkXG4gICAqIG9uIHRvcCBvZiAoaS5lLiwgbm90IG9jY2x1ZGVkIGJ5KSBvdGhlciBuZXVyb25zIHRoYXQgaGFkIG9uVG9wYWJsZT1mYWxzZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9udFRvQmFjaz1mYWxzZV0gLSBpZiB0cnVlLCB0aGVuIGxvb2sgZG93biB0aGUgWi1zdGFjayBmcm9tIHBvaW50IDBcbiAgICogQHJldHVybnMge251bGx9XG4gICAqL1xuICBsb2FkTmV1cm9uKGZpbGVuYW1lLCBjb2xvciwgbm9kZXMsIHVwZGF0ZUNhbWVyYT10cnVlLCBvblRvcGFibGU9ZmFsc2UsIGZyb250VG9CYWNrPWZhbHNlKSB7XG4gICAgY29uc3QgbmV1cm9uID0gdGhpcy5jcmVhdGVOZXVyb24obm9kZXMsIGNvbG9yKTtcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IGNhbGN1bGF0ZUJvdW5kaW5nQm94KG5vZGVzKTtcbiAgICBjb25zdCBib3VuZGluZ1NwaGVyZSA9IGNhbGN1bGF0ZUJvdW5kaW5nU3BoZXJlKG5vZGVzLCBib3VuZGluZ0JveCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gYm91bmRpbmdTcGhlcmUuY2VudGVyO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY2FsY3VsYXRlQ2FtZXJhUG9zaXRpb24odGhpcy5mb3YsIGJvdW5kaW5nU3BoZXJlLCBmcm9udFRvQmFjaywgdGhpcy5tYXhWb2x1bWVTaXplKTtcblxuICAgIGlmICh1cGRhdGVDYW1lcmEpIHtcbiAgICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgICAgIHRoaXMudHJhY2tDb250cm9scy50YXJnZXQuc2V0KHRhcmdldC54LCB0YXJnZXQueSwgdGFyZ2V0LnopO1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgIH1cblxuICAgIG5ldXJvbi5uYW1lID0gZmlsZW5hbWU7XG4gICAgLy8gc3RvcmUgbmV1cm9uIHN0YXR1cyBhbmQgYm91bmRpbmcgc3BoZXJlIGZvciBsYXRlciB1c2VcbiAgICAvLyB3aGVuIHJlc2V0dGluZyB0aGUgdmlldy5cbiAgICBuZXVyb24uaXNOZXVyb24gPSB0cnVlO1xuICAgIG5ldXJvbi5ib3VuZGluZ1NwaGVyZSA9IGJvdW5kaW5nU3BoZXJlO1xuICAgIGNvbnN0IHNjZW5lID0gb25Ub3BhYmxlID8gdGhpcy5zY2VuZU9uVG9wYWJsZSA6IHRoaXMuc2NlbmU7XG4gICAgc2NlbmUuYWRkKG5ldXJvbilcbiAgfVxuXG4gIC8vIHVzZSBvblRvcGFibGU9dHJ1ZSB0byBjb3JyZXNwb25kIHRvIGxvYWROZXVyb24oLi4uLCBvblRvcGFibGU9dHJ1ZSlcbiAgbmV1cm9uTG9hZGVkKGZpbGVuYW1lLCBvblRvcGFibGU9ZmFsc2UpIHtcbiAgICBjb25zdCBzY2VuZSA9IG9uVG9wYWJsZSA/IHRoaXMuc2NlbmVPblRvcGFibGUgOiB0aGlzLnNjZW5lO1xuICAgIHJldHVybiAoc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGZpbGVuYW1lKSAhPT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8vIHVzZSBvblRvcGFibGU9dHJ1ZSB0byBjb3JyZXNwb25kIHRvIGxvYWROZXVyb24oLi4uLCBvblRvcGFibGU9dHJ1ZSlcbiAgdW5sb2FkTmV1cm9uKGZpbGVuYW1lLCBvblRvcGFibGU9ZmFsc2UpIHtcbiAgICBjb25zdCBzY2VuZSA9IG9uVG9wYWJsZSA/IHRoaXMuc2NlbmVPblRvcGFibGUgOiB0aGlzLnNjZW5lO1xuICAgIGNvbnN0IG5ldXJvbiA9IHNjZW5lLmdldE9iamVjdEJ5TmFtZShmaWxlbmFtZSk7XG4gICAgc2NlbmUucmVtb3ZlKG5ldXJvbik7XG4gIH1cblxuICBzZXROZXVyb25WaXNpYmxlKGlkLCB2aXNpYmxlLCBvblRvcGFibGU9ZmFsc2UpIHtcbiAgICBjb25zdCBzY2VuZSA9IG9uVG9wYWJsZSA/IHRoaXMuc2NlbmVPblRvcGFibGUgOiB0aGlzLnNjZW5lO1xuICAgIGNvbnN0IG5ldXJvbiA9IHNjZW5lLmdldE9iamVjdEJ5TmFtZShpZCk7XG4gICAgaWYgKG5ldXJvbikge1xuICAgICAgbmV1cm9uLnZpc2libGUgPSB2aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE86IGdldCB0aGlzIHRvIHdvcmsgd2l0aCB0aGUgcGFydGljbGUgbW9kZVxuXG4gIHNldE5ldXJvbkRpc3BsYXlMZXZlbChpZCwgb3BhY2l0eSkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09IFwicGFydGljbGVcIikge1xuICAgICAgY29uc3QgbmV1cm9uID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuXG4gICAgICBpZiAobmV1cm9uKSB7XG4gICAgICAgIG5ldXJvbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQudXNlckRhdGEubWF0ZXJpYWxTaGFkZXIpIHtcbiAgICAgICAgICAgIGNoaWxkLnVzZXJEYXRhLm1hdGVyaWFsU2hhZGVyLnVuaWZvcm1zLmFscGhhLnZhbHVlID0gb3BhY2l0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRDb21wYXJ0bWVudChpZCwgY29sb3IsIGdlb21ldHJ5RGF0YSwgdXBkYXRlQ2FtZXJhPXRydWUpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTG9hZGVyKCk7XG4gICAgbGV0IHBhcnNlZCA9IGxvYWRlci5wYXJzZShnZW9tZXRyeURhdGEpO1xuICAgIHBhcnNlZCA9IGFwcGx5U2VtaVRyYW5zcGFyZW50U2hhZGVyKHBhcnNlZCwgY29sb3IpO1xuICAgIHBhcnNlZC5uYW1lID0gaWQ7XG5cbiAgICB0aGlzLnNjZW5lLmFkZChwYXJzZWQpO1xuICAgIGlmICh1cGRhdGVDYW1lcmEpIHtcbiAgICAgIHRoaXMuY2VudGVyQ2FtZXJhQXJvdW5kQ29tcGFydG1lbnQocGFyc2VkKTtcbiAgICB9XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBsb2FkQ29tcGFydG1lbnRGcm9tVVJMKGlkLCBjb2xvciwgVVJMLCB1cGRhdGVDYW1lcmE9dHJ1ZSkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKTtcblxuICAgIGxvYWRlci5sb2FkKFVSTCwgb2JqZWN0ID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGlkKTtcbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIGNvbnN0IHNoYWRlZE9iamVjdCA9IGFwcGx5U2VtaVRyYW5zcGFyZW50U2hhZGVyKG9iamVjdCwgY29sb3IpO1xuICAgICAgICBzaGFkZWRPYmplY3QubmFtZSA9IGlkO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChvYmplY3QpO1xuICAgICAgICBpZiAodXBkYXRlQ2FtZXJhKSB7XG4gICAgICAgICAgdGhpcy5jZW50ZXJDYW1lcmFBcm91bmRDb21wYXJ0bWVudChzaGFkZWRPYmplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJ0bWVudExvYWRlZChpZCkge1xuICAgIHJldHVybiAodGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpICE9PSB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgY29tcGFydG1lbnQgb2JqZWN0LCBwbGFjZSB0aGUgY2FtZXJhIGZvY3VzIG9uIGl0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGFydG1lbnQgLSBUaHJlZSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb21wYXJ0bWVudFxuICAgKiBAcmV0dXJuIG51bGxcbiAgICovXG4gIGNlbnRlckNhbWVyYUFyb3VuZENvbXBhcnRtZW50KGNvbXBhcnRtZW50KSB7XG4gICAgY29uc3QgYm91bmRpbmdCb3ggPSBuZXcgVEhSRUUuQm94MygpLnNldEZyb21PYmplY3QoY29tcGFydG1lbnQpO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChib3VuZGluZ0JveC5taW4ueCAtIDEwLCBib3VuZGluZ0JveC5taW4ueSAtIDEwLCBib3VuZGluZ0JveC5taW4ueiAtIDEwKTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMudXBkYXRlKCk7XG4gICAgY29uc3QgYm94Q2VudGVyID0gYm91bmRpbmdCb3guZ2V0Q2VudGVyKCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnRhcmdldCA9IGJveENlbnRlcjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgdW5sb2FkQ29tcGFydG1lbnQoaWQpIHtcbiAgICBjb25zdCBzZWxlY3RlZE9iaiA9IHRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGlkKTtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZShzZWxlY3RlZE9iaik7XG4gIH1cblxuICBzZXRDb21wYXJ0bWVudFZpc2libGUoaWQsIHZpc2libGUpIHtcbiAgICBjb25zdCBjb21wYXJ0bWVudCA9IHRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGlkKTtcblxuICAgIGlmIChjb21wYXJ0bWVudCkge1xuICAgICAgY29tcGFydG1lbnQudmlzaWJsZSA9IHZpc2libGU7XG4gICAgfVxuICB9XG5cbiAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgdGhpcy5IRUlHSFQgPSBoZWlnaHQ7XG4gICAgdGhpcy5XSURUSCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0QmFja2dyb3VuZChjb2xvcikge1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yLCAxKTtcbiAgfVxufVxuIiwiLy8gQ29udmVydCBzd2MgZmlsZSBkYXRhIGludG8ganNvbiBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBzd2NQYXJzZXIoc3djRmlsZSkge1xuICAvLyBzcGxpdCBieSBsaW5lc1xuICBjb25zdCBzd2NBciA9IHN3Y0ZpbGUuc3BsaXQoXCJcXG5cIik7XG4gIGNvbnN0IHN3Y0pTT04gPSB7fTtcblxuICBjb25zdCBmbG9hdCA9IFwiLT9cXFxcZCooPzpcXFxcLlxcXFxkKyk/XCI7XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgIFwiXlsgXFxcXHRdKihcIiArXG4gICAgICBbXG4gICAgICAgIFwiXFxcXGQrXCIsIC8vIGluZGV4XG4gICAgICAgIFwiXFxcXGQrXCIsIC8vIHR5cGVcbiAgICAgICAgZmxvYXQsIC8vIHhcbiAgICAgICAgZmxvYXQsIC8vIHlcbiAgICAgICAgZmxvYXQsIC8vIHpcbiAgICAgICAgZmxvYXQsIC8vIHJhZGl1c1xuICAgICAgICBcIi0xfFxcXFxkK1wiIC8vIHBhcmVudFxuICAgICAgXS5qb2luKFwiKVsgXFxcXHRdKyhcIikgK1xuICAgICAgXCIpWyBcXFxcdF0qJFwiLFxuICAgIFwibVwiXG4gICk7XG5cbiAgc3djQXIuZm9yRWFjaChlID0+IHtcbiAgICAvLyBpZiBsaW5lIGlzIGdvb2QsIHB1dCBpbnRvIGpzb25cbiAgICBjb25zdCBtYXRjaCA9IGUubWF0Y2gocGF0dGVybik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBpZCA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG5cbiAgICAgIHN3Y0pTT05baWRdID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgdHlwZTogcGFyc2VJbnQobWF0Y2hbMl0sIDEwKSxcbiAgICAgICAgeDogcGFyc2VGbG9hdChtYXRjaFszXSksXG4gICAgICAgIHk6IHBhcnNlRmxvYXQobWF0Y2hbNF0pLFxuICAgICAgICB6OiBwYXJzZUZsb2F0KG1hdGNoWzVdKSxcbiAgICAgICAgcmFkaXVzOiBwYXJzZUZsb2F0KG1hdGNoWzZdKSxcbiAgICAgICAgcGFyZW50OiBwYXJzZUludChtYXRjaFs3XSwgMTApXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcmV0dXJuIGpzb25cbiAgcmV0dXJuIHN3Y0pTT047XG59XG5cbmV4cG9ydCBjb25zdCBOT0RFX1BBUlRJQ0xFX0lNQUdFID1cbiAgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQVlBQUFERFBtSExBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVIM2dFSERRdzNXSWUvcGdBQUFCMXBWRmgwUTI5dGJXVnVkQUFBQUFBQVEzSmxZWFJsWkNCM2FYUm9JRWRKVFZCa0xtVUhBQUFnQUVsRVFWUjQydXk5ZTVEdDJWWGY5MWxyLzM3bmROODdkKzY4cnpSNlhiMlFoSkFFd2hnYnNEQmdYaktKY2NCMnlzZzRmc1FwS29tSlE4cXBjaDUrVkpIWWlaT1VFNXVLVTBVU3U0d2R1MGpaQkl0bllvT05EVWlBRUNDRXBCbHBHS1RSM0ptNU0zZnVxN3ZQNzdmWHloOTc3ZjNidjlOOU5aSXN3Qmg2cXVkMm4zUDZQSDdyOVYzZjlkakN2MkZmcjRlSGZnbWVBdmc2ZUh1RzQ3ZkNWNDl3OEZINHdEZkJmM1FBNTM1VytPa2J6clhQaHM4N2hNUDN3RS9laEdjdndvT2ZCVy8rQWZpN2o4SjdYZ0Z2ZmdvZWVRSWVlUkorNVNQdy9MOUoxMHQrQTc1ZjcyOTRKVno4Q054NEM3enN5K0NiL3p6OHBWK0JKMzZTU3ovN0RjcmJCdzY1WmR1VDg0bnRuRUVPY2ZKR1pGZisza2ZJaDZBM0lSdm9BYTU1Snhoa1R0akI5T0Y4OVBnSDRBT1BjT1huQWIwQTkvNGMvSk4zd3c4L0NzLzhsZ0w4R241OUZqendRWGptVytBL2V3WSs4bnZoajM4Umw3NzRhVDI4K2taNFZiSXQrZndHejhCdWRObU9va2VRMDBnNkQxd0hTd1A2TURCUmZNVmRrTzhIbmdkNUZxWnhabnNJeHNSOGZVTFRDSGxDZE9MRTJHMzF4aVlEWmtlOG55c2YrYWZ3L1Q4Qi8ramQ4TSt1d3NsdktjQm4rT3ZsY1BlM3d2LytrL0RkZnd2KzNrOXo2WW5QVHp3OCt6M010aUdsRWZXUm5jQ29oekNCdkJIOFpHQzRQOEZiNFRoQmVtQkFYcUhNendJN0dGNEdITUQwVWREYndJdEJNY2FmaDN3RjB2RU1KekJiWnY0bytBZG41SGhHbUhEQXg5c0F6Tk1PT09HakhEM3p2M0RsMno4RVAvSVVmUFNEdndHOHc3L1dDdkFtZUVrRy95TDQvZjhOL1BXQnl3aGJIOWpJd09nbmpITEF5TXdBbnpld3U3WGxucStIV3c4b0hDUjRDZmh4UWpReFg0UjhBcHRia004blhFQ09ZTWd3bnkrdmwwNHllVXlrVFVZY3NtVzRtVWxITUZqR01mSlZ4ZDl2OEs0VDdCSHdQT1BNd0cwRStCQzNQdlpCVGo3d0NFZS85QVJYSHZrWVBQSk8rTjdmVW9CUDRlc044UEl2ZzI5NkIveXBOM0RwOG5XOTUvWkYyNXlEYzJ3VlpqdEU3aDRZSHR3eXZVVVp2Z0NtZXhQNmNHSTZUdmlZMEdOSXh3bFhYY0JEU2dCWUVqeEJUakRzd0szY3J3cDY3UGdJbmtCeWpqc2dZeUFaMVF6blFXUUhOelA1ZzRiLzFBenZBbi9pQkdObTRqYk94STdkeWZ1NTl1Ry96WlcvL05Qd2d4K0VLNytsQUovZzY3UGg0YytGci96VDhGZGV3NlZMRys3QjBuazhuMk1BMHNFQnUrTXRkMzJkc250TFl2Tnc0dml1aEE4SjE0UWNqMnh2d0R5QUhReW9nYWwycURFdGtoYkkvWXRyRVhveVEyWklsckdVMEp6QkRaTU1DdUM0WkVpR3A0eHRNenBrMkdYc2lRdy9zMlArbWN6OCtERWNUekJQa0cvaGRzSy80TEgzL2pYNDk1K0FYMzQwTXBYZnpBclFFUDFYd1ZkOUNYelRBL0RndjgzbHJ6M2dBcTZqSnpzbm1nNVFFdktpRGNNckVzTTNKeWJid0dFaVoyWFlKWklMbVlRblJTeUJROTZPNWRtdGZNVHFDY29uVmxERFVjQ1FIUGRoTU5UYklMbVJCZFFkcElRRnNQSjhhUUl5ZVhEUWpDZkQySUdCUHJ2REhzM1lMK3lZZi9FRWUzcG1sb25iNmZidXgrY2I3L3FYMDJQdi9KdndsMzh6SzRBQS9ucDQ1WDhJMy9GRjhLWDNjdm53Z0FzTWpOamhPWWI1Z0NGdjJWNGN5WjhQNlFzM2pDL2ZNQjhwVG1Md2diUlRSQkluRzhVMUFZSllFYkNyNGhLQ1ZjRWs0VjZjUUpoeWtXVnhFODBMRkk5dmNWK09OK3U0V0ZFTWgvSWlEdVR5OTVMSjRSRTh6ZGgySWxtRzUzYWNQSnJ4SDl1UjM1Mng2UmpTUlBiYllEZjRHenoyUC80d2ZPZGo4TWhWMlAxbVVnRDlrL0FYdnhYK1MrT1NIWEtQSE9wNVNaeGpzQU5HdHNoRzBkZHVPUGkzTnRqREl6NGs1R2dJbVd5eERjWHRUd2wxYlVJVUY1eVJQQ2l1WUNLb2c4VDlyb29sdzhNVENFV080UXhRdFZDaVVBNGdtWmN3TUZnSkZXUVFMMTVFWnFRR0daMktNdWlFYlJ5R0NUbVhRWFlNVDJSdS9jUUUvL2lFK2RveDgzU2J4NW1lK2dsdS9Jc2Y0TEgvOVlmZ2gzNVRLTUFyNGFIZkRuLzB6M0Rwdjd2QUlZbjcyT2c1TmpZd2NKN05ScEhkSWNNM2JCaStSc20zQnJhN1JKSG1DRDZFOVE1aHppbWtGMWJzS1Q2WmtwWGlCVlJ3QkN4Y1FDcUN6T0Voa3BjcklkbWFJZ2lPS21BZUY4bEszTmRpL1NiZ1k5ekdYTHlEV0hpTnpKUU1ob3d3a1hWR2JTTFBtWlAzN3RCL05yRjc3d2xteHdpM21iakZWYTVkKytOY2VldE51UGtSZVByWFNoN3AxMUQyMjdmQlYzNEQvTTkvZ010LzVDN3VHelo2THlwM3NVbUhESFlPWVl0ZlBtVDdqaTBIYngzeHExczJlUVBUQVRLTnlEd3dUQ095MjRLTnlEU1M1b1RPQTh3YjBqU2d1NFRtQWM4RE9nMW9Ub2dOK0R3aWVRQWZNRXU0RFlnTlNFNUlUbUFKc1lSTVF6eXVoQnF4QVptMXBBejE4WlpRRzRwU1pTMlBJU0Z6Q2dWTU9NSmdBaVJ5RXFhdG9vY0ozcVFjZktsdytFYkZkd2w3ZXNEblF3NTAyTnpyNTE1L2dXc3YvU0Q4MkVrRkcvK21lSUIvRDc3akQzTHBXKzdqSHVBODIvRnVOcmJsTUcvWWpCdlN0T0hnZDR3Yy9xNEJMbzNvOFFpNXVIaFFVazdnSTRKR1ZCNFFVeHdKdDU5cXZnWkp5UWhJUERia2g0Q1RTbmh2bHI0NER3QXhpMWNvaUo4aC9zVVE4d2dMQnNueFRYbUNyQVl5UnlhUnk4OHBoemVZSVJlOGtMY1RNT0dibWF6SHpFL3NtSDRrTS8zRUVmblpHVGppbUd2emQzTHRiL3dEcnZ6WGo4UDEzOUFLY0Rla2grRnovekQ4N2MvbDhtY2Zjc0VQT1Njamg1dy9PTS9tZU9SZ3M0SGRoc08zak56MTd3ekFDSGxreUFtT0ZWSUNIWXNDNUFGTUVSVThyRXRxL0hjSkhDREY1WXN1S1dBeFZKQ2lNQjQrWDFncUN4SjJXK0JwRWF3NGFQenJNa09xVU1PSyt4L29nS0NYdEZCek9JRVp4TWxwaHJURGt3RVpIeWZtemNTOHlZanVPTFJNZXVTSXEvL1h4TzQ5dDRBalptN3pmbTU4NUsvdzJCLzhsL0JUdjJGRHdCK0YvK00vZ085NGtNc1BqdHpuSXhka3k5MXNPY2N3YnhrNVlFem5TRzhZT1ArTmg0ekhCK2k4SVIxdmtOc2JrbzlvM2tBZWtOMElreGIzUENWazJoU1hlektDVmVVWXlzL1RnTXdKenhxa3dJRG5oRnR4QlRLUDVXL25GSDhyU0I2UVNjdnQwd0NlUXVrU2tnRXB0MG1XRWdLeVFwYmk4aTNjQ3pVTkxjb29XWXQza2hFeFI3eGdHYzBEa2gzM2dTazVKdytNeUJ0aHVEQ3crK2hJT2xidXgrOTlqbnU1emRWSFAvNnJTQ24vcW5tQUw0RS85cFh3N1ovTDYxNDhjNTd6M00yR0xlZjBrQVBic0dXRE1mTFFHelljL3U2UmROL0E4UHhRMFA0dXFMak5nQnduRkNseE9nL2w0cEpBcEFCQ3F5eE9lQUFWRUNsb1A5NkxVenhCRnFINTl5VEYraVZFNXlXd05MZVF3Z05nQ0pDVG9mV0J5YkZJQlZVTnhNZ0JDUE1JUG1TRUdmV01EWTVyaG1IR1Uwa1gwUjIrbVRHWmNaMGdUZmpoRHZLTzI5KzM0K1ozVFF6NUZpZGNCN3ZGTC9DQlgvcEQ4SWJmRUI3Z3BmQ0tiNEIvOEhZdS9hY1A4YW9Md2dXVWV6akhJWWt0Z3h5eTlTMkprY05MaDl6M3V3N1Fpd055YzhSdHhHMkR6aHRrTjVDT3g0SUI1azFSaXJCSXByRlk5aHdXbmhQa0VYWUtQdUFuQlpESlZBQ2V1d0xEWXBWWml6ZVppNmZBQW10WVdIZ09RR2VDNUJISkdtQlNTeXl4Q0VHV2NFc0JCcVY0Q3hmU3J1QVNJeFd5eWJTQWpocVBUQ0lFU2N0aVpGSVFZZk1tNWNKYmpKT1BKM1pYTmlTVWU3bnJnUk9HM2M5eTY4YyswMGI3R1ZlQU44QTd2b0xMLzdGd24yKzVLTXJkYkRsZ1NPY1lmY1BCY01CZ0c0Yk5JUSs5Yll1OWNpUTluNURkQVRxUHlMeEJkb0hHcDRJSFpCNkt1OTROTUk4d0RmaWNZQzdDSVE5TitFVXBTckMyS2VGVEtuOS9vc2d1bFZDUXkrUEVVaEhvckdpV2d2Ym5VQm9yNFVCbndWRXNKOFFrWEx4aW5pSURpTlRURkZ3Ums1S3lpdUt5RUZPbGZLaTRoOENsS0pUNGNwODRIQTJKazRjUzZjVUpmUTVPcmlzVHl0M0dpNDRabnB5NTlmUTF1UDJ2V3dnUXdQODAvTXhydWZ6bURSZFM0aUliRGpqZ2tLMGVjbWdienJIaGtBTzJPbkxYNXlUdS8vSVJib3dNUndsU1NiRzB4dWdzeFdvWndsVW4wcTR3ZklXNjFiQWtiY3lmbVVRYVg2MHRRR0NpRVVVZWlEK0xGdVl2Qllaam9YblJFaUhRY1A4UzJZQVU5NSt3Q1AxV3lLQWhzb1BCNHNucTdibUVockZ3QXlWem1MR2hNSVpvQ1F1V1NraHdkbVF4MG5pRVhKeTQ5ZmdSei85WE8velpJMlJ6ak8rZTU5dTQ4ZlUveUdQZjg2K2JBb3h2Z2JmL0VTNy93d1B1RStNY0c4NXpqZzBISEhMQWh2UGpobTBlR2UyQUIxK1d1UERXa1lNSFJ1Um9KRTBES1FlQXk2bUFwYkMwSXVnUysxTldUQkthQlRSaEJ1cUtVTkE5S0NaYXM3WlFqT0p1Qy9NbmpmV3RWVDVmZmtSa0tReUpMT2pCVWdVSmhTaFNNalo2UWY2akkyUkk0SVBCSmhleVNBeExqbW91QWg4TjBveVBocVZjYWdtRDRlT01wUWtmSmp4TjVESGptd25rbU4yNW1idWZtM2ptTzI1eTR5ZDNKRzd4UE0velFaNTZ6N2R5NVF1dTc5V3pmdDFDd0p2aHEvNFlsLzZ4Y3A4SUYxQTl6MFkzSkRsa2tBTUdQZURjdUNWTkJ3Z2pEM3p4bHMzNUxiSXJzVjNtQWM4bHJydUZCNWhxckU5QjRsVFhYWDczdVNpTDI0QmxYVng3VnBnQ0syU0ZXWEJMOFJqQmM0b3dFU0hBTko1YmNkT0M3aWRnTHE3Y2M5RVNNUzFLT1FzK0srNDFBNURtL3BtTFY1S3BlQ2tIM0V0S2lwZFFRaTVxVldvS1JmWGNTeGdSMGFLZ0xvZ1ZMSEh6ZmllOVhzaFBPdFBISURGd0w4T2xxNXk3bnJuMjVETnc3ZGRWQWI0Qy92enY0UEtmdWNoOUQ4RkZsUE9NY3NobzV4bDh5eUJidG1sYjRydHYyRjdjY3QvbkRPanhBQ2NEc2t1d0c1RnBLTEY4R2lQdEd6QlArRnhDQTd1RVZiQ1dRNkFScnlWSDZoYkNMc0N3eEczM1ZJU1JTeXBZUUZ6OXQ0QTZtVUxRSm5ndWlsRndnSlJ3TTljWUQ4RXZCek1ZcVdDQVFuRUprRmNVeExNV1lZZVNXQWplU2JnVTRDaXFCVkFHTGUxTkpNVU42UXgrLzBDNlc1bmVwL2lSa0YzbFMvQ3Z2Z2Q1L2YvTHJiL3o2NllBZDhQaE4zUHAvNzdFZlM5ekxqSnduc1NHSkFjTXNtWDBMWU52MlRJdzJCYlZEZmUrT25IdTRnYmZqY2l1Q0pyZGdPWXg4dmVoQ05OU1dHdms4Rjd5ZHJlQzVuMHVsS3hQNVdjTDZ5N1dHZjhHd0hNTHoxQVZvUCsyc0dKWFpLcGNRUUEvSzhDUHJKaEw1UEZTQUdGZ0VITXByK2NCQ0MyUjNZdEhjQ25XWEtwU3FKV2Z4U2doU3dRM0RTamp1Q2d1anFEQkV6ZzJLRDQ1NDZ1ZHpYbm41bnNVblFWQi9TVU1yM2tLZWZ5RDNQclpYM01GZUJXODhTOXk2V1BuZUdnTEYwbWNaMHdiUmpsRTdUeWpiMGhzR2RtUVpHVHdEZWZ2SHJuNDZnM0ppNlhyTkJiM0htaWRYYVJsODRCUFFleEVPdWRUNGU0OWNFSzFjdVlRS2tObjFTVTlxeHcvdVNwRGNkdG1pbFVFUGxYWFhSV2lGSnJjcExqOU9SWEJlTEZVbjhPZFd5a3dsZENndUhteGJPdW82ZWhGd0lwYmQ1ZnlZNEJYbDFLdExKeEdxVVc3bDVBZ2xrQzlKSXNtNUF5OFhManZwYzZ6NzFMY1JBVGxUUXkvKzkwODlWMVhQMDNhK05OU2dEZkNiM3N6Zk11TGVlbHZ5MXp3RGVkRk9FL3lBd1k1WVBRTnlwYUJEWW1Cd1Rkc2RlVDgvUVBuTGczNGNYSDVQby9vWElUcjgxZ3NlaTdLMEw3blNOMUNvRFlsUE5nNHN3RzNFRTUxOTFaaXZJVlZ1dFh2OWUvRTMrSEZOUk8zUzdoMm02dnJEaXVORkUreU5PclpxeUwwR0NCNFo0L2VoSUlWdEhrRXo4RVo0S1ZIUWF5UTBBVVVOTERxNnFDcFBBNUJkc0owRG5pUklDanpoeUJuWTRNZjdManJnbkgxNlNmZ281K3FMSWRQdysxZi9FUHdEMTdNNVZlTzNNUE1vYUJiRWdteEE1UXRJMXNTR3daR0VpTXdrb2VSZERoZzg0Z2NKZHdLc1pOSkRITVI4RXlwckduV2hlY1BxM0lFOTZIRjJOeGd2Q3lkSEI2M0I5SFNXRC9WUXU5WDRGWFJ2OFdGbHZqWGFzM0F3M0M5SkNLcDNxZkJGbnA1alp4UUN0cVBJaUNTQlU4S1BwT1N3cFN4c1pTR01Zbm5LOVN4ZWliYkJ2ZU0yUVpzTGtvMUxQbVpzY1dsSkNIbm56RjJGektIWHdvMzM1T1JEeDRDOEExTWYvSzF2TzUzdnBzUGZNNnZxZ2U0RzdaZkN0Lyt4VnorbXN3RmpMc1pPWS82QWNrUFNSd3d5SWo0bG9FQlpjUElpREJ5N2pCeC9vRU5nd1N2WHhtNFhRRndia1B4Q3JtZ2ZMS1UyM0tKeFdaREEzUXlseGh2dFZvWW9Nd0MwRW5sNmFjSUVWTlk3UlJoSUZpN2tpN1dYb09JelJYNFJkeXVnQTRUWkphQ0tZUmk5Yk5nRVJvS2tSUEtGN1MwR3dYc2VYaXA2Rk1vYUU5YWhDQUlJNjlkY2g1RktoY2NSMXhMeTlrQWJvbk5nK0RQQ05QN2plektqUGc5N0I0NjROeUxmb1pyNy96VlVvRDBoZkNPUHdEZnJyeE1sSXNZaDJ6WW9oeWdIREN3SmZrR1pVVFprTUlES0FPSEJ5T0g5dzZrWFVuaGRDNXVuN202N1FCZzh4RHNXQ20rRkFBM2hNVnBBNGUxdU9NMVZjdUZZZk9Ld0wzOEs1NHdMeVNSUzJIb3pDdk5xd0VlRjFkdUFmanE3eDVwV2drUFFxYStac1R6d0EzMTlScnFkMXFhYU5UNHJ5MXNFQ2xpYlkwMEpMZ0xXWWdLOCtLbDhNQUpJT0o0aHZOdk1wNStuek04bmNra1VRWi9GZmt0TDBMZS9JdmMrbjlPUGttT0lIMEtvTytWdnhPKzdlVzg3bldaQzJ5NG00RkRSQThaNVlCQk5neXlKZmxJWW9zd01qSVdES0FEbSszQXdZVVJPU2swTDFOeDlXSUo5NkVWZXlUaXVGV2tYNEhkVkJIOHNGVGhhaTVlWXl3bFpMUzgzTk02Qmx2M2I2Um9xL3VxNVdkcG1VRU5PVFhtMTNUUTYrMFc5R0pZTERWY21SUmdXTU5Sa0ZQdTJnVHRDQlpld212OHIwb2dIdDdDdzR1QWlHRFpNQk55TXU1N3FmTDBUMmVHQ2RSZE1qbTlIRjczRWE3KzdDL0RMMzFHRmVBdndJZGZ5ZVhQVVM3S3dGMG81eEFPR0h5TCtvWWt4ZktUYjFHR2NQMERpWkZSUnNiRGtZTk5RbllER21WYmlUS3VCdmpUQUhYbVEvRHNOWThmc01BSllzSGZXdlJ4aXlJU25UZVdTcnJXV3NST2YxdnZxcEVHenNRRGpWZmhxNUxEMGd2MUxNV0xlSGlLWnNXbFhtZ1duc1BCdlhTZm1XaFlQM0dmWXVhbEZwQTl3bHdRUkZRRkNpWElVaHBKcEhvQUlod1VRQ0FiUmU5MjVtZmgrQkhuSkZwZEJOZFhzUDNpNytYYS8vVEpNTDJmakFJTXI0ZTMvaDR1L1duaFBvRjdjYzV6d0JiaGdNUUJpUzBxRzdBUlpjdUdvU2dESTRtRStzajVjMFV0U24xZW0vQ2x0bWZsY1BrZTVJNXA1TjNGR3pRTGwwSUlGWjYvSXZzSUgyanBFdkl1REFUUll1RUp0QXBhSkxBRnpTMUxqZDhodU1vSGtLVllhVTBGUGU2cjhkOFd3WGxlMHJ6bUVhcGc0N1c5ZVpNU1Jvb244OFdMdENZa3dVbzNDbUlnNXZoUXNJaWNHT2FnaDVuajk0Rk1UbmJEZ1JHLyt3UVpmNGxiLytTRmxPQUZGZUMxOE1iZkRYL3BaYnowZGM0RkVuZWh1a1gwb0lBOTNUTDRpT3FHMFVkR05vZ09wVzJiZ2NRR0lYRndma1J0UUYxSmMwSVlTcVV2ZXV3S1dWSUVyam5jZHk3Q0pTcG4rRkRjWVV1MWltS1VGQzhvMmhxamZRRnZIbUhDdmRRS2F2cFhYR3k0ZVNuZXdTamZYdXNMNGU3THo2RTQzbm1DeU92ZFdaUXArb1M5ZWdTand4TEwvU2ExTDhsYm1DaGRCbDY0QUE5OWlHekZIVXdOVjhHRzhvRHhrbkQxdlk1ZWRlWUJKaE5HTXErRHQ3MkxxMy9yK1JlZ2lsOVFBYjRNL3ZNM2NQbHJMM0R4cnNROXdBR3FCNHkrUmZ3QTlTMnFrZk43UWZ6aUNRMC9vQXdNREtRaE1VaHg0MnBqaElCbzY3S1NFV2l1MWx4d0FWWjYrMnM2V0M1U1dtallMcjh1ZVppMDJJOUxKK1I0dkN4NHdIMGhkT2l4UUZVd0QwRm5SWkFDRGszd0ZyODFYSHNCZlNaU3VId3ZqeEVUek1IbklJdHdjakNEaFFhUU1IeFo1aG15aExKSWl3ak5HN2dnWWdpUkdjVHRudURneGNaelB5cE1XNE01YzBUeWlXTXVJcS8vQ1c1OTE3K1NBdnhaK01GN2VObGR5Z1dFTGNLR1VjK2pWb1F1akNBYmtsVnJMKzYvMkg4TkJZa2tpVUZML05mYWJldWw4cWNoVUxlRVMycWtqYUpvaElFZThKV0xIbGlnV25IZ2dhV0MyQXM4dUhhWEZVV0xMR0RQdkhQemRHNDZmcGE0SHc5VUwxVlFuVkpZWi9rTndVY01EK3JZVlJvbTlFNmhyS2FGSnFWTmZkYzc3d0lzbktKVUpZUlplWkxSeVR2bitBT09YeE5jWnJKbkVWUXVZaS81T0ZkLzZnbDQ5Rk1tZ2w0Q0Q3MEovdmpNWldaR1JnNUlIQ0s2UVVsb2dEeGxSS3lJVzBqaDlnZVUwdUNab25jL1VkSTVvWlJ2U3g0ZVFnemlwN1JoNjJLUkFXdVFvZ3dXS0Z4VmxnN2dtUGN6YWtxMWZDc1UvQkRUUWVYMytGVkxpYjVsWGg3RGdsWFBQTHBGemJFNkk1Qjk2U0kxYldYZjB1UVJNRjhLUWcrRVdMWk9ETkZ0bkFMZ1RjQzJmSFFTV0FZMkRqNmdBOHppNWJKazBGMmhnMnh4QmRIVU9zQ2hZemN6aDVjSGh2dU42eCtiOFhSWW1rL0pqSncvZkFPWC8vQzdlZXdIUDJVRk9BY3ZmalY4alhFQjVWd0lhSVBJQnZOaStjcUFoTFVYcFJDRUJIR0xvb2dxMmtDZkJIQXJMZDBXN1ZEcXk0Q0h5SkxPV2Qvd0VhQktSTWhaK3lwK2NkTWEwVlNrOVhsbmE4M2Q4ZHEwZkRwbnVvWkFjUE9ZSi9GUXJDNDJRNkQzSVBaTHMyQmhNZ09saTFuTUgzcnhIQ0tFZWNkVENOa0xTQlF0bmVOc1NoTjA5Y01hQkpONEtyZTVZWWZleE9UMXRabEx2VUtNZ1pHYlI4NkYzKzVjZTE5bTV4T3VoNWdaeGpsR3BnZGVCQTgvQ1U5OFNpSGdtK0VIWHM3bHp6dkhYY1BBQllUekNJZUliRkRiTER3L0k4SUcxYkYwOFRLaWNZK1FTRDRnT3FDZVNGcFNQdkZ5bjFadkVEMysxY1dMQkZIVHBuNlc1cEJTWkZtOGg0VFNlTmRmMTN1QmxoS2FCT01XSVNDYVI2dnJYdjVHbC9qdnBhMXJjY1hTeXJUV2xLaWJQUElPeUxuVWFZS2lSazRqaEtTR0VGbkNnV1J3Q2VVSjd5RW1VU09JYnhGUUk2dmdZcVg4TUJpalorU0M4K1EvQXhFakE5bDNuQUFQczN2dFI5bisvT05jZSs4bnJRQXZna3ZmQ0g5VmVOa2czRnNFVHhSNFpDVDVBY3BRMGo4MkpFM2xmay9oRllZSUR5WGU0NG1rSTBrSzJ0ZEE5b2kyaXAxR3A2K1FTbDd2S1pCNEtrZzVQSU5FZUJEVlFORFJndDBET0l1ZXZLVVlnRWk5OEJxR3I1MlNMQXBRNG5zSXM5NHV1cVJ2emFWRVJhOFlmV0NJR29xS0F1U1lWWVFDRW91WEVUcVJ4bUNMTDltRGVNRURYbExBT29ZcUxpVURrQmh4OHlDSVFoRnNsNW11T01kUE9xYVozWUV4enpCaHZKaVRML29GcnY3OTIyZFVESWM3c0g1ZkpWd21jUTRZQ3IzSkJ0RkV0aExYcFp2TGszRC9SZmdMNlNLVTdSeENDQ2g2K2FyclQ0SFlKWnF2TlpDK1d3ZzltTGphOHFVeGNpVXFuYVZyZVB4T1lDckw0RWVsV09NeDBnbWdmZGxaSmhHUDBxQnFYVEFyTlhxUmdndnF1TEdwRmFDWG8zOVFKUUNHUnZRT0xWSEZzd1hKNVNGWVE0ZFU3QUVyeW1hZ2xrTlpVL0VrQ2h3TnBTcGtxUlNVVGd4akJJenh2c1JPamFQU200YnREb0VkeG9GZjRKNkhQb2RMNy9nUnJ2eTNMK2dCM2doZjkyWHdGeS95c2dlZGN5am53OUlQU0xKaGtJUEMvTEVKdmo4MUZyREU4aEVKS0NnTWlCU3lSNlVvVFpMVTBMMllOcUVMaXp1dmJsOVd3eFlsZFJQcEtGM3BzVUQvTFMxVnF5NTdiZkVhcWhEc1h1VDVwWCtRVTJDU2p1RmJ2RUpZdFZCcUNUVXNORThSL0gvd094YmV3d016RkU2Z0ludXZGZUxXczFnekN0UkwrRWlHaU1NTXpJNEZMOENRY1RFc3dlMFBPUGxweDdNelN5YTdrTm5KVE9ZQzlwb1BjZlh2M043cktOWjlCYmdYWHZzd2wxK1ZBdVdYaDJ5aUxEdUd1NVpBOXFsTjZEWjBINVphWTN6NWZSRlU5c1VicU5VZSt6cHpGUmlBRks1VFd6R2xBVDZpeDE3bERPSGZTUm4yNytzeUJWMy8zdVlKcmFzQnNPQ1BTdVEwY0dyYTRyL1htb0xKd2pOVVFpc0xjMDdZSk5pa3pITnBXMmRYK3htVm5KVjhyRXpIeWp3TGVhZk14OHFjRlpzVGVaZXduWkpKaFJyZkpmeDRoT09SK1NoeHp5dUVHMVBDRDBxSXpacENkZ09YT1ArSzEzUDVqNXlhMDkrTC9mYy9CSzlXdGdjN2FsR25DTGdpL3ZXL0tkSTlLY0pjaFlEVUJHZHRxSzRvZzNlUDhSN2wxd205SEpVNFc0Q2RVYXBwVm9jeXBIZ0RFWWxhd0ZyUWJsMGhwelp0c0FmMmJFOHhwT3N2ME9BRG9vS1hzeTZrVWFTazFYUFU5MlcyS0lLanpGRXp5RkdxdGl6TW5rcU5JWG9hNXVoV3lwTXlUOG8wS2ZPVXlKT1NjeUtmREV3N0pjZTNIU3Y1dUNqQ25NdHRjMDRrVTQ1T1JpYVViQ1BaQjV5UmlRUnNtUm41Q3ZqMlQ0Z0I3b0dYM3dOdmNNNERoOHhzR0RtTVhHVXNZTTlPbzIwbFlZRU0rdnM4bEtTb1dqZkx2NCs2NlFCZWRmdWExdmZia3Q0WmlnWmhJK0dPRnlVbzdycDVpQmI3ZzZ0SG9pUXZyWHRjTmZpQmJnVk02UytSaFk5Vlg5WHM2MytHaFJJVTVPN1pDc1ZoSFZCMGkvbkI4dnc1S2Jpak9aRVZOSHZwU2dMVXJXUUNtbUEyTkFseWxMQnNjS2prSVpVd2NCTFhKU2RJTTNJMHNqdk9uTDg3Y1hKckp0ZnNpUTB3c2VXUXg3anc4dy9BeFdlNmJhY3JCWGdJM25ZZmwxKzN0dkFpV05FK05tdXo5QnE3cXhXdjc0dS8wV0Z4NTFxRW02eDN4eFJnVjZ0eDRZS2xkOCs5eTYvVzFvRkFyZkc5S1FLdFlnZGFoQnlpalFIZjhydnREK0tuaU0yMWQ4TTZvRmdEZFRpTDhBSkZNN1RGOVBJQWk4NGdDNDloVVNwV3NoVkFxR0tRSlFaWlNxelBrb0o4S3FWdkhXWmt6RWpTTXYyVXcweEtkd2grS0hBME1HMHk2VEN4T3g2WmM4WVptWFZpWWtOaXg0N0JIK2JjYjM4Umw5NytERmYrWHRQeDdwTnZ2Z1QraXdmWlBnd2pBMXVHWnMxamlTbVcyclNPdDlnZjA3SWg4UG9mWFlxbXRiZXVoUUpsR2J2VXM5MXhBRFN6UG1USUdkNGpXcTZidXhWeS9GM2pFSkNPVklybjNRT0tycldHMytPTjRzNnpkY1doV2l5SzBDSXNYVUdWR2pZVHNpOERxMWFiVFdvMkV4akk1aEphY3BZV0Fpb1dtTE13VDBLZWxUa1B6RG5GL1lrOHA4QUlDVHRLWkFwZUVBYU9kL1hhRGt3MkJ1V1p1RjFtbmZoM3VlZnZQZ0QzVlgvWFBNRG53TnNlaEFjOVFNT01Nc2JQRlpRbFVyZHVoVUR3UTdpdjZpdktCMDFudW5acHVXK04rZFp3UVltSDZTdzAzMXl2Tmt2ZkIzUExkdzl0Wk4xaGM0ZmhLTWRibDg3ZXRGc1FPZDR4ZzdaVTgrSVdOY0xsVnNvMmZ1NXFBMVlMUUZFWUtsNnQrNW1TSW1hdjVKSVhZaWo0YVVubFN0YjFGUklZU0pPU1R4SnBUTng4TW5OQ1lxTURzODA0aWRrR2RtdzRaSU54Z2NlNC9mRm40TmxUSVBBeWZMMXpxVlNUR1NKWHAwUHpRN2phYWxWanNTSmRvKzVXSUFsUlZrdHFqMUZkV1o5MzFnWkNSanBlLzdSWDhFOG9mRGtEK2U4cndmSTQvd1RaQVpYRnN6czkveDU1MUo1VE1JMjVnZ0NReHJxenFPOG96cTdNbHNndW1LZGk2WFB4QWpaTFFmbzdzQ2sxSUpoektzQnlscElsSEpmTTR2bkhTOTZXVFV2ckdpT2t4SnpnTm9rblNINmVjeTkrQzVmLzdDa004RnA0T3h6aW5HdXgzM1ZzNlprSHlvOHB5UnBaR3dwV2xZaW5Td2dvdDJ2bjlnc1ZxNnByamwrbHhVZlFGVE4zbG9COTd6WlpDZVpPbGk5M0hJdjBNL3hDRWI2enp4ZFZEMmJMQUdKOFZvdjdBbEVxblhKRXRCV1BVQkFiQ3RXTDU4Z2VPNG04bEJEcTFKQXA4K2drVTJ3WGM1Qm1WRE0wTDIzcWZxaE1SNG5idHhKekdzaWV5WmFZbUNEQlBJOElPeTR3Q01BSjIwZFdIdUFCdVArbDhFcm5RamljMk1CbHBVSm5tbG9vV0lpVVZFYWRxcVZiK1JrdFhrRzB4bnk2V0Z2TG9YVklNNFJYT1lBNnlObEFIM3NXZDFyNGl5ZVJWV2o1Uk4rMnN0clRIcUsvei9kdWM2Unc4U3JrbUVnMjJIdGNHRVoxK1pYVThXbzRTNnJxWFVlU216QzVNcWxFT3RZQUFDQUFTVVJCVkh2QkJLVWZnY0lEeEw5VExoekJ0Rk9tbmJJenhYYktyU3ZDRkhoaU5xR3NPMGpzOGtobVlHYURBZWNZZVNtYlAxSHFrYUVBcjRDdnlsemloREhLTzZWRWxSc1JwSHR1dU11UktjamVVRXlsclV2eHJneGJkL1ZVMTE3WU1XM1dZYTBKWHJ0YTdaM2llOGZjblNsd1Z2ZWY5YmRyNVZtVXkvU0ZGY0k2b0xjUVU5S3drY2RTcXJQZXYwdkJRK2JLNUNYY3VRdXpLZG1GT1JkV01lZHlqV1lydUdqMitIY3FpcEhuOHJ0TmhRdVlaK1htMDEyb1ljQUlUZ0RGckdTT0dlV2pETHlSOGUwdjU5S1hOd1c0QkY4K2MxaDY5dGd5UlRxVWFsb1U4L2R6NTZKdEwzNUs3NEt0U3dXamMxYTZWTTdqVGZWL2IzM3N0MUxLemVpWmRmNzllTHdJbkRzS3ZQY1NuOGc3WkQxdC9mdktZbDBEU0ExMWJ0SVV5RXhYK01HMWZMWXE1R3kwY0dIUlpWdzh5Zko1TFllZ1RaZ25aVGVYbHZWNUIvT3N6Q2VVMjJabDNnblhuMWJtWFNLanpGcVV6SjB5WDBraXg3ak9QUkgxWDh2aHR6UU1jQUxQemJBN1lOeDR1SDlqSk5kNGJLVUFNM1JFai9iTEdXRU45RTZSamRyYXFQdGlqbXU1bUpWMGFkczBWaGU5TEh6V1V5bmcyZkhlejRqLy9vS1pBTjNNM3Y2WHIzb0RmTy8ycGJDa3JkdEUxV055S2Q2L0ZlWFAwUkZNTENLemxGZjloaXBGNEl2bkNkeWdoUytZQVFiRmM0NXdiT2dBT1N2WG4xT3l3MFJpdG94cDJaODhNYmZYdkU1cDVqbGc1Q3A4UHlEREEzRDNBTFpodS9HaURCeEVYRSt0VnBRYTUyMExsWUlnWktNd2hMb3diVWFoT1ZNWHMzTVVpY3Q2M3NpZlJVaGhjWUlpcWJpK2VqK2RSN0N1eStjMG91Y0ZGZU9GZG1MNDNtOVZhZktaeXJBOHFvSkY2MHE4MldTVlNxb1dia0pVV21OSnJ1a2hOTVV1bmtMeDZEeWFwYXRnVnVNUUExMTZDdGdwUjdlRTQxMEZuV0FxWlE0MjF0R1lWZzRuTVVWNHVNNzJjY0NIaS9EeSsrRk5KMnc0WVdDTW9zZlVtSGxsanRHNzJYcmhMOFJJa1dxa2hGWWZvZTBOMVJwQTF2SjhkWGhDdklhRG9zOStoNXplVysvc3dodDg2c0kvMnd2WW5vMzN3cS8zNU80M1UyOWh3SUlWTUpYVytXdmRickpteWVaN29ITXYvNC9hdmxucGlabGRnazhzdExaa2ljMG5lV2w4M1JxMlU1VE1qYXNsWE00SVU5S1c0R1Z5d3dGemR6MHpBMS9HNXU4L0E2OFp6c0dySCtEUzYwWkdMTngvamlLUHMwN1h2REZtSlZiTnFneVZKWXNXYVExUXFLSFoyc1YzTVduZ1R6VTZaK052dkV2cGNoRE1mVTIvajhzNXFPTjFXUGhFbnFGQ0UybnU5N1FpK043alEyaXhMN2p4L1ZYb2RMTjgzWVloWmNrS2xvNGdhVTJnMW9WTWl5YlIydXpwb2swTnN5bWVuSndMeFRSSjV3R3lNZy9Da0pUam04cU5tN0VTTDhEelRHSm1aZzZqbTIyL0EyRGdNY1ovZWgyZUhNN0JhKytEbDAwQkVpeXN2bWgzQVJVU3hJS1U3WGVOcmJNOVM5SzRUV3d0ckJwSVBQbzRwWEw1VFFra1hsZElFVXB5bDNEMmdwRXVMS3doaDhTU3FJN0kwZjE1dTlOeDNzOElEUlpld0x1ZnErWDdpZytJMjFaOGdheDlpZ2JheHhkWHp6SUFaS0dRR2NGSEtiT0tMRDJsTHFWMlVCbkIzRTJpelJtZXV3WTdnems2VG1lVU9SU1VPREJqV2FvOVVqYVJKbjh0Zk4ySHVQeTF3elg0dVlIRHpWQmFEVkZTdUx3RjVua0l4bTI1OXJJcWtDeElYRnJGanRZaTJvZUI1YUpMOENXMVhxZ3RmcVlPdkZuTG0zc1JoWEx0WVFWZnhlelR3NVppdllpV0M3MDBZVVFRYUtTV0w2U1BGU1V3cXlNRXNpb2srVXA1T2pLcHhuaGRGQUx6K1B1ZTN5alBiZEZuYU9wa0UrWXNES0ZFRmlERGdpZzZPaEtPajhzMXl2RytTcjlJVGNlbjFXdUFrY3ZWbFMwandNbndJdmhjRGVHZjFJMXFKRGJ4QVN5MGJtZlIrT1d0VHdjaTVaRG9CNmdYeGNOTCtNcDl4eDduVTV5OWtMVzd4YVFoNk1RQ2JMeFJUbkxLMXBhSUszY0FmTkkxZVVrWG5Yc3VmOS85RTFtS1I0N3ZYZnBYT25VeXJQakFQaHZ5VUlXK3ltemQ3SUNJTkV2T1hUbTZjU05XMjlPRktaZE9vN25OT3hqemJiaDlLN3JNVTlSU2doM01vZEc1QzF2bDkrSUJLS3B4OGlLMlh6MjhEcjdKbW5BZ3gvOHppYTJXbGkwMVhab1liZm5RQ3pBTU4yOFNIV3BGb1FhV3N4aXErN1l1aGljcmpHQ3o4SW9KZ2tpcGZ5dTJLSkIwSlYwL1JRQ3hGeTdPU2dWcHo3WEU2d1VBMWpKeUU3Z1dGNTlYd0hCZllmb3V3bFlRanFGUlh4cEZtOEpJekIzVThDQ0JwYVVCWFEvRGdITHNFRW1hc3VEQzdaMXlPMGZqaWhzek1EVitSVVA0MmdKdzFrUzJLdCtCekxnVmVGQ2ZnSjg3NW9MREdNemZZbnNWNlU0S1J4VHFNNmNGY1RvOURicGNXT3ZnR3oxcFpEVytTOFM5bWpZVjFzdDcxMjEwejk5YitnS3U3QlMzTDN0VnZ2WGZWa1hQSFQ0eFhkNnpoVUR5aXAwOC9mcld3T2NkcW91NnhHblJkZDJ0QWt1UEZIckJGTEpTbEp3b0hVUloyajRyZ3MwN21pTHRVMmMyT0xFU0xtckl5N3FQanhZVExDMGl5Z2E0eWVZOXd3NmVHZGdKUWZ0NmRONkNNb1Y3M0doaDltWURHV1BwWlV5dUpKUmMrQW15TFMrVzk3b0JlNkZRVjYvWU1qdWh2YUIwRWFaYW4wcktuaDJ1ODNTQkZSNVlBMGU2a05TQlYydExSZHZ2OVEyNUNia1JQdDR3aHI4QWoyRFYzWGRnMER0UlpKTVdRbHJKdUEyblZLOFFqMHR4ekkwWWs4TnVnbDJ1eWx5OVJPdDI2YTdISGlsbnk3czhBZzZCMThPZjBnVDNaamJCR0pXM213TnpFaHovYkNYeE1TM0ZpWUpBTmZqbE1vaXc2L05xUFowRzJSMHMxYnFLV1hXemJ2VmJ3a0lYZ0pjN0laeE8zRmd1cHU2NzVqdHpBRmFGRnBsRlhkeXd5di8zbE1lYTk1QlRDdEVBcHE0QndqcVY3SVpBdTI2bC9iVWVtV0pvVTRaZEZuYTU4dm9Gbzdnb3laWnJ1ZnA4Wm1jMHlLWm84UjBZMmQwenZBSytNRFhpSUE1SlVtbiszN3FZamtEeXNNT3crTnJOWDVvY0M4Z3I3dDFicmJuWVFscGllbHpnMUZ0eVlJRlp5bkJrNitFeldlWHdCUk9zWndFMUVMWHM0WUQ2bkJXQWFRaXREV1R1RWRlbE1XU043R3NXNENyTTVoM2p1NlIvUFhGa0hTTmFPcHE5RFlqV2hTTFdtRDJhNHRmc0luY2hKMVBXdyszb0ZVMVdHdHphVkxScmNJenlkSnVaTU50VEttTUhQTW5tcHhRNFBtcFdWV2ZxV001VXdaYVorV3I5d001NlhkNGZ0aWhwejl6RjNUVmk5MU9QOTVwMjVSTFhjck5BNzB5dXVNeTg1NG9yVnNsNzF1enhiOE1hM1JwaDZ4VFBXZjg5ZTJsaWU1ZktIWHNLS2dWYkZhaFB2aG8yNmtMRDNPRUJpK3VkYmZGMGxzdlUwY1NkbHYxRTExQzkzNVkzbDJTLzVidXlzTFNVTzVXczcybjlGWGpQcGp1eXpqdGc1aXZDeCtJQ0dTbXRVNnJtbWhWbW5Od0p1RHRoYnhubzdUVThRazREUm5TcmQ3cm5icVRKM25Qdmg0WCs5OTU5cjRpWFBtN2JPcFdyRzJGN2pxQ1JOZFpaLzVtTkl0NVNyLzMzdUJCUnJBQ2tkYmRiYyswd1krUks2SFNmclRLV3hWdVVXVUhXUFRlbkZLS2ZBRnF5UFhnQXZtQVk0V0xxT0FET2lFRjA5YjlzMmxLOGVTOGhjMk92aWhkbkxDSUZROWhTUkZMMEZIRFMycHJmdVdIdEFKeWNNZEFnM2FHZmJUVy8xVmZzR0VCZFgzRTdsYjh2Q2pIM245OVkwVmQwa001WE5ZSzEwSHVoN1N0RDVmVzhUcExpRFV1aGkvSGx2ZHFqcmJ5T2xURXhGS3dVNnFmOVdTL2RsNlUzQlFoZThHQjRHRDUvWnZPSkhOdXAzd3d2TGR0VzMxWnFMSk9xczhQWjRtMkh3UndqbmxWZ3RYcW1lMUhOekx0MnM0VlpxNlBmeVZZZmY3a09aeEpENjR5aGYyNVd3YXV2N08yemVpOVVOYXhLVjN4bFhxbkhHb2lhTFY3QzlxMC9EQ1lGbUM3VzNYT0swR1BLM0xqM2dtL1Nuc0N0aTVxWWtkVTZFbTR4NmlmaEo0Y01ONFJkMkxPMWp6QjBOcGoyOVZBRk4rdlVUVmIwcDNZcGlleUI0V1RWRGNXSzFEc1VhaTFpVnQyRjRsN2NxNTdCNzlrcCtyZXYxL3VLS0pJOTBtZmwvcy9zRlBSVGlwQ2pRSVQ2dWhTOG1qSHdMb3g1KzdkbVNiUDEzSVFIRnZEQ2lYVGVLSGZQVWQ5VG9td3RSWEk3M1RUT3RXeWhlcDBGTE84cGR3RnBndWYwUGZDL3BXai83a1d4eEZFNzdUQzc0b2Zydmwwc1JWVlZ6cmljYTFKbXpjTkZmSzlyVzgzSnVWdWdGUzRzdDR2cHAySzZuUUV5L1E2dlAzZjR3bGY0d005ZytGalZHbGI0eEJhdjFtT1hPbUN5ZWg1ZHVBOTZQR1BGVS9idmNrV0N0YlErd29mWkdpREhvM040Sk92Vld0YnhQMkU0c3greWUyQzRIejRQZGlUbWVFQmVhZHBabUdCYnAxYk5BMFF0c2NYTVVFMmxVQk92YlMyLzhGVWRyUUlzN2Vua1U3N1gyNFJQdWdNSkpMMHkybElWVUNxRjYzSFdvTGVhZ2ZTak1WM2N0ek5pL1ZwQmZVbVBiWDFkVmdXaFFPZ1dxZVZNWHp0WTZPVHFIVFNRMmF5KzU4VjhGVzhzanFMSzNZWElrV0xtUGp6MFljSDNVMEZGUUM3Q20zV0dwMDhLQnR3VGVPNmNoclY0bldJZXJxTG4ydmpwWFNYTTI4V3lSZGg3aUxtdnZ1VU9vQ3pXZTVwZTZTL1lmdjlPeWVIN0RNR2JLL1h1ZWZ0NG4vZFF1blQyNzJjb1cxNzFBNXpOQnhyZWdHaU9Xc25jZVNwcnlyOVdpRjJ1WG1QNTdIa3Z6N2pUV2JLcGhvRHU4U3NsazFMZHlSMFBBUEFSK0M3OUtQeGdndTNVN3N4ZHJMTzFaWGFIS3Eyc3o0TGowcG9ObEJSbURnRG9lOE9VMWdseU5sOE9jc0s3WUJOV3BHdVhYdVBoa203NjZZVVBuUXR0QXVrYU9WWnFZMHRMNmJvb3RGaHcxcW8wM280VTZCVWhyOVNyalFPdVFxVTExMTErbnBybnJJcnFrVlZaNTRuSzgyYXR5cldQTVBiTXlxeWNkTDVpaW5wMm82cEJLUjFkNStSbkI0SHR5QW5YbVp6b1FpdXRoVU56a1NVVld0eDQvYjNFVVd1OVEwVjdiYytYK0RJSTBRRGhjcG1sZGR6VURNRWFINjdXRjNyOWpKNjgvVEJ3Rmprc0xRUHdGYWlUbG5MNkdSZy90eXA5RjNkRDJhdmc1UXhjVWRVODI5cGoyVXFvUzhpcTEyeTNGM1JXK0dodmdEWFRNWkJtSzM2Z0tVb2ZTdHhYZjUyQkc3QzdGOTZzdndqZi8vTWNmZC9kVEZJZFhlcHNKTy9WMDNLdmRXb2RrUEgyeHF4N0kzUE5MN1RjMHVjYTFTSG1jRXZlVWM4Wlo0cm5yRmFNZXVTK3A3LzlWUGp4bGVzL3k3N2QvQlF1V1ZCN3BXNmpDYVJURG0wQzlLYmd1WFVBMEd5c29mL3VQYzk0c0hzV1ljcWI4TytjY1BvWkxTZCtLalMwTU5YT1B2Q2xydE91YkNLVE9XYjZsUmsrcEFBdmhiZU1wNkovWG1YL3RzTElGbTdWOXZCN0QyeThoUkdBT1RSVk9uZmFMclo2RTNwVHFTYndCUyswN3pQYy9sb05UdWNlKzRyUVA4Zkt4ZmRXMkpEOUlrQlRENEdHb3JZd3RUQjFjODFRZEZHMHVVODU0M1BOUnRjeXQyd2I2TGNDNXU3MWJlbWxpdmRnWjNLZHRvK2tyUXZyQWZodnd2dWU1ZWlSNFFGNDhBSlhYbkxNUTAxdmF5Wlplb05UdkJGcnBIQmg5VHlRczNkbGxlTHNoeUNGS2tNNFk2UTR0U05qVVdiUWhwQ3JWWHQ3aG9qTjJqTVRkS0ZBR2lqMUZVdXlsRjRsdW1tV09Od3pBTFhBdExBRWVhL2hjMStCRnViT214QXI2TFJPbldZV3BhbWV5eUtVelJpbWppWm55dDRFdXdhMjlYZUw1N0xPdmR1S0hlek5ORGR3NTZoVkpaakI2NWp2SEcwKzdXLzBGbGMrcHMvQU0rK0N2MTRmMUJPV3VkWEtKOWFWZm1jTzkwOWE0bVJOUmVibU02eTVXYlB5Z1dxaHh6VVdIVFhPMjFmL3I2OXYxb2NKYjk5VEN4Rnh1M256SUJsbjltcUYzdkVHdFhSZWJzZkszODBkcUxROWwxdXpDVWtsL0ZnQU1qZnZQb092Nk53bU1Gc3lvWmJ1NGV4eXZiYmxieHcvbFZuVUJWRUxxcmNGRjhSV3NteGQ1bkdxUVcwT3k3ZU9ITW90YTdpZjZVM1g0Wm9DL2o3NGEwOXo0OE5XNWtrajBrZnZqRm1qZk9kNGdkeHlVbWZPOWRIT1RJNzgxOW9Gelh1eGRhNFh5WHdsaURVenQ3alJkWHJvZXpFK2NFZWluT2l0NjlpZHJmNWV2dWRRbWhsbkNzSDNtWUIzUXVqak9qaHo5ZzdraGZDdFMvZjZDa0dFQ1kvM01Ha05jODR1Q0s0K0lhN044alZGODJicDlmWjZEWXhaRjJ4VWtVUWpnUFk5UnBTQ2MrY2pFanNTUnp6SjdxZmFhTmhINFpFRGp1N1Z6bFhVeG5EWG9xVXBMRXliS0JOekxiZUVwcFlVSkhma2I0bzNhZ3lCcWFWZDVqSXFsUnFNa2ViKzkxRy9SVW02YnZuVFZmZVBNM3ZuL3JWdi82NGswbDZLdHRlZ29SMDNVTXZkZE42Z3Q4YXFWSFQwckdzUnRHaFJjRGM2ejBDN2J0NnluTDJ3MGp6WE1tU09XcXg3WGE3azNOaWdCWThVdW5lZnJWMUNTL2w1aWxiZnhRdDhuR3ZmM1FQYTdjZmd4eTl5Rzhnckw1QXRSNXd1U1ovdVVScU9NVVVPS250dWM0NTBwSDQ0MUdJMndOaEZmcHQxdVJCelozVzVzL2RsUVl0MXViTTN6Mk9kQjhuV29YdGRYS3VkSW5WN0FMcDRIUGE4RGpYZVY0SEgrNTF0OFVDMWNGTzVmTU9ZYmZFNExkUkVhamczNFJTQlR3MDQyMHF4TkdxQ3E0WTZpeFJQclgzdTNHY0VEUnpPWnhUTWQvSDhFMC9ERC9jS2NQSnpYUG5PajFPV3c1eHJpVXJWbmprK0pFMExjNHRmaGx0bUYyNS9KaGZCVjhLbmorSG1FZE5wWWxtRUdiZXByY2lpM0pvbnJFdDYra0JnSytWWm50azZvbWdSbG5VS1ZOMi9zVWIxZmZKb1ZNRUZtcmRGYVFybGEzc1pSQkdvYThVTVJRbDJEYVF0ZVVVVlhPcUNUYjF1dFRaUVlma2MzNlZPWXMzeXF4eUs4QzN5ZkdPWHFqZTMyTU5lV2NPWjYwd2Z1YzZWcS9RVm9QdmhWWGR4ZzF0YzlDMnoxTHBBcStKcDBhSWNMenlRWTRqRUFsa2F1enBVcGtheWttOEtHcUZDWW4ya3RYMDZaVTZ3Q0dzWHc2aTV0cVdxQnhGa3JSdTJjQTlseldvL1IxejNrbmczMGJPTWYzQkdKWERkdjFocjhvMW1hdE5KUzZaVGF4NlZGNUJ3MDFqUEFZUVNhdWVwek5vMmtYeEcyU28zNFZnRGtrczZ0M2lzckY3Q2gzbU03L3RlbXA0eHk2RVFHVHlYd2QzV1U1VFpSUXI0VVhiZmQ2cGw0TWZocno0Q0gvTkdDTzFZbHR0WFZMN1UzOXFLRkYxMHVhWWlzeG03aGo1dFJYcmtMa2MxczlCWFh4QnhSZVZtSFlqc21RTUxpcmhjbEVwMjJJcG5xL0d4dCtTS1o5WUNhOTVFYStGbXlTam1ubzd0dzVKNnFiRmJPYXhwVFUxYnkwcWE1MWpCMTNvOWx0cmgzSGtFNjk1dnRXYlhlVUh6MWYxalpNM3RzeThGUEN1RlBjdFI0Q3ZldWVUL0diak5FMXo3aDdRUjB2aTZHKzYvekdNdk9lQUN4eHkybUZHV0VSYytJT2xBWmk2N2Uwa0Ztb1dnVXB0ZEs1Q3FnQmFOZFZFZWRpOXRTcld1bDZ4UmJubWNvNkh0dWZVakxDT2toWU9LMzd2OWtRdU1sS1VGV3J2bVMxMk9XbG5RZWxpNkxnMmVPYWp2dENySWRDUlNBRDdybXVJV3BWdUU3eXZ5ekZiaENmWVZ3NW9ncTJGTmpVWE1aU0E0MDlKcGE0eXNyNGk2bkRKSlovS1U5enNmR3orWm1YaWNLejkycXJQcU9sejlIdmpEdDlneGMrU3dDOVk0bzJSU1dPc1NUek1uRVpkNk82NVd2NE4yZis3QVc3V1dHUXZyV2FKMVRST3I5ZGYvNXY2KzlqeEJsTGl2aWpKSVhBeXJIc0FhVUt2QXJMMkhpTE5MOFdwSkhYZWRSUmVQVXk3bzFEMjI0b2haUS9nVkk0UWc5OG5wM0t6YTl4aTg5YytMZDYxVlZ6dkY5dVhBVnhYczVlQmxzbm5IRWxaV1prZG1SeTd1LzBlaUEzRGxBUnpnV1hqbjA1eTg3MkdtTjFyOFNSazRHakFPR0psaXdyUi9zem1tZ3BjVVVFTWxhdHllZ1JGRjFSaGk5azhERjFSOFVCYlRTWGVoSkR5THRiN0RPbHN6ZDFNY3NwcTE3NWRMbFVXMWVVVmhlVGYzMURkZ3JQY0U3RmNPRnJUZDNSTk00S1NCK2xlclk3dlkzUmtHSFpuaks0T2hXWDgxcDFVbllmYkE3dGJkUDNlc2dZZGlGUWhPS0VZSnYxUGsvNW5IdWYzUGY0bVR2M3hXc3lnQXQrRkV1SGI4RWg3NDZvR0RJWkZ3dHVXOEg4cVJheW1XSFpscld3eTdkUGYxYTk2MHRWNUl3TFI2YWtZRmRha2JGTEZ1TUdScDJWZ1BqdlN0Mm4zUDMzNE5SVmJsNEpvVWVYdVg4MTRIa0hYKzBNWGowSVlvUjd1ditQaVd3NHV6aytKWkpnZjNYdEMrRjV1cjJMd2ppU09jdURVZnVYalM4b3JaNTFaekxWZ2c0eDYrVVNkTWNsbEJ5MVJPRUxFWjkybkozTUlQd3pIS0NZOXg4M3Mvd1BQZkJiZU9UbUdBK3ZVeCtQNkw3QTUySEFIYlFJNnBIUUpWeUp1TU1KZkZVVllXdjR4ZEhZL1dJaW5kRUdVT3k3V1lIcmEyQXlBMWVzZWE3c2VCY2syVmNoc1dEWXloWlVaQUFodDRMSzBVMjdkakNXdTk4OWFQeGFINHVqWE1mRlYrN1FIaGJLZGRQS3M4M2pvdzUxMmU3ODJsVDdZUWJxZlZNVWZLbDVtQ0ZDb3VmMDIyUXdiTlVmZlBKSzBnZGlJekJUYWIyVEVmSDdQN01GeDV0cGYzS1FVWUlEM1B0Y2ZPYy83eUNTZkE0WUlGYkNwSm41YTFzVVVaNXRiaTJkQjlGSTRXWU9qeGlOeTR4am9Zb1JoejIwQzQrQTBQVnk5ZFkzcHFsYTVTQjdmVnRxSlM5ZEs5RlN4TGU3eTM3cVd5bFRtOFVkZWxQTGVlZVQvVlZsb2JOMmV6UFpad0dXSE5LejZ4RjM1ZXRZalNnVGhiWlFRVjZjZmpMVEtHc2ppcDREQU5SYkJham85TUs5ZWN2elI3NUk3OFNaendETGMvZkkxckh6cXptNmovdWduWGo3bDE3dVU4OEJYT3hrZEc4Vmo5WG5ZRmw1WHg2bU1iMkZ6MitDeWJBK3JJczhZb21YWnIycVJyd01wZEp0OUduRHlDUUl4Q3IxYTM3azBmK3lsK2oxVUhiamx6cWV1ZmNTZDdaNHRTVHQ3SWZZMWZhZy9GWXRjemh2a2F5WGZySS9hc3Z0dytyM3FjZ2c1VEM3ZHZLK3cvOTlVSEw1MDhXZUlzV2d6M3VhUjlabUV5R2ZNQzhIekl6RGFSOUlSc0Jla1g2dWtZWlVJNTRtZTQ5bTIvekM5Lzl4a0dmL3JyR2ZnN3Q3bnhuMXhrZk1nNEtLNmZDUmdZclo1ek5uY0V6UnlBUzd0bWNFT3QxQXY2cWNBbC91ZHViRXFpVFNFaFptR0o1ZGdwaWZLeG1Ld1dNRXdCSHZjWExxVzk5USs3VlV0NDJWUTI3NCtjZGIzbXMvZTlpcjdYMDdqbUJUalZaZWhkR3BkUFVlWmdJVURmUS93T0dseS9CUkVkb1hZSzljaFlRLzNXdGRwa0xkWVBFOWtxUUt3NElBY0d1TTFUblB6UUhmc0o5Nzl1d1BWanJqMzlHaDc0K3JJYWZnd2hEYkg1bzU4d1N4M1UwMU9iUEpiTlhrdXdsYzRUeUdxTGVMSHlPalNhWTV2bVhNR2plcHdvMWc5eGxNSE4zbUpYODMvcTdaQlF2Rzg0Q1lBWGhGR1dLRm43dW42d2xLNFd3ZnNlbzdkdStiUVY4dTh6Z0tscmc3RVYyWk54Y2RSeWg0SXFpbCtLMlptcHBIc2V3ay9GMnJQTUlCUDRqSExNekFRY0E3ZVpPVHE1eXJWZitBVWUvUi9Pa3ZVZEQ0NDBlSGJnQmpNamNNQ0lramxzVFNLRkFKNUlKRncxS29iRitxZHVDcVdHaUdybFViOWJvWHoyQmo1bVVtQ0dlbEp1R1VlYlRjUFBGTTlRVHk5eTZ3Zkp5bDYrdGx1b25nMmdaV3JTM2J0RkZiUTl2bWJlRGJEc3Q0YjdxZUdNZmlLaEIzcTl4WmVZYkUxOHV1SUJyV3ZTdEhMd0pITzBjK1VWVzFqcFhjVXhLK3dlbXNsUmlrY25zRG5rVWRaRG5yQmpTK1lwcHA5NER5ZmZlaWM1MzBrQjVCZmhlMS9IWXovNldWejQwaTB6Sit5QW8zRGZoUSt3bUVoTHNVUXlhNXdmYWdUTXF3bmczRzBlcUZhZlQwMjk5ak1zTTZuaC90UVBtRmlOdXN2eWh1VWNBUXVGMEwxMWpyU2oyblhWTk5xWG9FOVBBeXgxZGs2MXd4V0ZXWXBPcWN2LzEzbi9Jc2k1WisxV2hhRlFCZzNMMTlMTTBYSituVVBBYzVCRFUybjIwQmxzSW5VMWdCU3lPaGZJNVFxM2YrQ0V4ejdPSjJvcHY5UFhEcDU0RGZLTnpsMWpVRGs0UTFpb1J5aUlneVRpR05aNjhldnBJWDdxUE4vYXR0WG4vSDJ4WnQzL0c1NDd1c2E4aFh6Uk9IS3o2MHEwdllqYlkzVDI1Z0w2LzdTdkRTaGs3N3NMMS9QSUZtTnE2NHBoWGxVcWx5NmZjbzgwbTY5Z0wycWRtc0VMNmpmSlpKdFJ6L0g4ZWFtdnVpMTFVOG00VE9WOElwOWFieFFjNDQzeE8rS1ltMXpnT3Uva3ZWOTVBcmMrVlE4QXdJZmhoNTdreW84K3hFTmZ2V0hFU0ZLS1JEMFFWQ1pteGxRUGVwemFvc2ZjV1AvMVZvMnlSSEp1WVdMZDdyemU5NkdyM3JmYTR4ZGdUOHRHck5UdDcvQlR5NTF6RzR5VTFhYVFFbDV5OHlSOXc4aitYT0FhRko1dUJMZnVNWG12Uld0SjlYSlQwY1h0ejVyYjc4VzZjK3ZMek5SUU1BWG95eVhXcTdHelhXTURhMUtkbVpqWmNZNGQxNW12L0RUVEp6dzYvZ1VWQU9CSDRWditCRGMrTXJWekJEZlViYUlwc24xbFhoWUFKQUdmMnNxS3hBNWowempDZnNGanFWanROMFRQVFZ5NXpiTlZaZWdQaHE1elNqa1FSVCtDdWdhaDVWbVhIcUswdDRyRnUxRnpzNFhYdEZWM3pScnRTL2dEYVlLM1BlYlBPN0ptcVhiUWdKMUJMM3hta3VYSUhyckpSYzBMdGFzRjJlZHBYaFYzQ3RJL2lYYXZZekluZkp6YjczcU1wLzdQRjVKdmVvSDc1U1pjeTF3YkxyTjltM0ZYcStUbmh2YnJhV0dGelpPQTNNbkxIdjNCeTVKSmpjTVNraXBKWW5aZlNwVk9SYnJ6ZURuVnhic3VsL2hxNXJkZndiS3NhUE85blNWckV0bFhHTjJDZGlxTnBMNUMvT3NVYnMzOHJjbWZaVmhrUWZoemU0VUFiUkk1ZnRDNk5TMTByNjU5Sm50eDlYTWxobVVHTDJzblRLZHlHb2p2Z3VEWlFWaDllU2RIS0Vkc3VNVzd1UEdPSy96eUw5eGh5djJUVmdBQStSWDQwV091M2J6RUEyOFR4b0Z1azFpTm9rMEZraklJaUpTalRseVhiUlgxRkEydEJ5bkhhZHZ0cU5XNlhrMGswcmF6cC9PdGRSWXU3ZUdaOWFheEtrZzdvNW0wMjFYVzFDV3ZXejY3WXMwK3NQTlZpZGRXNm1TTjljdXJGTEYwajVaNlFVWHRUdmFsV2NNa210STgwaitkTWMvZ0U2YVpXU2F3Q2ZjWlpkZEdUREs3d0FDM21ka0J0OHk1K2Z5UDhZdmYra0xDLzJRVkFNQnZ3b2N1c2YzaSs5RlhsQzF6Wlgvd0dQdkZDOFZTMXI5ckVzUVRLbkdTWUp6R1hiY0p0WE4wV2RiQzFBTWZQYzdwTGFkMWV3Y0llNmpZcDRpKzJ0amhIYXIzYnJ3cjcxbStkVVdaL1JtaTN0cHpxTnU2TVdYdDBwZDJzTnh3Z0hlVWJ6ODdCRE9JazMzdS9uSXVaV3pMcGY3dmN4UjlTZ0VjbjhJN1RNSHlCUS9BTVhDQ3g3OEhIUE1vMTkvNVV6ei8rMjl5N2JsUFJyQ2ZyQUp3QXJlTmEwKytrYnZma1ZGM1ZEdzJnd3pSODJ1cTVWaVVPQ0hFSmJaL3JzN0tXZllQcjhzZnZrN2QzUGNnMS9wM1dZbGU5bjczR0ExZlJKeE9UUTR0WWNMUHRQSytSV3RSR0ZtQnVpVUx5TDFTcWEzZGZVLzRZTVhOQjZGamtRMFVCclFNY3VRMlZqczNZYzh5Zyt4d24wbE1PTWRoK1R1VUU0d1RQOGVSZklCci8vMUhlUFJIT0h1ZDRhZXZBQUJYNGZHUjRZRlhzUG1DbWNHVk1ZNDBHS0o1dGl6OUZTdW5hVXVjQzZCZDJ1ZmRhblVMU21oL2ZId3RIam1qcDlkWDA4UytGL1BubGJVdXd4Tyt0ekxpdE9YWC9qc3J6S0IzSEg3WHNlTWQ1VHZ2TmNJSXVYUDNrUTFVL2w4TmwyTGg1bmxWOXJVRzZtYlFPV0wvTHJMN3VhUitOcUdSNnNFdUxQOElPTUs1SmUvbitmL3ZQVno5YzNCcjk4bks5Rk5TQUNBL3hxMTN2aHI1Z3hjWUhuS0dOa3JhMWo1NWFleFVYOWFnRGI0dTNFd3FVWkNUMWRoWFAxSmxRUmJYVlUvclJTOTc0OWdyeGRudkR2VE81WmZmdExsbVZzMmNyWHV4blJWdnE1NzluZ3ltNzNSU0MyWHAzNzIxR1lzQzdNcGp2Tlg0YzVmQzVTNXN6SmlVdE04bGszVWloL0NKVlQ0bDM2OTBieG4wdU1uTlIzK0k5LzQydURWOUtnTDlWQldBMGpsMDZ5Yy9uM3YvbE9HTWJJTHJLdzUraXV5Z2N2cTRGb2JMSlE3eWx1TFlZbHQybG9YZldZMS9xMFM3bDdUZFBYYXFKT09kYjdFemhqOTlyM2EzbnVXVFZkbDJEZkRXbzJwOUt1ZmRvRmEwWWxsbXZUdDhic3pjd3YzUExRUm8vRHhIdTExdVBmeVI3L3VNUzJINVhESnFGZWlkQUR0bVRramN3aVB0K3ptdS9jMzM4K3lmdThHMUp6NVZXWDVhQ25BZG5yckExWmNMZDcvb1lmU3U1d04ySFFUbkw1RjNLMEpPNVhCRW56UHZLQUFBQzhCSlJFRlVFMi9iS2hRcFZURXZ4NlVJVlRsbzVkbHl3R2JwemhFcHdMR3Ztc3VlaGRPTnAvZk9YVTV0MjFtbmN1djZ2ZTgxZHZXcFhLbllsUmdkOHd1ZWtYaVBaU1ZhNlRXYUd0bFRDSjI1K1pmY2puTW9ISDRCZXdUWUsyMzBVMUV1cVdEd2hNVEVqbDI0L3dMNmlzbmRac2NOZnB3YjMvd01qLzdjcHlQTFQwc0JBUDhRZkk4elBQY3krSDNIcUErb0dJbVRMalUweXY1NjgzSXlwc1doR1I2bll4WUJGL3BOUFZ4QnJGRmZkdE9YYkVEM0JzR3QwVERXQkozYlllNW4yWCt6MlZOMGNENmxBTjZ3ZkYvcHkySzRSRW9uSmE2TEJHY1g4dzBXU2xKNGdMbkxCdWJ3SkhOejl4WHA1L2E0cWJTQXl3eFdhZDBwbWpwUFFubU9tTm14NFloRHJrOWJybjNvbi9PQnYvQnB5dkhUVmdBQXJuRHJQUTh6L001NzJMekdHRGhCS0hYQlllV3dkVGxNSmdRYVBYUlN1UUUvdFdCUnp6akh5L2VvWVZkRHhJTWh0cTc3c0crWFhFYksrQVM1dm5mRm03NmxlN0YyQ3dVTlZ4ODV2WHYwNWFsaE1pUG1qYmIxQ0JIdWMvTWdEUVJxNGZTTEI1aklPcU1TZ0k4Sjl3cjBKanlFVDdqOWtTTWZ1Q1UvemMzditZZGMvVDF3Sy8rNktBREFjOXo2Rng5SEhuODl3MWRLZUlHcUJKV21zWWg4V1owYzlmeTJYYzV0bGRSWlB4NjF0NnVuM1JkZE81aVZ3NWE4SHMzYi8vVnl6bGp2QjNTdmNYTzkzMk1oYnJKNks4cTRlTHpQOEFTcHNucDVxUWQ2TGg0aFhQMWM4M3ZQYlR4R0tyR1RNbGxDNEI2RWprNlFKdkFkMmFZUStBbHpwSGtWN2MrY01IQkxIdVA1Zi9vWVQvM1Y1N255NkwrSy9JVFB6RmY2Umk2OSs4VTg5SG5udU1oTnpsTTIwbS9JSEpEWW9veHhUTUVHdEI1Q1BaSnNpS0d3T0xGTWxTUkRGSmFHT0hsc29EOWxWTHRUUzVQMmUvSGpiT1B1cktDMEtqTHIzcWlZckgyTVNodUZyMHVrWWRtcVJYUUwxM0cyZnExZTdqS0RvcVRXU3JyOUt1cXNWbHg4ak9BVzNGQXFnWVM3VDYyajl6aHFBc2RSaXQraDNQSWY1dm5mLzhzODlVNjRNdityQ3U0enBRQUF2SXBMdisvMzh0QS8ybkhSNythODNHQkQ0aEE0Q0lFZmhCSU0wVTIwWlRuTnFuUVhwUlNiYkhOcUFrK2tUdmdKVmllWUxrZlNFbWNWMVlNcjBsNkxlVDhUc04rSTBPL1hxM3Q5YWhGcTJodG5ZelhZNmQwS3RtV3ZaNXZ5MFJ5MWV5TmJyUWxreUtFQUdvVWRPMm45L3FuRi9oTVN4OEg1SDNHYlcvWTB6Ny8zKy9uNXQzNm1aSlkra3dyd0hMYysvRExPZmNtTDhGZEM1aWpHdm5MWHBpMWRDYVp1c3lxWlFGVDh4T05RNVc2L21BWmVhTEhlMTFWLzZmcDJ1bmw1RFl0VHpmRTYxdkVBSGE2UW9KVGNncUVMSXNlOUNDczJRZGovMzk3Wi9OWjVWR0g4TnpQM3Z2YjFSMnczalcrK1NGSzFmS29sU0JRUVZFaUlpaUpVc2FqRUNpR3g2YUpJc0VNQ3RXelpGSlVsUWtYQVAxQXFGcFJGMUVSRm9DSTFxZ1JxMUNZNGJVMmlOSEUrSENlMjc3M3Z4OHl3bURQenpuVmFnVlFTTzRMWjJJbXY0L2llODU0NTV6blBlWTcwN3JXT1NhRE5NRUNibXN0cGZNUElISklLV0w1V0R1c0NkU3RVQklITzVWMkpsMjEvV21wN1Q0bWhwS0ppeElaWEROVkpidnp3VmRhZmhEVzNJeDBBY0RWcjV5clVQWVppZHc4L1ZkTDFXa3pVakcwU2ExbTVTb2R0SkNoUjNaQnNXL2tndEdCTUhFSjFZOE1iM29QU2JpeXB3MmNJb0V6dk9pWEFzNWZCU2hWWXQwckFHNmRraGg4WGpLVGFURDUrakVQcTNuc2FaZkdwYis5UlFzTU95YUtRT0xRUHZYdlZ5TDhuZDcyM2VGMkJkUCtNcTZXZUQ4Q09GWmczWVB3bG5nR2FkWFdXMVdOTFhIdTI1TUwxLzZiQkZMZm5GSUQrQVE4TkhWUEFMRENCWlJKTElTRy9JeDhuTVJnTVhkQmQyWGZYb1NPaFBzd2hkTkJHU1U0UTczM0NhNjJzYjQrN3psMm1IYTRWSFZsM1oyL3hkcDEwQ1pPR2ZrWXBpT1NWVm1KRlFuK2N6ODhGSFdPWVQwSVlWbmg5WGtKL0hRWTJzRmhWWTN5RGNVMkdBdGJpQUkwNFFRQjQ1dG5rQnNPTGYyTHRtYk9jK2UzdE1KUzVUUTVnQTcxY3ZUYUFtL3ZSRHpkUzNBV2V1a3BUd1dPTm1oU2kyMElzQ1VtNklMM2lmZHZIQzdRb0g3SnhhVS9wamdQbEFzS0lRL3RRTmNUNlhlZXl6ejVrKzBiSmlKWkVIdTl0ZXZvVG9xZkR6OEhickJWa1Evbm1XaTZmMVFIb2FYd1RyaDRYcmdIZHFXbDhEYTVDKzRaR3FGeU5oSHVvNlRLa1ljQU1RenhETnJqSktkWmZQUFVoNnZ6dGNnQUFkNTNOSmMrMVM3dVplWFFhZjArNFJZM1NBaE8xbVhNY0VMZmlIQ0djYWg4TUYyZjBsSTdicEtMeHlYcUtLdHpMV0t5UDd1VlEzcWY3M09sd3Q0Y3kwdU45YU0xNjFVaWRUekN3L0J5ckE0NGZzdlU2WFFXSjBhdERlSThoM25waDhGQ0xVMllsbnEzUXZoWVlxRXdTa2JHenB4blJvOFJUZWNlbVdtWGo3TXVzZm5XSnQzLzluL1QxZDlvVmNNdDVuQ012NzJmMjBZSTVLanBVVElld1QwRkJnWlc5aFVZcUF5TUxEZ052c0p1eS9sQkNDdEhmR2lrSlRTb0ZkYVp1YkRLdXNZRzBVSWxzbERXS1M3bXNRTFJqZmNtQTBHdGF6YU00TTFocEo0emNkZ1FNWWZxRUs0Q3NwSE1wM0FmNmRxUjF0UTBkUzRtaDRVMXUvUEtmWFA3WlJWYmV1ZDEyTVhmS0FaWlkrOTBtNmwySE05UDRCN3BvRmVmd0N4R2ZzbHVWUU1iYU9BTFllZ0ZnZk5xNG03NHVHM1pUWHo3VTlyYnR5eXVMZG5FQlFjdlFTWWlkYWdTcGE2ZDBvMkphb3h0WlYrWUV1Uk1rVDZvQkx6TjVxR0Rrd055dEpOUTM4cHZHamw1bzZ4cEdhSWJ5K1NhWEtQLzhkMWEvZDRscnY3akV5dFU3WVpjN0ZnRXloenY4WFk2ODNtTjJQdkJYZXl3d3dZZ0NRNEdWYUJDQklaT3dnZ2dFUlJCSnk0eENyUDg3TXZncHpXbXZaZWxrb0NIcmRpY3RPSlZ0MEdxVEZxdGJZV2FkVVRyRHBzd1dFTEpSMU5nMFlETWRQdTBvWE1NdzZ3akdZUTByTWxFTk5iTlloZ3pwVVRIRTBtT2Q5eGk4OWdiclQ1OWorZmlkTk1pZGRvQjBEc0ZqRC9EeHAvWXcvY2dDVTR0aGJXMjRGb0lUQklBb09rTDR2RjJGYnJPOXVQRnJabXhSbTZielBndG04aXJBYkJXZ0lzcE51VVFzaWFyb0dGSDB0czBZRUJRTW5JczdSV0dOcUsvVUpNUEhhZDJwZ08vN0FTTi9pSUYraGRXZm5tVDVKOXRoQjdOZERuQUR6bys0OWplTDYreW44MFdmeUNHTkdLYVd2cDRWRE45dW9XNGdlSGxrL0lYN040UjFtOVFHWE1iVGJ6RTdteEc3NGpycjJNQnA4Q241YXhKSnczcUhWNVZVQnJVZ2RuWFd6dzlQZVVPTm9VejkrNFphUmxrSFFNVUVRelNid0hCMGlkVVRyM0Rsc2ROY2VIRzdIc1p0aXdCYnoxR08vUGdBczQvdlplcnpCZDBDSmlVSzlHZ1huYld3c2QyU0hCWmJxT3BtYkpkWTV1dHBTa1dqVGJaU044Mk5PWUdTOHcxNzdSTnV4L2dGc2RVcmZIMkpHeWFiejIrb01EaXZLRlhCQ0VQTkdkYU92VTM1M0FXV2oyWC9TZjgvN1FDN1lIRU9EbitXSTc4NndPeFJUUmZIRkpVQVJjaTFFTFFFQ3duRDNaUWZHQmxVYWE4RWs3MnY1bGJ3L3dPT3pxUXU3QloxN2poNmJWS0R5R1lLYWJHY3JXaUhQaXZtS0xsTXd5eURsYjlTLzJpVDlmUG5XRDZ4VTk3M0hlTUFXNXloZjREKzE0K3krSXlpZTNpT3FRa3J5Wi9CVU1sMGtza2lnMDJsWURCOGZFVTBxNVUvNWZlOVNlSlJqcTZZUGdoV3VreUd2YzZ4TGFJRW5oM3JCZ2FqRDZnWjB2aDlXQVVqTm9DS3dYdG4ySHlob256dUxaYlBiZmNUZjFjNFFEd2ZnMjlOMC8vSUJMMzdGcGg5YUIvZHJ4UjBzZlFFV2tad0JGSjBpTTdRQ3FQck1WU0FMUlRUdkRrY0EzNVU3NHdHdGtua0luQnppaFR1UTMzZmdGZVV3aG9ZcVlyNjVCNEdEeDVuL2VtckRIOS9sWlZ6dHhQTStUQ25zNU1kNEIvd0FxeXdDeGI2OEtWSitvdDk1ajlsR0FCVDhxb2VOdjBhSmltYW1XUXlhR2NaMjJ5Z2tqWHFWZlozc1p3ejJYZTEyVURGRklHV1lRZ1NXbUNab1FHR2FwWDY0Z3pzK3d1YjMxbW0vQU1zMzloSlQvcGRHUUUrNEV3Y2dpL3ZwZi9FRWVhL3NZZml2b3F1bEkvaC9wK2tJN1EweEZ6STlSRnJneFlkYkovNnRvdlZodmVHRW53SGxLVmtHaGhKa2pjQm5HYnd4N1B3bXg3Vi9hYzQ4eXl3RzdoMk43MlpkNk1EYk0wWDd0MUQvMnNINFlsUDBQdm1PMHk4V2xOY1g2VDdtVGs0Vk5EdGFwRzRiSkl4T3hUQUJqQWpVYUFDNW9uRTYyRDhDdGhGelp2VUwwM0Q1ejVKdlhnQ2ZyNUFkZis3bE04dk1Ud09LK1g3dktmKy93NndmV2QrSC8wRE0vRFJDWG9QM29UWEYrSFRCNW40OWhVNERWejJGTE43NFFzYVJ1ZmhaQS8yN0lXSFMxaDdpK3I1QllwSEZxZ092Z0hmbjZROHNNVHlTL2ZTNzhPS3Z3cFg3aVlELzd2ekw1MUdWTWliVFJxc0FBQUFBRWxGVGtTdVFtQ0NcIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gVEhSRUU7Il0sInNvdXJjZVJvb3QiOiIifQ==