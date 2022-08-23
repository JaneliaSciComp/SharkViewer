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

  // const float = "-?\\d*(?:\\.\\d+)?";
  const float = "[+\\-]?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+\\-]?\\d+)?";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmtfdmlld2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7O0FBRWIsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjs7QUFFbEIsbUJBQU8sQ0FBQyx5R0FBMEM7O0FBRWxELG1CQUFPLENBQUMsdUhBQWlEOztBQUV6RCxvQ0FBb0MsbUJBQU8sQ0FBQyxvQkFBTzs7QUFFbkQsaURBQWlELGdEQUFnRCx1Q0FBdUMsc0NBQXNDLG9GQUFvRiw0REFBNEQ7O0FBRTlULHFEQUFxRCw2Q0FBNkMsY0FBYyw4RUFBOEUsU0FBUyxvQkFBb0IsbURBQW1ELCtCQUErQix5QkFBeUIsaUJBQWlCLHNGQUFzRix1QkFBdUIsMkVBQTJFLHFGQUFxRixzQ0FBc0MsNENBQTRDLE9BQU8sOEJBQThCLHlCQUF5QixhQUFhLDBCQUEwQjs7QUFFM3hCLGtEQUFrRCwwQ0FBMEM7O0FBRTVGLDJDQUEyQywrREFBK0QsNkVBQTZFLHlFQUF5RSxlQUFlLHVEQUF1RCxHQUFHOztBQUV6VSxpQ0FBaUMsNEVBQTRFLGlCQUFpQixhQUFhOztBQUUzSSxpQ0FBaUMsNkRBQTZELHlDQUF5Qyw4Q0FBOEMsaUNBQWlDLG1EQUFtRCwyREFBMkQsT0FBTyx5Q0FBeUM7O0FBRXBYLGtEQUFrRCwwRUFBMEUsZUFBZTs7QUFFM0ksd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLHVDQUF1Qyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLDRFQUE0RSxJQUFJLGVBQWUsWUFBWTs7QUFFeFQsOEJBQThCLGdHQUFnRyxtREFBbUQ7O0FBRWpMLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlELFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFjOztBQUVkOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxnREFBZ0QsUUFBUTs7QUFFeEQ7QUFDQTs7QUFFQSw0Q0FBNEMsU0FBUzs7QUFFckQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsT0FBTzs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVos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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxxREFBcUQsSUFBSSxvQkFBb0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWMsR0FBRztBQUNyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQyxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixhQUFhLEdBQUcsa0JBQWtCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsTUFBTTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvQGphbmVsaWEvdGhyZWUtb3JiaXQtdW5saW1pdGVkLWNvbnRyb2xzL2Rpc3QvT3JiaXRVbmxpbWl0ZWRDb250cm9scy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvLi9ub2RlX21vZHVsZXMvc3RhdHMuanMvYnVpbGQvc3RhdHMubWluLmpzIiwid2VicGFjazovL3NoYXJrVmlld2VyLy4vbm9kZV9tb2R1bGVzL3RocmVlLW9iai1sb2FkZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL3NyYy92aWV3ZXIvdXRpbC5qcyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci9leHRlcm5hbCB2YXIgXCJUSFJFRVwiIiwid2VicGFjazovL3NoYXJrVmlld2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoYXJrVmlld2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NoYXJrVmlld2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hhcmtWaWV3ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGFya1ZpZXdlci8uL3NyYy9zaGFya192aWV3ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiKTtcblxucmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCIpO1xuXG52YXIgVEhSRUUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwidGhyZWVcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vIFRoZSBzdGF0ZXMgb2YgdGhlIHNpbXBsZSBmaW5pdGUgc3RhdGUgbWFjaGluZSBmb3IgdGhlIHRyYWNrYmFsbHMgaW50ZXJhY3Rpb24uXG4vLyBUaGUgJ0lOREVURVJNSU5BVEUnIHN0YXRlIGlzIGZvciB3aGVuIHRoZSBtb3VzZSBpcyBkb3duIGJ1dCBpdCBoYXMgbm90IHlldCBtb3ZlZFxuLy8gZmFyIGVub3VnaCB0byBrbm93IGlmIGl0IGlzIGEgZHJhZyBvcGVyYXRpb24gKGZvciByb3RhdGlvbikgb3IganVzdCBhIGNsaWNrLlxudmFyIFN0YXRlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIElOQUNUSVZFOiBTeW1ib2woJ0lOQUNUSVZFJyksXG4gIElOREVURVJNSU5BVEU6IFN5bWJvbCgnSU5ERVRFUk1JTkFURScpLFxuICBST1RBVElORzogU3ltYm9sKCdST1RBVElORycpLFxuICBET0xMWUlORzogU3ltYm9sKCdET0xMWUlORycpLFxuICBQQU5OSU5HOiBTeW1ib2woJ1BBTk5JTkcnKVxufSk7XG52YXIgQ2xpY2tUaHJlc2hvbGQgPSAyO1xuXG52YXIgT3JiaXRVbmxpbWl0ZWRDb250cm9scyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1RIUkVFJEV2ZW50RGlzcGF0Y2hlKSB7XG4gIF9pbmhlcml0cyhPcmJpdFVubGltaXRlZENvbnRyb2xzLCBfVEhSRUUkRXZlbnREaXNwYXRjaGUpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoT3JiaXRVbmxpbWl0ZWRDb250cm9scyk7XG5cbiAgZnVuY3Rpb24gT3JiaXRVbmxpbWl0ZWRDb250cm9scyhvYmplY3QsIGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3JiaXRVbmxpbWl0ZWRDb250cm9scyk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlc2V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnRhcmdldC5jb3B5KF90aGlzLnRhcmdldDApO1xuXG4gICAgICBfdGhpcy5vYmplY3QucG9zaXRpb24uY29weShfdGhpcy5wb3NpdGlvbjApO1xuXG4gICAgICBfdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMub2JqZWN0Lmxvb2tBdChfdGhpcy50YXJnZXQpO1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUgIT09IFN0YXRlLlJPVEFUSU5HKSB7XG4gICAgICAgIF90aGlzLmZpeFVwKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoX3RoaXMuY2hhbmdlRXZlbnQpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTW91c2VEb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5JTkRFVEVSTUlOQVRFO1xuICAgICAgX3RoaXMucHJldiA9IG5ldyBUSFJFRS5WZWN0b3IyKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gTWFudWFsbHkgc2V0IHRoZSBmb2N1cywgYmVjYXVzZSBwcmV2ZW50RGVmYXVsdCgpIHByZXZlbnRzIGF1dG9tYXRpYyBzZXR0aW5nLlxuXG4gICAgICBpZiAoX3RoaXMuZG9tRWxlbWVudC5mb2N1cykge1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5vbk1vdXNlVXAsIGZhbHNlKTtcblxuICAgICAgX3RoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIF90aGlzLm9uQ29udGV4dE1lbnUsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk1vdXNlV2hlZWxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5ET0xMWUlORztcbiAgICAgIF90aGlzLnByZXYgPSBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKTtcblxuICAgICAgX3RoaXMuZG9sbHkoMCwgLWV2ZW50LmRlbHRhWSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Nb3VzZU1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmJ1dHRvbnMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIC8vIE9uIG1hY09TLCBhbHRLZXkgaW5kaWNhdGVzIHRoZSAnb3B0aW9uJyBrZXkuXG4gICAgICAgICAgICBfdGhpcy5wYW4oZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnJvdGF0ZShldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX3RoaXMucGFuKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF90aGlzLmRvbGx5KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk1vdXNlVXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlID09PSBTdGF0ZS5ST1RBVElORykge1xuICAgICAgICAvLyBBdCB0aGUgZW5kIG9mIHRoZSBkcmFnZ2luZyBvcGVyYXRpb24sIHJlY29tcHV0ZSB0aGlzLmNhbWVyYS51cCBzbyBpdCBpcyBvcnRob2dvbmFsXG4gICAgICAgIC8vIHRvIHRoZSB2ZWN0b3IgZnJvbSB0aGlzLmNhbWVyYS5wb3NpdGlvbiB0byB0aGlzLnRhcmdldC5cbiAgICAgICAgX3RoaXMuZml4VXAoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xpY2tlZCA9IF90aGlzLnN0YXRlID09PSBTdGF0ZS5JTkRFVEVSTUlOQVRFO1xuICAgICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5JTkFDVElWRTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLm9uTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMub25Nb3VzZVVwLCBmYWxzZSk7XG5cbiAgICAgIF90aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBfdGhpcy5vbkNvbnRleHRNZW51LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25LZXlEb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGRvUGFuID0gZmFsc2U7XG4gICAgICB2YXIgeDtcbiAgICAgIHZhciB5O1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBfdGhpcy5rZXlzLlVQOlxuICAgICAgICAgIGRvUGFuID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgX3JlZiA9IFswLCBfdGhpcy5rZXlQYW5TcGVlZF07XG4gICAgICAgICAgeCA9IF9yZWZbMF07XG4gICAgICAgICAgeSA9IF9yZWZbMV07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBfdGhpcy5rZXlzLkRPV046XG4gICAgICAgICAgZG9QYW4gPSB0cnVlO1xuICAgICAgICAgIHggPSAwO1xuICAgICAgICAgIHkgPSAtX3RoaXMua2V5UGFuU3BlZWQ7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBfdGhpcy5rZXlzLkxFRlQ6XG4gICAgICAgICAgZG9QYW4gPSB0cnVlO1xuICAgICAgICAgIHZhciBfcmVmMiA9IFtfdGhpcy5rZXlQYW5TcGVlZCwgMF07XG4gICAgICAgICAgeCA9IF9yZWYyWzBdO1xuICAgICAgICAgIHkgPSBfcmVmMlsxXTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIF90aGlzLmtleXMuUklHSFQ6XG4gICAgICAgICAgZG9QYW4gPSB0cnVlO1xuICAgICAgICAgIHggPSAtX3RoaXMua2V5UGFuU3BlZWQ7XG4gICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGRvUGFuKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzLnN0YXRlID0gU3RhdGUuUEFOTklORztcbiAgICAgICAgX3RoaXMucHJldiA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xuXG4gICAgICAgIF90aGlzLnBhbih4LCB5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNvbnRleHRNZW51XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gUHJldmVudCB0aGUgY29udGV4dCBtZW51IGZyb20gYXBwZWFyaW5nIHdoZW4gdGhlIHNlY29uZGFyeSBidXR0b24gaXMgY2xpY2tlZCxcbiAgICAgIC8vIHNpbmNlIHRoYXQgYnV0dHRvbiBpcyB1c2VkIGZvciBwYW5uaW5nLlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyb3RhdGVcIiwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHZhciBjdXJyID0gbmV3IFRIUkVFLlZlY3RvcjIoeCwgeSk7XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuSU5ERVRFUk1JTkFURSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBjdXJyLm1hbmhhdHRhbkRpc3RhbmNlVG8oX3RoaXMucHJldik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlID4gQ2xpY2tUaHJlc2hvbGQpIHtcbiAgICAgICAgICBfdGhpcy5zdGF0ZSA9IFN0YXRlLlJPVEFUSU5HOyAvLyBXaGVuIHRoZSBtb3VzZSBoYXMgbW92ZWQgZmFyIGVub3VnaCB0aGF0IHdlIGtub3cgdGhlIHVzZXIgaXMgbm90IGp1c3QgY2xpY2tpbmcsXG4gICAgICAgICAgLy8gcHJlcGFyZSB0byBjb252ZXJ0IGVhY2ggc3Vic2VxdWVudCBtb3VzZSBtb3Rpb24gaW50byBjYW1lcmEgcm90YXRpb24gdXNpbmdcbiAgICAgICAgICAvLyBzcGhlcmljYWwgY29vcmRpbmF0ZXMuICBXZSB1c2Ugc3BoZXJpY2FsIGNvb3JkaW5hdGVzIHRvIGNvbXB1dGUgdGhlIG5ldywgcm90YXRlZFxuICAgICAgICAgIC8vIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEgYXMgaWYgdGhlIGNhbWVyYSBzdGFydGVkIGluIGEgZGVmYXVsdCBvcmllbnRhdGlvbixcbiAgICAgICAgICAvLyBwb3NpdGlvbmVkIG9uIHRoZSBwb3NpdGl2ZSBaIGF4aXMgbG9va2luZyB0b3dhcmRzIHRoZSBvcmlnaW4uICBUaGVuIHdlIG1hcCB0aGVcbiAgICAgICAgICAvLyByb3RhdGVkIHBvc2l0aW9uIHRvIHRoZSBjYW1lcmEncyB0cnVlIGNvbmZpZ3VyYXRpb24uICBUaGUgb3JpZW50YXRpb24gcGFydCBvZiB0aGF0XG4gICAgICAgICAgLy8gbWFwcGluZyBpcyBhIFwiYmFzaXMgbWF0cml4XCIsIHdoaWNoIHJlcG9zaXRpb25zIGEgcG9pbnQgZXhwcmVzc2VkIHJlbGF0aXZlIHRvIHRoZVxuICAgICAgICAgIC8vIHN0YW5kYXJkIFgsIFkgYW4gWiBheGVzIHRvIGEgbmV3IHBvaW50IHdoZXJlIHRoZSBheGVzIGhhdmUgY2hhbmdlZCBhcyBmb2xsb3dzOlxuICAgICAgICAgIC8vIC0gdGhlIFogYXhpcyBoYXMgYmVjb21lIHRoZSAobm9ybWFsaXplZCkgdmVjdG9yIGZyb20gdGhpcy50YXJnZXQgdG8gdGhpcy5vYmplY3QucG9zaXRpb25cbiAgICAgICAgICAvLyAtIHRoZSBZIGF4aXMgaGFzIGJlY29tZSB0aGlzLm9iamVjdC51cFxuICAgICAgICAgIC8vIC0gdGhlIFggYXhpcyBoYXMgYmVjb21lIHRoZSAobm9ybWFsaXplZCkgY3Jvc3MgcHJvZHVjdCBvZiB0aGUgb3RoZXIgdHdvIGF4ZXNcbiAgICAgICAgICAvLyBUaGUgcmVtYWluaW5nIHBhcnQgb2YgdGhlIG1hcHBpbmcgdHJhbnNsYXRlcyB0aGUgb3JpZ2luIHRvIHRoZSBsb2NhdGlvbiBvZlxuICAgICAgICAgIC8vIHRoaXMudGFyZ2V0LlxuXG4gICAgICAgICAgdmFyIHpBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKF90aGlzLm9iamVjdC5wb3NpdGlvbiwgX3RoaXMudGFyZ2V0KTtcbiAgICAgICAgICBfdGhpcy5yYWRpdXMgPSB6QXhpcy5sZW5ndGgoKTtcbiAgICAgICAgICB6QXhpcy5kaXZpZGVTY2FsYXIoX3RoaXMucmFkaXVzKTtcbiAgICAgICAgICB2YXIgeUF4aXMgPSBfdGhpcy5vYmplY3QudXA7XG4gICAgICAgICAgdmFyIHhBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoeUF4aXMsIHpBeGlzKS5ub3JtYWxpemUoKTtcbiAgICAgICAgICBfdGhpcy5iYXNpc01hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZUJhc2lzKHhBeGlzLCB5QXhpcywgekF4aXMpO1xuICAgICAgICAgIHZhciB0ciA9IG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKF90aGlzLnRhcmdldC54LCBfdGhpcy50YXJnZXQueSwgX3RoaXMudGFyZ2V0LnopO1xuXG4gICAgICAgICAgX3RoaXMuYmFzaXNNYXRyaXgucHJlbXVsdGlwbHkodHIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuUk9UQVRJTkcpIHtcbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3LCByb3RhdGVkIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEgYmFzZWQgb24gc3BoZXJpY2FsIGNvb3JkaW5hdGVzLiAgVXNlIHRoZVxuICAgICAgICAvLyBcInBoeXNpY3MgKElTTyBjb252ZW50aW9uKVwiIHZlcnNpb24gb2Ygc3BoZXJpY2FsIGNvb3JkaW5hdGVzIGRlc2NyaWJlZCBoZXJlLCBidXQgd2l0aCB0aGVcbiAgICAgICAgLy8gYXhlcyBzcHVuLCB0byBtYWtlIHRoZWlyIFggYmVjb21lIG91ciBaLCB0aGVpciBZIGJlY29tZSBvdXIgWCBhbmQgdGhlaXIgWiBiZWNvbWUgb3VyIFkuXG4gICAgICAgIC8vIEJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgYXBwcm9hY2gsIHVzaW5nIHNwaGVyaWNhbCBjb29yZGluYXRlczpcbiAgICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BoZXJpY2FsX2Nvb3JkaW5hdGVfc3lzdGVtXG4gICAgICAgIC8vIFRoZSBhbGdvcml0aG0gY29tYmluZXMgZGV0YWlscyBvZiB0aGVzZSB0d28gYXBwcm9hY2hlczpcbiAgICAgICAgLy8gMS4gTGl2aW5nc3RvbiBldCBhbC46XG4gICAgICAgIC8vIGh0dHA6Ly93d3cuY3MudW5jLmVkdS9+bGl2aW5nc3QvbmF2aWdhdGUuaHRtbFxuICAgICAgICAvLyAyLiBSb2huZXI6XG4gICAgICAgIC8vIGh0dHBzOi8vYW5kcmVhc3JvaG5lci5hdC9wb3N0cy9XZWIlMjBEZXZlbG9wbWVudC9KYXZhU2NyaXB0L1NpbXBsZS1vcmJpdGFsLWNhbWVyYS1jb250cm9scy1mb3ItVEhSRUUtanMvXG4gICAgICAgIC8vIExpa2UgTGl2aW5nc3RvbiBldCBhbC4sIHVzZSBzcGhlcmljYWwgY29vcmRpbmF0ZXMgYXMgaWYgdGhlIGNhbWVyYSBpcyBpbiBhIGRlZmF1bHRcbiAgICAgICAgLy8gb3JpZW50YXRpb24sIHBvc2l0aW9uZWQgb24gdGhlIHBvc2l0aXZlIFogYXhpcyBsb29raW5nIHRvd2FyZHMgdGhlIG9yaWdpbiwgYW5kIHRoZW4gdXNlXG4gICAgICAgIC8vIGEgYmFzaXMgbWF0cml4IHRvIG1hcCB0aGUgcmVzdWx0IGFjY29yZGluZyB0byB0aGUgY2FtZXJhJ3MgdHJ1ZSBjb25maWd1cmF0aW9uLiAgV2l0aCB0aGlzXG4gICAgICAgIC8vIGFwcHJvYWNoLCB0aGUgaW5jbGluYXRpb24gKHRoZXRhKSBhbmQgYXppbXV0aCAocGhpKSBhcmUgY29tcHV0ZWQgZGlyZWN0bHkgZnJvbSB0aGUgdGhlXG4gICAgICAgIC8vIGFtb3VudCB0aGUgbW91c2UgaGFzIG1vdmVkIHNpbmNlIHRoZSBpbml0aWFsIGxvY2F0aW9uIG9uIHRoZSAnbW91c2Vkb3duJyBldmVudC4gIE5vdGUgdGhhdFxuICAgICAgICAvLyB0aGUgaW5jbGluYXRpb24gc3RhcnRzIGF0IHBpLzIsIG5vdCAwLiAgTm90ZSBhbHNvIHRoYXQgTGl2aW5ndHNvbiBldCBhbC4gc3dhcCB0aGUgbWVhbmluZ3NcbiAgICAgICAgLy8gb2YgcGhpIGFuZCB0aGV0YS5cbiAgICAgICAgdmFyIGRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKS5zdWJWZWN0b3JzKGN1cnIsIF90aGlzLnByZXYpO1xuICAgICAgICB2YXIgc3BlZWQgPSAyLjAgKiBfdGhpcy5yb3RhdGVTcGVlZDtcbiAgICAgICAgZGVsdGEubXVsdGlwbHlTY2FsYXIoc3BlZWQpO1xuICAgICAgICB2YXIgcGhpID0gLWRlbHRhLnggKiAoTWF0aC5QSSAvIF90aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgICAgICB2YXIgdGhldGEgPSAtZGVsdGEueSAqIChNYXRoLlBJIC8gX3RoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQpICsgTWF0aC5QSSAvIDI7IC8vIFByZXZlbnQgdGhlIGluY2xpbmF0aW9uIGZyb20gZ2V0dGluZyB0b28gY2xvc2UgdG8gMCBvciBwaS4gIEluIGVpdGhlciBvZiB0aG9zZSBjYXNlLFxuICAgICAgICAvLyBzcGhlcmljYWwgY29vcmRpbmF0ZXMgc3RvcCB3b3JraW5nLCBkdWUgdG8gXCJnaW1iYWwgbG9ja1wiLlxuXG4gICAgICAgIHZhciBlcHMgPSAwLjAxO1xuICAgICAgICB0aGV0YSA9IE1hdGgubWF4KHRoZXRhLCBlcHMpO1xuICAgICAgICB0aGV0YSA9IE1hdGgubWluKHRoZXRhLCBNYXRoLlBJIC0gZXBzKTsgLy8gR2l2ZW4gdGhlIGluY2xpbmF0aW9uIGFuZCBhemltdXRoIGRldGVybWluZWQgYnkgdGhlIGxhdGVzdCBtb3VzZSBwb3NpdGlvbiwgY29tcHV0ZSB0aGVcbiAgICAgICAgLy8gbmV3IHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEgdXNpbmcgc3BoZXJpY2FsIGNvb3JkaW5hdGVzLiAgQm90aCBMaXZpbmdzdG9uIGV0IGFsLiBhbmQgUm9obmVyXG4gICAgICAgIC8vIGRvIGEgdmVyc2lvbiBvZiB0aGlzIGNvbXB1dGF0aW9uLCBidXQgUm9obmVyJ3MgaXMgZWFzaWVyIHRvIHVuZGVyc3RhbmQuICBOb3RlIHRoYXQgUm9obmVyXG4gICAgICAgIC8vIGhhcyB0aGUgY2FtZXJhIGxvb2tpbmcgZG93biB0aGUgWCBheGlzIGluaXRpYWxseSwgd2l0aCBaIGJlaW5nIHRoZSBpbml0aWFsIFwidXBcIi4gIFdlIGZvbGxvd1xuICAgICAgICAvLyB0aGUgbW9yZSBzdGFuZGFyZCBjb252ZW50aW9uIG9mIGhhdmluZyB0aGUgY2FtZXJhIGxvb2sgZG93biB0aGUgWiBheGlzLCB3aXRoIFkgYmVpbmcgXCJ1cFwiLlxuICAgICAgICAvLyBTbyBSb2huZXIncyBYIGlzIG91ciBaLCBZIGlzIG91ciBYLCBSb2huZXIncyBaIGlzIG91ciBZLlxuXG4gICAgICAgIHZhciBwb3MgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICBwb3MueiA9IF90aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoZXRhKSAqIE1hdGguY29zKHBoaSk7XG4gICAgICAgIHBvcy54ID0gX3RoaXMucmFkaXVzICogTWF0aC5zaW4odGhldGEpICogTWF0aC5zaW4ocGhpKTtcbiAgICAgICAgcG9zLnkgPSBfdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSk7IC8vIEZpbmFsbHksIHVzZSB0aGUgYmFzaXMgbWF0cml4IHRvIHVwZGF0ZSB0aGUgbmV3IGNhbWVyYSBwb3NpdGlvbiB0byBhY2NvdW50IGZvciB0aGUgYWN0dWFsXG4gICAgICAgIC8vIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNhbWVyYSBhcyBvZiB0aGUgXCJtb3VzZWRvd25cIiBldmVudC5cblxuICAgICAgICBwb3MuYXBwbHlNYXRyaXg0KF90aGlzLmJhc2lzTWF0cml4KTtcblxuICAgICAgICBfdGhpcy5vYmplY3QucG9zaXRpb24uY29weShwb3MpOyAvLyBUaGVuIHVzZSBhIFwibG9va0F0XCIgbWF0cml4IHRvIGZ1cnRoZXIgdXBkYXRlIHRoZSBjYW1lcmEgdG8gcG9pbnQgYXQgdGhpcy50YXJnZXQuXG4gICAgICAgIC8vIEFzIFJvaG5lciBwb2ludHMgb3V0LCBcImxvb2tBdFwiIHJlcXVpcmVzIHRoaXMub2JqZWN0LnVwLCBidXQgYXMgbG9uZyBhcyB0aGUgZWxldmF0aW9uXG4gICAgICAgIC8vIGRvZXMgbm90IGdvIHRvIDAgb3IgcGksIHRoZSB0aGlzLm9iamVjdC51cCBhcyBvZiB0aGUgJ21vdXNlZG93bicgZXZlbnQgd2lsbCB3b3JrLlxuICAgICAgICAvLyBBbHNvLCB0cmlnZ2VyIHJlbmRlcmluZyBiYXNlZCBvbiB0aGUgdXBkYXRlZCBjYW1lcmEuICBCdXQgZG8gbm90IGNhbGwgdGhpcy5maXh1cCgpLFxuICAgICAgICAvLyBhcyBkb2luZyBzbyB3aWxsIHJlc3VsdCBpbiB0d2lzdGluZyBhYm91dCB0aGUgdmlldyBheGlzLiAgQ2FsbCB0aGlzLmZpeHVwKCkgb25seVxuICAgICAgICAvLyB3aGVuIGRyYWdnaW5nIGlzIGRvbmVcblxuXG4gICAgICAgIF90aGlzLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRvbGx5XCIsIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICB2YXIgY3VyciA9IG5ldyBUSFJFRS5WZWN0b3IyKHgsIHkpO1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFN0YXRlLklOREVURVJNSU5BVEUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gY3Vyci5tYW5oYXR0YW5EaXN0YW5jZVRvKF90aGlzLnByZXYpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA+IENsaWNrVGhyZXNob2xkKSB7XG4gICAgICAgICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5ET0xMWUlORztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFN0YXRlLkRPTExZSU5HKSB7XG4gICAgICAgIC8vIFwiRG9sbHlpbmdcIiAoZ2l2aW5nIGEgXCJ6b29taW5nXCIgZWZmZWN0IGJ5IG1vdmluZyB0aGUgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSwgaW5zdGVhZCBvZiBieVxuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgZmllbGQgb2YgdmlldykgaW52b2x2ZXMgZmluZGluZyBhIG5ldyBwb3NpaXRvbiBhbG9uZyB0aGUgdmVjdG9yIGZyb20gdGhlXG4gICAgICAgIC8vIGNhbWVyYSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICB2YXIgdG9UYXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMoX3RoaXMudGFyZ2V0LCBfdGhpcy5vYmplY3QucG9zaXRpb24pO1xuICAgICAgICB2YXIgZGlzdFRvVGFyZ2V0ID0gdG9UYXJnZXQubGVuZ3RoKCk7IC8vIFRoZSBtYXhpbXVtIGRpc3RhbmNlIHRoZSBjYW1lcmEgY2FuIG1vdmUgb24gYSBzaW5nbGUgbW91c2UgZHJhZyBpcyBkZXRlcm1pbmVkIGJ5XG4gICAgICAgIC8vIHRoaXMubWF4RGlzdGFuY2UgYW5kIHRoaXMubWluRGlzdGFuY2UsIHdpdGggYSBjYXAuXG5cbiAgICAgICAgdmFyIGRpc3RMaW1pdCA9IDIgKiBkaXN0VG9UYXJnZXQ7XG4gICAgICAgIHZhciBkaXN0Rm9yRnVsbERyYWcgPSBNYXRoLm1pbihfdGhpcy5tYXhEaXN0YW5jZSAtIF90aGlzLm1pbkRpc3RhbmNlLCBkaXN0TGltaXQpOyAvLyBVc2UgdGhhdCBtYXhpbXVtIGRpc3RhbmNlLCB3aXRoIHRoZSBoZWlnaHQgb2YgdGhlIERPTSBlbGVtZW50IGJlaW5nIHRoZSBtYXhpbXVtXG4gICAgICAgIC8vIG51bWJlciBvZiBwaXhlbHMgbW92ZWQgaW4gYSBtb3VzZSBkcmFnLCB0byBnZXQgYSBzY2FsaW5nIGZhY3Rvci5cblxuICAgICAgICB2YXIgaGVpZ2h0UHggPSBfdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgdmFyIHB4VG9Xb3JsZCA9IGRpc3RGb3JGdWxsRHJhZyAvIGhlaWdodFB4OyAvLyBBZGp1c3QgdGhpcyBmYWN0b3IgYnkgdGhlIHpvb21TcGVlZCBmcm9tIHRoZSBwdWJsaWMgQVBJIGFuZCBjb252ZXJ0IHRoZSBsYXRlc3QgbW91c2UgbW92ZVxuICAgICAgICAvLyB0byBhIGRpc3RhbmNlIGZvciBtb3ZpbmcgdGhlIGNhbWVyYS5cblxuICAgICAgICB2YXIgc3BlZWQgPSBfdGhpcy56b29tU3BlZWQgKiBweFRvV29ybGQ7XG4gICAgICAgIHZhciBkZWx0YVkgPSBfdGhpcy5wcmV2LnkgLSB5O1xuICAgICAgICB2YXIgZGVsdGEgPSBzcGVlZCAqIGRlbHRhWTsgLy8gQXBwbHkgdGhlIHNjYWxpbmcgZmFjdG9yIHRvIGNvbnZlcnQgdGhlIHBpeGVscyBpbiB0aGUgbGF0ZXN0IG1vdXNlIG1vdmUgdG8gYSB3b3JsZFxuICAgICAgICAvLyBkaXN0YW5jZS5cblxuICAgICAgICBpZiAoX3RoaXMubWluRGlzdGFuY2UgPD0gZGlzdFRvVGFyZ2V0ICsgZGVsdGEgJiYgZGlzdFRvVGFyZ2V0ICsgZGVsdGEgPD0gX3RoaXMubWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICB2YXIgZGVsdGFUb1RhcmdldCA9IHRvVGFyZ2V0Lm11bHRpcGx5U2NhbGFyKGRlbHRhIC8gZGlzdFRvVGFyZ2V0KTtcblxuICAgICAgICAgIF90aGlzLm9iamVjdC5wb3NpdGlvbi5zdWIoZGVsdGFUb1RhcmdldCk7XG5cbiAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgIF90aGlzLnByZXYgPSBjdXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGFuXCIsIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICB2YXIgY3VyciA9IG5ldyBUSFJFRS5WZWN0b3IyKHgsIHkpO1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFN0YXRlLklOREVURVJNSU5BVEUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gY3Vyci5tYW5oYXR0YW5EaXN0YW5jZVRvKF90aGlzLnByZXYpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA+IENsaWNrVGhyZXNob2xkKSB7XG4gICAgICAgICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5QQU5OSU5HO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gU3RhdGUuUEFOTklORykge1xuICAgICAgICAvLyBQYW5uaW5nIG1vdmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhIGluIHRoZSBwbGFuZSB3aG9zZSBub3JtYWwgaXMgdGhlIHZpZXdpbmcgdmVjdG9yLFxuICAgICAgICAvLyB0aGUgdmVjdG9yIGZyb20gdGhlIGN1cnJlbnQgY2FtZXJhIHBvc2l0aW9uIHRvIHRoZSB0YXJnZXQuICBTbyB0cmVhdCB0aGF0IHZlY3RvciBhcyB0aGVcbiAgICAgICAgLy8gWiBheGlzLCBhbmQgZmluZCB0aGUgY29ycmVzcG9uZGluZyBYIGFuZCBZIGF4ZXMuXG4gICAgICAgIHZhciB6QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhfdGhpcy50YXJnZXQsIF90aGlzLm9iamVjdC5wb3NpdGlvbik7XG4gICAgICAgIHZhciBkaXN0VG9UYXJnZXQgPSB6QXhpcy5sZW5ndGgoKTtcbiAgICAgICAgekF4aXMuZGl2aWRlU2NhbGFyKGRpc3RUb1RhcmdldCk7XG5cbiAgICAgICAgdmFyIHlBeGlzID0gX3RoaXMub2JqZWN0LnVwLmNsb25lKCk7XG5cbiAgICAgICAgdmFyIHhBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoeUF4aXMsIHpBeGlzKS5ub3JtYWxpemUoKTsgLy8gVGhlIG1heGltdW0gZGlzdGFuY2UgdGhlIGNhbWVyYSBjYW4gbW92ZSAoYWxvbmcgdGhlc2UgWCBhbmQgWSBheGVzKSBvbiBhIHNpbmdsZSBtb3VzZSBkcmFnXG4gICAgICAgIC8vIGlzIHRoZSBkaXN0YW5jZSB0aGF0IHdvdWxkIG1vdmUgdGhlIHRhcmdldCBwb2ludCBvdXRzaWRlIHRoZSB2aWV3aW5nIGZydXN0dW0uICBUbyBjb21wdXRlXG4gICAgICAgIC8vIHRoYXQgbWF4aW11bSBkaXN0YW5jZSwgdGhpbmsgb2YgdGhlIGZydXN0dW0gYXMgdHdvIHJpZ2h0IHRyaWFuZ2xlcyBzaGFyaW5nIHRoZSB2aWV3aW5nXG4gICAgICAgIC8vIHZlY3RvciBhcyBvbmUgc2lkZTsgdGhhdCBtYXhpbXVtIGRpc3RhbmNlIGlzIHR3aWNlIHRoZSBzaWRlIG9wcG9zaXRlIHRoZSBjb3JuZXIgd2hlcmUgdGhlXG4gICAgICAgIC8vIGNhbWVyYSBpcyBsb2NhdGVkLiAgQXQgdGhhdCBjb3JuZXIsIHRoZSBhbmdsZSBvZiBlYWNoIHRyaWFuZ2xlIGlzIGhhbGYgdGhpcy5vYmplY3QuZm92LFxuICAgICAgICAvLyBhbmQgdGhlIHJlc3QgZm9sbG93cyBmcm9tIGJhc2ljIHRyaWdvbm9tZXRyeS5cblxuICAgICAgICB2YXIgaGFsZkhlaWdodFdvcmxkID0gTWF0aC50YW4oX3RoaXMub2JqZWN0LmZvdiAvIDIgKiAoTWF0aC5QSSAvIDM2MCkpICogZGlzdFRvVGFyZ2V0OyAvLyBVc2UgdGhhdCBtYXhpbXVtIGRpc3RhbmNlLCB3aXRoIHRoZSBoZWlnaHQgb2YgdGhlIERPTSBlbGVtZW50IGJlaW5nIHRoZSBtYXhpbXVtXG4gICAgICAgIC8vIG51bWJlciBvZiBwaXhlbHMgbW92ZWQgaW4gYSBtb3VzZSBkcmFnLCB0byBnZXQgYSBzY2FsaW5nIGZhY3Rvci5cblxuICAgICAgICB2YXIgaGFsZkhlaWdodFB4ID0gX3RoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQgLyAyO1xuICAgICAgICB2YXIgcHhUb1dvcmxkID0gaGFsZkhlaWdodFdvcmxkIC8gaGFsZkhlaWdodFB4OyAvLyBBcHBseSB0aGUgc2NhbGluZyBmYWN0b3IgdG8gY29udmVydCB0aGUgcGl4ZWxzIGluIHRoZSBsYXRlc3QgbW91c2UgbW92ZSB0byBhIHdvcmxkXG4gICAgICAgIC8vIGRpc3RhbmNlLlxuXG4gICAgICAgIHZhciBkZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCkuc3ViVmVjdG9ycyhjdXJyLCBfdGhpcy5wcmV2KTtcbiAgICAgICAgdmFyIGRlbHRhWCA9IHhBeGlzLm11bHRpcGx5U2NhbGFyKGRlbHRhLnggKiBweFRvV29ybGQpO1xuICAgICAgICB2YXIgZGVsdGFZID0geUF4aXMubXVsdGlwbHlTY2FsYXIoZGVsdGEueSAqIHB4VG9Xb3JsZCk7XG5cbiAgICAgICAgX3RoaXMub2JqZWN0LnBvc2l0aW9uLmFkZChkZWx0YVgpO1xuXG4gICAgICAgIF90aGlzLm9iamVjdC5wb3NpdGlvbi5hZGQoZGVsdGFZKTsgLy8gTm90ZSB0aGF0IHdoZW4gcGFubmluZywgdGhlIHRhcmdldCBtb3ZlcyBhbG9uZyB3aXRoIHRoZSBjYW1lcmEsIHN0YXlpbmcgb2Zmc2V0IGJ5IHRoZVxuICAgICAgICAvLyBzYW1lIHZpZXdpbmcgdmVjdG9yIHRoYXQgd2FzIGluIHVzZSBhdCB0aGUgc3RhcnQgb2YgdGhlIG1vdXNlIG1vdmVtZW50LlxuXG5cbiAgICAgICAgdmFyIHRvVGFyZ2V0ID0gekF4aXMubXVsdGlwbHlTY2FsYXIoZGlzdFRvVGFyZ2V0KTtcbiAgICAgICAgdmFyIHRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuYWRkVmVjdG9ycyhfdGhpcy5vYmplY3QucG9zaXRpb24sIHRvVGFyZ2V0KTtcbiAgICAgICAgX3RoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgICAgIF90aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgIF90aGlzLnByZXYgPSBjdXJyO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImZpeFVwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRoZSBjdXJyZW50IHRoaXMub2JqZWN0LnVwIG1heSBiZSBhbG1vc3QgYWxpZ25lZCB3aXRoIHRoaXMgXCJ2aWV3XCIgdmVjdG9yLlxuICAgICAgdmFyIHZpZXcgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMoX3RoaXMudGFyZ2V0LCBfdGhpcy5vYmplY3QucG9zaXRpb24pLm5vcm1hbGl6ZSgpOyAvLyBTbyBmaXJzdCBmaW5kIHRoZSB2ZWN0b3Igb2ZmIHRvIHRoZSBzaWRlLCBvcnRob2dvbmFsIHRvIGJvdGggdGhpcy5vYmplY3QudXAgYW5kXG4gICAgICAvLyB0aGUgXCJ2aWV3XCIgdmVjdG9yLlxuXG4gICAgICB2YXIgc2lkZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKHZpZXcsIF90aGlzLm9iamVjdC51cCkubm9ybWFsaXplKCk7IC8vIFRoZW4gZmluZCB0aGUgdmVjdG9yIG9ydGhvZ29uYWwgdG8gYm90aCB0aGlzIFwic2lkZVwiIHZlY3RvciBhbmQgdGhlIFwidmlld1wiIHZlY3Rvci5cbiAgICAgIC8vIFRoaXMgdmVjdG9yIHdpbGwgYmUgdGhlIG5ldyBcInVwXCIgdmVjdG9yLlxuXG4gICAgICB2YXIgdXAgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhzaWRlLCB2aWV3KS5ub3JtYWxpemUoKTtcblxuICAgICAgX3RoaXMub2JqZWN0LnVwLmNvcHkodXApO1xuICAgIH0pO1xuXG4gICAgX3RoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIF90aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50OyAvL1xuICAgIC8vIFB1YmxpYyBBUEkgdGhhdCBtaXJyb3JzIFRIUkVFLk9yYml0Q29udHJvbHNcblxuICAgIF90aGlzLmtleVBhblNwZWVkID0gNztcbiAgICBfdGhpcy5rZXlzID0ge1xuICAgICAgTEVGVDogMzcsXG4gICAgICBVUDogMzgsXG4gICAgICBSSUdIVDogMzksXG4gICAgICBET1dOOiA0MFxuICAgIH07XG4gICAgX3RoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICBfdGhpcy5taW5EaXN0YW5jZSA9IDA7XG4gICAgX3RoaXMucm90YXRlU3BlZWQgPSAxO1xuICAgIF90aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgX3RoaXMuem9vbVNwZWVkID0gMTsgLy8gTmV3IHB1YmxpYyBBUElcbiAgICAvLyBUaGUgc3RhbmRhcmQgJ2NsaWNrJyBldmVudCBpcyBzZW50IGJ5IHRoaXMuZG9tRWxlbWVudCBmb3IgYW55ICdtb3VzZWRvd24nXG4gICAgLy8gZm9sbG93ZWQgYnkgJ21vdXNldXAnLiAgQnV0IGEgbW9yZSB1c2VmdWwgZGVmaW5pdGlvbiBvZiBhICdjbGljaycgaXMgd2hlblxuICAgIC8vIHRoZSBjdXJzb3IgbW92ZXMgbGVzcyB0aGFuIENsaWNrVGhyZXNob2xkIHBpeGVscyBiZXR3ZWVuIHRoZSAnbW91c2Vkb3duJ1xuICAgIC8vIGFuZCB0aGUgJ21vdXNldXAnLiAgSW4gdGhhdCBjYXNlLCB0aGlzLmNsaWNrZWQgd2lsbCBiZSB0cnVlLlxuXG4gICAgX3RoaXMuY2xpY2tlZCA9IGZhbHNlOyAvL1xuXG4gICAgX3RoaXMuc3RhdGUgPSBTdGF0ZS5JTkFDVElWRTtcbiAgICBfdGhpcy5jaGFuZ2VFdmVudCA9IHtcbiAgICAgIHR5cGU6ICdjaGFuZ2UnXG4gICAgfTtcblxuICAgIF90aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgX3RoaXMub25Nb3VzZURvd24sIGZhbHNlKTtcblxuICAgIF90aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBfdGhpcy5vbk1vdXNlV2hlZWwsIGZhbHNlKTtcblxuICAgIF90aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzLm9uS2V5RG93biwgZmFsc2UpO1xuXG4gICAgaWYgKF90aGlzLmRvbUVsZW1lbnQudGFiSW5kZXggPT09IC0xKSB7XG4gICAgICAvLyBNdXN0IGJlIHNldCBmb3IgJ2tleWRvd24nIHRvIGJlIHJlY2VpdmVkLlxuICAgICAgX3RoaXMuZG9tRWxlbWVudC50YWJJbmRleCA9IDA7XG4gICAgfSAvLyBVc2VkIGJ5IHJlc2V0KCkuXG5cblxuICAgIF90aGlzLnRhcmdldDAgPSBfdGhpcy50YXJnZXQuY2xvbmUoKTtcbiAgICBfdGhpcy5wb3NpdGlvbjAgPSBfdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblxuICAgIF90aGlzLnVwZGF0ZSgpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIE9yYml0VW5saW1pdGVkQ29udHJvbHM7XG59KFRIUkVFLkV2ZW50RGlzcGF0Y2hlcik7XG5cbnZhciBfZGVmYXVsdCA9IE9yYml0VW5saW1pdGVkQ29udHJvbHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgJiYgaXQgIT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoaXQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5LnByb3RvdHlwZS57IHZhbHVlcywgQEBpdGVyYXRvciB9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSA8IDQgPyAxIDogbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAodXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbCh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWllZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHdtaGFzLmNhbGwoc3RvcmUsIGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChvYmplY3RIYXMoaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSBJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoKCFJU19QVVJFIHx8IE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICByZXR1cm4gIVN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUgKi9cbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IGFjdGl2ZVhEb2N1bWVudCA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAtLSBzYWZlICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQ7XG4gICAgc2V0dGVyLmNhbGwodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIuY2FsbChPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIH1cbiAgICBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgICBpZiAoIXN0YXRlLnNvdXJjZSkge1xuICAgICAgc3RhdGUuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICAgIH1cbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0pO1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQykge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KGl0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwidmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMTMuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhcyhXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpIHx8ICEoTkFUSVZFX1NZTUJPTCB8fCB0eXBlb2YgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID09ICdzdHJpbmcnKSkge1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhcyhTeW1ib2wsIG5hbWUpKSB7XG4gICAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgICB9XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgQVJSQVlfSVRFUkFUT1IgPSAnQXJyYXkgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoQVJSQVlfSVRFUkFUT1IpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmtleXNcbi8vIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnZhbHVlc1xuLy8gYEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWFycmF5aXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lSXRlcmF0b3IoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBBUlJBWV9JVEVSQVRPUixcbiAgICB0YXJnZXQ6IHRvSW5kZXhlZE9iamVjdChpdGVyYXRlZCksIC8vIHRhcmdldFxuICAgIGluZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICAgIGtpbmQ6IGtpbmQgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICB9KTtcbi8vIGAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciB0YXJnZXQgPSBzdGF0ZS50YXJnZXQ7XG4gIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXgrKztcbiAgaWYgKCF0YXJnZXQgfHwgaW5kZXggPj0gdGFyZ2V0Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogaW5kZXgsIGRvbmU6IGZhbHNlIH07XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogdGFyZ2V0W2luZGV4XSwgZG9uZTogZmFsc2UgfTtcbiAgcmV0dXJuIHsgdmFsdWU6IFtpbmRleCwgdGFyZ2V0W2luZGV4XV0sIGRvbmU6IGZhbHNlIH07XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVtYXBwZWRhcmd1bWVudHNvYmplY3Rcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiLy8gYFN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25gIGdldHRlclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcblxudmFyIE5hdGl2ZVN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG5cbmlmIChERVNDUklQVE9SUyAmJiB0eXBlb2YgTmF0aXZlU3ltYm9sID09ICdmdW5jdGlvbicgJiYgKCEoJ2Rlc2NyaXB0aW9uJyBpbiBOYXRpdmVTeW1ib2wucHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMgaW5zdGFuY2VvZiBTeW1ib2xXcmFwcGVyXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoU3ltYm9sV3JhcHBlciwgTmF0aXZlU3ltYm9sKTtcbiAgdmFyIHN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlU3ltYm9sLnByb3RvdHlwZTtcbiAgc3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBuYXRpdmUgPSBTdHJpbmcoTmF0aXZlU3ltYm9sKCd0ZXN0JykpID09ICdTeW1ib2wodGVzdCknO1xuICB2YXIgcmVnZXhwID0gL15TeW1ib2xcXCgoLiopXFwpW14pXSskLztcbiAgZGVmaW5lUHJvcGVydHkoc3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gaXNPYmplY3QodGhpcykgPyB0aGlzLnZhbHVlT2YoKSA6IHRoaXM7XG4gICAgICB2YXIgc3RyaW5nID0gc3ltYm9sVG9TdHJpbmcuY2FsbChzeW1ib2wpO1xuICAgICAgaWYgKGhhcyhFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBkZXNjID0gbmF0aXZlID8gc3RyaW5nLnNsaWNlKDcsIC0xKSA6IHN0cmluZy5yZXBsYWNlKHJlZ2V4cCwgJyQxJyk7XG4gICAgICByZXR1cm4gZGVzYyA9PT0gJycgPyB1bmRlZmluZWQgOiBkZXNjO1xuICAgIH1cbiAgfSk7XG5cbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgQXJyYXlJdGVyYXRvck1ldGhvZHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEFycmF5SXRlcmF0b3JNZXRob2RzLnZhbHVlcztcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICAgIH1cbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgTUVUSE9EX05BTUUsIEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSA9IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG4oZnVuY3Rpb24oZixlKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTpmLlN0YXRzPWUoKX0pKHRoaXMsZnVuY3Rpb24oKXt2YXIgZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7Yy5hcHBlbmRDaGlsZChhLmRvbSk7cmV0dXJuIGF9ZnVuY3Rpb24gdShhKXtmb3IodmFyIGQ9MDtkPGMuY2hpbGRyZW4ubGVuZ3RoO2QrKyljLmNoaWxkcmVuW2RdLnN0eWxlLmRpc3BsYXk9ZD09PWE/XCJibG9ja1wiOlwibm9uZVwiO2w9YX12YXIgbD0wLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMFwiO2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpO1xudSgrK2wlYy5jaGlsZHJlbi5sZW5ndGgpfSwhMSk7dmFyIGs9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKSxnPWssYT0wLHI9ZShuZXcgZi5QYW5lbChcIkZQU1wiLFwiIzBmZlwiLFwiIzAwMlwiKSksaD1lKG5ldyBmLlBhbmVsKFwiTVNcIixcIiMwZjBcIixcIiMwMjBcIikpO2lmKHNlbGYucGVyZm9ybWFuY2UmJnNlbGYucGVyZm9ybWFuY2UubWVtb3J5KXZhciB0PWUobmV3IGYuUGFuZWwoXCJNQlwiLFwiI2YwOFwiLFwiIzIwMVwiKSk7dSgwKTtyZXR1cm57UkVWSVNJT046MTYsZG9tOmMsYWRkUGFuZWw6ZSxzaG93UGFuZWw6dSxiZWdpbjpmdW5jdGlvbigpe2s9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7YSsrO3ZhciBjPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCk7aC51cGRhdGUoYy1rLDIwMCk7aWYoYz5nKzFFMyYmKHIudXBkYXRlKDFFMyphLyhjLWcpLDEwMCksZz1jLGE9MCx0KSl7dmFyIGQ9cGVyZm9ybWFuY2UubWVtb3J5O3QudXBkYXRlKGQudXNlZEpTSGVhcFNpemUvXG4xMDQ4NTc2LGQuanNIZWFwU2l6ZUxpbWl0LzEwNDg1NzYpfXJldHVybiBjfSx1cGRhdGU6ZnVuY3Rpb24oKXtrPXRoaXMuZW5kKCl9LGRvbUVsZW1lbnQ6YyxzZXRNb2RlOnV9fTtmLlBhbmVsPWZ1bmN0aW9uKGUsZixsKXt2YXIgYz1JbmZpbml0eSxrPTAsZz1NYXRoLnJvdW5kLGE9Zyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkscj04MCphLGg9NDgqYSx0PTMqYSx2PTIqYSxkPTMqYSxtPTE1KmEsbj03NCphLHA9MzAqYSxxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cS53aWR0aD1yO3EuaGVpZ2h0PWg7cS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtoZWlnaHQ6NDhweFwiO3ZhciBiPXEuZ2V0Q29udGV4dChcIjJkXCIpO2IuZm9udD1cImJvbGQgXCIrOSphK1wicHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcIjtiLnRleHRCYXNlbGluZT1cInRvcFwiO2IuZmlsbFN0eWxlPWw7Yi5maWxsUmVjdCgwLDAscixoKTtiLmZpbGxTdHlsZT1mO2IuZmlsbFRleHQoZSx0LHYpO1xuYi5maWxsUmVjdChkLG0sbixwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkLG0sbixwKTtyZXR1cm57ZG9tOnEsdXBkYXRlOmZ1bmN0aW9uKGgsdyl7Yz1NYXRoLm1pbihjLGgpO2s9TWF0aC5tYXgoayxoKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9MTtiLmZpbGxSZWN0KDAsMCxyLG0pO2IuZmlsbFN0eWxlPWY7Yi5maWxsVGV4dChnKGgpK1wiIFwiK2UrXCIgKFwiK2coYykrXCItXCIrZyhrKStcIilcIix0LHYpO2IuZHJhd0ltYWdlKHEsZCthLG0sbi1hLHAsZCxtLG4tYSxwKTtiLmZpbGxSZWN0KGQrbi1hLG0sYSxwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkK24tYSxtLGEsZygoMS1oL3cpKnApKX19fTtyZXR1cm4gZn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkZWZhdWx0T25FcnJvcihlcnIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGVycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRIUkVFKSB7XG5cbiAgLyoqXG4gICAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb20vXG4gICAqL1xuXG4gIFRIUkVFLk9CSkxvYWRlciA9IGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG5cbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyICE9PSB1bmRlZmluZWQgPyBtYW5hZ2VyIDogVEhSRUUuRGVmYXVsdExvYWRpbmdNYW5hZ2VyO1xuXG4gICAgdGhpcy5tYXRlcmlhbHMgPSBudWxsO1xuXG4gICAgdGhpcy5yZWdleHAgPSB7XG4gICAgICAvLyB2IGZsb2F0IGZsb2F0IGZsb2F0XG4gICAgICB2ZXJ0ZXhfcGF0dGVybjogL152XFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKVxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspLyxcbiAgICAgIC8vIHZuIGZsb2F0IGZsb2F0IGZsb2F0XG4gICAgICBub3JtYWxfcGF0dGVybjogL152blxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyB2dCBmbG9hdCBmbG9hdFxuICAgICAgdXZfcGF0dGVybjogL152dFxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspLyxcbiAgICAgIC8vIGYgdmVydGV4IHZlcnRleCB2ZXJ0ZXhcbiAgICAgIGZhY2VfdmVydGV4OiAvXmZcXHMrKC0/XFxkKylcXHMrKC0/XFxkKylcXHMrKC0/XFxkKykoPzpcXHMrKC0/XFxkKykpPy8sXG4gICAgICAvLyBmIHZlcnRleC91diB2ZXJ0ZXgvdXYgdmVydGV4L3V2XG4gICAgICBmYWNlX3ZlcnRleF91djogL15mXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcLygtP1xcZCspKD86XFxzKygtP1xcZCspXFwvKC0/XFxkKykpPy8sXG4gICAgICAvLyBmIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsXG4gICAgICBmYWNlX3ZlcnRleF91dl9ub3JtYWw6IC9eZlxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKykpPy8sXG4gICAgICAvLyBmIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsXG4gICAgICBmYWNlX3ZlcnRleF9ub3JtYWw6IC9eZlxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspXFxzKygtP1xcZCspXFwvXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspKT8vLFxuICAgICAgLy8gbyBvYmplY3RfbmFtZSB8IGcgZ3JvdXBfbmFtZVxuICAgICAgb2JqZWN0X3BhdHRlcm46IC9eW29nXVxccyooLispPy8sXG4gICAgICAvLyBzIGJvb2xlYW5cbiAgICAgIHNtb290aGluZ19wYXR0ZXJuOiAvXnNcXHMrKFxcZCt8b258b2ZmKS8sXG4gICAgICAvLyBtdGxsaWIgZmlsZV9yZWZlcmVuY2VcbiAgICAgIG1hdGVyaWFsX2xpYnJhcnlfcGF0dGVybjogL15tdGxsaWIgLyxcbiAgICAgIC8vIHVzZW10bCBtYXRlcmlhbF9uYW1lXG4gICAgICBtYXRlcmlhbF91c2VfcGF0dGVybjogL151c2VtdGwgL1xuICAgIH07XG4gIH07XG5cbiAgVEhSRUUuT0JKTG9hZGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yOiBUSFJFRS5PQkpMb2FkZXIsXG5cbiAgICBsb2FkOiBmdW5jdGlvbiBsb2FkKHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yKSB7XG5cbiAgICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgICB0aGlzLm9uRXJyb3IgPSBvbkVycm9yIHx8IGRlZmF1bHRPbkVycm9yO1xuXG4gICAgICB2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkZpbGVMb2FkZXIoc2NvcGUubWFuYWdlcik7XG4gICAgICBsb2FkZXIuc2V0UGF0aCh0aGlzLnBhdGgpO1xuICAgICAgbG9hZGVyLmxvYWQodXJsLCBmdW5jdGlvbiAodGV4dCkge1xuXG4gICAgICAgIG9uTG9hZChzY29wZS5wYXJzZSh0ZXh0KSk7XG4gICAgICB9LCBvblByb2dyZXNzLCBvbkVycm9yKTtcbiAgICB9LFxuXG4gICAgc2V0UGF0aDogZnVuY3Rpb24gc2V0UGF0aCh2YWx1ZSkge1xuXG4gICAgICB0aGlzLnBhdGggPSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2V0TWF0ZXJpYWxzOiBmdW5jdGlvbiBzZXRNYXRlcmlhbHMobWF0ZXJpYWxzKSB7XG5cbiAgICAgIHRoaXMubWF0ZXJpYWxzID0gbWF0ZXJpYWxzO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlUGFyc2VyU3RhdGU6IGZ1bmN0aW9uIF9jcmVhdGVQYXJzZXJTdGF0ZSgpIHtcblxuICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBvYmplY3RzOiBbXSxcbiAgICAgICAgb2JqZWN0OiB7fSxcblxuICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgICB1dnM6IFtdLFxuXG4gICAgICAgIG1hdGVyaWFsTGlicmFyaWVzOiBbXSxcblxuICAgICAgICBzdGFydE9iamVjdDogZnVuY3Rpb24gc3RhcnRPYmplY3QobmFtZSwgZnJvbURlY2xhcmF0aW9uKSB7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBvYmplY3QgKGluaXRpYWwgZnJvbSByZXNldCkgaXMgbm90IGZyb20gYSBnL28gZGVjbGFyYXRpb24gaW4gdGhlIHBhcnNlZFxuICAgICAgICAgIC8vIGZpbGUuIFdlIG5lZWQgdG8gdXNlIGl0IGZvciB0aGUgZmlyc3QgcGFyc2VkIGcvbyB0byBrZWVwIHRoaW5ncyBpbiBzeW5jLlxuICAgICAgICAgIGlmICh0aGlzLm9iamVjdCAmJiB0aGlzLm9iamVjdC5mcm9tRGVjbGFyYXRpb24gPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHRoaXMub2JqZWN0Lm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID0gZnJvbURlY2xhcmF0aW9uICE9PSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcHJldmlvdXNNYXRlcmlhbCA9IHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwgPT09ICdmdW5jdGlvbicgPyB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwoKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmICh0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuX2ZpbmFsaXplID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgICAgICAgIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSh0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9iamVjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwgJycsXG4gICAgICAgICAgICBmcm9tRGVjbGFyYXRpb246IGZyb21EZWNsYXJhdGlvbiAhPT0gZmFsc2UsXG5cbiAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgIHZlcnRpY2VzOiBbXSxcbiAgICAgICAgICAgICAgbm9ybWFsczogW10sXG4gICAgICAgICAgICAgIHV2czogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXRlcmlhbHM6IFtdLFxuICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuXG4gICAgICAgICAgICBzdGFydE1hdGVyaWFsOiBmdW5jdGlvbiBzdGFydE1hdGVyaWFsKG5hbWUsIGxpYnJhcmllcykge1xuXG4gICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IHRoaXMuX2ZpbmFsaXplKGZhbHNlKTtcblxuICAgICAgICAgICAgICAvLyBOZXcgdXNlbXRsIGRlY2xhcmF0aW9uIG92ZXJ3cml0ZXMgYW4gaW5oZXJpdGVkIG1hdGVyaWFsLCBleGNlcHQgaWYgZmFjZXMgd2VyZSBkZWNsYXJlZFxuICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgbWF0ZXJpYWwsIHRoZW4gaXQgbXVzdCBiZSBwcmVzZXJ2ZWQgZm9yIHByb3BlciBNdWx0aU1hdGVyaWFsIGNvbnRpbnVhdGlvbi5cbiAgICAgICAgICAgICAgaWYgKHByZXZpb3VzICYmIChwcmV2aW91cy5pbmhlcml0ZWQgfHwgcHJldmlvdXMuZ3JvdXBDb3VudCA8PSAwKSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMuc3BsaWNlKHByZXZpb3VzLmluZGV4LCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBtYXRlcmlhbCA9IHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5tYXRlcmlhbHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwgJycsXG4gICAgICAgICAgICAgICAgbXRsbGliOiBBcnJheS5pc0FycmF5KGxpYnJhcmllcykgJiYgbGlicmFyaWVzLmxlbmd0aCA+IDAgPyBsaWJyYXJpZXNbbGlicmFyaWVzLmxlbmd0aCAtIDFdIDogJycsXG4gICAgICAgICAgICAgICAgc21vb3RoOiBwcmV2aW91cyAhPT0gdW5kZWZpbmVkID8gcHJldmlvdXMuc21vb3RoIDogdGhpcy5zbW9vdGgsXG4gICAgICAgICAgICAgICAgZ3JvdXBTdGFydDogcHJldmlvdXMgIT09IHVuZGVmaW5lZCA/IHByZXZpb3VzLmdyb3VwRW5kIDogMCxcbiAgICAgICAgICAgICAgICBncm91cEVuZDogLTEsXG4gICAgICAgICAgICAgICAgZ3JvdXBDb3VudDogLTEsXG4gICAgICAgICAgICAgICAgaW5oZXJpdGVkOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShpbmRleCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbXRsbGliOiB0aGlzLm10bGxpYixcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoOiB0aGlzLnNtb290aCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBTdGFydDogMCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBFbmQ6IC0xLFxuICAgICAgICAgICAgICAgICAgICBncm91cENvdW50OiAtMSxcbiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGNsb25lZC5jbG9uZSA9IHRoaXMuY2xvbmUuYmluZChjbG9uZWQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGVyaWFsO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY3VycmVudE1hdGVyaWFsOiBmdW5jdGlvbiBjdXJyZW50TWF0ZXJpYWwoKSB7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbHNbdGhpcy5tYXRlcmlhbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgX2ZpbmFsaXplOiBmdW5jdGlvbiBfZmluYWxpemUoZW5kKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGxhc3RNdWx0aU1hdGVyaWFsID0gdGhpcy5jdXJyZW50TWF0ZXJpYWwoKTtcbiAgICAgICAgICAgICAgaWYgKGxhc3RNdWx0aU1hdGVyaWFsICYmIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID09PSAtMSkge1xuXG4gICAgICAgICAgICAgICAgbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBFbmQgPSB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCAvIDM7XG4gICAgICAgICAgICAgICAgbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBDb3VudCA9IGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kIC0gbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBTdGFydDtcbiAgICAgICAgICAgICAgICBsYXN0TXVsdGlNYXRlcmlhbC5pbmhlcml0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIElnbm9yZSBvYmplY3RzIHRhaWwgbWF0ZXJpYWxzIGlmIG5vIGZhY2UgZGVjbGFyYXRpb25zIGZvbGxvd2VkIHRoZW0gYmVmb3JlIGEgbmV3IG8vZyBzdGFydGVkLlxuICAgICAgICAgICAgICBpZiAoZW5kICYmIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIG1pID0gdGhpcy5tYXRlcmlhbHMubGVuZ3RoIC0gMTsgbWkgPj0gMDsgbWktLSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWxzW21pXS5ncm91cENvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMuc3BsaWNlKG1pLCAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBHdWFyYW50ZWUgYXQgbGVhc3Qgb25lIGVtcHR5IG1hdGVyaWFsLCB0aGlzIG1ha2VzIHRoZSBjcmVhdGlvbiBsYXRlciBtb3JlIHN0cmFpZ2h0IGZvcndhcmQuXG4gICAgICAgICAgICAgIGlmIChlbmQgJiYgdGhpcy5tYXRlcmlhbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgc21vb3RoOiB0aGlzLnNtb290aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGxhc3RNdWx0aU1hdGVyaWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBJbmhlcml0IHByZXZpb3VzIG9iamVjdHMgbWF0ZXJpYWwuXG4gICAgICAgICAgLy8gU3BlYyB0ZWxscyB1cyB0aGF0IGEgZGVjbGFyZWQgbWF0ZXJpYWwgbXVzdCBiZSBzZXQgdG8gYWxsIG9iamVjdHMgdW50aWwgYSBuZXcgbWF0ZXJpYWwgaXMgZGVjbGFyZWQuXG4gICAgICAgICAgLy8gSWYgYSB1c2VtdGwgZGVjbGFyYXRpb24gaXMgZW5jb3VudGVyZWQgd2hpbGUgdGhpcyBuZXcgb2JqZWN0IGlzIGJlaW5nIHBhcnNlZCwgaXQgd2lsbFxuICAgICAgICAgIC8vIG92ZXJ3cml0ZSB0aGUgaW5oZXJpdGVkIG1hdGVyaWFsLiBFeGNlcHRpb24gYmVpbmcgdGhhdCB0aGVyZSB3YXMgYWxyZWFkeSBmYWNlIGRlY2xhcmF0aW9uc1xuICAgICAgICAgIC8vIHRvIHRoZSBpbmhlcml0ZWQgbWF0ZXJpYWwsIHRoZW4gaXQgd2lsbCBiZSBwcmVzZXJ2ZWQgZm9yIHByb3BlciBNdWx0aU1hdGVyaWFsIGNvbnRpbnVhdGlvbi5cblxuICAgICAgICAgIGlmIChwcmV2aW91c01hdGVyaWFsICYmIHByZXZpb3VzTWF0ZXJpYWwubmFtZSAmJiB0eXBlb2YgcHJldmlvdXNNYXRlcmlhbC5jbG9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIHZhciBkZWNsYXJlZCA9IHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUoMCk7XG4gICAgICAgICAgICBkZWNsYXJlZC5pbmhlcml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vYmplY3QubWF0ZXJpYWxzLnB1c2goZGVjbGFyZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKHRoaXMub2JqZWN0KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gZmluYWxpemUoKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdHlwZW9mIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5fZmluYWxpemUodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlVmVydGV4SW5kZXg6IGZ1bmN0aW9uIHBhcnNlVmVydGV4SW5kZXgodmFsdWUsIGxlbikge1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgICAgICByZXR1cm4gKGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDMpICogMztcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZU5vcm1hbEluZGV4OiBmdW5jdGlvbiBwYXJzZU5vcm1hbEluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAzKSAqIDM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VVVkluZGV4OiBmdW5jdGlvbiBwYXJzZVVWSW5kZXgodmFsdWUsIGxlbikge1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgICAgICByZXR1cm4gKGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDIpICogMjtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRWZXJ0ZXg6IGZ1bmN0aW9uIGFkZFZlcnRleChhLCBiLCBjKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRWZXJ0ZXhMaW5lOiBmdW5jdGlvbiBhZGRWZXJ0ZXhMaW5lKGEpIHtcblxuICAgICAgICAgIHZhciBzcmMgPSB0aGlzLnZlcnRpY2VzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS52ZXJ0aWNlcztcblxuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMF0pO1xuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMV0pO1xuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMl0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZE5vcm1hbDogZnVuY3Rpb24gYWRkTm9ybWFsKGEsIGIsIGMpIHtcblxuICAgICAgICAgIHZhciBzcmMgPSB0aGlzLm5vcm1hbHM7XG4gICAgICAgICAgdmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5Lm5vcm1hbHM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDJdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRVVjogZnVuY3Rpb24gYWRkVVYoYSwgYiwgYykge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudXZzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYiArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYyArIDFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRVVkxpbmU6IGZ1bmN0aW9uIGFkZFVWTGluZShhKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy51dnM7XG4gICAgICAgICAgdmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnV2cztcblxuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMF0pO1xuICAgICAgICAgIGRzdC5wdXNoKHNyY1thICsgMV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEZhY2U6IGZ1bmN0aW9uIGFkZEZhY2UoYSwgYiwgYywgZCwgdWEsIHViLCB1YywgdWQsIG5hLCBuYiwgbmMsIG5kKSB7XG5cbiAgICAgICAgICB2YXIgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgICAgdmFyIGlhID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KGEsIHZMZW4pO1xuICAgICAgICAgIHZhciBpYiA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleChiLCB2TGVuKTtcbiAgICAgICAgICB2YXIgaWMgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoYywgdkxlbik7XG4gICAgICAgICAgdmFyIGlkO1xuXG4gICAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleChpYSwgaWIsIGljKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleChkLCB2TGVuKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWEsIGliLCBpZCk7XG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleChpYiwgaWMsIGlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodWEgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICB2YXIgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlhID0gdGhpcy5wYXJzZVVWSW5kZXgodWEsIHV2TGVuKTtcbiAgICAgICAgICAgIGliID0gdGhpcy5wYXJzZVVWSW5kZXgodWIsIHV2TGVuKTtcbiAgICAgICAgICAgIGljID0gdGhpcy5wYXJzZVVWSW5kZXgodWMsIHV2TGVuKTtcblxuICAgICAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgIHRoaXMuYWRkVVYoaWEsIGliLCBpYyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIGlkID0gdGhpcy5wYXJzZVVWSW5kZXgodWQsIHV2TGVuKTtcblxuICAgICAgICAgICAgICB0aGlzLmFkZFVWKGlhLCBpYiwgaWQpO1xuICAgICAgICAgICAgICB0aGlzLmFkZFVWKGliLCBpYywgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuYSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIC8vIE5vcm1hbHMgYXJlIG1hbnkgdGltZXMgdGhlIHNhbWUuIElmIHNvLCBza2lwIGZ1bmN0aW9uIGNhbGwgYW5kIHBhcnNlSW50LlxuICAgICAgICAgICAgdmFyIG5MZW4gPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xuICAgICAgICAgICAgaWEgPSB0aGlzLnBhcnNlTm9ybWFsSW5kZXgobmEsIG5MZW4pO1xuXG4gICAgICAgICAgICBpYiA9IG5hID09PSBuYiA/IGlhIDogdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5iLCBuTGVuKTtcbiAgICAgICAgICAgIGljID0gbmEgPT09IG5jID8gaWEgOiB0aGlzLnBhcnNlTm9ybWFsSW5kZXgobmMsIG5MZW4pO1xuXG4gICAgICAgICAgICBpZiAoZCA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGROb3JtYWwoaWEsIGliLCBpYyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIGlkID0gdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5kLCBuTGVuKTtcblxuICAgICAgICAgICAgICB0aGlzLmFkZE5vcm1hbChpYSwgaWIsIGlkKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGROb3JtYWwoaWIsIGljLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZExpbmVHZW9tZXRyeTogZnVuY3Rpb24gYWRkTGluZUdlb21ldHJ5KHZlcnRpY2VzLCB1dnMpIHtcblxuICAgICAgICAgIHRoaXMub2JqZWN0Lmdlb21ldHJ5LnR5cGUgPSAnTGluZSc7XG5cbiAgICAgICAgICB2YXIgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICAgIHZhciB1dkxlbiA9IHRoaXMudXZzLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAodmFyIHZpID0gMCwgbCA9IHZlcnRpY2VzLmxlbmd0aDsgdmkgPCBsOyB2aSsrKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4TGluZSh0aGlzLnBhcnNlVmVydGV4SW5kZXgodmVydGljZXNbdmldLCB2TGVuKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgdXZpID0gMCwgbCA9IHV2cy5sZW5ndGg7IHV2aSA8IGw7IHV2aSsrKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVVZMaW5lKHRoaXMucGFyc2VVVkluZGV4KHV2c1t1dmldLCB1dkxlbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9O1xuXG4gICAgICBzdGF0ZS5zdGFydE9iamVjdCgnJywgZmFsc2UpO1xuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh0ZXh0LCBkZWJ1Zykge1xuICAgICAgaWYgKHR5cGVvZiBkZWJ1ZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGVidWcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS50aW1lKCdPQkpMb2FkZXInKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5fY3JlYXRlUGFyc2VyU3RhdGUoKTtcblxuICAgICAgaWYgKHRleHQuaW5kZXhPZignXFxyXFxuJykgIT09IC0xKSB7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmYXN0ZXIgdGhhbiBTdHJpbmcuc3BsaXQgd2l0aCByZWdleCB0aGF0IHNwbGl0cyBvbiBib3RoXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcclxcbi9nLCAnXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXh0LmluZGV4T2YoJ1xcXFxcXG4nKSAhPT0gLTEpIHtcblxuICAgICAgICAvLyBqb2luIGxpbmVzIHNlcGFyYXRlZCBieSBhIGxpbmUgY29udGludWF0aW9uIGNoYXJhY3RlciAoXFwpXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFxcXG4vZywgJycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBsaW5lID0gJycsXG4gICAgICAgICAgbGluZUZpcnN0Q2hhciA9ICcnLFxuICAgICAgICAgIGxpbmVTZWNvbmRDaGFyID0gJyc7XG4gICAgICB2YXIgbGluZUxlbmd0aCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgIC8vIEZhc3RlciB0byBqdXN0IHRyaW0gbGVmdCBzaWRlIG9mIHRoZSBsaW5lLiBVc2UgaWYgYXZhaWxhYmxlLlxuICAgICAgdmFyIHRyaW1MZWZ0ID0gdHlwZW9mICcnLnRyaW1MZWZ0ID09PSAnZnVuY3Rpb24nO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXG4gICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcblxuICAgICAgICBsaW5lID0gdHJpbUxlZnQgPyBsaW5lLnRyaW1MZWZ0KCkgOiBsaW5lLnRyaW0oKTtcblxuICAgICAgICBsaW5lTGVuZ3RoID0gbGluZS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxpbmVMZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgIGxpbmVGaXJzdENoYXIgPSBsaW5lLmNoYXJBdCgwKTtcblxuICAgICAgICAvLyBAdG9kbyBpbnZva2UgcGFzc2VkIGluIGhhbmRsZXIgaWYgYW55XG4gICAgICAgIGlmIChsaW5lRmlyc3RDaGFyID09PSAnIycpIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmIChsaW5lRmlyc3RDaGFyID09PSAndicpIHtcblxuICAgICAgICAgIGxpbmVTZWNvbmRDaGFyID0gbGluZS5jaGFyQXQoMSk7XG5cbiAgICAgICAgICBpZiAobGluZVNlY29uZENoYXIgPT09ICcgJyAmJiAocmVzdWx0ID0gdGhpcy5yZWdleHAudmVydGV4X3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgICAgICAgIDEgICAgICAyICAgICAgM1xuICAgICAgICAgICAgLy8gW1widiAxLjAgMi4wIDMuMFwiLCBcIjEuMFwiLCBcIjIuMFwiLCBcIjMuMFwiXVxuXG4gICAgICAgICAgICBzdGF0ZS52ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQocmVzdWx0WzFdKSwgcGFyc2VGbG9hdChyZXN1bHRbMl0pLCBwYXJzZUZsb2F0KHJlc3VsdFszXSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGluZVNlY29uZENoYXIgPT09ICduJyAmJiAocmVzdWx0ID0gdGhpcy5yZWdleHAubm9ybWFsX3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgICAgICAgICAxICAgICAgMiAgICAgIDNcbiAgICAgICAgICAgIC8vIFtcInZuIDEuMCAyLjAgMy4wXCIsIFwiMS4wXCIsIFwiMi4wXCIsIFwiMy4wXCJdXG5cbiAgICAgICAgICAgIHN0YXRlLm5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSwgcGFyc2VGbG9hdChyZXN1bHRbM10pKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAndCcgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLnV2X3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgICAgIDEgICAgICAyXG4gICAgICAgICAgICAvLyBbXCJ2dCAwLjEgMC4yXCIsIFwiMC4xXCIsIFwiMC4yXCJdXG5cbiAgICAgICAgICAgIHN0YXRlLnV2cy5wdXNoKHBhcnNlRmxvYXQocmVzdWx0WzFdKSwgcGFyc2VGbG9hdChyZXN1bHRbMl0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIHZlcnRleC9ub3JtYWwvdXYgbGluZTogJ1wiICsgbGluZSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZUZpcnN0Q2hhciA9PT0gXCJmXCIpIHtcblxuICAgICAgICAgIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuZmFjZV92ZXJ0ZXhfdXZfbm9ybWFsLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIGYgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsIHZlcnRleC91di9ub3JtYWxcbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAgICAgICAxICAgIDIgICAgMyAgICA0ICAgIDUgICAgNiAgICA3ICAgIDggICAgOSAgIDEwICAgICAgICAgMTEgICAgICAgICAxMlxuICAgICAgICAgICAgLy8gW1wiZiAxLzEvMSAyLzIvMiAzLzMvM1wiLCBcIjFcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiMlwiLCBcIjNcIiwgXCIzXCIsIFwiM1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuXG4gICAgICAgICAgICBzdGF0ZS5hZGRGYWNlKHJlc3VsdFsxXSwgcmVzdWx0WzRdLCByZXN1bHRbN10sIHJlc3VsdFsxMF0sIHJlc3VsdFsyXSwgcmVzdWx0WzVdLCByZXN1bHRbOF0sIHJlc3VsdFsxMV0sIHJlc3VsdFszXSwgcmVzdWx0WzZdLCByZXN1bHRbOV0sIHJlc3VsdFsxMl0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X3V2LmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIGYgdmVydGV4L3V2IHZlcnRleC91diB2ZXJ0ZXgvdXZcbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAxICAgIDIgICAgMyAgICA0ICAgIDUgICAgNiAgIDcgICAgICAgICAgOFxuICAgICAgICAgICAgLy8gW1wiZiAxLzEgMi8yIDMvM1wiLCBcIjFcIiwgXCIxXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFszXSwgcmVzdWx0WzVdLCByZXN1bHRbN10sIHJlc3VsdFsyXSwgcmVzdWx0WzRdLCByZXN1bHRbNl0sIHJlc3VsdFs4XSk7XG4gICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuZmFjZV92ZXJ0ZXhfbm9ybWFsLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIGYgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWxcbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAgICAxICAgIDIgICAgMyAgICA0ICAgIDUgICAgNiAgIDcgICAgICAgICAgOFxuICAgICAgICAgICAgLy8gW1wiZiAxLy8xIDIvLzIgMy8vM1wiLCBcIjFcIiwgXCIxXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFszXSwgcmVzdWx0WzVdLCByZXN1bHRbN10sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcmVzdWx0WzJdLCByZXN1bHRbNF0sIHJlc3VsdFs2XSwgcmVzdWx0WzhdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5mYWNlX3ZlcnRleC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleCB2ZXJ0ZXggdmVydGV4XG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgMSAgICAyICAgIDMgICA0XG4gICAgICAgICAgICAvLyBbXCJmIDEgMiAzXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFsyXSwgcmVzdWx0WzNdLCByZXN1bHRbNF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMub25FcnJvcihcIlVuZXhwZWN0ZWQgZmFjZSBsaW5lOiAnXCIgKyBsaW5lICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsaW5lRmlyc3RDaGFyID09PSBcImxcIikge1xuXG4gICAgICAgICAgdmFyIGxpbmVQYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEpLnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgdmFyIGxpbmVWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgICAgICBsaW5lVVZzID0gW107XG5cbiAgICAgICAgICBpZiAobGluZS5pbmRleE9mKFwiL1wiKSA9PT0gLTEpIHtcblxuICAgICAgICAgICAgbGluZVZlcnRpY2VzID0gbGluZVBhcnRzO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGxpID0gMCwgbGxlbiA9IGxpbmVQYXJ0cy5sZW5ndGg7IGxpIDwgbGxlbjsgbGkrKykge1xuXG4gICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGxpbmVQYXJ0c1tsaV0uc3BsaXQoXCIvXCIpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gXCJcIikgbGluZVZlcnRpY2VzLnB1c2gocGFydHNbMF0pO1xuICAgICAgICAgICAgICBpZiAocGFydHNbMV0gIT09IFwiXCIpIGxpbmVVVnMucHVzaChwYXJ0c1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlLmFkZExpbmVHZW9tZXRyeShsaW5lVmVydGljZXMsIGxpbmVVVnMpO1xuICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5vYmplY3RfcGF0dGVybi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgLy8gbyBvYmplY3RfbmFtZVxuICAgICAgICAgIC8vIG9yXG4gICAgICAgICAgLy8gZyBncm91cF9uYW1lXG5cbiAgICAgICAgICAvLyBXT1JLQVJPVU5EOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yODY5XG4gICAgICAgICAgLy8gdmFyIG5hbWUgPSByZXN1bHRbIDAgXS5zdWJzdHIoIDEgKS50cmltKCk7XG4gICAgICAgICAgdmFyIG5hbWUgPSAoXCIgXCIgKyByZXN1bHRbMF0uc3Vic3RyKDEpLnRyaW0oKSkuc3Vic3RyKDEpO1xuXG4gICAgICAgICAgc3RhdGUuc3RhcnRPYmplY3QobmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZWdleHAubWF0ZXJpYWxfdXNlX3BhdHRlcm4udGVzdChsaW5lKSkge1xuXG4gICAgICAgICAgLy8gbWF0ZXJpYWxcblxuICAgICAgICAgIHN0YXRlLm9iamVjdC5zdGFydE1hdGVyaWFsKGxpbmUuc3Vic3RyaW5nKDcpLnRyaW0oKSwgc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVnZXhwLm1hdGVyaWFsX2xpYnJhcnlfcGF0dGVybi50ZXN0KGxpbmUpKSB7XG5cbiAgICAgICAgICAvLyBtdGwgZmlsZVxuXG4gICAgICAgICAgc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMucHVzaChsaW5lLnN1YnN0cmluZyg3KS50cmltKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5zbW9vdGhpbmdfcGF0dGVybi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgLy8gc21vb3RoIHNoYWRpbmdcblxuICAgICAgICAgIC8vIEB0b2RvIEhhbmRsZSBmaWxlcyB0aGF0IGhhdmUgdmFyeWluZyBzbW9vdGggdmFsdWVzIGZvciBhIHNldCBvZiBmYWNlcyBpbnNpZGUgb25lIGdlb21ldHJ5LFxuICAgICAgICAgIC8vIGJ1dCBkb2VzIG5vdCBkZWZpbmUgYSB1c2VtdGwgZm9yIGVhY2ggZmFjZSBzZXQuXG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgZGV0ZWN0ZWQgYW5kIGEgZHVtbXkgbWF0ZXJpYWwgY3JlYXRlZCAobGF0ZXIgTXVsdGlNYXRlcmlhbCBhbmQgZ2VvbWV0cnkgZ3JvdXBzKS5cbiAgICAgICAgICAvLyBUaGlzIHJlcXVpcmVzIHNvbWUgY2FyZSB0byBub3QgY3JlYXRlIGV4dHJhIG1hdGVyaWFsIG9uIGVhY2ggc21vb3RoIHZhbHVlIGZvciBcIm5vcm1hbFwiIG9iaiBmaWxlcy5cbiAgICAgICAgICAvLyB3aGVyZSBleHBsaWNpdCB1c2VtdGwgZGVmaW5lcyBnZW9tZXRyeSBncm91cHMuXG4gICAgICAgICAgLy8gRXhhbXBsZSBhc3NldDogZXhhbXBsZXMvbW9kZWxzL29iai9jZXJiZXJ1cy9DZXJiZXJ1cy5vYmpcblxuICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdFsxXS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBzdGF0ZS5vYmplY3Quc21vb3RoID0gdmFsdWUgPT09ICcxJyB8fCB2YWx1ZSA9PT0gJ29uJztcblxuICAgICAgICAgIHZhciBtYXRlcmlhbCA9IHN0YXRlLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwoKTtcbiAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcblxuICAgICAgICAgICAgbWF0ZXJpYWwuc21vb3RoID0gc3RhdGUub2JqZWN0LnNtb290aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBIYW5kbGUgbnVsbCB0ZXJtaW5hdGVkIGZpbGVzIHdpdGhvdXQgZXhjZXB0aW9uXG4gICAgICAgICAgaWYgKGxpbmUgPT09ICdcXDAnKSBjb250aW51ZTtcblxuICAgICAgICAgIHRoaXMub25FcnJvcihcIlVuZXhwZWN0ZWQgbGluZTogJ1wiICsgbGluZSArIFwiJ1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGF0ZS5maW5hbGl6ZSgpO1xuXG4gICAgICB2YXIgY29udGFpbmVyID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICBjb250YWluZXIubWF0ZXJpYWxMaWJyYXJpZXMgPSBbXS5jb25jYXQoc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0YXRlLm9iamVjdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIG9iamVjdCA9IHN0YXRlLm9iamVjdHNbaV07XG4gICAgICAgIHZhciBnZW9tZXRyeSA9IG9iamVjdC5nZW9tZXRyeTtcbiAgICAgICAgdmFyIG1hdGVyaWFscyA9IG9iamVjdC5tYXRlcmlhbHM7XG4gICAgICAgIHZhciBpc0xpbmUgPSBnZW9tZXRyeS50eXBlID09PSAnTGluZSc7XG5cbiAgICAgICAgLy8gU2tpcCBvL2cgbGluZSBkZWNsYXJhdGlvbnMgdGhhdCBkaWQgbm90IGZvbGxvdyB3aXRoIGFueSBmYWNlc1xuICAgICAgICBpZiAoZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgYnVmZmVyZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcblxuICAgICAgICBidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGdlb21ldHJ5LnZlcnRpY2VzKSwgMykpO1xuXG4gICAgICAgIGlmIChnZW9tZXRyeS5ub3JtYWxzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgIGJ1ZmZlcmdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGdlb21ldHJ5Lm5vcm1hbHMpLCAzKSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBidWZmZXJnZW9tZXRyeS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlb21ldHJ5LnV2cy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICBidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGdlb21ldHJ5LnV2cyksIDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBtYXRlcmlhbHNcblxuICAgICAgICB2YXIgY3JlYXRlZE1hdGVyaWFscyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIG1pID0gMCwgbWlMZW4gPSBtYXRlcmlhbHMubGVuZ3RoOyBtaSA8IG1pTGVuOyBtaSsrKSB7XG5cbiAgICAgICAgICB2YXIgc291cmNlTWF0ZXJpYWwgPSBtYXRlcmlhbHNbbWldO1xuICAgICAgICAgIHZhciBtYXRlcmlhbCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFscyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzLmNyZWF0ZShzb3VyY2VNYXRlcmlhbC5uYW1lKTtcblxuICAgICAgICAgICAgLy8gbXRsIGV0Yy4gbG9hZGVycyBwcm9iYWJseSBjYW4ndCBjcmVhdGUgbGluZSBtYXRlcmlhbHMgY29ycmVjdGx5LCBjb3B5IHByb3BlcnRpZXMgdG8gYSBsaW5lIG1hdGVyaWFsLlxuICAgICAgICAgICAgaWYgKGlzTGluZSAmJiBtYXRlcmlhbCAmJiAhKG1hdGVyaWFsIGluc3RhbmNlb2YgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwpKSB7XG5cbiAgICAgICAgICAgICAgdmFyIG1hdGVyaWFsTGluZSA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCgpO1xuICAgICAgICAgICAgICBtYXRlcmlhbExpbmUuY29weShtYXRlcmlhbCk7XG4gICAgICAgICAgICAgIG1hdGVyaWFsID0gbWF0ZXJpYWxMaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcblxuICAgICAgICAgICAgbWF0ZXJpYWwgPSAhaXNMaW5lID8gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCkgOiBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLm5hbWUgPSBzb3VyY2VNYXRlcmlhbC5uYW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdGVyaWFsLnNoYWRpbmcgPSBzb3VyY2VNYXRlcmlhbC5zbW9vdGggPyBUSFJFRS5TbW9vdGhTaGFkaW5nIDogVEhSRUUuRmxhdFNoYWRpbmc7XG5cbiAgICAgICAgICBjcmVhdGVkTWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG1lc2hcblxuICAgICAgICB2YXIgbWVzaDtcblxuICAgICAgICBpZiAoY3JlYXRlZE1hdGVyaWFscy5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICBmb3IgKHZhciBtaSA9IDAsIG1pTGVuID0gbWF0ZXJpYWxzLmxlbmd0aDsgbWkgPCBtaUxlbjsgbWkrKykge1xuXG4gICAgICAgICAgICB2YXIgc291cmNlTWF0ZXJpYWwgPSBtYXRlcmlhbHNbbWldO1xuICAgICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkR3JvdXAoc291cmNlTWF0ZXJpYWwuZ3JvdXBTdGFydCwgc291cmNlTWF0ZXJpYWwuZ3JvdXBDb3VudCwgbWkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtdWx0aU1hdGVyaWFsID0gbmV3IFRIUkVFLk11bHRpTWF0ZXJpYWwoY3JlYXRlZE1hdGVyaWFscyk7XG4gICAgICAgICAgbWVzaCA9ICFpc0xpbmUgPyBuZXcgVEhSRUUuTWVzaChidWZmZXJnZW9tZXRyeSwgbXVsdGlNYXRlcmlhbCkgOiBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGJ1ZmZlcmdlb21ldHJ5LCBtdWx0aU1hdGVyaWFsKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIG1lc2ggPSAhaXNMaW5lID8gbmV3IFRIUkVFLk1lc2goYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHNbMF0pIDogbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhidWZmZXJnZW9tZXRyeSwgY3JlYXRlZE1hdGVyaWFsc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNoLm5hbWUgPSBvYmplY3QubmFtZTtcblxuICAgICAgICBjb250YWluZXIuYWRkKG1lc2gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS50aW1lRW5kKCdPQkpMb2FkZXInKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgfTtcbn07IiwiLy8gQ29udmVydCBzd2MgZmlsZSBkYXRhIGludG8ganNvbiBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBzd2NQYXJzZXIoc3djRmlsZSkge1xuICAvLyBzcGxpdCBieSBsaW5lc1xuICBjb25zdCBzd2NBciA9IHN3Y0ZpbGUuc3BsaXQoXCJcXG5cIik7XG4gIGNvbnN0IHN3Y0pTT04gPSB7fTtcblxuICAvLyBjb25zdCBmbG9hdCA9IFwiLT9cXFxcZCooPzpcXFxcLlxcXFxkKyk/XCI7XG4gIGNvbnN0IGZsb2F0ID0gXCJbK1xcXFwtXT8oPzowfFsxLTldXFxcXGQqKSg/OlxcXFwuXFxcXGQrKT8oPzpbZUVdWytcXFxcLV0/XFxcXGQrKT9cIjtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgXCJeWyBcXFxcdF0qKFwiICtcbiAgICAgIFtcbiAgICAgICAgXCJcXFxcZCtcIiwgLy8gaW5kZXhcbiAgICAgICAgXCJcXFxcZCtcIiwgLy8gdHlwZVxuICAgICAgICBmbG9hdCwgLy8geFxuICAgICAgICBmbG9hdCwgLy8geVxuICAgICAgICBmbG9hdCwgLy8gelxuICAgICAgICBmbG9hdCwgLy8gcmFkaXVzXG4gICAgICAgIFwiLTF8XFxcXGQrXCIgLy8gcGFyZW50XG4gICAgICBdLmpvaW4oXCIpWyBcXFxcdF0rKFwiKSArXG4gICAgICBcIilbIFxcXFx0XSokXCIsXG4gICAgXCJtXCJcbiAgKTtcblxuICBzd2NBci5mb3JFYWNoKGUgPT4ge1xuICAgIC8vIGlmIGxpbmUgaXMgZ29vZCwgcHV0IGludG8ganNvblxuICAgIGNvbnN0IG1hdGNoID0gZS5tYXRjaChwYXR0ZXJuKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcblxuICAgICAgc3djSlNPTltpZF0gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlOiBwYXJzZUludChtYXRjaFsyXSwgMTApLFxuICAgICAgICB4OiBwYXJzZUZsb2F0KG1hdGNoWzNdKSxcbiAgICAgICAgeTogcGFyc2VGbG9hdChtYXRjaFs0XSksXG4gICAgICAgIHo6IHBhcnNlRmxvYXQobWF0Y2hbNV0pLFxuICAgICAgICByYWRpdXM6IHBhcnNlRmxvYXQobWF0Y2hbNl0pLFxuICAgICAgICBwYXJlbnQ6IHBhcnNlSW50KG1hdGNoWzddLCAxMClcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICAvLyByZXR1cm4ganNvblxuICByZXR1cm4gc3djSlNPTjtcbn1cblxuZXhwb3J0IGNvbnN0IE5PREVfUEFSVElDTEVfSU1BR0UgPVxuICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUgzZ0VIRFF3M1dJZS9wZ0FBQUIxcFZGaDBRMjl0YldWdWRBQUFBQUFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJrTG1VSEFBQWdBRWxFUVZSNDJ1eTllNUR0MlZYZjkxbHIvMzduZE44N2QrNjhyelI2WGIyUWhKQUV3aGdic0RCZ1hqS0pjY0IyeXNnNGZzUXBLb21KUThxcGNoNStWSkhZaVpPVUU1dUtVMFVTdTR3ZHUwalpCSXRuWW9PTkRVaUFFQ0NFcEJscEdLVFIzSm01TTNmdXE3dlA3N2ZYeWg5NzdmM2J2OU45TlpJc3dCaDZxdWQybjNQNlBIN3I5VjNmOWRqQ3YyRmZyNGVIZmdtZUF2ZzZlSHVHNDdmQ1Y0OXc4Rkg0d0RmQmYzUUE1MzVXK09rYnpyWFBoczg3aE1QM3dFL2VoR2N2d29PZkJXLytBZmk3ajhKN1hnRnZmZ29lZVFJZWVSSis1U1B3L0w5SjEwdCtBNzVmNzI5NEpWejhDTng0Qzd6c3krQ2Iveno4cFYrQkozNlNTei83RGNyYkJ3NjVaZHVUODRudG5FRU9jZkpHWkZmKzNrZkloNkEzSVJ2b0FhNTVKeGhrVHRqQjlPRjg5UGdINEFPUGNPWG5BYjBBOS80Yy9KTjN3dzgvQ3MvOGxnTDhHbjU5Rmp6d1FYam1XK0EvZXdZKzhudmhqMzhSbDc3NGFUMjgra1o0VmJJdCtmd0d6OEJ1ZE5tT29rZVEwMGc2RDF3SFN3UDZNREJSZk1WZGtPOEhuZ2Q1RnFaeFpuc0l4c1I4ZlVMVENIbENkT0xFMkczMXhpWURaa2U4bnlzZithZncvVDhCLytqZDhNK3V3c2x2S2NCbitPdmxjUGUzd3YvK2svRGRmd3YrM2s5ejZZblBUenc4K3ozTXRpR2xFZldSbmNDb2h6Q0J2Qkg4WkdDNFA4RmI0VGhCZW1CQVhxSE16d0k3R0Y0R0hNRDBVZERid0l0Qk1jYWZoM3dGMHZFTUp6QmJadjRvK0FkbjVIaEdtSERBeDlzQXpOTU9PT0dqSEQzenYzRGwyejhFUC9JVWZQU0R2d0c4dzcvV0N2QW1lRWtHL3lMNC9mOE4vUFdCeXdoYkg5akl3T2duakhMQXlNd0FuemV3dTdYbG5xK0hXdzhvSENSNENmaHhRalF4WDRSOEFwdGJrTThuWEVDT1lNZ3dueSt2bDA0eWVVeWtUVVljc21XNG1VbEhNRmpHTWZKVnhkOXY4SzRUN0JId1BPUE13RzBFK0JDM1B2WkJUajd3Q0VlLzlBUlhIdmtZUFBKTytON2ZVb0JQNGVzTjhQSXZnMjk2Qi95cE4zRHA4blc5NS9aRjI1eURjMndWWmp0RTdoNFlIdHd5dlVVWnZnQ21leFA2Y0dJNlR2aVkwR05JeHdsWFhjQkRTZ0JZRWp4QlRqRHN3SzNjcndwNjdQZ0lua0J5ampzZ1l5QVoxUXpuUVdRSE56UDVnNGIvMUF6dkFuL2lCR05tNGpiT3hJN2R5ZnU1OXVHL3paVy8vTlB3Z3grRUs3K2xBSi9nNjdQaDRjK0ZyL3pUOEZkZXc2VkxHKzdCMG5rOG4yTUEwc0VCdStNdGQzMmRzbnRMWXZOdzR2aXVoQThKMTRRY2oyeHZ3RHlBSFF5b2dhbDJxREV0a2hiSS9ZdHJFWG95UTJaSWxyR1UwSnpCRFpNTUN1QzRaRWlHcDR4dE16cGsyR1hzaVF3L3MyUCttY3o4K0RFY1R6QlBrRy9oZHNLLzRMSDMvalg0OTUrQVgzNDBNcFhmekFyUUVQMVh3VmQ5Q1h6VEEvRGd2ODNscnozZ0FxNmpKenNubWc1UUV2S2lEY01yRXNNM0p5YmJ3R0VpWjJYWUpaSUxtWVFuUlN5QlE5Nk81ZG10Zk1UcUNjb25WbEREVWNDUUhQZGhNTlRiSUxtUkJkUWRwSVFGc1BKOGFRSXllWERRakNmRDJJR0JQcnZESHMzWUwreVlmL0VFZTNwbWxvbmI2ZmJ1eCtjYjcvcVgwMlB2L0p2d2wzOHpLNEFBL25wNDVYOEkzL0ZGOEtYM2N2bndnQXNNak5qaE9ZYjVnQ0Z2MlY0Y3laOFA2UXMzakMvZk1COHBUbUx3Z2JSVFJCSW5HOFUxQVlKWUViQ3I0aEtDVmNFazRWNmNRSmh5a1dWeEU4MExGSTl2Y1YrT04rdTRXRkVNaC9JaUR1VHk5NUxKNFJFOHpkaDJJbG1HNTNhY1BKcnhIOXVSMzUyeDZSalNSUGJiWURmNEd6ejJQLzR3Zk9kajhNaFYyUDFtVWdEOWsvQVh2eFgrUytPU0hYS1BIT3A1U1p4anNBTkd0c2hHMGRkdU9QaTNOdGpESXo0azVHZ0ltV3l4RGNYdFR3bDFiVUlVRjV5UlBDaXVZQ0tvZzhUOXJvb2x3OE1UQ0VXTzRReFF0VkNpVUE0Z21aY3dNRmdKRldRUUwxNUVacVFHR1oyS011aUViUnlHQ1RtWFFYWU1UMlJ1L2NRRS8vaUUrZG94ODNTYng1bWUrZ2x1L0lzZjRMSC85WWZnaDM1VEtNQXI0YUhmRG4vMHozRHB2N3ZBSVluNzJPZzVOall3Y0o3TlJwSGRJY00zYkJpK1JzbTNCcmE3UkpIbUNENkU5UTVoemlta0YxYnNLVDZaa3BYaUJWUndCQ3hjUUNxQ3pPRWhrcGNySWRtYUlnaU9LbUFlRjhsSzNOZGkvU2JnWTl6R1hMeURXSGlOekpRTWhvd3drWFZHYlNMUG1aUDM3dEIvTnJGNzd3bG14d2kzbWJqRlZhNWQrK05jZWV0TnVQa1JlUHJYU2g3cDExRDIyN2ZCVjM0RC9NOS9nTXQvNUM3dUd6WjZMeXAzc1VtSERIWU9ZWXRmUG1UN2ppMEhieDN4cTFzMmVRUFRBVEtOeUR3d1RDT3kyNEtOeURTUzVvVE9BOHdiMGpTZ3U0VG1BYzhET2cxb1RvZ04rRHdpZVFBZk1FdTREWWdOU0U1SVRtQUpzWVJNUXp5dWhCcXhBWm0xcEF6MThaWlFHNHBTWlMyUElTRnpDZ1ZNT01KZ0FpUnlFcWF0b29jSjNxUWNmS2x3K0ViRmR3bDdlc0RuUXc1MDJOenI1MTUvZ1dzdi9TRDgyRWtGRy8rbWVJQi9ENzdqRDNMcFcrN2pIdUE4Mi9GdU5yYmxNRy9ZakJ2U3RPSGdkNHdjL3E0QkxvM284UWk1dUhoUVVrN2dJNEpHVkI0UVV4d0p0NTlxdmdaSnlRaElQRGJraDRDVFNuaHZscjQ0RHdBeGkxY29pSjhoL3NVUTh3Z0xCc254VFhtQ3JBWXlSeWFSeTg4cGh6ZVlJUmU4a0xjVE1PR2JtYXpIekUvc21INGtNLzNFRWZuWkdUamltR3Z6ZDNMdGIvd0RydnpYajhQMTM5QUtjRGVraCtGei96RDg3Yy9sOG1jZmNzRVBPU2NqaDV3L09NL21lT1JnczRIZGhzTzNqTnoxN3d6QUNIbGt5QW1PRlZJQ0hZc0M1QUZNRVJVOHJFdHEvSGNKSENERjVZc3VLV0F4VkpDaU1CNCtYMWdxQ3hKMlcrQnBFYXc0YVB6ck1rT3FVTU9LK3gvb2dLQ1h0RkJ6T0lFWnhNbHBoclREa3dFWkh5Zm16Y1M4eVlqdU9MUk1ldVNJcS8vWHhPNDl0NEFqWm03emZtNTg1Sy93MkIvOGwvQlR2MkZEd0IrRi8rTS9nTzk0a01zUGp0em5JeGRreTkxc09jY3dieGs1WUV6blNHOFlPUCtOaDR6SEIraThJUjF2a05zYmtvOW8za0Fla04wSWt4YjNQQ1ZrMmhTWGV6S0NWZVVZeXMvVGdNd0p6eHFrd0lEbmhGdHhCVEtQNVcvbkZIOHJTQjZRU2N2dDB3Q2VRdWtTa2dFcHQwbVdFZ0t5UXBiaThpM2NDelVOTGNvb1dZdDNraEV4Ujd4Z0djMERraDMzZ1NrNUp3K015QnRodURDdysraElPbGJ1eCs5OWpudTV6ZFZIUC82clNDbi9xbm1BTDRFLzlwWHc3Wi9MNjE0OGM1N3ozTTJHTGVmMGtBUGJzR1dETWZMUUd6WWMvdTZSZE4vQThQeFEwUDR1cUxqTmdCd25GQ2x4T2cvbDRwSkFwQUJDcXl4T2VBQVZFQ2xvUDk2TFV6eEJGcUg1OXlURitpVkU1eVd3TkxlUXdnTmdDSkNUb2ZXQnliRklCVlVOeE1nQkNQTUlQbVNFR2ZXTURZNXJobUhHVTBrWDBSMittVEdaY1owZ1RmamhEdktPMjkrMzQrWjNUUXo1RmlkY0I3dkZML0NCWC9wRDhJYmZFQjdncGZDS2I0Qi84SFl1L2FjUDhhb0x3Z1dVZXpqSElZa3RneHl5OVMySmtjTkxoOXozdXc3UWl3TnljOFJ0eEcyRHpodGtONUNPeDRJQjVrMVJpckJJcHJGWTlod1duaFBrRVhZS1B1QW5CWkRKVkFDZXV3TERZcFZaaXplWmk2ZkFBbXRZV0hnT1FHZUM1QkhKR21CU1N5eXhDRUdXY0VzQkJxVjRDeGZTcnVBU0l4V3l5YlNBamhxUFRDSUVTY3RpWkZJUVlmTW01Y0piakpPUEozWlhOaVNVZTducmdST0czYzl5NjhjKzAwYjdHVmVBTjhBN3ZvTEwvN0Z3bjIrNUtNcmRiRGxnU09jWWZjUEJjTUJnRzRiTklRKzliWXU5Y2lROW41RGRBVHFQeUx4QmRvSEdwNElIWkI2S3U5NE5NSTh3RGZpY1lDN0NJUTlOK0VVcFNyQzJLZUZUS245L29zZ3VsVkNReStQRVVoSG9yR2lXZ3ZiblVCb3I0VUJud1ZFc0o4UWtYTHhpbmlJRGlOVFRGRndSazVLeWl1S3lFRk9sZktpNGg4Q2xLSlQ0Y3A4NEhBMkprNGNTNmNVSmZRNU9yaXNUeXQzR2k0NFpucHk1OWZRMXVQMnZXd2dRd1A4MC9NeHJ1ZnptRFJkUzRpSWJEampna0swZWNtZ2J6ckhoa0FPMk9uTFg1eVR1Ly9JUmJvd01Sd2xTU2JHMHh1Z3N4V29ad2xVbjBxNHdmSVc2MWJBa2JjeWZtVVFhWDYwdFFHQ2lFVVVlaUQrTEZ1WXZCWVpqb1huUkVpSFFjUDhTMllBVTk1K3dDUDFXeUtBaHNvUEI0c25xN2JtRWhyRndBeVZ6bUxHaE1JWm9DUXVXU2tod2RtUXgwbmlFWEp5NDlmZ1J6LzlYTy96WkkyUnpqTytlNTl1NDhmVS95R1BmODYrYkFveHZnYmYvRVM3L3d3UHVFK01jRzg1empnMEhISExBaHZQamhtMGVHZTJBQjErV3VQRFdrWU1IUnVSb0pFMERLUWVBeTZtQXBiQzBJdWdTKzFOV1RCS2FCVFJoQnVxS1VOQTlLQ1phczdaUWpPSnVDL01uamZXdFZUNWZma1JrS1F5SkxPakJVZ1VKaFNoU01qWjZRZjZqSTJSSTRJUEJKaGV5U0F4TGptb3VBaDhOMG95UGhxVmNhZ21ENGVPTXBRa2ZKanhONURIam13bmttTjI1bWJ1Zm0zam1PMjV5NHlkM0pHN3hQTS96UVo1Nno3ZHk1UXV1NzlXemZ0MUN3SnZocS80WWwvNnhjcDhJRjFBOXowWTNKRGxra0FNR1BlRGN1Q1ZOQndnakQzenhsczM1TGJJcnNWM21BYzhscnJ1RkI1aHFyRTlCNGxUWFhYNzN1U2lMMjRCbFhWeDdWcGdDSzJTRldYQkw4UmpCYzRvd0VTSEFOSjViY2RPQzdpZGdMcTdjYzlFU01TMUtPUXMrSys0MUE1RG0vcG1MVjVLcGVDa0gzRXRLaXBkUVFpNXFWV29LUmZYY1N4Z1IwYUtnTG9nVkxISHpmaWU5WHNoUE90UEhJREZ3TDhPbHE1eTducm4yNUROdzdkZFZBYjRDL3Z6djRQS2Z1Y2g5RDhGRmxQT01jc2hvNXhsOHl5QmJ0bWxiNHJ0djJGN2NjdC9uRE9qeEFDY0Rza3V3RzVGcEtMRjhHaVB0R3pCUCtGeENBN3VFVmJDV1E2QVJyeVZINmhiQ0xzQ3d4RzMzVklTUlN5cFlRRno5dDRBNm1VTFFKbmd1aWxGd2dKUndNOWNZRDhFdkJ6TVlxV0NBUW5FSmtGY1V4TE1XWVllU1dBamVTYmdVNENpcUJWQUdMZTFOSk1VTjZReCsvMEM2VzVuZXAvaVJrRjNsUy9DdnZnZDUvZi9McmIvejY2WUFkOFBoTjNQcC83N0VmUzl6TGpKd25zU0dKQWNNc21YMExZTnYyVEl3MkJiVkRmZStPbkh1NGdiZmpjaXVDSnJkZ09ZeDh2ZWhDTk5TV0d2azhGN3lkcmVDNW4wdWxLeFA1V2NMNnk3V0dmOEd3SE1MejFBVm9QKzJzR0pYWktwY1FRQS9LOENQckpoTDVQRlNBR0ZnRUhNcHIrY0JDQzJSM1l0SGNDbldYS3BTcUpXZnhTZ2hTd1EzRFNqanVDZ3VqcURCRXpnMktENDU0NnVkelhubjVuc1VuUVZCL1NVTXIza0tlZnlEM1ByWlgzTUZlQlc4OFM5eTZXUG5lR2dMRjBtY1owd2JSamxFN1R5amIwaHNHZG1RWkdUd0RlZnZIcm40NmczSmk2WHJOQmIzSG1pZFhhUmw4NEJQUWV4RU91ZFQ0ZTQ5Y0VLMWN1WVFLa05uMVNVOXF4dy91U3BEY2R0bWlsVUVQbFhYWFJXaUZKcmNwTGo5T1JYQmVMRlVuOE9kV3lrd2xkQ2d1SG14Yk91bzZlaEZ3SXBiZDVmeVk0QlhsMUt0TEp4R3FVVzdsNUFnbGtDOUpJc201QXk4WExqdnBjNno3MUxjUkFUbFRReS8rOTA4OVYxWFAwM2ErTk5TZ0RmQ2Izc3pmTXVMZWVsdnkxendEZWRGT0UveUF3WTVZUFFOeXBhQkRZbUJ3VGRzZGVUOC9RUG5MZzM0Y1hINVBvL29YSVRyODFnc2VpN0swTDduU04xQ29EWWxQTmc0c3dHM0VFNTE5MVppdklWVnV0WHY5ZS9FMytIRk5STzNTN2gybTZ2ckRpdU5GRSt5Tk9yWnF5TDBHQ0I0WjQvZWhJSVZ0SGtFejhFWjRLVkhRYXlRMEFVVU5MRHE2cUNwUEE1QmRzSjBEbmlSSUNqemh5Qm5ZNE1mN0xqcmduSDE2U2ZnbzUrcUxJZFB3KzFmL0VQd0QxN001VmVPM01QTW9hQmJFZ214QTVRdEkxc1NHd1pHRWlNd2tvZVJkRGhnODRnY0pkd0tzWk5KREhNUjhFeXByR25XaGVjUHEzSUU5NkhGMk54Z3ZDeWRIQjYzQjlIU1dEL1ZRdTlYNEZYUnY4V0ZsdmpYYXMzQXczQzlKQ0twM3FmQkZucDVqWnhRQ3RxUElpQ1NCVThLUHBPU3dwU3hzWlNHTVlubks5U3hlaWJiQnZlTTJRWnNMa28xTFBtWnNjV2xKQ0hubnpGMkZ6S0hYd28zMzVPUkR4NEM4QTFNZi9LMXZPNTN2cHNQZk02dnFnZTRHN1pmQ3QvK3hWeittc3dGakxzWk9ZLzZBY2tQU1J3d3lJajRsb0VCWmNQSWlEQnk3akJ4L29FTmd3U3ZYeG00WFFGd2JrUHhDcm1nZkxLVTIzS0p4V1pEQTNReWx4aHZ0Vm9Zb013QzBFbmw2YWNJRVZOWTdSUmhJRmk3a2k3V1hvT0l6Ulg0UmR5dWdBNFRaSmFDS1lSaTliTmdFUm9La1JQS0Y3UzBHd1hzZVhpcDZGTW9hRTlhaENBSUk2OWRjaDVGS2hjY1IxeEx5OWtBYm9uTmcrRFBDTlA3amV6S2pQZzk3QjQ2NE55TGZvWnI3L3pWVW9EMGhmQ09Qd0RmcnJ4TWxJc1loMnpZb2h5Z0hEQ3dKZmtHWlVUWmtNSURLQU9IQnlPSDl3NmtYVW5oZEM1dW43bTY3UUJnOHhEc1dDbStGQUEzaE1WcEE0ZTF1T00xVmN1RllmT0t3TDM4SzU0d0x5U1JTMkhvekN2TnF3RWVGMWR1QWZqcTd4NXBXZ2tQUXFhK1pzVHp3QTMxOVJycWQxcWFhTlQ0cnkxc0VDbGliWTAwSkxnTFdZZ0s4K0tsOE1BSklPSjRodk52TXA1K256TThuY2trVVFaL0Zma3RMMExlL0l2YytuOU9Qa21PSUgwS29PK1Z2eE8rN2VXODduV1pDMnk0bTRGRFJBOFo1WUJCTmd5eUpmbElZb3N3TWpJV0RLQURtKzNBd1lVUk9TazBMMU54OVdJSjk2RVZleVRpdUZXa1g0SGRWQkg4c0ZUaGFpNWVZeXdsWkxTODNOTTZCbHYzYjZSb3EvdXE1V2RwbVVFTk9UWG0xM1RRNiswVzlHSllMRFZjbVJSZ1dNTlJrRlB1MmdUdENCWmV3bXY4cjBvZ0h0N0N3NHVBaUdEWk1CTnlNdTU3cWZMMFQyZUdDZFJkTWptOUhGNzNFYTcrN0MvREwzMUdGZUF2d0lkZnllWFBVUzdLd0YwbzV4QU9HSHlMK29Za3hmS1RiMUdHY1AwRGlaRlJSc2JEa1lOTlFuWURHbVZiaVRLdUJ2alRBSFhtUS9Ec05ZOGZzTUFKWXNIZld2UnhpeUlTblRlV1NycldXc1JPZjF2dnFwRUd6c1FEalZmaHE1TEQwZ3YxTE1XTGVIaUtac1dsWG1nV25zUEJ2WFNmbVdoWVAzR2ZZdWFsRnBBOXdsd1FSRlFGQ2lYSVVocEpwSG9BSWh3VVFDQWJSZTkyNW1maCtCSG5KRnBkQk5kWHNQM2k3K1hhLy9USk1MMmZqQUlNcjRlMy9oNHUvV25oUG9GN2NjNXp3QmJoZ01RQmlTMHFHN0FSWmN1R29TZ0RJNG1FK3NqNWMwVXRTbjFlbS9DbHRtZmxjUGtlNUk1cDVOM0ZHelFMbDBJSUZaNi9JdnNJSDJqcEV2SXVEQVRSWXVFSnRBcGFKTEFGelMxTGpkOGh1TW9Ia0tWWWFVMEZQZTZyOGQ4V3dYbGUwcnptRWFwZzQ3VzllWk1TUm9vbjg4V0x0Q1lrd1VvM0NtSWc1dmhRc0lpY0dPYWdoNW5qOTRGTVRuYkRnUkcvK3dRWmY0bGIvK1NGbE9BRkZlQzE4TWJmRFgvcFpiejBkYzRGRW5laHVrWDBvSUE5M1RMNGlPcUcwVWRHTm9nT3BXMmJnY1FHSVhGd2ZrUnRRRjFKYzBJWVNxVXZldXdLV1ZJRXJqbmNkeTdDSlNwbitGRGNZVXUxaW1LVUZDOG8yaHFqZlFGdkhtSEN2ZFFLYXZwWFhHeTRlU25ld1NqZlh1c0w0ZTdMejZFNDNubUN5T3ZkV1pRcCtvUzllZ1Nqd3hMTC9TYTFMOGxibUNoZEJsNjRBQTk5aUd6RkhVd05WOEdHOG9EeGtuRDF2WTVlZGVZQkpoTkdNcStEdDcyTHEzL3IrUmVnaWw5UUFiNE0vdk0zY1BsckwzRHhyc1E5d0FHcUI0eStSZndBOVMycWtmTjdRZnppQ1EwL29Bd01ES1FoTVVoeDQycGpoSUJvNjdLU0VXaXUxbHh3QVZaNisyczZXQzVTV21qWUxyOHVlWmkwMkk5TEorUjR2Q3g0d0gwaGRPaXhRRlV3RDBGblJaQUNEazN3RnI4MVhIc0JmU1pTdUh3dmp4RVR6TUhuSUl0d2NqQ0RoUWFRTUh4WjVobXloTEpJaXdqTkc3Z2dZZ2lSR2NUdG51RGd4Y1p6UHlwTVc0TTVjMFR5aVdNdUlxLy9DVzU5MTcrU0F2eForTUY3ZU5sZHlnV0VMY0tHVWMralZvUXVqQ0Fia2xWckwrNi8ySDhOQllra2lVRkwvTmZhYmV1bDhxY2hVTGVFUzJxa2phSm9oSUVlOEpXTEhsaWdXbkhnZ2FXQzJBczh1SGFYRlVXTExHRFB2SFB6ZEc0NmZwYTRIdzlVTDFWUW5WSllaL2tOd1VjTUQrcllWUm9tOUU2aHJLYUZKcVZOZmRjNzd3SXNuS0pVSllSWmVaTFJ5VHZuK0FPT1h4TmNackpuRVZRdVlpLzVPRmQvNmdsNDlGTW1nbDRDRDcwSi92ak1aV1pHUmc1SUhDSzZRVWxvZ0R4bFJLeUlXMGpoOWdlVTB1Q1pvbmMvVWRJNW9aUnZTeDRlUWd6aXA3Umg2MktSQVd1UW9nd1dLRnhWbGc3Z21QY3pha3ExZkNzVS9CRFRRZVgzK0ZWTGliNWxYaDdEZ2xYUFBMcEZ6YkU2STVCOTZTSTFiV1hmMHVRUk1GOEtRZytFV0xaT0RORnRuQUxnVGNDMmZIUVNXQVkyRGo2Z0E4emk1YkprMEYyaGcyeHhCZEhVT3NDaFl6Y3poNWNIaHZ1TjZ4K2I4WFJZbWsvSmpKdy9mQU9YLy9DN2Vld0hQMlVGT0FjdmZqVjhqWEVCNVZ3SWFJUElCdk5pK2NxQWhMVVhwUkNFQkhHTG9vZ3Eya0NmQkhBckxkMFc3VkRxeTRDSHlKTE9XZC93RWFCS1JNaForeXArY2RNYTBWU2s5WGxuYTgzZDhkcTBmRHBudW9aQWNQT1lKL0ZRckM0MlE2RDNJUFpMczJCaE1nT2xpMW5NSDNyeEhDS0VlY2RUQ05rTFNCUXRuZU5zU2hOMDljTWFCSk40S3JlNVlZZmV4T1QxdFpsTHZVS01nWkdiUjg2RjMrNWNlMTltNXhPdWg1Z1p4amxHcGdkZUJBOC9DVTk4U2lIZ20rRUhYczdsenp2SFhjUEFCWVR6Q0llSWJGRGJMRHcvSThJRzFiRjA4VEtpY1krUVNENGdPcUNlU0ZwU1B2RnluMVp2RUQzKzFjV0xCRkhUcG42VzVwQlNaRm04aDRUU2VOZGYxM3VCbGhLYUJPTVdJU0NhUjZ2clh2NUdsL2p2cGExcmNjWFN5clRXbEtpYlBQSU95TG5VYVlLaVJrNGpoS1NHRUZuQ2dXUndDZVVKN3lFbVVTT0lieEZRSTZ2Z1lxWDhNQmlqWitTQzgrUS9BeEVqQTlsM25BQVBzM3Z0UjluKy9PTmNlKzhuclFBdmdrdmZDSDlWZU5rZzNGc0VUeFI0WkNUNUFjcFEwajgySkUzbGZrL2hGWVlJRHlYZTQ0bWtJMGtLMnRkQTlvaTJpcDFHcDYrUVNsN3ZLWkI0S2tnNVBJTkVlQkRWUU5EUmd0MERPSXVldktVWWdFaTk4QnFHcjUyU0xBcFE0bnNJczk0dXVxUnZ6YVZFUmE4WWZXQ0lHb3FLQXVTWVZZUUNFb3VYRVRxUnhtQ0xMOW1EZU1FRFhsTEFPb1lxTGlVRGtCaHg4eUNJUWhGc2w1bXVPTWRQT3FhWjNZRXh6ekJodkppVEwvb0Zydjc5MjJkVURJYzdzSDVmSlZ3bWNRNFlDcjNKQnRGRXRoTFhwWnZMazNEL1JmZ0w2U0tVN1J4Q0NDaDYrYXJyVDRIWUpacXZOWkMrV3dnOW1MamE4cVV4Y2lVcW5hVnJlUHhPWUNyTDRFZWxXT014MGdtZ2ZkbFpKaEdQMHFCcVhUQXJOWHFSZ2d2cXVMR3BGYUNYbzM5UUpRQ0dSdlFPTFZIRnN3WEo1U0ZZUTRkVTdBRXJ5bWFnbGtOWlUvRWtDaHdOcFNwa3FSU1VUZ3hqQkl6eHZzUk9qYVBTbTRidERvRWR4b0ZmNEo2SFBvZEw3L2dScnZ5M0wrZ0IzZ2hmOTJYd0Z5L3lzZ2VkY3lqbnc5SVBTTEpoa0lQQy9MRUp2ajgxRnJERThoRUpLQ2dNaUJTeVI2VW9UWkxVMEwyWU5xRUxpenV2Ymw5V3d4WWxkUlBwS0YzcHNVRC9MUzFWcXk1N2JmRWFxaERzWHVUNXBYK1FVMkNTanVGYnZFSll0VkJxQ1RVc05FOFIvSC93T3hiZXd3TXpGRTZnSW51dkZlTFdzMWd6Q3RSTCtFaUdpTU1Nekk0Rkw4Q1FjVEVzd2UwUE9QbHB4N016U3lhN2tObkpUT1lDOXBvUGNmWHYzTjdyS05aOUJiZ1hYdnN3bDErVkF1V1hoMnlpTER1R3U1WkE5cWxONkRaMEg1WmFZM3o1ZlJGVTlzVWJxTlVlK3pwekZSaUFGSzVUV3pHbEFUNml4MTdsRE9IZlNSbjI3K3N5QlYzLzN1WUpyYXNCc09DUFN1UTBjR3JhNHIvWG1vTEp3ak5VUWlzTGMwN1lKTmlrekhOcFcyZFgreG1WbkpWOHJFekh5andMZWFmTXg4cWNGWnNUZVpld25aSkpoUnJmSmZ4NGhPT1IrU2h4enl1RUcxUENEMHFJelpwQ2RnT1hPUCtLMTNQNWo1eWEwOStML2ZjL0JLOVd0Z2M3YWxHbkNMZ2kvdlcvS2RJOUtjSmNoWURVQkdkdHFLNG9nM2VQOFI3bDF3bTlISlU0VzRDZFVhcHBWb2N5cEhnREVZbGF3RnJRYmwwaHB6WnRzQWYyYkU4eHBPc3YwT0FEb29LWHN5NmtVYVNrMVhQVTkyVzJLSUtqekZFenlGR3F0aXpNbmtxTklYb2E1dWhXeXBNeVQ4bzBLZk9VeUpPU2N5S2ZERXc3SmNlM0hTdjV1Q2pDbk10dGMwNGtVNDVPUmlhVWJDUFpCNXlSaVFSc21SbjVDdmoyVDRnQjdvR1gzd052Y000RGg4eHNHRG1NWEdVc1lNOU9vMjBsWVlFTSt2czhsS1NvV2pmTHY0KzY2UUJlZGZ1YTF2ZmJrdDRaaWdaaEkrR09GeVVvN3JwNWlCYjdnNnRIb2lRdnJYdGNOZmlCYmdWTTZTK1JoWTlWWDlYczYzK0doUklVNU83WkNzVmhIVkIwaS9uQjh2dzVLYmlqT1pFVk5IdnBTZ0xVcldRQ21tQTJOQWx5bExCc2NLamtJWlV3Y0JMWEpTZElNM0kwc2p2T25MODdjWEpySnRmc2lRMHdzZVdReDdqdzh3L0F4V2U2YmFjckJYZ0kzbllmbDErM3R2QWlXTkUrTm11ejlCcTdxeFd2NzR1LzBXRng1MXFFbTZ4M3h4UmdWNnR4NFlLbGQ4Kzl5Ni9XMW9GQXJmRzlLUUt0WWdkYWhCeWlqUUhmOHJ2dEQrS25pTTIxZDhNNm9GZ0RkVGlMOEFKRk03VEY5UElBaTg0Z0M0OWhVU3BXc2hWQXFHS1FKUVpaU3F6UGtvSjhLcVZ2SFdaa3pFalNNdjJVdzB4S2R3aCtLSEEwTUcweTZUQ3hPeDZaYzhZWm1YVmlZa05peDQ3QkgrYmNiMzhSbDk3K0RGZitYdFB4N3BOdnZnVCtpd2ZaUGd3akExdUdaczFqaVNtVzJyU090OWdmMDdJaDhQb2ZYWXFtdGJldWhRSmxHYnZVczkxeEFEU3pQbVRJR2Q0aldxNmJ1eFZ5L0YzakVKQ09WSXJuM1FPS3JyV0czK09ONHM2emRjV2hXaXlLMENJc1hVR1ZHallUc2k4RHExYWJUV28yRXhqSTVoSmFjcFlXQWlvV21MTXdUMEtlbFRrUHpEbkYvWWs4cDhBSUNUdEtaQXBlRUFhT2QvWGFEa3cyQnVXWnVGMW1uZmgzdWVmdlBnRDNWWC9YUE1EbndOc2VoQWM5UU1PTU1zYlBGWlFsVXJkdWhVRHdRN2l2Nml2S0IwMW51blpwdVcrTitkWndRWW1INlN3MDMxeXZOa3ZmQjNQTGR3OXRaTjFoYzRmaEtNZGJsODdldEZzUU9kNHhnN1pVOCtJV05jTGxWc28yZnU1cUExWUxRRkVZS2w2dCs1bVNJbWF2NUpJWFlpajRhVW5sU3RiMUZSSVlTSk9TVHhKcFROeDhNbk5DWXFNRHM4MDRpZGtHZG13NFpJTnhnY2U0L2ZGbjRObFRJUEF5ZkwxenFWU1RHU0pYcDBQelE3amFhbFZqc1NKZG8rNVdJQWxSVmt0cWoxRmRXWjkzMWdaQ1JqcGUvN1JYOEU4b2ZEa0QrZThyd2ZJNC93VFpBWlhGc3pzOS94NTUxSjVUTUkyNWdnQ1F4cnF6cU84b3pxN01sc2d1bUtkaTZYUHhBalpMUWZvN3NDazFJSmh6S3NCeWxwSWxISmZNNHZuSFM5NldUVXZyR2lPa3hKemdOb2tuU0g2ZWN5OStDNWYvN0NrTThGcDRPeHppbkd1eDMzVnM2WmtIeW84cHlScFpHd3BXbFlpblN3Z290MnZuOWdzVnE2cHJqbCtseFVmUUZUTjNsb0I5N3paWkNlWk9saTkzSEl2ME0veENFYjZ6enhkVkQyYkxBR0o4Vm92N0FsRXFuWEpFdEJXUFVCQWJDdFdMNThnZU80bThsQkRxMUpBcDgrZ2tVMndYYzVCbVZETTBMMjNxZnFoTVI0bmJ0eEp6R3NpZXlaYVltQ0RCUEk4SU95NHdDTUFKMjBkV0h1QUJ1UCtsOEVyblFqaWMyTUJscFVKbm1sb29XSWlVVkVhZHFxVmIrUmt0WGtHMHhueTZXRnZMb1hWSU00UlhPWUE2eU5sQUgzc1dkMXI0aXllUlZXajVSTisyc3RyVEhxSy96L2R1YzZSdzhTcmttRWcyMkh0Y0dFWjErWlhVOFdvNFM2cnFYVWVTbXpDNU1xbEVPdFlBQUNBQVNVUkJWSHZCQktVZmdjSUR4TDlUTGh6QnRGT21uYkl6eFhiS3JTdkNGSGhpTnFHc08wanM4a2htWUdhREFlY1llU21iUDFIcWthRUFyNEN2eWx6aWhESEtPNlZFbFJzUnBIdHV1TXVSS2NqZVVFeWxyVXZ4cmd4YmQvVlUxMTdZTVczV1lhMEpYcnRhN1ozaWU4ZmNuU2x3VnZlZjliZHI1Vm1VeS9TRkZjSTZvTGNRVTlLd2tjZFNxclBldjB2QlErYks1Q1hjdVF1ektkbUZPUmRXTWVkeWpXWXJ1R2oyK0hjcWlwSG44cnROaFF1WVorWG0wMTJvWWNBSVRnREZyR1NPR2VXakRMeVI4ZTB2NTlLWE53VzRCRjgrYzFoNjl0Z3lSVHFVYWxvVTgvZHo1Nkp0TDM1Szc0S3RTd1dqYzFhNlZNN2pUZlYvYjMzc3QxTEt6ZWlaZGY3OWVMd0luRHNLdlBjU244ZzdaRDF0L2Z2S1lsMERTQTExYnRJVXlFeFgrTUcxZkxZcTVHeTBjR0hSWlZ3OHlmSjVMWWVnVFpnblpUZVhsdlY1Qi9Pc3pDZVUyMlpsM2duWG4xYm1YU0tqekZxVXpKMHlYMGtpeDdqT1BSSDFYOHZodHpRTWNBTFB6YkE3WU54NHVIOWpKTmQ0YktVQU0zUkVqL2JMR1dFTjlFNlJqZHJhcVB0aWptdTVtSlYwYWRzMFZoZTlMSHpXVXluZzJmSGV6NGovL29LWkFOM00zdjZYcjNvRGZPLzJwYkNrcmR0RTFXTnlLZDYvRmVYUDBSRk1MQ0t6bEZmOWhpcEY0SXZuQ2R5Z2hTK1lBUWJGYzQ1d2JPZ0FPU3ZYbjFPeXcwUml0b3hwMlo4OE1iZlh2RTVwNWpsZzVDcDhQeUREQTNEM0FMWmh1L0dpREJ4RVhFK3RWcFFhNTIwTGxZSWdaS013aExvd2JVYWhPVk1YczNNVWljdDYzc2lmUlVoaGNZSWlxYmkrZWorZFI3Q3V5K2Mwb3VjRkZlT0ZkbUw0M205VmFmS1p5ckE4cW9KRjYwcTgyV1NWU3FvV2JrSlVXbU5KcnVraE5NVXVua0x4NkR5YXBhdGdWdU1RQTExNkN0Z3BSN2VFNDEwRm5XQXFaUTQyMXRHWVZnNG5NVVY0dU03MmNjQ0hpL0R5KytGTkoydzRZV0NNb3NmVW1IbGxqdEc3MlhyaEw4UklrV3FraEZZZm9lME4xUnBBMXZKOGRYaEN2SWFEb3M5K2g1emVXKy9zd2h0ODZzSS8yd3ZZbm8zM3dxLzM1TzQzVTI5aHdJSVZNSlhXK1d2ZGJySm15ZVo3b0hNdi80L2F2bG5waVpsZGdrOHN0TFpraWMwbmVXbDgzUnEyVTVUTWphc2xYTTRJVTlLVzRHVnl3d0Z6ZHowekExL0c1dTgvQTY4WnpzR3JIK0RTNjBaR0xOeC9qaUtQczA3WHZERm1KVmJOcWd5VkpZc1dhUTFRcUtIWjJzVjNNV25nVHpVNlorTnZ2RXZwY2hETWZVMi9qOHM1cU9OMVdQaEVucUZDRTJudTk3UWkrTjdqUTJpeEw3angvVlhvZExOODNZWWhaY2tLbG80Z2FVMmcxb1ZNaXliUjJ1enBvazBOc3ltZW5Kd0x4VFJKNXdHeU1nL0NrSlRqbThxTm03RVNMOER6VEdKbVpnNmptMjIvQTJEZ01jWi9laDJlSE03QmErK0RsMDBCRWl5c3ZtaDNBUlVTeElLVTdYZU5yYk05UzlLNFRXd3RyQnBJUFBvNHBYTDVUUWtrWGxkSUVVcHlsM0QyZ3BFdUxLd2hoOFNTcUk3STBmMTV1OU54M3M4SURSWmV3THVmcStYN2lnK0kyMVo4Z2F4OWlnYmF4eGRYenpJQVpLR1FHY0ZIS2JPS0xEMmxMcVYyVUJuQjNFMml6Um1ldXdZN2d6azZUbWVVT1JTVU9EQmpXYW85VWphUkpuOHRmTjJIdVB5MXd6WDR1WUhEelZCYURWRlN1THdGNW5rSXhtMjU5cklxa0N4SVhGckZqdFlpMm9lQjVhSkw4Q1cxWHFndGZxWU92Rm5MbTNzUmhYTHRZUVZmeGV6VHc1Wml2WWlXQzcwMFlVUVFhS1NXTDZTUEZTVXdxeU1Fc2lvaytVcDVPaktweG5oZEZBTHorUHVlM3lqUGJkRm5hT3BrRStZc0RLRkVGaUREZ2lnNk9oS09qOHMxeXZHK1NyOUlUY2VuMVd1QWtjdlZsUzBqd01ud0l2aGNEZUdmMUkxcUpEYnhBU3kwYm1mUitPV3RUd2NpNVpEb0I2Z1h4Y05MK01wOXh4N25VNXk5a0xXN3hhUWg2TVFDYkx4UlRuTEsxcGFJSzNjQWZOSTFlVWtYblhzdWY5LzlFMW1LUjQ3dlhmcFhPblV5clBqQVBodnlVSVcreW16ZDdJQ0lORXZPWFRtNmNTTlcyOU9GS1pkT283bk5PeGp6YmJoOUs3ck1VOVJTZ2gzTW9kRzVDMXZsOStJQktLcHg4aUsyWHoyOERyN0ptbkFneC84emlhMldsaTAxWFpvWWJmblFDekFNTjI4U0hXcEZvUWFXc3hpcSs3WXVoaWNyakdDejhJb0pna2lwZnl1MktKQjBKVjAvUlFDeEZ5N09TZ1ZwejdYRTZ3VUExakp5RTdnV0Y1OVh3SEJmWWZvdXdsWVFqcUZSWHhwRm04Skl6QjNVOENDQnBhVUJYUS9EZ0hMc0VFbWFzdURDN1oxeU8wZmppaHN6TURWK1JVUDQyZ0p3MWtTMkt0K0J6TGdWZUZDZmdKODc1b0xER016Zlluc1Y2VTRLUnhUcU02Y0ZjVG85RGJwY1dPdmdHejFwWkRXK1M4UzltallWMXN0NzEyMTB6OTliK2dLdTdCUzNMM3RWdnZYZlZrWFBIVDR4WGQ2emhVRHlpcDA4L2ZyV3dPY2Rxb3U2eEduUmRkMnRBa3VQRkhyQkZMSlNsSndvSFVSWjJqNHJnczA3bWlMdFUyYzJPTEVTTG1ySXk3cVBqeFlUTEMwaXlnYTR5ZVk5d3c2ZUdkZ0pRZnQ2ZE42Q01vVjczR2hoOW1ZREdXUHBaVXl1SkpSYytBbXlMUytXOTdvQmU2RlFWNi9ZTWp1aHZhQjBFYVphbjByS25oMnU4M1NCRlI1WUEwZTZrTlNCVjJ0TFJkdnY5UTI1Q2JrUlB0NHdocjhBajJEVjNYZGcwRHRSWkpNV1Fsckp1QTJuVks4UWowdHh6STBZazhOdWdsMnV5bHk5Uk90MjZhN0hIaWxueTdzOEFnNkIxOE9mMGdUM1pqYkJHSlczbXdOekVoei9iQ1h4TVMzRmlZSkFOZmpsTW9pdzYvTnFQWjBHMlIwczFicUtXWFd6YnZWYndrSVhnSmM3SVp4TzNGZ3VwdTY3NWp0ekFGYUZGcGxGWGR5d3l2LzNsTWVhOTVCVEN0RUFwcTRCd2pxVjdJWkF1MjZsL2JVZW1XSm9VNFpkRm5hNTh2b0ZvN2dveVpacnVmcDhabWMweUtabzhSMFkyZDB6dkFLK01EWGlJQTVKVW1uKzM3cVlqa0R5c01PdytOck5YNW9jQzhncjd0MWJyYm5ZUWxwaWVsemcxRnR5WUlGWnluQms2K0V6V2VYd0JST3Nad0UxRUxYczRZRDZuQldBYVFpdERXVHVFZGVsTVdTTjdHc1c0Q3JNNWgzanU2Ui9QWEZrSFNOYU9wcTlEWWpXaFNMV21EMmE0dGZzSW5jaEoxUFd3KzNvRlUxV0d0emFWTFJyY0l6eWRKdVpNTnRUS21NSFBNbm1weFE0UG1wV1ZXZnFXTTVVd1phWitXcjl3TTU2WGQ0ZnRpaHB6OXpGM1RWaTkxT1A5NXAyNVJMWGNyTkE3MHl1dU15ODU0b3JWc2w3MXV6eGI4TWEzUnBoNnhUUFdmODllMmxpZTVmS0hYc0tLZ1ZiRmFoUHZobzI2a0xEM09FQmkrdWRiZkYwbHN2VTBjU2RsdjFFMTFDOTM1WTNsMlMvNWJ1eXNMU1VPNVdzNzJuOUZYalBwanV5emp0ZzVpdkN4K0lDR1NtdFU2cm1taFZtbk53SnVEdGhieG5vN1RVOFFrNERSblNyZDdybmJxVEozblB2aDRYKzk5NTlyNGlYUG03Yk9wV3JHMkY3anFDUk5kWlovNW1OSXQ1U3IvMzN1QkJSckFDa2RiZGJjKzB3WStSSzZIU2ZyVEtXeFZ1VVdVSFdQVGVuRktLZkFGcXlQWGdBdm1BWTRXTHFPQURPaUVGMDliOXMybEs4ZVM4aGMyT3ZpaGRuTENJRlE5aFNSRkwwRkhEUzJwcmZ1V0h0QUp5Y01kQWczYUdmYlRXLzFWZnNHRUJkWDNFN2xiOHZDakgzbjk5WTBWZDBrTTVYTllLMTBIdWg3U3RENWZXOFRwTGlEVXVoaS9IbHZkcWpyYnlPbFRFeEZLd1U2cWY5V1MvZGw2VTNCUWhlOEdCNEdENS9adk9KSE51cDN3d3ZMZHRXMzFacUxKT3FzOFBaNG0ySHdSd2pubFZndFhxbWUxSE56THQyczRWWnE2UGZ5VllmZjdrT1p4SkQ2NHloZjI1V3dhdXY3TzJ6ZWk5VU5heEtWM3hsWHFuSEdvaWFMVjdDOXEwL0RDWUZtQzdXM1hPSzBHUEszTGozZ20vU25zQ3RpNXFZa2RVNkVtNHg2aWZoSjRjTU40UmQyTE8xanpCME5wajI5VkFGTit2VVRWYjBwM1lwaWV5QjRXVFZEY1dLMURzVWFpMWlWdDJGNGw3Y3E1N0I3OWtwK3JldjEvdUtLSkk5MG1mbC9zL3NGUFJUaXBDalFJVDZ1aFM4bWpId0xveDUrN2RtU2JQMTNJUUhGdkRDaVhUZUtIZlBVZDlUb213dFJYSTczVFRPdFd5aGVwMEZMTzhwZHdGcGd1ZjBQZkMvcFdqLzdrV3h4RkU3N1RDNzRvZnJ2bDBzUlZWVnpyaWNhMUptemNORmZLOXJXODNKdVZ1Z0ZTNHN0NHZwcDJLNm5RRXkvUTZ2UDNmNHdsZjR3TTlnK0ZqVkdsYjR4QmF2MW1PWE9tQ3llaDVkdUE5NlBHUEZVL2J2Y2tXQ3RiUSt3b2ZaR2lESG8zTjRKT3ZWV3RieFAyRTRzeCt5ZTJDNEh6NFBkaVRtZUVCZWFkcFptR0JicDFiTkEwUXRzY1hNVUUybFVCT3ZiUzIvOEZVZHJRSXM3ZW5rVTc3WDI0UlB1Z01KSkwweTJsSVZVQ3FGNjNIV29MZWFnZlNqTVYzY3R6TmkvVnBCZlVtUGJYMWRWZ1doUU9nV3FlVk1YenRZNk9UcUhUU1EyYXkrNThWOEZXOHNqcUxLM1lYSWtXTG1QanowWWNIM1UwRkZRQzdDbTNXR3AwOEtCdHdUZU82Y2hyVjRuV0llcnFMbjJ2anBYU1hNMjhXeVJkaDdpTG12dnVVT29DeldlNXBlNlMvWWZ2OU95ZUg3RE1HYksvWHVlZnQ0bi9kUXVuVDI3MmNvVzE3MUE1ek5CeHJlZ0dpT1dzbmNlU3ByeXI5V2lGMnVYbVA1N0hrdno3alRXYktwaG9EdThTc2xrMUxkeVIwUEFQQVIrQzc5S1B4Z2d1M1U3c3hkckxPMVpYYUhLcTJzejRMajBwb05sQlJtRGdEb2U4T1UxZ2x5Tmw4T2NzSzdZQk5XcEd1WFh1UGhrbTc2NllVUG5RdHRBdWthT1ZacVkwdEw2Ym9vdEZodzFxbzAzbzRVNkJVaHI5U3JqUU91UXFVMTExMStucHJucklycWtWVlo1NG5LODJhdHlyV1BNUGJNeXF5Y2RMNWlpbnAybzZwQktSMWQ1K1JuQjRIdHlBblhtWnpvUWl1dGhVTnprU1VWV3R4NC9iM0VVV3U5UTBWN2JjK1grRElJMFFEaGNwbWxkZHpVRE1FYUg2N1dGM3I5ako2OC9UQndGamtzTFFQd0ZhaVRsbkw2R1JnL3R5cDlGM2REMmF2ZzVReGNVZFU4MjlwajJVcW9TOGlxMTJ5M0YzUlcrR2h2Z0RYVE1aQm1LMzZnS1VvZlN0eFhmNTJCRzdDN0Y5NnN2d2pmLy9NY2ZkL2RURklkWGVwc0pPL1YwM0t2ZFdvZGtQSDJ4cXg3STNQTkw3VGMwdWNhMVNIbWNFdmVVYzhaWjRybnJGYU1ldVMrcDcvOVZQanhsZXMveTc3ZC9CUXVXVkI3cFc2akNhUlREbTBDOUtiZ3VYVUEwR3lzb2YvdVBjOTRzSHNXWWNxYjhPK2NjUG9aTFNkK0tqUzBNTlhPUHZDbHJ0T3ViQ0tUT1diNmxSaytwQUF2aGJlTXA2Si9YbVgvdHNMSUZtN1Y5dkI3RDJ5OGhSR0FPVFJWT25mYUxyWjZFM3BUcVNid0JTKzA3elBjL2xvTlR1Y2UrNHJRUDhmS3hmZFcySkQ5SWtCVEQ0R0dvcll3dFRCMWM4MVFkRkcwdVU4NTQzUE5SdGN5dDJ3YjZMY0M1dTcxYmVtbGl2ZGdaM0tkdG8ra3JRdnJBZmh2d3Z1ZTVlaVI0UUY0OEFKWFhuTE1RMDF2YXlaWmVvTlR2QkZycEhCaDlUeVFzM2RsbGVMc2h5Q0ZLa000WTZRNHRTTmpVV2JRaHBDclZYdDdob2pOMmpNVGRLRkFHaWoxRlV1eWxGNGx1bW1XT053ekFMWEF0TEFFZWEvaGMxK0JGdWJPbXhBcjZMUk9uV1lXcGFtZXl5S1V6Umltamlabnl0NEV1d2EyOVhlTDU3TE92ZHVLSGV6Tk5EZHc1NmhWSlpqQjY1anZIRzArN1cvMEZsYytwcy9BTSsrQ3YxNGYxQk9XdWRYS0o5YVZmbWNPOTA5YTRtUk5SZWJtTTZ5NVdiUHlnV3FoeHpVV0hUWE8yMWYvcjY5djFvY0piOTlUQ3hGeHUzbnpJQmxuOW1xRjN2RUd0WFJlYnNmSzM4MGRxTFE5bDF1ekNVa2wvRmdBTWpmdlBvT3Y2TndtTUZzeW9aYnU0ZXh5dmJibGJ4dy9sVm5VQlZFTHFyY0ZGOFJXc214ZDVuR3FRVzBPeTdlT0hNb3RhN2lmNlUzWDRab0Mvajc0YTA5ejQ4Tlc1a2tqMGtmdmpGbWpmT2Q0Z2R4eVVtZk85ZEhPVEk3ODE5b0Z6WHV4ZGE0WHlYd2xpRFV6dDdqUmRYcm9lekUrY0VlaW5PaXQ2OWlkcmY1ZXZ1ZFFtaGxuQ3NIM21ZQjNRdWpqT2poejlnN2toZkN0Uy9mNkNrR0VDWS8zTUdrTmM4NHVDSzQrSWE3TjhqVkY4MmJwOWZaNkRZeFpGMnhVa1VRamdQWTlScFNDYytjakVqc1NSenpKN3FmYWFOaEg0WkVEanU3VnpsWFV4bkRYb3FVcExFeWJLQk56TGJlRXBwWVVKSGZrYjRvM2FneUJxYVZkNWpJcWxScU1rZWIrOTFHL1JVbTZidm5UVmZlUE0zdm4vclZ2LzY0azBsNkt0dGVnb1IwM1VNdmRkTjZndDhhcVZIVDByR3NSdEdoUmNEYzZ6MEM3YnQ2eW5MMncwanpYTW1TT1dxeDdYYTdrM05pZ0JZOFV1bmVmclYxQ1MvbDVpbGJmeFF0OG5HdmYzUVBhN2NmZ3h5OXlHOGdyTDVBdFI1d3VTWi91VVJxT01VVU9LbnR1YzQ1MHBINDQxR0kyd05oRmZwdDF1UkJ6WjNXNXMvZGxRWXQxdWJNM3oyT2RCOG5Xb1h0ZFhLdWRJblY3QUxwNEhQYThEalhlVjRISCs1MXQ4VUMxY0ZPNWZNT1liZkU0TGRSRWFqZzM0UlNCVHcwNDIwcXhOR3FDcTRZNml4UlByWDN1M0djRURSek9aeFRNZC9IOEUwL0REL2NLY1BKelhQbk9qMU9XdzV4cmlVclZuamsrSkUwTGM0dGZobHRtRjI1L0poZkJWOEtuaitIbUVkTnBZbG1FR2JlcHJjaWkzSm9uckV0NitrQmdLK1ZabnRrNm9tZ1JsblVLVk4yL3NVYjFmZkpvVk1FRm1yZEZhUXJsYTNzWlJCR29hOFVNUlFsMkRhUXRlVVVWWE9xQ1RiMXV0VFpRWWZrYzM2Vk9ZczN5cXh5SzhDM3lmR09YcWplMzJNTmVXY09aNjB3ZnVjNlZxL1FWb1B2aFZYZHhnMXRjOUMyejFMcEFxK0pwMGFJY0x6eVFZNGpFQWxrYXV6cFVwa2F5a204S0dxRkNZbjJrdFgwNlpVNndDR3NYdzZpNXRxV3FCeEZrclJ1MmNBOWx6V28vUjF6M2tuZzMwYk9NZjNCR0pYRGR2MWhyOG8xbWF0TkpTNlpUYXg2VkY1QncwMWpQQVlRU2F1ZXB6Tm8ya1h4RzJTbzM0VmdEa2tzNnQzaXNyRjdDaDNtTTcvdGVtcDR4eTZFUUdUeVh3ZDNXVTVUWlJRcjRVWGJmZDZwbDRNZmhyejRDSC9OR0NPMVlsdHRYVkw3VTM5cUtGRjEwdWFZaXN4bTdoajV0Ulhya0xrYzFzOUJYWHhCeFJlVm1IWWpzbVFNTGlyaGNsRXAyMklwbnEvR3h0K1NLWjlZQ2E5NUVhK0ZteVNqbW5vN3R3NUo2cWJGYk9heHBUVTFieTBxYTUxakIxM285bHRyaDNIa0U2OTV2dFdiWGVVSHoxZjFqWk0zdHN5OEZQQ3VGUGN0UjRDdmV1ZVQvR2JqTkUxejdoN1FSMHZpNkcrNi96R012T2VBQ3h4eTJtRkdXRVJjK0lPbEFaaTY3ZTBrRm1vV2dVcHRkSzVDcWdCYU5kVkVlZGk5dFNyV3VsNnhSYm5tY282SHR1ZlVqTENPa2hZT0szN3Y5a1F1TWxLVUZXcnZtUzEyT1dsblFlbGk2TGcyZU9hanZ0Q3JJZENSU0FEN3JtdUlXcFZ1RTd5dnl6RmJoQ2ZZVnc1b2dxMkZOalVYTVpTQTQwOUpwYTR5c3I0aTZuREpKWi9LVTl6c2ZHeitabVhpY0t6OTJxclBxT2x6OUh2akR0OWd4YytTd0M5WTRvMlJTV09zU1R6TW5FWmQ2TzY1V3Y0TjJmKzdBVzdXV0dRdnJXYUoxVFJPcjlkZi81djYrOWp4QmxMaXZpakpJWEF5ckhzQWFVS3ZBckwySGlMTkw4V3BKSFhlZFJSZVBVeTdvMUQyMjRvaFpRL2dWSTRRZzk4bnAzS3phOXhpODljK0xkNjFWVnp2Rjl1WEFWeFhzNWVCbHNubkhFbFpXWmtkbVJ5N3UvMGVpQTNEbEFSemdXWGpuMDV5ODcyR21OMXI4U1JrNEdqQU9HSmxpd3JSL3N6bW1ncGNVVUVNbGF0eWVnUkZGMVJoaTlrOERGMVI4VUJiVFNYZWhKRHlMdGI3RE9sc3pkMU1jc3BxMTc1ZExsVVcxZVVWaGVUZjMxRGRnclBjRTdGY09GclRkM1JOTTRLU0IrbGVyWTd2WTNSa0dIWm5qSzRPaFdYODFwMVVuWWZiQTd0YmRQM2VzZ1lkaUZRaE9LRVlKdjFQay81bkh1ZjNQZjRtVHYzeFdzeWdBdCtGRXVIYjhFaDc0Nm9HRElaRnd0dVc4SDhxUmF5bVdIWmxyV3d5N2RQZjFhOTYwdFY1SXdMUjZha1lGZGFrYkZMRnVNR1JwMlZnUGp2U3QybjNQMzM0TlJWYmw0Sm9VZVh1WDgxNEhrSFgrME1YajBJWW9SN3V2K1BpV3c0dXprK0paSmdmM1h0QytGNXVyMkx3amlTT2N1RFVmdVhqUzhvclo1MVp6TFZnZzR4NitVU2RNY2xsQnkxUk9FTEVaOTJuSjNNSVB3ekhLQ1k5eDgzcy93UFBmQmJlT1RtR0ErdlV4K1A2TDdBNTJIQUhiUUk2cEhRSlZ5SnVNTUpmRlVWWVd2NHhkSFkvV0lpbmRFR1VPeTdXWUhyYTJBeUExZXNlYTdzZUJjazJWY2hzV0RZeWhaVVpBQWh0NExLMFUyN2RqQ1d1OTg5YVB4YUg0dWpYTWZGVis3UUhoYktkZFBLczgzam93NTEyZTc4MmxUN1lRYnFmVk1VZktsNW1DRkNvdWYwMjJRd2JOVWZmUEpLMGdkaUl6QlRhYjJURWZIN1A3TUZ4NXRwZjNLUVVZSUQzUHRjZk9jLzd5Q1NmQTRZSUZiQ3BKbjVhMXNVVVo1dGJpMmRCOUZJNFdZT2p4aU55NHhqb1lvUmh6MjBDNCtBMFBWeTlkWTNwcWxhNVNCN2ZWdHFKUzlkSzlGU3hMZTd5MzdxV3lsVG04VWRlbFBMZWVlVC9WVmxvYk4yZXpQWlp3R1dITkt6NnhGMzVldFlqU2dUaGJaUVFWNmNmakxUS0dzamlwNERBTlJiQmFqbzlNSzllY3Z6Ujc1STc4U1p6d0RMYy9mSTFySHpxem02ai91Z25YajdsMTd1VTg4QlhPeGtkRzhWajlYbllGbDVYeDZtTWIyRnoyK0N5YkErcklzOFlvbVhacjJxUnJ3TXBkSnQ5R25EeUNRSXhDcjFhMzdrMGYreWwrajFVSGJqbHpxZXVmY1NkN1o0dFNUdDdJZlkxZmFnL0ZZdGN6aHZrYXlYZnJJL2FzdnR3K3IzcWNnZzVUQzdkdksrdy85OVVITDUwOFdlSXNXZ3ozdWFSOVptRXlHZk1DOEh6SXpEYVI5SVJzQmVrWDZ1a1laVUk1NG1lNDltMi96QzkvOXhrR2YvcnJHZmc3dDdueG4xeGtmTWc0S0s2ZkNSZ1lyWjV6Tm5jRXpSeUFTN3RtY0VPdDFBdjZxY0FsL3VkdWJFcWlUU0VoWm1HSjVkZ3BpZkt4bUt3V01Fd0JIdmNYTHFXOTlRKzdWVXQ0MlZRMjc0K2NkYjNtcy9lOWlyN1gwN2ptQlRqVlplaGRHcGRQVWVaZ0lVRGZRL3dPR2x5L0JSRWRvWFlLOWNoWVEvM1d0ZHBrTGRZUEU5a3FRS3c0SUFjR3VNMVRuUHpRSGZzSjk3OXV3UFZqcmozOUdoNzQrcklhZmd3aERiSDVvNTh3U3gzVTAxT2JQSmJOWGt1d2xjNFR5R3FMZUxIeU9qU2FZNXZtWE1HamVwd28xZzl4bE1ITjNtSlg4My9xN1pCUXZHODRDWUFYaEZHV0tGbjd1bjZ3bEs0V3dmc2VvN2R1K2JRVjh1OHpnS2xyZzdFVjJaTnhjZFJ5aDRJcWlsK0syWm1wcEhzZXdrL0YyclBNSUJQNGpITE16QVFjQTdlWk9UcTV5clZmK0FVZS9SL09rdlVkRDQ0MGVIYmdCak1qY01DSWtqbHNUU0tGQUo1SUpGdzFLb2JGK3FkdUNxV0dpR3JsVWI5Ym9YejJCajVtVW1DR2VsSnVHVWViVGNQUEZNOVFUeTl5NndmSnlsNit0bHVvbmcyZ1pXclMzYnRGRmJROXZtYmVEYkRzdDRiN3FlR01maUtoQjNxOXhaZVliRTE4dXVJQnJXdlN0SEx3SkhPMGMrVVZXMWpwWGNVeEsrd2Vtc2xSaWtjbnNEbmtVZFpEbnJCalMrWXBwcDk0RHlmZmVpYzUzMGtCNUJmaGUxL0hZei82V1Z6NDBpMHpKK3lBbzNEZmhRK3dtRWhMc1VReWE1d2ZhZ1RNcXduZzNHMGVxRmFmVDAyOTlqTXNNNm5oL3RRUG1GaU51c3Z5aHVVY0FRdUYwTDExanJTajJuWFZOTnFYb0U5UEF5eDFkazYxd3hXRldZcE9xY3YvMTNuL0lzaTVaKzFXaGFGUUJnM0wxOUxNMFhKK25VUEFjNUJEVTJuMjBCbHNJblUxZ0JTeU9oZkk1UXEzZitDRXh6N09KMm9wdjlQWERwNTREZktOemwxalVEazRRMWlvUnlpSWd5VGlHTlo2OGV2cElYN3FQTi9hdHRYbi9IMnhadDMvRzU0N3VzYThoWHpST0hLejYwcTB2WWpiWTNUMjVnTDYvN1N2RFNoazc3c0wxL1BJRm1OcTY0cGhYbFVxbHk2ZmNvODBtNjlnTDJxZG1zRUw2amZKWkp0UnovSDhlYW12dWkxMVU4bTRUT1Y4SXA5YWJ4UWM0NDN4TytLWW0xemdPdS9rdlY5NUFyYytWUThBd0lmaGg1N2t5bzgreEVOZnZXSEVTRktLUkQwUVZDWm14bFFQZXB6YW9zZmNXUC8xVm8yeVJISnVZV0xkN3J6ZTk2R3IzcmZhNHhkZ1Q4dEdyTlR0Ny9CVHk1MXpHNHlVMWFhUUVsNXk4eVI5dzhqK1hPQWFGSjV1QkxmdU1YbXZSV3RKOVhKVDBjWHR6NXJiNzhXNmMrdkx6TlJRTUFYb3l5WFdxN0d6WFdNRGExS2RtWmpaY1k0ZDE1bXYvRFRUSnp3Ni9nVVZBT0JINFZ2K0JEYytNclZ6QkRmVWJhSXBzbjFsWGhZQUpBR2Yyc3FLeEE1ajB6akNmc0ZqcVZqdE4wVFBUVnk1emJOVlplZ1BocTV6U2prUVJUK0N1Z2FoNVZtWEhxSzB0NHJGdTFGenM0WFh0RlYzelJydFMvZ0RhWUszUGViUE83Sm1xWGJRZ0oxQkwzeG1rdVhJSHJySlJjMEx0YXNGMmVkcFhoVjNDdEkvaVhhdll6SW5mSnpiNzNxTXAvN1BGNUp2ZW9INzVTWmN5MXdiTHJOOW0zRlhxK1RuaHZicmFXR0Z6Wk9BM01uTEh2M0J5NUpKamNNU2tpcEpZblpmU3BWT1JicnplRG5WeGJzdWwvaHE1cmRmd2JLc2FQTzluU1ZyRXRsWEdOMkNkaXFOcEw1Qy9Pc1ViczM4cmNtZlpWaGtRZmh6ZTRVQWJSSTVmdEM2TlMxMHI2NTlKbnR4OVhNbGhtVUdMMnNuVEtkeUdvanZndURaUVZoOWVTZEhLRWRzdU1XN3VQR09LL3p5TDl4aHl2MlRWZ0FBK1JYNDBXT3UzYnpFQTI4VHhvRnVrMWlOb2swRmtqSUlpSlNqVGx5WGJSWDFGQTJ0QnluSGFkdnRxTlc2WGswazByYXpwL090ZFJZdTdlR1o5YWF4S2tnN281bTAyMVhXMUNXdld6NjdZczArc1BOVmlkZFc2bVNOOWN1ckZMRjBqNVo2UVVYdFR2YWxXY01rbXRJODBqK2RNYy9nRTZhWldTYXdDZmNaWmRkR1RESzd3QUMzbWRrQnQ4eTUrZnlQOFl2ZitrTEMvMlFWQU1CdndvY3VzZjNpKzlGWGxDMXpaWC93R1B2RkM4VlMxcjlyRXNRVEtuR1NZSnpHWGJjSnRYTjBXZGJDMUFNZlBjN3BMYWQxZXdjSWU2allwNGkrMnRqaEhhcjNicndyNzFtK2RVV1ovUm1pM3RwenFOdTZNV1h0MHBkMnNOeHdnSGVVYno4N0JET0lrMzN1L25JdVpXekxwZjd2Y3hSOVNnRWNuOEk3VE1IeUJRL0FNWENDeDc4SEhQTW8xOS81VXp6LysyOXk3YmxQUnJDZnJBSndBcmVOYTArK2tidmZrVkYzVkR3Mmd3elI4MnVxNVZpVU9DSEVKYlovcnM3S1dmWVByOHNmdms3ZDNQY2cxL3AzV1lsZTluNzNHQTFmUkp4T1RRNHRZY0xQdFBLK1JXdFJHRm1CdWlVTHlMMVNxYTNkZlUvNFlNWE5CNkZqa1EwVUJyUU1jdVEyVmpzM1ljOHlnK3h3bjBsTU9NZGgrVHVVRTR3VFA4ZVJmSUJyLy8xSGVQUkhPSHVkNGFldkFBQlg0ZkdSNFlGWHNQbUNtY0dWTVk0MEdLSjV0aXo5RlN1bmFVdWNDNkJkMnVmZGFuVUxTbWgvZkh3dEhqbWpwOWRYMDhTK0YvUG5sYlV1d3hPK3R6TGl0T1hYL2pzcnpLQjNISDdYc2VNZDVUdnZOY0lJdVhQM2tRMVUvbDhObDJMaDVubFY5clVHNm1iUU9XTC9Mckw3dWFSK05xR1I2c0V1TFA4SU9NSzVKZS9uK2YvdlBWejljM0JyOThuSzlGTlNBQ0EveHExM3ZocjVneGNZSG5LR05rcmExajU1YWV4VVg5YWdEYjR1M0V3cVVaQ1QxZGhYUDFKbFFSYlhWVS9yUlM5NzQ5Z3J4ZG52RHZUTzVaZmZ0TGxtVnMyY3JYdXhuUlZ2cTU3OW5neW03M1JTQzJYcDM3MjFHWXNDN01wanZOWDRjNWZDNVM1c3pKaVV0TThsazNVaWgvQ0pWVDRsMzY5MGJ4bjB1TW5OUjMrSTkvNDJ1RFY5S2dMOVZCV0EwamwwNnljL24zdi9sT0dNYklMckt3NStpdXlnY3ZxNEZvYkxKUTd5bHVMWVlsdDJsb1hmV1kxL3EwUzdsN1RkUFhhcUpPT2RiN0V6aGo5OXIzYTNudVdUVmRsMkRmRFdvMnA5S3VmZG9GYTBZbGxtdlR0OGJzemN3djNQTFFSby9EeEh1MTF1UGZ5UjcvdU1TMkg1WERKcUZlaWRBRHRtVGtqY3dpUHQrem11L2MzMzgreWZ1OEcxSno1VldYNWFDbkFkbnJyQTFaY0xkNy9vWWZTdTV3TjJIUVRuTDVGM0swSk81WEJFbnpQdktBQUFDOEJKUkVGVUUyL2JLaFFwVlRFdng2VUlWVGxvNWRseXdHYnB6aEVwd0xHdm1zdWVoZE9OcC9mT1hVNXQyMW1uY3V2NnZlODFkdldwWEtuWWxSZ2Q4d3Vla1hpUFpTVmE2VFdhR3RsVENKMjUrWmZjam5Nb0hINEJld1RZSzIzMFUxRXVxV0R3aE1URWpsMjQvd0w2aXNuZFpzY05mcHdiMy93TWovN2NweVBMVDBzQkFQOFFmSTh6UFBjeStIM0hxQStvR0ltVExqVTB5djU2ODNJeXBzV2hHUjZuWXhZQkYvcE5QVnhCckZGZmR0T1hiRUQzQnNHdDBURFdCSjNiWWU1bjJYK3oyVk4wY0Q2bEFONndmRi9weTJLNFJFb25KYTZMQkdjWDh3MFdTbEo0Z0xuTEJ1YndKSE56OXhYcDUvYTRxYlNBeXd4V2FkMHBtanBQUW5tT21ObXg0WWhEcms5YnJuM29uL09Cdi9CcHl2SFRWZ0FBcm5EclBROHovTTU3Mkx6R0dEaEJLSFhCWWVXd2RUbE1KZ1FhUFhSU3VRRS90V0JSenpqSHkvZW9ZVmREeElNaHRxNzdzRytYWEViSytBUzV2bmZGbTc2bGU3RjJDd1VOVng4NXZYdjA1YWxoTWlQbWpiYjFDQkh1Yy9NZ0RRUnE0ZlNMQjVqSU9xTVNnSThKOXdyMEpqeUVUN2o5a1NNZnVDVS96YzN2K1lkYy9UMXdLLys2S0FEQWM5ejZGeDlISG44OXcxZEtlSUdxQkpXbXNZaDhXWjBjOWZ5MlhjNXRsZFJaUHg2MXQ2dW4zUmRkTzVpVnc1YThIczNiLy9WeXpsanZCM1N2Y1hPOTMyTWhicko2SzhxNGVMelA4QVNwc25wNXFRZDZMaDRoWFAxYzgzdlBiVHhHS3JHVE1sbEM0QjZFams2UUp2QWQyYVlRK0FsenBIa1Y3YytjTUhCTEh1UDVmL29ZVC8zVjU3bnk2TCtLL0lUUHpGZjZSaTY5KzhVODlIbm51TWhOemxNMjBtL0lISkRZb294eFRNRUd0QjVDUFpKc2lLR3dPTEZNbFNSREZKYUdPSGxzb0Q5bFZMdFRTNVAyZS9IamJPUHVyS0MwS2pMcjNxaVlySDJNU2h1RnIwdWtZZG1xUlhRTDEzRzJmcTFlN2pLRG9xVFdTcnI5S3Vxc1ZseDhqT0FXM0ZBcWdZUzdUNjJqOXpocUFzZFJpdCtoM1BJZjV2bmYvOHM4OVU2NE12K3JDdTR6cFFBQXZJcEx2Ky8zOHRBLzJuSFI3K2E4M0dCRDRoQTRDSUVmaEJJTTBVMjBaVG5OcW5RWHBSU2JiSE5xQWsra1R2Z0pWaWVZTGtmU0VtY1YxWU1yMGw2TGVUOFRzTitJME8vWHEzdDlhaEZxMmh0bll6WFk2ZDBLdG1Xdlo1dnkwUnkxZXlOYnJRbGt5S0VBR29VZE8ybjkvcW5GL2hNU3g4SDVIM0diVy9ZMHo3LzMrL241dDM2bVpKWStrd3J3SExjKy9ETE9mY21MOEZkQzVpakd2bkxYcGkxZENhWnVzeXFaUUZUOHhPTlE1VzYvbUFaZWFMSGUxMVYvNmZwMnVubDVEWXRUemZFNjF2RUFIYTZRb0pUY2dxRUxJc2U5Q0NzMlFkai8zOTdaL05aNVZHSDhOelAzdnZiMVIydzNqVysrU0ZLMWZLb2xTQlFRVkVpSWlpSlVzYWpFQ2lHeDZhSklzRU1DdFd6WkZKVWxRa1hBUDFBcUZwUkYxRVJGb0NJMXFnUnExQ1k0YlUyaU5IRStIQ2UyNzczdng4eXdtRFB6em5WYWdWUVNPNExaMkltdjQvaWU4NTQ1NXpuUGVZNzA3cldPU2FETk1FQ2Jtc3RwZk1QSUhKSUtXTDVXRHVzQ2RTdFVCSUhPNVYySmwyMS9XbXA3VDRtaHBLSml4SVpYRE5WSmJ2endWZGFmaERXM0l4MEFjRFZyNXlyVVBZWmlkdzgvVmRMMVdrelVqRzBTYTFtNVNvZHRKQ2hSM1pCc1cva2d0R0JNSEVKMVk4TWIzb1BTYml5cHcyY0lvRXp2T2lYQXM1ZkJTaFZZdDByQUc2ZGtoaDhYaktUYVRENStqRVBxM25zYVpmR3BiKzlSUXNNT3lhS1FPTFFQdlh2VnlMOG5kNzIzZUYyQmRQK01xNldlRDhDT0ZaZzNZUHdsbmdHYWRYV1cxV05MWEh1MjVNTDEvNmJCRkxmbkZJRCtBUThOSFZQQUxEQ0JaUkpMSVNHL0l4OG5NUmdNWGRCZDJYZlhvU09oUHN3aGROQkdTVTRRNzMzQ2E2MnNiNCs3emwybUhhNFZIVmwzWjIveGRwMTBDWk9HZmtZcGlPU1ZWbUpGUW4rY3o4OEZIV09ZVDBJWVZuaDlYa0ovSFFZMnNGaFZZM3lEY1UyR0F0YmlBSTA0UVFCNDV0bmtCc09MZjJMdG1iT2MrZTN0TUpTNVRRNWdBNzFjdlRhQW0vdlJEemRTM0FXZXVrcFR3V09ObWhTaTIwSXNDVW02SUwzaWZkdkhDN1FvSDdKeGFVL3BqZ1BsQXNLSVEvdFFOY1Q2WGVleXp6NWsrMGJKaUpaRUh1OXRldm9Ub3FmRHo4SGJyQlZrUS9ubVdpNmYxUUhvYVh3VHJoNFhyZ0hkcVdsOERhNUMrNFpHcUZ5TmhIdW82VEtrWWNBTVF6eEROcmpKS2RaZlBQVWg2dnp0Y2dBQWQ1M05KYysxUzd1WmVYUWFmMCs0UlkzU0FoTzFtWE1jRUxmaUhDR2NhaDhNRjJmMGxJN2JwS0x4eVhxS0t0ekxXS3lQN3VWUTNxZjczT2x3dDRjeTB1TjlhTTE2MVVpZFR6Q3cvQnlyQTQ0ZnN2VTZYUVdKMGF0RGVJOGgzbnBoOEZDTFUyWWxucTNRdmhZWXFFd1NrYkd6cHhuUm84UlRlY2VtV21YajdNdXNmbldKdDMvOW4vVDFkOW9WY010NW5DTXY3MmYyMFlJNUtqcFVUSWV3VDBGQmdaVzloVVlxQXlNTERnTnZzSnV5L2xCQ0N0SGZHaWtKVFNvRmRhWnViREt1c1lHMFVJbHNsRFdLUzdtc1FMUmpmY21BMEd0YXphTTRNMWhwSjR6Y2RnUU1ZZnFFSzRDc3BITXAzQWY2ZHFSMXRRMGRTNG1oNFUxdS9QS2ZYUDdaUlZiZXVkMTJNWGZLQVpaWSs5MG02bDJITTlQNEI3cG9GZWZ3Q3hHZnNsdVZRTWJhT0FMWWVnRmdmTnE0bTc0dUczWlRYejdVOXJidHl5dUxkbkVCUWN2UVNZaWRhZ1NwYTZkMG8ySmFveHRaVitZRXVSTWtUNm9CTHpONXFHRGt3Tnl0Sk5RMzhwdkdqbDVvNnhwR2FJYnkrU2FYS1AvOGQxYS9kNGxydjdqRXl0VTdZWmM3RmdFeWh6djhYWTY4M21OMlB2QlhleXd3d1lnQ1E0R1ZhQkNCSVpPd2dnZ0VSUkJKeTR4Q3JQODdNdmdweldtdlplbGtvQ0hyZGljdE9KVnQwR3FURnF0YllXYWRVVHJEcHN3V0VMSlIxTmcwWURNZFB1MG9YTU13NndqR1lRMHJNbEVOTmJOWWhnenBVVEhFMG1PZDl4aTg5Z2JyVDU5aitmaWROTWlkZG9CMERzRmpEL0R4cC9Zdy9jZ0NVNHRoYlcyNEZvSVRCSUFvT2tMNHZGMkZick85dVBGclpteFJtNmJ6UGd0bThpckFiQldnSXNwTnVVUXNpYXJvR0ZIMHRzMFlFQlFNbklzN1JXR05xSy9VSk1QSGFkMnBnTy83QVNOL2lJRitoZFdmbm1UNUo5dGhCN05kRG5BRHpvKzQ5amVMNit5bjgwV2Z5Q0dOR0thV3ZwNFZETjl1b1c0Z2VIbGsvSVg3TjRSMW05UUdYTWJUYnpFN214Rzc0anJyMk1CcDhDbjVheEpKdzNxSFY1VlVCclVnZG5YV3p3OVBlVU9Ob1V6OSs0WmFSbGtIUU1VRVF6U2J3SEIwaWRVVHIzRGxzZE5jZUhHN0hzWnRpd0JiejFHTy9QZ0FzNC92WmVyekJkMENKaVVLOUdnWG5iV3dzZDJTSEJaYnFPcG1iSmRZNXV0cFNrV2pUYlpTTjgyTk9ZR1M4dzE3N1JOdXgvZ0ZzZFVyZkgySkd5YWJ6MitvTURpdktGWEJDRVBOR2RhT3ZVMzUzQVdXajJYL1NmOC83UUM3WUhFT0RuK1dJNzg2d094UlRSZkhGSlVBUmNpMUVMUUVDd25EM1pRZkdCbFVhYThFazcydjVsYncvd09PenFRdTdCWjE3amg2YlZLRHlHWUthYkdjcldpSFBpdm1LTGxNd3l5RGxiOVMvMmlUOWZQbldENnhVOTczSGVNQVc1eWhmNEQrMTQreStJeWllM2lPcVFrcnlaL0JVTWwwa3NraWcwMmxZREI4ZkVVMHE1VS81ZmU5U2VKUmpxNllQZ2hXdWt5R3ZjNnhMYUlFbmgzckJnYWpENmdaMHZoOVdBVWpOb0NLd1h0bjJIeWhvbnp1TFpiUGJmY1RmMWM0UUR3ZmcyOU4wLy9JQkwzN0ZwaDlhQi9kcnhSMHNmUUVXa1p3QkZKMGlNN1FDcVByTVZTQUxSVFR2RGtjQTM1VTc0d0d0a25rSW5CemloVHVRMzNmZ0ZlVXdob1lxWXI2NUI0R0R4NW4vZW1yREg5L2xaVnp0eFBNK1RDbnM1TWQ0Qi93QXF5d0N4YjY4S1ZKK290OTVqOWxHQUJUOHFvZU52MGFKaW1hbVdReWFHY1oyMnlna2pYcVZmWjNzWnd6MlhlMTJVREZGSUdXWVFnU1dtQ1pvUUdHYXBYNjRnenMrd3ViMzFtbS9BTXMzOWhKVC9wZEdRRSs0RXdjZ2kvdnBmL0VFZWEvc1lmaXZvcXVsSS9oL3Ara0k3UTB4RnpJOVJGcmd4WWRiSi82dG92Vmh2ZUdFbndIbEtWa0doaEpramNCbkdid3g3UHdteDdWL2FjNDh5eXdHN2gyTjcyWmQ2TURiTTBYN3QxRC8yc0g0WWxQMFB2bU8weThXbE5jWDZUN21UazRWTkR0YXBHNGJKSXhPeFRBQmpBalVhQUM1b25FNjJEOEN0aEZ6WnZVTDAzRDV6NUp2WGdDZnI1QWRmKzdsTTh2TVR3T0srWDd2S2YrL3c2d2ZXZCtILzBETS9EUkNYb1Azb1RYRitIVEI1bjQ5aFU0RFZ6MkZMTjc0UXNhUnVmaFpBLzI3SVdIUzFoN2krcjVCWXBIRnFnT3ZnSGZuNlE4c01UeVMvZlM3OE9LdndwWDdpWUQvN3Z6TDUxR1ZNaWJUUnFzQUFBQUFFbEZUa1N1UW1DQ1wiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBUSFJFRTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTk9ERV9QQVJUSUNMRV9JTUFHRSwgc3djUGFyc2VyIH0gZnJvbSBcIi4vdmlld2VyL3V0aWxcIjtcblxuZXhwb3J0IHsgc3djUGFyc2VyIH07XG5cbmNvbnN0IFRIUkVFID0gcmVxdWlyZShcInRocmVlXCIpO1xucmVxdWlyZShcInRocmVlLW9iai1sb2FkZXJcIikoVEhSRUUpO1xuY29uc3QgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy5qcycpO1xuXG5jb25zdCBPcmJpdFVubGltaXRlZENvbnRyb2xzID0gcmVxdWlyZShcIkBqYW5lbGlhL3RocmVlLW9yYml0LXVubGltaXRlZC1jb250cm9sc1wiKS5kZWZhdWx0O1xuXG5jb25zdCBERUZBVUxUX1BPSU5UX1RIUkVTSE9MRCA9IDUwO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSBbXG4gIFwidW5pZm9ybSBmbG9hdCBwYXJ0aWNsZVNjYWxlO1wiLFxuICBcImF0dHJpYnV0ZSBmbG9hdCByYWRpdXM7XCIsXG4gIFwiYXR0cmlidXRlIHZlYzMgdHlwZUNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7XCIsXG4gIFwidmFyeWluZyB2ZWM0IG12UG9zaXRpb247XCIsXG4gIFwidmFyeWluZyBmbG9hdCB2UmFkaXVzO1wiLFxuICBcInZvaWQgbWFpbigpIFwiLFxuICBcIntcIixcbiAgXCJ2Q29sb3IgPSB2ZWMzKHR5cGVDb2xvcik7IC8vIHNldCBSR0IgY29sb3IgYXNzb2NpYXRlZCB0byB2ZXJ0ZXg7IHVzZSBsYXRlciBpbiBmcmFnbWVudCBzaGFkZXIuXCIsXG4gIFwibXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XCIsXG5cbiAgXCIvLyBnbF9Qb2ludFNpemUgPSBzaXplO1wiLFxuICBcImdsX1BvaW50U2l6ZSA9IHJhZGl1cyAqICgocGFydGljbGVTY2FsZSoyLjApIC8gbGVuZ3RoKG12UG9zaXRpb24ueikpO1wiLFxuICBcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XCIsXG4gIFwidlJhZGl1cyA9IHJhZGl1cztcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBbXG4gIFwidW5pZm9ybSBzYW1wbGVyMkQgc3BoZXJlVGV4dHVyZTsgLy8gSW1wb3N0ZXIgaW1hZ2Ugb2Ygc3BoZXJlXCIsXG4gIFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XCIsXG4gIFwidmFyeWluZyB2ZWMzIHZDb2xvcjsgLy8gY29sb3JzIGFzc29jaWF0ZWQgdG8gdmVydGljZXM7IGFzc2lnbmVkIGJ5IHZlcnRleCBzaGFkZXJcIixcbiAgXCJ2YXJ5aW5nIHZlYzQgbXZQb3NpdGlvbjtcIixcbiAgXCJ2YXJ5aW5nIGZsb2F0IHZSYWRpdXM7XCIsXG4gIFwidm9pZCBtYWluKCkgXCIsXG4gIFwie1wiLFxuICBcIi8vIHdoYXQgcGFydCBvZiB0aGUgc3BoZXJlIGltYWdlP1wiLFxuICBcInZlYzIgdXYgPSB2ZWMyKGdsX1BvaW50Q29vcmQueCwgMS4wIC0gZ2xfUG9pbnRDb29yZC55KTtcIixcbiAgXCJ2ZWM0IHNwaGVyZUNvbG9ycyA9IHRleHR1cmUyRChzcGhlcmVUZXh0dXJlLCB1dik7XCIsXG4gIFwiLy8gYXZvaWQgZnVydGhlciBjb21wdXRhdGlvbiBhdCBpbnZpc2libGUgY29ybmVyc1wiLFxuICBcImlmIChzcGhlcmVDb2xvcnMuYSA8IDAuMykgZGlzY2FyZDtcIixcblxuICBcIi8vIGNhbGN1bGF0ZXMgYSBjb2xvciBmb3IgdGhlIHBhcnRpY2xlXCIsXG4gIFwiLy8gZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3IsIDEuMCk7XCIsXG4gIFwiLy8gc2V0cyBhIHdoaXRlIHBhcnRpY2xlIHRleHR1cmUgdG8gZGVzaXJlZCBjb2xvclwiLFxuICBcIi8vIGdsX0ZyYWdDb2xvciA9IHNxcnQoZ2xfRnJhZ0NvbG9yICogdGV4dHVyZTJEKHNwaGVyZVRleHR1cmUsIHV2KSkgKyB2ZWM0KDAuMSwgMC4xLCAwLjEsIDAuMCk7XCIsXG4gIFwiLy8gcmVkIGNoYW5uZWwgY29udGFpbnMgY29sb3JpemFibGUgc3BoZXJlIGltYWdlXCIsXG4gIFwidmVjMyBiYXNlQ29sb3IgPSB2Q29sb3IgKiBzcGhlcmVDb2xvcnMucjtcIixcbiAgXCIvLyBncmVlbiBjaGFubmVsIGNvbnRhaW5zICh3aGl0ZT8pIHNwZWN1bGFyIGhpZ2hsaWdodFwiLFxuICBcInZlYzMgaGlnaGxpZ2h0Q29sb3IgPSBiYXNlQ29sb3IgKyBzcGhlcmVDb2xvcnMuZ2dnO1wiLFxuICBcImdsX0ZyYWdDb2xvciA9IHZlYzQoaGlnaGxpZ2h0Q29sb3IsIHNwaGVyZUNvbG9ycy5hKTtcIixcbiAgXCIvLyBUT0RPIGJsdWUgY2hhbm5lbCBjb250YWlucyBkZXB0aCBvZmZzZXQsIGJ1dCB3ZSBjYW5ub3QgdXNlIGdsX0ZyYWdEZXB0aCBpbiB3ZWJnbD9cIixcbiAgXCIjaWZkZWYgR0xfRVhUX2ZyYWdfZGVwdGhcIixcbiAgXCJmbG9hdCBmYXIgPSBnbF9EZXB0aFJhbmdlLmZhcjsgZmxvYXQgbmVhciA9IGdsX0RlcHRoUmFuZ2UubmVhcjtcIixcbiAgXCJmbG9hdCBkeiA9IHNwaGVyZUNvbG9ycy5iICogdlJhZGl1cztcIixcbiAgXCJ2ZWM0IGNsaXBQb3MgPSBwcm9qZWN0aW9uTWF0cml4ICogKG12UG9zaXRpb24gKyB2ZWM0KDAsIDAsIGR6LCAwKSk7XCIsXG4gIFwiZmxvYXQgbmRjX2RlcHRoID0gY2xpcFBvcy56L2NsaXBQb3MudztcIixcbiAgXCJmbG9hdCBkZXB0aCA9ICgoKGZhci1uZWFyKSAqIG5kY19kZXB0aCkgKyBuZWFyICsgZmFyKSAvIDIuMDtcIixcbiAgXCJnbF9GcmFnRGVwdGhFWFQgPSBkZXB0aDtcIixcbiAgXCIjZW5kaWZcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJBbm5vdGF0aW9uID0gW1xuICBcInVuaWZvcm0gc2FtcGxlcjJEIHNwaGVyZVRleHR1cmU7IC8vIEltcG9zdGVyIGltYWdlIG9mIHNwaGVyZVwiLFxuICBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7IC8vIGNvbG9ycyBhc3NvY2lhdGVkIHRvIHZlcnRpY2VzOyBhc3NpZ25lZCBieSB2ZXJ0ZXggc2hhZGVyXCIsXG4gIFwidmFyeWluZyB2ZWM0IG12UG9zaXRpb247XCIsXG4gIFwidmFyeWluZyBmbG9hdCB2UmFkaXVzO1wiLFxuICBcInZvaWQgbWFpbigpIFwiLFxuICBcIntcIixcbiAgXCIvLyB3aGF0IHBhcnQgb2YgdGhlIHNwaGVyZSBpbWFnZT9cIixcbiAgXCJ2ZWMyIHV2ID0gdmVjMihnbF9Qb2ludENvb3JkLngsIDEuMCAtIGdsX1BvaW50Q29vcmQueSk7XCIsXG4gIFwidmVjNCBzcGhlcmVDb2xvcnMgPSB0ZXh0dXJlMkQoc3BoZXJlVGV4dHVyZSwgdXYpO1wiLFxuICBcIi8vIGF2b2lkIGZ1cnRoZXIgY29tcHV0YXRpb24gYXQgaW52aXNpYmxlIGNvcm5lcnNcIixcbiAgXCJpZiAoc3BoZXJlQ29sb3JzLmEgPCAwLjMpIGRpc2NhcmQ7XCIsXG5cbiAgXCIvLyBjYWxjdWxhdGVzIGEgY29sb3IgZm9yIHRoZSBwYXJ0aWNsZVwiLFxuICBcIi8vIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG9yLCAxLjApO1wiLFxuICBcIi8vIHNldHMgYSB3aGl0ZSBwYXJ0aWNsZSB0ZXh0dXJlIHRvIGRlc2lyZWQgY29sb3JcIixcbiAgXCIvLyBnbF9GcmFnQ29sb3IgPSBzcXJ0KGdsX0ZyYWdDb2xvciAqIHRleHR1cmUyRChzcGhlcmVUZXh0dXJlLCB1dikpICsgdmVjNCgwLjEsIDAuMSwgMC4xLCAwLjApO1wiLFxuICBcIi8vIHJlZCBjaGFubmVsIGNvbnRhaW5zIGNvbG9yaXphYmxlIHNwaGVyZSBpbWFnZVwiLFxuICBcInZlYzMgYmFzZUNvbG9yID0gdkNvbG9yICogc3BoZXJlQ29sb3JzLnI7XCIsXG4gIFwiLy8gZ3JlZW4gY2hhbm5lbCBjb250YWlucyAod2hpdGU/KSBzcGVjdWxhciBoaWdobGlnaHRcIixcbiAgXCJnbF9GcmFnQ29sb3IgPSB2ZWM0KGJhc2VDb2xvciwgc3BoZXJlQ29sb3JzLmEpO1wiLFxuICBcIi8vIFRPRE8gYmx1ZSBjaGFubmVsIGNvbnRhaW5zIGRlcHRoIG9mZnNldCwgYnV0IHdlIGNhbm5vdCB1c2UgZ2xfRnJhZ0RlcHRoIGluIHdlYmdsP1wiLFxuICBcIiNpZmRlZiBHTF9FWFRfZnJhZ19kZXB0aFwiLFxuICBcImZsb2F0IGZhciA9IGdsX0RlcHRoUmFuZ2UuZmFyOyBmbG9hdCBuZWFyID0gZ2xfRGVwdGhSYW5nZS5uZWFyO1wiLFxuICBcImZsb2F0IGR6ID0gc3BoZXJlQ29sb3JzLmIgKiB2UmFkaXVzO1wiLFxuICBcInZlYzQgY2xpcFBvcyA9IHByb2plY3Rpb25NYXRyaXggKiAobXZQb3NpdGlvbiArIHZlYzQoMCwgMCwgZHosIDApKTtcIixcbiAgXCJmbG9hdCBuZGNfZGVwdGggPSBjbGlwUG9zLnovY2xpcFBvcy53O1wiLFxuICBcImZsb2F0IGRlcHRoID0gKCgoZmFyLW5lYXIpICogbmRjX2RlcHRoKSArIG5lYXIgKyBmYXIpIC8gMi4wO1wiLFxuICBcImdsX0ZyYWdEZXB0aEVYVCA9IGRlcHRoO1wiLFxuICBcIiNlbmRpZlwiLFxuICBcIn1cIlxuXS5qb2luKFwiXFxuXCIpO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJDb25lID0gW1xuICBcImF0dHJpYnV0ZSBmbG9hdCByYWRpdXM7XCIsXG4gIFwiYXR0cmlidXRlIHZlYzMgdHlwZUNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjMyB2Q29sb3I7XCIsXG4gIFwidmFyeWluZyB2ZWMyIHNwaGVyZVV2O1wiLFxuICBcInZhcnlpbmcgdmVjNCBtdlBvc2l0aW9uO1wiLFxuICBcInZhcnlpbmcgZmxvYXQgZGVwdGhTY2FsZTtcIixcbiAgXCJ2b2lkIG1haW4oKSBcIixcbiAgXCJ7XCIsXG4gIFwiXHQvLyBUT0RPIC0gb2Zmc2V0IGNvbmUgcG9zaXRpb24gZm9yIGRpZmZlcmVudCBzcGhlcmUgc2l6ZXNcIixcbiAgXCJcdC8vIFRPRE8gLSBpbXBsZW1lbnQgZGVwdGggYnVmZmVyIG9uIENocm9tZVwiLFxuICBcIlx0bXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XCIsXG4gIFwiXHQvLyBFeHBhbmQgcXVhZHJpbGF0ZXJhbCBwZXJwZW5kaWN1bGFyIHRvIGJvdGggdmlldy9zY3JlZW4gZGlyZWN0aW9uIGFuZCBjb25lIGF4aXNcIixcbiAgXCJcdHZlYzMgY3lsQXhpcyA9IChtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KG5vcm1hbCwgMC4wKSkueHl6OyAvLyBjb252ZXJ0IGNvbmUgYXhpcyB0byBjYW1lcmEgc3BhY2VcIixcbiAgXCJcdHZlYzMgc2lkZURpciA9IG5vcm1hbGl6ZShjcm9zcyh2ZWMzKDAuMCwwLjAsLTEuMCksIGN5bEF4aXMpKTtcIixcbiAgXCJcdG12UG9zaXRpb24gKz0gdmVjNChyYWRpdXMgKiBzaWRlRGlyLCAwLjApO1wiLFxuICBcIlx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcIixcbiAgXCJcdC8vIFBhc3MgYW5kIGludGVycG9sYXRlIGNvbG9yXCIsXG4gIFwiXHR2Q29sb3IgPSB0eXBlQ29sb3I7XCIsXG4gIFwiXHQvLyBUZXh0dXJlIGNvb3JkaW5hdGVzXCIsXG4gIFwiXHRzcGhlcmVVdiA9IHV2IC0gdmVjMigwLjUsIDAuNSk7IC8vIG1hcCBmcm9tIFswLDFdIHJhbmdlIHRvIFstLjUsLjVdLCBiZWZvcmUgcm90YXRpb25cIixcbiAgJ1x0Ly8gSWYgc2lkZURpciBpcyBcInVwXCIgb24gc2NyZWVuLCBtYWtlIHN1cmUgdSBpcyBwb3NpdGl2ZScsXG4gIFwiXHRmbG9hdCBxID0gc2lkZURpci55ICogc3BoZXJlVXYueTtcIixcbiAgXCJcdHNwaGVyZVV2LnkgPSBzaWduKHEpICogc3BoZXJlVXYueTtcIixcbiAgXCJcdC8vIHJvdGF0ZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIHRvIG1hdGNoIGNvbmUgb3JpZW50YXRpb24gYWJvdXQgelwiLFxuICBcIlx0ZmxvYXQgYW5nbGUgPSBhdGFuKHNpZGVEaXIueC9zaWRlRGlyLnkpO1wiLFxuICBcIlx0ZmxvYXQgYyA9IGNvcyhhbmdsZSk7XCIsXG4gIFwiXHRmbG9hdCBzID0gc2luKGFuZ2xlKTtcIixcbiAgXCJcdG1hdDIgcm90TWF0ID0gbWF0MihcIixcbiAgXCJcdFx0YywgLXMsIFwiLFxuICBcIlx0XHRzLCAgYyk7XCIsXG4gIFwiXHRzcGhlcmVVdiA9IHJvdE1hdCAqIHNwaGVyZVV2O1wiLFxuICBcIlx0c3BoZXJlVXYgKz0gdmVjMigwLjUsIDAuNSk7IC8vIG1hcCBiYWNrIGZyb20gWy0uNSwuNV0gPT4gWzAsMV1cIixcbiAgXCJcdC8vIFdlIGFyZSBwYWludGluZyBhbiBhbmdsZWQgY29uZSBvbnRvIGEgZmxhdCBxdWFkLCBzbyBkZXB0aCBjb3JyZWN0aW9uIGlzIGNvbXBsaWNhdGVkXCIsXG4gIFwiICAgZmxvYXQgZm9yZXNob3J0ZW5pbmcgPSBsZW5ndGgoY3lsQXhpcykgLyBsZW5ndGgoY3lsQXhpcy54eSk7IC8vIGNvcnJlY3QgZGVwdGggZm9yIGZvcmVzaG9ydGVuaW5nXCIsXG4gIFwiICAgLy8gZm9yZXNob3J0ZW5pbmcgbGltaXQgaXMgYSB0cmFkZW9mZiBiZXR3ZWVuIG92ZXJleHRydWRlZCBjb25lIGFydGlmYWN0cywgYW5kIGRlcHRoIGFydGlmYWN0c1wiLFxuICBcIiAgIGlmIChmb3Jlc2hvcnRlbmluZyA+IDQuMCkgZm9yZXNob3J0ZW5pbmcgPSAwLjk7IC8vIGhhY2sgdG8gbm90IHBvcCBvdXQgYXQgZXh0cmVtZSBhbmdsZXMuLi5cIixcbiAgXCIgICBkZXB0aFNjYWxlID0gcmFkaXVzICogZm9yZXNob3J0ZW5pbmc7IC8vIGNvcnJlY3QgZGVwdGggZm9yIGZvcmVzaG9ydGVuaW5nXCIsXG4gIFwifVwiXG5dLmpvaW4oXCJcXG5cIik7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyQ29uZSA9IFtcbiAgXCJ1bmlmb3JtIHNhbXBsZXIyRCBzcGhlcmVUZXh0dXJlOyAvLyBJbXBvc3RlciBpbWFnZSBvZiBzcGhlcmVcIixcbiAgXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcIixcbiAgXCJ2YXJ5aW5nIHZlYzMgdkNvbG9yO1wiLFxuICBcInZhcnlpbmcgdmVjMiBzcGhlcmVVdjtcIixcbiAgXCJ2YXJ5aW5nIHZlYzQgbXZQb3NpdGlvbjtcIixcbiAgXCJ2YXJ5aW5nIGZsb2F0IGRlcHRoU2NhbGU7XCIsXG4gIFwidm9pZCBtYWluKCkgXCIsXG4gIFwie1wiLFxuICBcIlx0dmVjNCBzcGhlcmVDb2xvcnMgPSB0ZXh0dXJlMkQoc3BoZXJlVGV4dHVyZSwgc3BoZXJlVXYpO1wiLFxuICBcIlx0aWYgKHNwaGVyZUNvbG9ycy5hIDwgMC4zKSBkaXNjYXJkO1wiLFxuICBcIlx0dmVjMyBiYXNlQ29sb3IgPSB2Q29sb3IgKiBzcGhlcmVDb2xvcnMucjtcIixcbiAgXCJcdHZlYzMgaGlnaGxpZ2h0Q29sb3IgPSBiYXNlQ29sb3IgKyBzcGhlcmVDb2xvcnMuZ2dnO1wiLFxuICBcIlx0Z2xfRnJhZ0NvbG9yID0gdmVjNChoaWdobGlnaHRDb2xvciwgc3BoZXJlQ29sb3JzLmEpO1wiLFxuICBcIiNpZmRlZiBHTF9FWFRfZnJhZ19kZXB0aFwiLFxuICBcImZsb2F0IGR6ID0gc3BoZXJlQ29sb3JzLmIgKiBkZXB0aFNjYWxlO1wiLFxuICBcInZlYzQgbXZwID0gbXZQb3NpdGlvbiArIHZlYzQoMCwgMCwgZHosIDApO1wiLFxuICBcInZlYzQgY2xpcFBvcyA9IHByb2plY3Rpb25NYXRyaXggKiBtdnA7XCIsXG4gIFwiZmxvYXQgbmRjX2RlcHRoID0gY2xpcFBvcy56L2NsaXBQb3MudztcIixcbiAgXCJmbG9hdCBmYXIgPSBnbF9EZXB0aFJhbmdlLmZhcjsgZmxvYXQgbmVhciA9IGdsX0RlcHRoUmFuZ2UubmVhcjtcIixcbiAgXCJmbG9hdCBkZXB0aCA9ICgoKGZhci1uZWFyKSAqIG5kY19kZXB0aCkgKyBuZWFyICsgZmFyKSAvIDIuMDtcIixcbiAgXCJnbF9GcmFnRGVwdGhFWFQgPSBkZXB0aDtcIixcbiAgXCIjZW5kaWZcIixcbiAgXCJ9XCJcbl0uam9pbihcIlxcblwiKTtcblxuZnVuY3Rpb24gY29udmVydFRvSGV4Q29sb3IoaSkge1xuICBsZXQgcmVzdWx0ID0gXCIjMDAwMDAwXCI7XG4gIGlmIChpID49IDAgJiYgaSA8PSAxNSkge1xuICAgIHJlc3VsdCA9IGAjMDAwMDAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSAxNiAmJiBpIDw9IDI1NSkge1xuICAgIHJlc3VsdCA9IGAjMDAwMCR7aS50b1N0cmluZygxNil9YDtcbiAgfSBlbHNlIGlmIChpID49IDI1NiAmJiBpIDw9IDQwOTUpIHtcbiAgICByZXN1bHQgPSBgIzAwMCR7aS50b1N0cmluZygxNil9YDtcbiAgfSBlbHNlIGlmIChpID49IDQwOTYgJiYgaSA8PSA2NTUzNSkge1xuICAgIHJlc3VsdCA9IGAjMDAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSA2NTUzNiAmJiBpIDw9IDEwNDg1NzUpIHtcbiAgICByZXN1bHQgPSBgIzAke2kudG9TdHJpbmcoMTYpfWA7XG4gIH0gZWxzZSBpZiAoaSA+PSAxMDQ4NTc2ICYmIGkgPD0gMTY3NzcyMTUpIHtcbiAgICByZXN1bHQgPSBgIyR7aS50b1N0cmluZygxNil9YDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCb3VuZGluZ0JveChzd2NKU09OKSB7XG4gIGNvbnN0IGJvdW5kaW5nQm94ID0ge1xuICAgIHhtaW46IEluZmluaXR5LFxuICAgIHhtYXg6IC1JbmZpbml0eSxcbiAgICB5bWluOiBJbmZpbml0eSxcbiAgICB5bWF4OiAtSW5maW5pdHksXG4gICAgem1pbjogSW5maW5pdHksXG4gICAgem1heDogLUluZmluaXR5XG4gIH07XG5cbiAgT2JqZWN0LnZhbHVlcyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGNvbnN0IHIgPSBub2RlLnJhZGl1cztcbiAgICBpZiAobm9kZS54IC0gciA8IGJvdW5kaW5nQm94LnhtaW4pIHtcbiAgICAgIGJvdW5kaW5nQm94LnhtaW4gPSBub2RlLnggLSByO1xuICAgIH1cbiAgICBpZiAobm9kZS54ICsgciA+IGJvdW5kaW5nQm94LnhtYXgpIHtcbiAgICAgIGJvdW5kaW5nQm94LnhtYXggPSBub2RlLnggKyByO1xuICAgIH1cbiAgICBpZiAobm9kZS55IC0gciA8IGJvdW5kaW5nQm94LnltaW4pIHtcbiAgICAgIGJvdW5kaW5nQm94LnltaW4gPSBub2RlLnkgLSByO1xuICAgIH1cbiAgICBpZiAobm9kZS55ICsgciA+IGJvdW5kaW5nQm94LnltYXgpIHtcbiAgICAgIGJvdW5kaW5nQm94LnltYXggPSBub2RlLnkgKyByO1xuICAgIH1cbiAgICBpZiAobm9kZS56IC0gciA8IGJvdW5kaW5nQm94LnptaW4pIHtcbiAgICAgIGJvdW5kaW5nQm94LnptaW4gPSBub2RlLnogLSByO1xuICAgIH1cbiAgICBpZiAobm9kZS56ICsgciA+IGJvdW5kaW5nQm94LnptYXgpIHtcbiAgICAgIGJvdW5kaW5nQm94LnptYXggPSBub2RlLnogKyByO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGJvdW5kaW5nQm94O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCb3VuZGluZ1NwaGVyZShzd2NKU09OLCBib3VuZGluZ0JveCkge1xuICAvLyBTaW1pbGFyIHRvOlxuICAvLyBcIkFuIEVmZmljaWVudCBCb3VuZGluZyBTcGhlcmVcIiwgYnkgSmFjayBSaXR0ZXIgZnJvbSBcIkdyYXBoaWNzIEdlbXNcIiwgQWNhZGVtaWMgUHJlc3MsIDE5OTBcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VyaWNoNjY2L0dyYXBoaWNzR2Vtcy9ibG9iL21hc3Rlci9nZW1zL0JvdW5kU3BoZXJlLmNcblxuICAvLyBTdGFydCB3aXRoIHRoZSBzcGhlcmUgaW5zY3JpYmVkIGluIHRoZSBib3VuZGluZyBib3guICBJdCBtYXkgbWlzcyBzb21lIG5vZGVzLlxuICBjb25zdCByeCA9IChib3VuZGluZ0JveC54bWF4IC0gYm91bmRpbmdCb3gueG1pbikgLyAyO1xuICBjb25zdCByeSA9IChib3VuZGluZ0JveC55bWF4IC0gYm91bmRpbmdCb3gueW1pbikgLyAyO1xuICBjb25zdCByeiA9IChib3VuZGluZ0JveC56bWF4IC0gYm91bmRpbmdCb3guem1pbikgLyAyO1xuICBsZXQgcmFkaXVzID0gTWF0aC5taW4ocngsIHJ5LCByeik7XG4gIGxldCBjZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICBib3VuZGluZ0JveC54bWluICsgcngsXG4gICAgYm91bmRpbmdCb3gueW1pbiArIHJ5LFxuICAgIGJvdW5kaW5nQm94LnptaW4gKyByelxuICApO1xuXG4gIC8vIEZpbmQgZWFjaCBub2RlIHRoYXQgaXMgb3V0c2lkZSB0aGUgY3VycmVudCBib3VuZGluZyBzcGhlcmUuXG4gIGxldCByYWRpdXNTcSA9IHJhZGl1cyAqIHJhZGl1cztcbiAgT2JqZWN0LnZhbHVlcyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGNvbnN0IG5vZGVDZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMyhub2RlLngsIG5vZGUueSwgbm9kZS56KTtcbiAgICBjb25zdCBub2RlQ2VudGVyVG9DZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIG5vZGVDZW50ZXJUb0NlbnRlci5zdWJWZWN0b3JzKGNlbnRlciwgbm9kZUNlbnRlcik7XG4gICAgY29uc3QgZGlzdFNxTm9kZUNlbnRlclRvQ2VudGVyID0gbm9kZUNlbnRlclRvQ2VudGVyLmRvdChub2RlQ2VudGVyVG9DZW50ZXIpO1xuICAgIC8vIEluY2x1ZGUgdGhlIG5vZGUncyByYWRpdXMgd2hlbiBjaGVja2luZyB3aGV0aGVyIGl0IGlzIG91dHNpZGUuXG4gICAgaWYgKGRpc3RTcU5vZGVDZW50ZXJUb0NlbnRlciArIG5vZGUucmFkaXVzICogbm9kZS5yYWRpdXMgPiByYWRpdXNTcSkge1xuICAgICAgLy8gSWYgaXQgaXMgb3V0c2lkZSwgdGhlbiB0aGUgbmV3IGJvdW5kaW5ncC1zcGhlcmUgcmFkaXVzIGlzIHRoZSBhdmVyYWdlIG9mIHRoZSBvbGQgcmFkaXVzXG4gICAgICAvLyBhbmQgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG91dHNpZGUgb2YgdGhlIG5vZGUgKGkuZS4sIGluY2x1ZGUgaXRzIHJhZGl1cykgdG8gdGhlXG4gICAgICAvLyBvbGQgYm91bmRpbmctc3BoZXJlIGNlbnRlci5cbiAgICAgIGNvbnN0IGRpc3ROb2RlQ2VudGVyVG9DZW50ZXIgPSBNYXRoLnNxcnQoZGlzdFNxTm9kZUNlbnRlclRvQ2VudGVyKTtcbiAgICAgIGNvbnN0IG5ld1JhZGl1cyA9IChyYWRpdXMgKyAoZGlzdE5vZGVDZW50ZXJUb0NlbnRlciArIG5vZGUucmFkaXVzKSkgLyAyLjA7XG4gICAgICAvLyBUaGUgbmV3IGJvdW5kaW5nIHNwaGVyZSBjZW50ZXIgd2lsbCBiZSBvbiB0aGUgbGluZSBiZXR3ZWVuIHRoZSBub2RlIGFuZCB0aGUgb2xkIGNlbnRlci5cbiAgICAgIGNvbnN0IG5vZGVDZW50ZXJUb0NlbnRlclVuaXQgPSBub2RlQ2VudGVyVG9DZW50ZXJcbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLmRpdmlkZVNjYWxhcihkaXN0Tm9kZUNlbnRlclRvQ2VudGVyKTtcbiAgICAgIGNvbnN0IG5vZGVDZW50ZXJUb05ld0NlbnRlciA9IG5vZGVDZW50ZXJUb0NlbnRlclVuaXRcbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLm11bHRpcGx5U2NhbGFyKG5ld1JhZGl1cyAtIG5vZGUucmFkaXVzKTtcbiAgICAgIGNlbnRlciA9IG5vZGVDZW50ZXIuY2xvbmUoKS5hZGQobm9kZUNlbnRlclRvTmV3Q2VudGVyKTtcbiAgICAgIHJhZGl1cyA9IG5ld1JhZGl1cztcbiAgICAgIHJhZGl1c1NxID0gcmFkaXVzICogcmFkaXVzO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHsgY2VudGVyLCByYWRpdXMgfTtcbn1cbi8qKiBcbiAqIENhbGN1bGF0ZSB0aGUgY2FtZXJhIHBvc2l0aW9uIG9uIHRoZSBlZGdlIG9mIHRoZSBib3VuZGluZyBzcGhlcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3YgLSB0aGUgZmllbGQgb2YgdmlldyBmb3IgdGhlIHNjZW5lXG4gKiBAcGFyYW0ge09iamVjdH0gYm91bmRpbmdTcGhlcmUgLSBvYmplY3QgZGVzY3JpYmluZyByYWRpdXMgYW5kIGNlbnRlciBwb2ludCBvZiB0aGUgc3BoZXJlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZyb250VG9CYWNrIC0gaWYgdHJ1ZSwgdGhlbiBsb29rIGRvd24gdGhlIFotc3RhY2sgZnJvbSBwb2ludCAwXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUSFJFRS5WZWN0b3IzIG9iamVjdCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBjYW1lcmFcbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlQ2FtZXJhUG9zaXRpb24oZm92LCBib3VuZGluZ1NwaGVyZSwgZnJvbnRUb0JhY2ssIG1heFZvbHVtZVNpemUpIHtcbiAgY29uc3QgdGhldGEgPSAoZm92ICogKE1hdGguUEkgLyAxODAuMCkpIC8gMi4wO1xuICBjb25zdCBkID0gYm91bmRpbmdTcGhlcmUucmFkaXVzIC8gTWF0aC5zaW4odGhldGEpO1xuICBjb25zdCB7IGNlbnRlciB9ID0gYm91bmRpbmdTcGhlcmU7XG4gIC8vIElmIG5lZ2F0aXZlIHogaXMgZ3JlYXRlciB0aGFuIHRoZSAubWF4Vm9sdW1lU2l6ZSwgdGhlIGNhbWVyYSB3aWxsXG4gIC8vIGdldCBzdHVjayBhdCB0aGF0IHBvaW50IGFuZCB3b250IGJlIGFibGUgdG8gZG9sbHkgaW4gb3Igb3V0LiBGb3JjaW5nXG4gIC8vIHRoZSB6IHBvc2l0aW9uIHRvIGJlIGF0IGxlYXN0IGhhbGYgdGhlIG5lZ2F0aXZlIG1heFZvbHVtZVNpemUgc2VlbXNcbiAgLy8gdG8gZml4IHRoZSBpc3N1ZS5cbiAgY29uc3QgeiA9IE1hdGgubWF4KC0obWF4Vm9sdW1lU2l6ZS8yKSwgZnJvbnRUb0JhY2sgPyBjZW50ZXIueiAtIGQgOiBjZW50ZXIueiArIGQpO1xuICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjMoY2VudGVyLngsIGNlbnRlci55LCB6KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlTZW1pVHJhbnNwYXJlbnRTaGFkZXIob2JqZWN0LCBjb2xvcikge1xuICBvYmplY3QudHJhdmVyc2UoY2hpbGQgPT4ge1xuICAgIGNoaWxkLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIGNvbG9yOiB7IHR5cGU6IFwiY1wiLCB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGAke2NvbG9yfWApIH1cbiAgICAgIH0sXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IGBcbiAgICAgICAgI2xpbmUgNTg1XG4gICAgICAgIHZhcnlpbmcgdmVjMyBub3JtYWxfaW5fY2FtZXJhO1xuICAgICAgICB2YXJ5aW5nIHZlYzMgdmlld19kaXJlY3Rpb247XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZlYzQgcG9zX2luX2NhbWVyYSA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogcG9zX2luX2NhbWVyYTtcbiAgICAgICAgICBub3JtYWxfaW5fY2FtZXJhID0gbm9ybWFsaXplKG1hdDMobW9kZWxWaWV3TWF0cml4KSAqIG5vcm1hbCk7XG4gICAgICAgICAgdmlld19kaXJlY3Rpb24gPSBub3JtYWxpemUocG9zX2luX2NhbWVyYS54eXopO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcbiAgICAgICAgI2xpbmUgNTk3XG4gICAgICAgIHVuaWZvcm0gdmVjMyBjb2xvcjtcbiAgICAgICAgdmFyeWluZyB2ZWMzIG5vcm1hbF9pbl9jYW1lcmE7XG4gICAgICAgIHZhcnlpbmcgdmVjMyB2aWV3X2RpcmVjdGlvbjtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgLy8gTWFrZSBlZGdlcyBtb3JlIG9wYXF1ZSB0aGFuIGNlbnRlclxuICAgICAgICAgIGZsb2F0IGVkZ2luZXNzID0gMS4wIC0gYWJzKGRvdChub3JtYWxfaW5fY2FtZXJhLCB2aWV3X2RpcmVjdGlvbikpO1xuICAgICAgICAgIGZsb2F0IG9wYWNpdHkgPSBjbGFtcChlZGdpbmVzcyAtIDAuMzAsIDAuMCwgMC41KTtcbiAgICAgICAgICAvLyBEYXJrZW4gY29tcGFydG1lbnQgYXQgdGhlIHZlcnkgZWRnZVxuICAgICAgICAgIGZsb2F0IGJsYWNrbmVzcyA9IHBvdyhlZGdpbmVzcywgNC4wKSAtIDAuMztcbiAgICAgICAgICB2ZWMzIGMgPSBtaXgoY29sb3IsIHZlYzMoMCwwLDApLCBibGFja25lc3MpO1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYywgb3BhY2l0eSk7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGRlcHRoVGVzdDogdHJ1ZSxcbiAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLy8gZ2VuZXJhdGVzIHBhcnRpY2xlIHZlcnRpY2VzXG5mdW5jdGlvbiBnZW5lcmF0ZVBhcnRpY2xlKG5vZGUpIHtcbiAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKG5vZGUueCwgbm9kZS55LCBub2RlLnopO1xufVxuXG4vLyBnZW5lcmF0ZXMgc2tlbGV0b24gdmVydGljZXNcbmZ1bmN0aW9uIGdlbmVyYXRlU2tlbGV0b24obm9kZSwgbm9kZVBhcmVudCkge1xuICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMyhub2RlLngsIG5vZGUueSwgbm9kZS56KTtcbiAgY29uc3QgdmVydGV4UGFyZW50ID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgbm9kZVBhcmVudC54LFxuICAgIG5vZGVQYXJlbnQueSxcbiAgICBub2RlUGFyZW50LnpcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBjaGlsZDogdmVydGV4LFxuICAgIHBhcmVudDogdmVydGV4UGFyZW50XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1ldGFkYXRhRWxlbWVudChtZXRhZGF0YSwgY29sb3JzKSB7XG4gIGNvbnN0IG1ldGFkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXRhZGl2LmlkID0gXCJub2RlX2tleVwiO1xuICBtZXRhZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBtZXRhZGl2LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gIG1ldGFkaXYuc3R5bGUucmlnaHQgPSBcIjEwcHhcIjtcbiAgbWV0YWRpdi5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIDFweCAjYWFhYWFhXCI7XG4gIG1ldGFkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgbWV0YWRpdi5zdHlsZS5wYWRkaW5nID0gXCIycHhcIjtcblxuICBsZXQgdG9pbm5lcmh0bWwgPSBcIlwiO1xuICBtZXRhZGF0YS5mb3JFYWNoKG0gPT4ge1xuICAgIGNvbnN0IG10eXBlID0gcGFyc2VJbnQobS50eXBlLCAxMCk7XG4gICAgY29uc3QgdGhyZWVDb2xvciA9IG10eXBlIDwgY29sb3JzLmxlbmd0aCA/IGNvbG9yc1ttdHlwZV0gOiBjb2xvcnNbMF07XG4gICAgbGV0IGNzc0NvbG9yID0gdGhyZWVDb2xvcjtcbiAgICBpZiAodHlwZW9mIHRocmVlQ29sb3IgIT09IFwic3RyaW5nXCIpXG4gICAgICBjc3NDb2xvciA9IGNvbnZlcnRUb0hleENvbG9yKHRocmVlQ29sb3IpO1xuICAgIHRvaW5uZXJodG1sICs9IGA8ZGl2PjxzcGFuIHN0eWxlPSdoZWlnaHQ6MTBweDt3aWR0aDoxMHB4O2JhY2tncm91bmQ6JHtjc3NDb2xvcn07YDtcbiAgICB0b2lubmVyaHRtbCArPSBgZGlzcGxheTppbmxpbmUtYmxvY2s7Jz48L3NwYW4+IDogJHttLmxhYmVsfTwvZGl2PmA7XG4gIH0pO1xuICBtZXRhZGl2LmlubmVySFRNTCA9IHRvaW5uZXJodG1sO1xuICByZXR1cm4gbWV0YWRpdjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFya1ZpZXdlciB7XG4gIC8qIHN3YyBuZXVyb24ganNvbiBvYmplY3Q6XG4gICAqe1xuICAgKiAgaWQgOiB7XG4gICAqICAgIHR5cGU6IDx0eXBlIG51bWJlciBvZiBub2RlIChzdHJpbmcpPixcbiAgICogICAgeDogPHggcG9zaXRpb24gb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogICAgeTogPHkgcG9zaXRpb24gb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogICAgejogPHogcG9zaXRpb24gb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogICAgcGFyZW50OiA8aWQgbnVtYmVyIG9mIG5vZGUncyBwYXJlbnQgKC0xIGlmIG5vIHBhcmVudCk+LFxuICAgKiAgICByYWRpdXM6IDxyYWRpdXMgb2Ygbm9kZSAoZmxvYXQpPixcbiAgICogIH1cbiAgICp9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgdGhpcy5zd2MgPSBudWxsO1xuICAgIC8vIG1vZGUgKHNwaGVyZSwgcGFydGljbGUsIHNrZWxldG9uKVxuICAgIHRoaXMubW9kZSA9IFwicGFydGljbGVcIjtcbiAgICAvLyBmbGlwIHkgYXhpc1xuICAgIHRoaXMuZmxpcCA9IGZhbHNlO1xuICAgIC8vIGNvbG9yIGFycmF5LCBub2RlcyBvZiB0eXBlIDAgc2hvdyBhcyBmaXJzdCBjb2xvciwgZXRjLlxuICAgIHRoaXMuY29sb3JzID0gW1xuICAgICAgMHgzMWZmZGMsXG4gICAgICAweDZkNGZmMyxcbiAgICAgIDB4YWEzYWYwLFxuICAgICAgMHhmMzgwMzIsXG4gICAgICAweDU5ZmMyMCxcbiAgICAgIDB4ZjhkNDNjLFxuICAgICAgMHhmZDJjNGQsXG4gICAgICAweGM5YzljOVxuICAgIF07XG4gICAgdGhpcy5yYWRpdXNfc2NhbGVfZmFjdG9yID0gMTtcbiAgICB0aGlzLm1ldGFkYXRhID0gZmFsc2U7XG4gICAgdGhpcy5vbl9zZWxlY3Rfbm9kZSA9IG51bGw7XG4gICAgdGhpcy5vbl90b2dnbGVfbm9kZSA9IG51bGw7XG4gICAgdGhpcy5zaG93U3RhdHMgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgdGhpcy50aHJlZSA9IFRIUkVFO1xuXG4gICAgdGhpcy5zaG93QXhlcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd19jb25lcyA9IHRydWU7XG4gICAgdGhpcy5icmFpbmJvdW5kaW5nYm94ID0gbnVsbDtcbiAgICB0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXAgPSBudWxsO1xuICAgIHRoaXMubW91c2VIYW5kbGVyID0gbnVsbDtcbiAgICB0aGlzLm5vZGVQYXJ0aWNsZVRleHR1cmUgPSBOT0RFX1BBUlRJQ0xFX0lNQUdFO1xuICAgIHRoaXMubWluX3JhZGl1cyA9IG51bGw7XG4gICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzID0gbnVsbDtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IDB4ZmZmZmZmO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLmNhbWVyYUNoYW5nZUNhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLm9uVG9wID0gZmFsc2U7XG4gICAgdGhpcy5tYXhWb2x1bWVTaXplID0gMTAwMDAwO1xuXG4gICAgdGhpcy5zZXRWYWx1ZXMoYXJncyk7XG4gICAgLy8gYW55dGhpbmcgYWZ0ZXIgdGhlIGFib3ZlIGxpbmUgY2FuIG5vdCBiZSBzZXQgYnkgdGhlIGNhbGxlci5cblxuICAgIC8vIGh0bWwgZWxlbWVudCB0aGF0IHdpbGwgcmVjZWl2ZSB3ZWJnbCBjYW52YXNcbiAgICBpZiAodHlwZW9mIGFyZ3MuZG9tX2VsZW1lbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRoaXMuZG9tX2VsZW1lbnQgPSBhcmdzLmRvbV9lbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbV9lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGFyZ3MuZG9tX2VsZW1lbnQgfHwgXCJjb250YWluZXJcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBoZWlnaHQgb2YgY2FudmFzXG4gICAgdGhpcy5IRUlHSFQgPSB0aGlzLmRvbV9lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAvLyB3aWR0aCBvZiBjYW52YXNcbiAgICB0aGlzLldJRFRIID0gdGhpcy5kb21fZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIC8vIHNldHMgdXAgdXNlciBzcGVjaWZpZWQgY29uZmlndXJhdGlvblxuICBzZXRWYWx1ZXModmFsdWVzKSB7XG4gICAgaWYgKHZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoa2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlcyBjb2xvciBiYXNlZCBvbiBub2RlIHR5cGVcbiAgbm9kZUNvbG9yKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlIDwgdGhpcy50aHJlZV9jb2xvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aHJlZV9jb2xvcnNbbm9kZS50eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGhyZWVfY29sb3JzWzBdO1xuICB9XG5cblxuXG4gICAgLy8gZ2VuZXJhdGVzIHNwaGVyZSBtZXNoXG4gIGdlbmVyYXRlU3BoZXJlKG5vZGUpIHtcbiAgICBjb25zdCBzcGhlcmVNYXRlcmlhbCA9IHRoaXMudGhyZWVfbWF0ZXJpYWxzW25vZGUudHlwZV07XG4gICAgY29uc3QgcjEgPSBub2RlLnJhZGl1cyB8fCAwLjAxO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHIxKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIHNwaGVyZU1hdGVyaWFsKTtcbiAgICBtZXNoLnBvc2l0aW9uLnggPSBub2RlLng7XG4gICAgbWVzaC5wb3NpdGlvbi55ID0gbm9kZS55O1xuICAgIG1lc2gucG9zaXRpb24ueiA9IG5vZGUuejtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuXG4gIC8vIGdlbmVyYXRlcyBjb25lcyBjb25uZWN0aW5nIHNwaGVyZXNcbiAgZ2VuZXJhdGVDb25lR2VvbWV0cnkobm9kZSwgbm9kZVBhcmVudCkge1xuICAgIGNvbnN0IGNvbmVNYXRlcmlhbCA9IHRoaXMudGhyZWVfbWF0ZXJpYWxzW25vZGVQYXJlbnQudHlwZV07XG4gICAgY29uc3Qgbm9kZVZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKG5vZGUueCwgbm9kZS55LCBub2RlLnopO1xuICAgIGNvbnN0IG5vZGVQYXJlbnRWZWMgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgIG5vZGVQYXJlbnQueCxcbiAgICAgIG5vZGVQYXJlbnQueSxcbiAgICAgIG5vZGVQYXJlbnQuelxuICAgICk7XG4gICAgY29uc3QgZGlzdCA9IG5vZGVWZWMuZGlzdGFuY2VUbyhub2RlUGFyZW50VmVjKTtcbiAgICBjb25zdCBjeWxBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKG5vZGVWZWMsIG5vZGVQYXJlbnRWZWMpO1xuICAgIGN5bEF4aXMubm9ybWFsaXplKCk7XG4gICAgY29uc3QgdGhldGEgPSBNYXRoLmFjb3MoY3lsQXhpcy55KTtcbiAgICBjb25zdCByb3RhdGlvbkF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIHJvdGF0aW9uQXhpcy5jcm9zc1ZlY3RvcnMoY3lsQXhpcywgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpO1xuICAgIHJvdGF0aW9uQXhpcy5ub3JtYWxpemUoKTtcbiAgICBjb25zdCByMSA9IG5vZGUucmFkaXVzIHx8IDAuMDE7XG4gICAgY29uc3QgcjIgPSBub2RlUGFyZW50LnJhZGl1cyB8fCAwLjAxO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkocjEsIHIyLCBkaXN0KTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIGNvbmVNYXRlcmlhbCk7XG4gICAgbWVzaC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgbWVzaC5tYXRyaXgubWFrZVJvdGF0aW9uQXhpcyhyb3RhdGlvbkF4aXMsIC10aGV0YSk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgIChub2RlLnggKyBub2RlUGFyZW50LngpIC8gMixcbiAgICAgIChub2RlLnkgKyBub2RlUGFyZW50LnkpIC8gMixcbiAgICAgIChub2RlLnogKyBub2RlUGFyZW50LnopIC8gMlxuICAgICk7XG4gICAgbWVzaC5tYXRyaXguc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGVzIGNvbmUgcHJvcGVydGllcyBmb3Igbm9kZSwgcGFyZW50IHBhaXJcbiAgZ2VuZXJhdGVDb25lKG5vZGUsIG5vZGVQYXJlbnQsIGNvbG9yKSB7XG4gICAgY29uc3QgY29uZUNoaWxkID0ge307XG4gICAgY29uc3QgY29uZVBhcmVudCA9IHt9O1xuXG4gICAgbGV0IG5vZGVDb2xvciA9IHRoaXMubm9kZUNvbG9yKG5vZGUpO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgbm9kZUNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKGNvbG9yKTtcbiAgICB9XG4gICAgY29uZUNoaWxkLnZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKG5vZGUueCwgbm9kZS55LCBub2RlLnopO1xuICAgIGNvbmVDaGlsZC5yYWRpdXMgPSBub2RlLnJhZGl1cztcbiAgICBjb25lQ2hpbGQuY29sb3IgPSBub2RlQ29sb3I7XG5cbiAgICBsZXQgbm9kZVBhcmVudENvbG9yID0gdGhpcy5ub2RlQ29sb3Iobm9kZVBhcmVudCk7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBub2RlUGFyZW50Q29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoY29sb3IpO1xuICAgIH1cbiAgICBjb25lUGFyZW50LnZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgbm9kZVBhcmVudC54LFxuICAgICAgbm9kZVBhcmVudC55LFxuICAgICAgbm9kZVBhcmVudC56XG4gICAgKTtcbiAgICBjb25lUGFyZW50LnJhZGl1cyA9IG5vZGVQYXJlbnQucmFkaXVzO1xuICAgIGNvbmVQYXJlbnQuY29sb3IgPSBub2RlUGFyZW50Q29sb3I7XG5cbiAgICAvLyBub3JtYWxzXG4gICAgY29uc3QgbjEgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMoXG4gICAgICBjb25lUGFyZW50LnZlcnRleCxcbiAgICAgIGNvbmVDaGlsZC52ZXJ0ZXhcbiAgICApO1xuICAgIGNvbnN0IG4yID0gbjEuY2xvbmUoKS5uZWdhdGUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjaGlsZDogY29uZUNoaWxkLFxuICAgICAgcGFyZW50OiBjb25lUGFyZW50LFxuICAgICAgbm9ybWFsMTogbjEsXG4gICAgICBub3JtYWwyOiBuMlxuICAgIH07XG4gIH1cblxuICBjcmVhdGVOZXVyb24oc3djSlNPTiwgY29sb3IgPSB1bmRlZmluZWQpIHtcbiAgICAvLyBuZXVyb24gaXMgb2JqZWN0IDNkIHdoaWNoIGVuc3VyZXMgYWxsIGNvbXBvbmVudHMgbW92ZSB0b2dldGhlclxuICAgIGNvbnN0IG5ldXJvbiA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIGxldCBnZW9tZXRyeTtcbiAgICBsZXQgbWF0ZXJpYWw7XG4gICAgLy8gcGFydGljbGUgbW9kZSB1c2VzIHZlcnRleCBpbmZvIHRvIHBsYWNlIHRleHR1cmUgaW1hZ2UsIHZlcnkgZmFzdFxuICAgIGlmICh0aGlzLm1vZGUgPT09IFwicGFydGljbGVcIikge1xuICAgICAgLy8gc3BlY2lhbCBpbXBvc3RlciBpbWFnZSBjb250YWluczpcbiAgICAgIC8vIDEgLSBjb2xvcml6YWJsZSBzcGhlcmUgaW1hZ2UgaW4gcmVkIGNoYW5uZWxcbiAgICAgIC8vIDIgLSBzcGVjdWxhciBoaWdobGlnaHQgaW4gZ3JlZW4gY2hhbm5lbFxuICAgICAgLy8gMyAtIGRlcHRoIG9mZnNldCBpbiBibHVlIGNoYW5uZWwgKGN1cnJlbnRseSB1bnVzZWQpXG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBzcGhlcmVJbWcgPSBuZXcgVEhSRUUuVGV4dHVyZShpbWFnZSk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICAgIHNwaGVyZUltZy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICB9O1xuICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5ub2RlUGFydGljbGVUZXh0dXJlO1xuXG4gICAgICBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgLy8gcHJvcGVydGllcyB0aGF0IG1heSBjb25zdHkgZnJvbSBwYXJ0aWNsZSB0byBwYXJ0aWNsZS4gb25seSBhY2Nlc3NpYmxlIGluIHZlcnRleCBzaGFkZXJzIVxuICAgICAgLy9cdChjYW4gcGFzcyBjb2xvciBpbmZvIHRvIGZyYWdtZW50IHNoYWRlciB2aWEgdkNvbG9yLilcbiAgICAgIC8vIGNvbXB1dGUgc2NhbGUgZm9yIHBhcnRpY2xlcywgaW4gcGl4ZWxzXG4gICAgICBjb25zdCBwYXJ0aWNsZVNjYWxlID1cbiAgICAgICAgKDAuNSAqIHRoaXMuSEVJR0hUKSAvXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpIC9cbiAgICAgICAgTWF0aC50YW4oKDAuNSAqIHRoaXMuZm92ICogTWF0aC5QSSkgLyAxODAuMCk7XG5cbiAgICAgIGNvbnN0IGN1c3RvbUF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHJhZGl1czogeyB0eXBlOiBcImZ2MVwiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgdHlwZUNvbG9yOiB7IHR5cGU6IFwiY1wiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgdmVydGljZXM6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiBbXSB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjdXN0b21Vbmlmb3JtcyA9IHtcbiAgICAgICAgcGFydGljbGVTY2FsZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IHBhcnRpY2xlU2NhbGUgfSxcbiAgICAgICAgc3BoZXJlVGV4dHVyZTogeyB0eXBlOiBcInRcIiwgdmFsdWU6IHNwaGVyZUltZyB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbmRleExvb2t1cCA9IHt9O1xuXG4gICAgICBPYmplY3Qua2V5cyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBsZXQgbm9kZUNvbG9yID0gdGhpcy5ub2RlQ29sb3Ioc3djSlNPTltub2RlXSk7XG5cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgbm9kZUNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKGNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnRpY2xlVmVydGV4ID0gZ2VuZXJhdGVQYXJ0aWNsZShzd2NKU09OW25vZGVdKTtcblxuICAgICAgICBsZXQgcmFkaXVzID0gc3djSlNPTltub2RlXS5yYWRpdXMgKiB0aGlzLnJhZGl1c19zY2FsZV9mYWN0b3I7XG5cbiAgICAgICAgaWYgKHRoaXMubWluX3JhZGl1cyAmJiByYWRpdXMgPCB0aGlzLm1pbl9yYWRpdXMpIHtcbiAgICAgICAgICByYWRpdXMgPSB0aGlzLm1pbl9yYWRpdXM7XG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKHJhZGl1cyk7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChwYXJ0aWNsZVZlcnRleC54KTtcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKHBhcnRpY2xlVmVydGV4LnkpO1xuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2gocGFydGljbGVWZXJ0ZXgueik7XG5cbiAgICAgICAgaW5kZXhMb29rdXBbY3VzdG9tQXR0cmlidXRlcy5yYWRpdXMudmFsdWUubGVuZ3RoIC0gMV0gPVxuICAgICAgICAgIHN3Y0pTT05bbm9kZV0uc2FtcGxlTnVtYmVyO1xuICAgICB9KTtcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJwb3NpdGlvblwiLFxuICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjdXN0b21BdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLCAzKVxuICAgICAgKTtcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJyYWRpdXNcIixcbiAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY3VzdG9tQXR0cmlidXRlcy5yYWRpdXMudmFsdWUsIDEpXG4gICAgICApO1xuICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInR5cGVDb2xvclwiLFxuICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjdXN0b21BdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZSwgMylcbiAgICAgICk7XG5cbiAgICAgIG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgdW5pZm9ybXM6IGN1c3RvbVVuaWZvcm1zLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyLFxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxuICAgICAgICAvLyBhbHBoYVRlc3Q6IDAuNSAvLyBpZiBoYXZpbmcgdHJhbnNwYXJlbmN5IGlzc3VlcywgdHJ5IGluY2x1ZGluZzogYWxwaGFUZXN0OiAwLjUsXG4gICAgICB9KTtcbiAgICAgIG1hdGVyaWFsLmV4dGVuc2lvbnMuZnJhZ0RlcHRoID0gdHJ1ZTtcblxuICAgICAgbGV0IG1hdGVyaWFsU2hhZGVyID0gbnVsbDtcblxuICAgICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgcGFydGljbGVzLnVzZXJEYXRhID0geyBpbmRleExvb2t1cCwgbWF0ZXJpYWxTaGFkZXIgfTtcblxuICAgICAgbWF0ZXJpYWwub25CZWZvcmVDb21waWxlID0gc2hhZGVyID0+IHtcbiAgICAgICAgc2hhZGVyLnVuaWZvcm1zLmFscGhhID0geyB2YWx1ZTogMCB9O1xuICAgICAgICBzaGFkZXIudmVydGV4U2hhZGVyID0gYHVuaWZvcm0gZmxvYXQgYWxwaGE7XFxuJHtzaGFkZXIudmVydGV4U2hhZGVyfWA7XG4gICAgICAgIHNoYWRlci52ZXJ0ZXhTaGFkZXIgPSBzaGFkZXIudmVydGV4U2hhZGVyLnJlcGxhY2UoXG4gICAgICAgICAgXCIjaW5jbHVkZSA8YmVnaW5fdmVydGV4PlwiLFxuICAgICAgICAgIFtcInZBbHBoYSA9IGFscGhhXCJdLmpvaW4oXCJcXG5cIilcbiAgICAgICAgKTtcbiAgICAgICAgbWF0ZXJpYWxTaGFkZXIgPSBzaGFkZXI7XG5cbiAgICAgICAgbWF0ZXJpYWxTaGFkZXIudW5pZm9ybXMuYWxwaGEudmFsdWUgPSAwLjk7XG5cbiAgICAgICAgcGFydGljbGVzLnVzZXJEYXRhLm1hdGVyaWFsU2hhZGVyID0gbWF0ZXJpYWxTaGFkZXI7XG4gICAgICB9O1xuXG4gICAgICBuZXVyb24uYWRkKHBhcnRpY2xlcyk7XG5cbiAgICAgIGlmICh0aGlzLnNob3dfY29uZXMpIHtcbiAgICAgICAgLy8gQ29uZSBxdWFkIGltcG9zdGVycywgdG8gbGluayBzcGhlcmVzIHRvZ2V0aGVyXG4gICAgICAgIGNvbnN0IGNvbmVBdHRyaWJ1dGVzID0ge1xuICAgICAgICAgIHJhZGl1czogeyB0eXBlOiBcImZ2MVwiLCB2YWx1ZTogW10gfSxcbiAgICAgICAgICBpbmRpY2VzOiB7IHR5cGU6IFwiaXYxXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICAgIHR5cGVDb2xvcjogeyB0eXBlOiBcImNcIiwgdmFsdWU6IFtdIH0sXG4gICAgICAgICAgdmVydGljZXM6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICAgIG5vcm1hbHM6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiBbXSB9LFxuICAgICAgICAgIHV2OiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogW10gfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb25lVW5pZm9ybXMgPSB7XG4gICAgICAgICAgc3BoZXJlVGV4dHVyZTogeyB0eXBlOiBcInRcIiwgdmFsdWU6IHNwaGVyZUltZyB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMigwLjUsIDApLFxuICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMSksXG4gICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAxKVxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBjb25lR2VvbSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgICBsZXQgaXgyMSA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3djSlNPTikuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICBpZiAoc3djSlNPTltub2RlXS5wYXJlbnQgIT09IC0xKSB7XG4gICAgICAgICAgICAvLyBQYWludCB0d28gdHJpYW5nbGVzIHRvIG1ha2UgYSBjb25lLWltcG9zdGVyIHF1YWRyaWxhdGVyYWxcbiAgICAgICAgICAgIC8vIFRyaWFuZ2xlICMxXG4gICAgICAgICAgICBjb25zdCBjb25lID0gdGhpcy5nZW5lcmF0ZUNvbmUoXG4gICAgICAgICAgICAgIHN3Y0pTT05bbm9kZV0sXG4gICAgICAgICAgICAgIHN3Y0pTT05bc3djSlNPTltub2RlXS5wYXJlbnRdLFxuICAgICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBub2RlQ29sb3IgPSBjb25lLmNoaWxkLmNvbG9yO1xuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICAgIG5vZGVDb2xvciA9IG5ldyBUSFJFRS5Db2xvcihjb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwYXJlbnRSYWRpdXMgPSBjb25lLnBhcmVudC5yYWRpdXMgKiB0aGlzLnJhZGl1c19zY2FsZV9mYWN0b3I7XG4gICAgICAgICAgICBpZiAodGhpcy5taW5fcmFkaXVzICYmIHBhcmVudFJhZGl1cyA8IHRoaXMubWluX3JhZGl1cykge1xuICAgICAgICAgICAgICBwYXJlbnRSYWRpdXMgPSB0aGlzLm1pbl9yYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjaGlsZFJhZGl1cyA9IGNvbmUuY2hpbGQucmFkaXVzICogdGhpcy5yYWRpdXNfc2NhbGVfZmFjdG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMubWluX3JhZGl1cyAmJiBjaGlsZFJhZGl1cyA8IHRoaXMubWluX3JhZGl1cykge1xuICAgICAgICAgICAgICBjaGlsZFJhZGl1cyA9IHRoaXMubWluX3JhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdmVydGV4IDFcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKGNoaWxkUmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzBdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMF0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAyXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChjaGlsZFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1sxXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzFdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggM1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2gocGFyZW50UmFkaXVzKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5yKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5nKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnR5cGVDb2xvci52YWx1ZS5wdXNoKG5vZGVDb2xvci5iKTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzJdLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMl0ueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5pbmRpY2VzLnZhbHVlLnB1c2goaXgyMSk7XG4gICAgICAgICAgICBpeDIxICs9IDE7XG5cbiAgICAgICAgICAgIC8vIFRyaWFuZ2xlICMyXG4gICAgICAgICAgICAvLyBQYXJlbnRcbiAgICAgICAgICAgIG5vZGVDb2xvciA9IGNvbmUucGFyZW50LmNvbG9yO1xuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICAgIG5vZGVDb2xvciA9IG5ldyBUSFJFRS5Db2xvcihjb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHZlcnRleCAxXG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5yYWRpdXMudmFsdWUucHVzaChwYXJlbnRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMF0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1swXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcblxuICAgICAgICAgICAgLy8gdmVydGV4IDJcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5wYXJlbnQudmVydGV4LngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLnBhcmVudC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUucGFyZW50LnZlcnRleC56KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZS5wdXNoKHBhcmVudFJhZGl1cyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3Iucik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuZyk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy50eXBlQ29sb3IudmFsdWUucHVzaChub2RlQ29sb3IuYik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwyLngpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMi55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDIueik7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1sxXS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLnB1c2godXZzWzFdLnkpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMuaW5kaWNlcy52YWx1ZS5wdXNoKGl4MjEpO1xuICAgICAgICAgICAgaXgyMSArPSAxO1xuXG4gICAgICAgICAgICAvLyB2ZXJ0ZXggM1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUucHVzaChjb25lLmNoaWxkLnZlcnRleC54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLnZlcnRpY2VzLnZhbHVlLnB1c2goY29uZS5jaGlsZC52ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy52ZXJ0aWNlcy52YWx1ZS5wdXNoKGNvbmUuY2hpbGQudmVydGV4LnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMucmFkaXVzLnZhbHVlLnB1c2goY2hpbGRSYWRpdXMpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLnIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmcpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLnB1c2gobm9kZUNvbG9yLmIpO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMubm9ybWFscy52YWx1ZS5wdXNoKGNvbmUubm9ybWFsMS54KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLm5vcm1hbHMudmFsdWUucHVzaChjb25lLm5vcm1hbDEueSk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLnB1c2goY29uZS5ub3JtYWwxLnopO1xuICAgICAgICAgICAgY29uZUF0dHJpYnV0ZXMudXYudmFsdWUucHVzaCh1dnNbMl0ueCk7XG4gICAgICAgICAgICBjb25lQXR0cmlidXRlcy51di52YWx1ZS5wdXNoKHV2c1syXS55KTtcbiAgICAgICAgICAgIGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUucHVzaChpeDIxKTtcbiAgICAgICAgICAgIGl4MjEgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25lR2VvbS5zZXRJbmRleChcbiAgICAgICAgICBuZXcgVEhSRUUuVWludDMyQnVmZmVyQXR0cmlidXRlKGNvbmVBdHRyaWJ1dGVzLmluZGljZXMudmFsdWUsIDEpXG4gICAgICAgICk7XG4gICAgICAgIGNvbmVHZW9tLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInBvc2l0aW9uXCIsXG4gICAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMudmVydGljZXMudmFsdWUsIDMpXG4gICAgICAgICk7XG4gICAgICAgIGNvbmVHZW9tLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInJhZGl1c1wiLFxuICAgICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGNvbmVBdHRyaWJ1dGVzLnJhZGl1cy52YWx1ZSwgMSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uZUdlb20uc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwidHlwZUNvbG9yXCIsXG4gICAgICAgICAgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29uZUF0dHJpYnV0ZXMudHlwZUNvbG9yLnZhbHVlLCAzKVxuICAgICAgICApO1xuICAgICAgICBjb25lR2VvbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJub3JtYWxcIixcbiAgICAgICAgICBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb25lQXR0cmlidXRlcy5ub3JtYWxzLnZhbHVlLCAzKVxuICAgICAgICApO1xuICAgICAgICBjb25lR2VvbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJ1dlwiLFxuICAgICAgICAgIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKGNvbmVBdHRyaWJ1dGVzLnV2LnZhbHVlLCAyKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNvbmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgICAgdW5pZm9ybXM6IGNvbmVVbmlmb3JtcyxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlckNvbmUsXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50U2hhZGVyQ29uZSxcbiAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICBkZXB0aFRlc3Q6IHRydWUsXG4gICAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgICAgICBhbHBoYVRlc3Q6IDAuNSAvLyBpZiBoYXZpbmcgdHJhbnNwYXJlbmN5IGlzc3VlcywgdHJ5IGluY2x1ZGluZzogYWxwaGFUZXN0OiAwLjUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbmVNYXRlcmlhbC5leHRlbnNpb25zLmZyYWdEZXB0aCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgY29uZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChjb25lR2VvbSwgY29uZU1hdGVyaWFsKTtcblxuICAgICAgICBjb25lTWF0ZXJpYWwub25CZWZvcmVDb21waWxlID0gc2hhZGVyID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyggc2hhZGVyIClcbiAgICAgICAgICBzaGFkZXIudW5pZm9ybXMuYWxwaGEgPSB7IHZhbHVlOiAwIH07XG4gICAgICAgICAgc2hhZGVyLnZlcnRleFNoYWRlciA9IGB1bmlmb3JtIGZsb2F0IGFscGhhO1xcbiR7c2hhZGVyLnZlcnRleFNoYWRlcn1gO1xuICAgICAgICAgIHNoYWRlci52ZXJ0ZXhTaGFkZXIgPSBzaGFkZXIudmVydGV4U2hhZGVyLnJlcGxhY2UoXG4gICAgICAgICAgICBcIiNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XCIsXG4gICAgICAgICAgICBbXCJ2QWxwaGEgPSBhbHBoYVwiXS5qb2luKFwiXFxuXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBtYXRlcmlhbFNoYWRlciA9IHNoYWRlcjtcblxuICAgICAgICAgIG1hdGVyaWFsU2hhZGVyLnVuaWZvcm1zLmFscGhhLnZhbHVlID0gMC45O1xuXG4gICAgICAgICAgY29uZU1lc2gudXNlckRhdGEgPSB7IG1hdGVyaWFsU2hhZGVyIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbmV1cm9uLmFkZChjb25lTWVzaCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNwaGVyZSBtb2RlIHJlbmRlcnMgM2Qgc3BoZXJlXG4gICAgZWxzZSBpZiAodGhpcy5tb2RlID09PSBcInNwaGVyZVwiKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBjb25zdCBzcGhlcmUgPSB0aGlzLmdlbmVyYXRlU3BoZXJlKHN3Y0pTT05bbm9kZV0pO1xuICAgICAgICBuZXVyb24uYWRkKHNwaGVyZSk7XG4gICAgICAgIGlmICh0aGlzLnNob3dfY29uZXMpIHtcbiAgICAgICAgICBpZiAoc3djSlNPTltub2RlXS5wYXJlbnQgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBjb25lID0gdGhpcy5nZW5lcmF0ZUNvbmVHZW9tZXRyeShcbiAgICAgICAgICAgICAgc3djSlNPTltub2RlXSxcbiAgICAgICAgICAgICAgc3djSlNPTltzd2NKU09OW25vZGVdLnBhcmVudF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBuZXVyb24uYWRkKGNvbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gXCJza2VsZXRvblwiIHx8IHRoaXMuc2hvd19jb25lcyA9PT0gZmFsc2UpIHtcbiAgICAgIG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFwic2tlbGV0b25cIikgbWF0ZXJpYWwuY29sb3Iuc2V0KHRoaXMuY29sb3JzWzBdKTtcbiAgICAgIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG4gICAgICBPYmplY3Qua2V5cyhzd2NKU09OKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAoc3djSlNPTltub2RlXS5wYXJlbnQgIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgdmVydGljZXMgPSBnZW5lcmF0ZVNrZWxldG9uKFxuICAgICAgICAgICAgc3djSlNPTltub2RlXSxcbiAgICAgICAgICAgIHN3Y0pTT05bc3djSlNPTltub2RlXS5wYXJlbnRdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzLmNoaWxkKTtcbiAgICAgICAgICBnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzLnBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgbGluZSA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIG5ldXJvbi5hZGQobGluZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXVyb247XG4gIH1cblxuICAvLyBjb3BpZWQgZnJvbSBleGFtcGxlIGF0IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYjk3emQxYTMvMTYvXG4gIGFkZEF4ZXMoKSB7XG4gICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gMjAwO1xuICAgIGNvbnN0IENBTlZBU19IRUlHSFQgPSAyMDA7XG4gICAgY29uc3QgYXhlc1JlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHsgYWxwaGE6IHRydWUgfSApOyAvLyBjbGVhclxuICAgIGF4ZXNSZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweDAwMDAwMCwgMCApO1xuICAgIGF4ZXNSZW5kZXJlci5zZXRTaXplKCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQgKTtcbiAgICB0aGlzLmF4ZXNSZW5kZXJlciA9IGF4ZXNSZW5kZXJlcjtcblxuICAgIGNvbnN0IGF4ZXNDYW52YXMgPSB0aGlzLmRvbV9lbGVtZW50LmFwcGVuZENoaWxkKCBheGVzUmVuZGVyZXIuZG9tRWxlbWVudCApO1xuICAgIGF4ZXNDYW52YXMuc2V0QXR0cmlidXRlKCdpZCcsICdheGVzQ2FudmFzJyk7XG4gICAgYXhlc0NhbnZhcy5zdHlsZS53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICBheGVzQ2FudmFzLnN0eWxlLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgYXhlc0NhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBheGVzQ2FudmFzLnN0eWxlLnpJbmRleCA9IDIwMDtcbiAgICBheGVzQ2FudmFzLnN0eWxlLmJvdHRvbSA9IFwiNXB4XCI7XG4gICAgYXhlc0NhbnZhcy5zdHlsZS5yaWdodCA9IFwiNXB4XCI7XG5cblxuXG4gICAgY29uc3QgYXhlc0NhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNTAsIENBTlZBU19XSURUSCAvIENBTlZBU19IRUlHSFQsIDEsIDEwMDAgKTtcbiAgICBheGVzQ2FtZXJhLnVwID0gdGhpcy5jYW1lcmEudXA7IC8vIGltcG9ydGFudCFcbiAgICB0aGlzLmF4ZXNDYW1lcmEgPSBheGVzQ2FtZXJhO1xuXG4gICAgY29uc3QgYXhlc1NjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgY29uc3QgYXhlc1BvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLDAsMCApO1xuICAgIGF4ZXNTY2VuZS5hZGQoIG5ldyBUSFJFRS5BcnJvd0hlbHBlciggbmV3IFRIUkVFLlZlY3RvcjMoIDEsMCwwICksIGF4ZXNQb3MsIDYwLCAweEZGMDAwMCwgMjAsIDEwICkgKTtcbiAgICBheGVzU2NlbmUuYWRkKCBuZXcgVEhSRUUuQXJyb3dIZWxwZXIoIG5ldyBUSFJFRS5WZWN0b3IzKCAwLDEsMCApLCBheGVzUG9zLCA2MCwgMHgwMEZGMDAsIDIwLCAxMCApICk7XG4gICAgYXhlc1NjZW5lLmFkZCggbmV3IFRIUkVFLkFycm93SGVscGVyKCBuZXcgVEhSRUUuVmVjdG9yMyggMCwwLDEgKSwgYXhlc1BvcywgNjAsIDB4MDAwMEZGLCAyMCwgMTAgKSApO1xuICAgIHRoaXMuYXhlc1NjZW5lID0gYXhlc1NjZW5lO1xuICB9XG5cbiAgLy8gU2V0cyB1cCB0aHJlZS5qcyBzY2VuZVxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmVmZmVjdCA9PT0gXCJub2VmZmVjdFwiKSB0aGlzLmVmZmVjdCA9IGZhbHNlO1xuXG4gICAgLy8gc2V0IHVwIGNvbG9ycyBhbmQgbWF0ZXJpYWxzIGJhc2VkIG9uIGNvbG9yIGFycmF5XG4gICAgdGhpcy50aHJlZV9jb2xvcnMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbG9ycykuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICB0aGlzLnRocmVlX2NvbG9ycy5wdXNoKG5ldyBUSFJFRS5Db2xvcih0aGlzLmNvbG9yc1tjb2xvcl0pKTtcbiAgICB9KVxuICAgIHRoaXMudGhyZWVfbWF0ZXJpYWxzID0gW107XG4gICAgT2JqZWN0LmtleXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgdGhpcy50aHJlZV9tYXRlcmlhbHMucHVzaChcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbY29sb3JdLFxuICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXR1cCByZW5kZXJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMMVJlbmRlcmVyKHtcbiAgICAgIGFudGlhbGlhczogdHJ1ZSAvLyB0byBnZXQgc21vb3RoZXIgb3V0cHV0XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yLCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5XSURUSCwgdGhpcy5IRUlHSFQpO1xuICAgIHRoaXMuZG9tX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIC8vIHRvIGxldCBvbi10b3AgcmVuZGVyaW5nIHdvcmtcbiAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuXG4gICAgLy8gY3JlYXRlIGEgc2NlbmVcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAvLyBwdXQgYSBjYW1lcmEgaW4gdGhlIHNjZW5lXG4gICAgdGhpcy5mb3YgPSA0NTtcbiAgICBjb25zdCBjYW1lcmFQb3NpdGlvbiA9IHRoaXMubWF4Vm9sdW1lU2l6ZTtcbiAgICBjb25zdCBmYXJDbGlwcGluZyA9IGNhbWVyYVBvc2l0aW9uICogMjtcbiAgICBjb25zdCBuZWFyQ2xpcHBpbmcgPSAxMDtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIHRoaXMuZm92LFxuICAgICAgdGhpcy5XSURUSCAvIHRoaXMuSEVJR0hULFxuICAgICAgbmVhckNsaXBwaW5nLFxuICAgICAgZmFyQ2xpcHBpbmdcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuc2hvd1N0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgICB0aGlzLnN0YXRzLnNob3dQYW5lbCgwKTtcbiAgICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmRvbV9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS56SW5kZXggPSAxMDA7XG4gICAgICB0aGlzLmRvbV9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gY2FtZXJhUG9zaXRpb247XG5cbiAgICBpZiAodGhpcy5zaG93QXhlcykge1xuICAgICAgdGhpcy5hZGRBeGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmxpcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jYW1lcmEudXAuc2V0WSgtMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3djKSB7XG4gICAgICBjb25zdCBuZXVyb24gPSB0aGlzLmNyZWF0ZU5ldXJvbih0aGlzLnN3Yyk7XG4gICAgICBjb25zdCBib3VuZGluZ0JveCA9IGNhbGN1bGF0ZUJvdW5kaW5nQm94KHRoaXMuc3djKTtcbiAgICAgIGNvbnN0IGJvdW5kaW5nU3BoZXJlID0gY2FsY3VsYXRlQm91bmRpbmdTcGhlcmUodGhpcy5zd2MsIGJvdW5kaW5nQm94KTtcbiAgICAgIC8vIHN0b3JlIG5ldXJvbiBzdGF0dXMgYW5kIGJvdW5kaW5nIHNwaGVyZSBmb3IgbGF0ZXIgdXNlXG4gICAgICAvLyB3aGVuIHJlc2V0dGluZyB0aGUgdmlldy5cbiAgICAgIG5ldXJvbi5pc05ldXJvbiA9IHRydWU7XG4gICAgICBuZXVyb24uYm91bmRpbmdTcGhlcmUgPSBib3VuZGluZ1NwaGVyZTtcbiAgICAgIHRoaXMuc2NlbmUuYWRkKG5ldXJvbik7XG4gICAgfVxuXG4gICAgLy8gZm9yIGVsZW1lbnRzIHRoYXQgbWF5IGJlIHJlbmRlcmVkIG9uIHRvcFxuICAgIHRoaXMuc2NlbmVPblRvcGFibGUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgIGlmICh0aGlzLm1ldGFkYXRhKSB7XG4gICAgICBjb25zdCBtRWxlbWVudCA9IGNyZWF0ZU1ldGFkYXRhRWxlbWVudCh0aGlzLm1ldGFkYXRhLCB0aGlzLmNvbG9ycyk7XG4gICAgICB0aGlzLmRvbV9lbGVtZW50LmFwcGVuZENoaWxkKG1FbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLnRyYWNrQ29udHJvbHMgPSBuZXcgT3JiaXRVbmxpbWl0ZWRDb250cm9scyh0aGlzLmNhbWVyYSwgdGhpcy5kb21fZWxlbWVudCk7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLm1heERpc3RhbmNlID0gY2FtZXJhUG9zaXRpb247XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLm1pbkRpc3RhbmNlID0gMTU7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgLy8gVE9ETzogaGF2ZSBhIGNhbGxiYWNrIGhlcmUgdGhhdCByZXBvcnRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZVxuICAgIC8vIGNhbWVyYS4gVGhhdCB3YXkgd2UgY2FuIHN0b3JlIGl0IGluIHRoZSBzdGF0ZSBhbmQgcmVzdG9yZSBmcm9tIHRoZXJlLlxuICAgIHRoaXMudHJhY2tDb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNhbWVyYUNoYW5nZUNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zaXRpb246IHBvcyB9ID0gdGhpcy5jYW1lcmE7XG4gICAgICAgIHRoaXMuY2FtZXJhQ2hhbmdlQ2FsbGJhY2soeyB4OiBwb3MueCwgeTogcG9zLnksIHo6IHBvcy56IH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yYXljYXN0ZXIucGFyYW1zLlBvaW50cy50aHJlc2hvbGQgPSBERUZBVUxUX1BPSU5UX1RIUkVTSE9MRDtcblxuICAgIHRoaXMuZG9tX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljay5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgfVxuXG4gIGNhbWVyYUNvb3JkcygpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uOiBwb3MgfSA9IHRoaXMuY2FtZXJhO1xuICAgIHJldHVybiB7IHg6IHBvcy54LCB5OiBwb3MueSwgejogcG9zLnogfTtcbiAgfVxuXG4gIGNhbWVyYVRhcmdldCgpIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gdGhpcy50cmFja0NvbnRyb2xzO1xuICAgIHJldHVybiB7eDogdGFyZ2V0LngsIHk6IHRhcmdldC55LCB6OiB0YXJnZXQueiB9O1xuICB9XG5cbiAgcmVzZXRWaWV3KCkge1xuICAgIHRoaXMudHJhY2tDb250cm9scy5yZXNldCgpO1xuICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLmNhbWVyYS51cC5zZXQoMCwxLDApO1xuICB9XG5cbiAgcmVzdG9yZVZpZXcoeCA9IDAsIHkgPSAwLCB6ID0gMCwgdGFyZ2V0KSB7XG4gICAgdGhpcy50cmFja0NvbnRyb2xzLm9iamVjdC5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnRhcmdldC5zZXQodGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQueik7XG4gICAgfVxuICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgfVxuXG4gIHJlc2V0QXJvdW5kRmlyc3ROZXVyb24oe2Zyb250VG9CYWNrfSA9IHtmcm9udFRvQmFjazogdHJ1ZX0pIHtcbiAgICBjb25zdCBuZXVyb25zID0gdGhpcy5zY2VuZS5jaGlsZHJlbi5maWx0ZXIoYyA9PiBjLmlzTmV1cm9uKTtcbiAgICBpZiAobmV1cm9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBuZXVyb25zWzBdLmJvdW5kaW5nU3BoZXJlLmNlbnRlcjtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FsY3VsYXRlQ2FtZXJhUG9zaXRpb24odGhpcy5mb3YsIG5ldXJvbnNbMF0uYm91bmRpbmdTcGhlcmUsIGZyb250VG9CYWNrLCB0aGlzLm1heFZvbHVtZVNpemUpO1xuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnRhcmdldC5zZXQodGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQueik7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgICB0aGlzLmNhbWVyYS51cC5zZXQoMCwxLDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE86IGFsdCBjbGljayBzaG91bGQgdGFyZ2V0IG1lc2hlcyBhbmQgY2VudGVyIHRoZSBvcmJpdCBjb250cm9sc1xuICAvLyBvbiB0aGVtIGlmIGludGVyc2VjdGVkLlxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZG9tX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICBtb3VzZS54ID0gKChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHRoaXMuV0lEVEgpICogMiAtIDE7XG4gICAgbW91c2UueSA9IC0oKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyB0aGlzLkhFSUdIVCkgKiAyICsgMTtcblxuICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobW91c2UsIHRoaXMuY2FtZXJhKTtcblxuICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKFxuICAgICAgW10uY29uY2F0KHRoaXMuc2NlbmUuY2hpbGRyZW4sIHRoaXMuc2NlbmVPblRvcGFibGUuY2hpbGRyZW4pLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBjb25zdCBwb2ludHMgPSBpbnRlcnNlY3RzXG4gICAgICAuZmlsdGVyKG8gPT4gby5vYmplY3QudHlwZSA9PT0gXCJQb2ludHNcIilcbiAgICAgIC5maWx0ZXIobyA9PiBvLm9iamVjdC51c2VyRGF0YS5tYXRlcmlhbFNoYWRlci51bmlmb3Jtcy5hbHBoYS52YWx1ZSA+IDAuMClcbiAgICAgIC5zb3J0KChhLCBiKSA9PlxuICAgICAgICBhLmRpc3RhbmNlVG9SYXkgPT09IGIuZGlzdGFuY2VUb1JheVxuICAgICAgICAgID8gYS5kaXN0YW5jZSAtIGIuZGlzdGFuY2VcbiAgICAgICAgICA6IGEuZGlzdGFuY2VUb1JheSAtIGIuZGlzdGFuY2VUb1JheVxuICAgICAgKTtcblxuICAgIGlmIChwb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0T2JqZWN0ID0gcG9pbnRzWzBdO1xuXG4gICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgIGlmICh0aGlzLm9uX3RvZ2dsZV9ub2RlKSB7XG4gICAgICAgICAgY29uc3Qgc2FtcGxlTnVtYmVyID1cbiAgICAgICAgICAgIGludGVyc2VjdE9iamVjdC5vYmplY3QudXNlckRhdGEuaW5kZXhMb29rdXBbaW50ZXJzZWN0T2JqZWN0LmluZGV4XTtcbiAgICAgICAgICBjb25zdCB0cmFjaW5nSWQgPSBpbnRlcnNlY3RPYmplY3Qub2JqZWN0LnBhcmVudC5uYW1lO1xuXG4gICAgICAgICAgdGhpcy5vbl90b2dnbGVfbm9kZSh0cmFjaW5nSWQsIHNhbXBsZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiB0aGlzLnRyYWNrQ29udHJvbHMuY2xpY2tlZCkge1xuICAgICAgICAgIHRoaXMudHJhY2tDb250cm9scy50YXJnZXQgPSBwb2ludHNbMF0ucG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbl9zZWxlY3Rfbm9kZSkge1xuICAgICAgICAgIGNvbnN0IHNhbXBsZU51bWJlciA9XG4gICAgICAgICAgICBpbnRlcnNlY3RPYmplY3Qub2JqZWN0LnVzZXJEYXRhLmluZGV4TG9va3VwW2ludGVyc2VjdE9iamVjdC5pbmRleF07XG4gICAgICAgICAgY29uc3QgdHJhY2luZ0lkID0gaW50ZXJzZWN0T2JqZWN0Lm9iamVjdC5wYXJlbnQubmFtZTtcblxuICAgICAgICAgIHRoaXMub25fc2VsZWN0X25vZGUodHJhY2luZ0lkLCBzYW1wbGVOdW1iZXIsIGV2ZW50LCBwb2ludHNbMF0ucG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYW5pbWF0aW9uIGxvb3BcbiAgYW5pbWF0ZSh0aW1lc3RhbXAgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuc3RhdHMpIHtcbiAgICAgIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXApIHtcbiAgICAgIHRoaXMubGFzdF9hbmltX3RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aW1lc3RhbXAgLSB0aGlzLmxhc3RfYW5pbV90aW1lc3RhbXAgPiA1MCkge1xuICAgICAgdGhpcy5sYXN0X2FuaW1fdGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgICAgIGlmICh0aGlzLnNob3dBeGVzKSB7XG4gICAgICAgIHRoaXMuYXhlc0NhbWVyYS5wb3NpdGlvbi5jb3B5KCB0aGlzLmNhbWVyYS5wb3NpdGlvbiApO1xuICAgICAgICB0aGlzLmF4ZXNDYW1lcmEucG9zaXRpb24uc3ViKCB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0ICk7XG4gICAgICAgIHRoaXMuYXhlc0NhbWVyYS5wb3NpdGlvbi5zZXRMZW5ndGgoIDMwMCApO1xuICAgICAgICB0aGlzLmF4ZXNDYW1lcmEubG9va0F0KCB0aGlzLmF4ZXNTY2VuZS5wb3NpdGlvbiApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0cykge1xuICAgICAgdGhpcy5zdGF0cy5lbmQoKTtcbiAgICB9XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvLyByZW5kZXIgdGhlIHNjZW5lXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgaWYgKHRoaXMub25Ub3ApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmVPblRvcGFibGUsIHRoaXMuY2FtZXJhKTtcbiAgICBpZiAodGhpcy5zaG93QXhlcykge1xuICAgICAgdGhpcy5heGVzUmVuZGVyZXIucmVuZGVyKHRoaXMuYXhlc1NjZW5lLCB0aGlzLmF4ZXNDYW1lcmEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGEgbmV1cm9uIGZyb20gYW4gc3djIGZpbGUgaW50byB0aGUgY3VycmVudCBzY2VuZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIC0gdW5pcXVlIG5hbWUgZm9yIHRoZSBuZXVyb25cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjb2xvciAtIGhleGFkZWNpbWFsIHN0cmluZyB0byBzZXQgdGhlIGNvbG9yIG9mIHRoZSBuZXVyb25cbiAgICogQHBhcmFtIHtKU09OfSBub2RlcyAtIEpTT04gc3RyaW5nIGdlbmVyYXRlZCBmcm9tIHN3Y1BhcnNlclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVDYW1lcmE9dHJ1ZV0gLSBTaG91bGQgdGhlIGNhbWVyYSBwb3NpdGlvbiB1cGRhdGVcbiAgICogYWZ0ZXIgdGhlIG5ldXJvbiBpcyBhZGRlZCB0byB0aGUgc2NlbmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uVG9wYWJsZT1mYWxzZV0gLSBJZiB0cnVlLCB0aGUgbmV1cm9uIHdpbGwgYmUgcmVuZGVyZWRcbiAgICogb24gdG9wIG9mIChpLmUuLCBub3Qgb2NjbHVkZWQgYnkpIG90aGVyIG5ldXJvbnMgdGhhdCBoYWQgb25Ub3BhYmxlPWZhbHNlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb250VG9CYWNrPWZhbHNlXSAtIGlmIHRydWUsIHRoZW4gbG9vayBkb3duIHRoZSBaLXN0YWNrIGZyb20gcG9pbnQgMFxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIGxvYWROZXVyb24oZmlsZW5hbWUsIGNvbG9yLCBub2RlcywgdXBkYXRlQ2FtZXJhPXRydWUsIG9uVG9wYWJsZT1mYWxzZSwgZnJvbnRUb0JhY2s9ZmFsc2UpIHtcbiAgICBjb25zdCBuZXVyb24gPSB0aGlzLmNyZWF0ZU5ldXJvbihub2RlcywgY29sb3IpO1xuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gY2FsY3VsYXRlQm91bmRpbmdCb3gobm9kZXMpO1xuICAgIGNvbnN0IGJvdW5kaW5nU3BoZXJlID0gY2FsY3VsYXRlQm91bmRpbmdTcGhlcmUobm9kZXMsIGJvdW5kaW5nQm94KTtcbiAgICBjb25zdCB0YXJnZXQgPSBib3VuZGluZ1NwaGVyZS5jZW50ZXI7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVDYW1lcmFQb3NpdGlvbih0aGlzLmZvdiwgYm91bmRpbmdTcGhlcmUsIGZyb250VG9CYWNrLCB0aGlzLm1heFZvbHVtZVNpemUpO1xuXG4gICAgaWYgKHVwZGF0ZUNhbWVyYSkge1xuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy50cmFja0NvbnRyb2xzLnRhcmdldC5zZXQodGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQueik7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgfVxuXG4gICAgbmV1cm9uLm5hbWUgPSBmaWxlbmFtZTtcbiAgICAvLyBzdG9yZSBuZXVyb24gc3RhdHVzIGFuZCBib3VuZGluZyBzcGhlcmUgZm9yIGxhdGVyIHVzZVxuICAgIC8vIHdoZW4gcmVzZXR0aW5nIHRoZSB2aWV3LlxuICAgIG5ldXJvbi5pc05ldXJvbiA9IHRydWU7XG4gICAgbmV1cm9uLmJvdW5kaW5nU3BoZXJlID0gYm91bmRpbmdTcGhlcmU7XG4gICAgY29uc3Qgc2NlbmUgPSBvblRvcGFibGUgPyB0aGlzLnNjZW5lT25Ub3BhYmxlIDogdGhpcy5zY2VuZTtcbiAgICBzY2VuZS5hZGQobmV1cm9uKVxuICB9XG5cbiAgLy8gdXNlIG9uVG9wYWJsZT10cnVlIHRvIGNvcnJlc3BvbmQgdG8gbG9hZE5ldXJvbiguLi4sIG9uVG9wYWJsZT10cnVlKVxuICBuZXVyb25Mb2FkZWQoZmlsZW5hbWUsIG9uVG9wYWJsZT1mYWxzZSkge1xuICAgIGNvbnN0IHNjZW5lID0gb25Ub3BhYmxlID8gdGhpcy5zY2VuZU9uVG9wYWJsZSA6IHRoaXMuc2NlbmU7XG4gICAgcmV0dXJuIChzY2VuZS5nZXRPYmplY3RCeU5hbWUoZmlsZW5hbWUpICE9PSB1bmRlZmluZWQpO1xuICB9XG5cbiAgLy8gdXNlIG9uVG9wYWJsZT10cnVlIHRvIGNvcnJlc3BvbmQgdG8gbG9hZE5ldXJvbiguLi4sIG9uVG9wYWJsZT10cnVlKVxuICB1bmxvYWROZXVyb24oZmlsZW5hbWUsIG9uVG9wYWJsZT1mYWxzZSkge1xuICAgIGNvbnN0IHNjZW5lID0gb25Ub3BhYmxlID8gdGhpcy5zY2VuZU9uVG9wYWJsZSA6IHRoaXMuc2NlbmU7XG4gICAgY29uc3QgbmV1cm9uID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGZpbGVuYW1lKTtcbiAgICBzY2VuZS5yZW1vdmUobmV1cm9uKTtcbiAgfVxuXG4gIHNldE5ldXJvblZpc2libGUoaWQsIHZpc2libGUsIG9uVG9wYWJsZT1mYWxzZSkge1xuICAgIGNvbnN0IHNjZW5lID0gb25Ub3BhYmxlID8gdGhpcy5zY2VuZU9uVG9wYWJsZSA6IHRoaXMuc2NlbmU7XG4gICAgY29uc3QgbmV1cm9uID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGlkKTtcbiAgICBpZiAobmV1cm9uKSB7XG4gICAgICBuZXVyb24udmlzaWJsZSA9IHZpc2libGU7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETzogZ2V0IHRoaXMgdG8gd29yayB3aXRoIHRoZSBwYXJ0aWNsZSBtb2RlXG5cbiAgc2V0TmV1cm9uRGlzcGxheUxldmVsKGlkLCBvcGFjaXR5KSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gXCJwYXJ0aWNsZVwiKSB7XG4gICAgICBjb25zdCBuZXVyb24gPSB0aGlzLnNjZW5lLmdldE9iamVjdEJ5TmFtZShpZCk7XG5cbiAgICAgIGlmIChuZXVyb24pIHtcbiAgICAgICAgbmV1cm9uLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIGlmIChjaGlsZC51c2VyRGF0YS5tYXRlcmlhbFNoYWRlcikge1xuICAgICAgICAgICAgY2hpbGQudXNlckRhdGEubWF0ZXJpYWxTaGFkZXIudW5pZm9ybXMuYWxwaGEudmFsdWUgPSBvcGFjaXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZENvbXBhcnRtZW50KGlkLCBjb2xvciwgZ2VvbWV0cnlEYXRhLCB1cGRhdGVDYW1lcmE9dHJ1ZSkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKTtcbiAgICBsZXQgcGFyc2VkID0gbG9hZGVyLnBhcnNlKGdlb21ldHJ5RGF0YSk7XG4gICAgcGFyc2VkID0gYXBwbHlTZW1pVHJhbnNwYXJlbnRTaGFkZXIocGFyc2VkLCBjb2xvcik7XG4gICAgcGFyc2VkLm5hbWUgPSBpZDtcblxuICAgIHRoaXMuc2NlbmUuYWRkKHBhcnNlZCk7XG4gICAgaWYgKHVwZGF0ZUNhbWVyYSkge1xuICAgICAgdGhpcy5jZW50ZXJDYW1lcmFBcm91bmRDb21wYXJ0bWVudChwYXJzZWQpO1xuICAgIH1cbiAgICB0aGlzLnRyYWNrQ29udHJvbHMudXBkYXRlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGxvYWRDb21wYXJ0bWVudEZyb21VUkwoaWQsIGNvbG9yLCBVUkwsIHVwZGF0ZUNhbWVyYT10cnVlKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLk9CSkxvYWRlcigpO1xuXG4gICAgbG9hZGVyLmxvYWQoVVJMLCBvYmplY3QgPT4ge1xuICAgICAgY29uc3QgZXhpc3RzID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgY29uc3Qgc2hhZGVkT2JqZWN0ID0gYXBwbHlTZW1pVHJhbnNwYXJlbnRTaGFkZXIob2JqZWN0LCBjb2xvcik7XG4gICAgICAgIHNoYWRlZE9iamVjdC5uYW1lID0gaWQ7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKG9iamVjdCk7XG4gICAgICAgIGlmICh1cGRhdGVDYW1lcmEpIHtcbiAgICAgICAgICB0aGlzLmNlbnRlckNhbWVyYUFyb3VuZENvbXBhcnRtZW50KHNoYWRlZE9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcnRtZW50TG9hZGVkKGlkKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjZW5lLmdldE9iamVjdEJ5TmFtZShpZCkgIT09IHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBjb21wYXJ0bWVudCBvYmplY3QsIHBsYWNlIHRoZSBjYW1lcmEgZm9jdXMgb24gaXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wYXJ0bWVudCAtIFRocmVlIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbXBhcnRtZW50XG4gICAqIEByZXR1cm4gbnVsbFxuICAgKi9cbiAgY2VudGVyQ2FtZXJhQXJvdW5kQ29tcGFydG1lbnQoY29tcGFydG1lbnQpIHtcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKCkuc2V0RnJvbU9iamVjdChjb21wYXJ0bWVudCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KGJvdW5kaW5nQm94Lm1pbi54IC0gMTAsIGJvdW5kaW5nQm94Lm1pbi55IC0gMTAsIGJvdW5kaW5nQm94Lm1pbi56IC0gMTApO1xuICAgIHRoaXMudHJhY2tDb250cm9scy51cGRhdGUoKTtcbiAgICBjb25zdCBib3hDZW50ZXIgPSBib3VuZGluZ0JveC5nZXRDZW50ZXIoKTtcbiAgICB0aGlzLnRyYWNrQ29udHJvbHMudGFyZ2V0ID0gYm94Q2VudGVyO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB1bmxvYWRDb21wYXJ0bWVudChpZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkT2JqID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlKHNlbGVjdGVkT2JqKTtcbiAgfVxuXG4gIHNldENvbXBhcnRtZW50VmlzaWJsZShpZCwgdmlzaWJsZSkge1xuICAgIGNvbnN0IGNvbXBhcnRtZW50ID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoaWQpO1xuXG4gICAgaWYgKGNvbXBhcnRtZW50KSB7XG4gICAgICBjb21wYXJ0bWVudC52aXNpYmxlID0gdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICB0aGlzLkhFSUdIVCA9IGhlaWdodDtcbiAgICB0aGlzLldJRFRIID0gd2lkdGg7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IsIDEpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=