var sharkViewer;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@janelia/three-orbit-unlimited-controls/dist/OrbitUnlimitedControls.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@janelia/three-orbit-unlimited-controls/dist/OrbitUnlimitedControls.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, exports) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

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

/***/ "./node_modules/stats.js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/stats.js/build/stats.min.js ***!
  \**************************************************/
/***/ (function(module) {

// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});


/***/ }),

/***/ "./node_modules/three-obj-loader/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/three-obj-loader/dist/index.js ***!
  \*****************************************************/
/***/ ((module) => {

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

/***/ "./src/viewer/util.js":
/*!****************************!*\
  !*** ./src/viewer/util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swcParser": () => (/* binding */ swcParser),
/* harmony export */   "NODE_PARTICLE_IMAGE": () => (/* binding */ NODE_PARTICLE_IMAGE)
/* harmony export */ });
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
/***/ ((module) => {

"use strict";
module.exports = THREE;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/shark_viewer.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swcParser": () => (/* reexport safe */ _viewer_util__WEBPACK_IMPORTED_MODULE_0__.swcParser),
/* harmony export */   "default": () => (/* binding */ SharkViewer)
/* harmony export */ });
/* harmony import */ var _viewer_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer/util */ "./src/viewer/util.js");




const THREE = __webpack_require__(/*! three */ "three");
__webpack_require__(/*! three-obj-loader */ "./node_modules/three-obj-loader/dist/index.js")(THREE);
const Stats = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");

const OrbitUnlimitedControls = (__webpack_require__(/*! @janelia/three-orbit-unlimited-controls */ "./node_modules/@janelia/three-orbit-unlimited-controls/dist/OrbitUnlimitedControls.js")["default"]);

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
    this.showStats = false;
    this.animated = false;
    this.three = THREE;

    this.showAxes = false;
    this.show_cones = true;
    this.brainboundingbox = null;
    this.last_anim_timestamp = null;
    this.mouseHandler = null;
    this.nodeParticleTexture = _viewer_util__WEBPACK_IMPORTED_MODULE_0__.NODE_PARTICLE_IMAGE;
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

})();

