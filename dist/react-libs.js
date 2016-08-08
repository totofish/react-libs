(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-shallow-compare"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-shallow-compare", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-libs"] = factory(require("react"), require("react-addons-shallow-compare"), require("react-dom"));
	else
		root["react-libs"] = factory(root["react"], root["react-addons-shallow-compare"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactAddonsShallowCompare = __webpack_require__(7);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseComponent = function (_Component) {
	  _inherits(BaseComponent, _Component);

	  function BaseComponent() {
	    _classCallCheck(this, BaseComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).apply(this, arguments));
	  }

	  _createClass(BaseComponent, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }]);

	  return BaseComponent;
	}(_react.Component);

	exports.default = BaseComponent;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CenterBox = function (_Component) {
	  _inherits(CenterBox, _Component);

	  function CenterBox() {
	    _classCallCheck(this, CenterBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CenterBox).call(this));
	  }

	  _createClass(CenterBox, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "center-box" },
	        _react2.default.createElement(
	          "div",
	          { className: "center-box__container" },
	          _react2.default.createElement(
	            "div",
	            { className: "center-box__middle" },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return CenterBox;
	}(_react.Component);

	exports.default = CenterBox;
	;

	CenterBox.propTypes = {
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
	};

	// exports.default = CenterBox;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* import Style */

	__webpack_require__(6);

	module.exports = {
	  html: {
	    CenterBox: __webpack_require__(3)
	  },
	  BaseComponent: __webpack_require__(2),
	  TransitionMixin: __webpack_require__(5)
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AUTO_ALPHA = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactDom = __webpack_require__(8);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import TransitionMixin, { AUTO_ALPHA } from '../animation/TransitionMixin';
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * class Hello extends TransitionMixin(Component, {fadeTime: 1, type: AUTO_ALPHA }) {...}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var AUTO_ALPHA = exports.AUTO_ALPHA = 'autoAlpha';

	var TransitionMixin = function TransitionMixin(superclass) {
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref$fadeTime = _ref.fadeTime;
	    var fadeTime = _ref$fadeTime === undefined ? 0.5 : _ref$fadeTime;
	    var _ref$type = _ref.type;
	    var type = _ref$type === undefined ? AUTO_ALPHA : _ref$type;
	    return function (_superclass) {
	        _inherits(_class, _superclass);

	        function _class() {
	            _classCallCheck(this, _class);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	        }

	        _createClass(_class, [{
	            key: 'componentWillAppear',


	            // Start
	            value: function componentWillAppear(callback) {
	                console.log('componentWillAppear');

	                switch (type) {
	                    case AUTO_ALPHA:
	                    default:
	                        console.log(_reactDom2.default.findDOMNode(this));
	                        break;

	                }
	                setTimeout(callback, fadeTime * 1000);
	            }
	        }, {
	            key: 'componentDidAppear',
	            value: function componentDidAppear() {}

	            // Fade In

	        }, {
	            key: 'componentWillEnter',
	            value: function componentWillEnter(callback) {
	                console.log('componentWillEnter');
	                setTimeout(callback, fadeTime * 1000);
	            }
	        }, {
	            key: 'componentDidEnter',
	            value: function componentDidEnter() {}

	            // Fade Out

	        }, {
	            key: 'componentWillLeave',
	            value: function componentWillLeave(callback) {
	                console.log('componentWillLeave');
	                setTimeout(callback, fadeTime * 1000);
	            }
	        }, {
	            key: 'componentDidLeave',
	            value: function componentDidLeave() {}
	        }]);

	        return _class;
	    }(superclass);
	};

	// export default TransitionMixin;
	exports.default = TransitionMixin;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }
/******/ ])
});
;