sharkViewer = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmtfdmlld2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7O0FBRWIsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjs7QUFFbEIsbUJBQU8sQ0FBQyx5R0FBMEM7O0FBRWxELG1CQUFPLENBQUMsdUhBQWlEOztBQUV6RCxvQ0FBb0MsbUJBQU8sQ0FBQyxvQkFBTzs7QUFFbkQsaURBQWlELGdEQUFnRCx1Q0FBdUMsc0NBQXNDLG9GQUFvRiw0REFBNEQ7O0FBRTlULHFEQUFxRCw2Q0FBNkMsY0FBYyw4RUFBOEUsU0FBUyxvQkFBb0IsbURBQW1ELCtCQUErQix5QkFBeUIsaUJBQWlCLHNGQUFzRix1QkFBdUIsMkVBQTJFLHFGQUFxRixzQ0FBc0MsNENBQTRDLE9BQU8sOEJBQThCLHlCQUF5QixhQUFhLDBCQUEwQjs7QUFFM3hCLGtEQUFrRCwwQ0FBMEM7O0FBRTVGLDJDQUEyQywrREFBK0QsNkVBQTZFLHlFQUF5RSxlQUFlLHVEQUF1RCxHQUFHOztBQUV6VSxpQ0FBaUMsNEVBQTRFLGlCQUFpQixhQUFhOztBQUUzSSxpQ0FBaUMsNkRBQTZELHlDQUF5Qyw4Q0FBOEMsaUNBQWlDLG1EQUFtRCwyREFBMkQsT0FBTyx5Q0FBeUM7O0FBRXBYLGtEQUFrRCwwRUFBMEUsZUFBZTs7QUFFM0ksd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLHVDQUF1Qyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLDRFQUE0RSxJQUFJLGVBQWUsWUFBWTs7QUFFeFQsOEJBQThCLGdHQUFnRyxtREFBbUQ7O0FBRWpMLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Y7QUFDeEY7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQSwwRkFBMEY7QUFDMUY7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUEsK0ZBQStGO0FBQy9GOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQ0FBMkM7QUFDM0M7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esa0dBQWtHO0FBQ2xHOztBQUVBLHNGQUFzRjtBQUN0Rjs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7QUNsY2xCLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7Ozs7Ozs7Ozs7QUNOQSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsYUFBYSxtQkFBTyxDQUFDLHFGQUE0QjtBQUNqRCwyQkFBMkIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25CQSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCOztBQUUvQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Ozs7O0FDTkEsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU5RCxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxXQUFXLGdCQUFnQjtBQUNqQztBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0JBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBLFVBQVUsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDcEMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxxQ0FBcUMsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDOUYsMkJBQTJCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUFk7QUFDYix3QkFBd0IsZ0lBQXdEO0FBQ2hGLGFBQWEsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDakQsK0JBQStCLG1CQUFPLENBQUMsK0dBQXlDO0FBQ2hGLHFCQUFxQixtQkFBTyxDQUFDLDZGQUFnQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRWhELCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBLDhEQUE4RCx5Q0FBeUM7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtQkFBTyxDQUFDLHVHQUFxQztBQUN4RSwrQkFBK0IsbUJBQU8sQ0FBQywrR0FBeUM7O0FBRWhGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxnQ0FBZ0MsbUJBQU8sQ0FBQyxpSEFBMEM7QUFDbEYscUJBQXFCLG1CQUFPLENBQUMseUdBQXNDO0FBQ25FLHFCQUFxQixtQkFBTyxDQUFDLHlHQUFzQztBQUNuRSxxQkFBcUIsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDN0Qsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDO0FBQ3ZGLGVBQWUsbUJBQU8sQ0FBQywyRUFBdUI7QUFDOUMsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsZ0JBQWdCLG1CQUFPLENBQUMsNkVBQXdCO0FBQ2hELG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUMsZ0RBQWdEO0FBQ2hELE1BQU0scUJBQXFCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsb0ZBQW9GO0FBQ25HOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekZBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLG1CQUFtQixhQUFhO0FBQ3hFLENBQUM7Ozs7Ozs7Ozs7O0FDTkQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbENBLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjs7QUFFcEQ7Ozs7Ozs7Ozs7O0FDRkEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsK0JBQStCLHdKQUE0RDtBQUMzRixrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7QUFDdkYsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZ0NBQWdDLG1CQUFPLENBQUMsaUhBQTBDO0FBQ2xGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixtREFBbUQ7QUFDbkQsSUFBSTtBQUNKLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLG1CQUFPLENBQUMsbUVBQW1CO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFNLGdCQUFnQixxQkFBTTtBQUMzQztBQUNBLGlCQUFpQixjQUFjOzs7Ozs7Ozs7OztBQ2IvQixlQUFlLG1CQUFPLENBQUMsNkVBQXdCOztBQUUvQyx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7O0FBRXBEOzs7Ozs7Ozs7OztBQ0ZBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLHlHQUFzQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7O0FDVkQsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsaUZBQTBCOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7QUNaRixZQUFZLG1CQUFPLENBQUMsbUZBQTJCOztBQUUvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWEEsc0JBQXNCLG1CQUFPLENBQUMseUZBQThCO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7QUFDdkYsZ0JBQWdCLG1CQUFPLENBQUMsaUVBQWtCO0FBQzFDLGFBQWEsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDaEQsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsRUEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMscUJBQXFCLG1CQUFPLENBQUMseUdBQXNDO0FBQ25FLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2QztBQUN2RixVQUFVLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3BDLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxjQUFjLG1CQUFPLENBQUMseUVBQXNCOztBQUU1QztBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzdDQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDZGQUFnQztBQUN6RCxZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNaRCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQ7O0FBRUE7Ozs7Ozs7Ozs7O0FDTEEsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyx1QkFBdUIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDdEUsa0JBQWtCLG1CQUFPLENBQUMscUZBQTRCO0FBQ3RELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxXQUFXLG1CQUFPLENBQUMsbUVBQW1CO0FBQ3RDLDRCQUE0QixtQkFBTyxDQUFDLHlHQUFzQztBQUMxRSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOzs7Ozs7Ozs7OztBQzdFQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsMkJBQTJCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3hFLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDMUQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxrQkFBa0IsbUJBQU8sQ0FBQyxtRkFBMkI7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEJBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyxxSEFBNEM7QUFDckYsK0JBQStCLG1CQUFPLENBQUMsK0dBQXlDO0FBQ2hGLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxrQkFBa0IsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDckQsVUFBVSxtQkFBTyxDQUFDLGlFQUFrQjtBQUNwQyxxQkFBcUIsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEJBLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRXREOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsU0FBUzs7Ozs7Ozs7Ozs7QUNEVCxVQUFVLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELCtCQUErQixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7Ozs7Ozs7OztBQ2pCQSxVQUFVLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3BDLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxjQUFjLHNIQUE4QztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkEseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFLGtCQUFrQixtQkFBTyxDQUFDLHFGQUE0Qjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSYTtBQUNiLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLE1BQU07O0FBRWxGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7O0FDYkY7QUFDQSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUN6QkQsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELGdDQUFnQyxtQkFBTyxDQUFDLHFIQUE0QztBQUNwRixrQ0FBa0MsbUJBQU8sQ0FBQyx5SEFBOEM7QUFDeEYsZUFBZSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7O0FBRTFDOzs7Ozs7Ozs7OztBQ0ZBLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDO0FBQ3ZGLFVBQVUsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDcEMsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCwwQkFBMEIsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRS9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDdkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQSxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKOzs7Ozs7Ozs7OztBQ1RBLHFCQUFxQixnSUFBZ0Q7QUFDckUsVUFBVSxtQkFBTyxDQUFDLGlFQUFrQjtBQUNwQyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0NBQWdDO0FBQ3hFO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxVQUFVLG1CQUFPLENBQUMsaUVBQWtCOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7O0FBRWpEO0FBQ0Esa0RBQWtEOztBQUVsRDs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMseUVBQXNCO0FBQzVDLFlBQVksbUJBQU8sQ0FBQyxtRkFBMkI7O0FBRS9DO0FBQ0EscUVBQXFFO0FBQ3JFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1RELGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5Qjs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFNUU7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTs7Ozs7Ozs7Ozs7QUNSQSw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkEsZUFBZSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMscUZBQTRCOztBQUV4RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFVBQVUsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDcEMsVUFBVSxtQkFBTyxDQUFDLGlFQUFrQjtBQUNwQyxvQkFBb0IsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDeEQsd0JBQXdCLG1CQUFPLENBQUMsNkZBQWdDOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2Isc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQztBQUNoRSxnQkFBZ0IsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDaEQsMEJBQTBCLG1CQUFPLENBQUMsdUZBQTZCO0FBQy9ELHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4Qjs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsVUFBVSxtQkFBTyxDQUFDLGlFQUFrQjtBQUNwQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHFCQUFxQixnSUFBZ0Q7QUFDckUsZ0NBQWdDLG1CQUFPLENBQUMsaUhBQTBDOztBQUVsRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxNQUFNLDRCQUE0QjtBQUNsQztBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNqREEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsMkJBQTJCLG1CQUFPLENBQUMseUZBQThCO0FBQ2pFLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2QztBQUN2RixzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQSxlQUFlLEtBQXNELG9CQUFvQixDQUE0RCxDQUFDLGtCQUFrQixpQkFBaUIsY0FBYyxxQkFBcUIsU0FBUyxjQUFjLFlBQVksb0JBQW9CLHFEQUFxRCxJQUFJLHdDQUF3QyxnQ0FBZ0MsTUFBTSxPQUFPLGVBQWUsWUFBWSxlQUFlLHVDQUF1QztBQUNsZix5QkFBeUIsS0FBSyxtSEFBbUgsc0ZBQXNGLEtBQUssT0FBTywwREFBMEQsNEJBQTRCLGdCQUFnQixJQUFJLGdDQUFnQyxrQkFBa0IsbURBQW1ELHlCQUF5QjtBQUMzZCxtQ0FBbUMsU0FBUyxtQkFBbUIsYUFBYSwwQkFBMEIsd0JBQXdCLHdKQUF3SixVQUFVLFdBQVcsNEJBQTRCLGFBQWEseUJBQXlCLG1EQUFtRCxxQkFBcUIsY0FBYyxvQkFBb0IsY0FBYztBQUNyZSxvQkFBb0IsY0FBYyxpQkFBaUIsb0JBQW9CLE9BQU8sMkJBQTJCLGdCQUFnQixnQkFBZ0IsY0FBYyxnQkFBZ0Isb0JBQW9CLGNBQWMsa0RBQWtELHFDQUFxQyx3QkFBd0IsY0FBYyxpQkFBaUIsc0NBQXNDLFNBQVM7Ozs7Ozs7Ozs7OztBQ0p6WDs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlELFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFjOztBQUVkOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxnREFBZ0QsUUFBUTs7QUFFeEQ7QUFDQTs7QUFFQSw0Q0FBNEMsU0FBUzs7QUFFckQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsT0FBTzs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVos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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixhQUFhLE1BQU07QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL0BqYW5lbGlhL3RocmVlLW9yYml0LXVubGltaXRlZC1jb250cm9scy9kaXN0L09yYml0VW5saW1pdGVkQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL2J1aWxkL3N0YXRzLm1pbi5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy90aHJlZS1vYmotbG9hZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9zcmMvdmlld2VyL3V0aWwuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvZXh0ZXJuYWwgdmFyIFwiVEhSRUVcIiIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoYXJrVmlld2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9zcmMvc2hhcmtfdmlld2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxucmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIik7XG5cbnJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiKTtcblxudmFyIFRIUkVFID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInRocmVlXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBUaGUgc3RhdGVzIG9mIHRoZSBzaW1wbGUgZmluaXRlIHN0YXRlIG1hY2hpbmUgZm9yIHRoZSB0cmFja2JhbGxzIGludGVyYWN0aW9uLlxuLy8gVGhlICdJTkRFVEVSTUlOQVRFJyBzdGF0ZSBpcyBmb3Igd2hlbiB0aGUgbW91c2UgaXMgZG93biBidXQgaXQgaGFzIG5vdCB5ZXQgbW92ZWRcbi8vIGZhciBlbm91Z2ggdG8ga25vdyBpZiBpdCBpcyBhIGRyYWcgb3BlcmF0aW9uIChmb3Igcm90YXRpb24pIG9yIGp1c3QgYSBjbGljay5cbnZhciBTdGF0ZSA9IE9iamVjdC5mcmVlemUoe1xuICBJTkFDVElWRTogU3ltYm9sKCdJTkFDVElWRScpLFxuICBJTkRFVEVSTUlOQVRFOiBTeW1ib2woJ0lOREVURVJNSU5BVEUnKSxcbiAgUk9UQVRJTkc6IFN5bWJvbCgnUk9UQVRJTkcnKSxcbiAgRE9MTFlJTkc6IFN5bWJvbCgnRE9MTFlJTkcnKSxcbiAgUEFOTklORzogU3ltYm9sKCdQQU5OSU5HJylcbn0pO1xudmFyIENsaWNrVGhyZXNob2xkID0gMjtcblxudmFyIE9yYml0VW5saW1pdGVkQ29udHJvbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9USFJFRSRFdmVudERpc3BhdGNoZSkge1xuICBfaW5oZXJpdHMoT3JiaXRVbmxpbWl0ZWRDb250cm9scywgX1RIUkVFJEV2ZW50RGlzcGF0Y2hlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE9yYml0VW5saW1pdGVkQ29udHJvbHMpO1xuXG4gIGZ1bmN0aW9uIE9yYml0VW5saW1pdGVkQ29udHJvbHMob2JqZWN0LCBkb21FbGVtZW50KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9yYml0VW5saW1pdGVkQ29udHJvbHMpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZXNldFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy50YXJnZXQuY29weShfdGhpcy50YXJnZXQwKTtcblxuICAgICAgX3RoaXMub2JqZWN0LnBvc2l0aW9uLmNvcHkoX3RoaXMucG9zaXRpb24wKTtcblxuICAgICAgX3RoaXMudXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9iamVjdC5sb29rQXQoX3RoaXMudGFyZ2V0KTtcblxuICAgICAgaWYgKF90aGlzLnN0YXRlICE9PSBTdGF0ZS5ST1RBVElORykge1xuICAgICAgICBfdGhpcy5maXhVcCgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KF90aGlzLmNoYW5nZUV2ZW50KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk1vdXNlRG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN0YXRlID0gU3RhdGUuSU5ERVRFUk1JTkFURTtcbiAgICAgIF90aGlzLnByZXYgPSBuZXcgVEhSRUUuVmVjdG9yMihldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIE1hbnVhbGx5IHNldCB0aGUgZm9jdXMsIGJlY2F1c2UgcHJldmVudERlZmF1bHQoKSBwcmV2ZW50cyBhdXRvbWF0aWMgc2V0dGluZy5cblxuICAgICAgaWYgKF90aGlzLmRvbUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLm9uTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMub25Nb3VzZVVwLCBmYWxzZSk7XG5cbiAgICAgIF90aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBfdGhpcy5vbkNvbnRleHRNZW51LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Nb3VzZVdoZWVsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLnN0YXRlID0gU3RhdGUuRE9MTFlJTkc7XG4gICAgICBfdGhpcy5wcmV2ID0gbmV3IFRIUkVFLlZlY3RvcjIoMCwgMCk7XG5cbiAgICAgIF90aGlzLmRvbGx5KDAsIC1ldmVudC5kZWx0YVkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTW91c2VNb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgc3dpdGNoIChldmVudC5idXR0b25zKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICAvLyBPbiBtYWNPUywgYWx0S2V5IGluZGljYXRlcyB0aGUgJ29wdGlvbicga2V5LlxuICAgICAgICAgICAgX3RoaXMucGFuKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5yb3RhdGUoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF90aGlzLnBhbihldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfdGhpcy5kb2xseShldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Nb3VzZVVwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuUk9UQVRJTkcpIHtcbiAgICAgICAgLy8gQXQgdGhlIGVuZCBvZiB0aGUgZHJhZ2dpbmcgb3BlcmF0aW9uLCByZWNvbXB1dGUgdGhpcy5jYW1lcmEudXAgc28gaXQgaXMgb3J0aG9nb25hbFxuICAgICAgICAvLyB0byB0aGUgdmVjdG9yIGZyb20gdGhpcy5jYW1lcmEucG9zaXRpb24gdG8gdGhpcy50YXJnZXQuXG4gICAgICAgIF90aGlzLmZpeFVwKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNsaWNrZWQgPSBfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuSU5ERVRFUk1JTkFURTtcbiAgICAgIF90aGlzLnN0YXRlID0gU3RhdGUuSU5BQ1RJVkU7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfdGhpcy5vbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLm9uTW91c2VVcCwgZmFsc2UpO1xuXG4gICAgICBfdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgX3RoaXMub25Db250ZXh0TWVudSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uS2V5RG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBkb1BhbiA9IGZhbHNlO1xuICAgICAgdmFyIHg7XG4gICAgICB2YXIgeTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgX3RoaXMua2V5cy5VUDpcbiAgICAgICAgICBkb1BhbiA9IHRydWU7XG4gICAgICAgICAgdmFyIF9yZWYgPSBbMCwgX3RoaXMua2V5UGFuU3BlZWRdO1xuICAgICAgICAgIHggPSBfcmVmWzBdO1xuICAgICAgICAgIHkgPSBfcmVmWzFdO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgX3RoaXMua2V5cy5ET1dOOlxuICAgICAgICAgIGRvUGFuID0gdHJ1ZTtcbiAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICB5ID0gLV90aGlzLmtleVBhblNwZWVkO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgX3RoaXMua2V5cy5MRUZUOlxuICAgICAgICAgIGRvUGFuID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgX3JlZjIgPSBbX3RoaXMua2V5UGFuU3BlZWQsIDBdO1xuICAgICAgICAgIHggPSBfcmVmMlswXTtcbiAgICAgICAgICB5ID0gX3JlZjJbMV07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBfdGhpcy5rZXlzLlJJR0hUOlxuICAgICAgICAgIGRvUGFuID0gdHJ1ZTtcbiAgICAgICAgICB4ID0gLV90aGlzLmtleVBhblNwZWVkO1xuICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChkb1Bhbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLlBBTk5JTkc7XG4gICAgICAgIF90aGlzLnByZXYgPSBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKTtcblxuICAgICAgICBfdGhpcy5wYW4oeCwgeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Db250ZXh0TWVudVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgdGhlIGNvbnRleHQgbWVudSBmcm9tIGFwcGVhcmluZyB3aGVuIHRoZSBzZWNvbmRhcnkgYnV0dG9uIGlzIGNsaWNrZWQsXG4gICAgICAvLyBzaW5jZSB0aGF0IGJ1dHR0b24gaXMgdXNlZCBmb3IgcGFubmluZy5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicm90YXRlXCIsIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICB2YXIgY3VyciA9IG5ldyBUSFJFRS5WZWN0b3IyKHgsIHkpO1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFN0YXRlLklOREVURVJNSU5BVEUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gY3Vyci5tYW5oYXR0YW5EaXN0YW5jZVRvKF90aGlzLnByZXYpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA+IENsaWNrVGhyZXNob2xkKSB7XG4gICAgICAgICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5ST1RBVElORzsgLy8gV2hlbiB0aGUgbW91c2UgaGFzIG1vdmVkIGZhciBlbm91Z2ggdGhhdCB3ZSBrbm93IHRoZSB1c2VyIGlzIG5vdCBqdXN0IGNsaWNraW5nLFxuICAgICAgICAgIC8vIHByZXBhcmUgdG8gY29udmVydCBlYWNoIHN1YnNlcXVlbnQgbW91c2UgbW90aW9uIGludG8gY2FtZXJhIHJvdGF0aW9uIHVzaW5nXG4gICAgICAgICAgLy8gc3BoZXJpY2FsIGNvb3JkaW5hdGVzLiAgV2UgdXNlIHNwaGVyaWNhbCBjb29yZGluYXRlcyB0byBjb21wdXRlIHRoZSBuZXcsIHJvdGF0ZWRcbiAgICAgICAgICAvLyBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhIGFzIGlmIHRoZSBjYW1lcmEgc3RhcnRlZCBpbiBhIGRlZmF1bHQgb3JpZW50YXRpb24sXG4gICAgICAgICAgLy8gcG9zaXRpb25lZCBvbiB0aGUgcG9zaXRpdmUgWiBheGlzIGxvb2tpbmcgdG93YXJkcyB0aGUgb3JpZ2luLiAgVGhlbiB3ZSBtYXAgdGhlXG4gICAgICAgICAgLy8gcm90YXRlZCBwb3NpdGlvbiB0byB0aGUgY2FtZXJhJ3MgdHJ1ZSBjb25maWd1cmF0aW9uLiAgVGhlIG9yaWVudGF0aW9uIHBhcnQgb2YgdGhhdFxuICAgICAgICAgIC8vIG1hcHBpbmcgaXMgYSBcImJhc2lzIG1hdHJpeFwiLCB3aGljaCByZXBvc2l0aW9ucyBhIHBvaW50IGV4cHJlc3NlZCByZWxhdGl2ZSB0byB0aGVcbiAgICAgICAgICAvLyBzdGFuZGFyZCBYLCBZIGFuIFogYXhlcyB0byBhIG5ldyBwb2ludCB3aGVyZSB0aGUgYXhlcyBoYXZlIGNoYW5nZWQgYXMgZm9sbG93czpcbiAgICAgICAgICAvLyAtIHRoZSBaIGF4aXMgaGFzIGJlY29tZSB0aGUgKG5vcm1hbGl6ZWQpIHZlY3RvciBmcm9tIHRoaXMudGFyZ2V0IHRvIHRoaXMub2JqZWN0LnBvc2l0aW9uXG4gICAgICAgICAgLy8gLSB0aGUgWSBheGlzIGhhcyBiZWNvbWUgdGhpcy5vYmplY3QudXBcbiAgICAgICAgICAvLyAtIHRoZSBYIGF4aXMgaGFzIGJlY29tZSB0aGUgKG5vcm1hbGl6ZWQpIGNyb3NzIHByb2R1Y3Qgb2YgdGhlIG90aGVyIHR3byBheGVzXG4gICAgICAgICAgLy8gVGhlIHJlbWFpbmluZyBwYXJ0IG9mIHRoZSBtYXBwaW5nIHRyYW5zbGF0ZXMgdGhlIG9yaWdpbiB0byB0aGUgbG9jYXRpb24gb2ZcbiAgICAgICAgICAvLyB0aGlzLnRhcmdldC5cblxuICAgICAgICAgIHZhciB6QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhfdGhpcy5vYmplY3QucG9zaXRpb24sIF90aGlzLnRhcmdldCk7XG4gICAgICAgICAgX3RoaXMucmFkaXVzID0gekF4aXMubGVuZ3RoKCk7XG4gICAgICAgICAgekF4aXMuZGl2aWRlU2NhbGFyKF90aGlzLnJhZGl1cyk7XG4gICAgICAgICAgdmFyIHlBeGlzID0gX3RoaXMub2JqZWN0LnVwO1xuICAgICAgICAgIHZhciB4QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKHlBeGlzLCB6QXhpcykubm9ybWFsaXplKCk7XG4gICAgICAgICAgX3RoaXMuYmFzaXNNYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VCYXNpcyh4QXhpcywgeUF4aXMsIHpBeGlzKTtcbiAgICAgICAgICB2YXIgdHIgPSBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbihfdGhpcy50YXJnZXQueCwgX3RoaXMudGFyZ2V0LnksIF90aGlzLnRhcmdldC56KTtcblxuICAgICAgICAgIF90aGlzLmJhc2lzTWF0cml4LnByZW11bHRpcGx5KHRyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFN0YXRlLlJPVEFUSU5HKSB7XG4gICAgICAgIC8vIENvbXB1dGUgdGhlIG5ldywgcm90YXRlZCBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhIGJhc2VkIG9uIHNwaGVyaWNhbCBjb29yZGluYXRlcy4gIFVzZSB0aGVcbiAgICAgICAgLy8gXCJwaHlzaWNzIChJU08gY29udmVudGlvbilcIiB2ZXJzaW9uIG9mIHNwaGVyaWNhbCBjb29yZGluYXRlcyBkZXNjcmliZWQgaGVyZSwgYnV0IHdpdGggdGhlXG4gICAgICAgIC8vIGF4ZXMgc3B1biwgdG8gbWFrZSB0aGVpciBYIGJlY29tZSBvdXIgWiwgdGhlaXIgWSBiZWNvbWUgb3VyIFggYW5kIHRoZWlyIFogYmVjb21lIG91ciBZLlxuICAgICAgICAvLyBCYXNlZCBvbiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoLCB1c2luZyBzcGhlcmljYWwgY29vcmRpbmF0ZXM6XG4gICAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NwaGVyaWNhbF9jb29yZGluYXRlX3N5c3RlbVxuICAgICAgICAvLyBUaGUgYWxnb3JpdGhtIGNvbWJpbmVzIGRldGFpbHMgb2YgdGhlc2UgdHdvIGFwcHJvYWNoZXM6XG4gICAgICAgIC8vIDEuIExpdmluZ3N0b24gZXQgYWwuOlxuICAgICAgICAvLyBodHRwOi8vd3d3LmNzLnVuYy5lZHUvfmxpdmluZ3N0L25hdmlnYXRlLmh0bWxcbiAgICAgICAgLy8gMi4gUm9obmVyOlxuICAgICAgICAvLyBodHRwczovL2FuZHJlYXNyb2huZXIuYXQvcG9zdHMvV2ViJTIwRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9TaW1wbGUtb3JiaXRhbC1jYW1lcmEtY29udHJvbHMtZm9yLVRIUkVFLWpzL1xuICAgICAgICAvLyBMaWtlIExpdmluZ3N0b24gZXQgYWwuLCB1c2Ugc3BoZXJpY2FsIGNvb3JkaW5hdGVzIGFzIGlmIHRoZSBjYW1lcmEgaXMgaW4gYSBkZWZhdWx0XG4gICAgICAgIC8vIG9yaWVudGF0aW9uLCBwb3NpdGlvbmVkIG9uIHRoZSBwb3NpdGl2ZSBaIGF4aXMgbG9va2luZyB0b3dhcmRzIHRoZSBvcmlnaW4sIGFuZCB0aGVuIHVzZVxuICAgICAgICAvLyBhIGJhc2lzIG1hdHJpeCB0byBtYXAgdGhlIHJlc3VsdCBhY2NvcmRpbmcgdG8gdGhlIGNhbWVyYSdzIHRydWUgY29uZmlndXJhdGlvbi4gIFdpdGggdGhpc1xuICAgICAgICAvLyBhcHByb2FjaCwgdGhlIGluY2xpbmF0aW9uICh0aGV0YSkgYW5kIGF6aW11dGggKHBoaSkgYXJlIGNvbXB1dGVkIGRpcmVjdGx5IGZyb20gdGhlIHRoZVxuICAgICAgICAvLyBhbW91bnQgdGhlIG1vdXNlIGhhcyBtb3ZlZCBzaW5jZSB0aGUgaW5pdGlhbCBsb2NhdGlvbiBvbiB0aGUgJ21vdXNlZG93bicgZXZlbnQuICBOb3RlIHRoYXRcbiAgICAgICAgLy8gdGhlIGluY2xpbmF0aW9uIHN0YXJ0cyBhdCBwaS8yLCBub3QgMC4gIE5vdGUgYWxzbyB0aGF0IExpdmluZ3Rzb24gZXQgYWwuIHN3YXAgdGhlIG1lYW5pbmdzXG4gICAgICAgIC8vIG9mIHBoaSBhbmQgdGhldGEuXG4gICAgICAgIHZhciBkZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCkuc3ViVmVjdG9ycyhjdXJyLCBfdGhpcy5wcmV2KTtcbiAgICAgICAgdmFyIHNwZWVkID0gMi4wICogX3RoaXMucm90YXRlU3BlZWQ7XG4gICAgICAgIGRlbHRhLm11bHRpcGx5U2NhbGFyKHNwZWVkKTtcbiAgICAgICAgdmFyIHBoaSA9IC1kZWx0YS54ICogKE1hdGguUEkgLyBfdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICAgICAgdmFyIHRoZXRhID0gLWRlbHRhLnkgKiAoTWF0aC5QSSAvIF90aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIE1hdGguUEkgLyAyOyAvLyBQcmV2ZW50IHRoZSBpbmNsaW5hdGlvbiBmcm9tIGdldHRpbmcgdG9vIGNsb3NlIHRvIDAgb3IgcGkuICBJbiBlaXRoZXIgb2YgdGhvc2UgY2FzZSxcbiAgICAgICAgLy8gc3BoZXJpY2FsIGNvb3JkaW5hdGVzIHN0b3Agd29ya2luZywgZHVlIHRvIFwiZ2ltYmFsIGxvY2tcIi5cblxuICAgICAgICB2YXIgZXBzID0gMC4wMTtcbiAgICAgICAgdGhldGEgPSBNYXRoLm1heCh0aGV0YSwgZXBzKTtcbiAgICAgICAgdGhldGEgPSBNYXRoLm1pbih0aGV0YSwgTWF0aC5QSSAtIGVwcyk7IC8vIEdpdmVuIHRoZSBpbmNsaW5hdGlvbiBhbmQgYXppbXV0aCBkZXRlcm1pbmVkIGJ5IHRoZSBsYXRlc3QgbW91c2UgcG9zaXRpb24sIGNvbXB1dGUgdGhlXG4gICAgICAgIC8vIG5ldyBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhIHVzaW5nIHNwaGVyaWNhbCBjb29yZGluYXRlcy4gIEJvdGggTGl2aW5nc3RvbiBldCBhbC4gYW5kIFJvaG5lclxuICAgICAgICAvLyBkbyBhIHZlcnNpb24gb2YgdGhpcyBjb21wdXRhdGlvbiwgYnV0IFJvaG5lcidzIGlzIGVhc2llciB0byB1bmRlcnN0YW5kLiAgTm90ZSB0aGF0IFJvaG5lclxuICAgICAgICAvLyBoYXMgdGhlIGNhbWVyYSBsb29raW5nIGRvd24gdGhlIFggYXhpcyBpbml0aWFsbHksIHdpdGggWiBiZWluZyB0aGUgaW5pdGlhbCBcInVwXCIuICBXZSBmb2xsb3dcbiAgICAgICAgLy8gdGhlIG1vcmUgc3RhbmRhcmQgY29udmVudGlvbiBvZiBoYXZpbmcgdGhlIGNhbWVyYSBsb29rIGRvd24gdGhlIFogYXhpcywgd2l0aCBZIGJlaW5nIFwidXBcIi5cbiAgICAgICAgLy8gU28gUm9obmVyJ3MgWCBpcyBvdXIgWiwgWSBpcyBvdXIgWCwgUm9obmVyJ3MgWiBpcyBvdXIgWS5cblxuICAgICAgICB2YXIgcG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgcG9zLnogPSBfdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGV0YSkgKiBNYXRoLmNvcyhwaGkpO1xuICAgICAgICBwb3MueCA9IF90aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoZXRhKSAqIE1hdGguc2luKHBoaSk7XG4gICAgICAgIHBvcy55ID0gX3RoaXMucmFkaXVzICogTWF0aC5jb3ModGhldGEpOyAvLyBGaW5hbGx5LCB1c2UgdGhlIGJhc2lzIG1hdHJpeCB0byB1cGRhdGUgdGhlIG5ldyBjYW1lcmEgcG9zaXRpb24gdG8gYWNjb3VudCBmb3IgdGhlIGFjdHVhbFxuICAgICAgICAvLyBjb25maWd1cmF0aW9uIG9mIHRoZSBjYW1lcmEgYXMgb2YgdGhlIFwibW91c2Vkb3duXCIgZXZlbnQuXG5cbiAgICAgICAgcG9zLmFwcGx5TWF0cml4NChfdGhpcy5iYXNpc01hdHJpeCk7XG5cbiAgICAgICAgX3RoaXMub2JqZWN0LnBvc2l0aW9uLmNvcHkocG9zKTsgLy8gVGhlbiB1c2UgYSBcImxvb2tBdFwiIG1hdHJpeCB0byBmdXJ0aGVyIHVwZGF0ZSB0aGUgY2FtZXJhIHRvIHBvaW50IGF0IHRoaXMudGFyZ2V0LlxuICAgICAgICAvLyBBcyBSb2huZXIgcG9pbnRzIG91dCwgXCJsb29rQXRcIiByZXF1aXJlcyB0aGlzLm9iamVjdC51cCwgYnV0IGFzIGxvbmcgYXMgdGhlIGVsZXZhdGlvblxuICAgICAgICAvLyBkb2VzIG5vdCBnbyB0byAwIG9yIHBpLCB0aGUgdGhpcy5vYmplY3QudXAgYXMgb2YgdGhlICdtb3VzZWRvd24nIGV2ZW50IHdpbGwgd29yay5cbiAgICAgICAgLy8gQWxzbywgdHJpZ2dlciByZW5kZXJpbmcgYmFzZWQgb24gdGhlIHVwZGF0ZWQgY2FtZXJhLiAgQnV0IGRvIG5vdCBjYWxsIHRoaXMuZml4dXAoKSxcbiAgICAgICAgLy8gYXMgZG9pbmcgc28gd2lsbCByZXN1bHQgaW4gdHdpc3RpbmcgYWJvdXQgdGhlIHZpZXcgYXhpcy4gIENhbGwgdGhpcy5maXh1cCgpIG9ubHlcbiAgICAgICAgLy8gd2hlbiBkcmFnZ2luZyBpcyBkb25lXG5cblxuICAgICAgICBfdGhpcy51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkb2xseVwiLCBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgdmFyIGN1cnIgPSBuZXcgVEhSRUUuVmVjdG9yMih4LCB5KTtcblxuICAgICAgaWYgKF90aGlzLnN0YXRlID09PSBTdGF0ZS5JTkRFVEVSTUlOQVRFKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnIubWFuaGF0dGFuRGlzdGFuY2VUbyhfdGhpcy5wcmV2KTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPiBDbGlja1RocmVzaG9sZCkge1xuICAgICAgICAgIF90aGlzLnN0YXRlID0gU3RhdGUuRE9MTFlJTkc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnN0YXRlID09PSBTdGF0ZS5ET0xMWUlORykge1xuICAgICAgICAvLyBcIkRvbGx5aW5nXCIgKGdpdmluZyBhIFwiem9vbWluZ1wiIGVmZmVjdCBieSBtb3ZpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEsIGluc3RlYWQgb2YgYnlcbiAgICAgICAgLy8gY2hhbmdpbmcgdGhlIGZpZWxkIG9mIHZpZXcpIGludm9sdmVzIGZpbmRpbmcgYSBuZXcgcG9zaWl0b24gYWxvbmcgdGhlIHZlY3RvciBmcm9tIHRoZVxuICAgICAgICAvLyBjYW1lcmEgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgdmFyIHRvVGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKF90aGlzLnRhcmdldCwgX3RoaXMub2JqZWN0LnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIGRpc3RUb1RhcmdldCA9IHRvVGFyZ2V0Lmxlbmd0aCgpOyAvLyBUaGUgbWF4aW11bSBkaXN0YW5jZSB0aGUgY2FtZXJhIGNhbiBtb3ZlIG9uIGEgc2luZ2xlIG1vdXNlIGRyYWcgaXMgZGV0ZXJtaW5lZCBieVxuICAgICAgICAvLyB0aGlzLm1heERpc3RhbmNlIGFuZCB0aGlzLm1pbkRpc3RhbmNlLCB3aXRoIGEgY2FwLlxuXG4gICAgICAgIHZhciBkaXN0TGltaXQgPSAyICogZGlzdFRvVGFyZ2V0O1xuICAgICAgICB2YXIgZGlzdEZvckZ1bGxEcmFnID0gTWF0aC5taW4oX3RoaXMubWF4RGlzdGFuY2UgLSBfdGhpcy5taW5EaXN0YW5jZSwgZGlzdExpbWl0KTsgLy8gVXNlIHRoYXQgbWF4aW11bSBkaXN0YW5jZSwgd2l0aCB0aGUgaGVpZ2h0IG9mIHRoZSBET00gZWxlbWVudCBiZWluZyB0aGUgbWF4aW11bVxuICAgICAgICAvLyBudW1iZXIgb2YgcGl4ZWxzIG1vdmVkIGluIGEgbW91c2UgZHJhZywgdG8gZ2V0IGEgc2NhbGluZyBmYWN0b3IuXG5cbiAgICAgICAgdmFyIGhlaWdodFB4ID0gX3RoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHZhciBweFRvV29ybGQgPSBkaXN0Rm9yRnVsbERyYWcgLyBoZWlnaHRQeDsgLy8gQWRqdXN0IHRoaXMgZmFjdG9yIGJ5IHRoZSB6b29tU3BlZWQgZnJvbSB0aGUgcHVibGljIEFQSSBhbmQgY29udmVydCB0aGUgbGF0ZXN0IG1vdXNlIG1vdmVcbiAgICAgICAgLy8gdG8gYSBkaXN0YW5jZSBmb3IgbW92aW5nIHRoZSBjYW1lcmEuXG5cbiAgICAgICAgdmFyIHNwZWVkID0gX3RoaXMuem9vbVNwZWVkICogcHhUb1dvcmxkO1xuICAgICAgICB2YXIgZGVsdGFZID0gX3RoaXMucHJldi55IC0geTtcbiAgICAgICAgdmFyIGRlbHRhID0gc3BlZWQgKiBkZWx0YVk7IC8vIEFwcGx5IHRoZSBzY2FsaW5nIGZhY3RvciB0byBjb252ZXJ0IHRoZSBwaXhlbHMgaW4gdGhlIGxhdGVzdCBtb3VzZSBtb3ZlIHRvIGEgd29ybGRcbiAgICAgICAgLy8gZGlzdGFuY2UuXG5cbiAgICAgICAgaWYgKF90aGlzLm1pbkRpc3RhbmNlIDw9IGRpc3RUb1RhcmdldCArIGRlbHRhICYmIGRpc3RUb1RhcmdldCArIGRlbHRhIDw9IF90aGlzLm1heERpc3RhbmNlKSB7XG4gICAgICAgICAgdmFyIGRlbHRhVG9UYXJnZXQgPSB0b1RhcmdldC5tdWx0aXBseVNjYWxhcihkZWx0YSAvIGRpc3RUb1RhcmdldCk7XG5cbiAgICAgICAgICBfdGhpcy5vYmplY3QucG9zaXRpb24uc3ViKGRlbHRhVG9UYXJnZXQpO1xuXG4gICAgICAgICAgX3RoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICBfdGhpcy5wcmV2ID0gY3VycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInBhblwiLCBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgdmFyIGN1cnIgPSBuZXcgVEhSRUUuVmVjdG9yMih4LCB5KTtcblxuICAgICAgaWYgKF90aGlzLnN0YXRlID09PSBTdGF0ZS5JTkRFVEVSTUlOQVRFKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnIubWFuaGF0dGFuRGlzdGFuY2VUbyhfdGhpcy5wcmV2KTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPiBDbGlja1RocmVzaG9sZCkge1xuICAgICAgICAgIF90aGlzLnN0YXRlID0gU3RhdGUuUEFOTklORztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFN0YXRlLlBBTk5JTkcpIHtcbiAgICAgICAgLy8gUGFubmluZyBtb3ZlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSBpbiB0aGUgcGxhbmUgd2hvc2Ugbm9ybWFsIGlzIHRoZSB2aWV3aW5nIHZlY3RvcixcbiAgICAgICAgLy8gdGhlIHZlY3RvciBmcm9tIHRoZSBjdXJyZW50IGNhbWVyYSBwb3NpdGlvbiB0byB0aGUgdGFyZ2V0LiAgU28gdHJlYXQgdGhhdCB2ZWN0b3IgYXMgdGhlXG4gICAgICAgIC8vIFogYXhpcywgYW5kIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgWCBhbmQgWSBheGVzLlxuICAgICAgICB2YXIgekF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMoX3RoaXMudGFyZ2V0LCBfdGhpcy5vYmplY3QucG9zaXRpb24pO1xuICAgICAgICB2YXIgZGlzdFRvVGFyZ2V0ID0gekF4aXMubGVuZ3RoKCk7XG4gICAgICAgIHpBeGlzLmRpdmlkZVNjYWxhcihkaXN0VG9UYXJnZXQpO1xuXG4gICAgICAgIHZhciB5QXhpcyA9IF90aGlzLm9iamVjdC51cC5jbG9uZSgpO1xuXG4gICAgICAgIHZhciB4QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKHlBeGlzLCB6QXhpcykubm9ybWFsaXplKCk7IC8vIFRoZSBtYXhpbXVtIGRpc3RhbmNlIHRoZSBjYW1lcmEgY2FuIG1vdmUgKGFsb25nIHRoZXNlIFggYW5kIFkgYXhlcykgb24gYSBzaW5nbGUgbW91c2UgZHJhZ1xuICAgICAgICAvLyBpcyB0aGUgZGlzdGFuY2UgdGhhdCB3b3VsZCBtb3ZlIHRoZSB0YXJnZXQgcG9pbnQgb3V0c2lkZSB0aGUgdmlld2luZyBmcnVzdHVtLiAgVG8gY29tcHV0ZVxuICAgICAgICAvLyB0aGF0IG1heGltdW0gZGlzdGFuY2UsIHRoaW5rIG9mIHRoZSBmcnVzdHVtIGFzIHR3byByaWdodCB0cmlhbmdsZXMgc2hhcmluZyB0aGUgdmlld2luZ1xuICAgICAgICAvLyB2ZWN0b3IgYXMgb25lIHNpZGU7IHRoYXQgbWF4aW11bSBkaXN0YW5jZSBpcyB0d2ljZSB0aGUgc2lkZSBvcHBvc2l0ZSB0aGUgY29ybmVyIHdoZXJlIHRoZVxuICAgICAgICAvLyBjYW1lcmEgaXMgbG9jYXRlZC4gIEF0IHRoYXQgY29ybmVyLCB0aGUgYW5nbGUgb2YgZWFjaCB0cmlhbmdsZSBpcyBoYWxmIHRoaXMub2JqZWN0LmZvdixcbiAgICAgICAgLy8gYW5kIHRoZSByZXN0IGZvbGxvd3MgZnJvbSBiYXNpYyB0cmlnb25vbWV0cnkuXG5cbiAgICAgICAgdmFyIGhhbGZIZWlnaHRXb3JsZCA9IE1hdGgudGFuKF90aGlzLm9iamVjdC5mb3YgLyAyICogKE1hdGguUEkgLyAzNjApKSAqIGRpc3RUb1RhcmdldDsgLy8gVXNlIHRoYXQgbWF4aW11bSBkaXN0YW5jZSwgd2l0aCB0aGUgaGVpZ2h0IG9mIHRoZSBET00gZWxlbWVudCBiZWluZyB0aGUgbWF4aW11bVxuICAgICAgICAvLyBudW1iZXIgb2YgcGl4ZWxzIG1vdmVkIGluIGEgbW91c2UgZHJhZywgdG8gZ2V0IGEgc2NhbGluZyBmYWN0b3IuXG5cbiAgICAgICAgdmFyIGhhbGZIZWlnaHRQeCA9IF90aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIHB4VG9Xb3JsZCA9IGhhbGZIZWlnaHRXb3JsZCAvIGhhbGZIZWlnaHRQeDsgLy8gQXBwbHkgdGhlIHNjYWxpbmcgZmFjdG9yIHRvIGNvbnZlcnQgdGhlIHBpeGVscyBpbiB0aGUgbGF0ZXN0IG1vdXNlIG1vdmUgdG8gYSB3b3JsZFxuICAgICAgICAvLyBkaXN0YW5jZS5cblxuICAgICAgICB2YXIgZGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpLnN1YlZlY3RvcnMoY3VyciwgX3RoaXMucHJldik7XG4gICAgICAgIHZhciBkZWx0YVggPSB4QXhpcy5tdWx0aXBseVNjYWxhcihkZWx0YS54ICogcHhUb1dvcmxkKTtcbiAgICAgICAgdmFyIGRlbHRhWSA9IHlBeGlzLm11bHRpcGx5U2NhbGFyKGRlbHRhLnkgKiBweFRvV29ybGQpO1xuXG4gICAgICAgIF90aGlzLm9iamVjdC5wb3NpdGlvbi5hZGQoZGVsdGFYKTtcblxuICAgICAgICBfdGhpcy5vYmplY3QucG9zaXRpb24uYWRkKGRlbHRhWSk7IC8vIE5vdGUgdGhhdCB3aGVuIHBhbm5pbmcsIHRoZSB0YXJnZXQgbW92ZXMgYWxvbmcgd2l0aCB0aGUgY2FtZXJhLCBzdGF5aW5nIG9mZnNldCBieSB0aGVcbiAgICAgICAgLy8gc2FtZSB2aWV3aW5nIHZlY3RvciB0aGF0IHdhcyBpbiB1c2UgYXQgdGhlIHN0YXJ0IG9mIHRoZSBtb3VzZSBtb3ZlbWVudC5cblxuXG4gICAgICAgIHZhciB0b1RhcmdldCA9IHpBeGlzLm11bHRpcGx5U2NhbGFyKGRpc3RUb1RhcmdldCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmFkZFZlY3RvcnMoX3RoaXMub2JqZWN0LnBvc2l0aW9uLCB0b1RhcmdldCk7XG4gICAgICAgIF90aGlzLnRhcmdldCA9IHRhcmdldDtcblxuICAgICAgICBfdGhpcy51cGRhdGUoKTtcblxuICAgICAgICBfdGhpcy5wcmV2ID0gY3VycjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJmaXhVcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUaGUgY3VycmVudCB0aGlzLm9iamVjdC51cCBtYXkgYmUgYWxtb3N0IGFsaWduZWQgd2l0aCB0aGlzIFwidmlld1wiIHZlY3Rvci5cbiAgICAgIHZhciB2aWV3ID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKF90aGlzLnRhcmdldCwgX3RoaXMub2JqZWN0LnBvc2l0aW9uKS5ub3JtYWxpemUoKTsgLy8gU28gZmlyc3QgZmluZCB0aGUgdmVjdG9yIG9mZiB0byB0aGUgc2lkZSwgb3J0aG9nb25hbCB0byBib3RoIHRoaXMub2JqZWN0LnVwIGFuZFxuICAgICAgLy8gdGhlIFwidmlld1wiIHZlY3Rvci5cblxuICAgICAgdmFyIHNpZGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyh2aWV3LCBfdGhpcy5vYmplY3QudXApLm5vcm1hbGl6ZSgpOyAvLyBUaGVuIGZpbmQgdGhlIHZlY3RvciBvcnRob2dvbmFsIHRvIGJvdGggdGhpcyBcInNpZGVcIiB2ZWN0b3IgYW5kIHRoZSBcInZpZXdcIiB2ZWN0b3IuXG4gICAgICAvLyBUaGlzIHZlY3RvciB3aWxsIGJlIHRoZSBuZXcgXCJ1cFwiIHZlY3Rvci5cblxuICAgICAgdmFyIHVwID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoc2lkZSwgdmlldykubm9ybWFsaXplKCk7XG5cbiAgICAgIF90aGlzLm9iamVjdC51cC5jb3B5KHVwKTtcbiAgICB9KTtcblxuICAgIF90aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICBfdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDsgLy9cbiAgICAvLyBQdWJsaWMgQVBJIHRoYXQgbWlycm9ycyBUSFJFRS5PcmJpdENvbnRyb2xzXG5cbiAgICBfdGhpcy5rZXlQYW5TcGVlZCA9IDc7XG4gICAgX3RoaXMua2V5cyA9IHtcbiAgICAgIExFRlQ6IDM3LFxuICAgICAgVVA6IDM4LFxuICAgICAgUklHSFQ6IDM5LFxuICAgICAgRE9XTjogNDBcbiAgICB9O1xuICAgIF90aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgX3RoaXMubWluRGlzdGFuY2UgPSAwO1xuICAgIF90aGlzLnJvdGF0ZVNwZWVkID0gMTtcbiAgICBfdGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIF90aGlzLnpvb21TcGVlZCA9IDE7IC8vIE5ldyBwdWJsaWMgQVBJXG4gICAgLy8gVGhlIHN0YW5kYXJkICdjbGljaycgZXZlbnQgaXMgc2VudCBieSB0aGlzLmRvbUVsZW1lbnQgZm9yIGFueSAnbW91c2Vkb3duJ1xuICAgIC8vIGZvbGxvd2VkIGJ5ICdtb3VzZXVwJy4gIEJ1dCBhIG1vcmUgdXNlZnVsIGRlZmluaXRpb24gb2YgYSAnY2xpY2snIGlzIHdoZW5cbiAgICAvLyB0aGUgY3Vyc29yIG1vdmVzIGxlc3MgdGhhbiBDbGlja1RocmVzaG9sZCBwaXhlbHMgYmV0d2VlbiB0aGUgJ21vdXNlZG93bidcbiAgICAvLyBhbmQgdGhlICdtb3VzZXVwJy4gIEluIHRoYXQgY2FzZSwgdGhpcy5jbGlja2VkIHdpbGwgYmUgdHJ1ZS5cblxuICAgIF90aGlzLmNsaWNrZWQgPSBmYWxzZTsgLy9cblxuICAgIF90aGlzLnN0YXRlID0gU3RhdGUuSU5BQ1RJVkU7XG4gICAgX3RoaXMuY2hhbmdlRXZlbnQgPSB7XG4gICAgICB0eXBlOiAnY2hhbmdlJ1xuICAgIH07XG5cbiAgICBfdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIF90aGlzLm9uTW91c2VEb3duLCBmYWxzZSk7XG5cbiAgICBfdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgX3RoaXMub25Nb3VzZVdoZWVsLCBmYWxzZSk7XG5cbiAgICBfdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpcy5vbktleURvd24sIGZhbHNlKTtcblxuICAgIGlmIChfdGhpcy5kb21FbGVtZW50LnRhYkluZGV4ID09PSAtMSkge1xuICAgICAgLy8gTXVzdCBiZSBzZXQgZm9yICdrZXlkb3duJyB0byBiZSByZWNlaXZlZC5cbiAgICAgIF90aGlzLmRvbUVsZW1lbnQudGFiSW5kZXggPSAwO1xuICAgIH0gLy8gVXNlZCBieSByZXNldCgpLlxuXG5cbiAgICBfdGhpcy50YXJnZXQwID0gX3RoaXMudGFyZ2V0LmNsb25lKCk7XG4gICAgX3RoaXMucG9zaXRpb24wID0gX3RoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICBfdGhpcy51cGRhdGUoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBPcmJpdFVubGltaXRlZENvbnRyb2xzO1xufShUSFJFRS5FdmVudERpc3BhdGNoZXIpO1xuXG52YXIgX2RlZmF1bHQgPSBPcmJpdFVubGltaXRlZENvbnRyb2xzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpICYmIGl0ICE9PSBudWxsKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKGl0KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKTtcblxudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcbiAgICBzd2l0Y2ggKEtJTkQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG4gIH07XG5cbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcbiAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlSXRlcmF0b3IgPSBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG4gICAgfHwgREVGQVVMVCAmJiBJdGVyYWJsZVByb3RvdHlwZVtERUZBVUxUXTtcbiAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcbiAgdmFyIGFueU5hdGl2ZUl0ZXJhdG9yID0gTkFNRSA9PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcbiAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeCBBcnJheS5wcm90b3R5cGUueyB2YWx1ZXMsIEBAaXRlcmF0b3IgfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRkFVTFQgPT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG4gICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmF0aXZlSXRlcmF0b3IuY2FsbCh0aGlzKTsgfTtcbiAgfVxuXG4gIC8vIGRlZmluZSBpdGVyYXRvclxuICBpZiAoKCFJU19QVVJFIHx8IEZPUkNFRCkgJiYgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdICE9PSBkZWZhdWx0SXRlcmF0b3IpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IpO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcbiAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgcmVkZWZpbmUoSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPCA0ID8gMSA6IG1hdGNoWzBdICsgbWF0Y2hbMV07XG59IGVsc2UgaWYgKHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9IG1hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbiAmJiArdmVyc2lvbjtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSlcbiAgICA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24udG9TdHJpbmc7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICh0eXBlb2Ygc3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmICh3bWhhcy5jYWxsKHN0b3JlLCBpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAob2JqZWN0SGFzKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbnZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gSXRlcmF0b3JQcm90b3R5cGUgPT0gdW5kZWZpbmVkIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCghSVNfUFVSRSB8fCBORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgcmV0dXJuICFTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoaW5zcGVjdFNvdXJjZShXZWFrTWFwKSk7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICB9XG4gICAgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gICAgaWYgKCFzdGF0ZS5zb3VyY2UpIHtcbiAgICAgIHN0YXRlLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgICB9XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjEzLjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjEgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSB8fCAhKE5BVElWRV9TWU1CT0wgfHwgdHlwZW9mIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9PSAnc3RyaW5nJykpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gICAgfVxuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcblxudmFyIEFSUkFZX0lURVJBVE9SID0gJ0FycmF5IEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKEFSUkFZX0lURVJBVE9SKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5lbnRyaWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmVudHJpZXNcbi8vIGBBcnJheS5wcm90b3R5cGUua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS52YWx1ZXNcbi8vIGBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEBpdGVyYXRvclxuLy8gYENyZWF0ZUFycmF5SXRlcmF0b3JgIGludGVybmFsIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0lYXJyYXlpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgdGFyZ2V0ID0gc3RhdGUudGFyZ2V0O1xuICB2YXIga2luZCA9IHN0YXRlLmtpbmQ7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4Kys7XG4gIGlmICghdGFyZ2V0IHx8IGluZGV4ID49IHRhcmdldC5sZW5ndGgpIHtcbiAgICBzdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHsgdmFsdWU6IGluZGV4LCBkb25lOiBmYWxzZSB9O1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHsgdmFsdWU6IHRhcmdldFtpbmRleF0sIGRvbmU6IGZhbHNlIH07XG4gIHJldHVybiB7IHZhbHVlOiBbaW5kZXgsIHRhcmdldFtpbmRleF1dLCBkb25lOiBmYWxzZSB9O1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyVcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRldW5tYXBwZWRhcmd1bWVudHNvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlbWFwcGVkYXJndW1lbnRzb2JqZWN0XG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgdHlwZW9mIE5hdGl2ZVN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICghKCdkZXNjcmlwdGlvbicgaW4gTmF0aXZlU3ltYm9sLnByb3RvdHlwZSkgfHxcbiAgLy8gU2FmYXJpIDEyIGJ1Z1xuICBOYXRpdmVTeW1ib2woKS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkXG4pKSB7XG4gIHZhciBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUgPSB7fTtcbiAgLy8gd3JhcCBTeW1ib2wgY29uc3RydWN0b3IgZm9yIGNvcnJlY3Qgd29yayB3aXRoIHVuZGVmaW5lZCBkZXNjcmlwdGlvblxuICB2YXIgU3ltYm9sV3JhcHBlciA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciByZXN1bHQgPSB0aGlzIGluc3RhbmNlb2YgU3ltYm9sV3JhcHBlclxuICAgICAgPyBuZXcgTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKVxuICAgICAgLy8gaW4gRWRnZSAxMywgU3RyaW5nKFN5bWJvbCh1bmRlZmluZWQpKSA9PT0gJ1N5bWJvbCh1bmRlZmluZWQpJ1xuICAgICAgOiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gTmF0aXZlU3ltYm9sKCkgOiBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZVtyZXN1bHRdID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFN5bWJvbFdyYXBwZXIsIE5hdGl2ZVN5bWJvbCk7XG4gIHZhciBzeW1ib2xQcm90b3R5cGUgPSBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbC5wcm90b3R5cGU7XG4gIHN5bWJvbFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bWJvbFdyYXBwZXI7XG5cbiAgdmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgbmF0aXZlID0gU3RyaW5nKE5hdGl2ZVN5bWJvbCgndGVzdCcpKSA9PSAnU3ltYm9sKHRlc3QpJztcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIGRlZmluZVByb3BlcnR5KHN5bWJvbFByb3RvdHlwZSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgdmFyIHN5bWJvbCA9IGlzT2JqZWN0KHRoaXMpID8gdGhpcy52YWx1ZU9mKCkgOiB0aGlzO1xuICAgICAgdmFyIHN0cmluZyA9IHN5bWJvbFRvU3RyaW5nLmNhbGwoc3ltYm9sKTtcbiAgICAgIGlmIChoYXMoRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlLCBzeW1ib2wpKSByZXR1cm4gJyc7XG4gICAgICB2YXIgZGVzYyA9IG5hdGl2ZSA/IHN0cmluZy5zbGljZSg3LCAtMSkgOiBzdHJpbmcucmVwbGFjZShyZWdleHAsICckMScpO1xuICAgICAgcmV0dXJuIGRlc2MgPT09ICcnID8gdW5kZWZpbmVkIDogZGVzYztcbiAgICB9XG4gIH0pO1xuXG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgU3ltYm9sOiBTeW1ib2xXcmFwcGVyXG4gIH0pO1xufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIEFycmF5SXRlcmF0b3JNZXRob2RzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9yTWV0aG9kcy52YWx1ZXM7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gQXJyYXlWYWx1ZXMpIHRyeSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gPSBBcnJheVZhbHVlcztcbiAgICB9XG4gICAgaWYgKCFDb2xsZWN0aW9uUHJvdG90eXBlW1RPX1NUUklOR19UQUddKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgQ09MTEVDVElPTl9OQU1FKTtcbiAgICB9XG4gICAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSBmb3IgKHZhciBNRVRIT0RfTkFNRSBpbiBBcnJheUl0ZXJhdG9yTWV0aG9kcykge1xuICAgICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtNRVRIT0RfTkFNRV0gIT09IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSkgdHJ5IHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIE1FVEhPRF9OQU1FLCBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgQ29sbGVjdGlvblByb3RvdHlwZVtNRVRIT0RfTkFNRV0gPSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBzdGF0cy5qcyAtIGh0dHA6Ly9naXRodWIuY29tL21yZG9vYi9zdGF0cy5qc1xuKGZ1bmN0aW9uKGYsZSl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6Zi5TdGF0cz1lKCl9KSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGEpe2MuYXBwZW5kQ2hpbGQoYS5kb20pO3JldHVybiBhfWZ1bmN0aW9uIHUoYSl7Zm9yKHZhciBkPTA7ZDxjLmNoaWxkcmVuLmxlbmd0aDtkKyspYy5jaGlsZHJlbltkXS5zdHlsZS5kaXNwbGF5PWQ9PT1hP1wiYmxvY2tcIjpcIm5vbmVcIjtsPWF9dmFyIGw9MCxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yy5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC45O3otaW5kZXg6MTAwMDBcIjtjLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKTtcbnUoKytsJWMuY2hpbGRyZW4ubGVuZ3RoKX0sITEpO3ZhciBrPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCksZz1rLGE9MCxyPWUobmV3IGYuUGFuZWwoXCJGUFNcIixcIiMwZmZcIixcIiMwMDJcIikpLGg9ZShuZXcgZi5QYW5lbChcIk1TXCIsXCIjMGYwXCIsXCIjMDIwXCIpKTtpZihzZWxmLnBlcmZvcm1hbmNlJiZzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSl2YXIgdD1lKG5ldyBmLlBhbmVsKFwiTUJcIixcIiNmMDhcIixcIiMyMDFcIikpO3UoMCk7cmV0dXJue1JFVklTSU9OOjE2LGRvbTpjLGFkZFBhbmVsOmUsc2hvd1BhbmVsOnUsYmVnaW46ZnVuY3Rpb24oKXtrPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCl9LGVuZDpmdW5jdGlvbigpe2ErKzt2YXIgYz0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpO2gudXBkYXRlKGMtaywyMDApO2lmKGM+ZysxRTMmJihyLnVwZGF0ZSgxRTMqYS8oYy1nKSwxMDApLGc9YyxhPTAsdCkpe3ZhciBkPXBlcmZvcm1hbmNlLm1lbW9yeTt0LnVwZGF0ZShkLnVzZWRKU0hlYXBTaXplL1xuMTA0ODU3NixkLmpzSGVhcFNpemVMaW1pdC8xMDQ4NTc2KX1yZXR1cm4gY30sdXBkYXRlOmZ1bmN0aW9uKCl7az10aGlzLmVuZCgpfSxkb21FbGVtZW50OmMsc2V0TW9kZTp1fX07Zi5QYW5lbD1mdW5jdGlvbihlLGYsbCl7dmFyIGM9SW5maW5pdHksaz0wLGc9TWF0aC5yb3VuZCxhPWcod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpLHI9ODAqYSxoPTQ4KmEsdD0zKmEsdj0yKmEsZD0zKmEsbT0xNSphLG49NzQqYSxwPTMwKmEscT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3Eud2lkdGg9cjtxLmhlaWdodD1oO3Euc3R5bGUuY3NzVGV4dD1cIndpZHRoOjgwcHg7aGVpZ2h0OjQ4cHhcIjt2YXIgYj1xLmdldENvbnRleHQoXCIyZFwiKTtiLmZvbnQ9XCJib2xkIFwiKzkqYStcInB4IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmXCI7Yi50ZXh0QmFzZWxpbmU9XCJ0b3BcIjtiLmZpbGxTdHlsZT1sO2IuZmlsbFJlY3QoMCwwLHIsaCk7Yi5maWxsU3R5bGU9ZjtiLmZpbGxUZXh0KGUsdCx2KTtcbmIuZmlsbFJlY3QoZCxtLG4scCk7Yi5maWxsU3R5bGU9bDtiLmdsb2JhbEFscGhhPS45O2IuZmlsbFJlY3QoZCxtLG4scCk7cmV0dXJue2RvbTpxLHVwZGF0ZTpmdW5jdGlvbihoLHcpe2M9TWF0aC5taW4oYyxoKTtrPU1hdGgubWF4KGssaCk7Yi5maWxsU3R5bGU9bDtiLmdsb2JhbEFscGhhPTE7Yi5maWxsUmVjdCgwLDAscixtKTtiLmZpbGxTdHlsZT1mO2IuZmlsbFRleHQoZyhoKStcIiBcIitlK1wiIChcIitnKGMpK1wiLVwiK2coaykrXCIpXCIsdCx2KTtiLmRyYXdJbWFnZShxLGQrYSxtLG4tYSxwLGQsbSxuLWEscCk7Yi5maWxsUmVjdChkK24tYSxtLGEscCk7Yi5maWxsU3R5bGU9bDtiLmdsb2JhbEFscGhhPS45O2IuZmlsbFJlY3QoZCtuLWEsbSxhLGcoKDEtaC93KSpwKSl9fX07cmV0dXJuIGZ9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZGVmYXVsdE9uRXJyb3IoZXJyKSB7XG4gIHRocm93IG5ldyBFcnJvcihlcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUSFJFRSkge1xuXG4gIC8qKlxuICAgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICAgKi9cblxuICBUSFJFRS5PQkpMb2FkZXIgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuXG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlciAhPT0gdW5kZWZpbmVkID8gbWFuYWdlciA6IFRIUkVFLkRlZmF1bHRMb2FkaW5nTWFuYWdlcjtcblxuICAgIHRoaXMubWF0ZXJpYWxzID0gbnVsbDtcblxuICAgIHRoaXMucmVnZXhwID0ge1xuICAgICAgLy8gdiBmbG9hdCBmbG9hdCBmbG9hdFxuICAgICAgdmVydGV4X3BhdHRlcm46IC9edlxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyB2biBmbG9hdCBmbG9hdCBmbG9hdFxuICAgICAgbm9ybWFsX3BhdHRlcm46IC9edm5cXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKVxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKykvLFxuICAgICAgLy8gdnQgZmxvYXQgZmxvYXRcbiAgICAgIHV2X3BhdHRlcm46IC9ednRcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyBmIHZlcnRleCB2ZXJ0ZXggdmVydGV4XG4gICAgICBmYWNlX3ZlcnRleDogL15mXFxzKygtP1xcZCspXFxzKygtP1xcZCspXFxzKygtP1xcZCspKD86XFxzKygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvdXYgdmVydGV4L3V2IHZlcnRleC91dlxuICAgICAgZmFjZV92ZXJ0ZXhfdXY6IC9eZlxccysoLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvdXYvbm9ybWFsIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbFxuICAgICAgZmFjZV92ZXJ0ZXhfdXZfbm9ybWFsOiAvXmZcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvL25vcm1hbCB2ZXJ0ZXgvL25vcm1hbCB2ZXJ0ZXgvL25vcm1hbFxuICAgICAgZmFjZV92ZXJ0ZXhfbm9ybWFsOiAvXmZcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspXFxzKygtP1xcZCspXFwvXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKSk/LyxcbiAgICAgIC8vIG8gb2JqZWN0X25hbWUgfCBnIGdyb3VwX25hbWVcbiAgICAgIG9iamVjdF9wYXR0ZXJuOiAvXltvZ11cXHMqKC4rKT8vLFxuICAgICAgLy8gcyBib29sZWFuXG4gICAgICBzbW9vdGhpbmdfcGF0dGVybjogL15zXFxzKyhcXGQrfG9ufG9mZikvLFxuICAgICAgLy8gbXRsbGliIGZpbGVfcmVmZXJlbmNlXG4gICAgICBtYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm46IC9ebXRsbGliIC8sXG4gICAgICAvLyB1c2VtdGwgbWF0ZXJpYWxfbmFtZVxuICAgICAgbWF0ZXJpYWxfdXNlX3BhdHRlcm46IC9edXNlbXRsIC9cbiAgICB9O1xuICB9O1xuXG4gIFRIUkVFLk9CSkxvYWRlci5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvcjogVEhSRUUuT0JKTG9hZGVyLFxuXG4gICAgbG9hZDogZnVuY3Rpb24gbG9hZCh1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvcikge1xuXG4gICAgICB2YXIgc2NvcGUgPSB0aGlzO1xuICAgICAgdGhpcy5vbkVycm9yID0gb25FcnJvciB8fCBkZWZhdWx0T25FcnJvcjtcblxuICAgICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5GaWxlTG9hZGVyKHNjb3BlLm1hbmFnZXIpO1xuICAgICAgbG9hZGVyLnNldFBhdGgodGhpcy5wYXRoKTtcbiAgICAgIGxvYWRlci5sb2FkKHVybCwgZnVuY3Rpb24gKHRleHQpIHtcblxuICAgICAgICBvbkxvYWQoc2NvcGUucGFyc2UodGV4dCkpO1xuICAgICAgfSwgb25Qcm9ncmVzcywgb25FcnJvcik7XG4gICAgfSxcblxuICAgIHNldFBhdGg6IGZ1bmN0aW9uIHNldFBhdGgodmFsdWUpIHtcblxuICAgICAgdGhpcy5wYXRoID0gdmFsdWU7XG4gICAgfSxcblxuICAgIHNldE1hdGVyaWFsczogZnVuY3Rpb24gc2V0TWF0ZXJpYWxzKG1hdGVyaWFscykge1xuXG4gICAgICB0aGlzLm1hdGVyaWFscyA9IG1hdGVyaWFscztcbiAgICB9LFxuXG4gICAgX2NyZWF0ZVBhcnNlclN0YXRlOiBmdW5jdGlvbiBfY3JlYXRlUGFyc2VyU3RhdGUoKSB7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgb2JqZWN0czogW10sXG4gICAgICAgIG9iamVjdDoge30sXG5cbiAgICAgICAgdmVydGljZXM6IFtdLFxuICAgICAgICBub3JtYWxzOiBbXSxcbiAgICAgICAgdXZzOiBbXSxcblxuICAgICAgICBtYXRlcmlhbExpYnJhcmllczogW10sXG5cbiAgICAgICAgc3RhcnRPYmplY3Q6IGZ1bmN0aW9uIHN0YXJ0T2JqZWN0KG5hbWUsIGZyb21EZWNsYXJhdGlvbikge1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgb2JqZWN0IChpbml0aWFsIGZyb20gcmVzZXQpIGlzIG5vdCBmcm9tIGEgZy9vIGRlY2xhcmF0aW9uIGluIHRoZSBwYXJzZWRcbiAgICAgICAgICAvLyBmaWxlLiBXZSBuZWVkIHRvIHVzZSBpdCBmb3IgdGhlIGZpcnN0IHBhcnNlZCBnL28gdG8ga2VlcCB0aGluZ3MgaW4gc3luYy5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LmZyb21EZWNsYXJhdGlvbiA9IGZyb21EZWNsYXJhdGlvbiAhPT0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHByZXZpb3VzTWF0ZXJpYWwgPSB0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsID09PSAnZnVuY3Rpb24nID8gdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdHlwZW9mIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5fZmluYWxpemUodHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vYmplY3QgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lIHx8ICcnLFxuICAgICAgICAgICAgZnJvbURlY2xhcmF0aW9uOiBmcm9tRGVjbGFyYXRpb24gIT09IGZhbHNlLFxuXG4gICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgICAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgICAgICAgICB1dnM6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF0ZXJpYWxzOiBbXSxcbiAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcblxuICAgICAgICAgICAgc3RhcnRNYXRlcmlhbDogZnVuY3Rpb24gc3RhcnRNYXRlcmlhbChuYW1lLCBsaWJyYXJpZXMpIHtcblxuICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSB0aGlzLl9maW5hbGl6ZShmYWxzZSk7XG5cbiAgICAgICAgICAgICAgLy8gTmV3IHVzZW10bCBkZWNsYXJhdGlvbiBvdmVyd3JpdGVzIGFuIGluaGVyaXRlZCBtYXRlcmlhbCwgZXhjZXB0IGlmIGZhY2VzIHdlcmUgZGVjbGFyZWRcbiAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIG1hdGVyaWFsLCB0aGVuIGl0IG11c3QgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG4gICAgICAgICAgICAgIGlmIChwcmV2aW91cyAmJiAocHJldmlvdXMuaW5oZXJpdGVkIHx8IHByZXZpb3VzLmdyb3VwQ291bnQgPD0gMCkpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnNwbGljZShwcmV2aW91cy5pbmRleCwgMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8ICcnLFxuICAgICAgICAgICAgICAgIG10bGxpYjogQXJyYXkuaXNBcnJheShsaWJyYXJpZXMpICYmIGxpYnJhcmllcy5sZW5ndGggPiAwID8gbGlicmFyaWVzW2xpYnJhcmllcy5sZW5ndGggLSAxXSA6ICcnLFxuICAgICAgICAgICAgICAgIHNtb290aDogcHJldmlvdXMgIT09IHVuZGVmaW5lZCA/IHByZXZpb3VzLnNtb290aCA6IHRoaXMuc21vb3RoLFxuICAgICAgICAgICAgICAgIGdyb3VwU3RhcnQ6IHByZXZpb3VzICE9PSB1bmRlZmluZWQgPyBwcmV2aW91cy5ncm91cEVuZCA6IDAsXG4gICAgICAgICAgICAgICAgZ3JvdXBFbmQ6IC0xLFxuICAgICAgICAgICAgICAgIGdyb3VwQ291bnQ6IC0xLFxuICAgICAgICAgICAgICAgIGluaGVyaXRlZDogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG10bGxpYjogdGhpcy5tdGxsaWIsXG4gICAgICAgICAgICAgICAgICAgIHNtb290aDogdGhpcy5zbW9vdGgsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwU3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRW5kOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb3VudDogLTEsXG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBjbG9uZWQuY2xvbmUgPSB0aGlzLmNsb25lLmJpbmQoY2xvbmVkKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBtYXRlcmlhbDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGN1cnJlbnRNYXRlcmlhbDogZnVuY3Rpb24gY3VycmVudE1hdGVyaWFsKCkge1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxzW3RoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9maW5hbGl6ZTogZnVuY3Rpb24gX2ZpbmFsaXplKGVuZCkge1xuXG4gICAgICAgICAgICAgIHZhciBsYXN0TXVsdGlNYXRlcmlhbCA9IHRoaXMuY3VycmVudE1hdGVyaWFsKCk7XG4gICAgICAgICAgICAgIGlmIChsYXN0TXVsdGlNYXRlcmlhbCAmJiBsYXN0TXVsdGlNYXRlcmlhbC5ncm91cEVuZCA9PT0gLTEpIHtcblxuICAgICAgICAgICAgICAgIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID0gdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGggLyAzO1xuICAgICAgICAgICAgICAgIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwQ291bnQgPSBsYXN0TXVsdGlNYXRlcmlhbC5ncm91cEVuZCAtIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwU3RhcnQ7XG4gICAgICAgICAgICAgICAgbGFzdE11bHRpTWF0ZXJpYWwuaW5oZXJpdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZ25vcmUgb2JqZWN0cyB0YWlsIG1hdGVyaWFscyBpZiBubyBmYWNlIGRlY2xhcmF0aW9ucyBmb2xsb3dlZCB0aGVtIGJlZm9yZSBhIG5ldyBvL2cgc3RhcnRlZC5cbiAgICAgICAgICAgICAgaWYgKGVuZCAmJiB0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtaSA9IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDE7IG1pID49IDA7IG1pLS0pIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsc1ttaV0uZ3JvdXBDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnNwbGljZShtaSwgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gR3VhcmFudGVlIGF0IGxlYXN0IG9uZSBlbXB0eSBtYXRlcmlhbCwgdGhpcyBtYWtlcyB0aGUgY3JlYXRpb24gbGF0ZXIgbW9yZSBzdHJhaWdodCBmb3J3YXJkLlxuICAgICAgICAgICAgICBpZiAoZW5kICYmIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgIHNtb290aDogdGhpcy5zbW9vdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBsYXN0TXVsdGlNYXRlcmlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSW5oZXJpdCBwcmV2aW91cyBvYmplY3RzIG1hdGVyaWFsLlxuICAgICAgICAgIC8vIFNwZWMgdGVsbHMgdXMgdGhhdCBhIGRlY2xhcmVkIG1hdGVyaWFsIG11c3QgYmUgc2V0IHRvIGFsbCBvYmplY3RzIHVudGlsIGEgbmV3IG1hdGVyaWFsIGlzIGRlY2xhcmVkLlxuICAgICAgICAgIC8vIElmIGEgdXNlbXRsIGRlY2xhcmF0aW9uIGlzIGVuY291bnRlcmVkIHdoaWxlIHRoaXMgbmV3IG9iamVjdCBpcyBiZWluZyBwYXJzZWQsIGl0IHdpbGxcbiAgICAgICAgICAvLyBvdmVyd3JpdGUgdGhlIGluaGVyaXRlZCBtYXRlcmlhbC4gRXhjZXB0aW9uIGJlaW5nIHRoYXQgdGhlcmUgd2FzIGFscmVhZHkgZmFjZSBkZWNsYXJhdGlvbnNcbiAgICAgICAgICAvLyB0byB0aGUgaW5oZXJpdGVkIG1hdGVyaWFsLCB0aGVuIGl0IHdpbGwgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG5cbiAgICAgICAgICBpZiAocHJldmlvdXNNYXRlcmlhbCAmJiBwcmV2aW91c01hdGVyaWFsLm5hbWUgJiYgdHlwZW9mIHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICB2YXIgZGVjbGFyZWQgPSBwcmV2aW91c01hdGVyaWFsLmNsb25lKDApO1xuICAgICAgICAgICAgZGVjbGFyZWQuaW5oZXJpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0Lm1hdGVyaWFscy5wdXNoKGRlY2xhcmVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9iamVjdHMucHVzaCh0aGlzLm9iamVjdCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuXG4gICAgICAgICAgaWYgKHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5fZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICAgICAgdGhpcy5vYmplY3QuX2ZpbmFsaXplKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZVZlcnRleEluZGV4OiBmdW5jdGlvbiBwYXJzZVZlcnRleEluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAzKSAqIDM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VOb3JtYWxJbmRleDogZnVuY3Rpb24gcGFyc2VOb3JtYWxJbmRleCh2YWx1ZSwgbGVuKSB7XG5cbiAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgIHJldHVybiAoaW5kZXggPj0gMCA/IGluZGV4IC0gMSA6IGluZGV4ICsgbGVuIC8gMykgKiAzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlVVZJbmRleDogZnVuY3Rpb24gcGFyc2VVVkluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAyKSAqIDI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmVydGV4OiBmdW5jdGlvbiBhZGRWZXJ0ZXgoYSwgYiwgYykge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgICAgdmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnZlcnRpY2VzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAyXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmVydGV4TGluZTogZnVuY3Rpb24gYWRkVmVydGV4TGluZShhKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGROb3JtYWw6IGZ1bmN0aW9uIGFkZE5vcm1hbChhLCBiLCBjKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy5ub3JtYWxzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS5ub3JtYWxzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAyXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVVY6IGZ1bmN0aW9uIGFkZFVWKGEsIGIsIGMpIHtcblxuICAgICAgICAgIHZhciBzcmMgPSB0aGlzLnV2cztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudXZzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVVZMaW5lOiBmdW5jdGlvbiBhZGRVVkxpbmUoYSkge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudXZzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRGYWNlOiBmdW5jdGlvbiBhZGRGYWNlKGEsIGIsIGMsIGQsIHVhLCB1YiwgdWMsIHVkLCBuYSwgbmIsIG5jLCBuZCkge1xuXG4gICAgICAgICAgdmFyIHZMZW4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICAgIHZhciBpYSA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleChhLCB2TGVuKTtcbiAgICAgICAgICB2YXIgaWIgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoYiwgdkxlbik7XG4gICAgICAgICAgdmFyIGljID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KGMsIHZMZW4pO1xuICAgICAgICAgIHZhciBpZDtcblxuICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWEsIGliLCBpYyk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWQgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoZCwgdkxlbik7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KGlhLCBpYiwgaWQpO1xuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWIsIGljLCBpZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHVhICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgdmFyIHV2TGVuID0gdGhpcy51dnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBpYSA9IHRoaXMucGFyc2VVVkluZGV4KHVhLCB1dkxlbik7XG4gICAgICAgICAgICBpYiA9IHRoaXMucGFyc2VVVkluZGV4KHViLCB1dkxlbik7XG4gICAgICAgICAgICBpYyA9IHRoaXMucGFyc2VVVkluZGV4KHVjLCB1dkxlbik7XG5cbiAgICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICB0aGlzLmFkZFVWKGlhLCBpYiwgaWMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VVVkluZGV4KHVkLCB1dkxlbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGRVVihpYSwgaWIsIGlkKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRVVihpYiwgaWMsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmEgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAvLyBOb3JtYWxzIGFyZSBtYW55IHRpbWVzIHRoZSBzYW1lLiBJZiBzbywgc2tpcCBmdW5jdGlvbiBjYWxsIGFuZCBwYXJzZUludC5cbiAgICAgICAgICAgIHZhciBuTGVuID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGlhID0gdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5hLCBuTGVuKTtcblxuICAgICAgICAgICAgaWIgPSBuYSA9PT0gbmIgPyBpYSA6IHRoaXMucGFyc2VOb3JtYWxJbmRleChuYiwgbkxlbik7XG4gICAgICAgICAgICBpYyA9IG5hID09PSBuYyA/IGlhIDogdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5jLCBuTGVuKTtcblxuICAgICAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgIHRoaXMuYWRkTm9ybWFsKGlhLCBpYiwgaWMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VOb3JtYWxJbmRleChuZCwgbkxlbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGROb3JtYWwoaWEsIGliLCBpZCk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkTm9ybWFsKGliLCBpYywgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZGRMaW5lR2VvbWV0cnk6IGZ1bmN0aW9uIGFkZExpbmVHZW9tZXRyeSh2ZXJ0aWNlcywgdXZzKSB7XG5cbiAgICAgICAgICB0aGlzLm9iamVjdC5nZW9tZXRyeS50eXBlID0gJ0xpbmUnO1xuXG4gICAgICAgICAgdmFyIHZMZW4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgICB2YXIgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKHZhciB2aSA9IDAsIGwgPSB2ZXJ0aWNlcy5sZW5ndGg7IHZpIDwgbDsgdmkrKykge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleExpbmUodGhpcy5wYXJzZVZlcnRleEluZGV4KHZlcnRpY2VzW3ZpXSwgdkxlbikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIHV2aSA9IDAsIGwgPSB1dnMubGVuZ3RoOyB1dmkgPCBsOyB1dmkrKykge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFVWTGluZSh0aGlzLnBhcnNlVVZJbmRleCh1dnNbdXZpXSwgdXZMZW4pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfTtcblxuICAgICAgc3RhdGUuc3RhcnRPYmplY3QoJycsIGZhbHNlKTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodGV4dCwgZGVidWcpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVidWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlYnVnID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZSgnT0JKTG9hZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX2NyZWF0ZVBhcnNlclN0YXRlKCk7XG5cbiAgICAgIGlmICh0ZXh0LmluZGV4T2YoJ1xcclxcbicpICE9PSAtMSkge1xuXG4gICAgICAgIC8vIFRoaXMgaXMgZmFzdGVyIHRoYW4gU3RyaW5nLnNwbGl0IHdpdGggcmVnZXggdGhhdCBzcGxpdHMgb24gYm90aFxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHJcXG4vZywgJ1xcbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGV4dC5pbmRleE9mKCdcXFxcXFxuJykgIT09IC0xKSB7XG5cbiAgICAgICAgLy8gam9pbiBsaW5lcyBzZXBhcmF0ZWQgYnkgYSBsaW5lIGNvbnRpbnVhdGlvbiBjaGFyYWN0ZXIgKFxcKVxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFxcXFxuL2csICcnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgbGluZSA9ICcnLFxuICAgICAgICAgIGxpbmVGaXJzdENoYXIgPSAnJyxcbiAgICAgICAgICBsaW5lU2Vjb25kQ2hhciA9ICcnO1xuICAgICAgdmFyIGxpbmVMZW5ndGggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAvLyBGYXN0ZXIgdG8ganVzdCB0cmltIGxlZnQgc2lkZSBvZiB0aGUgbGluZS4gVXNlIGlmIGF2YWlsYWJsZS5cbiAgICAgIHZhciB0cmltTGVmdCA9IHR5cGVvZiAnJy50cmltTGVmdCA9PT0gJ2Z1bmN0aW9uJztcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblxuICAgICAgICBsaW5lID0gbGluZXNbaV07XG5cbiAgICAgICAgbGluZSA9IHRyaW1MZWZ0ID8gbGluZS50cmltTGVmdCgpIDogbGluZS50cmltKCk7XG5cbiAgICAgICAgbGluZUxlbmd0aCA9IGxpbmUubGVuZ3RoO1xuXG4gICAgICAgIGlmIChsaW5lTGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICBsaW5lRmlyc3RDaGFyID0gbGluZS5jaGFyQXQoMCk7XG5cbiAgICAgICAgLy8gQHRvZG8gaW52b2tlIHBhc3NlZCBpbiBoYW5kbGVyIGlmIGFueVxuICAgICAgICBpZiAobGluZUZpcnN0Q2hhciA9PT0gJyMnKSBjb250aW51ZTtcblxuICAgICAgICBpZiAobGluZUZpcnN0Q2hhciA9PT0gJ3YnKSB7XG5cbiAgICAgICAgICBsaW5lU2Vjb25kQ2hhciA9IGxpbmUuY2hhckF0KDEpO1xuXG4gICAgICAgICAgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAnICcgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLnZlcnRleF9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAxICAgICAgMiAgICAgIDNcbiAgICAgICAgICAgIC8vIFtcInYgMS4wIDIuMCAzLjBcIiwgXCIxLjBcIiwgXCIyLjBcIiwgXCIzLjBcIl1cblxuICAgICAgICAgICAgc3RhdGUudmVydGljZXMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSwgcGFyc2VGbG9hdChyZXN1bHRbM10pKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAnbicgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLm5vcm1hbF9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAgMSAgICAgIDIgICAgICAzXG4gICAgICAgICAgICAvLyBbXCJ2biAxLjAgMi4wIDMuMFwiLCBcIjEuMFwiLCBcIjIuMFwiLCBcIjMuMFwiXVxuXG4gICAgICAgICAgICBzdGF0ZS5ub3JtYWxzLnB1c2gocGFyc2VGbG9hdChyZXN1bHRbMV0pLCBwYXJzZUZsb2F0KHJlc3VsdFsyXSksIHBhcnNlRmxvYXQocmVzdWx0WzNdKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5lU2Vjb25kQ2hhciA9PT0gJ3QnICYmIChyZXN1bHQgPSB0aGlzLnJlZ2V4cC51dl9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAxICAgICAgMlxuICAgICAgICAgICAgLy8gW1widnQgMC4xIDAuMlwiLCBcIjAuMVwiLCBcIjAuMlwiXVxuXG4gICAgICAgICAgICBzdGF0ZS51dnMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5vbkVycm9yKFwiVW5leHBlY3RlZCB2ZXJ0ZXgvbm9ybWFsL3V2IGxpbmU6ICdcIiArIGxpbmUgKyBcIidcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxpbmVGaXJzdENoYXIgPT09IFwiZlwiKSB7XG5cbiAgICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X3V2X25vcm1hbC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsXG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICAgNyAgICA4ICAgIDkgICAxMCAgICAgICAgIDExICAgICAgICAgMTJcbiAgICAgICAgICAgIC8vIFtcImYgMS8xLzEgMi8yLzIgMy8zLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjFcIiwgXCIyXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFs0XSwgcmVzdWx0WzddLCByZXN1bHRbMTBdLCByZXN1bHRbMl0sIHJlc3VsdFs1XSwgcmVzdWx0WzhdLCByZXN1bHRbMTFdLCByZXN1bHRbM10sIHJlc3VsdFs2XSwgcmVzdWx0WzldLCByZXN1bHRbMTJdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5mYWNlX3ZlcnRleF91di5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC91diB2ZXJ0ZXgvdXYgdmVydGV4L3V2XG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICA3ICAgICAgICAgIDhcbiAgICAgICAgICAgIC8vIFtcImYgMS8xIDIvMiAzLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbM10sIHJlc3VsdFs1XSwgcmVzdWx0WzddLCByZXN1bHRbMl0sIHJlc3VsdFs0XSwgcmVzdWx0WzZdLCByZXN1bHRbOF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X25vcm1hbC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsXG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICA3ICAgICAgICAgIDhcbiAgICAgICAgICAgIC8vIFtcImYgMS8vMSAyLy8yIDMvLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbM10sIHJlc3VsdFs1XSwgcmVzdWx0WzddLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc3VsdFsyXSwgcmVzdWx0WzRdLCByZXN1bHRbNl0sIHJlc3VsdFs4XSk7XG4gICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuZmFjZV92ZXJ0ZXguZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gZiB2ZXJ0ZXggdmVydGV4IHZlcnRleFxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgIDEgICAgMiAgICAzICAgNFxuICAgICAgICAgICAgLy8gW1wiZiAxIDIgM1wiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbMl0sIHJlc3VsdFszXSwgcmVzdWx0WzRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIGZhY2UgbGluZTogJ1wiICsgbGluZSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZUZpcnN0Q2hhciA9PT0gXCJsXCIpIHtcblxuICAgICAgICAgIHZhciBsaW5lUGFydHMgPSBsaW5lLnN1YnN0cmluZygxKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIHZhciBsaW5lVmVydGljZXMgPSBbXSxcbiAgICAgICAgICAgICAgbGluZVVWcyA9IFtdO1xuXG4gICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZihcIi9cIikgPT09IC0xKSB7XG5cbiAgICAgICAgICAgIGxpbmVWZXJ0aWNlcyA9IGxpbmVQYXJ0cztcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBsaSA9IDAsIGxsZW4gPSBsaW5lUGFydHMubGVuZ3RoOyBsaSA8IGxsZW47IGxpKyspIHtcblxuICAgICAgICAgICAgICB2YXIgcGFydHMgPSBsaW5lUGFydHNbbGldLnNwbGl0KFwiL1wiKTtcblxuICAgICAgICAgICAgICBpZiAocGFydHNbMF0gIT09IFwiXCIpIGxpbmVWZXJ0aWNlcy5wdXNoKHBhcnRzWzBdKTtcbiAgICAgICAgICAgICAgaWYgKHBhcnRzWzFdICE9PSBcIlwiKSBsaW5lVVZzLnB1c2gocGFydHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZS5hZGRMaW5lR2VvbWV0cnkobGluZVZlcnRpY2VzLCBsaW5lVVZzKTtcbiAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAub2JqZWN0X3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIC8vIG8gb2JqZWN0X25hbWVcbiAgICAgICAgICAvLyBvclxuICAgICAgICAgIC8vIGcgZ3JvdXBfbmFtZVxuXG4gICAgICAgICAgLy8gV09SS0FST1VORDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Mjg2OVxuICAgICAgICAgIC8vIHZhciBuYW1lID0gcmVzdWx0WyAwIF0uc3Vic3RyKCAxICkudHJpbSgpO1xuICAgICAgICAgIHZhciBuYW1lID0gKFwiIFwiICsgcmVzdWx0WzBdLnN1YnN0cigxKS50cmltKCkpLnN1YnN0cigxKTtcblxuICAgICAgICAgIHN0YXRlLnN0YXJ0T2JqZWN0KG5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVnZXhwLm1hdGVyaWFsX3VzZV9wYXR0ZXJuLnRlc3QobGluZSkpIHtcblxuICAgICAgICAgIC8vIG1hdGVyaWFsXG5cbiAgICAgICAgICBzdGF0ZS5vYmplY3Quc3RhcnRNYXRlcmlhbChsaW5lLnN1YnN0cmluZyg3KS50cmltKCksIHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlZ2V4cC5tYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm4udGVzdChsaW5lKSkge1xuXG4gICAgICAgICAgLy8gbXRsIGZpbGVcblxuICAgICAgICAgIHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzLnB1c2gobGluZS5zdWJzdHJpbmcoNykudHJpbSgpKTtcbiAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuc21vb3RoaW5nX3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIC8vIHNtb290aCBzaGFkaW5nXG5cbiAgICAgICAgICAvLyBAdG9kbyBIYW5kbGUgZmlsZXMgdGhhdCBoYXZlIHZhcnlpbmcgc21vb3RoIHZhbHVlcyBmb3IgYSBzZXQgb2YgZmFjZXMgaW5zaWRlIG9uZSBnZW9tZXRyeSxcbiAgICAgICAgICAvLyBidXQgZG9lcyBub3QgZGVmaW5lIGEgdXNlbXRsIGZvciBlYWNoIGZhY2Ugc2V0LlxuICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGRldGVjdGVkIGFuZCBhIGR1bW15IG1hdGVyaWFsIGNyZWF0ZWQgKGxhdGVyIE11bHRpTWF0ZXJpYWwgYW5kIGdlb21ldHJ5IGdyb3VwcykuXG4gICAgICAgICAgLy8gVGhpcyByZXF1aXJlcyBzb21lIGNhcmUgdG8gbm90IGNyZWF0ZSBleHRyYSBtYXRlcmlhbCBvbiBlYWNoIHNtb290aCB2YWx1ZSBmb3IgXCJub3JtYWxcIiBvYmogZmlsZXMuXG4gICAgICAgICAgLy8gd2hlcmUgZXhwbGljaXQgdXNlbXRsIGRlZmluZXMgZ2VvbWV0cnkgZ3JvdXBzLlxuICAgICAgICAgIC8vIEV4YW1wbGUgYXNzZXQ6IGV4YW1wbGVzL21vZGVscy9vYmovY2VyYmVydXMvQ2VyYmVydXMub2JqXG5cbiAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHRbMV0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgc3RhdGUub2JqZWN0LnNtb290aCA9IHZhbHVlID09PSAnMScgfHwgdmFsdWUgPT09ICdvbic7XG5cbiAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSBzdGF0ZS5vYmplY3QuY3VycmVudE1hdGVyaWFsKCk7XG4gICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG5cbiAgICAgICAgICAgIG1hdGVyaWFsLnNtb290aCA9IHN0YXRlLm9iamVjdC5zbW9vdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gSGFuZGxlIG51bGwgdGVybWluYXRlZCBmaWxlcyB3aXRob3V0IGV4Y2VwdGlvblxuICAgICAgICAgIGlmIChsaW5lID09PSAnXFwwJykgY29udGludWU7XG5cbiAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIGxpbmU6ICdcIiArIGxpbmUgKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhdGUuZmluYWxpemUoKTtcblxuICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgY29udGFpbmVyLm1hdGVyaWFsTGlicmFyaWVzID0gW10uY29uY2F0KHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGF0ZS5vYmplY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXG4gICAgICAgIHZhciBvYmplY3QgPSBzdGF0ZS5vYmplY3RzW2ldO1xuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBvYmplY3QuZ2VvbWV0cnk7XG4gICAgICAgIHZhciBtYXRlcmlhbHMgPSBvYmplY3QubWF0ZXJpYWxzO1xuICAgICAgICB2YXIgaXNMaW5lID0gZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmUnO1xuXG4gICAgICAgIC8vIFNraXAgby9nIGxpbmUgZGVjbGFyYXRpb25zIHRoYXQgZGlkIG5vdCBmb2xsb3cgd2l0aCBhbnkgZmFjZXNcbiAgICAgICAgaWYgKGdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgdmFyIGJ1ZmZlcmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cbiAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS52ZXJ0aWNlcyksIDMpKTtcblxuICAgICAgICBpZiAoZ2VvbWV0cnkubm9ybWFscy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICBidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS5ub3JtYWxzKSwgMykpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZW9tZXRyeS51dnMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkQXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS51dnMpLCAyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgbWF0ZXJpYWxzXG5cbiAgICAgICAgdmFyIGNyZWF0ZWRNYXRlcmlhbHMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBtaSA9IDAsIG1pTGVuID0gbWF0ZXJpYWxzLmxlbmd0aDsgbWkgPCBtaUxlbjsgbWkrKykge1xuXG4gICAgICAgICAgdmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcbiAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFscy5jcmVhdGUoc291cmNlTWF0ZXJpYWwubmFtZSk7XG5cbiAgICAgICAgICAgIC8vIG10bCBldGMuIGxvYWRlcnMgcHJvYmFibHkgY2FuJ3QgY3JlYXRlIGxpbmUgbWF0ZXJpYWxzIGNvcnJlY3RseSwgY29weSBwcm9wZXJ0aWVzIHRvIGEgbGluZSBtYXRlcmlhbC5cbiAgICAgICAgICAgIGlmIChpc0xpbmUgJiYgbWF0ZXJpYWwgJiYgIShtYXRlcmlhbCBpbnN0YW5jZW9mIFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKSkge1xuXG4gICAgICAgICAgICAgIHZhciBtYXRlcmlhbExpbmUgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgICAgbWF0ZXJpYWxMaW5lLmNvcHkobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICBtYXRlcmlhbCA9IG1hdGVyaWFsTGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG5cbiAgICAgICAgICAgIG1hdGVyaWFsID0gIWlzTGluZSA/IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpIDogbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKCk7XG4gICAgICAgICAgICBtYXRlcmlhbC5uYW1lID0gc291cmNlTWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXRlcmlhbC5zaGFkaW5nID0gc291cmNlTWF0ZXJpYWwuc21vb3RoID8gVEhSRUUuU21vb3RoU2hhZGluZyA6IFRIUkVFLkZsYXRTaGFkaW5nO1xuXG4gICAgICAgICAgY3JlYXRlZE1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBtZXNoXG5cbiAgICAgICAgdmFyIG1lc2g7XG5cbiAgICAgICAgaWYgKGNyZWF0ZWRNYXRlcmlhbHMubGVuZ3RoID4gMSkge1xuXG4gICAgICAgICAgZm9yICh2YXIgbWkgPSAwLCBtaUxlbiA9IG1hdGVyaWFscy5sZW5ndGg7IG1pIDwgbWlMZW47IG1pKyspIHtcblxuICAgICAgICAgICAgdmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcbiAgICAgICAgICAgIGJ1ZmZlcmdlb21ldHJ5LmFkZEdyb3VwKHNvdXJjZU1hdGVyaWFsLmdyb3VwU3RhcnQsIHNvdXJjZU1hdGVyaWFsLmdyb3VwQ291bnQsIG1pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbXVsdGlNYXRlcmlhbCA9IG5ldyBUSFJFRS5NdWx0aU1hdGVyaWFsKGNyZWF0ZWRNYXRlcmlhbHMpO1xuICAgICAgICAgIG1lc2ggPSAhaXNMaW5lID8gbmV3IFRIUkVFLk1lc2goYnVmZmVyZ2VvbWV0cnksIG11bHRpTWF0ZXJpYWwpIDogbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhidWZmZXJnZW9tZXRyeSwgbXVsdGlNYXRlcmlhbCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBtZXNoID0gIWlzTGluZSA/IG5ldyBUSFJFRS5NZXNoKGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzWzBdKSA6IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzaC5uYW1lID0gb2JqZWN0Lm5hbWU7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZChtZXNoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgnT0JKTG9hZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gIH07XG59OyIsIi8vIENvbnZlcnQgc3djIGZpbGUgZGF0YSBpbnRvIGpzb24gb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gc3djUGFyc2VyKHN3Y0ZpbGUpIHtcbiAgLy8gc3BsaXQgYnkgbGluZXNcbiAgY29uc3Qgc3djQXIgPSBzd2NGaWxlLnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBzd2NKU09OID0ge307XG5cbiAgY29uc3QgZmxvYXQgPSBcIi0/XFxcXGQqKD86XFxcXC5cXFxcZCspP1wiO1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICBcIl5bIFxcXFx0XSooXCIgK1xuICAgICAgW1xuICAgICAgICBcIlxcXFxkK1wiLCAvLyBpbmRleFxuICAgICAgICBcIlxcXFxkK1wiLCAvLyB0eXBlXG4gICAgICAgIGZsb2F0LCAvLyB4XG4gICAgICAgIGZsb2F0LCAvLyB5XG4gICAgICAgIGZsb2F0LCAvLyB6XG4gICAgICAgIGZsb2F0LCAvLyByYWRpdXNcbiAgICAgICAgXCItMXxcXFxcZCtcIiAvLyBwYXJlbnRcbiAgICAgIF0uam9pbihcIilbIFxcXFx0XSsoXCIpICtcbiAgICAgIFwiKVsgXFxcXHRdKiRcIixcbiAgICBcIm1cIlxuICApO1xuXG4gIHN3Y0FyLmZvckVhY2goZSA9PiB7XG4gICAgLy8gaWYgbGluZSBpcyBnb29kLCBwdXQgaW50byBqc29uXG4gICAgY29uc3QgbWF0Y2ggPSBlLm1hdGNoKHBhdHRlcm4pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgaWQgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuXG4gICAgICBzd2NKU09OW2lkXSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGU6IHBhcnNlSW50KG1hdGNoWzJdLCAxMCksXG4gICAgICAgIHg6IHBhcnNlRmxvYXQobWF0Y2hbM10pLFxuICAgICAgICB5OiBwYXJzZUZsb2F0KG1hdGNoWzRdKSxcbiAgICAgICAgejogcGFyc2VGbG9hdChtYXRjaFs1XSksXG4gICAgICAgIHJhZGl1czogcGFyc2VGbG9hdChtYXRjaFs2XSksXG4gICAgICAgIHBhcmVudDogcGFyc2VJbnQobWF0Y2hbN10sIDEwKVxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHJldHVybiBqc29uXG4gIHJldHVybiBzd2NKU09OO1xufVxuXG5leHBvcnQgY29uc3QgTk9ERV9QQVJUSUNMRV9JTUFHRSA9XG4gIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FZQUFBRERQbUhMQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDNnRUhEUXczV0llL3BnQUFBQjFwVkZoMFEyOXRiV1Z1ZEFBQUFBQUFRM0psWVhSbFpDQjNhWFJvSUVkSlRWQmtMbVVIQUFBZ0FFbEVRVlI0MnV5OWU1RHQyVlhmOTFsci8zN25kTjg3ZCs2OHJ6UjZYYjJRaEpBRXdoZ2JzREJnWGpLSmNjQjJ5c2c0ZnNRcEtvbUpROHFwY2g1K1ZKSFlpWk9VRTV1S1UwVVN1NHdkdTBqWkJJdG5Zb09ORFVpQUVDQ0VwQmxwR0tUUjNKbTVNM2Z1cTd2UDc3Zlh5aDk3N2YzYnY5TjlOWklzd0JoNnF1ZDJuM1A2UEg3cjlWM2Y5ZGpDdjJGZnI0ZUhmZ21lQXZnNmVIdUc0N2ZDVjQ5dzhGSDR3RGZCZjNRQTUzNVcrT2tienJYUGhzODdoTVAzd0UvZWhHY3Z3b09mQlcvK0FmaTdqOEo3WGdGdmZnb2VlUUllZVJKKzVTUHcvTDlKMTB0K0E3NWY3Mjk0SlZ6OENOeDRDN3pzeStDYi96ejhwVitCSjM2U1N6LzdEY3JiQnc2NVpkdVQ4NG50bkVFT2NmSkdaRmYrM2tmSWg2QTNJUnZvQWE1NUp4aGtUdGpCOU9GODlQZ0g0QU9QY09YbkFiMEE5LzRjL0pOM3d3OC9Dcy84bGdMOEduNTlGanp3UVhqbVcrQS9ld1krOG52aGozOFJsNzc0YVQyOCtrWjRWYkl0K2Z3R3o4QnVkTm1Pb2tlUTAwZzZEMXdIU3dQNk1EQlJmTVZka084SG5nZDVGcVp4Wm5zSXhzUjhmVUxUQ0hsQ2RPTEUyRzMxeGlZRFprZThueXNmK2Fmdy9UOEIvK2pkOE0rdXdzbHZLY0JuK092bGNQZTN3di8ray9EZGZ3diszazl6NlluUFR6dzgrejNNdGlHbEVmV1JuY0NvaHpDQnZCSDhaR0M0UDhGYjRUaEJlbUJBWHFITXp3STdHRjRHSE1EMFVkRGJ3SXRCTWNhZmgzd0YwdkVNSnpCYlp2NG8rQWRuNUhoR21IREF4OXNBek5NT09PR2pIRDN6djNEbDJ6OEVQL0lVZlBTRHZ3Rzh3Ny9XQ3ZBbWVFa0cveUw0L2Y4Ti9QV0J5d2hiSDlqSXdPZ25qSExBeU13QW56ZXd1N1hsbnErSFd3OG9IQ1I0Q2ZoeFFqUXhYNFI4QXB0YmtNOG5YRUNPWU1nd255K3ZsMDR5ZVV5a1RVWWNzbVc0bVVsSE1GakdNZkpWeGQ5djhLNFQ3Qkh3UE9QTXdHMEUrQkMzUHZaQlRqN3dDRWUvOUFSWEh2a1lQUEpPK043ZlVvQlA0ZXNOOFBJdmcyOTZCL3lwTjNEcDhuVzk1L1pGMjV5RGMyd1ZaanRFN2g0WUh0d3l2VVVadmdDbWV4UDZjR0k2VHZpWTBHTkl4d2xYWGNCRFNnQllFanhCVGpEc3dLM2Nyd3A2N1BnSW5rQnlqanNnWXlBWjFRem5RV1FITnpQNWc0Yi8xQXp2QW4vaUJHTm00amJPeEk3ZHlmdTU5dUcvelpXLy9OUHdneCtFSzcrbEFKL2c2N1BoNGMrRnIvelQ4RmRldzZWTEcrN0Iwbms4bjJNQTBzRUJ1K010ZDMyZHNudExZdk53NHZpdWhBOEoxNFFjajJ4dndEeUFIUXlvZ2FsMnFERXRraGJJL1l0ckVYb3lRMlpJbHJHVTBKekJEWk1NQ3VDNFpFaUdwNHh0TXpwazJHWHNpUXcvczJQK21jejgrREVjVHpCUGtHL2hkc0svNExIMy9qWDQ5NStBWDM0ME1wWGZ6QXJRRVAxWHdWZDlDWHpUQS9EZ3Y4M2xyejNnQXE2akp6c25tZzVRRXZLaURjTXJFc00zSnliYndHRWlaMlhZSlpJTG1ZUW5SU3lCUTk2TzVkbXRmTVRxQ2NvblZsRERVY0NRSFBkaE1OVGJJTG1SQmRRZHBJUUZzUEo4YVFJeWVYRFFqQ2ZEMklHQlBydkRIczNZTCt5WWYvRUVlM3BtbG9uYjZmYnV4K2NiNy9xWDAyUHYvSnZ3bDM4eks0QUEvbnA0NVg4STMvRkY4S1gzY3Zud2dBc01qTmpoT1liNWdDRnYyVjRjeVo4UDZRczNqQy9mTUI4cFRtTHdnYlJUUkJJbkc4VTFBWUpZRWJDcjRoS0NWY0VrNFY2Y1FKaHlrV1Z4RTgwTEZJOXZjVitPTit1NFdGRU1oL0lpRHVUeTk1TEo0UkU4emRoMklsbUc1M2FjUEpyeEg5dVIzNTJ4NlJqU1JQYmJZRGY0R3p6MlAvNHdmT2RqOE1oVjJQMW1VZ0Q5ay9BWHZ4WCtTK09TSFhLUEhPcDVTWnhqc0FOR3RzaEcwZGR1T1BpM050akRJejRrNUdnSW1XeXhEY1h0VHdsMWJVSVVGNXlSUENpdVlDS29nOFQ5cm9vbHc4TVRDRVdPNFF4UXRWQ2lVQTRnbVpjd01GZ0pGV1FRTDE1RVpxUUdHWjJLTXVpRWJSeUdDVG1YUVhZTVQyUnUvY1FFLy9pRStkb3g4M1NieDVtZStnbHUvSXNmNExILzlZZmdoMzVUS01BcjRhSGZEbi8wejNEcHY3dkFJWW43Mk9nNU5qWXdjSjdOUnBIZEljTTNiQmkrUnNtM0JyYTdSSkhtQ0Q2RTlRNWh6aW1rRjFic0tUNlprcFhpQlZSd0JDeGNRQ3FDek9FaGtwY3JJZG1hSWdpT0ttQWVGOGxLM05kaS9TYmdZOXpHWEx5RFdIaU56SlFNaG93d2tYVkdiU0xQbVpQMzd0Qi9OckY3N3dsbXh3aTNtYmpGVmE1ZCsrTmNlZXROdVBrUmVQclhTaDdwMTFEMjI3ZkJWMzREL005L2dNdC81Qzd1R3paNkx5cDNzVW1IREhZT1lZdGZQbVQ3amkwSGJ4M3hxMXMyZVFQVEFUS055RHd3VENPeTI0S055RFNTNW9UT0E4d2IwalNndTRUbUFjOERPZzFvVG9nTitEd2llUUFmTUV1NERZZ05TRTVJVG1BSnNZUk1Renl1aEJxeEFabTFwQXoxOFpaUUc0cFNaUzJQSVNGekNnVk1PTUpnQWlSeUVxYXRvb2NKM3FRY2ZLbHcrRWJGZHdsN2VzRG5RdzUwMk56cjUxNS9nV3N2L1NEODJFa0ZHLyttZUlCL0Q3N2pEM0xwVys3akh1QTgyL0Z1TnJibE1HL1lqQnZTdE9IZ2Q0d2MvcTRCTG8zbzhRaTV1SGhRVWs3Z0k0SkdWQjRRVXh3SnQ1OXF2Z1pKeVFoSVBEYmtoNENUU25odmxyNDREd0F4aTFjb2lKOGgvc1VROHdnTEJzbnhUWG1DckFZeVJ5YVJ5ODhwaHplWUlSZThrTGNUTU9HYm1hekh6RS9zbUg0a00vM0VFZm5aR1RqaW1HdnpkM0x0Yi93RHJ2elhqOFAxMzlBS2NEZWtoK0Z6L3pEODdjL2w4bWNmY3NFUE9TY2poNXcvT00vbWVPUmdzNEhkaHNPM2pOejE3d3pBQ0hsa3lBbU9GVklDSFlzQzVBRk1FUlU4ckV0cS9IY0pIQ0RGNVlzdUtXQXhWSkNpTUI0K1gxZ3FDeEoyVytCcEVhdzRhUHpyTWtPcVVNT0sreC9vZ0tDWHRGQnpPSUVaeE1scGhyVERrd0VaSHlmbXpjUzh5WWp1T0xSTWV1U0lxLy9YeE80OXQ0QWpabTd6Zm01ODVLL3cyQi84bC9CVHYyRkR3QitGLytNL2dPOTRrTXNQanR6bkl4ZGt5OTFzT2Njd2J4azVZRXpuU0c4WU9QK05oNHpIQitpOElSMXZrTnNia285bzNrQWVrTjBJa3hiM1BDVmsyaFNYZXpLQ1ZlVVl5cy9UZ013Snp4cWt3SURuaEZ0eEJUS1A1Vy9uRkg4clNCNlFTY3Z0MHdDZVF1a1NrZ0VwdDBtV0VnS3lRcGJpOGkzY0N6VU5MY29vV1l0M2toRXhSN3hnR2MwRGtoMzNnU2s1SncrTXlCdGh1REN3KytoSU9sYnV4Kzk5am51NXpkVkhQLzZyU0NuL3FubUFMNEUvOXBYdzdaL0w2MTQ4YzU3ejNNMkdMZWYwa0FQYnNHV0RNZkxRR3pZYy91NlJkTi9BOFB4UTBQNHVxTGpOZ0J3bkZDbHhPZy9sNHBKQXBBQkNxeXhPZUFBVkVDbG9QOTZMVXp4QkZxSDU5eVRGK2lWRTV5V3dOTGVRd2dOZ0NKQ1RvZldCeWJGSUJWVU54TWdCQ1BNSVBtU0VHZldNRFk1cmhtSEdVMGtYMFIyK21UR1pjWjBnVGZqaER2S08yOSszNCtaM1RRejVGaWRjQjd2RkwvQ0JYL3BEOEliZkVCN2dwZkNLYjRCLzhIWXUvYWNQOGFvTHdnV1VlempISVlrdGd4eXk5UzJKa2NOTGg5ejN1dzdRaXdOeWM4UnR4RzJEemh0a041Q094NElCNWsxUmlyQklwckZZOWh3V25oUGtFWFlLUHVBbkJaREpWQUNldXdMRFlwVlppemVaaTZmQUFtdFlXSGdPUUdlQzVCSEpHbUJTU3l5eENFR1djRXNCQnFWNEN4ZlNydUFTSXhXeXliU0FqaHFQVENJRVNjdGlaRklRWWZNbTVjSmJqSk9QSjNaWE5pU1VlN25yZ1JPRzNjOXk2OGMrMDBiN0dWZUFOOEE3dm9MTC83RnduMis1S01yZGJEbGdTT2NZZmNQQmNNQmdHNGJOSVErOWJZdTljaVE5bjVEZEFUcVB5THhCZG9IR3A0SUhaQjZLdTk0Tk1JOHdEZmljWUM3Q0lROU4rRVVwU3JDMktlRlRLbjkvb3NndWxWQ1F5K1BFVWhIb3JHaVdndmJuVUJvcjRVQm53VkVzSjhRa1hMeGluaUlEaU5UVEZGd1JrNUt5aXVLeUVGT2xmS2k0aDhDbEtKVDRjcDg0SEEySms0Y1M2Y1VKZlE1T3Jpc1R5dDNHaTQ0Wm5weTU5ZlExdVAydld3Z1F3UDgwL014cnVmem1EUmRTNGlJYkRqamdrSzBlY21nYnpySGhrQU8yT25MWDV5VHUvL0lSYm93TVJ3bFNTYkcweHVnc3hXb1p3bFVuMHE0d2ZJVzYxYkFrYmN5Zm1VUWFYNjB0UUdDaUVVVWVpRCtMRnVZdkJZWmpvWG5SRWlIUWNQOFMyWUFVOTUrd0NQMVd5S0Foc29QQjRzbnE3Ym1FaHJGd0F5VnptTEdoTUlab0NRdVdTa2h3ZG1ReDBuaUVYSnk0OWZnUnovOVhPL3paSTJSempPK2U1OXU0OGZVL3lHUGY4NitiQW94dmdiZi9FUzcvd3dQdUUrTWNHODV6amcwSEhITEFodlBqaG0wZUdlMkFCMStXdVBEV2tZTUhSdVJvSkUwREtRZUF5Nm1BcGJDMEl1Z1MrMU5XVEJLYUJUUmhCdXFLVU5BOUtDWmFzN1pRak9KdUMvTW5qZld0VlQ1ZmZrUmtLUXlKTE9qQlVnVUpoU2hTTWpaNlFmNmpJMlJJNElQQkpoZXlTQXhMam1vdUFoOE4wb3lQaHFWY2FnbUQ0ZU9NcFFrZkpqeE41REhqbXdua21OMjVtYnVmbTNqbU8yNXk0eWQzSkc3eFBNL3pRWjU2ejdkeTVRdXU3OVd6ZnQxQ3dKdmhxLzRZbC82eGNwOElGMUE5ejBZM0pEbGtrQU1HUGVEY3VDVk5Cd2dqRDN6eGxzMzVMYklyc1YzbUFjOGxycnVGQjVocXJFOUI0bFRYWFg3M3VTaUwyNEJsWFZ4N1ZwZ0NLMlNGV1hCTDhSakJjNG93RVNIQU5KNWJjZE9DN2lkZ0xxN2NjOUVTTVMxS09RcytLKzQxQTVEbS9wbUxWNUtwZUNrSDNFdEtpcGRRUWk1cVZXb0tSZlhjU3hnUjBhS2dMb2dWTEhIemZpZTlYc2hQT3RQSElERndMOE9scTV5N25ybjI1RE53N2RkVkFiNEMvdnp2NFBLZnVjaDlEOEZGbFBPTWNzaG81eGw4eXlCYnRtbGI0cnR2MkY3Y2N0L25ET2p4QUNjRHNrdXdHNUZwS0xGOEdpUHRHekJQK0Z4Q0E3dUVWYkNXUTZBUnJ5Vkg2aGJDTHNDd3hHMzNWSVNSU3lwWVFGejl0NEE2bVVMUUpuZ3VpbEZ3Z0pSd005Y1lEOEV2QnpNWXFXQ0FRbkVKa0ZjVXhMTVdZWWVTV0FqZVNiZ1U0Q2lxQlZBR0xlMU5KTVVONlF4Ky8wQzZXNW5lcC9pUmtGM2xTL0N2dmdkNS9mL0xyYi96NjZZQWQ4UGhOM1BwLzc3RWZTOXpMakp3bnNTR0pBY01zbVgwTFlOdjJUSXcyQmJWRGZlK09uSHU0Z2JmamNpdUNKcmRnT1l4OHZlaENOTlNXR3ZrOEY3eWRyZUM1bjB1bEt4UDVXY0w2eTdXR2Y4R3dITUx6MUFWb1ArMnNHSlhaS3BjUVFBL0s4Q1BySmhMNVBGU0FHRmdFSE1wcitjQkNDMlIzWXRIY0NuV1hLcFNxSldmeFNnaFN3UTNEU2pqdUNndWpxREJFemcyS0Q0NTQ2dWR6WG5uNW5zVW5RVkIvU1VNcjNrS2VmeUQzUHJaWDNNRmVCVzg4Uzl5NldQbmVHZ0xGMG1jWjB3YlJqbEU3VHlqYjBoc0dkbVFaR1R3RGVmdkhybjQ2ZzNKaTZYck5CYjNIbWlkWGFSbDg0QlBRZXhFT3VkVDRlNDljRUsxY3VZUUtrTm4xU1U5cXh3L3VTcERjZHRtaWxVRVBsWFhYUldpRkpyY3BMajlPUlhCZUxGVW44T2RXeWt3bGRDZ3VIbXhiT3VvNmVoRndJcGJkNWZ5WTRCWGwxS3RMSnhHcVVXN2w1QWdsa0M5SklzbTVBeThYTGp2cGM2ejcxTGNSQVRsVFF5Lys5MDg5VjFYUDAzYStOTlNnRGZDYjNzemZNdUxlZWx2eTF6d0RlZEZPRS95QXdZNVlQUU55cGFCRFltQndUZHNkZVQ4L1FQbkxnMzRjWEg1UG8vb1hJVHI4MWdzZWk3SzBMN25TTjFDb0RZbFBOZzRzd0czRUU1MTkxWml2SVZWdXRYdjllL0UzK0hGTlJPM1M3aDJtNnZyRGl1TkZFK3lOT3JacXlMMEdDQjRaNC9laElJVnRIa0V6OEVaNEtWSFFheVEwQVVVTkxEcTZxQ3BQQTVCZHNKMERuaVJJQ2p6aHlCblk0TWY3TGpyZ25IMTZTZmdvNStxTElkUHcrMWYvRVB3RDE3TTVWZU8zTVBNb2FCYkVnbXhBNVF0STFzU0d3WkdFaU13a29lUmREaGc4NGdjSmR3S3NaTkpESE1SOEV5cHJHbldoZWNQcTNJRTk2SEYyTnhndkN5ZEhCNjNCOUhTV0QvVlF1OVg0RlhSdjhXRmx2alhhczNBdzNDOUpDS3AzcWZCRm5wNWpaeFFDdHFQSWlDU0JVOEtQcE9Td3BTeHNaU0dNWW5uSzlTeGVpYmJCdmVNMlFac0xrbzFMUG1ac2NXbEpDSG5uekYyRnpLSFh3bzMzNU9SRHg0QzhBMU1mL0sxdk81M3Zwc1BmTTZ2cWdlNEc3WmZDdC8reFZ6K21zd0ZqTHNaT1kvNkFja1BTUnd3eUlqNGxvRUJaY1BJaURCeTdqQngvb0VOZ3dTdlh4bTRYUUZ3YmtQeENybWdmTEtVMjNLSnhXWkRBM1F5bHhodnRWb1lvTXdDMEVubDZhY0lFVk5ZN1JSaElGaTdraTdXWG9PSXpSWDRSZHl1Z0E0VFpKYUNLWVJpOWJOZ0VSb0trUlBLRjdTMEd3WHNlWGlwNkZNb2FFOWFoQ0FJSTY5ZGNoNUZLaGNjUjF4THk5a0Fib25OZytEUENOUDdqZXpLalBnOTdCNDY0TnlMZm9acjcvelZVb0QwaGZDT1B3RGZycnhNbElzWWgyellvaHlnSERDd0pma0daVVRaa01JREtBT0hCeU9IOXc2a1hVbmhkQzV1bjdtNjdRQmc4eERzV0NtK0ZBQTNoTVZwQTRlMXVPTTFWY3VGWWZPS3dMMzhLNTR3THlTUlMySG96Q3ZOcXdFZUYxZHVBZmpxN3g1cFdna1BRcWErWnNUendBMzE5UnJxZDFxYWFOVDRyeTFzRUNsaWJZMDBKTGdMV1lnSzgrS2w4TUFKSU9KNGh2TnZNcDUrbnpNOG5ja2tVUVovRmZrdEwwTGUvSXZjK245T1BrbU9JSDBLb08rVnZ4Tys3ZVc4N25XWkMyeTRtNEZEUkE4WjVZQkJOZ3l5SmZsSVlvc3dNaklXREtBRG0rM0F3WVVST1NrMEwxTng5V0lKOTZFVmV5VGl1RldrWDRIZFZCSDhzRlRoYWk1ZVl5d2xaTFM4M05NNkJsdjNiNlJvcS91cTVXZHBtVUVOT1RYbTEzVFE2KzBXOUdKWUxEVmNtUlJnV01OUmtGUHUyZ1R0Q0JaZXdtdjhyMG9nSHQ3Q3c0dUFpR0RaTUJOeU11NTdxZkwwVDJlR0NkUmRNam05SEY3M0VhNys3Qy9ETDMxR0ZlQXZ3SWRmeWVYUFVTN0t3RjBvNXhBT0dIeUwrb1lreGZLVGIxR0djUDBEaVpGUlJzYkRrWU5OUW5ZREdtVmJpVEt1QnZqVEFIWG1RL0RzTlk4ZnNNQUpZc0hmV3ZSeGl5SVNuVGVXU3JyV1dzUk9mMXZ2cXBFR3pzUURqVmZocTVMRDBndjFMTVdMZUhpS1pzV2xYbWdXbnNQQnZYU2ZtV2hZUDNHZll1YWxGcEE5d2x3UVJGUUZDaVhJVWhwSnBIb0FJaHdVUUNBYlJlOTI1bWZoK0JIbkpGcGRCTmRYc1AzaTcrWGEvL1RKTUwyZmpBSU1yNGUzL2g0dS9XbmhQb0Y3Y2M1endCYmhnTVFCaVMwcUc3QVJaY3VHb1NnREk0bUUrc2o1YzBVdFNuMWVtL0NsdG1mbGNQa2U1STVwNU4zRkd6UUxsMElJRlo2L0l2c0lIMmpwRXZJdURBVFJZdUVKdEFwYUpMQUZ6UzFMamQ4aHVNb0hrS1ZZYVUwRlBlNnI4ZDhXd1hsZTByem1FYXBnNDdXOWVaTVNSb29uODhXTHRDWWt3VW8zQ21JZzV2aFFzSWljR09hZ2g1bmo5NEZNVG5iRGdSRy8rd1FaZjRsYi8rU0ZsT0FGRmVDMThNYmZEWC9wWmJ6MGRjNEZFbmVodWtYMG9JQTkzVEw0aU9xRzBVZEdOb2dPcFcyYmdjUUdJWEZ3ZmtSdFFGMUpjMElZU3FVdmV1d0tXVklFcmpuY2R5N0NKU3BuK0ZEY1lVdTFpbUtVRkM4bzJocWpmUUZ2SG1IQ3ZkUUthdnBYWEd5NGVTbmV3U2pmWHVzTDRlN0x6NkU0M25tQ3lPdmRXWlFwK29TOWVnU2p3eExML1NhMUw4bGJtQ2hkQmw2NEFBOTlpR3pGSFV3TlY4R0c4b0R4a25EMXZZNWVkZVlCSmhOR01xK0R0NzJMcTMvcitSZWdpbDlRQWI0TS92TTNjUGxyTDNEeHJzUTl3QUdxQjR5K1Jmd0E5UzJxa2ZON1FmemlDUTAvb0F3TURLUWhNVWh4NDJwamhJQm82N0tTRVdpdTFseHdBVlo2KzJzNldDNVNXbWpZTHI4dWVaaTAySTlMSitSNHZDeDR3SDBoZE9peFFGVXdEMEZuUlpBQ0RrM3dGcjgxWEhzQmZTWlN1SHd2anhFVHpNSG5JSXR3Y2pDRGhRYVFNSHhaNWhteWhMSklpd2pORzdnZ1lnaVJHY1R0bnVEZ3hjWnpQeXBNVzRNNWMwVHlpV011SXEvL0NXNTkxNytTQXZ4WitNRjdlTmxkeWdXRUxjS0dVYytqVm9RdWpDQWJrbFZyTCs2LzJIOE5CWWtraVVGTC9OZmFiZXVsOHFjaFVMZUVTMnFramFKb2hJRWU4SldMSGxpZ1duSGdnYVdDMkFzOHVIYVhGVVdMTEdEUHZIUHpkRzQ2ZnBhNEh3OVVMMVZRblZKWVova053VWNNRCtyWVZSb205RTZockthRkpxVk5mZGM3N3dJc25LSlVKWVJaZVpMUnlUdm4rQU9PWHhOY1pySm5FVlF1WWkvNU9GZC82Z2w0OUZNbWdsNENENzBKL3ZqTVpXWkdSZzVJSENLNlFVbG9nRHhsUkt5SVcwamg5Z2VVMHVDWm9uYy9VZEk1b1pSdlN4NGVRZ3ppcDdSaDYyS1JBV3VRb2d3V0tGeFZsZzdnbVBjemFrcTFmQ3NVL0JEVFFlWDMrRlZMaWI1bFhoN0RnbFhQUExwRnpiRTZJNUI5NlNJMWJXWGYwdVFSTUY4S1FnK0VXTFpPRE5GdG5BTGdUY0MyZkhRU1dBWTJEajZnQTh6aTViSmswRjJoZzJ4eEJkSFVPc0NoWXpjemg1Y0hodnVONngrYjhYUlltay9Kakp3L2ZBT1gvL0M3ZWV3SFAyVUZPQWN2ZmpWOGpYRUI1VndJYUlQSUJ2TmkrY3FBaExVWHBSQ0VCSEdMb29ncTJrQ2ZCSEFyTGQwVzdWRHF5NENIeUpMT1dkL3dFYUJLUk1oWit5cCtjZE1hMFZTazlYbG5hODNkOGRxMGZEcG51b1pBY1BPWUovRlFyQzQyUTZEM0lQWkxzMkJoTWdPbGkxbk1IM3J4SENLRWVjZFRDTmtMU0JRdG5lTnNTaE4wOWNNYUJKTjRLcmU1WVlmZXhPVDF0WmxMdlVLTWdaR2JSODZGMys1Y2UxOW01eE91aDVnWnhqbEdwZ2RlQkE4L0NVOThTaUhnbStFSFhzN2x6enZIWGNQQUJZVHpDSWVJYkZEYkxEdy9JOElHMWJGMDhUS2ljWStRU0Q0Z09xQ2VTRnBTUHZGeW4xWnZFRDMrMWNXTEJGSFRwbjZXNXBCU1pGbThoNFRTZU5kZjEzdUJsaEthQk9NV0lTQ2FSNnZyWHY1R2wvanZwYTFyY2NYU3lyVFdsS2liUFBJT3lMblVhWUtpUms0amhLU0dFRm5DZ1dSd0NlVUo3eUVtVVNPSWJ4RlFJNnZnWXFYOE1CaWpaK1NDOCtRL0F4RWpBOWwzbkFBUHMzdnRSOW4rL09OY2UrOG5yUUF2Z2t2ZkNIOVZlTmtnM0ZzRVR4UjRaQ1Q1QWNwUTBqODJKRTNsZmsvaEZZWUlEeVhlNDRta0kwa0sydGRBOW9pMmlwMUdwNitRU2w3dktaQjRLa2c1UElORWVCRFZRTkRSZ3QwRE9JdWV2S1VZZ0VpOThCcUdyNTJTTEFwUTRuc0lzOTR1dXFSdnphVkVSYThZZldDSUdvcUtBdVNZVllRQ0VvdVhFVHFSeG1DTEw5bURlTUVEWGxMQU9vWXFMaVVEa0JoeDh5Q0lRaEZzbDVtdU9NZFBPcWFaM1lFeHp6Qmh2SmlUTC9vRnJ2NzkyMmRVREljN3NINWZKVndtY1E0WUNyM0pCdEZFdGhMWHBadkxrM0QvUmZnTDZTS1U3UnhDQ0NoNithcnJUNEhZSlpxdk5aQytXd2c5bUxqYThxVXhjaVVxbmFWcmVQeE9ZQ3JMNEVlbFdPTXgwZ21nZmRsWkpoR1AwcUJxWFRBck5YcVJnZ3ZxdUxHcEZhQ1hvMzlRSlFDR1J2UU9MVkhGc3dYSjVTRllRNGRVN0FFcnltYWdsa05aVS9Fa0Nod05wU3BrcVJTVVRneGpCSXp4dnNST2phUFNtNGJ0RG9FZHhvRmY0SjZIUG9kTDcvZ1JydnkzTCtnQjNnaGY5Mlh3RnkveXNnZWRjeWpudzlJUFNMSmhrSVBDL0xFSnZqODFGckRFOGhFSktDZ01pQlN5UjZVb1RaTFUwTDJZTnFFTGl6dXZibDlXd3hZbGRSUHBLRjNwc1VEL0xTMVZxeTU3YmZFYXFoRHNYdVQ1cFgrUVUyQ1NqdUZidkVKWXRWQnFDVFVzTkU4Ui9IL3dPeGJld3dNekZFNmdJbnV2RmVMV3MxZ3pDdFJMK0VpR2lNTU16STRGTDhDUWNURXN3ZTBQT1BscHg3TXpTeWE3a05uSlRPWUM5cG9QY2ZYdjNON3JLTlo5QmJnWFh2c3dsMStWQXVXWGgyeWlMRHVHdTVaQTlxbE42RFowSDVaYVkzejVmUkZVOXNVYnFOVWUrenB6RlJpQUZLNVRXekdsQVQ2aXgxN2xET0hmU1JuMjcrc3lCVjMvM3VZSnJhc0JzT0NQU3VRMGNHcmE0ci9YbW9MSndqTlVRaXNMYzA3WUpOaWt6SE5wVzJkWCt4bVZuSlY4ckV6SHlqd0xlYWZNeDhxY0Zac1RlWmV3blpKSmhScmZKZng0aE9PUitTaHh6eXVFRzFQQ0QwcUl6WnBDZGdPWE9QK0sxM1A1ajV5YTA5K0wvZmMvQks5V3RnYzdhbEduQ0xnaS92Vy9LZEk5S2NKY2hZRFVCR2R0cUs0b2czZVA4UjdsMXdtOUhKVTRXNENkVWFwcFZvY3lwSGdERVlsYXdGclFibDBocHpadHNBZjJiRTh4cE9zdjBPQURvb0tYc3k2a1VhU2sxWFBVOTJXMktJS2p6RkV6eUZHcXRpek1ua3FOSVhvYTV1aFd5cE15VDhvMEtmT1V5Sk9TY3lLZkRFdzdKY2UzSFN2NXVDakNuTXR0YzA0a1U0NU9SaWFVYkNQWkI1eVJpUVJzbVJuNUN2ajJUNGdCN29HWDN3TnZjTTREaDh4c0dEbU1YR1VzWU05T28yMGxZWUVNK3ZzOGxLU29XamZMdjQrNjZRQmVkZnVhMXZmYmt0NFppZ1poSStHT0Z5VW83cnA1aUJiN2c2dEhvaVF2clh0Y05maUJiZ1ZNNlMrUmhZOVZYOVhzNjMrR2hSSVU1TzdaQ3NWaEhWQjBpL25COHZ3NUtiaWpPWkVWTkh2cFNnTFVyV1FDbW1BMk5BbHlsTEJzY0tqa0laVXdjQkxYSlNkSU0zSTBzanZPbkw4N2NYSnJKdGZzaVEwd3NlV1F4N2p3OHcvQXhXZTZiYWNyQlhnSTNuWWZsMSszdHZBaVdORStObXV6OUJxN3F4V3Y3NHUvMFdGeDUxcUVtNngzeHhSZ1Y2dHg0WUtsZDgrOXk2L1cxb0ZBcmZHOUtRS3RZZ2RhaEJ5aWpRSGY4cnZ0RCtLbmlNMjFkOE02b0ZnRGRUaUw4QUpGTTdURjlQSUFpODRnQzQ5aFVTcFdzaFZBcUdLUUpRWlpTcXpQa29KOEtxVnZIV1prekVqU012MlV3MHhLZHdoK0tIQTBNRzB5NlRDeE94NlpjOFlabVhWaVlrTml4NDdCSCtiY2IzOFJsOTcrREZmK1h0UHg3cE52dmdUK2l3ZlpQZ3dqQTF1R1pzMWppU21XMnJTT3Q5Z2YwN0loOFBvZlhZcW10YmV1aFFKbEdidlVzOTF4QURTelBtVElHZDRqV3E2YnV4VnkvRjNqRUpDT1ZJcm4zUU9LcnJXRzMrT040czZ6ZGNXaFdpeUswQ0lzWFVHVkdqWVRzaThEcTFhYlRXbzJFeGpJNWhKYWNwWVdBaW9XbUxNd1QwS2VsVGtQekRuRi9ZazhwOEFJQ1R0S1pBcGVFQWFPZC9YYURrdzJCdVdadUYxbW5maDN1ZWZ2UGdEM1ZYL1hQTURud05zZWhBYzlRTU9NTXNiUEZaUWxVcmR1aFVEd1E3aXY2aXZLQjAxbnVuWnB1VytOK2Rad1FZbUg2U3cwMzF5dk5rdmZCM1BMZHc5dFpOMWhjNGZoS01kYmw4N2V0RnNRT2Q0eGc3WlU4K0lXTmNMbFZzbzJmdTVxQTFZTFFGRVlLbDZ0KzVtU0ltYXY1SklYWWlqNGFVbmxTdGIxRlJJWVNKT1NUeEpwVE54OE1uTkNZcU1EczgwNGlka0dkbXc0WklOeGdjZTQvZkZuNE5sVElQQXlmTDF6cVZTVEdTSlhwMFB6UTdqYWFsVmpzU0pkbys1V0lBbFJWa3RxajFGZFdaOTMxZ1pDUmpwZS83Ulg4RThvZkRrRCtlOHJ3Zkk0L3dUWkFaWEZzenM5L3g1NTFKNVRNSTI1Z2dDUXhycXpxTzhvenE3TWxzZ3VtS2RpNlhQeEFqWkxRZm83c0NrMUlKaHpLc0J5bHBJbEhKZk00dm5IUzk2V1RVdnJHaU9reEp6Z05va25TSDZlY3k5K0M1Zi83Q2tNOEZwNE94emluR3V4MzNWczZaa0h5bzhweVJwWkd3cFdsWWluU3dnb3Qydm45Z3NWcTZwcmpsK2x4VWZRRlROM2xvQjk3elpaQ2VaT2xpOTNISXYwTS94Q0ViNnp6eGRWRDJiTEFHSjhWb3Y3QWxFcW5YSkV0QldQVUJBYkN0V0w1OGdlTzRtOGxCRHExSkFwOCtna1Uyd1hjNUJtVkRNMEwyM3FmcWhNUjRuYnR4SnpHc2lleVphWW1DREJQSThJT3k0d0NNQUoyMGRXSHVBQnVQK2w4RXJuUWppYzJNQmxwVUpubWxvb1dJaVVWRWFkcXFWYitSa3RYa0cweG55NldGdkxvWFZJTTRSWE9ZQTZ5TmxBSDNzV2QxcjRpeWVSVldqNVJOKzJzdHJUSHFLL3ovZHVjNlJ3OFNya21FZzIySHRjR0VaMStaWFU4V280UzZycVhVZVNtekM1TXFsRU90WUFBQ0FBU1VSQlZIdkJCS1VmZ2NJRHhMOVRMaHpCdEZPbW5iSXp4WGJLclN2Q0ZIaGlOcUdzTzBqczhraG1ZR2FEQWVjWWVTbWJQMUhxa2FFQXI0Q3Z5bHppaERIS082VkVsUnNScEh0dXVNdVJLY2plVUV5bHJVdnhyZ3hiZC9WVTExN1lNVzNXWWEwSlhydGE3WjNpZThmY25TbHdWdmVmOWJkcjVWbVV5L1NGRmNJNm9MY1FVOUt3a2NkU3FyUGV2MHZCUStiSzVDWGN1UXV6S2RtRk9SZFdNZWR5aldZcnVHajIrSGNxaXBIbjhydE5oUXVZWitYbTAxMm9ZY0FJVGdERnJHU09HZVdqREx5UjhlMHY1OUtYTndXNEJGOCtjMWg2OXRneVJUcVVhbG9VOC9kejU2SnRMMzVLNzRLdFN3V2pjMWE2Vk03alRmVi9iMzNzdDFMS3plaVpkZjc5ZUx3SW5Ec0t2UGNTbjhnN1pEMXQvZnZLWWwwRFNBMTFidElVeUV4WCtNRzFmTFlxNUd5MGNHSFJaVnc4eWZKNUxZZWdUWmduWlRlWGx2VjVCL09zekNlVTIyWmwzZ25YbjFibVhTS2p6RnFVekoweVgwa2l4N2pPUFJIMVg4dmh0elFNY0FMUHpiQTdZTng0dUg5akpOZDRiS1VBTTNSRWovYkxHV0VOOUU2UmpkcmFxUHRpam11NW1KVjBhZHMwVmhlOUxIeldVeW5nMmZIZXo0ai8vb0taQU4zTTN2NlhyM29EZk8vMnBiQ2tyZHRFMVdOeUtkNi9GZVhQMFJGTUxDS3psRmY5aGlwRjRJdm5DZHlnaFMrWUFRYkZjNDV3Yk9nQU9TdlhuMU95dzBSaXRveHAyWjg4TWJmWHZFNXA1amxnNUNwOFB5RERBM0QzQUxaaHUvR2lEQnhFWEUrdFZwUWE1MjBMbFlJZ1pLTXdoTG93YlVhaE9WTVhzM01VaWN0NjNzaWZSVWhoY1lJaXFiaStlaitkUjdDdXkrYzBvdWNGRmVPRmRtTDQzbTlWYWZLWnlyQThxb0pGNjBxODJXU1ZTcW9XYmtKVVdtTkpydWtoTk1VdW5rTHg2RHlhcGF0Z1Z1TVFBMTE2Q3RncFI3ZUU0MTBGbldBcVpRNDIxdEdZVmc0bk1VVjR1TTcyY2NDSGkvRHkrK0ZOSjJ3NFlXQ01vc2ZVbUhsbGp0RzcyWHJoTDhSSWtXcWtoRllmb2UwTjFScEExdko4ZFhoQ3ZJYURvczkraDV6ZVcrL3N3aHQ4NnNJLzJ3dllubzMzd3EvMzVPNDNVMjlod0lJVk1KWFcrV3ZkYnJKbXllWjdvSE12LzQvYXZsbnBpWmxkZ2s4c3RMWmtpYzBuZVdsODNScTJVNVRNamFzbFhNNElVOUtXNEdWeXd3RnpkejB6QTEvRzV1OC9BNjhaenNHckgrRFM2MFpHTE54L2ppS1BzMDdYdkRGbUpWYk5xZ3lWSllzV2FRMVFxS0haMnNWM01XbmdUelU2WitOdnZFdnBjaERNZlUyL2o4czVxT04xV1BoRW5xRkNFMm51OTdRaStON2pRMml4TDdqeC9WWG9kTE44M1lZaFpja0tsbzRnYVUyZzFvVk1peWJSMnV6cG9rME5zeW1lbkp3THhUUko1d0d5TWcvQ2tKVGptOHFObTdFU0w4RHpUR0ptWmc2am0yMi9BMkRnTWNaL2VoMmVITTdCYSsrRGwwMEJFaXlzdm1oM0FSVVN4SUtVN1hlTnJiTTlTOUs0VFd3dHJCcElQUG80cFhMNVRRa2tYbGRJRVVweWwzRDJncEV1TEt3aGg4U1NxSTdJMGYxNXU5TngzczhJRFJaZXdMdWZxK1g3aWcrSTIxWjhnYXg5aWdiYXh4ZFh6eklBWktHUUdjRkhLYk9LTEQybExxVjJVQm5CM0UyaXpSbWV1d1k3Z3prNlRtZVVPUlNVT0RCaldhbzlVamFSSm44dGZOMkh1UHkxd3pYNHVZSER6VkJhRFZGU3VMd0Y1bmtJeG0yNTlySXFrQ3hJWEZyRmp0WWkyb2VCNWFKTDhDVzFYcWd0ZnFZT3ZGbkxtM3NSaFhMdFlRVmZ4ZXpUdzVaaXZZaVdDNzAwWVVRUWFLU1dMNlNQRlNVd3F5TUVzaW9rK1VwNU9qS3B4bmhkRkFMeitQdWUzeWpQYmRGbmFPcGtFK1lzREtGRUZpRERnaWc2T2hLT2o4czF5dkcrU3I5SVRjZW4xV3VBa2N2VmxTMGp3TW53SXZoY0RlR2YxSTFxSkRieEFTeTBibWZSK09XdFR3Y2k1WkRvQjZnWHhjTkwrTXA5eHg3blU1eTlrTFc3eGFRaDZNUUNiTHhSVG5MSzFwYUlLM2NBZk5JMWVVa1huWHN1ZjkvOUUxbUtSNDd2WGZwWE9uVXlyUGpBUGh2eVVJVyt5bXpkN0lDSU5Fdk9YVG02Y1NOVzI5T0ZLWmRPbzduTk94anpiYmg5SzdyTVU5UlNnaDNNb2RHNUMxdmw5K0lCS0tweDhpSzJYejI4RHI3Sm1uQWd4Lzh6aWEyV2xpMDFYWm9ZYmZuUUN6QU1OMjhTSFdwRm9RYVdzeGlxKzdZdWhpY3JqR0N6OElvSmdraXBmeXUyS0pCMEpWMC9SUUN4Rnk3T1NnVnB6N1hFNndVQTFqSnlFN2dXRjU5WHdIQmZZZm91d2xZUWpxRlJYeHBGbThKSXpCM1U4Q0NCcGFVQlhRL0RnSExzRUVtYXN1REM3WjF5TzBmamloc3pNRFYrUlVQNDJnSncxa1MyS3QrQnpMZ1ZlRkNmZ0o4NzVvTERHTXpmWW5zVjZVNEtSeFRxTTZjRmNUbzlEYnBjV092Z0d6MXBaRFcrUzhTOW1qWVYxc3Q3MTIxMHo5OWIrZ0t1N0JTM0wzdFZ2dlhmVmtYUEhUNHhYZDZ6aFVEeWlwMDgvZnJXd09jZHFvdTZ4R25SZGQydEFrdVBGSHJCRkxKU2xKd29IVVJaMmo0cmdzMDdtaUx0VTJjMk9MRVNMbXJJeTdxUGp4WVRMQzBpeWdhNHllWTl3dzZlR2RnSlFmdDZkTjZDTW9WNzNHaGg5bVlER1dQcFpVeXVKSlJjK0FteUxTK1c5N29CZTZGUVY2L1lNanVodmFCMEVhWmFuMHJLbmgydTgzU0JGUjVZQTBlNmtOU0JWMnRMUmR2djlRMjVDYmtSUHQ0d2hyOEFqMkRWM1hkZzBEdFJaSk1XUWxySnVBMm5WSzhRajB0eHpJMFlrOE51Z2wydXlseTlST3QyNmE3SEhpbG55N3M4QWc2QjE4T2YwZ1QzWmpiQkdKVzNtd056RWh6L2JDWHhNUzNGaVlKQU5mamxNb2l3Ni9OcVBaMEcyUjBzMWJxS1dYV3pidlZid2tJWGdKYzdJWnhPM0ZndXB1Njc1anR6QUZhRkZwbEZYZHl3eXYvM2xNZWE5NUJUQ3RFQXBxNEJ3anFWN0laQXUyNmwvYlVlbVdKb1U0WmRGbmE1OHZvRm83Z295WlpydWZwOFptYzB5S1pvOFIwWTJkMHp2QUsrTURYaUlBNUpVbW4rMzdxWWprRHlzTU93K05yTlg1b2NDOGdyN3QxYnJibllRbHBpZWx6ZzFGdHlZSUZaeW5CazYrRXpXZVh3QlJPc1p3RTFFTFhzNFlENm5CV0FhUWl0RFdUdUVkZWxNV1NON0dzVzRDck01aDNqdTZSL1BYRmtIU05hT3BxOURZaldoU0xXbUQyYTR0ZnNJbmNoSjFQV3crM29GVTFXR3R6YVZMUnJjSXp5ZEp1Wk1OdFRLbU1IUE1ubXB4UTRQbXBXVldmcVdNNVV3WmFaK1dyOXdNNTZYZDRmdGlocHo5ekYzVFZpOTFPUDk1cDI1UkxYY3JOQTcweXV1TXk4NTRvclZzbDcxdXp4YjhNYTNScGg2eFRQV2Y4OWUybGllNWZLSFhzS0tnVmJGYWhQdmhvMjZrTEQzT0VCaSt1ZGJmRjBsc3ZVMGNTZGx2MUUxMUM5MzVZM2wyUy81YnV5c0xTVU81V3M3Mm45RlhqUHBqdXl6anRnNWl2Q3grSUNHU210VTZybW1oVm1uTndKdUR0aGJ4bm83VFU4UWs0RFJuU3JkN3JuYnFUSjNuUHZoNFgrOTk1OXI0aVhQbTdiT3BXckcyRjdqcUNSTmRaWi81bU5JdDVTci8zM3VCQlJyQUNrZGJkYmMrMHdZK1JLNkhTZnJUS1d4VnVVV1VIV1BUZW5GS0tmQUZxeVBYZ0F2bUFZNFdMcU9BRE9pRUYwOWI5czJsSzhlUzhoYzJPdmloZG5MQ0lGUTloU1JGTDBGSERTMnByZnVXSHRBSnljTWRBZzNhR2ZiVFcvMVZmc0dFQmRYM0U3bGI4dkNqSDNuOTlZMFZkMGtNNVhOWUsxMEh1aDdTdEQ1Zlc4VHBMaURVdWhpL0hsdmRxanJieU9sVEV4Rkt3VTZxZjlXUy9kbDZVM0JRaGU4R0I0R0Q1L1p2T0pITnVwM3d3dkxkdFczMVpxTEpPcXM4UFo0bTJId1J3am5sVmd0WHFtZTFITnpMdDJzNFZacTZQZnlWWWZmN2tPWnhKRDY0eWhmMjVXd2F1djdPMnplaTlVTmF4S1YzeGxYcW5IR29pYUxWN0M5cTAvRENZRm1DN1czWE9LMEdQSzNMajNnbS9TbnNDdGk1cVlrZFU2RW00eDZpZmhKNGNNTjRSZDJMTzFqekIwTnBqMjlWQUZOK3ZVVFZiMHAzWXBpZXlCNFdUVkRjV0sxRHNVYWkxaVZ0MkY0bDdjcTU3Qjc5a3ArcmV2MS91S0tKSTkwbWZsL3Mvc0ZQUlRpcENqUUlUNnVoUzhtakh3TG94NSs3ZG1TYlAxM0lRSEZ2RENpWFRlS0hmUFVkOVRvbXd0UlhJNzNUVE90V3loZXAwRkxPOHBkd0ZwZ3VmMFBmQy9wV2ovN2tXeHhGRTc3VEM3NG9mcnZsMHNSVlZWenJpY2ExSm16Y05GZks5clc4M0p1VnVnRlM0c3Q0dnBwMks2blFFeS9RNnZQM2Y0d2xmNHdNOWcrRmpWR2xiNHhCYXYxbU9YT21DeWVoNWR1QTk2UEdQRlUvYnZja1dDdGJRK3dvZlpHaURIbzNONEpPdlZXdGJ4UDJFNHN4K3llMkM0SHo0UGRpVG1lRUJlYWRwWm1HQmJwMWJOQTBRdHNjWE1VRTJsVUJPdmJTMi84RlVkclFJczdlbmtVNzdYMjRSUHVnTUpKTDB5MmxJVlVDcUY2M0hXb0xlYWdmU2pNVjNjdHpOaS9WcEJmVW1QYlgxZFZnV2hRT2dXcWVWTVh6dFk2T1RxSFRTUTJheSs1OFY4Rlc4c2pxTEszWVhJa1dMbVBqejBZY0gzVTBGRlFDN0NtM1dHcDA4S0J0d1RlTzZjaHJWNG5XSWVycUxuMnZqcFhTWE0yOFd5UmRoN2lMbXZ2dVVPb0N6V2U1cGU2Uy9ZZnY5T3llSDdETUdiSy9YdWVmdDRuL2RRdW5UMjcyY29XMTcxQTV6TkJ4cmVnR2lPV3NuY2VTcHJ5cjlXaUYydVhtUDU3SGt2ejdqVFdiS3Bob0R1OFNzbGsxTGR5UjBQQVBBUitDNzlLUHhnZ3UzVTdzeGRyTE8xWlhhSEtxMnN6NExqMHBvTmxCUm1EZ0RvZThPVTFnbHlObDhPY3NLN1lCTldwR3VYWHVQaGttNzY2WVVQblF0dEF1a2FPVlpxWTB0TDZib290Rmh3MXFvMDNvNFU2QlVocjlTcmpRT3VRcVUxMTExK25wcm5ySXJxa1ZWWjU0bks4MmF0eXJXUE1QYk15cXljZEw1aWlucDJvNnBCS1IxZDUrUm5CNEh0eUFuWG1aem9RaXV0aFVOemtTVVZXdHg0L2IzRVVXdTlRMFY3YmMrWCtESUkwUURoY3BtbGRkelVETUVhSDY3V0YzcjlqSjY4L1RCd0Zqa3NMUVB3RmFpVGxuTDZHUmcvdHlwOUYzZEQyYXZnNVF4Y1VkVTgyOXBqMlVxb1M4aXExMnkzRjNSVytHaHZnRFhUTVpCbUszNmdLVW9mU3R4WGY1MkJHN0M3Rjk2c3Z3amYvL01jZmQvZFRGSWRYZXBzSk8vVjAzS3ZkV29ka1BIMnhxeDdJM1BOTDdUYzB1Y2ExU0htY0V2ZVVjOFpaNHJuckZhTWV1UytwNy85VlBqeGxlcy95NzdkL0JRdVdWQjdwVzZqQ2FSVERtMEM5S2JndVhVQTBHeXNvZi91UGM5NHNIc1dZY3FiOE8rY2NQb1pMU2QrS2pTME1OWE9QdkNscnRPdWJDS1RPV2I2bFJrK3BBQXZoYmVNcDZKL1htWC90c0xJRm03Vjl2QjdEMnk4aFJHQU9UUlZPbmZhTHJaNkUzcFRxU2J3QlMrMDd6UGMvbG9OVHVjZSs0clFQOGZLeGZkVzJKRDlJa0JURDRHR29yWXd0VEIxYzgxUWRGRzB1VTg1NDNQTlJ0Y3l0MndiNkxjQzV1NzFiZW1saXZkZ1ozS2R0bytrclF2ckFmaHZ3dnVlNWVpUjRRRjQ4QUpYWG5MTVEwMXZheVpaZW9OVHZCRnJwSEJoOVR5UXMzZGxsZUxzaHlDRktrTTRZNlE0dFNOalVXYlFocENyVlh0N2hvak4yak1UZEtGQUdpajFGVXV5bEY0bHVtbVdPTnd6QUxYQXRMQUVlYS9oYzErQkZ1Yk9teEFyNkxST25XWVdwYW1leXlLVXpSaW1qaVpueXQ0RXV3YTI5WGVMNTdMT3ZkdUtIZXpOTkRkdzU2aFZKWmpCNjVqdkhHMCs3Vy8wRmxjK3BzL0FNKytDdjE0ZjFCT1d1ZFhLSjlhVmZtY085MDlhNG1STlJlYm1NNnk1V2JQeWdXcWh4elVXSFRYTzIxZi9yNjl2MW9jSmI5OVRDeEZ4dTNueklCbG45bXFGM3ZFR3RYUmVic2ZLMzgwZHFMUTlsMXV6Q1VrbC9GZ0FNamZ2UG9PdjZOd21NRnN5b1pidTRleHl2YmJsYnh3L2xWblVCVkVMcXJjRkY4UldzbXhkNW5HcVFXME95N2VPSE1vdGE3aWY2VTNYNFpvQy9qNzRhMDl6NDhOVzVra2owa2Z2akZtamZPZDRnZHh5VW1mTzlkSE9USTc4MTlvRnpYdXhkYTRYeVh3bGlEVXp0N2pSZFhyb2V6RStjRWVpbk9pdDY5aWRyZjVldnVkUW1obG5Dc0gzbVlCM1F1ampPamh6OWc3a2hmQ3RTL2Y2Q2tHRUNZLzNNR2tOYzg0dUNLNCtJYTdOOGpWRjgyYnA5Zlo2RFl4WkYyeFVrVVFqZ1BZOVJwU0NjK2NqRWpzU1J6eko3cWZhYU5oSDRaRURqdTdWemxYVXhuRFhvcVVwTEV5YktCTnpMYmVFcHBZVUpIZmtiNG8zYWd5QnFhVmQ1aklxbFJxTWtlYis5MUcvUlVtNmJ2blRWZmVQTTN2bi9yVnYvNjRrMGw2S3R0ZWdvUjAzVU12ZGRONmd0OGFxVkhUMHJHc1J0R2hSY0RjNnowQzdidDZ5bkwydzBqelhNbVNPV3F4N1hhN2szTmlnQlk4VXVuZWZyVjFDUy9sNWlsYmZ4UXQ4bkd2ZjNRUGE3Y2ZneHk5eUc4Z3JMNUF0UjV3dVNaL3VVUnFPTVVVT0tudHVjNDUwcEg0NDFHSTJ3TmhGZnB0MXVSQnpaM1c1cy9kbFFZdDF1Yk0zejJPZEI4bldvWHRkWEt1ZEluVjdBTHA0SFBhOERqWGVWNEhIKzUxdDhVQzFjRk81Zk1PWWJmRTRMZFJFYWpnMzRSU0JUdzA0MjBxeE5HcUNxNFk2aXhSUHJYM3UzR2NFRFJ6T1p4VE1kL0g4RTAvREQvY0tjUEp6WFBuT2oxT1d3NXhyaVVyVm5qaytKRTBMYzR0ZmhsdG1GMjUvSmhmQlY4S25qK0htRWROcFlsbUVHYmVwcmNpaTNKb25yRXQ2K2tCZ0srVlpudGs2b21nUmxuVUtWTjIvc1ViMWZmSm9WTUVGbXJkRmFRcmxhM3NaUkJHb2E4VU1SUWwyRGFRdGVVVVZYT3FDVGIxdXRUWlFZZmtjMzZWT1lzM3lxeHlLOEMzeWZHT1hxamUzMk1OZVdjT1o2MHdmdWM2VnEvUVZvUHZoVlhkeGcxdGM5QzJ6MUxwQXErSnAwYUljTHp5UVk0akVBbGthdXpwVXBrYXlrbThLR3FGQ1luMmt0WDA2WlU2d0NHc1h3Nmk1dHFXcUJ4RmtyUnUyY0E5bHpXby9SMXoza25nMzBiT01mM0JHSlhEZHYxaHI4bzFtYXROSlM2WlRheDZWRjVCdzAxalBBWVFTYXVlcHpObzJrWHhHMlNvMzRWZ0Rra3M2dDNpc3JGN0NoM21NNy90ZW1wNHh5NkVRR1R5WHdkM1dVNVRaUlFyNFVYYmZkNnBsNE1maHJ6NENIL05HQ08xWWx0dFhWTDdVMzlxS0ZGMTB1YVlpc3htN2hqNXRSWHJrTGtjMXM5QlhYeEJ4UmVWbUhZanNtUU1MaXJoY2xFcDIySXBucS9HeHQrU0taOVlDYTk1RWErRm15U2ptbm83dHc1SjZxYkZiT2F4cFRVMWJ5MHFhNTFqQjEzbzlsdHJoM0hrRTY5NXZ0V2JYZVVIejFmMWpaTTN0c3k4RlBDdUZQY3RSNEN2ZXVlVC9HYmpORTF6N2g3UVIwdmk2Rys2L3pHTXZPZUFDeHh5Mm1GR1dFUmMrSU9sQVppNjdlMGtGbW9XZ1VwdGRLNUNxZ0JhTmRWRWVkaTl0U3JXdWw2eFJibm1jbzZIdHVmVWpMQ09raFlPSzM3djlrUXVNbEtVRldydm1TMTJPV2xuUWVsaTZMZzJlT2FqdnRDcklkQ1JTQUQ3cm11SVdwVnVFN3l2eXpGYmhDZllWdzVvZ3EyRk5qVVhNWlNBNDA5SnBhNHlzcjRpNm5ESkpaL0tVOXpzZkd6K1ptWGljS3o5MnFyUHFPbHo5SHZqRHQ5Z3hjK1N3QzlZNG8yUlNXT3NTVHpNbkVaZDZPNjVXdjROMmYrN0FXN1dXR1F2cldhSjFUUk9yOWRmLzV2Nis5anhCbExpdmlqSklYQXlySHNBYVVLdkFyTDJIaUxOTDhXcEpIWGVkUlJlUFV5N28xRDIyNG9oWlEvZ1ZJNFFnOThucDNLemE5eGk4OWMrTGQ2MVZWenZGOXVYQVZ4WHM1ZUJsc25uSEVsWldaa2RtUnk3dS8wZWlBM0RsQVJ6Z1dYam4wNXk4NzJHbU4xcjhTUms0R2pBT0dKbGl3clIvc3ptbWdwY1VVRU1sYXR5ZWdSRkYxUmhpOWs4REYxUjhVQmJUU1hlaEpEeUx0YjdET2xzemQxTWNzcHExNzVkTGxVVzFlVVZoZVRmMzFEZGdyUGNFN0ZjT0ZyVGQzUk5NNEtTQitsZXJZN3ZZM1JrR0habmpLNE9oV1g4MXAxVW5ZZmJBN3RiZFAzZXNnWWRpRlFoT0tFWUp2MVBrLzVuSHVmM1BmNG1UdjN4V3N5Z0F0K0ZFdUhiOEVoNzQ2b0dESVpGd3R1VzhIOHFSYXltV0habHJXd3k3ZFBmMWE5NjB0VjVJd0xSNmFrWUZkYWtiRkxGdU1HUnAyVmdQanZTdDJuM1AzMzROUlZibDRKb1VlWHVYODE0SGtIWCswTVhqMElZb1I3dXYrUGlXdzR1emsrSlpKZ2YzWHRDK0Y1dXIyTHdqaVNPY3VEVWZ1WGpTOG9yWjUxWnpMVmdnNHg2K1VTZE1jbGxCeTFST0VMRVo5Mm5KM01JUHd6SEtDWTl4ODNzL3dQUGZCYmVPVG1HQSt2VXgrUDZMN0E1MkhBSGJRSTZwSFFKVnlKdU1NSmZGVVZZV3Y0eGRIWS9XSWluZEVHVU95N1dZSHJhMkF5QTFlc2VhN3NlQmNrMlZjaHNXRFl5aFpVWkFBaHQ0TEswVTI3ZGpDV3U5ODlhUHhhSDR1alhNZkZWKzdRSGhiS2RkUEtzODNqb3c1MTJlNzgybFQ3WVFicWZWTVVmS2w1bUNGQ291ZjAyMlF3Yk5VZmZQSkswZ2RpSXpCVGFiMlRFZkg3UDdNRng1dHBmM0tRVVlJRDNQdGNmT2MvN3lDU2ZBNFlJRmJDcEpuNWExc1VVWjV0YmkyZEI5Rkk0V1lPanhpTnk0eGpvWW9SaHoyMEM0K0EwUFZ5OWRZM3BxbGE1U0I3ZlZ0cUpTOWRLOUZTeExlN3kzN3FXeWxUbThVZGVsUExlZWVUL1ZWbG9iTjJlelBaWndHV0hOS3o2eEYzNWV0WWpTZ1RoYlpRUVY2Y2ZqTFRLR3NqaXA0REFOUmJCYWpvOU1LOWVjdnpSNzVJNzhTWnp3RExjL2ZJMXJIenF6bTZqL3VnblhqN2wxN3VVODhCWE94a2RHOFZqOVhuWUZsNVh4Nm1NYjJGejIrQ3liQStySXM4WW9tWFpyMnFScndNcGRKdDlHbkR5Q1FJeENyMWEzN2swZit5bCtqMVVIYmpsenFldWZjU2Q3WjR0U1R0N0lmWTFmYWcvRll0Y3podmtheVhmckkvYXN2dHcrcjNxY2dnNVRDN2R2Syt3Lzk5VUhMNTA4V2VJc1dnejN1YVI5Wm1FeUdmTUM4SHpJekRhUjlJUnNCZWtYNnVrWVpVSTU0bWU0OW0yL3pDOS85eGtHZi9yckdmZzd0N254bjF4a2ZNZzRLSzZmQ1JnWXJaNXpObmNFelJ5QVM3dG1jRU90MUF2NnFjQWwvdWR1YkVxaVRTRWhabUdKNWRncGlmS3htS3dXTUV3Qkh2Y1hMcVc5OVErN1ZVdDQyVlEyNzQrY2RiM21zL2U5aXI3WDA3am1CVGpWWmVoZEdwZFBVZVpnSVVEZlEvd09HbHkvQlJFZG9YWUs5Y2hZUS8zV3RkcGtMZFlQRTlrcVFLdzRJQWNHdU0xVG5QelFIZnNKOTc5dXdQVmpyajM5R2g3NCtySWFmZ3doRGJINW81OHdTeDNVMDFPYlBKYk5Ya3V3bGM0VHlHcUxlTEh5T2pTYVk1dm1YTUdqZXB3bzFnOXhsTUhOM21KWDgzL3E3WkJRdkc4NENZQVhoRkdXS0ZuN3VuNndsSzRXd2ZzZW83ZHUrYlFWOHU4emdLbHJnN0VWMlpOeGNkUnloNElxaWwrSzJabXBwSHNld2svRjJyUE1JQlA0akhMTXpBUWNBN2VaT1RxNXlyVmYrQVVlL1IvT2t2VWRENDQwZUhiZ0JqTWpjTUNJa2psc1RTS0ZBSjVJSkZ3MUtvYkYrcWR1Q3FXR2lHcmxVYjlib1h6MkJqNW1VbUNHZWxKdUdVZWJUY1BQRk05UVR5OXk2d2ZKeWw2K3RsdW9uZzJnWldyUzNidEZGYlE5dm1iZURiRHN0NGI3cWVHTWZpS2hCM3E5eFplWWJFMTh1dUlCcld2U3RITHdKSE8wYytVVlcxanBYY1V4Syt3ZW1zbFJpa2Nuc0Rua1VkWkRuckJqUytZcHBwOTREeWZmZWljNTMwa0I1QmZoZTEvSFl6LzZXVno0MGkwekoreUFvM0RmaFErd21FaExzVVF5YTV3ZmFnVE1xd25nM0cwZXFGYWZUMDI5OWpNc002bmgvdFFQbUZpTnVzdnlodVVjQVF1RjBMMTFqclNqMm5YVk5OcVhvRTlQQXl4MWRrNjF3eFdGV1lwT3Fjdi8xM24vSXNpNVorMVdoYUZRQmczTDE5TE0wWEorblVQQWM1QkRVMm4yMEJsc0luVTFnQlN5T2hmSTVRcTNmK0NFeHo3T0oyb3B2OVBYRHA1NERmS056bDFqVURrNFExaW9SeWlJZ3lUaUdOWjY4ZXZwSVg3cVBOL2F0dFhuL0gyeFp0My9HNTQ3dXNhOGhYelJPSEt6NjBxMHZZamJZM1QyNWdMNi83U3ZEU2hrNzdzTDEvUElGbU5xNjRwaFhsVXFseTZmY284MG02OWdMMnFkbXNFTDZqZkpaSnRSei9IOGVhbXZ1aTExVThtNFRPVjhJcDlhYnhRYzQ0M3hPK0tZbTF6Z091L2t2Vjk1QXJjK1ZROEF3SWZoaDU3a3lvOCt4RU5mdldIRVNGS0tSRDBRVkNabXhsUVBlcHphb3NmY1dQLzFWbzJ5UkhKdVlXTGQ3cnplOTZHcjNyZmE0eGRnVDh0R3JOVHQ3L0JUeTUxekc0eVUxYWFRRWw1eTh5Ujl3OGorWE9BYUZKNXVCTGZ1TVhtdlJXdEo5WEpUMGNYdHo1cmI3OFc2Yyt2THpOUlFNQVhveXlYV3E3R3pYV01EYTFLZG1aalpjWTRkMTVtdi9EVFRKenc2L2dVVkFPQkg0VnYrQkRjK01yVnpCRGZVYmFJcHNuMWxYaFlBSkFHZjJzcUt4QTVqMHpqQ2ZzRmpxVmp0TjBUUFRWeTV6Yk5WWmVnUGhxNXpTamtRUlQrQ3VnYWg1Vm1YSHFLMHQ0ckZ1MUZ6czRYWHRGVjN6UnJ0Uy9nRGFZSzNQZWJQTzdKbXFYYlFnSjFCTDN4bWt1WElIcnJKUmMwTHRhc0YyZWRwWGhWM0N0SS9pWGF2WXpJbmZKemI3M3FNcC83UEY1SnZlb0g3NVNaY3kxd2JMck45bTNGWHErVG5odmJyYVdHRnpaT0EzTW5MSHYzQnk1SkpqY01Ta2lwSlluWmZTcFZPUmJyemVEblZ4YnN1bC9ocTVyZGZ3YktzYVBPOW5TVnJFdGxYR04yQ2RpcU5wTDVDL09zVWJzMzhyY21mWlZoa1FmaHplNFVBYlJJNWZ0QzZOUzEwcjY1OUpudHg5WE1saG1VR0wyc25US2R5R29qdmd1RFpRVmg5ZVNkSEtFZHN1TVc3dVBHT0svenlMOXhoeXYyVFZnQUErUlg0MFdPdTNiekVBMjhUeG9GdWsxaU5vazBGa2pJSWlKU2pUbHlYYlJYMUZBMnRCeW5IYWR2dHFOVzZYazBrMHJhenAvT3RkUll1N2VHWjlhYXhLa2c3bzVtMDIxWFcxQ1d2V3o2N1lzMCtzUE5WaWRkVzZtU045Y3VyRkxGMGo1WjZRVVh0VHZhbFdjTWttdEk4MGorZE1jL2dFNmFaV1Nhd0NmY1paZGRHVERLN3dBQzNtZGtCdDh5NStmeVA4WXZmK2tMQy8yUVZBTUJ2d29jdXNmM2krOUZYbEMxelpYL3dHUHZGQzhWUzFyOXJFc1FUS25HU1lKekdYYmNKdFhOMFdkYkMxQU1mUGM3cExhZDFld2NJZTZqWXA0aSsydGpoSGFyM2Jyd3I3MW0rZFVXWi9SbWkzdHB6cU51Nk1XWHQwcGQyc054d2dIZVViejg3QkRPSWszM3Uvbkl1Wld6THBmN3ZjeFI5U2dFY244STdUTUh5QlEvQU1YQ0N4NzhISFBNbzE5LzVVenovKzI5eTdibFBSckNmckFKd0FyZU5hMCsra2J2ZmtWRjNWRHcyZ3d6UjgydXE1VmlVT0NIRUpiWi9yczdLV2ZZUHI4c2Z2azdkM1BjZzEvcDNXWWxlOW43M0dBMWZSSnhPVFE0dFljTFB0UEsrUld0UkdGbUJ1aVVMeUwxU3FhM2RmVS80WU1YTkI2RmprUTBVQnJRTWN1UTJWanMzWWM4eWcreHduMGxNT01kaCtUdVVFNHdUUDhlUmZJQnIvLzFIZVBSSE9IdWQ0YWV2QUFCWDRmR1I0WUZYc1BtQ21jR1ZNWTQwR0tKNXRpejlGU3VuYVV1Y0M2QmQydWZkYW5VTFNtaC9mSHd0SGptanA5ZFgwOFMrRi9QbmxiVXV3eE8rdHpMaXRPWFgvanNyektCM0hIN1hzZU1kNVR2dk5jSUl1WFAza1ExVS9sOE5sMkxoNW5sVjlyVUc2bWJRT1dML0xyTDd1YVIrTnFHUjZzRXVMUDhJT01LNUplL24rZi92UFZ6OWMzQnI5OG5LOUZOU0FDQS94cTEzdmhyNWd4Y1lIbktHTmtyYTFqNTVhZXhVWDlhZ0RiNHUzRXdxVVpDVDFkaFhQMUpsUVJiWFZVL3JSUzk3NDlncnhkbnZEdlRPNVpmZnRMbG1WczJjclh1eG5SVnZxNTc5bmd5bTczUlNDMlhwMzcyMUdZc0M3TXBqdk5YNGM1ZkM1UzVzekppVXRNOGxrM1VpaC9DSlZUNGwzNjkwYnhuMHVNbk5SMytJOS80MnVEVjlLZ0w5VkJXQTBqbDA2eWMvbjN2L2xPR01iSUxyS3c1K2l1eWdjdnE0Rm9iTEpRN3lsdUxZWWx0MmxvWGZXWTEvcTBTN2w3VGRQWGFxSk9PZGI3RXpoajk5cjNhM251V1RWZGwyRGZEV28ycDlLdWZkb0ZhMFlsbG12VHQ4YnN6Y3d2M1BMUVJvL0R4SHUxMXVQZnlSNy91TVMySDVYREpxRmVpZEFEdG1Ua2pjd2lQdCt6bXUvYzMzOCt5ZnU4RzFKejVWV1g1YUNuQWRucnJBMVpjTGQ3L29ZZlN1NXdOMkhRVG5MNUYzSzBKTzVYQkVuelB2S0FBQUM4QkpSRUZVRTIvYktoUXBWVEV2eDZVSVZUbG81ZGx5d0dicHpoRXB3TEd2bXN1ZWhkT05wL2ZPWFU1dDIxbW5jdXY2dmU4MWR2V3BYS25ZbFJnZDh3dWVrWGlQWlNWYTZUV2FHdGxUQ0oyNStaZmNqbk1vSEg0QmV3VFlLMjMwVTFFdXFXRHdoTVRFamwyNC93TDZpc25kWnNjTmZwd2IzL3dNai83Y3B5UExUMHNCQVA4UWZJOHpQUGN5K0gzSHFBK29HSW1UTGpVMHl2NTY4M0l5cHNXaEdSNm5ZeFlCRi9wTlBWeEJyRkZmZHRPWGJFRDNCc0d0MFREV0JKM2JZZTVuMlgrejJWTjBjRDZsQU42d2ZGL3B5Mks0UkVvbkphNkxCR2NYOHcwV1NsSjRnTG5MQnVid0pITno5eFhwNS9hNHFiU0F5d3hXYWQwcG1qcFBRbm1PbU5teDRZaERyazlicm4zb24vT0J2L0JweXZIVFZnQUFybkRyUFE4ei9NNTcyTHpHR0RoQktIWEJZZVd3ZFRsTUpnUWFQWFJTdVFFL3RXQlJ6empIeS9lb1lWZER4SU1odHE3N3NHK1hYRWJLK0FTNXZuZkZtNzZsZTdGMkN3VU5WeDg1dlh2MDVhbGhNaVBtamJiMUNCSHVjL01nRFFScTRmU0xCNWpJT3FNU2dJOEo5d3IwSmp5RVQ3ajlrU01mdUNVL3pjM3YrWWRjL1Qxd0svKzZLQURBYzl6NkZ4OUhIbjg5dzFkS2VJR3FCSldtc1loOFdaMGM5ZnkyWGM1dGxkUlpQeDYxdDZ1bjNSZGRPNWlWdzVhOEhzM2IvL1Z5emxqdkIzU3ZjWE85MzJNaGJySjZLOHE0ZUx6UDhBU3BzbnA1cVFkNkxoNGhYUDFjODN2UGJUeEdLckdUTWxsQzRCNkVqazZRSnZBZDJhWVErQWx6cEhrVjdjK2NNSEJMSHVQNWYvb1lULzNWNTdueTZMK0svSVRQekZmNlJpNjkrOFU4OUhubnVNaE56bE0yMG0vSUhKRFlvb3h4VE1FR3RCNUNQWkpzaUtHd09MRk1sU1JERkphR09IbHNvRDlsVkx0VFM1UDJlL0hqYk9QdXJLQzBLakxyM3FpWXJIMk1TaHVGcjB1a1lkbXFSWFFMMTNHMmZxMWU3aktEb3FUV1NycjlLdXFzVmx4OGpPQVczRkFxZ1lTN1Q2Mmo5emhxQXNkUml0K2gzUElmNXZuZi84czg5VTY0TXYrckN1NHpwUUFBdklwTHYrLzM4dEEvMm5IUjcrYTgzR0JENGhBNENJRWZoQklNMFUyMFpUbk5xblFYcFJTYmJITnFBaytrVHZnSlZpZVlMa2ZTRW1jVjFZTXIwbDZMZVQ4VHNOK0kwTy9YcTN0OWFoRnEyaHRuWXpYWTZkMEt0bVd2WjV2eTBSeTFleU5iclFsa3lLRUFHb1VkTzJuOS9xbkYvaE1TeDhINUgzR2JXL1kwejcvMysvbjV0MzZtWkpZK2t3cndITGMrL0RMT2ZjbUw4RmRDNWlqR3ZuTFhwaTFkQ2FadXN5cVpRRlQ4eE9OUTVXNi9tQVplYUxIZTExVi82ZnAydW5sNURZdFR6ZkU2MXZFQUhhNlFvSlRjZ3FFTElzZTlDQ3MyUWRqLzM5N1ovTlo1VkdIOE56UDN2dmIxUjJ3M2pXKytTRksxZktvbFNCUVFWRWlJaWlKVXNhakVDaUd4NmFKSXNFTUN0V3paRkpVbFFrWEFQMUFxRnBSRjFFUkZvQ0kxcWdScTFDWTRiVTJpTkhFK0hDZTI3NzN2eDh5d21EUHp6blZhZ1ZRU080TFoySW12NC9pZTg1NDU1em5QZVk3MDdyV09TYUROTUVDYm1zdHBmTVBJSEpJS1dMNVdEdXNDZFN0VUJJSE81VjJKbDIxL1dtcDdUNG1ocEtKaXhJWlhETlZKYnZ6d1ZkYWZoRFczSXgwQWNEVnI1eXJVUFlaaWR3OC9WZEwxV2t6VWpHMFNhMW01U29kdEpDaFIzWkJzVy9rZ3RHQk1IRUoxWThNYjNvUFNiaXlwdzJjSW9FenZPaVhBczVmQlNoVll0MHJBRzZka2hoOFhqS1RhVEQ1K2pFUHEzbnNhWmZHcGIrOVJRc01PeWFLUU9MUVB2WHZWeUw4bmQ3MjNlRjJCZFArTXE2V2VEOENPRlpnM1lQd2xuZ0dhZFhXVzFXTkxYSHUyNU1MMS82YkJGTGZuRklEK0FROE5IVlBBTERDQlpSSkxJU0cvSXg4bk1SZ01YZEJkMlhmWG9TT2hQc3doZE5CR1NVNFE3MzNDYTYyc2I0Kzd6bDJtSGE0VkhWbDNaMi94ZHAxMENaT0dma1lwaU9TVlZtSkZRbitjejg4RkhXT1lUMElZVm5oOVhrSi9IUVkyc0ZoVlkzeURjVTJHQXRiaUFJMDRRUUI0NXRua0JzT0xmMkx0bWJPYytlM3RNSlM1VFE1Z0E3MWN2VGFBbS92UkR6ZFMzQVdldWtwVHdXT05taFNpMjBJc0NVbTZJTDNpZmR2SEM3UW9IN0p4YVUvcGpnUGxBc0tJUS90UU5jVDZYZWV5eno1ayswYkppSlpFSHU5dGV2b1RvcWZEejhIYnJCVmtRL25tV2k2ZjFRSG9hWHdUcmg0WHJnSGRxV2w4RGE1Qys0WkdxRnlOaEh1bzZUS2tZY0FNUXp4RE5yakpLZFpmUFBVaDZ2enRjZ0FBZDUzTkpjKzFTN3VaZVhRYWYwKzRSWTNTQWhPMW1YTWNFTGZpSENHY2FoOE1GMmYwbEk3YnBLTHh5WHFLS3R6TFdLeVA3dVZRM3FmNzNPbHd0NGN5MHVOOWFNMTYxVWlkVHpDdy9CeXJBNDRmc3ZVNlhRV0owYXREZUk4aDNucGg4RkNMVTJZbG5xM1F2aFlZcUV3U2tiR3pweG5SbzhSVGVjZW1XbVhqN011c2ZuV0p0My85bi9UMWQ5b1ZjTXQ1bkNNdjcyZjIwWUk1S2pwVVRJZXdUMEZCZ1pXOWhVWXFBeU1MRGdOdnNKdXkvbEJDQ3RIZkdpa0pUU29GZGFadWJES3VzWUcwVUlsc2xEV0tTN21zUUxSamZjbUEwR3RhemFNNE0xaHBKNHpjZGdRTVlmcUVLNENzcEhNcDNBZjZkcVIxdFEwZFM0bWg0VTF1L1BLZlhQN1pSVmJldWQxMk1YZktBWlpZKzkwbTZsMkhNOVA0Qjdwb0ZlZndDeEdmc2x1VlFNYmFPQUxZZWdGZ2ZOcTRtNzR1RzNaVFh6N1U5cmJ0eXl1TGRuRUJRY3ZRU1lpZGFnU3BhNmQwbzJKYW94dFpWK1lFdVJNa1Q2b0JMek41cUdEa3dOeXRKTlEzOHB2R2psNW82eHBHYUlieStTYVhLUC84ZDFhL2Q0bHJ2N2pFeXRVN1laYzdGZ0V5aHp2OFhZNjgzbU4yUHZCWGV5d3d3WWdDUTRHVmFCQ0JJWk93Z2dnRVJSQkp5NHhDclA4N012Z3B6V212WmVsa29DSHJkaWN0T0pWdDBHcVRGcXRiWVdhZFVUckRwc3dXRUxKUjFOZzBZRE1kUHUwb1hNTXc2d2pHWVEwck1sRU5OYk5ZaGd6cFVUSEUwbU9kOXhpODlnYnJUNTlqK2ZpZE5NaWRkb0IwRHNGakQvRHhwL1l3L2NnQ1U0dGhiVzI0Rm9JVEJJQW9Pa0w0dkYyRmJyTzl1UEZyWm14Um02YnpQZ3RtOGlyQWJCV2dJc3BOdVVRc2lhcm9HRkgwdHMwWUVCUU1uSXM3UldHTnFLL1VKTVBIYWQycGdPLzdBU04vaUlGK2hkV2ZubVQ1Sjl0aEI3TmREbkFEem8rNDlqZUw2K3luODBXZnlDR05HS2FXdnA0VkROOXVvVzRnZUhsay9JWDdONFIxbTlRR1hNYlRiekU3bXhHNzRqcnIyTUJwOENuNWF4Skp3M3FIVjVWVUJyVWdkblhXenc5UGVVT05vVXo5KzRaYVJsa0hRTVVFUXpTYndIQjBpZFVUcjNEbHNkTmNlSEc3SHNadGl3QmJ6MUdPL1BnQXM0L3ZaZXJ6QmQwQ0ppVUs5R2dYbmJXd3NkMlNIQlpicU9wbWJKZFk1dXRwU2tXalRiWlNOODJOT1lHUzh3MTc3Uk51eC9nRnNkVXJmSDJKR3lhYnoyK29NRGl2S0ZYQkNFUE5HZGFPdlUzNTNBV1dqMlgvU2Y4LzdRQzdZSEVPRG4rV0k3ODZ3T3hSVFJmSEZKVUFSY2kxRUxRRUN3bkQzWlFmR0JsVWFhOEVrNzJ2NWxidy93T096cVF1N0JaMTdqaDZiVktEeUdZS2FiR2NyV2lIUGl2bUtMbE13eXlEbGI5Uy8yaVQ5ZlBuV0Q2eFU5NzNIZU1BVzV5aGY0RCsxNCt5K0l5aWUzaU9xUWtyeVovQlVNbDBrc2tpZzAybFlEQjhmRVUwcTVVLzVmZTlTZUpSanE2WVBnaFd1a3lHdmM2eExhSUVuaDNyQmdhakQ2Z1owdmg5V0FVak5vQ0t3WHRuMkh5aG9uenVMWmJQYmZjVGYxYzRRRHdmZzI5TjAvL0lCTDM3RnBoOWFCL2RyeFIwc2ZRRVdrWndCRkowaU03UUNxUHJNVlNBTFJUVHZEa2NBMzVVNzR3R3RrbmtJbkJ6aWhUdVEzM2ZnRmVVd2hvWXFZcjY1QjRHRHg1bi9lbXJESDkvbFpWenR4UE0rVENuczVNZDRCL3dBcXl3Q3hiNjhLVkorb3Q5NWo5bEdBQlQ4cW9lTnYwYUppbWFtV1F5YUdjWjIyeWdralhxVmZaM3Nad3oyWGUxMlVERkZJR1dZUWdTV21DWm9RR0dhcFg2NGd6cyt3dWIzMW1tL0FNczM5aEpUL3BkR1FFKzRFd2NnaS92cGYvRUVlYS9zWWZpdm9xdWxJL2gvcCtrSTdRMHhGekk5UkZyZ3hZZGJKLzZ0b3ZWaHZlR0Vud0hsS1ZrR2hoSmtqY0JuR2J3eDdQd214N1YvYWM0OHl5d0c3aDJONzJaZDZNRGJNMFg3dDFELzJzSDRZbFAwUHZtTzB5OFdsTmNYNlQ3bVRrNFZORHRhcEc0YkpJeE94VEFCakFqVWFBQzVvbkU2MkQ4Q3RoRnpadlVMMDNENXo1SnZYZ0NmcjVBZGYrN2xNOHZNVHdPSytYN3ZLZisvdzZ3ZldkK0gvMERNL0RSQ1hvUDNvVFhGK0hUQjVuNDloVTREVnoyRkxONzRRc2FSdWZoWkEvMjdJV0hTMWg3aStyNUJZcEhGcWdPdmdIZm42UThzTVR5Uy9mUzc4T0t2d3BYN2lZRC83dnpMNTFHVk1pYlRScXNBQUFBQUVsRlRrU3VRbUNDXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFRIUkVFOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBOT0RFX1BBUlRJQ0xFX0lNQUdFLCBzd2NQYXJzZXIgfSBmcm9tIFwiLi92aWV3ZXIvdXRpbFwiO1xuXG5leHBvcnQgeyBzd2NQYXJzZXIgfTtcblxuY29uc3QgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XG5yZXF1aXJlKFwidGhyZWUtb2JqLWxvYWRlclwiKShUSFJFRSk7XG5jb25zdCBTdGF0cyA9IHJlcXVpcmUoJ3N0YXRzLmpzJyk7XG5cbmNvbnN0IE9yYml0VW5saW1pdGVkQ29udHJvbHMgPSByZXF1aXJlKFwiQGphbmVsaWEvdGhyZWUtb3JiaXQtdW5saW1pdGVkLWNvbnRyb2xzXCIpLmRlZmF1bHQ7XG5cbmNvbnN0IERFRkFVTFRfUE9JTlRfVEhSRVNIT0xEID0gNTA7XG5cbmNvbnN0IHZlcnRleFNoYWRlciA9IFtcbiAgXCJ1bmlmb3JtIGZsb2F0IHBhcnRpY2xlU2NhbGU7XCIsXG4gIFwiYXR0cmlidXRlIGZsb2F0IHJhZGl1cztcIixcbiAgXCJhdHRyaWJ1dGUgdmVjMyB0eXBlQ29sb3I7XCIsXG4gIFwidmFyeWluZyB2ZWMzIHZDb2xvcjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzQgbXZQb3NpdGlvbjtcIixcbiAgXCJ2YXJ5aW5nIGZsb2F0IHZSYWRpdXM7XCIsXG4gIFwidm9pZCBtYWluKCkgXCIsXG4gIFwie1wiLFxuICBcInZDb2xvciA9IHZlYzModHlwZUNvbG9yKTsgLy8gc2V0IFJHQiBjb2xvciBhc3NvY2lhdGVkIHRvIHZlcnRleDsgdXNlIGxhdGVyIGluIGZyYWdtZW50IHNoYWRlci5cIixcbiAgXCJtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcIixcblxuICBcIi8vIGdsX1BvaW50U2l6ZSA9IHNpemU7XCIsXG4gIFwiZ2xfUG9pbnRTaXplID0gcmFkaXVzICogKChwYXJ0aWNsZVNjYWxlKjIuMCkgLyBsZW5ndGgobXZQb3NpdGlvbi56KSk7XCIsXG4gIFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcIixcbiAgXCJ2UmFkaXVzID0gcmFkaXVzO1wiLFxuICBcIn1cIlxuXS5qb2luKFwiXFxuXCIpO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlciA9IFtcbiAgXCJ1bmlmb3JtIHNhbXBsZXIyRCBzcGhlcmVUZXh0dXJlOyAvLyBJbXBvc3RlciBpbWFnZSBvZiBzcGhlcmVcIixcbiAgXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcIixcbiAgXCJ2YXJ5aW5nIHZlYzMgdkNvbG9yOyAvLyBjb2xvcnMgYXNzb2NpYXRlZCB0byB2ZXJ0aWNlczsgYXNzaWduZWQgYnkgdmVydGV4IHNoYWRlclwiLFxuICBcInZhcnlpbmcgdmVjNCBtdlBvc2l0aW9uO1wiLFxuICBcInZhcnlpbmcgZmxvYXQgdlJhZGl1cztcIixcbiAgXCJ2b2lkIG1haW4oKSBcIixcbiAgXCJ7XCIsXG4gIFwiLy8gd2hhdCBwYXJ0IG9mIHRoZSBzcGhlcmUgaW1hZ2U/XCIsXG4gIFwidmVjMiB1diA9IHZlYzIoZ2xfUG9pbnRDb29yZC54LCAxLjAgLSBnbF9Qb2ludENvb3JkLnkpO1wiLFxuICBcInZlYzQgc3BoZXJlQ29sb3JzID0gdGV4dHVyZTJEKHNwaGVyZVRleHR1cmUsIHV2KTtcIixcbiAgXCIvLyBhdm9pZCBmdXJ0aGVyIGNvbXB1dGF0aW9uIGF0IGludmlzaWJsZSBjb3JuZXJzXCIsXG4gIFwiaWYgKHNwaGVyZUNvbG9ycy5hIDwgMC4zKSBkaXNjYXJkO1wiLFxuXG4gIFwiLy8gY2FsY3VsYXRlcyBhIGNvbG9yIGZvciB0aGUgcGFydGljbGVcIixcbiAgXCIvLyBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvciwgMS4wKTtcIixcbiAgXCIvLyBzZXRzIGEgd2hpdGUgcGFydGljbGUgdGV4dHVyZSB0byBkZXNpcmVkIGNvbG9yXCIsXG4gIFwiLy8gZ2xfRnJhZ0NvbG9yID0gc3FydChnbF9GcmFnQ29sb3IgKiB0ZXh0dXJlMkQoc3BoZXJlVGV4dHVyZSwgdXYpKSArIHZlYzQoMC4xLCAwLjEsIDAuMSwgMC4wKTtcIixcbiAgXCIvLyByZWQgY2hhbm5lbCBjb250YWlucyBjb2xvcml6YWJsZSBzcGhlcmUgaW1hZ2VcIixcbiAgXCJ2ZWMzIGJhc2VDb2xvciA9IHZDb2xvciAqIHNwaGVyZUNvbG9ycy5yO1wiLFxuICBcIi8vIGdyZWVuIGNoYW5uZWwgY29udGFpbnMgKHdoaXRlPykgc3BlY3VsYXIgaGlnaGxpZ2h0XCIsXG4gIFwidmVjMyBoaWdobGlnaHRDb2xvciA9IGJhc2VDb2xvciArIHNwaGVyZUNvbG9ycy5nZ2c7XCIsXG4gIFwiZ2xfRnJhZ0NvbG9yID0gdmVjNChoaWdobGlnaHRDb2xvciwgc3BoZXJlQ29sb3JzLmEpO1wiLFxuICBcIi8vIFRPRE8gYmx1ZSBjaGFubmVsIGNvbnRhaW5zIGRlcHRoIG9mZnNldCwgYnV0IHdlIGNhbm5vdCB1c2UgZ2xfRnJhZ0RlcHRoIGluIHdlYmdsP1wiLFxuICBcIiNpZmRlZiBHTF9FWFRfZnJhZ19kZXB0aFwiLFxuICBcImZsb2F0IGZhciA9IGdsX0RlcHRoUmFuZ2UuZmFyOyBmbG9hdCBuZWFyID0gZ2xfRGVwdGhSYW5nZS5uZWFyO1wiLFxuICBcImZsb2F0IGR6ID0gc3BoZXJlQ29sb3JzLmIgKiB2UmFkaXVzO1wiLFxuICBcInZlYzQgY2xpcFBvcyA9IHByb2plY3Rpb25NYXRyaXggKiAobXZQb3NpdGlvbiArIHZlYzQoMCwgMCwgZHosIDApKTtcIixcbiAgXCJmbG9hdCBuZGNfZGVwdGggPSBjbGlwUG9zLnovY2xpcFBvcy53O1wiLFxuICBcImZsb2F0IGRlcHRoID0gKCgoZmFyLW5lYXIpICogbmRjX2RlcHRoKSArIG5lYXIgKyBmYXIpIC8gMi4wO1wiLFxuICBcImdsX0ZyYWdEZXB0aEVYVCA9IGRlcHRoO1wiLFxuICBcIiNlbmRpZlwiLFxuICBcIn1cIlxuXS5qb2luKFwiXFxuXCIpO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlckFubm90YXRpb24gPSBbXG4gIFwidW5pZm9ybSBzYW1wbGVyMkQgc3BoZXJlVGV4dHVyZTsgLy8gSW1wb3N0ZXIgaW1hZ2Ugb2Ygc3BoZXJlXCIsXG4gIFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XCIsXG4gIFwidmFyeWluZyB2ZWMzIHZDb2xvcjsgLy8gY29sb3JzIGFzc29jaWF0ZWQgdG8gdmVydGljZXM7IGFzc2lnbmVkIGJ5IHZlcnRleCBzaGFkZXJcIixcbiAgXCJ2YXJ5aW5nIHZlYzQgbXZQb3NpdGlvbjtcIixcbiAgXCJ2YXJ5aW5nIGZsb2F0IHZSYWRpdXM7XCIsXG4gIFwidm9pZCBtYWluKCkgXCIsXG4gIFwie1wiLFxuICBcIi8vIHdoYXQgcGFydCBvZiB0aGUgc3BoZXJlIGltYWdlP1wiLFxuICBcInZlYzIgdXYgPSB2ZWMyKGdsX1BvaW50Q29vcmQueCwgMS4wIC0gZ2xfUG9pbnRDb29yZC55KTtcIixcbiAgXCJ2ZWM0IHNwaGVyZUNvbG9ycyA9IHRleHR1cmUyRChzcGhlcmVUZXh0dXJlLCB1dik7XCIsXG4gIFwiLy8gYXZvaWQgZnVydGhlciBjb21wdXRhdGlvbiBhdCBpbnZpc2libGUgY29ybmVyc1wiLFxuICBcImlmIChzcGhlcmVDb2xvcnMuYSA8IDAuMykgZGlzY2FyZDtcIixcblxuICBcIi8vIGNhbGN1bGF0ZXMgYSBjb2xvciBmb3IgdGhlIHBhcnRpY2xlXCIsXG4gIFwiLy8gZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3IsIDEuMCk7XCIsXG4gIFwiLy8gc2V0cyBhIHdoaXRlIHBhcnRpY2xlIHRleHR1cmUgdG8gZGVzaXJlZCBjb2xvclwiLFxuICBcIi8vIGdsX0ZyYWdDb2xvciA9IHNxcnQoZ2xfRnJhZ0NvbG9yICogdGV4dHVyZTJEKHNwaGVyZVRleHR1cmUsIHV2KSkgKyB2ZWM0KDAuMSwgMC4xLCAwLjEsIDAuMCk7XCIsXG4gIFwiLy8gcmVkIGNoYW5uZWwgY29udGFpbnMgY29sb3JpemFibGUgc3BoZXJlIGltYWdlXCIsXG4gIFwidmVjMyBiYXNlQ29sb3IgPSB2Q29sb3IgKiBzcGhlcmVDb2xvcnMucjtcIixcbiAgXCIvLyBncmVlbiBjaGFubmVsIGNvbnRhaW5zICh3aGl0ZT8pIHNwZWN1bGFyIGhpZ2hsaWdodFwiLFxuICBcImdsX0ZyYWdDb2xvciA9IHZlYzQoYmFzZUNvbG9yLCBzcGhlcmVDb2xvcnMuYSk7XCIsXG4gIFwiLy8gVE9ETyBibHVlIGNoYW5uZWwgY29udGFpbnMgZGVwdGggb2Zmc2V0LCBidXQgd2UgY2Fubm90IHVzZSBnbF9GcmFnRGVwdGggaW4gd2ViZ2w/XCIsXG4gIFwiI2lmZGVmIEdMX0VYVF9mcmFnX2RlcHRoXCIsXG4gIFwiZmxvYXQgZmFyID0gZ2xfRGVwdGhSYW5nZS5mYXI7IGZsb2F0IG5lYXIgPSBnbF9EZXB0aFJhbmdlLm5lYXI7XCIsXG4gIFwiZmxvYXQgZHogPSBzcGhlcmVDb2xvcnMuYiAqIHZSYWRpdXM7XCIsXG4gIFwidmVjNCBjbGlwUG9zID0gcHJvamVjdGlvbk1hdHJpeCAqIChtdlBvc2l0aW9uICsgdmVjNCgwLCAwLCBkeiwgMCkpO1wiLFxuICBcImZsb2F0IG5kY19kZXB0aCA9IGNsaXBQb3Muei9jbGlwUG9zLnc7XCIsXG4gIFwiZmxvYXQgZGVwdGggPSAoKChmYXItbmVhcikgKiBuZGNfZGVwdGgpICsgbmVhciArIGZhcikgLyAyLjA7XCIsXG4gIFwiZ2xfRnJhZ0RlcHRoRVhUID0gZGVwdGg7XCIsXG4gIFwiI2VuZGlmXCIsXG4gIFwifVwiXG5dLmpvaW4oXCJcXG5cIik7XG5cbmNvbnN0IHZlcnRleFNoYWRlckNvbmUgPSBbXG4gIFwiYXR0cmlidXRlIGZsb2F0IHJhZGl1cztcIixcbiAgXCJhdHRyaWJ1dGUgdmVjMyB0eXBlQ29sb3I7XCIsXG4gIFwidmFyeWluZyB2ZWMzIHZDb2xvcjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzIgc3BoZXJlVXY7XCIsXG4gIFwidmFyeWluZyB2ZWM0IG12UG9zaXRpb247XCIsXG4gIFwidmFyeWluZyBmbG9hdCBkZXB0aFNjYWxlO1wiLFxuICBcInZvaWQgbWFpbigpIFwiLFxuICBcIntcIixcbiAgXCJcdC8vIFRPRE8gLSBvZmZzZXQgY29uZSBwb3NpdGlvbiBmb3IgZGlmZmVyZW50IHNwaGVyZSBzaXplc1wiLFxuICBcIlx0Ly8gVE9ETyAtIGltcGxlbWVudCBkZXB0aCBidWZmZXIgb24gQ2hyb21lXCIsXG4gIFwiXHRtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcIixcbiAgXCJcdC8vIEV4cGFuZCBxdWFkcmlsYXRlcmFsIHBlcnBlbmRpY3VsYXIgdG8gYm90aCB2aWV3L3NjcmVlbiBkaXJlY3Rpb24gYW5kIGNvbmUgYXhpc1wiLFxuICBcIlx0dmVjMyBjeWxBeGlzID0gKG1vZGVsVmlld01hdHJpeCAqIHZlYzQobm9ybWFsLCAwLjApKS54eXo7IC8vIGNvbnZlcnQgY29uZSBheGlzIHRvIGNhbWVyYSBzcGFjZVwiLFxuICBcIlx0dmVjMyBzaWRlRGlyID0gbm9ybWFsaXplKGNyb3NzKHZlYzMoMC4wLDAuMCwtMS4wKSwgY3lsQXhpcykpO1wiLFxuICBcIlx0bXZQb3NpdGlvbiArPSB2ZWM0KHJhZGl1cyAqIHNpZGVEaXIsIDAuMCk7XCIsXG4gIFwiXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1wiLFxuICBcIlx0Ly8gUGFzcyBhbmQgaW50ZXJwb2xhdGUgY29sb3JcIixcbiAgXCJcdHZDb2xvciA9IHR5cGVDb2xvcjtcIixcbiAgXCJcdC8vIFRleHR1cmUgY29vcmRpbmF0ZXNcIixcbiAgXCJcdHNwaGVyZVV2ID0gdXYgLSB2ZWMyKDAuNSwgMC41KTsgLy8gbWFwIGZyb20gWzAsMV0gcmFuZ2UgdG8gWy0uNSwuNV0sIGJlZm9yZSByb3RhdGlvblwiLFxuICAnXHQvLyBJZiBzaWRlRGlyIGlzIFwidXBcIiBvbiBzY3JlZW4sIG1ha2Ugc3VyZSB1IGlzIHBvc2l0aXZlJyxcbiAgXCJcdGZsb2F0IHEgPSBzaWRlRGlyLnkgKiBzcGhlcmVVdi55O1wiLFxuICBcIlx0c3BoZXJlVXYueSA9IHNpZ24ocSkgKiBzcGhlcmVVdi55O1wiLFxuICBcIlx0Ly8gcm90YXRlIHRleHR1cmUgY29vcmRpbmF0ZXMgdG8gbWF0Y2ggY29uZSBvcmllbnRhdGlvbiBhYm91dCB6XCIsXG4gIFwiXHRmbG9hdCBhbmdsZSA9IGF0YW4oc2lkZURpci54L3NpZGVEaXIueSk7XCIsXG4gIFwiXHRmbG9hdCBjID0gY29zKGFuZ2xlKTtcIixcbiAgXCJcdGZsb2F0IHMgPSBzaW4oYW5nbGUpO1wiLFxuICBcIlx0bWF0MiByb3RNYXQgPSBtYXQyKFwiLFxuICBcIlx0XHRjLCAtcywgXCIsXG4gIFwiXHRcdHMsICBjKTtcIixcbiAgXCJcdHNwaGVyZVV2ID0gcm90TWF0ICogc3BoZXJlVXY7XCIsXG4gIFwiXHRzcGhlcmVVdiArPSB2ZWMyKDAuNSwgMC41KTsgLy8gbWFwIGJhY2sgZnJvbSBbLS41LC41XSA9PiBbMCwxXVwiLFxuICBcIlx0Ly8gV2UgYXJlIHBhaW50aW5nIGFuIGFuZ2xlZCBjb25lIG9udG8gYSBmbGF0IHF1YWQsIHNvIGRlcHRoIGNvcnJlY3Rpb24gaXMgY29tcGxpY2F0ZWRcIixcbiAgXCIgICBmbG9hdCBmb3Jlc2hvcnRlbmluZyA9IGxlbmd0aChjeWxBeGlzKSAvIGxlbmd0aChjeWxBeGlzLnh5KTsgLy8gY29ycmVjdCBkZXB0aCBmb3IgZm9yZXNob3J0ZW5pbmdcIixcbiAgXCIgICAvLyBmb3Jlc2hvcnRlbmluZyBsaW1pdCBpcyBhIHRyYWRlb2ZmIGJldHdlZW4gb3ZlcmV4dHJ1ZGVkIGNvbmUgYXJ0aWZhY3RzLCBhbmQgZGVwdGggYXJ0aWZhY3RzXCIsXG4gIFwiICAgaWYgKGZvcmVzaG9ydGVuaW5nID4gNC4wKSBmb3Jlc2hvcnRlbmluZyA9IDAuOTsgLy8gaGFjayB0byBub3QgcG9wIG91dCBhdCBleHRyZW1lIGFuZ2xlcy4uLlwiLFxuICBcIiAgIGRlcHRoU2NhbGUgPSByYWRpdXMgKiBmb3Jlc2hvcnRlbmluZzsgLy8gY29ycmVjdCBkZXB0aCBmb3IgZm9yZXNob3J0ZW5pbmdcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJDb25lID0gW1xuICBcInVuaWZvcm0gc2FtcGxlcjJEIHNwaGVyZVRleHR1cmU7IC8vIEltcG9zdGVyIGltYWdlIG9mIHNwaGVyZVwiLFxuICBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7XCIsXG4gIFwidmFyeWluZyB2ZWMyIHNwaGVyZVV2O1wiLFxuICBcInZhcnlpbmcgdmVjNCBtdlBvc2l0aW9uO1wiLFxuICBcInZhcnlpbmcgZmxvYXQgZGVwdGhTY2FsZTtcIixcbiAgXCJ2b2lkIG1haW4oKSBcIixcbiAgXCJ7XCIsXG4gIFwiXHR2ZWM0IHNwaGVyZUNvbG9ycyA9IHRleHR1cmUyRChzcGhlcmVUZXh0dXJlLCBzcGhlcmVVdik7XCIsXG4gIFwiXHRpZiAoc3BoZXJlQ29sb3JzLmEgPCAwLjMpIGRpc2NhcmQ7XCIsXG4gIFwiXHR2ZWMzIGJhc2VDb2xvciA9IHZDb2xvciAqIHNwaGVyZUNvbG9ycy5yO1wiLFxuICBcIlx0dmVjMyBoaWdobGlnaHRDb2xvciA9IGJhc2VDb2xvciArIHNwaGVyZUNvbG9ycy5nZ2c7XCIsXG4gIFwiXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGhpZ2hsaWdodENvbG9yLCBzcGhlcmVDb2xvcnMuYSk7XCIsXG4gIFwiI2lmZGVmIEdMX0VYVF9mcmFnX2RlcHRoXCIsXG4gIFwiZmxvYXQgZHogPSBzcGhlcmVDb2xvcnMuYiAqIGRlcHRoU2NhbGU7XCIsXG4gIFwidmVjNCBtdnAgPSBtdlBvc2l0aW9uICsgdmVjNCgwLCAwLCBkeiwgMCk7XCIsXG4gIFwidmVjNCBjbGlwUG9zID0gcHJvamVjdGlvbk1hdHJpeCAqIG12cDtcIixcbiAgXCJmbG9hdCBuZGNfZGVwdGggPSBjbGlwUG9zLnovY2xpcFBvcy53O1wiLFxuICBcImZsb2F0IGZhciA9IGdsX0RlcHRoUmFuZ2UuZmFyOyBmbG9hdCBuZWFyID0gZ2xfRGVwdGhSYW5nZS5uZWFyO1wiLFxuICBcImZsb2F0IGRlcHRoID0gKCgoZmFyLW5lYXIpICogbmRjX2RlcHRoKSArIG5lYXIgKyBmYXIpIC8gMi4wO1wiLFxuICBcImdsX0ZyYWdEZXB0aEVYVCA9IGRlcHRoO1wiLFxuICBcIiNlbmRpZlwiLFxuICBcIn1cIlxuXS5qb2luKFwiXFxuXCIpO1xuXG5mdW5jdGlvbiBjb252ZXJ0VG9IZXhDb2xvcihpKSB7XG4gIGxldCByZXN1bHQgPSBcIiMwMDAwMDBcIjtcbiAgaWYgKGkgPj0gMCAmJiBpIDw9IDE1KSB7XG4gICAgcmVzdWx0ID0gYCMwMDAwMCR7aS50b1N0cmluZygxNil9YDtcbiAgfSBlbHNlIGlmIChpID49IDE2ICYmIGkgPD0gMjU1KSB7XG4gICAgcmVzdWx0ID0gYCMwMDAwJHtpLnRvU3RyaW5nKDE2KX1gO1xuICB9IGVsc2UgaWYgKGkgPj0gMjU2ICYmIGkgPD0gNDA5NSkge1xuICAgIHJlc3VsdCA9IGAjMDAwJHtpLnRvU3RyaW5nKDE2KX1gO1xuICB9IGVsc2UgaWYgKGkgPj0gNDA5NiAmJiBpIDw9IDY1NTM1KSB7XG4gICAgcmVzdWx0ID0gYCMwMCR7aS50b1N0cmluZygxNil9YDtcbiAgfSBlbHNlIGlmIChpID49IDY1NTM2ICYmIGkgPD0gMTA0ODU3NSkge1xuICAgIHJlc3VsdCA9IGAjMCR7aS50b1N0cmluZygxNil9YDtcbiAgfSBlbHNlIGlmIChpID49IDEwNDg1NzYgJiYgaSA8PSAxNjc3NzIxNSkge1xuICAgIHJlc3VsdCA9IGAjJHtpLnRvU3RyaW5nKDE2KX1gO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kaW5nQm94KHN3Y0pTT04pIHtcbiAgY29uc3QgYm91bmRpbmdCb3ggPSB7XG4gICAgeG1pbjogSW5maW5pdHksXG4gICAgeG1heDogLUluZmluaXR5LFxuICAgIHltaW46IEluZmluaXR5LFxuICAgIHltYXg6IC1JbmZpbml0eSxcbiAgICB6bWluOiBJbmZpbml0eSxcbiAgICB6bWF4OiAtSW5maW5pdHlcbiAgfTtcblxuICBPYmplY3QudmFsdWVzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgY29uc3QgciA9IG5vZGUucmFkaXVzO1xuICAgIGlmIChub2RlLnggLSByIDwgYm91bmRpbmdCb3gueG1pbikge1xuICAgICAgYm91bmRpbmdCb3gueG1pbiA9IG5vZGUueCAtIHI7XG4gICAgfVxuICAgIGlmIChub2RlLnggKyByID4gYm91bmRpbmdCb3gueG1heCkge1xuICAgICAgYm91bmRpbmdCb3gueG1heCA9IG5vZGUueCArIHI7XG4gICAgfVxuICAgIGlmIChub2RlLnkgLSByIDwgYm91bmRpbmdCb3gueW1pbikge1xuICAgICAgYm91bmRpbmdCb3gueW1pbiA9IG5vZGUueSAtIHI7XG4gICAgfVxuICAgIGlmIChub2RlLnkgKyByID4gYm91bmRpbmdCb3gueW1heCkge1xuICAgICAgYm91bmRpbmdCb3gueW1heCA9IG5vZGUueSArIHI7XG4gICAgfVxuICAgIGlmIChub2RlLnogLSByIDwgYm91bmRpbmdCb3guem1pbikge1xuICAgICAgYm91bmRpbmdCb3guem1pbiA9IG5vZGUueiAtIHI7XG4gICAgfVxuICAgIGlmIChub2RlLnogKyByID4gYm91bmRpbmdCb3guem1heCkge1xuICAgICAgYm91bmRpbmdCb3guem1heCA9IG5vZGUueiArIHI7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYm91bmRpbmdCb3g7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kaW5nU3BoZXJlKHN3Y0pTT04sIGJvdW5kaW5nQm94KSB7XG4gIC8vIFNpbWlsYXIgdG86XG4gIC8vIFwiQW4gRWZmaWNpZW50IEJvdW5kaW5nIFNwaGVyZVwiLCBieSBKYWNrIFJpdHRlciBmcm9tIFwiR3JhcGhpY3MgR2Vtc1wiLCBBY2FkZW1pYyBQcmVzcywgMTk5MFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZXJpY2g2NjYvR3JhcGhpY3NHZW1zL2Jsb2IvbWFzdGVyL2dlbXMvQm91bmRTcGhlcmUuY1xuXG4gIC8vIFN0YXJ0IHdpdGggdGhlIHNwaGVyZSBpbnNjcmliZWQgaW4gdGhlIGJvdW5kaW5nIGJveC4gIEl0IG1heSBtaXNzIHNvbWUgbm9kZXMuXG4gIGNvbnN0IHJ4ID0gKGJvdW5kaW5nQm94LnhtYXggLSBib3VuZGluZ0JveC54bWluKSAvIDI7XG4gIGNvbnN0IHJ5ID0gKGJvdW5kaW5nQm94LnltYXggLSBib3VuZGluZ0JveC55bWluKSAvIDI7XG4gIGNvbnN0IHJ6ID0gKGJvdW5kaW5nQm94LnptYXggLSBib3VuZGluZ0JveC56bWluKSAvIDI7XG4gIGxldCByYWRpdXMgPSBNYXRoLm1pbihyeCwgcnksIHJ6KTtcbiAgbGV0IGNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgIGJvdW5kaW5nQm94LnhtaW4gKyByeCxcbiAgICBib3VuZGluZ0JveC55bWluICsgcnksXG4gICAgYm91bmRpbmdCb3guem1pbiArIHJ6XG4gICk7XG5cbiAgLy8gRmluZCBlYWNoIG5vZGUgdGhhdCBpcyBvdXRzaWRlIHRoZSBjdXJyZW50IGJvdW5kaW5nIHNwaGVyZS5cbiAgbGV0IHJhZGl1c1NxID0gcmFkaXVzICogcmFkaXVzO1xuICBPYmplY3QudmFsdWVzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgY29uc3Qgbm9kZUNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKG5vZGUueCwgbm9kZS55LCBub2RlLnopO1xuICAgIGNvbnN0IG5vZGVDZW50ZXJUb0NlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgbm9kZUNlbnRlclRvQ2VudGVyLnN1YlZlY3RvcnMoY2VudGVyLCBub2RlQ2VudGVyKTtcbiAgICBjb25zdCBkaXN0U3FOb2RlQ2VudGVyVG9DZW50ZXIgPSBub2RlQ2VudGVyVG9DZW50ZXIuZG90KG5vZGVDZW50ZXJUb0NlbnRlcik7XG4gICAgLy8gSW5jbHVkZSB0aGUgbm9kZSdzIHJhZGl1cyB3aGVuIGNoZWNraW5nIHdoZXRoZXIgaXQgaXMgb3V0c2lkZS5cbiAgICBpZiAoZGlzdFNxTm9kZUNlbnRlclRvQ2VudGVyICsgbm9kZS5yYWRpdXMgKiBub2RlLnJhZGl1cyA+IHJhZGl1c1NxKSB7XG4gICAgICAvLyBJZiBpdCBpcyBvdXRzaWRlLCB0aGVuIHRoZSBuZXcgYm91bmRpbmdwLXNwaGVyZSByYWRpdXMgaXMgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG9sZCByYWRpdXNcbiAgICAgIC8vIGFuZCB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3V0c2lkZSBvZiB0aGUgbm9kZSAoaS5lLiwgaW5jbHVkZSBpdHMgcmFkaXVzKSB0byB0aGVcbiAgICAgIC8vIG9sZCBib3VuZGluZy1zcGhlcmUgY2VudGVyLlxuICAgICAgY29uc3QgZGlzdE5vZGVDZW50ZXJUb0NlbnRlciA9IE1hdGguc3FydChkaXN0U3FOb2RlQ2VudGVyVG9DZW50ZXIpO1xuICAgICAgY29uc3QgbmV3UmFkaXVzID0gKHJhZGl1cyArIChkaXN0Tm9kZUNlbnRlclRvQ2VudGVyICsgbm9kZS5yYWRpdXMpKSAvIDIuMDtcbiAgICAgIC8vIFRoZSBuZXcgYm91bmRpbmcgc3BoZXJlIGNlbnRlciB3aWxsIGJlIG9uIHRoZSBsaW5lIGJldHdlZW4gdGhlIG5vZGUgYW5kIHRoZSBvbGQgY2VudGVyLlxuICAgICAgY29uc3Qgbm9kZUNlbnRlclRvQ2VudGVyVW5pdCA9IG5vZGVDZW50ZXJUb0NlbnRlclxuICAgICAgICAuY2xvbmUoKVxuICAgICAgICAuZGl2aWRlU2NhbGFyKGRpc3ROb2RlQ2VudGVyVG9DZW50ZXIpO1xuICAgICAgY29uc3Qgbm9kZUNlbnRlclRvTmV3Q2VudGVyID0gbm9kZUNlbnRlclRvQ2VudGVyVW5pdFxuICAgICAgICAuY2xvbmUoKVxuICAgICAgICAubXVsdGlwbHlTY2FsYXIobmV3UmFkaXVzIC0gbm9kZS5yYWRpdXMpO1xuICAgICAgY2VudGVyID0gbm9kZUNlbnRlci5jbG9uZSgpLmFkZChub2RlQ2VudGVyVG9OZXdDZW50ZXIpO1xuICAgICAgcmFkaXVzID0gbmV3UmFkaXVzO1xuICAgICAgcmFkaXVzU3EgPSByYWRpdXMgKiByYWRpdXM7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4geyBjZW50ZXIsIHJhZGl1cyB9O1xufVxuLyoqIFxuICogQ2FsY3VsYXRlIHRoZSBjYW1lcmEgcG9zaXRpb24gb24gdGhlIGVkZ2Ugb2YgdGhlIGJvdW5kaW5nIHNwaGVyZVxuICogQHBhcmFtIHtudW1iZXJ9IGZvdiAtIHRoZSBmaWVsZCBvZiB2aWV3IGZvciB0aGUgc2NlbmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBib3VuZGluZ1NwaGVyZSAtIG9iamVjdCBkZXNjcmliaW5nIHJhZGl1cyBhbmQgY2VudGVyIHBvaW50IG9mIHRoZSBzcGhlcmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZnJvbnRUb0JhY2sgLSBpZiB0cnVlLCB0aGVuIGxvb2sgZG93biB0aGUgWi1zdGFjayBmcm9tIHBvaW50IDBcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRIUkVFLlZlY3RvcjMgb2JqZWN0IHVzZWQgdG8gcG9zaXRpb24gdGhlIGNhbWVyYVxuICovXG5mdW5jdGlvbiBjYWxjdWxhdGVDYW1lcmFQb3NpdGlvbihmb3YsIGJvdW5kaW5nU3BoZXJlLCBmcm9udFRvQmFjaywgbWF4Vm9sdW1lU2l6ZSkge1xuICBjb25zdCB0aGV0YSA9IChmb3YgKiAoTWF0aC5QSSAvIDE4MC4wKSkgLyAyLjA7XG4gIGNvbnN0IGQgPSBib3VuZGluZ1NwaGVyZS5yYWRpdXMgLyBNYXRoLnNpbih0aGV0YSk7XG4gIGNvbnN0IHsgY2VudGVyIH0gPSBib3VuZGluZ1NwaGVyZTtcbiAgLy8gSWYgbmVnYXRpdmUgeiBpcyBncmVhdGVyIHRoYW4gdGhlIC5tYXhWb2x1bWVTaXplLCB0aGUgY2FtZXJhIHdpbGxcbiAgLy8gZ2V0IHN0dWNrIGF0IHRoYXQgcG9pbnQgYW5kIHdvbnQgYmUgYWJsZSB0byBkb2xseSBpbiBvciBvdXQuIEZvcmNpbmdcbiAgLy8gdGhlIHogcG9zaXRpb24gdG8gYmUgYXQgbGVhc3QgaGFsZiB0aGUgbmVnYXRpdmUgbWF4Vm9sdW1lU2l6ZSBzZWVtc1xuICAvLyB0byBmaXggdGhlIGlzc3VlLlxuICBjb25zdCB6ID0gTWF0aC5tYXgoLShtYXhWb2x1bWVTaXplLzIpLCBmcm9udFRvQmFjayA/IGNlbnRlci56IC0gZCA6IGNlbnRlci56ICsgZCk7XG4gIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyhjZW50ZXIueCwgY2VudGVyLnksIHopO1xufVxuXG5mdW5jdGlvbiBhcHBseVNlbWlUcmFuc3BhcmVudFNoYWRlcihvYmplY3QsIGNvbG9yKSB7XG4gIG9iamVjdC50cmF2ZXJzZShjaGlsZCA9PiB7XG4gICAgY2hpbGQubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgY29sb3I6IHsgdHlwZTogXCJjXCIsIHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoYCR7Y29sb3J9YCkgfVxuICAgICAgfSxcbiAgICAgIHZlcnRleFNoYWRlcjogYFxuICAgICAgICAjbGluZSA1ODVcbiAgICAgICAgdmFyeWluZyB2ZWMzIG5vcm1hbF9pbl9jYW1lcmE7XG4gICAgICAgIHZhcnlpbmcgdmVjMyB2aWV3X2RpcmVjdGlvbjtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdmVjNCBwb3NfaW5fY2FtZXJhID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBwb3NfaW5fY2FtZXJhO1xuICAgICAgICAgIG5vcm1hbF9pbl9jYW1lcmEgPSBub3JtYWxpemUobWF0Myhtb2RlbFZpZXdNYXRyaXgpICogbm9ybWFsKTtcbiAgICAgICAgICB2aWV3X2RpcmVjdGlvbiA9IG5vcm1hbGl6ZShwb3NfaW5fY2FtZXJhLnh5eik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlcjogYFxuICAgICAgICAjbGluZSA1OTdcbiAgICAgICAgdW5pZm9ybSB2ZWMzIGNvbG9yO1xuICAgICAgICB2YXJ5aW5nIHZlYzMgbm9ybWFsX2luX2NhbWVyYTtcbiAgICAgICAgdmFyeWluZyB2ZWMzIHZpZXdfZGlyZWN0aW9uO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAvLyBNYWtlIGVkZ2VzIG1vcmUgb3BhcXVlIHRoYW4gY2VudGVyXG4gICAgICAgICAgZmxvYXQgZWRnaW5lc3MgPSAxLjAgLSBhYnMoZG90KG5vcm1hbF9pbl9jYW1lcmEsIHZpZXdfZGlyZWN0aW9uKSk7XG4gICAgICAgICAgZmxvYXQgb3BhY2l0eSA9IGNsYW1wKGVkZ2luZXNzIC0gMC4zMCwgMC4wLCAwLjUpO1xuICAgICAgICAgIC8vIERhcmtlbiBjb21wYXJ0bWVudCBhdCB0aGUgdmVyeSBlZGdlXG4gICAgICAgICAgZmxvYXQgYmxhY2tuZXNzID0gcG93KGVkZ2luZXNzLCA0LjApIC0gMC4zO1xuICAgICAgICAgIHZlYzMgYyA9IG1peChjb2xvciwgdmVjMygwLDAsMCksIGJsYWNrbmVzcyk7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjLCBvcGFjaXR5KTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgZGVwdGhUZXN0OiB0cnVlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vLyBnZW5lcmF0ZXMgcGFydGljbGUgdmVydGljZXNcbmZ1bmN0aW9uIGdlbmVyYXRlUGFydGljbGUobm9kZSkge1xuICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjMobm9kZS54LCBub2RlLnksIG5vZGUueik7XG59XG5cbi8vIGdlbmVyYXRlcyBza2VsZXRvbiB2ZXJ0aWNlc1xuZnVuY3Rpb24gZ2VuZXJhdGVTa2VsZXRvbihub2RlLCBub2RlUGFyZW50KSB7XG4gIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKG5vZGUueCwgbm9kZS55LCBub2RlLnopO1xuICBjb25zdCB2ZXJ0ZXhQYXJlbnQgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICBub2RlUGFyZW50LngsXG4gICAgbm9kZVBhcmVudC55LFxuICAgIG5vZGVQYXJlbnQuelxuICApO1xuICByZXR1cm4ge1xuICAgIGNoaWxkOiB2ZXJ0ZXgsXG4gICAgcGFyZW50OiB2ZXJ0ZXhQYXJlbnRcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWV0YWRhdGFFbGVtZW50KG1ldGFkYXRhLCBjb2xvcnMpIHtcbiAgY29uc3QgbWV0YWRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1ldGFkaXYuaWQgPSBcIm5vZGVfa2V5XCI7XG4gIG1ldGFkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIG1ldGFkaXYuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgbWV0YWRpdi5zdHlsZS5yaWdodCA9IFwiMTBweFwiO1xuICBtZXRhZGl2LnN0eWxlLmJvcmRlciA9IFwic29saWQgMXB4ICNhYWFhYWFcIjtcbiAgbWV0YWRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICBtZXRhZGl2LnN0eWxlLnBhZGRpbmcgPSBcIjJweFwiO1xuXG4gIGxldCB0b2lubmVyaHRtbCA9IFwiXCI7XG4gIG1ldGFkYXRhLmZvckVhY2gobSA9PiB7XG4gICAgY29uc3QgbXR5cGUgPSBwYXJzZUludChtLnR5cGUsIDEwKTtcbiAgICBjb25zdCB0aHJlZUNvbG9yID0gbXR5cGUgPCBjb2xvcnMubGVuZ3RoID8gY29sb3JzW210eXBlXSA6IGNvbG9yc1swXTtcbiAgICBsZXQgY3NzQ29sb3IgPSB0aHJlZUNvbG9yO1xuICAgIGlmICh0eXBlb2YgdGhyZWVDb2xvciAhPT0gXCJzdHJpbmdcIilcbiAgICAgIGNzc0NvbG9yID0gY29udmVydFRvSGV4Q29sb3IodGhyZWVDb2xvcik7XG4gICAgdG9pbm5lcmh0bWwgKz0gYDxkaXY+PHNwYW4gc3R5bGU9J2hlaWdodDoxMHB4O3dpZHRoOjEwcHg7YmFja2dyb3VuZDoke2Nzc0NvbG9yfTtgO1xuICAgIHRvaW5uZXJodG1sICs9IGBkaXNwbGF5OmlubGluZS1ibG9jazsnPjwvc3Bhbj4gOiAke20ubGFiZWx9PC9kaXY+YDtcbiAgfSk7XG4gIG1ldGFkaXYuaW5uZXJIVE1MID0gdG9pbm5lcmh0bWw7XG4gIHJldHVybiBtZXRhZGl2O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJrVmlld2VyIHtcbiAgLyogc3djIG5ldXJvbiBqc29uIG9iamVjdDpcbiAgICp7XG4gICAqICBpZCA6IHtcbiAgICogICAgdHlwZTogPHR5cGUgbnVtYmVyIG9mIG5vZGUgKHN0cmluZyk+LFxuICAgKiAgICB4OiA8eCBwb3NpdGlvbiBvZiBub2RlIChmbG9hdCk+LFxuICAgKiAgICB5OiA8eSBwb3NpdGlvbiBvZiBub2RlIChmbG9hdCk+LFxuICAgKiAgICB6OiA8eiBwb3NpdGlvbiBvZiBub2RlIChmbG9hdCk+LFxuICAgKiAgICBwYXJlbnQ6IDxpZCBudW1iZXIgb2Ygbm9kZSdzIHBhcmVudCAoLTEgaWYgbm8gcGFyZW50KT4sXG4gICAqICAgIHJhZGl1czogPHJhZGl1cyBvZiBub2RlIChmbG9hdCk+LFxuICAgKiAgfVxuICAgKn1cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICB0aGlzLnN3YyA9IG51bGw7XG4gICAgLy8gbW9kZSAoc3BoZXJlLCBwYXJ0aWNsZSwgc2tlbGV0b24pXG4gICAgdGhpcy5tb2RlID0gXCJwYXJ0aWNsZVwiO1xuICAgIC8vIGZsaXAgeSBheGlzXG4gICAgdGhpcy5mbGlwID0gZmFsc2U7XG4gICAgLy8gY29sb3IgYXJyYXksIG5vZGVzIG9mIHR5cGUgMCBzaG93IGFzIGZpcnN0IGNvbG9yLCBldGMuXG4gICAgdGhpcy5jb2xvcnMgPSBbXG4gICAgICAweDMxZmZkYyxcbiAgICAgIDB4NmQ0ZmYzLFxuICAgICAgMHhhYTNhZjAsXG4gICAgICAweGYzODAzMixcbiAgICAgIDB4NTlmYzIwLFxuICAgICAgMHhmOGQ0M2MsXG4gICAgICAweGZkMmM0ZCxcbiAgICAgIDB4YzljOWM5XG4gICAgXTtcbiAgICB0aGlzLnJhZGl1c19zY2FsZV9mYWN0b3IgPSAxO1xuICAgIHRoaXMubWV0YWRhdGEgPSBmYWxzZTtcbiAgICB0aGlzLm9uX3NlbGVjdF9ub2RlID0gbnVsbDtcbiAgICB0aGlzLm9uX3RvZ2dsZV9ub2RlID0gbnVsbDtcbiAgICB0aGlzLnNob3dTdGF0cyA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRocmVlID0gVEhSRUU7XG5cbiAgICB0aGlzLnNob3dBeGVzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93X2NvbmVzID0gdHJ1ZTtcbiAgICB0aGlzLmJyYWluYm91bmRpbmdib3ggPSBudWxsO1xuICAgIHRoaXMubGFzdF9hbmltX3RpbWVzdGFtcCA9IG51bGw7XG4gICAgdGhpcy5tb3VzZUhhbmRsZXIgPSBudWxsO1xuICAgIHRoaXMubm9kZVBhcnRpY2xlVGV4dHVyZSA9IE5PREVfUEFSVElDTEVfSU1BR0U7XG4gICAgdGhpcy5taW5fcmFkaXVzID0gbnVsbDtcbiAgICB0aGlzLnJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMgPSBudWxsO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gMHhmZmZmZmY7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhQ2hhbmdlQ2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMub25Ub3AgPSBmYWxzZTtcbiAgICB0aGlzLm1heFZvbHVtZVNpemUgPSAxMDAwMDA7XG5cbiAgICB0aGlzLnNldFZhbHVlcyhhcmdzKTtcbiAgICAvLyBhbnl0aGluZyBhZnRlciB0aGUgYWJvdmUgbGluZSBjYW4gbm90IGJlIHNldCBieSB0aGUgY2FsbGVyLlxuXG4gICAgLy8gaHRtbCBlbGVtZW50IHRoYXQgd2lsbCByZWNlaXZlIHdlYmdsIGNhbnZhc1xuICAgIGlmICh0eXBlb2YgYXJncy5kb21fZWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGhpcy5kb21fZWxlbWVudCA9IGFyZ3MuZG9tX2VsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgYXJncy5kb21fZWxlbWVudCB8fCBcImNvbnRhaW5lclwiXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGhlaWdodCBvZiBjYW52YXNcbiAgICB0aGlzLkhFSUdIVCA9IHRoaXMuZG9tX2VsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIC8vIHdpZHRoIG9mIGNhbnZhc1xuICAgIHRoaXMuV0lEVEggPSB0aGlzLmRvbV9lbGVtZW50LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgLy8gc2V0cyB1cCB1c2VyIHNwZWNpZmllZCBjb25maWd1cmF0aW9uXG4gIHNldFZhbHVlcyh2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgdGhpc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBjYWxjdWxhdGVzIGNvbG9yIGJhc2VkIG9uIG5vZGUgdHlwZVxuICBub2RlQ29sb3Iobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPCB0aGlzLnRocmVlX2NvbG9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRocmVlX2NvbG9yc1tub2RlLnR5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aHJlZV9jb2xvcnNbMF07XG4gIH1cblxuXG5cbiAgICAvLyBnZW5lcmF0ZXMgc3BoZXJlIG1lc2hcbiAgZ2VuZXJhdGVTcGhlcmUobm9kZSkge1xuICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsID0gdGhpcy50aHJlZV9tYXRlcmlhbHNbbm9kZS50eXBlXTtcbiAgICBjb25zdCByMSA9IG5vZGUucmFkaXVzIHx8IDAuMDE7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkocjEpO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgc3BoZXJlTWF0ZXJpYWwpO1xuICAgIG1lc2gucG9zaXRpb24ueCA9IG5vZGUueDtcbiAgICBtZXNoLnBvc2l0aW9uLnkgPSBub2RlLnk7XG4gICAgbWVzaC5wb3NpdGlvbi56ID0gbm9kZS56O1xuICAgIHJldHVybiBtZXNoO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGVzIGNvbmVzIGNvbm5lY3Rpbmcgc3BoZXJlc1xuICBnZW5lcmF0ZUNvbmVHZW9tZXRyeShub2RlLCBub2RlUGFyZW50KSB7XG4gICAgY29uc3QgY29uZU1hdGVyaWFsID0gdGhpcy50aHJlZV9tYXRlcmlhbHNbbm9kZVBhcmVudC50eXBlXTtcbiAgICBjb25zdCBub2RlVmVjID0gbmV3IFRIUkVFLlZlY3RvcjMobm9kZS54LCBub2RlLnksIG5vZGUueik7XG4gICAgY29uc3Qgbm9kZVBhcmVudFZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgbm9kZVBhcmVudC54LFxuICAgICAgbm9kZVBhcmVudC55LFxuICAgICAgbm9kZVBhcmVudC56XG4gICAgKTtcbiAgICBjb25zdCBkaXN0ID0gbm9kZVZlYy5kaXN0YW5jZVRvKG5vZGVQYXJlbnRWZWMpO1xuICAgIGNvbnN0IGN5bEF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMobm9kZVZlYywgbm9kZVBhcmVudFZlYyk7XG4gICAgY3lsQXhpcy5ub3JtYWxpemUoKTtcbiAgICBjb25zdCB0aGV0YSA9IE1hdGguYWNvcyhjeWxBeGlzLnkpO1xuICAgIGNvbnN0IHJvdGF0aW9uQXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgcm90YXRpb25BeGlzLmNyb3NzVmVjdG9ycyhjeWxBeGlzLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XG4gICAgcm90YXRpb25BeGlzLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHIxID0gbm9kZS5yYWRpdXMgfHwgMC4wMTtcbiAgICBjb25zdCByMiA9IG5vZGVQYXJlbnQucmFkaXVzIHx8IDAuMDE7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyMSwgcjIsIGRpc3QpO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgY29uZU1hdGVyaWFsKTtcbiAgICBtZXNoLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICBtZXNoLm1hdHJpeC5tYWtlUm90YXRpb25BeGlzKHJvdGF0aW9uQXhpcywgLXRoZXRhKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgKG5vZGUueCArIG5vZGVQYXJlbnQueCkgLyAyLFxuICAgICAgKG5vZGUueSArIG5vZGVQYXJlbnQueSkgLyAyLFxuICAgICAgKG5vZGUueiArIG5vZGVQYXJlbnQueikgLyAyXG4gICAgKTtcbiAgICBtZXNoLm1hdHJpeC5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cblxuICAvLyBnZW5lcmF0ZXMgY29uZSBwcm9wZXJ0aWVzIGZvciBub2RlLCBwYXJlbnQgcGFpclxuICBnZW5lcmF0ZUNvbmUobm9kZSwgbm9kZVBhcmVudCwgY29sb3IpIHtcbiAgICBjb25zdCBjb25lQ2hpbGQgPSB7fTtcbiAgICBjb25zdCBjb25lUGFyZW50ID0ge307XG5cbiAgICBsZXQgbm9kZUNvbG9yID0gdGhpcy5ub2RlQ29sb3Iobm9kZSk7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBub2RlQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoY29sb3IpO1xuICAgIH1cbiAgICBjb25lQ2hpbGQudmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMobm9kZS54LCBub2RlLnksIG5vZGUueik7XG4gICAgY29uZUNoaWxkLnJhZGl1cyA9IG5vZGUucmFkaXVzO1xuICAgIGNvbmVDaGlsZC5jb2xvciA9IG5vZGVDb2xvcjtcblxuICAgIGxldCBub2RlUGFyZW50Q29sb3IgPSB0aGlzLm5vZGVDb2xvcihub2RlUGFyZW50KTtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIG5vZGVQYXJlbnRDb2xvciA9IG5ldyBUSFJFRS5Db2xvcihjb2xvcik7XG4gICAgfVxuICAgIGNvbmVQYXJlbnQudmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICBub2RlUGFyZW50LngsXG4gICAgICBub2RlUGFyZW50LnksXG4gICAgICBub2RlUGFyZW50LnpcbiAgICApO1xuICAgIGNvbmVQYXJlbnQucmFkaXVzID0gbm9kZVBhcmVudC5yYWRpdXM7XG4gICAgY29uZVBhcmVudC5jb2xvciA9IG5vZGVQYXJlbnRDb2xvcjtcblxuICAgIC8vIG5vcm1hbHNcbiAgICBjb25zdCBuMSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhcbiAgICAgIGNvbmVQYXJlbnQudmVydGV4LFxuICAgICAgY29uZUNoaWxkLnZlcnRleFxuICAgICk7XG4gICAgY29uc3QgbjIgPSBuMS5jbG9uZSgpLm5lZ2F0ZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkOiBjb25lQ2hpbGQsXG4gICAgICBwYXJlbnQ6IGNvbmVQYXJlbnQsXG4gICAgICBub3JtYWwxOiBuMSxcbiAgICAgIG5vcm1hbDI6IG4yXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZU5ldXJvbihzd2NKU09OLCBjb2xvciA9IHVuZGVmaW5lZCkge1xuICAgIC8vIG5ldXJvbiBpcyBvYmplY3QgM2Qgd2hpY2ggZW5zdXJlcyBhbGwgY29tcG9uZW50cyBtb3ZlIHRvZ2V0aGVyXG4gICAgY29uc3QgbmV1cm9uID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgbGV0IGdlb21ldHJ5O1xuICAgIGxldCBtYXRlcmlhbDtcbiAgICAvLyBwYXJ0aWNsZSBtb2RlIHVzZXMgdmVydGV4IGluZm8gdG8gcGxhY2UgdGV4dHVyZSBpbWFnZSwgdmVyeSBmYXN0XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gXCJwYXJ0aWNsZVwiKSB7XG4gICAgICAvLyBzcGVjaWFsIGltcG9zdGVyIGltYWdlIGNvbnRhaW5zOlxuICAgICAgLy8gMSAtIGNvbG9yaXphYmxlIHNwaGVyZSBpbWFnZSBpbiByZWQgY2hhbm5lbFxuICAgICAgLy8gMiAtIHNwZWN1bGFyIGhpZ2hsaWdodCBpbiBncmVlbiBjaGFubmVsXG4gICAgICAvLyAzIC0gZGVwdGggb2Zmc2V0IGluIGJsdWUgY2hhbm5lbCAoY3VycmVudGx5IHVudXNlZClcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGNvbnN0IHNwaGVyZUltZyA9IG5ldyBUSFJFRS5UZXh0dXJlKGltYWdlKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgICAgc3BoZXJlSW1nLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgICBpbWFnZS5zcmMgPSB0aGlzLm5vZGVQYXJ0aWNsZVRleHR1cmU7XG5cbiAgICAgIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICAvLyBwcm9wZXJ0aWVzIHRoYXQgbWF5IGNvbnN0eSBmcm9tIHBhcnRpY2xlIHRvIHBhcnRpY2xlLiBvbmx5IGFjY2Vzc2libGUgaW4gdmVydGV4IHNoYWRlcnMhXG4gICAgICAvL1x0KGNhbiBwYXNzIGNvbG9yIGluZm8gdG8gZnJhZ21lbnQgc2hhZGVyIHZpYSB2Q29sb3IuKVxuICAgICAgLy8gY29tcHV0ZSBzY2FsZSBmb3IgcGFydGljbGVzLCBpbiBwaXhlbHNcbiAgICAgIGNvbnN0IHBhcnRpY2xlU2NhbGUgPVxuICAgICAgICAoMC41ICogdGhpcy5IRUlHSFQpIC9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5nZXRQaXhlbFJhdGlvKCkgL1xuICAgICAgICBNYXRoLnRhbigoMC41ICogdGhpcy5mb3YgKiBNYXRoLlBJKSAvIDE4MC4wKTtcblxuICAgICAgY29uc3QgY3VzdG9tQXR0cmlidXRlcyA9IHtcbiAgICAgICAgcmFkaXVzOiB7IHR5cGU6IFwiZnYxXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICB0eXBlQ29sb3I6IHsgdHlwZTogXCJjXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICB2ZXJ0aWNlczogeyB0eXBlOiBcImZcIiwgdmFsdWU6IFtdIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGN1c3RvbVVuaWZvcm1zID0ge1xuICAgICAgICBwYXJ0aWNsZVNjYWxlOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogcGFydGljbGVTY2FsZSB9LFxuICAgICAgICBzcGhlcmVUZXh0dXJlOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogc3BoZXJlSW1nIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGluZGV4TG9va3VwID0ge307XG5cbiAgICAgIE9iamVjdC5rZXlzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGxldCBub2RlQ29sb3IgPSB0aGlzLm5vZGVDb2xvcihzd2NKU09OW25vZGVdKTtcblxuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICBub2RlQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFydGljbGVWZXJ0ZXggPSBnZW5lcmF0ZVBhcnRpY2xlKHN3Y0pTT05bbm9kZV0pO1xuXG4gICAgICAgIGxldCByYWRpdXMgPSBzd2NKU09OW25vZGVdLnJhZGl1cyAqIHRoaXMucmFkaXVzX3NjYWxlX2ZhY3RvcjtcblxuICAgICAgICBpZiAodGhpcy5taW5fcmFkaXVzICYmIHJhZGl1cyA8IHRoaXMubWluX3JhZGl1cykge1xuICAgICAgICAgIHJhZGl1cyA9IHRoaXMubWluX3JhZGl1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2gocmFkaXVzKTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKHBhcnRpY2xlVmVydGV4LngpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2gocGFydGljbGVWZXJ0ZXgueSk7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChwYXJ0aWNsZVZlcnRleC56KTtcblxuICAgICAgICBpbmRleExvb2t1cFtjdXN0b21BdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5sZW5ndGggLSAxXSA9XG4gICAgICAgICAgc3djSlNPTltub2RlXS5zYW1wbGVOdW1iZXI7XG4gICAgIH0pO1xuICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInBvc2l0aW9uXCIsXG4gICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGN1c3RvbUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUsIDMpXG4gICAgICApO1xuICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInJhZGl1c1wiLFxuICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjdXN0b21BdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZSwgMSlcbiAgICAgICk7XG4gICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwidHlwZUNvbG9yXCIsXG4gICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGN1c3RvbUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLCAzKVxuICAgICAgKTtcblxuICAgICAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICB1bmlmb3JtczogY3VzdG9tVW5pZm9ybXMsXG4gICAgICAgIHZlcnRleFNoYWRlcixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIsXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXG4gICAgICAgIC8vIGFscGhhVGVzdDogMC41IC8vIGlmIGhhdmluZyB0cmFuc3BhcmVuY3kgaXNzdWVzLCB0cnkgaW5jbHVkaW5nOiBhbHBoYVRlc3Q6IDAuNSxcbiAgICAgIH0pO1xuICAgICAgbWF0ZXJpYWwuZXh0ZW5zaW9ucy5mcmFnRGVwdGggPSB0cnVlO1xuXG4gICAgICBsZXQgbWF0ZXJpYWxTaGFkZXIgPSBudWxsO1xuXG4gICAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVEhSRUUuUG9pbnRzKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBwYXJ0aWNsZXMudXNlckRhdGEgPSB7IGluZGV4TG9va3VwLCBtYXRlcmlhbFNoYWRlciB9O1xuXG4gICAgICBtYXRlcmlhbC5vbkJlZm9yZUNvbXBpbGUgPSBzaGFkZXIgPT4ge1xuICAgICAgICBzaGFkZXIudW5pZm9ybXMuYWxwaGEgPSB7IHZhbHVlOiAwIH07XG4gICAgICAgIHNoYWRlci52ZXJ0ZXhTaGFkZXIgPSBgdW5pZm9ybSBmbG9hdCBhbHBoYTtcXG4ke3NoYWRlci52ZXJ0ZXhTaGFkZXJ9YDtcbiAgICAgICAgc2hhZGVyLnZlcnRleFNoYWRlciA9IHNoYWRlci52ZXJ0ZXhTaGFkZXIucmVwbGFjZShcbiAgICAgICAgICBcIiNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XCIsXG4gICAgICAgICAgW1widkFscGhhID0gYWxwaGFcIl0uam9pbihcIlxcblwiKVxuICAgICAgICApO1xuICAgICAgICBtYXRlcmlhbFNoYWRlciA9IHNoYWRlcjtcblxuICAgICAgICBtYXRlcmlhbFNoYWRlci51bmlmb3Jtcy5hbHBoYS52YWx1ZSA9IDAuOTtcblxuICAgICAgICBwYXJ0aWNsZXMudXNlckRhdGEubWF0ZXJpYWxTaGFkZXIgPSBtYXRlcmlhbFNoYWRlcjtcbiAgICAgIH07XG5cbiAgICAgIG5ldXJvbi5hZGQocGFydGljbGVzKTtcblxuICAgICAgaWYgKHRoaXMuc2hvd19jb25lcykge1xuICAgICAgICAvLyBDb25lIHF1YWQgaW1wb3N0ZXJzLCB0byBsaW5rIHNwaGVyZXMgdG9nZXRoZXJcbiAgICAgICAgY29uc3QgY29uZUF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICAgcmFkaXVzOiB7IHR5cGU6IFwiZnYxXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICAgIGluZGljZXM6IHsgdHlwZTogXCJpdjFcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgdHlwZUNvbG9yOiB7IHR5cGU6IFwiY1wiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgICB2ZXJ0aWNlczogeyB0eXBlOiBcImZcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgbm9ybWFsczogeyB0eXBlOiBcImZcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgdXY6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiBbXSB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbmVVbmlmb3JtcyA9IHtcbiAgICAgICAgICBzcGhlcmVUZXh0dXJlOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogc3BoZXJlSW1nIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXZzID0gW1xuICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMCksXG4gICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAxKSxcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMigwLjUsIDEpXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGNvbmVHZW9tID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICAgIGxldCBpeDIxID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIGlmIChzd2NKU09OW25vZGVdLnBhcmVudCAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIFBhaW50IHR3byB0cmlhbmdsZXMgdG8gbWFrZSBhIGNvbmUtaW1wb3N0ZXIgcXVhZHJpbGF0ZXJhbFxuICAgICAgICAgICAgLy8gVHJpYW5nbGUgIzFcbiAgICAgICAgICAgIGNvbnN0IGNvbmUgPSB0aGlzLmdlbmVyYXRlQ29uZShcbiAgICAgICAgICAgICAgc3djSlNPTltub2RlXSxcbiAgICAgICAgICAgICAgc3djSlNPTltzd2NKU09OW25vZGVdLnBhcmVudF0sXG4gICAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IG5vZGVDb2xvciA9IGNvbmUuY2hpbGQuY29sb3I7XG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgICAgbm9kZUNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhcmVudFJhZGl1cyA9IGNvbmUucGFyZW50LnJhZGl1cyAqIHRoaXMucmFkaXVzX3NjYWxlX2ZhY3RvcjtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbl9yYWRpdXMgJiYgcGFyZW50UmFkaXVzIDwgdGhpcy5taW5fcmFkaXVzKSB7XG4gICAgICAgICAgICAgIHBhcmVudFJhZGl1cyA9IHRoaXMubWluX3JhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNoaWxkUmFkaXVzID0gY29uZS5jaGlsZC5yYWRpdXMgKiB0aGlzLnJhZGl1c19zY2FsZV9mYWN0b3I7XG4gICAgICAgICAgICBpZiAodGhpcy5taW5fcmFkaXVzICYmIGNoaWxkUmFkaXVzIDwgdGhpcy5taW5fcmFkaXVzKSB7XG4gICAgICAgICAgICAgIGNoaWxkUmFkaXVzID0gdGhpcy5taW5fcmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggMVxuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2goY2hpbGRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMF0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1swXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcblxuICAgICAgICAgICAgLy8gdmVydGV4IDJcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKGNoaWxkUmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzFdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMV0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAzXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChwYXJlbnRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMl0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1syXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcblxuICAgICAgICAgICAgLy8gVHJpYW5nbGUgIzJcbiAgICAgICAgICAgIC8vIFBhcmVudFxuICAgICAgICAgICAgbm9kZUNvbG9yID0gY29uZS5wYXJlbnQuY29sb3I7XG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgICAgbm9kZUNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdmVydGV4IDFcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKHBhcmVudFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1swXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzBdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggMlxuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2gocGFyZW50UmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzFdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMV0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAzXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChjaGlsZFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1syXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzJdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmVHZW9tLnNldEluZGV4KFxuICAgICAgICAgIG5ldyBUSFJFRS5VaW50MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZSwgMSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uZUdlb20uc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwicG9zaXRpb25cIixcbiAgICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZSwgMylcbiAgICAgICAgKTtcbiAgICAgICAgY29uZUdlb20uc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwicmFkaXVzXCIsXG4gICAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLCAxKVxuICAgICAgICApO1xuICAgICAgICBjb25lR2VvbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJ0eXBlQ29sb3JcIixcbiAgICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUsIDMpXG4gICAgICAgICk7XG4gICAgICAgIGNvbmVHZW9tLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcIm5vcm1hbFwiLFxuICAgICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUsIDMpXG4gICAgICAgICk7XG4gICAgICAgIGNvbmVHZW9tLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInV2XCIsXG4gICAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMudXYudmFsdWUsIDIpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY29uZU1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICB1bmlmb3JtczogY29uZVVuaWZvcm1zLFxuICAgICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4U2hhZGVyQ29uZSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZnJhZ21lbnRTaGFkZXJDb25lLFxuICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgIGRlcHRoVGVzdDogdHJ1ZSxcbiAgICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgICAgICAgIGFscGhhVGVzdDogMC41IC8vIGlmIGhhdmluZyB0cmFuc3BhcmVuY3kgaXNzdWVzLCB0cnkgaW5jbHVkaW5nOiBhbHBoYVRlc3Q6IDAuNSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uZU1hdGVyaWFsLmV4dGVuc2lvbnMuZnJhZ0RlcHRoID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBjb25lTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGNvbmVHZW9tLCBjb25lTWF0ZXJpYWwpO1xuXG4gICAgICAgIGNvbmVNYXRlcmlhbC5vbkJlZm9yZUNvbXBpbGUgPSBzaGFkZXIgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBzaGFkZXIgKVxuICAgICAgICAgIHNoYWRlci51bmlmb3Jtcy5hbHBoYSA9IHsgdmFsdWU6IDAgfTtcbiAgICAgICAgICBzaGFkZXIudmVydGV4U2hhZGVyID0gYHVuaWZvcm0gZmxvYXQgYWxwaGE7XFxuJHtzaGFkZXIudmVydGV4U2hhZGVyfWA7XG4gICAgICAgICAgc2hhZGVyLnZlcnRleFNoYWRlciA9IHNoYWRlci52ZXJ0ZXhTaGFkZXIucmVwbGFjZShcbiAgICAgICAgICAgIFwiI2luY2x1ZGUgPGJlZ2luX3ZlcnRleD5cIixcbiAgICAgICAgICAgIFtcInZBbHBoYSA9IGFscGhhXCJdLmpvaW4oXCJcXG5cIilcbiAgICAgICAgICApO1xuICAgICAgICAgIG1hdGVyaWFsU2hhZGVyID0gc2hhZGVyO1xuXG4gICAgICAgICAgbWF0ZXJpYWxTaGFkZXIudW5pZm9ybXMuYWxwaGEudmFsdWUgPSAwLjk7XG5cbiAgICAgICAgICBjb25lTWVzaC51c2VyRGF0YSA9IHsgbWF0ZXJpYWxTaGFkZXIgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBuZXVyb24uYWRkKGNvbmVNZXNoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc3BoZXJlIG1vZGUgcmVuZGVycyAzZCBzcGhlcmVcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT09IFwic3BoZXJlXCIpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IHNwaGVyZSA9IHRoaXMuZ2VuZXJhdGVTcGhlcmUoc3djSlNPTltub2RlXSk7XG4gICAgICAgIG5ldXJvbi5hZGQoc3BoZXJlKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd19jb25lcykge1xuICAgICAgICAgIGlmIChzd2NKU09OW25vZGVdLnBhcmVudCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmUgPSB0aGlzLmdlbmVyYXRlQ29uZUdlb21ldHJ5KFxuICAgICAgICAgICAgICBzd2NKU09OW25vZGVdLFxuICAgICAgICAgICAgICBzd2NKU09OW3N3Y0pTT05bbm9kZV0ucGFyZW50XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ldXJvbi5hZGQoY29uZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBcInNrZWxldG9uXCIgfHwgdGhpcy5zaG93X2NvbmVzID09PSBmYWxzZSkge1xuICAgICAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJza2VsZXRvblwiKSBtYXRlcmlhbC5jb2xvci5zZXQodGhpcy5jb2xvcnNbMF0pO1xuICAgICAgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcbiAgICAgIE9iamVjdC5rZXlzKHN3Y0pTT04pLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChzd2NKU09OW25vZGVdLnBhcmVudCAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IGdlbmVyYXRlU2tlbGV0b24oXG4gICAgICAgICAgICBzd2NKU09OW25vZGVdLFxuICAgICAgICAgICAgc3djSlNPTltzd2NKU09OW25vZGVdLnBhcmVudF1cbiAgICAgICAgICApO1xuICAgICAgICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2godmVydGljZXMuY2hpbGQpO1xuICAgICAgICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2godmVydGljZXMucGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBsaW5lID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgbmV1cm9uLmFkZChsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldXJvbjtcbiAgfVxuXG4gIC8vIGNvcGllZCBmcm9tIGV4YW1wbGUgYXQgaHR0cDovL2pzZmlkZGxlLm5ldC9iOTd6ZDFhMy8xNi9cbiAgYWRkQXhlcygpIHtcbiAgICBjb25zdCBDQU5WQVNfV0lEVEggPSAyMDA7XG4gICAgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDIwMDtcbiAgICBjb25zdCBheGVzUmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlciggeyBhbHBoYTogdHJ1ZSB9ICk7IC8vIGNsZWFyXG4gICAgYXhlc1JlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4MDAwMDAwLCAwICk7XG4gICAgYXhlc1JlbmRlcmVyLnNldFNpemUoIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCApO1xuICAgIHRoaXMuYXhlc1JlbmRlcmVyID0gYXhlc1JlbmRlcmVyO1xuXG4gICAgY29uc3QgYXhlc0NhbnZhcyA9IHRoaXMuZG9tX2VsZW1lbnQuYXBwZW5kQ2hpbGQoIGF4ZXNSZW5kZXJlci5kb21FbGVtZW50ICk7XG4gICAgYXhlc0NhbnZhcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2F4ZXNDYW52YXMnKTtcbiAgICBheGVzQ2FudmFzLnN0eWxlLndpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgIGF4ZXNDYW52YXMuc3R5bGUuaGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICBheGVzQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGF4ZXNDYW52YXMuc3R5bGUuekluZGV4ID0gMjAwO1xuICAgIGF4ZXNDYW52YXMuc3R5bGUuYm90dG9tID0gXCI1cHhcIjtcbiAgICBheGVzQ2FudmFzLnN0eWxlLnJpZ2h0ID0gXCI1cHhcIjtcblxuXG5cbiAgICBjb25zdCBheGVzQ2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA1MCwgQ0FOVkFTX1dJRFRIIC8gQ0FOVkFTX0hFSUdIVCwgMSwgMTAwMCApO1xuICAgIGF4ZXNDYW1lcmEudXAgPSB0aGlzLmNhbWVyYS51cDsgLy8gaW1wb3J0YW50IVxuICAgIHRoaXMuYXhlc0NhbWVyYSA9IGF4ZXNDYW1lcmE7XG5cbiAgICBjb25zdCBheGVzU2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBheGVzUG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsMCwwICk7XG4gICAgYXhlc1NjZW5lLmFkZCggbmV3IFRIUkVFLkFycm93SGVscGVyKCBuZXcgVEhSRUUuVmVjdG9yMyggMSwwLDAgKSwgYXhlc1BvcywgNjAsIDB4RkYwMDAwLCAyMCwgMTAgKSApO1xuICAgIGF4ZXNTY2VuZS5hZGQoIG5ldyBUSFJFRS5BcnJvd0hlbHBlciggbmV3IFRIUkVFLlZlY3RvcjMoIDAsMSwwICksIGF4ZXNQb3MsIDYwLCAweDAwRkYwMCwgMjAsIDEwICkgKTtcbiAgICBheGVzU2NlbmUuYWRkKCBuZXcgVEhSRUUuQXJyb3dIZWxwZXIoIG5ldyBUSFJFRS5WZWN0b3IzKCAwLDAsMSApLCBheGVzUG9zLCA2MCwgMHgwMDAwRkYsIDIwLCAxMCApICk7XG4gICAgdGhpcy5heGVzU2NlbmUgPSBheGVzU2NlbmU7XG4gIH1cblxuICAvLyBTZXRzIHVwIHRocmVlLmpzIHNjZW5lXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuZWZmZWN0ID09PSBcIm5vZWZmZWN0XCIpIHRoaXMuZWZmZWN0ID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgdXAgY29sb3JzIGFuZCBtYXRlcmlhbHMgYmFzZWQgb24gY29sb3IgYXJyYXlcbiAgICB0aGlzLnRocmVlX2NvbG9ycyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgIHRoaXMudGhyZWVfY29sb3JzLnB1c2gobmV3IFRIUkVFLkNvbG9yKHRoaXMuY29sb3JzW2NvbG9yXSkpO1xuICAgIH0pXG4gICAgdGhpcy50aHJlZV9tYXRlcmlhbHMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbG9ycykuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICB0aGlzLnRocmVlX21hdGVyaWFscy5wdXNoKFxuICAgICAgICBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yc1tjb2xvcl0sXG4gICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIHNldHVwIHJlbmRlclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0wxUmVuZGVyZXIoe1xuICAgICAgYW50aWFsaWFzOiB0cnVlIC8vIHRvIGdldCBzbW9vdGhlciBvdXRwdXRcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IsIDEpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLldJRFRILCB0aGlzLkhFSUdIVCk7XG4gICAgdGhpcy5kb21fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgLy8gdG8gbGV0IG9uLXRvcCByZW5kZXJpbmcgd29ya1xuICAgIHRoaXMucmVuZGVyZXIuYXV0b0NsZWFyID0gZmFsc2U7XG5cbiAgICAvLyBjcmVhdGUgYSBzY2VuZVxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgIC8vIHB1dCBhIGNhbWVyYSBpbiB0aGUgc2NlbmVcbiAgICB0aGlzLmZvdiA9IDQ1O1xuICAgIGNvbnN0IGNhbWVyYVBvc2l0aW9uID0gdGhpcy5tYXhWb2x1bWVTaXplO1xuICAgIGNvbnN0IGZhckNsaXBwaW5nID0gY2FtZXJhUG9zaXRpb24gKiAyO1xuICAgIGNvbnN0IG5lYXJDbGlwcGluZyA9IDEwO1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgdGhpcy5mb3YsXG4gICAgICB0aGlzLldJRFRIIC8gdGhpcy5IRUlHSFQsXG4gICAgICBuZWFyQ2xpcHBpbmcsXG4gICAgICBmYXJDbGlwcGluZ1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5zaG93U3RhdHMpIHtcbiAgICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICAgIHRoaXMuc3RhdHMuc2hvd1BhbmVsKDApO1xuICAgICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnpJbmRleCA9IDEwMDtcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb20pO1xuICAgIH1cblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSBjYW1lcmFQb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLnNob3dBeGVzKSB7XG4gICAgICB0aGlzLmFkZEF4ZXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mbGlwID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNhbWVyYS51cC5zZXRZKC0xKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zd2MpIHtcbiAgICAgIGNvbnN0IG5ldXJvbiA9IHRoaXMuY3JlYXRlTmV1cm9uKHRoaXMuc3djKTtcbiAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gY2FsY3VsYXRlQm91bmRpbmdCb3godGhpcy5zd2MpO1xuICAgICAgY29uc3QgYm91bmRpbmdTcGhlcmUgPSBjYWxjdWxhdGVCb3VuZGluZ1NwaGVyZSh0aGlzLnN3YywgYm91bmRpbmdCb3gpO1xuICAgICAgLy8gc3RvcmUgbmV1cm9uIHN0YXR1cyBhbmQgYm91bmRpbmcgc3BoZXJlIGZvciBsYXRlciB1c2VcbiAgICAgIC8vIHdoZW4gcmVzZXR0aW5nIHRoZSB2aWV3LlxuICAgICAgbmV1cm9uLmlzTmV1cm9uID0gdHJ1ZTtcbiAgICAgIG5ldXJvbi5ib3VuZGluZ1NwaGVyZSA9IGJvdW5kaW5nU3BoZXJlO1xuICAgICAgdGhpcy5zY2VuZS5hZGQobmV1cm9uKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgZWxlbWVudHMgdGhhdCBtYXkgYmUgcmVuZGVyZWQgb24gdG9wXG4gICAgdGhpcy5zY2VuZU9uVG9wYWJsZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgaWYgKHRoaXMubWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IG1FbGVtZW50ID0gY3JlYXRlTWV0YWRhdGFFbGVtZW50KHRoaXMubWV0YWRhdGEsIHRoaXMuY29sb3JzKTtcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQuYXBwZW5kQ2hpbGQobUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tDb250cm9scyA9IG5ldyBPcmJpdFVubGltaXRlZENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLmRvbV9lbGVtZW50KTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMubWF4RGlzdGFuY2UgPSBjYW1lcmFQb3NpdGlvbjtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMubWluRGlzdGFuY2UgPSAxNTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICAvLyBUT0RPOiBoYXZlIGEgY2FsbGJhY2sgaGVyZSB0aGF0IHJlcG9ydHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlXG4gICAgLy8gY2FtZXJhLiBUaGF0IHdheSB3ZSBjYW4gc3RvcmUgaXQgaW4gdGhlIHN0YXRlIGFuZCByZXN0b3JlIGZyb20gdGhlcmUuXG4gICAgdGhpcy50cmFja0NvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FtZXJhQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbjogcG9zIH0gPSB0aGlzLmNhbWVyYTtcbiAgICAgICAgdGhpcy5jYW1lcmFDaGFuZ2VDYWxsYmFjayh7IHg6IHBvcy54LCB5OiBwb3MueSwgejogcG9zLnogfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJheWNhc3Rlci5wYXJhbXMuUG9pbnRzLnRocmVzaG9sZCA9IERFRkFVTFRfUE9JTlRfVEhSRVNIT0xEO1xuXG4gICAgdGhpcy5kb21fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuICB9XG5cbiAgY2FtZXJhQ29vcmRzKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb246IHBvcyB9ID0gdGhpcy5jYW1lcmE7XG4gICAgcmV0dXJuIHsgeDogcG9zLngsIHk6IHBvcy55LCB6OiBwb3MueiB9O1xuICB9XG5cbiAgY2FtZXJhVGFyZ2V0KCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSB0aGlzLnRyYWNrQ29udHJvbHM7XG4gICAgcmV0dXJuIHt4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnksIHo6IHRhcmdldC56IH07XG4gIH1cblxuICByZXNldFZpZXcoKSB7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnJlc2V0KCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMuY2FtZXJhLnVwLnNldCgwLDEsMCk7XG4gIH1cblxuICByZXN0b3JlVmlldyh4ID0gMCwgeSA9IDAsIHogPSAwLCB0YXJnZXQpIHtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMub2JqZWN0LnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0LnNldCh0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC56KTtcbiAgICB9XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcmVzZXRBcm91bmRGaXJzdE5ldXJvbih7ZnJvbnRUb0JhY2t9ID0ge2Zyb250VG9CYWNrOiB0cnVlfSkge1xuICAgIGNvbnN0IG5ldXJvbnMgPSB0aGlzLnNjZW5lLmNoaWxkcmVuLmZpbHRlcihjID0+IGMuaXNOZXVyb24pO1xuICAgIGlmIChuZXVyb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IG5ldXJvbnNbMF0uYm91bmRpbmdTcGhlcmUuY2VudGVyO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVDYW1lcmFQb3NpdGlvbih0aGlzLmZvdiwgbmV1cm9uc1swXS5ib3VuZGluZ1NwaGVyZSwgZnJvbnRUb0JhY2ssIHRoaXMubWF4Vm9sdW1lU2l6ZSk7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudXBkYXRlKCk7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0LnNldCh0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC56KTtcbiAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICAgIHRoaXMuY2FtZXJhLnVwLnNldCgwLDEsMCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETzogYWx0IGNsaWNrIHNob3VsZCB0YXJnZXQgbWVzaGVzIGFuZCBjZW50ZXIgdGhlIG9yYml0IGNvbnRyb2xzXG4gIC8vIG9uIHRoZW0gaWYgaW50ZXJzZWN0ZWQuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5kb21fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIG1vdXNlLnggPSAoKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gdGhpcy5XSURUSCkgKiAyIC0gMTtcbiAgICBtb3VzZS55ID0gLSgoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIHRoaXMuSEVJR0hUKSAqIDIgKyAxO1xuXG4gICAgdGhpcy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShtb3VzZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoXG4gICAgICBbXS5jb25jYXQodGhpcy5zY2VuZS5jaGlsZHJlbiwgdGhpcy5zY2VuZU9uVG9wYWJsZS5jaGlsZHJlbiksXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIGNvbnN0IHBvaW50cyA9IGludGVyc2VjdHNcbiAgICAgIC5maWx0ZXIobyA9PiBvLm9iamVjdC50eXBlID09PSBcIlBvaW50c1wiKVxuICAgICAgLmZpbHRlcihvID0+IG8ub2JqZWN0LnVzZXJEYXRhLm1hdGVyaWFsU2hhZGVyLnVuaWZvcm1zLmFscGhhLnZhbHVlID4gMC4wKVxuICAgICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICAgIGEuZGlzdGFuY2VUb1JheSA9PT0gYi5kaXN0YW5jZVRvUmF5XG4gICAgICAgICAgPyBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZVxuICAgICAgICAgIDogYS5kaXN0YW5jZVRvUmF5IC0gYi5kaXN0YW5jZVRvUmF5XG4gICAgICApO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3RPYmplY3QgPSBwb2ludHNbMF07XG5cbiAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgaWYgKHRoaXMub25fdG9nZ2xlX25vZGUpIHtcbiAgICAgICAgICBjb25zdCBzYW1wbGVOdW1iZXIgPVxuICAgICAgICAgICAgaW50ZXJzZWN0T2JqZWN0Lm9iamVjdC51c2VyRGF0YS5pbmRleExvb2t1cFtpbnRlcnNlY3RPYmplY3QuaW5kZXhdO1xuICAgICAgICAgIGNvbnN0IHRyYWNpbmdJZCA9IGludGVyc2VjdE9iamVjdC5vYmplY3QucGFyZW50Lm5hbWU7XG5cbiAgICAgICAgICB0aGlzLm9uX3RvZ2dsZV9ub2RlKHRyYWNpbmdJZCwgc2FtcGxlTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMudHJhY2tDb250cm9scy5jbGlja2VkKSB7XG4gICAgICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnRhcmdldCA9IHBvaW50c1swXS5wb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uX3NlbGVjdF9ub2RlKSB7XG4gICAgICAgICAgY29uc3Qgc2FtcGxlTnVtYmVyID1cbiAgICAgICAgICAgIGludGVyc2VjdE9iamVjdC5vYmplY3QudXNlckRhdGEuaW5kZXhMb29rdXBbaW50ZXJzZWN0T2JqZWN0LmluZGV4XTtcbiAgICAgICAgICBjb25zdCB0cmFjaW5nSWQgPSBpbnRlcnNlY3RPYmplY3Qub2JqZWN0LnBhcmVudC5uYW1lO1xuXG4gICAgICAgICAgdGhpcy5vbl9zZWxlY3Rfbm9kZSh0cmFjaW5nSWQsIHNhbXBsZU51bWJlciwgZXZlbnQsIHBvaW50c1swXS5wb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhbmltYXRpb24gbG9vcFxuICBhbmltYXRlKHRpbWVzdGFtcCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5zdGF0cykge1xuICAgICAgdGhpcy5zdGF0cy5iZWdpbigpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubGFzdF9hbmltX3RpbWVzdGFtcCkge1xuICAgICAgdGhpcy5sYXN0X2FuaW1fdGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRpbWVzdGFtcCAtIHRoaXMubGFzdF9hbmltX3RpbWVzdGFtcCA+IDUwKSB7XG4gICAgICB0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICBpZiAodGhpcy5hbmltYXRlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuc2hvd0F4ZXMpIHtcbiAgICAgICAgdGhpcy5heGVzQ2FtZXJhLnBvc2l0aW9uLmNvcHkoIHRoaXMuY2FtZXJhLnBvc2l0aW9uICk7XG4gICAgICAgIHRoaXMuYXhlc0NhbWVyYS5wb3NpdGlvbi5zdWIoIHRoaXMudHJhY2tDb250cm9scy50YXJnZXQgKTtcbiAgICAgICAgdGhpcy5heGVzQ2FtZXJhLnBvc2l0aW9uLnNldExlbmd0aCggMzAwICk7XG4gICAgICAgIHRoaXMuYXhlc0NhbWVyYS5sb29rQXQoIHRoaXMuYXhlc1NjZW5lLnBvc2l0aW9uICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzLmVuZCgpO1xuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8vIHJlbmRlciB0aGUgc2NlbmVcbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG5cbiAgICBpZiAodGhpcy5vblRvcCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5jbGVhckRlcHRoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZU9uVG9wYWJsZSwgdGhpcy5jYW1lcmEpO1xuICAgIGlmICh0aGlzLnNob3dBeGVzKSB7XG4gICAgICB0aGlzLmF4ZXNSZW5kZXJlci5yZW5kZXIodGhpcy5heGVzU2NlbmUsIHRoaXMuYXhlc0NhbWVyYSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYSBuZXVyb24gZnJvbSBhbiBzd2MgZmlsZSBpbnRvIHRoZSBjdXJyZW50IHNjZW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgLSB1bmlxdWUgbmFtZSBmb3IgdGhlIG5ldXJvblxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNvbG9yIC0gaGV4YWRlY2ltYWwgc3RyaW5nIHRvIHNldCB0aGUgY29sb3Igb2YgdGhlIG5ldXJvblxuICAgKiBAcGFyYW0ge0pTT059IG5vZGVzIC0gSlNPTiBzdHJpbmcgZ2VuZXJhdGVkIGZyb20gc3djUGFyc2VyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZUNhbWVyYT10cnVlXSAtIFNob3VsZCB0aGUgY2FtZXJhIHBvc2l0aW9uIHVwZGF0ZVxuICAgKiBhZnRlciB0aGUgbmV1cm9uIGlzIGFkZGVkIHRvIHRoZSBzY2VuZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb25Ub3BhYmxlPWZhbHNlXSAtIElmIHRydWUsIHRoZSBuZXVyb24gd2lsbCBiZSByZW5kZXJlZFxuICAgKiBvbiB0b3Agb2YgKGkuZS4sIG5vdCBvY2NsdWRlZCBieSkgb3RoZXIgbmV1cm9ucyB0aGF0IGhhZCBvblRvcGFibGU9ZmFsc2VcbiAgICogQHBhcmFtIHtib29sZWFufSBbZnJvbnRUb0JhY2s9ZmFsc2VdIC0gaWYgdHJ1ZSwgdGhlbiBsb29rIGRvd24gdGhlIFotc3RhY2sgZnJvbSBwb2ludCAwXG4gICAqIEByZXR1cm5zIHtudWxsfVxuICAgKi9cbiAgbG9hZE5ldXJvbihmaWxlbmFtZSwgY29sb3IsIG5vZGVzLCB1cGRhdGVDYW1lcmE9dHJ1ZSwgb25Ub3BhYmxlPWZhbHNlLCBmcm9udFRvQmFjaz1mYWxzZSkge1xuICAgIGNvbnN0IG5ldXJvbiA9IHRoaXMuY3JlYXRlTmV1cm9uKG5vZGVzLCBjb2xvcik7XG4gICAgY29uc3QgYm91bmRpbmdCb3ggPSBjYWxjdWxhdGVCb3VuZGluZ0JveChub2Rlcyk7XG4gICAgY29uc3QgYm91bmRpbmdTcGhlcmUgPSBjYWxjdWxhdGVCb3VuZGluZ1NwaGVyZShub2RlcywgYm91bmRpbmdCb3gpO1xuICAgIGNvbnN0IHRhcmdldCA9IGJvdW5kaW5nU3BoZXJlLmNlbnRlcjtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZUNhbWVyYVBvc2l0aW9uKHRoaXMuZm92LCBib3VuZGluZ1NwaGVyZSwgZnJvbnRUb0JhY2ssIHRoaXMubWF4Vm9sdW1lU2l6ZSk7XG5cbiAgICBpZiAodXBkYXRlQ2FtZXJhKSB7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudXBkYXRlKCk7XG4gICAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0LnNldCh0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC56KTtcbiAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICB9XG5cbiAgICBuZXVyb24ubmFtZSA9IGZpbGVuYW1lO1xuICAgIC8vIHN0b3JlIG5ldXJvbiBzdGF0dXMgYW5kIGJvdW5kaW5nIHNwaGVyZSBmb3IgbGF0ZXIgdXNlXG4gICAgLy8gd2hlbiByZXNldHRpbmcgdGhlIHZpZXcuXG4gICAgbmV1cm9uLmlzTmV1cm9uID0gdHJ1ZTtcbiAgICBuZXVyb24uYm91bmRpbmdTcGhlcmUgPSBib3VuZGluZ1NwaGVyZTtcbiAgICBjb25zdCBzY2VuZSA9IG9uVG9wYWJsZSA/IHRoaXMuc2NlbmVPblRvcGFibGUgOiB0aGlzLnNjZW5lO1xuICAgIHNjZW5lLmFkZChuZXVyb24pXG4gIH1cblxuICAvLyB1c2Ugb25Ub3BhYmxlPXRydWUgdG8gY29ycmVzcG9uZCB0byBsb2FkTmV1cm9uKC4uLiwgb25Ub3BhYmxlPXRydWUpXG4gIG5ldXJvbkxvYWRlZChmaWxlbmFtZSwgb25Ub3BhYmxlPWZhbHNlKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBvblRvcGFibGUgPyB0aGlzLnNjZW5lT25Ub3BhYmxlIDogdGhpcy5zY2VuZTtcbiAgICByZXR1cm4gKHNjZW5lLmdldE9iamVjdEJ5TmFtZShmaWxlbmFtZSkgIT09IHVuZGVmaW5lZCk7XG4gIH1cblxuICAvLyB1c2Ugb25Ub3BhYmxlPXRydWUgdG8gY29ycmVzcG9uZCB0byBsb2FkTmV1cm9uKC4uLiwgb25Ub3BhYmxlPXRydWUpXG4gIHVubG9hZE5ldXJvbihmaWxlbmFtZSwgb25Ub3BhYmxlPWZhbHNlKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBvblRvcGFibGUgPyB0aGlzLnNjZW5lT25Ub3BhYmxlIDogdGhpcy5zY2VuZTtcbiAgICBjb25zdCBuZXVyb24gPSBzY2VuZS5nZXRPYmplY3RCeU5hbWUoZmlsZW5hbWUpO1xuICAgIHNjZW5lLnJlbW92ZShuZXVyb24pO1xuICB9XG5cbiAgc2V0TmV1cm9uVmlzaWJsZShpZCwgdmlzaWJsZSwgb25Ub3BhYmxlPWZhbHNlKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBvblRvcGFibGUgPyB0aGlzLnNjZW5lT25Ub3BhYmxlIDogdGhpcy5zY2VuZTtcbiAgICBjb25zdCBuZXVyb24gPSBzY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuICAgIGlmIChuZXVyb24pIHtcbiAgICAgIG5ldXJvbi52aXNpYmxlID0gdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICAvLyBUT0RPOiBnZXQgdGhpcyB0byB3b3JrIHdpdGggdGhlIHBhcnRpY2xlIG1vZGVcblxuICBzZXROZXVyb25EaXNwbGF5TGV2ZWwoaWQsIG9wYWNpdHkpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSBcInBhcnRpY2xlXCIpIHtcbiAgICAgIGNvbnN0IG5ldXJvbiA9IHRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGlkKTtcblxuICAgICAgaWYgKG5ldXJvbikge1xuICAgICAgICBuZXVyb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkLnVzZXJEYXRhLm1hdGVyaWFsU2hhZGVyKSB7XG4gICAgICAgICAgICBjaGlsZC51c2VyRGF0YS5tYXRlcmlhbFNoYWRlci51bmlmb3Jtcy5hbHBoYS52YWx1ZSA9IG9wYWNpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkQ29tcGFydG1lbnQoaWQsIGNvbG9yLCBnZW9tZXRyeURhdGEsIHVwZGF0ZUNhbWVyYT10cnVlKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLk9CSkxvYWRlcigpO1xuICAgIGxldCBwYXJzZWQgPSBsb2FkZXIucGFyc2UoZ2VvbWV0cnlEYXRhKTtcbiAgICBwYXJzZWQgPSBhcHBseVNlbWlUcmFuc3BhcmVudFNoYWRlcihwYXJzZWQsIGNvbG9yKTtcbiAgICBwYXJzZWQubmFtZSA9IGlkO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQocGFyc2VkKTtcbiAgICBpZiAodXBkYXRlQ2FtZXJhKSB7XG4gICAgICB0aGlzLmNlbnRlckNhbWVyYUFyb3VuZENvbXBhcnRtZW50KHBhcnNlZCk7XG4gICAgfVxuICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbG9hZENvbXBhcnRtZW50RnJvbVVSTChpZCwgY29sb3IsIFVSTCwgdXBkYXRlQ2FtZXJhPXRydWUpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTG9hZGVyKCk7XG5cbiAgICBsb2FkZXIubG9hZChVUkwsIG9iamVjdCA9PiB7XG4gICAgICBjb25zdCBleGlzdHMgPSB0aGlzLnNjZW5lLmdldE9iamVjdEJ5TmFtZShpZCk7XG4gICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICBjb25zdCBzaGFkZWRPYmplY3QgPSBhcHBseVNlbWlUcmFuc3BhcmVudFNoYWRlcihvYmplY3QsIGNvbG9yKTtcbiAgICAgICAgc2hhZGVkT2JqZWN0Lm5hbWUgPSBpZDtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQob2JqZWN0KTtcbiAgICAgICAgaWYgKHVwZGF0ZUNhbWVyYSkge1xuICAgICAgICAgIHRoaXMuY2VudGVyQ2FtZXJhQXJvdW5kQ29tcGFydG1lbnQoc2hhZGVkT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFydG1lbnRMb2FkZWQoaWQpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGlkKSAhPT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGNvbXBhcnRtZW50IG9iamVjdCwgcGxhY2UgdGhlIGNhbWVyYSBmb2N1cyBvbiBpdC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBhcnRtZW50IC0gVGhyZWUgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29tcGFydG1lbnRcbiAgICogQHJldHVybiBudWxsXG4gICAqL1xuICBjZW50ZXJDYW1lcmFBcm91bmRDb21wYXJ0bWVudChjb21wYXJ0bWVudCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gbmV3IFRIUkVFLkJveDMoKS5zZXRGcm9tT2JqZWN0KGNvbXBhcnRtZW50KTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoYm91bmRpbmdCb3gubWluLnggLSAxMCwgYm91bmRpbmdCb3gubWluLnkgLSAxMCwgYm91bmRpbmdCb3gubWluLnogLSAxMCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIGNvbnN0IGJveENlbnRlciA9IGJvdW5kaW5nQm94LmdldENlbnRlcigpO1xuICAgIHRoaXMudHJhY2tDb250cm9scy50YXJnZXQgPSBib3hDZW50ZXI7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHVubG9hZENvbXBhcnRtZW50KGlkKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPYmogPSB0aGlzLnNjZW5lLmdldE9iamVjdEJ5TmFtZShpZCk7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmUoc2VsZWN0ZWRPYmopO1xuICB9XG5cbiAgc2V0Q29tcGFydG1lbnRWaXNpYmxlKGlkLCB2aXNpYmxlKSB7XG4gICAgY29uc3QgY29tcGFydG1lbnQgPSB0aGlzLnNjZW5lLmdldE9iamVjdEJ5TmFtZShpZCk7XG5cbiAgICBpZiAoY29tcGFydG1lbnQpIHtcbiAgICAgIGNvbXBhcnRtZW50LnZpc2libGUgPSB2aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuSEVJR0hUID0gaGVpZ2h0O1xuICAgIHRoaXMuV0lEVEggPSB3aWR0aDtcbiAgfVxuXG4gIHNldEJhY2tncm91bmQoY29sb3IpIHtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwgMSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==