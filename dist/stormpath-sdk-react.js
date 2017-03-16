(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactStormpath"] = factory(require("react"));
	else
		root["ReactStormpath"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserComponent = exports.UserField = exports.SocialLoginButton = exports.SocialLoginLink = exports.VerifyEmailView = exports.ChangePasswordForm = exports.ResetPasswordForm = exports.RegistrationForm = exports.UserProfileForm = exports.LoginForm = exports.LogoutLink = exports.LoginLink = exports.NotAuthenticated = exports.Authenticated = exports.AuthenticatedRoute = exports.LogoutRoute = exports.LoginRoute = exports.HomeRoute = exports.constants = exports.actions = exports.Router = exports.context = undefined;
	exports.init = init;
	exports.getAccessToken = getAccessToken;

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	var _context2 = __webpack_require__(20);

	var _context3 = _interopRequireDefault(_context2);

	var _Router2 = __webpack_require__(38);

	var _Router3 = _interopRequireDefault(_Router2);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	var _UserConstants = __webpack_require__(26);

	var _UserConstants2 = _interopRequireDefault(_UserConstants);

	var _HomeRoute2 = __webpack_require__(95);

	var _HomeRoute3 = _interopRequireDefault(_HomeRoute2);

	var _LoginRoute2 = __webpack_require__(96);

	var _LoginRoute3 = _interopRequireDefault(_LoginRoute2);

	var _LogoutRoute2 = __webpack_require__(97);

	var _LogoutRoute3 = _interopRequireDefault(_LogoutRoute2);

	var _AuthenticatedRoute2 = __webpack_require__(98);

	var _AuthenticatedRoute3 = _interopRequireDefault(_AuthenticatedRoute2);

	var _Authenticated2 = __webpack_require__(99);

	var _Authenticated3 = _interopRequireDefault(_Authenticated2);

	var _NotAuthenticated2 = __webpack_require__(100);

	var _NotAuthenticated3 = _interopRequireDefault(_NotAuthenticated2);

	var _LoginLink2 = __webpack_require__(101);

	var _LoginLink3 = _interopRequireDefault(_LoginLink2);

	var _LogoutLink2 = __webpack_require__(102);

	var _LogoutLink3 = _interopRequireDefault(_LogoutLink2);

	var _LoginForm2 = __webpack_require__(103);

	var _LoginForm3 = _interopRequireDefault(_LoginForm2);

	var _UserProfileForm2 = __webpack_require__(108);

	var _UserProfileForm3 = _interopRequireDefault(_UserProfileForm2);

	var _RegistrationForm2 = __webpack_require__(109);

	var _RegistrationForm3 = _interopRequireDefault(_RegistrationForm2);

	var _ResetPasswordForm2 = __webpack_require__(110);

	var _ResetPasswordForm3 = _interopRequireDefault(_ResetPasswordForm2);

	var _ChangePasswordForm2 = __webpack_require__(111);

	var _ChangePasswordForm3 = _interopRequireDefault(_ChangePasswordForm2);

	var _VerifyEmailView2 = __webpack_require__(112);

	var _VerifyEmailView3 = _interopRequireDefault(_VerifyEmailView2);

	var _SocialLoginLink2 = __webpack_require__(106);

	var _SocialLoginLink3 = _interopRequireDefault(_SocialLoginLink2);

	var _SocialLoginButton2 = __webpack_require__(105);

	var _SocialLoginButton3 = _interopRequireDefault(_SocialLoginButton2);

	var _UserField2 = __webpack_require__(113);

	var _UserField3 = _interopRequireDefault(_UserField2);

	var _UserComponent2 = __webpack_require__(114);

	var _UserComponent3 = _interopRequireDefault(_UserComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.context = _context3.default;
	exports.Router = _Router3.default;
	exports.actions = _UserActions2.default;
	exports.constants = _UserConstants2.default;
	exports.HomeRoute = _HomeRoute3.default;
	exports.LoginRoute = _LoginRoute3.default;
	exports.LogoutRoute = _LogoutRoute3.default;
	exports.AuthenticatedRoute = _AuthenticatedRoute3.default;
	exports.Authenticated = _Authenticated3.default;
	exports.NotAuthenticated = _NotAuthenticated3.default;
	exports.LoginLink = _LoginLink3.default;
	exports.LogoutLink = _LogoutLink3.default;
	exports.LoginForm = _LoginForm3.default;
	exports.UserProfileForm = _UserProfileForm3.default;
	exports.RegistrationForm = _RegistrationForm3.default;
	exports.ResetPasswordForm = _ResetPasswordForm3.default;
	exports.ChangePasswordForm = _ChangePasswordForm3.default;
	exports.VerifyEmailView = _VerifyEmailView3.default;
	exports.SocialLoginLink = _SocialLoginLink3.default;
	exports.SocialLoginButton = _SocialLoginButton3.default;
	exports.UserField = _UserField3.default;
	exports.UserComponent = _UserComponent3.default;

	// When not using ES6, enable people to use ReactStormpath.init() and
	// ReactStormpath.getAccessToken() instead of ReactStormpath.default.init()
	// and ReactStormpath.default.getAccessToken()

	function init() {
	  _app2.default.init.apply(_app2.default, arguments);
	};

	function getAccessToken() {
	  return _app2.default.getAccessToken();
	}

	exports.default = _app2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(2);

	var _storage = __webpack_require__(3);

	var _services = __webpack_require__(5);

	var _constants = __webpack_require__(25);

	var _stores = __webpack_require__(27);

	var _dispatchers = __webpack_require__(31);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_EventEmitter) {
	  _inherits(App, _EventEmitter);

	  function App() {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	    _this.initialized = false;
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'isInitialized',
	    value: function isInitialized() {
	      return this.initialized;
	    }
	  }, {
	    key: 'init',
	    value: function init(options) {
	      options = options || {};

	      if (this.isInitialized()) {
	        throw new Error('React Stormpath already initialized.');
	      }

	      this.initialized = true;

	      var tokenStore = null;
	      var userService = null;
	      var sessionStore = new _stores.SessionStore();

	      if (!options.endpoints) {
	        options.endpoints = {};
	      }

	      if (!options.storage) {
	        options.storage = new _storage.LocalStorage('session');
	      }

	      var baseUri = options.endpoints.baseUri;

	      if (baseUri && !_utils2.default.isSameHost(baseUri, window.location.href)) {
	        tokenStore = new _stores.TokenStore(options.storage, 'stormpath:token');
	        userService = new _services.ClientApiUserService(options.endpoints);

	        userService.setToken('access_token', tokenStore.get('access_token'));
	        userService.setToken('refresh_token', tokenStore.get('refresh_token'));
	      } else {
	        userService = new _services.UserService(options.endpoints);
	      }

	      var userStore = new _stores.UserStore(userService, sessionStore);

	      // If there is a jwtResponse in the URL, it's from a social login callback
	      // from the Client API, so if we have a configured baseUrl, we need to authenticate
	      // with this JWT, using the Client API.

	      if (baseUri && window.location.href.match(/jwtResponse/)) {
	        userService.authenticate({
	          grant_type: 'stormpath_token',
	          token: _utils2.default.parseQueryString(window.location.href.split('?')[1]).jwtResponse
	        }, function (err) {
	          if (err) {
	            return console.error(err);
	          }
	          window.location.replace(window.location.href.replace(/jwtResponse=[^&]+/, ''));
	        });
	      }

	      _context2.default.setTokenStore(tokenStore);
	      _context2.default.setSessionStore(sessionStore);
	      _context2.default.setUserStore(userStore);

	      // If there's no specified dispatcher, then default to flux.
	      var dispatcher = options.dispatcher || { type: 'flux' };

	      var appReducer = function appReducer(payload) {
	        switch (payload.type) {
	          case _constants.UserConstants.USER_LOGIN:
	            userStore.login(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_LOGOUT:
	            userStore.logout(payload.callback);
	            break;
	          case _constants.UserConstants.USER_REGISTER:
	            userStore.register(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_FORGOT_PASSWORD:
	            userStore.forgotPassword(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_CHANGE_PASSWORD:
	            userStore.changePassword(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_UPDATE_PROFILE:
	            userStore.updateProfile(payload.options.data, payload.callback);
	            break;
	          case _constants.UserConstants.USER_VERIFY_EMAIL:
	            userStore.verifyEmail(payload.options.spToken, payload.callback);
	            break;
	          case _constants.TokenConstants.TOKEN_SET:
	            userService.setToken(payload.options.type, payload.options.token);

	            if (payload.options.token !== null) {
	              tokenStore.set(payload.options.type, payload.options.token).then(function () {
	                return payload.callback && payload.callback();
	              });
	            } else {
	              tokenStore.reset(payload.options.type).then(function () {
	                return payload.callback && payload.callback();
	              });
	            }
	            break;
	          case _constants.TokenConstants.TOKEN_REFRESH:
	            userService.refreshToken(payload.options.token, payload.callback);
	            break;
	        }
	        return true;
	      };

	      switch (dispatcher.type) {
	        case 'flux':
	          dispatcher = new _dispatchers.FluxDispatcher(appReducer);
	          break;
	        case 'redux':
	          dispatcher = new _dispatchers.ReduxDispatcher(appReducer, dispatcher.store);
	          break;
	        default:
	          throw new Error('Stormpath SDK: Invalid dispatcher type ' + dispatcher.type);
	      }

	      _context2.default.setDispatcher(dispatcher);
	    }
	  }, {
	    key: 'getAccessToken',
	    value: function getAccessToken() {
	      return _context2.default.userStore.getAccessToken();
	    }
	  }]);

	  return App;
	}(_events.EventEmitter);

	exports.default = new App();

/***/ },
/* 2 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LocalStorage = undefined;

	var _LocalStorage2 = __webpack_require__(4);

	var _LocalStorage3 = _interopRequireDefault(_LocalStorage2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.LocalStorage = _LocalStorage3.default;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LocalStorage = function () {
	  function LocalStorage(type) {
	    _classCallCheck(this, LocalStorage);

	    this.storage = type === 'local' ? localStorage : sessionStorage;
	  }

	  _createClass(LocalStorage, [{
	    key: 'get',
	    value: function get(key) {
	      try {
	        return Promise.resolve(this.storage.getItem(key));
	      } catch (err) {
	        return Promise.reject(err);
	      }
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      try {
	        return Promise.resolve(this.storage.setItem(key, value));
	      } catch (err) {
	        return Promise.reject(err);
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove(key) {
	      try {
	        return Promise.resolve(this.storage.removeItem(key));
	      } catch (err) {
	        return Promise.reject(err);
	      }
	    }
	  }]);

	  return LocalStorage;
	}();

	exports.default = LocalStorage;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ClientApiUserService = exports.UserService = exports.RequestPool = exports.BaseService = undefined;

	var _BaseService2 = __webpack_require__(6);

	var _BaseService3 = _interopRequireDefault(_BaseService2);

	var _RequestPool2 = __webpack_require__(16);

	var _RequestPool3 = _interopRequireDefault(_RequestPool2);

	var _UserService2 = __webpack_require__(17);

	var _UserService3 = _interopRequireDefault(_UserService2);

	var _ClientApiUserService2 = __webpack_require__(18);

	var _ClientApiUserService3 = _interopRequireDefault(_ClientApiUserService2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BaseService = _BaseService3.default;
	exports.RequestPool = _RequestPool3.default;
	exports.UserService = _UserService3.default;
	exports.ClientApiUserService = _ClientApiUserService3.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var validHttpStatuses = [200, 201, 202, 204];

	var jsonContentEncoder = {
	  contentType: 'application/json; charset=utf-8',
	  encode: function encode(body) {
	    return JSON.stringify(body);
	  }
	};

	var formContentEncoder = {
	  contentType: 'application/x-www-form-urlencoded; charset=utf-8',
	  encode: function encode(body) {
	    return _utils2.default.serializeFormObject(body);
	  }
	};

	function getContentEncoder(contentType) {
	  var encoder = jsonContentEncoder;

	  if (contentType && contentType.indexOf('application/x-www-form-urlencoded') === 0) {
	    encoder = formContentEncoder;
	  }

	  return encoder;
	}

	function makeHttpRequest(method, uri, body, headers, callback) {
	  var request = new XMLHttpRequest();

	  request.open(method.toUpperCase(), uri, true);

	  if (headers) {
	    for (var name in headers) {
	      // Skip the Content-Type header.
	      // This will be set later if we provided a body.
	      if (name === 'Content-Type') {
	        continue;
	      }

	      var value = headers[name];

	      request.setRequestHeader(name, value);
	    }
	  }

	  // If the URI is different than the URI of the domain we're on,
	  // then set withCredentials to true so that we enable CORS.
	  if (!_utils2.default.isRelativeUri(uri) && !_utils2.default.isSameHost(uri, window.location.href)) {
	    request.withCredentials = true;
	  }

	  request.onreadystatechange = function () {
	    // 4 = Request finished and response is ready.
	    // Ignore everything else.
	    if (request.readyState !== 4) {
	      return;
	    }

	    var result = {
	      status: request.status,
	      responseJSON: null
	    };

	    var caughtError = null;

	    try {
	      if (request.responseText) {
	        result.responseJSON = JSON.parse(request.responseText);
	      }
	    } catch (e) {
	      caughtError = e;
	    }

	    if (caughtError) {
	      callback(caughtError);
	    } else {
	      callback(null, result);
	    }

	    callback(null, result);
	  };

	  if (body && (typeof body === 'undefined' ? 'undefined' : _typeof(body)) === 'object') {
	    var contentEncoder = getContentEncoder(headers['Content-Type']);
	    request.setRequestHeader('Content-Type', contentEncoder.contentType);
	    request.send(contentEncoder.encode(body));
	  } else {
	    request.send();
	  }
	}

	var BaseService = function () {
	  function BaseService(endpoints, forceAgentHeader) {
	    _classCallCheck(this, BaseService);

	    var defaultEndpoints = {
	      baseUri: null
	    };

	    this.endpoints = _utils2.default.mergeObjects(defaultEndpoints, endpoints);
	    this.forceAgentHeader = forceAgentHeader || false;
	  }

	  _createClass(BaseService, [{
	    key: '_makeRequest',
	    value: function _makeRequest(method, path, body, headers, callback) {
	      var uri = this._buildEndpoint(path);

	      headers = headers || {};

	      if (!headers.Accept) {
	        headers.Accept = 'application/json';
	      }

	      // Only set the X-Stormpath-Agent header if we're on the same domain as the requested URI.
	      // This because we want to avoid CORS requests that require you to have to whitelist the X-Stormpath-Agent header.
	      if (this.forceAgentHeader || _utils2.default.isRelativeUri(uri) || _utils2.default.isSameHost(uri, window.location.href)) {
	        headers['X-Stormpath-Agent'] = 'stormpath-sdk-react/' + ("2.0.1") + ' react/' + _react2.default.version;
	      }

	      makeHttpRequest(method, uri, body, headers, function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        var data = result.responseJSON || {};

	        if (validHttpStatuses.indexOf(result.status) !== -1) {
	          callback(null, data);
	        } else {
	          var error = new Error(data.message || data.error || 'A request to the API failed.');
	          error.type = data.error;
	          error.status = result.status;
	          callback(error);
	        }
	      });
	    }
	  }, {
	    key: '_buildEndpoint',
	    value: function _buildEndpoint(endpoint) {
	      return (this.endpoints.baseUri || '') + endpoint;
	    }
	  }]);

	  return BaseService;
	}();

	exports.default = BaseService;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _url = __webpack_require__(9);

	var _url2 = _interopRequireDefault(_url);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var jwtExpression = /^[a-zA-Z0-9+/_=-]+\.[a-zA-Z0-9+/_=-]+\.[a-zA-Z0-9+/_=-]+$/;

	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);

	    this.nopElement = _react2.default.createElement('span', null);
	  }

	  _createClass(Utils, [{
	    key: 'uuid',
	    value: function uuid() {
	      var s4 = function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	      };

	      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	    }
	  }, {
	    key: 'functionName',
	    value: function functionName(f) {
	      if (typeof f !== 'function') {
	        return '';
	      }

	      if (f.name) {
	        return f.name;
	      }

	      var parts = f.toString().match(/^function\s*([^\s(]+)/);

	      if (parts) {
	        return parts[1];
	      }

	      return '';
	    }
	  }, {
	    key: 'containsWord',
	    value: function containsWord(testWord, words) {
	      if (typeof testWord !== 'string') {
	        return false;
	      }

	      testWord = testWord.toLowerCase();

	      for (var i = 0; i < words.length; i++) {
	        var word = words[i].toLowerCase();
	        if (testWord.indexOf(word) > -1) {
	          return true;
	        }
	      }

	      return false;
	    }
	  }, {
	    key: 'isInputLikeComponent',
	    value: function isInputLikeComponent(element) {
	      var inputNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['input', 'field', 'text'];

	      if (typeof element.type === 'function') {
	        var hasInputLikeName = this.containsWord(this.functionName(element.type), inputNames);
	        var spInputLike = this.takeProp(element.props, 'spInputLike', 'data-spInputLike');

	        return spInputLike || hasInputLikeName;
	      }
	    }
	  }, {
	    key: 'takeProp',
	    value: function takeProp(source) {
	      for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        fields[_key - 1] = arguments[_key];
	      }

	      for (var i = 0; i < fields.length; i++) {
	        var fieldName = fields[i];
	        if (fieldName in source) {
	          return source[fieldName];
	        }
	      }

	      return undefined;
	    }
	  }, {
	    key: 'excludeProps',
	    value: function excludeProps(exclude, source) {
	      var result = {};

	      if (source) {
	        for (var key in source) {
	          if (exclude.indexOf(key) === -1) {
	            result[key] = source[key];
	          }
	        }
	      }

	      return result;
	    }
	  }, {
	    key: 'translateProviderIdToName',
	    value: function translateProviderIdToName(providerId) {
	      var providerNames = {
	        github: 'GitHub',
	        linkedin: 'LinkedIn'
	      };

	      var newName = providerNames[providerId];

	      if (!newName) {
	        newName = providerId[0].toUpperCase() + providerId.slice(1);
	      }

	      return newName;
	    }
	  }, {
	    key: 'encodeQueryString',
	    value: function encodeQueryString(query) {
	      var result = '';

	      for (var key in query) {
	        if (result !== '') {
	          result += '&';
	        }
	        result += key + '=' + encodeURIComponent(query[key]);
	      }

	      return result;
	    }
	  }, {
	    key: 'deepForEach',
	    value: function deepForEach(node, handler) {
	      handler(node);
	      if (node.props.children) {
	        this.forEachChild(node.props.children, handler, node);
	      }
	    }
	  }, {
	    key: 'forEachChild',
	    value: function forEachChild(children, handler, parent) {
	      var _this = this;

	      _react2.default.Children.forEach(children, function (child) {
	        handler(child, parent);

	        if (child.props && child.props.children) {
	          _this.forEachChild(child.props.children, handler, child);
	        }
	      });
	    }
	  }, {
	    key: 'buildElementTree',
	    value: function buildElementTree(element, optionsFactory, elementFactory, parent) {
	      var _this2 = this;

	      var newChildren = undefined;

	      var newElement = elementFactory && elementFactory(element, parent) || element;
	      var newOptions = optionsFactory && optionsFactory(element, parent) || {};

	      if (newElement !== this.nopElement && newElement.props && newElement.props.children) {
	        newChildren = _react2.default.Children.map(newElement.props.children, function (childElement) {
	          if (!_react2.default.isValidElement(childElement)) {
	            return elementFactory(childElement, parent);
	          }
	          return _this2.buildElementTree(childElement, optionsFactory, elementFactory, newElement);
	        });
	      }

	      return _react2.default.cloneElement(newElement, newOptions, newChildren);
	    }
	  }, {
	    key: 'mapFormField',
	    value: function mapFormField(element, mappingFn, defaultValue) {
	      if (this.isInputLikeComponent(element)) {
	        if (element.props && element.props.name) {
	          mappingFn(element.props.name, defaultValue);
	        }
	      } else if (['input', 'textarea'].indexOf(element.type) > -1) {
	        if (element.props.type !== 'submit') {
	          mappingFn(element.props.name, defaultValue);
	        }
	      }
	    }
	  }, {
	    key: 'getFormFieldMap',
	    value: function getFormFieldMap(root, handler) {
	      var fields = {};

	      var tryMapField = function tryMapField(field, name, defaultValue) {
	        if (field.props.ignore) {
	          return;
	        }

	        if (field.props.fieldName) {
	          name = elements.props.fieldName;
	        }

	        if (!(name in fields)) {
	          fields[name] = {
	            element: field,
	            defaultValue: defaultValue
	          };
	        }
	      };

	      this.forEachChild(root, function (child) {
	        if (!child.props) {
	          return;
	        }

	        handler(child, tryMapField.bind(null, child));
	      });

	      var inverseMap = {};
	      var defaultValues = {};

	      for (var key in fields) {
	        var field = fields[key];
	        var element = field.element;
	        var elementType = typeof element.type === 'function' ? this.functionName(element.type) : element.type;

	        if (!(elementType in inverseMap)) {
	          inverseMap[elementType] = {};
	        }

	        defaultValues[key] = field.defaultValue !== undefined ? field.defaultValue : element.props.value || '';

	        inverseMap[elementType][element.props.name] = {
	          fieldName: key,
	          field: element
	        };
	      }

	      return {
	        defaultValues: defaultValues,
	        inverse: inverseMap
	      };
	    }
	  }, {
	    key: 'getFieldValue',
	    value: function getFieldValue(source, name) {
	      var cursor = source;
	      var segments = name.split('.');

	      for (var i = 0; i < segments.length; i++) {
	        var key = segments[i];

	        if (!(key in cursor)) {
	          return undefined;
	        }

	        cursor = cursor[key];
	      }

	      return cursor;
	    }
	  }, {
	    key: 'setFieldValue',
	    value: function setFieldValue(source, name, value, force) {
	      var ref = source;
	      var segments = name.split('.');

	      for (var i = 0; i < segments.length; i++) {
	        var key = segments[i];

	        if (i === segments.length - 1) {
	          if (!force && key in ref) {
	            return;
	          }

	          ref[key] = value;

	          return;
	        }

	        if (!(key in ref)) {
	          ref[key] = {};
	        }

	        ref = ref[key];
	      }
	    }
	  }, {
	    key: 'makeForm',
	    value: function makeForm(source, fieldMapFn, spIfFn, spBindFn) {
	      var _this3 = this;

	      var root = _react2.default.cloneElement(_react2.default.createElement('div', null), {}, source.props.children);
	      var fieldMap = this.getFormFieldMap(root, fieldMapFn);

	      source.state.fields = source.state.fields || {};

	      for (var key in fieldMap.defaultValues) {
	        this.setFieldValue(source.state.fields, key, fieldMap.defaultValues[key]);
	      }

	      var elementFactory = function elementFactory(element, parent) {
	        if (element.props) {
	          var spIf = _this3.takeProp(element.props, 'spIf', 'data-spIf');

	          if (spIf) {
	            var test = null;
	            var inverted = false;

	            if (spIf[0] === '!') {
	              inverted = true;
	              spIf = spIf.substr(1);
	            }

	            test = spIfFn(spIf, element);

	            if (test !== null) {
	              if (inverted) {
	                test = !test;
	              }

	              if (!test) {
	                return _this3.nopElement;
	              }
	            }
	          }

	          var spBind = _this3.takeProp(element.props, 'spBind', 'data-spBind');

	          if (spBind) {
	            var newElement = spBindFn(spBind, element);
	            if (newElement !== false || newElement) {
	              element = newElement;
	            }
	          }
	        }
	        return element;
	      };

	      var optionsFactory = function optionsFactory(element, parent) {
	        var options = {};

	        if (element.props) {
	          var elementType = typeof element.type === 'function' ? element.type.name : element.type;
	          var elementAttributeName = element.props.name;

	          if (elementType in fieldMap.inverse && elementAttributeName in fieldMap.inverse[elementType]) {
	            var mappedField = fieldMap.inverse[elementType][elementAttributeName];

	            if (elementAttributeName in fieldMap.defaultValues) {
	              options.defaultValue = fieldMap.defaultValues[elementAttributeName];
	            }

	            var originalOnChange = element.props.onChange;
	            options.onChange = function (e) {
	              for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	              }

	              options.disabled = source.state.isFormProcessing;
	              _this3.setFieldValue(source.state.fields, mappedField.fieldName, e.target.value, true);

	              // Honor the original onChange event.
	              if (originalOnChange) {
	                originalOnChange.apply(undefined, [e].concat(args));
	              }
	            };
	          }

	          var elementAttributeType = element.props.type;

	          if ((elementType === 'input' || elementType === 'button') && elementAttributeType === 'submit') {
	            options.disabled = source.state.isFormProcessing;
	          }
	        }

	        return options;
	      };

	      return this.buildElementTree(root, optionsFactory, elementFactory);
	    }
	  }, {
	    key: 'clone',
	    value: function clone(value) {
	      return JSON.parse(JSON.stringify(value));
	    }
	  }, {
	    key: 'mergeObjects',
	    value: function mergeObjects(obj1, obj2) {
	      var obj3 = {};

	      if (obj1) {
	        for (var attrname in obj1) {
	          obj3[attrname] = obj1[attrname];
	        }
	      }

	      if (obj2) {
	        for (var attrname in obj2) {
	          obj3[attrname] = obj2[attrname];
	        }
	      }

	      return obj3;
	    }
	  }, {
	    key: 'base64Decode',
	    value: function base64Decode(value) {
	      return new Buffer(value, 'base64').toString('utf8');
	    }
	  }, {
	    key: 'parseJwt',
	    value: function parseJwt(value) {
	      if (!value) {
	        return false;
	      }

	      value = value.trim();

	      if (value.match(jwtExpression) === null) {
	        return false;
	      }

	      var _value$split = value.split('.'),
	          _value$split2 = _slicedToArray(_value$split, 3),
	          header = _value$split2[0],
	          body = _value$split2[1],
	          signature = _value$split2[2];

	      try {
	        return {
	          header: JSON.parse(this.base64Decode(header)),
	          body: JSON.parse(this.base64Decode(body)),
	          signature: signature,
	          raw: value
	        };
	      } catch (err) {
	        return false;
	      }
	    }
	  }, {
	    key: 'parseQueryString',
	    value: function parseQueryString(qstr) {
	      var query = {};
	      var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split(/&|#/);
	      for (var i = 0; i < a.length; i++) {
	        var b = a[i].split('=');
	        if (b.length === 2) {
	          query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
	        }
	      }
	      return query;
	    }
	  }, {
	    key: 'isRelativeUri',
	    value: function isRelativeUri(uri) {
	      return uri && uri[0] === '/';
	    }
	  }, {
	    key: 'isSameHost',
	    value: function isSameHost(a, b) {
	      var urlA = _url2.default.parse(a);

	      if (!urlA) {
	        return false;
	      }

	      var urlB = _url2.default.parse(b);

	      if (!urlB) {
	        return false;
	      }

	      return urlA.host === urlB.host;
	    }
	  }, {
	    key: 'getEpochTime',
	    value: function getEpochTime() {
	      return Math.round(new Date().getTime() / 1000);
	    }
	  }, {
	    key: 'logWarning',
	    value: function logWarning(group, message) {
	      if (message === undefined) {
	        message = group;
	        group = undefined;
	      }

	      var result = '[Stormpath SDK]';

	      if (group) {
	        result += ' ' + group;
	      }

	      result += ': ' + message;

	      console.warn(result);
	    }
	  }, {
	    key: 'getCurrentHost',
	    value: function getCurrentHost() {
	      return window.location.protocol + '//' + window.location.host;
	    }
	  }, {
	    key: 'getEnabledGroups',
	    value: function getEnabledGroups(groups) {
	      var enabledGroups = {};

	      if (groups && groups.items) {
	        groups.items.forEach(function (item) {
	          if (item.status === 'ENABLED') {
	            var name = item.name;

	            if (name.indexOf(' ') !== -1) {
	              name = name.replace(/ /g, '_');
	            }

	            enabledGroups[name] = true;
	          }
	        });
	      }

	      return enabledGroups;
	    }
	  }, {
	    key: 'makePredicateFunction',
	    value: function makePredicateFunction(statement) {
	      return new Function('\n      var scope = arguments[0];\n\n      var maskingScope = {};\n\n      for (var key in window) {\n        maskingScope[key] = undefined;\n      }\n\n      for (var key in scope) {\n        maskingScope[key] = scope[key];\n      }\n\n      with (maskingScope) {\n        return (' + statement + ');\n      }\n    ');
	    }
	  }, {
	    key: 'groupsMatchExpression',
	    value: function groupsMatchExpression(groups, expression) {
	      if (!groups) {
	        return false;
	      }

	      var scope = JSON.parse(JSON.stringify(groups));
	      var expressionFn = this.makePredicateFunction(expression);

	      expression.match(/(\w+)/gmi).forEach(function (wordMatch) {
	        if (!(wordMatch in scope)) {
	          scope[wordMatch] = false;
	        }
	      });

	      return expressionFn(scope);
	    }
	  }, {
	    key: 'isArray',
	    value: function isArray(object) {
	      var nativeIsArray = Array.isArray;
	      var toString = Object.prototype.toString;
	      return nativeIsArray(object) || toString.call(object) === '[object Array]';
	    }
	  }, {
	    key: 'enforceRootElement',
	    value: function enforceRootElement(object, props) {
	      var newObject = undefined;

	      if (typeof object === 'string' || this.isArray(object)) {
	        if (!props) {
	          props = {};
	        }

	        if (!props.style) {
	          props.style = {};
	        }

	        props.style.display = 'inline-block';

	        newObject = _react2.default.createElement(
	          'div',
	          props,
	          object
	        );
	      } else {
	        var newProps = props;
	        var newChildren = [];

	        if (object.props) {
	          for (var key in object.props) {
	            var value = object.props[key];;
	            if (key === 'children') {
	              newChildren = value;
	            } else {
	              newProps[key] = value;
	            }
	          }
	        }

	        newObject = _react2.default.cloneElement(object, newProps, newChildren);
	      }

	      return newObject;
	    }
	  }, {
	    key: 'serializeFormObject',
	    value: function serializeFormObject(value) {
	      var items = [];

	      for (var key in value) {
	        if (value.hasOwnProperty(key)) {
	          items.push(encodeURIComponent(key) + '=' + encodeURIComponent(value[key]));
	        }
	      }

	      return items.join('&');
	    }
	  }, {
	    key: 'includesMatching',
	    value: function includesMatching(array, string) {
	      return array.findIndex(function (pattern) {
	        return new RegExp(pattern).test(string);
	      }) !== -1;
	    }
	  }]);

	  return Utils;
	}();

	exports.default = new Utils();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(10);
	var util = __webpack_require__(12);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(13);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module), (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(14);
	exports.encode = exports.stringify = __webpack_require__(15);


/***/ },
/* 14 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RequestPool = function () {
	  function RequestPool() {
	    _classCallCheck(this, RequestPool);

	    this.waiting = [];
	  }

	  _createClass(RequestPool, [{
	    key: "request",
	    value: function request(resolver, callback) {
	      var waiting = this.waiting;

	      waiting.push(callback);

	      if (waiting.length === 1) {
	        resolver(function () {
	          while (waiting.length) {
	            waiting.shift().apply(null, arguments);
	          }
	        });
	      }

	      return false;
	    }
	  }]);

	  return RequestPool;
	}();

	exports.default = RequestPool;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _BaseService2 = __webpack_require__(6);

	var _BaseService3 = _interopRequireDefault(_BaseService2);

	var _RequestPool = __webpack_require__(16);

	var _RequestPool2 = _interopRequireDefault(_RequestPool);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserService = function (_BaseService) {
	  _inherits(UserService, _BaseService);

	  function UserService(endpoints, forceAgentHeader) {
	    _classCallCheck(this, UserService);

	    var defaultEndpoints = {
	      me: '/me',
	      login: '/login',
	      register: '/register',
	      verifyEmail: '/verify',
	      forgotPassword: '/forgot',
	      changePassword: '/change',
	      logout: '/logout'
	    };

	    var _this = _possibleConstructorReturn(this, (UserService.__proto__ || Object.getPrototypeOf(UserService)).call(this, _utils2.default.mergeObjects(defaultEndpoints, endpoints), forceAgentHeader));

	    _this.meRequestPool = new _RequestPool2.default();
	    return _this;
	  }

	  _createClass(UserService, [{
	    key: '_unwrapAccountResult',
	    value: function _unwrapAccountResult(callback) {
	      return function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        callback(null, result.account || result || {});
	      };
	    }
	  }, {
	    key: 'me',
	    value: function me(callback) {
	      var _this2 = this;

	      this.meRequestPool.request(function (resultCallback) {
	        _this2._makeRequest('get', _this2.endpoints.me, null, null, _this2._unwrapAccountResult(resultCallback));
	      }, callback);
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile(data, callback) {
	      this._makeRequest('post', this.endpoints.me, data, null, callback);
	    }
	  }, {
	    key: 'getLoginViewData',
	    value: function getLoginViewData(callback) {
	      this._makeRequest('get', this.endpoints.login, null, null, callback);
	    }
	  }, {
	    key: 'login',
	    value: function login(options, callback) {
	      this._makeRequest('post', this.endpoints.login, options, null, this._unwrapAccountResult(callback));
	    }
	  }, {
	    key: 'register',
	    value: function register(options, callback) {
	      this._makeRequest('post', this.endpoints.register, options, null, this._unwrapAccountResult(callback));
	    }
	  }, {
	    key: 'getRegisterViewData',
	    value: function getRegisterViewData(callback) {
	      this._makeRequest('get', this.endpoints.register, null, null, callback);
	    }
	  }, {
	    key: 'verifyEmail',
	    value: function verifyEmail(spToken, callback) {
	      this._makeRequest('get', this.endpoints.verifyEmail + '?sptoken=' + encodeURIComponent(spToken), null, null, callback);
	    }
	  }, {
	    key: 'forgotPassword',
	    value: function forgotPassword(options, callback) {
	      this._makeRequest('post', this.endpoints.forgotPassword, options, null, callback);
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(options, callback) {
	      this._makeRequest('post', this.endpoints.changePassword, options, null, callback);
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      this._makeRequest('post', this.endpoints.logout, null, null, callback);
	    }
	  }]);

	  return UserService;
	}(_BaseService3.default);

	exports.default = UserService;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _UserService2 = __webpack_require__(17);

	var _UserService3 = _interopRequireDefault(_UserService2);

	var _TokenActions = __webpack_require__(19);

	var _TokenActions2 = _interopRequireDefault(_TokenActions);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ClientApiUserService = function (_UserService) {
	  _inherits(ClientApiUserService, _UserService);

	  function ClientApiUserService(endpoints) {
	    _classCallCheck(this, ClientApiUserService);

	    var defaultEndpoints = {
	      oauthToken: '/oauth/token',
	      oauthRevoke: '/oauth/revoke'
	    };

	    var _this = _possibleConstructorReturn(this, (ClientApiUserService.__proto__ || Object.getPrototypeOf(ClientApiUserService)).call(this, _utils2.default.mergeObjects(defaultEndpoints, endpoints || {}), true));

	    _this.tokens = {
	      access_token: null,
	      refresh_token: null
	    };
	    return _this;
	  }

	  _createClass(ClientApiUserService, [{
	    key: 'setToken',
	    value: function setToken(type, token) {
	      this.tokens[type] = Promise.resolve(token);
	    }
	  }, {
	    key: 'getToken',
	    value: function getToken(type) {
	      return this.tokens[type] || Promise.resolve();
	    }
	  }, {
	    key: '_setFormContentTypeHeader',
	    value: function _setFormContentTypeHeader(headers) {
	      headers['Content-Type'] = 'application/x-www-form-urlencoded';
	    }
	  }, {
	    key: '_setAuthorizationHeader',
	    value: function _setAuthorizationHeader(headers) {
	      return this.getToken('access_token').then(function (accessToken) {
	        if (accessToken) {
	          headers['Authorization'] = 'Bearer ' + accessToken;
	        }
	      });
	    }
	  }, {
	    key: '_makeFormRequest',
	    value: function _makeFormRequest(method, path, body, headers, callback) {
	      headers = headers || {};

	      this._setFormContentTypeHeader(headers);

	      return this._makeRequest(method, path, body, headers, callback);
	    }
	  }, {
	    key: '_makeRequest',
	    value: function _makeRequest(method, path, body, headers, callback) {
	      var _this2 = this;

	      headers = headers || {};

	      var waitFor = Promise.resolve();

	      if (path === '/me') {
	        waitFor = this._setAuthorizationHeader(headers);
	      }

	      waitFor.then(function () {
	        _get(ClientApiUserService.prototype.__proto__ || Object.getPrototypeOf(ClientApiUserService.prototype), '_makeRequest', _this2).call(_this2, method, path, body, headers, callback);
	      });
	    }
	  }, {
	    key: 'me',
	    value: function me(callback) {
	      var _this3 = this;

	      this.getToken('access_token').then(function (accessToken) {
	        if (!accessToken) {
	          return callback(new Error('The \'me\' endpoint requires an access token to be present.'));
	        }

	        _get(ClientApiUserService.prototype.__proto__ || Object.getPrototypeOf(ClientApiUserService.prototype), 'me', _this3).call(_this3, function (err, result) {
	          if (err) {
	            if (err.type === 'invalid_client' && err.status === 400) {
	              _TokenActions2.default.set('access_token', null);
	              _TokenActions2.default.set('refresh_token', null);
	            }
	            return callback(err);
	          }

	          callback(null, result);
	        });
	      });
	    }
	  }, {
	    key: '_wrapOAuthResponse',
	    value: function _wrapOAuthResponse(callback) {
	      return function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        if (result.error) {
	          var newError = new Error(result.message);
	          newError.type = result.error;
	          return callback(newError);
	        }

	        callback(null, result);
	      };
	    }
	  }, {
	    key: 'authenticate',
	    value: function authenticate(oauthGrantBody, callback) {
	      this._makeFormRequest('post', this.endpoints.oauthToken, oauthGrantBody, null, function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        _TokenActions2.default.set('access_token', result.access_token, function () {
	          _TokenActions2.default.set('refresh_token', result.refresh_token, function () {
	            callback(null, result);
	          });
	        });
	      });
	    }
	  }, {
	    key: 'login',
	    value: function login(options, callback) {
	      var oauthGrantBody = {
	        grant_type: 'password',
	        username: options.login,
	        password: options.password
	      };

	      this.authenticate(oauthGrantBody, callback);
	    }
	  }, {
	    key: 'refreshToken',
	    value: function refreshToken(token, callback) {
	      var newOptions = {
	        grant_type: 'refresh_token',
	        refresh_token: token
	      };

	      this._makeFormRequest('post', this.endpoints.oauthToken, newOptions, null, function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        callback(null, result);
	      });
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      var _this4 = this;

	      this.getToken('refresh_token').then(function (token) {
	        var options = {
	          token: token,
	          token_type_hint: 'refresh_token'
	        };

	        _this4._makeFormRequest('post', _this4.endpoints.oauthRevoke, options, null, function (err, result) {
	          if (err) {
	            return callback(err);
	          }

	          _TokenActions2.default.set('access_token', null);
	          _TokenActions2.default.set('refresh_token', null);

	          callback(null, result);
	        });
	      });
	    }
	  }]);

	  return ClientApiUserService;
	}(_UserService3.default);

	exports.default = ClientApiUserService;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _TokenConstants = __webpack_require__(23);

	var _TokenConstants2 = _interopRequireDefault(_TokenConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function dispatch(event) {
	  setTimeout(function () {
	    _context2.default.getDispatcher().dispatch(event);
	  }, 0);
	}

	var TokenActions = function () {
	  function TokenActions() {
	    _classCallCheck(this, TokenActions);
	  }

	  _createClass(TokenActions, [{
	    key: 'set',
	    value: function set(type, token, callback) {
	      dispatch({
	        type: _TokenConstants2.default.TOKEN_SET,
	        options: {
	          type: type,
	          token: token
	        },
	        callback: callback
	      });
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh(token, callback) {
	      dispatch({
	        type: _TokenConstants2.default.TOKEN_REFRESH,
	        options: {
	          token: token
	        },
	        callback: callback
	      });
	    }
	  }]);

	  return TokenActions;
	}();

	exports.default = new TokenActions();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SessionStore = __webpack_require__(21);

	var _SessionStore2 = _interopRequireDefault(_SessionStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Context = function () {
	  function Context() {
	    _classCallCheck(this, Context);

	    this.router = null;
	    this.dispatcher = null;
	    this.tokenStore = null;
	    this.sessionStore = null;
	    this.userStore = null;
	  }

	  _createClass(Context, [{
	    key: 'setRouter',
	    value: function setRouter(router) {
	      this.router = router;
	    }
	  }, {
	    key: 'getRouter',
	    value: function getRouter() {
	      return this.router;
	    }
	  }, {
	    key: 'setDispatcher',
	    value: function setDispatcher(dispatcher) {
	      this.dispatcher = dispatcher;
	    }
	  }, {
	    key: 'getDispatcher',
	    value: function getDispatcher() {
	      return this.dispatcher;
	    }
	  }, {
	    key: 'setTokenStore',
	    value: function setTokenStore(tokenStore) {
	      this.tokenStore = tokenStore;
	    }
	  }, {
	    key: 'setSessionStore',
	    value: function setSessionStore(sessionStore) {
	      this.sessionStore = sessionStore;
	    }
	  }, {
	    key: 'getSessionStore',
	    value: function getSessionStore() {
	      return this.sessionStore;
	    }
	  }, {
	    key: 'setUserStore',
	    value: function setUserStore(userStore) {
	      this.userStore = userStore;
	    }
	  }, {
	    key: 'getUserStore',
	    value: function getUserStore() {
	      return this.userStore;
	    }
	  }]);

	  return Context;
	}();

	exports.default = new Context();

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseStore2 = __webpack_require__(22);

	var _BaseStore3 = _interopRequireDefault(_BaseStore2);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SessionStore = function (_BaseStore) {
	  _inherits(SessionStore, _BaseStore);

	  function SessionStore() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SessionStore);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SessionStore.__proto__ || Object.getPrototypeOf(SessionStore)).call.apply(_ref, [this].concat(args))), _this), _this.session = undefined, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SessionStore, [{
	    key: 'get',
	    value: function get() {
	      return this.session;
	    }
	  }, {
	    key: 'set',
	    value: function set(session) {
	      if (session && session.groups && session.groups.href) {
	        session.groups = _utils2.default.getEnabledGroups(session.groups);
	      }

	      if (JSON.stringify(this.session) !== JSON.stringify(session)) {
	        this.session = session;
	        this.emitChange(session);
	      }
	    }
	  }, {
	    key: 'empty',
	    value: function empty() {
	      return this.session === undefined;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      if (this.session !== undefined) {
	        this.session = undefined;
	        this.emitChange(undefined);
	      }
	    }
	  }]);

	  return SessionStore;
	}(_BaseStore3.default);

	exports.default = SessionStore;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EventEmitter = __webpack_require__(2).EventEmitter;

	var BaseStore = function (_EventEmitter) {
	  _inherits(BaseStore, _EventEmitter);

	  function BaseStore() {
	    _classCallCheck(this, BaseStore);

	    return _possibleConstructorReturn(this, (BaseStore.__proto__ || Object.getPrototypeOf(BaseStore)).apply(this, arguments));
	  }

	  _createClass(BaseStore, [{
	    key: 'emitChange',
	    value: function emitChange(value) {
	      this.emit('changed', value);
	    }
	  }, {
	    key: 'addChangeListener',
	    value: function addChangeListener(callback) {
	      return this.on('changed', callback);
	    }
	  }, {
	    key: 'removeChangeListener',
	    value: function removeChangeListener(callback) {
	      this.removeListener('changed', callback);
	    }
	  }]);

	  return BaseStore;
	}(EventEmitter);

	exports.default = BaseStore;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keymirror = __webpack_require__(24);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _keymirror2.default)({
	  TOKEN_SET: null,
	  TOKEN_REFRESH: null
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TokenConstants = exports.UserConstants = undefined;

	var _UserConstants2 = __webpack_require__(26);

	var _UserConstants3 = _interopRequireDefault(_UserConstants2);

	var _TokenConstants2 = __webpack_require__(23);

	var _TokenConstants3 = _interopRequireDefault(_TokenConstants2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.UserConstants = _UserConstants3.default;
	exports.TokenConstants = _TokenConstants3.default;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keymirror = __webpack_require__(24);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _keymirror2.default)({
	  USER_LOGIN: null,
	  USER_SET: null,
	  USER_REGISTER: null,
	  USER_FORGOT_PASSWORD: null,
	  USER_CHANGE_PASSWORD: null,
	  USER_UPDATE_PROFILE: null,
	  USER_VERIFY_EMAIL: null,
	  USER_LOGOUT: null
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TokenStore = exports.SessionStore = exports.UserStore = undefined;

	var _UserStore2 = __webpack_require__(28);

	var _UserStore3 = _interopRequireDefault(_UserStore2);

	var _SessionStore2 = __webpack_require__(21);

	var _SessionStore3 = _interopRequireDefault(_SessionStore2);

	var _TokenStore2 = __webpack_require__(30);

	var _TokenStore3 = _interopRequireDefault(_TokenStore2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.UserStore = _UserStore3.default;
	exports.SessionStore = _SessionStore3.default;
	exports.TokenStore = _TokenStore3.default;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _BaseStore2 = __webpack_require__(22);

	var _BaseStore3 = _interopRequireDefault(_BaseStore2);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserStore = function (_BaseStore) {
	  _inherits(UserStore, _BaseStore);

	  function UserStore(userService, sessionStore) {
	    _classCallCheck(this, UserStore);

	    var _this = _possibleConstructorReturn(this, (UserStore.__proto__ || Object.getPrototypeOf(UserStore)).call(this));

	    _this.service = userService;
	    _this.sessionError = null;
	    _this.sessionStore = sessionStore;
	    _this.resolveSession();
	    return _this;
	  }

	  _createClass(UserStore, [{
	    key: 'isAuthenticated',
	    value: function isAuthenticated(options, callback) {
	      var _this2 = this;

	      if (typeof options === 'function') {
	        callback = options;
	        options = {};
	      }

	      this.resolveSession(function (err, user) {
	        var authenticated = !err && !_this2.sessionStore.empty();

	        if (authenticated && options.inGroup) {
	          if (user.groups) {
	            authenticated = _utils2.default.groupsMatchExpression(user.groups, options.inGroup);
	          } else {
	            _utils2.default.logWarning('<AuthenticatedRoute> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
	          }
	        }

	        callback(err, authenticated);
	      });
	    }
	  }, {
	    key: 'getAccessToken',
	    value: function getAccessToken() {
	      if (!this.service.getToken) {
	        return Promise.reject(new Error('Unable to retrieve access token for current auth strategy.'));
	      }

	      return this.service.getToken('access_token').then(function (accessToken) {
	        if (!accessToken) {
	          return Promise.reject('No access token available.');
	        }

	        return Promise.resolve(accessToken);
	      });
	    }
	  }, {
	    key: 'getLoginViewData',
	    value: function getLoginViewData(callback) {
	      this.service.getLoginViewData(callback);
	    }
	  }, {
	    key: 'login',
	    value: function login(options, callback) {
	      var _this3 = this;

	      this.reset();

	      this.service.login(options, function (err) {
	        if (err) {
	          return callback(err);
	        }

	        _this3.resolveSession(callback, true);
	      });
	    }
	  }, {
	    key: 'register',
	    value: function register(options, callback) {
	      this.service.register(options, callback);
	    }
	  }, {
	    key: 'getRegisterViewData',
	    value: function getRegisterViewData(callback) {
	      this.service.getRegisterViewData(callback);
	    }
	  }, {
	    key: 'forgotPassword',
	    value: function forgotPassword(options, callback) {
	      this.service.forgotPassword(options, callback);
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(options, callback) {
	      this.service.changePassword(options, callback);
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile(data, callback) {
	      this.service.updateProfile(data, callback);
	    }
	  }, {
	    key: 'verifyEmail',
	    value: function verifyEmail(spToken, callback) {
	      this.service.verifyEmail(spToken, callback);
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      var _this4 = this;

	      this.service.logout(function (err) {
	        if (err) {
	          return callback(err);
	        }

	        _this4.reset();
	        _this4.emitChange();

	        callback();
	      });
	    }
	  }, {
	    key: 'resolveSession',
	    value: function resolveSession(callback, force) {
	      var _this5 = this;

	      if (!force && (this.sessionError || !this.sessionStore.empty())) {
	        return callback && callback(this.sessionError, this.sessionStore.get());
	      }

	      this.service.me(function (err, result) {
	        if (err) {
	          _this5.sessionError = err;
	          _this5.sessionStore.reset();
	          _UserActions2.default.set(null);
	        } else {
	          _this5.sessionError = null;
	          _this5.sessionStore.set(result);
	          _UserActions2.default.set(result);
	        }

	        if (callback) {
	          callback(_this5.sessionError, _this5.sessionStore.get());
	        }

	        _this5.emitChange();
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.sessionError = null;
	      this.sessionStore.reset();
	      _UserActions2.default.set(null);
	    }
	  }]);

	  return UserStore;
	}(_BaseStore3.default);

	exports.default = UserStore;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserConstants = __webpack_require__(26);

	var _UserConstants2 = _interopRequireDefault(_UserConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function dispatch(event) {
	  setTimeout(function () {
	    _context2.default.getDispatcher().dispatch(event);
	  }, 0);
	}

	var UserActions = function () {
	  function UserActions() {
	    _classCallCheck(this, UserActions);
	  }

	  _createClass(UserActions, [{
	    key: 'login',
	    value: function login(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_LOGIN,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'register',
	    value: function register(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_REGISTER,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'forgotPassword',
	    value: function forgotPassword(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_FORGOT_PASSWORD,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'verifyEmail',
	    value: function verifyEmail(spToken, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_VERIFY_EMAIL,
	        options: {
	          spToken: spToken
	        },
	        callback: callback
	      });
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_CHANGE_PASSWORD,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile(data, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_UPDATE_PROFILE,
	        options: {
	          data: data
	        },
	        callback: callback
	      });
	    }
	  }, {
	    key: 'set',
	    value: function set(data) {
	      dispatch({
	        type: _UserConstants2.default.USER_SET,
	        options: {
	          data: data
	        }
	      });
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_LOGOUT,
	        callback: callback
	      });
	    }
	  }]);

	  return UserActions;
	}();

	exports.default = new UserActions();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _BaseStore2 = __webpack_require__(22);

	var _BaseStore3 = _interopRequireDefault(_BaseStore2);

	var _TokenActions = __webpack_require__(19);

	var _TokenActions2 = _interopRequireDefault(_TokenActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TokenStore = function (_BaseStore) {
	  _inherits(TokenStore, _BaseStore);

	  function TokenStore(storage, namespace) {
	    _classCallCheck(this, TokenStore);

	    var _this = _possibleConstructorReturn(this, (TokenStore.__proto__ || Object.getPrototypeOf(TokenStore)).call(this));

	    _this.storage = storage;
	    _this.namespace = namespace;
	    return _this;
	  }

	  _createClass(TokenStore, [{
	    key: '_getKey',
	    value: function _getKey(type) {
	      return this.namespace + ':' + type;
	    }
	  }, {
	    key: 'get',
	    value: function get(type) {
	      return this.storage.get(this._getKey(type));
	    }
	  }, {
	    key: 'set',
	    value: function set(type, token) {
	      var _this2 = this;

	      return this.get(type).then(function (storedToken) {
	        if (storedToken !== token) {
	          _this2.storage.set(_this2._getKey(type), token).then(function () {
	            _this2.emitChange({
	              type: type,
	              action: 'set',
	              value: token
	            });
	          });
	        }
	      });
	    }
	  }, {
	    key: 'empty',
	    value: function empty(type) {
	      return this.get(type).then(function (token) {
	        return token === undefined;
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset(type) {
	      var _this3 = this;

	      return this.empty(type).then(function (isEmpty) {
	        if (!isEmpty) {
	          return _this3.storage.remove(_this3._getKey(type)).then(function () {
	            _this3.emitChange({
	              type: type,
	              action: 'reset'
	            });
	          });
	        }
	      });
	    }
	  }]);

	  return TokenStore;
	}(_BaseStore3.default);

	exports.default = TokenStore;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReduxDispatcher = exports.FluxDispatcher = undefined;

	var _FluxDispatcher2 = __webpack_require__(32);

	var _FluxDispatcher3 = _interopRequireDefault(_FluxDispatcher2);

	var _ReduxDispatcher2 = __webpack_require__(37);

	var _ReduxDispatcher3 = _interopRequireDefault(_ReduxDispatcher2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FluxDispatcher = _FluxDispatcher3.default;
	exports.ReduxDispatcher = _ReduxDispatcher3.default;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _flux = __webpack_require__(33);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FluxDispatcher = function () {
	  function FluxDispatcher(reducer) {
	    _classCallCheck(this, FluxDispatcher);

	    this.dispatcher = new _flux.Dispatcher();
	    this.register(reducer);
	  }

	  _createClass(FluxDispatcher, [{
	    key: 'register',
	    value: function register(listener) {
	      this.dispatcher.register(function (data) {
	        if (data && 'actionType' in data) {
	          data.type = data.actionType;
	          delete data['actionType'];
	        }

	        listener(data);
	      });
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch(event) {
	      this.dispatcher.dispatch({
	        actionType: event.type,
	        options: event.options,
	        callback: event.callback
	      });
	    }
	  }]);

	  return FluxDispatcher;
	}();

	exports.default = FluxDispatcher;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(34);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(36);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReduxDispatcher = function () {
	  function ReduxDispatcher(reducer, store) {
	    _classCallCheck(this, ReduxDispatcher);

	    this.reducer = reducer;
	    this.store = store;
	  }

	  _createClass(ReduxDispatcher, [{
	    key: 'dispatch',
	    value: function dispatch(event) {
	      this.reducer(event);
	      this.store.dispatch(event);
	    }
	  }]);

	  return ReduxDispatcher;
	}();

	exports.default = ReduxDispatcher;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _class, _temp;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _HomeRoute = __webpack_require__(95);

	var _HomeRoute2 = _interopRequireDefault(_HomeRoute);

	var _LoginRoute = __webpack_require__(96);

	var _LoginRoute2 = _interopRequireDefault(_LoginRoute);

	var _LogoutRoute = __webpack_require__(97);

	var _LogoutRoute2 = _interopRequireDefault(_LogoutRoute);

	var _AuthenticatedRoute = __webpack_require__(98);

	var _AuthenticatedRoute2 = _interopRequireDefault(_AuthenticatedRoute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Router = (_temp = _class = function (_ReactRouter) {
	  _inherits(Router, _ReactRouter);

	  function Router() {
	    _classCallCheck(this, Router);

	    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).apply(this, arguments));

	    _this.state = {
	      authenticated: false,
	      user: undefined
	    };
	    _this.markedRoutes = {
	      home: {
	        type: _HomeRoute2.default,
	        authenticated: {
	          props: null
	        },
	        notAuthenticated: {
	          props: null
	        }
	      },
	      login: {
	        type: _LoginRoute2.default,
	        props: null
	      },
	      logout: {
	        type: _LogoutRoute2.default,
	        props: null
	      }
	    };


	    if (_this.props.routes) {
	      // The reason we wrap in a div is because we just need to have a root element.
	      _this._mapMarkedRoutes(_react2.default.createElement(
	        'div',
	        null,
	        _this.props.routes
	      ));
	    } else {
	      _this._mapMarkedRoutes(_this);
	    }

	    _this.sessionChangeListener = _this._setSessionState.bind(_this);

	    _context2.default.setRouter(_this);
	    return _this;
	  }

	  _createClass(Router, [{
	    key: '_mapMarkedRoutes',
	    value: function _mapMarkedRoutes(routes) {
	      var markedRoutes = this.markedRoutes;

	      _utils2.default.deepForEach(routes, function (node, parent) {
	        // Try and map the route node to a marked route.
	        for (var routeName in markedRoutes) {
	          var route = markedRoutes[routeName];
	          if (node.type === route.type) {
	            var markedRoute = markedRoutes[routeName];

	            if (node.type === _HomeRoute2.default) {
	              if (parent.type === _AuthenticatedRoute2.default) {
	                markedRoute = markedRoute.authenticated;
	              } else {
	                markedRoute = markedRoute.notAuthenticated;
	              }
	            }

	            markedRoute.props = node.props;
	            break;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'getHomeRoute',
	    value: function getHomeRoute() {
	      return this.markedRoutes.home.notAuthenticated.props;
	    }
	  }, {
	    key: 'getAuthenticatedHomeRoute',
	    value: function getAuthenticatedHomeRoute() {
	      return this.markedRoutes.home.authenticated.props;
	    }
	  }, {
	    key: 'getLoginRoute',
	    value: function getLoginRoute() {
	      return this.markedRoutes.login.props;
	    }
	  }, {
	    key: 'getLogoutRoute',
	    value: function getLogoutRoute() {
	      return this.markedRoutes.logout.props;
	    }
	  }, {
	    key: '_setSessionState',
	    value: function _setSessionState(user) {
	      this.setState({
	        authenticated: user !== undefined,
	        user: user
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setSessionState(_context2.default.sessionStore.get());
	      _context2.default.sessionStore.addListener('changed', this.sessionChangeListener);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Router.prototype.__proto__ || Object.getPrototypeOf(Router.prototype), 'componentWillUnmount', this).call(this);
	      _context2.default.sessionStore.removeListener('changed', this.sessionChangeListener);
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        authenticated: this.state.authenticated,
	        user: this.state.user
	      };
	    }
	  }]);

	  return Router;
	}(_reactRouter.Router), _class.childContextTypes = {
	  authenticated: _react2.default.PropTypes.bool,
	  user: _react2.default.PropTypes.object
	}, _class.defaultProps = _reactRouter.Router.defaultProps, _temp);
	exports.default = Router;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.RouterContext = exports.createRoutes = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(40);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes = __webpack_require__(41);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(42);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(44);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(60);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(61);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(62);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(64);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(66);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(65);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(67);

	var _Route3 = _interopRequireDefault(_Route2);

	var _RouterContext2 = __webpack_require__(56);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _match2 = __webpack_require__(68);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(82);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(83);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(84);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(92);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(70);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* utils */

	exports.RouterContext = _RouterContext3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(7);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    } else if (match[0] === '\\(') {
	      regexpSource += '\\(';
	    } else if (match[0] === '\\)') {
	      regexpSource += '\\)';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern),
	      regexpSource = _compilePattern2.regexpSource,
	      paramNames = _compilePattern2.paramNames,
	      tokens = _compilePattern2.tokens;

	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames,
	      paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern),
	      tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0,
	      parenHistory = [];

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenHistory[parenCount] = '';
	      parenCount += 1;
	    } else if (token === ')') {
	      var parenText = parenHistory.pop();
	      parenCount -= 1;

	      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
	    } else if (token === '\\(') {
	      pathname += '(';
	    } else if (token === '\\)') {
	      pathname += ')';
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue == null) {
	        if (parenCount) {
	          parenHistory[parenCount - 1] = '';

	          var curTokenIdx = tokens.indexOf(token);
	          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
	          var nextParenIdx = -1;

	          for (var _i = 0; _i < tokensSubset.length; _i++) {
	            if (tokensSubset[_i] == ')') {
	              nextParenIdx = _i;
	              break;
	            }
	          }

	          !(nextParenIdx > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : (0, _invariant2.default)(false) : void 0;

	          // jump to ending paren
	          i = curTokenIdx + nextParenIdx - 1;
	        }
	      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
	    } else {
	      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
	    }
	  }

	  !(parenCount <= 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : (0, _invariant2.default)(false) : void 0;

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager2 = __webpack_require__(45);

	var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);

	var _InternalPropTypes = __webpack_require__(55);

	var _RouterContext = __webpack_require__(56);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(40);

	var _RouterUtils = __webpack_require__(59);

	var _routerWarning = __webpack_require__(46);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  createRouterObject: function createRouterObject(state) {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.router;
	    }

	    var history = this.props.history;

	    return (0, _RouterUtils.createRouterObject)(history, this.transitionManager, state);
	  },
	  createTransitionManager: function createTransitionManager() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.transitionManager;
	    }

	    var history = this.props.history;
	    var _props = this.props,
	        routes = _props.routes,
	        children = _props.children;


	    !history.getCurrentLocation ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v4.x or v2.x ' + 'and earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please change to history v3.x.') : (0, _invariant2.default)(false) : void 0;

	    return (0, _createTransitionManager3.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    this.transitionManager = this.createTransitionManager();
	    this.router = this.createRouterObject(this.state);

	    this._unlisten = this.transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        // Keep the identity of this.router because of a caveat in ContextUtils:
	        // they only work if the object identity is preserved.
	        (0, _RouterUtils.assignRouterState)(_this.router, state);
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state,
	        location = _state.location,
	        routes = _state.routes,
	        params = _state.params,
	        components = _state.components;

	    var _props2 = this.props,
	        createElement = _props2.createElement,
	        render = _props2.render,
	        props = _objectWithoutProperties(_props2, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(46);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _computeChangedRoutes2 = __webpack_require__(48);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(49);

	var _isActive2 = __webpack_require__(51);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(52);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(54);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location, indexOnly) {
	    location = history.createLocation(location);

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
	        leaveRoutes = _computeChangedRoutes.leaveRoutes,
	        changeRoutes = _computeChangedRoutes.changeRoutes,
	        enterRoutes = _computeChangedRoutes.enterRoutes;

	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.map(function (route) {
	      return RouteHooks[getRouteID(route)];
	    }).filter(function (hook) {
	      return hook;
	    });
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	    var routeID = getRouteID(route, true);

	    RouteHooks[routeID] = hook;

	    if (thereWereNoRouteHooks) {
	      // setup transition & beforeunload hooks
	      unlistenBefore = history.listenBefore(transitionHook);

	      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	    }

	    return function () {
	      removeListenBeforeHooksForRoute(route);
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    function historyListener(location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    }

	    // TODO: Only use a single history listener. Otherwise we'll end up with
	    // multiple concurrent calls to match.

	    // Set up the history listener first in case the initial match redirects.
	    var unsubscribe = history.listen(historyListener);

	    if (state.location) {
	      // Picking up on a matchContext.
	      listener(null, state);
	    } else {
	      historyListener(history.getCurrentLocation());
	    }

	    return unsubscribe;
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(42);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(50);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PendingHooks = function PendingHooks() {
	  var _this = this;

	  _classCallCheck(this, PendingHooks);

	  this.hooks = [];

	  this.add = function (hook) {
	    return _this.hooks.push(hook);
	  };

	  this.remove = function (hook) {
	    return _this.hooks = _this.hooks.filter(function (h) {
	      return h !== hook;
	    });
	  };

	  this.has = function (hook) {
	    return _this.hooks.indexOf(hook) !== -1;
	  };

	  this.clear = function () {
	    return _this.hooks = [];
	  };
	};

	var enterHooks = new PendingHooks();
	var changeHooks = new PendingHooks();

	function createTransitionHook(hook, route, asyncArity, pendingHooks) {
	  var isSync = hook.length < asyncArity;

	  var transitionHook = function transitionHook() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (isSync) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };

	  pendingHooks.add(transitionHook);

	  return transitionHook;
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location) {
	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  enterHooks.clear();
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (enterHooks.has(hooks[index])) {
	        next.apply(undefined, arguments);
	        enterHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  changeHooks.clear();
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (changeHooks.has(hooks[index])) {
	        next.apply(undefined, arguments);
	        changeHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](state, nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(42);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname,
	      query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(50);

	var _PromiseUtils = __webpack_require__(53);

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (getComponent) {
	    var componentReturn = getComponent.call(route, nextState, callback);
	    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
	      return callback(null, component);
	    }, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.isPromise = isPromise;
	function isPromise(obj) {
	  return obj && typeof obj.then === 'function';
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(50);

	var _PromiseUtils = __webpack_require__(53);

	var _PatternUtils = __webpack_require__(42);

	var _routerWarning = __webpack_require__(46);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
	    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
	  }, callback);

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });

	    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
	      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    }, callback);
	  } else if (route.childRoutes || route.getChildRoutes) {
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	        return;
	      }

	      var pathless = childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(7);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    arrayOf = _react.PropTypes.arrayOf,
	    oneOfType = _react.PropTypes.oneOfType,
	    element = _react.PropTypes.element,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _getRouteParams = __webpack_require__(57);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _ContextUtils = __webpack_require__(58);

	var _RouteUtils = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    array = _React$PropTypes.array,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  mixins: [(0, _ContextUtils.ContextProvider)('router')],

	  propTypes: {
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this.props.router
	    };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        location = _props.location,
	        routes = _props.routes,
	        params = _props.params,
	        components = _props.components,
	        router = _props.router;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          location: location,
	          params: params,
	          route: route,
	          router: router,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(42);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ContextProvider = ContextProvider;
	exports.ContextSubscriber = ContextSubscriber;

	var _react = __webpack_require__(7);

	// Works around issues with context updates failing to propagate.
	// Caveat: the context value is expected to never change its identity.
	// https://github.com/facebook/react/issues/2517
	// https://github.com/reactjs/react-router/issues/470

	var contextProviderShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  eventIndex: _react.PropTypes.number.isRequired
	});

	function makeContextName(name) {
	  return '@@contextSubscriber/' + name;
	}

	function ContextProvider(name) {
	  var _childContextTypes, _ref2;

	  var contextName = makeContextName(name);
	  var listenersKey = contextName + '/listeners';
	  var eventIndexKey = contextName + '/eventIndex';
	  var subscribeKey = contextName + '/subscribe';

	  return _ref2 = {
	    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),

	    getChildContext: function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextName] = {
	        eventIndex: this[eventIndexKey],
	        subscribe: this[subscribeKey]
	      }, _ref;
	    },
	    componentWillMount: function componentWillMount() {
	      this[listenersKey] = [];
	      this[eventIndexKey] = 0;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this[eventIndexKey]++;
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;

	      this[listenersKey].forEach(function (listener) {
	        return listener(_this[eventIndexKey]);
	      });
	    }
	  }, _ref2[subscribeKey] = function (listener) {
	    var _this2 = this;

	    // No need to immediately call listener here.
	    this[listenersKey].push(listener);

	    return function () {
	      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }, _ref2;
	}

	function ContextSubscriber(name) {
	  var _contextTypes, _ref4;

	  var contextName = makeContextName(name);
	  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
	  var handleContextUpdateKey = contextName + '/handleContextUpdate';
	  var unsubscribeKey = contextName + '/unsubscribe';

	  return _ref4 = {
	    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),

	    getInitialState: function getInitialState() {
	      var _ref3;

	      if (!this.context[contextName]) {
	        return {};
	      }

	      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
	    },
	    componentDidMount: function componentDidMount() {
	      if (!this.context[contextName]) {
	        return;
	      }

	      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      var _setState;

	      if (!this.context[contextName]) {
	        return;
	      }

	      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (!this[unsubscribeKey]) {
	        return;
	      }

	      this[unsubscribeKey]();
	      this[unsubscribeKey] = null;
	    }
	  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
	    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
	      var _setState2;

	      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
	    }
	  }, _ref4;
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.assignRouterState = assignRouterState;
	function createRouterObject(history, transitionManager, state) {
	  var router = _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });

	  return assignRouterState(router, state);
	}

	function assignRouterState(router, _ref) {
	  var location = _ref.location,
	      params = _ref.params,
	      routes = _ref.routes;

	  router.location = location;
	  router.params = params;
	  router.routes = routes;

	  return router;
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(41);

	var _ContextUtils = __webpack_require__(58);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func,
	    oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function resolveToLocation(to, router) {
	  return typeof to === 'function' ? to(router.location) : to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object, func]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    var router = this.context.router;

	    !router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    router.push(resolveToLocation(this.props.to, router));
	  },
	  render: function render() {
	    var _props = this.props,
	        to = _props.to,
	        activeClassName = _props.activeClassName,
	        activeStyle = _props.activeStyle,
	        onlyActiveOnIndex = _props.onlyActiveOnIndex,
	        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Ignore if rendered outside the context of router to simplify unit testing.


	    var router = this.context.router;


	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (!to) {
	        return _react2.default.createElement('a', props);
	      }

	      var toLocation = resolveToLocation(to, router);
	      props.href = router.createHref(toLocation);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(toLocation, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(60);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(63);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _ContextUtils = __webpack_require__(58);

	var _PropTypes = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      if (!router) {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      }

	      var params = router.params,
	          location = router.location,
	          routes = router.routes;

	      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(46);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(65);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(40);

	var _PatternUtils = __webpack_require__(42);

	var _InternalPropTypes = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	/* eslint-disable react/require-render-return */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location,
	            params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(46);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(40);

	var _InternalPropTypes = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(40);

	var _InternalPropTypes = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	/* eslint-disable react/require-render-return */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Actions = __webpack_require__(69);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(70);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(45);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(40);

	var _RouterUtils = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history,
	      routes = _ref.routes,
	      location = _ref.location,
	      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    location = history.getCurrentLocation();
	  }

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    var renderProps = void 0;

	    if (nextState) {
	      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
	      renderProps = _extends({}, nextState, {
	        router: router,
	        matchContext: { transitionManager: transitionManager, router: router }
	      });
	    }

	    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';

	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';

	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(71);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(78);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(79);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useQueries` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(72);

	var _runTransitionHook = __webpack_require__(75);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(76);

	var _PathUtils = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};

	var defaultParseQueryString = _queryString.parse;

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery,
	        parseQueryString = options.parseQueryString;


	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;

	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    };

	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';

	      return _extends({}, object, {
	        search: search
	      });
	    };

	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };

	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };

	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

	      return decodeQuery(newLocation);
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useQueries;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(73);
	var objectAssign = __webpack_require__(74);

	function encoderForArrayFormat(opts) {
		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, index) {
					return value === null ? [
						encode(key, opts),
						'[',
						index,
						']'
					].join('') : [
						encode(key, opts),
						'[',
						encode(index, opts),
						']=',
						encode(value, opts)
					].join('');
				};

			case 'bracket':
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'[]=',
						encode(value, opts)
					].join('');
				};

			default:
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'=',
						encode(value, opts)
					].join('');
				};
		}
	}

	function parserForArrayFormat(opts) {
		var result;

		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, accumulator) {
					result = /\[(\d*)\]$/.exec(key);

					key = key.replace(/\[\d*\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return function (key, value, accumulator) {
					result = /(\[\])$/.exec(key);

					key = key.replace(/\[\]$/, '');

					if (!result || accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			default:
				return function (key, value, accumulator) {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		} else if (typeof input === 'object') {
			return keysSorter(Object.keys(input)).sort(function (a, b) {
				return Number(a) - Number(b);
			}).map(function (key) {
				return input[key];
			});
		}

		return input;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str, opts) {
		opts = objectAssign({arrayFormat: 'none'}, opts);

		var formatter = parserForArrayFormat(opts);

		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			formatter(decodeURIComponent(key), val, ret);
		});

		return Object.keys(ret).sort().reduce(function (result, key) {
			var val = ret[key];
			if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
				// Sort object keys, not values
				result[key] = keysSorter(val);
			} else {
				result[key] = val;
			}

			return result;
		}, Object.create(null));
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true,
			arrayFormat: 'none'
		};

		opts = objectAssign(defaults, opts);

		var formatter = encoderForArrayFormat(opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					result.push(formatter(key, val2, result.length));
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 74 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};

	exports.default = runTransitionHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(77);

	var _Actions = __webpack_require__(69);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Actions.POP;
	  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};

	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};

	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;

	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (typeofA !== typeofB) return false;

	  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }

	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }

	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path),
	      pathname = _parsePath.pathname,
	      search = _parsePath.search,
	      hash = _parsePath.hash;

	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};

	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path),
	      pathname = _parsePath2.pathname,
	      search = _parsePath2.search,
	      hash = _parsePath2.hash;

	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};

	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path),
	      search = _parsePath3.search;

	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};

	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;

	  var basename = location.basename,
	      pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;

	  var path = (basename || '') + pathname;

	  if (search && search !== '?') path += search;

	  if (hash) path += hash;

	  return path;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(75);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var history = createHistory(options);
	    var basename = options.basename;


	    var addBasename = function addBasename(location) {
	      if (!location) return location;

	      if (basename && location.basename == null) {
	        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    };

	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, object, {
	        pathname: pathname
	      });
	    };

	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };

	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };

	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useBasename;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(76);

	var _PathUtils = __webpack_require__(77);

	var _createHistory = __webpack_require__(80);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(69);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};

	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);

	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }

	    var init = (0, _PathUtils.parsePath)(path);

	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };

	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };

	  var go = function go(n) {
	    if (!n) return;

	    if (!canGo(n)) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

	      return;
	    }

	    current += n;
	    var currentLocation = getCurrentLocation();

	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };

	  var pushLocation = function pushLocation(location) {
	    current += 1;

	    if (current < entries.length) entries.splice(current);

	    entries.push(location);

	    saveState(location.key, location.state);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };

	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var _options = options,
	      entries = _options.entries,
	      current = _options.current;


	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }

	  var storage = createStateStorage(entries);

	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };

	  var readState = function readState(key) {
	    return storage[key];
	  };

	  return _extends({}, history, {
	    canGo: canGo
	  });
	};

	exports.default = createMemoryHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(81);

	var _PathUtils = __webpack_require__(77);

	var _runTransitionHook = __webpack_require__(75);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(69);

	var _LocationUtils = __webpack_require__(76);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createHistory = function createHistory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getCurrentLocation = options.getCurrentLocation,
	      getUserConfirmation = options.getUserConfirmation,
	      pushLocation = options.pushLocation,
	      replaceLocation = options.replaceLocation,
	      go = options.go,
	      keyLength = options.keyLength;


	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];

	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

	    if (currentLocation) return allKeys.indexOf(currentLocation.key);

	    return -1;
	  };

	  var updateLocation = function updateLocation(nextLocation) {
	    var currentIndex = getCurrentIndex();

	    currentLocation = nextLocation;

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }

	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };

	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);

	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var listen = function listen(listener) {
	    listeners.push(listener);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };

	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

	      pendingLocation = null;

	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);

	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };

	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };

	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };

	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };

	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createKey();
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };

	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};

	exports.default = createHistory;

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    isDone = true;

	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }

	    callback.apply(undefined, args);
	  };

	  var next = function next() {
	    if (isDone) return;

	    hasNext = true;

	    if (isSync) return; // Iterate instead of recursing if possible.

	    isSync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }

	    isSync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };

	  next();
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(71);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(78);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(56);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(46);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react.createElement;
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(85);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(91);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(86);

	var _BrowserProtocol = __webpack_require__(87);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(90);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(88);

	var _createHistory = __webpack_require__(80);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

	  var getUserConfirmation = Protocol.getUserConfirmation,
	      getCurrentLocation = Protocol.getCurrentLocation,
	      pushLocation = Protocol.pushLocation,
	      replaceLocation = Protocol.replaceLocation,
	      go = Protocol.go;


	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};

	exports.default = createBrowserHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(76);

	var _DOMUtils = __webpack_require__(88);

	var _DOMStateStorage = __webpack_require__(89);

	var _PathUtils = __webpack_require__(77);

	var _ExecutionEnvironment = __webpack_require__(86);

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;

	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) // Ignore extraneous popstate events in WebKit
	      return;
	    listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };

	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }

	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
	  };
	};

	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state,
	      key = location.key;


	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};

	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};

	var SecurityErrors = {
	  SecurityError: true
	};

	var KeyPrefix = '@@History/';

	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};

	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;

	    return;
	  }

	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

	      return;
	    }

	    throw error;
	  }
	};

	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

	      return undefined;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return undefined;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(87);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _LocationUtils = __webpack_require__(76);

	var _PathUtils = __webpack_require__(77);

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(82);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(93);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(91);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(86);

	var _DOMUtils = __webpack_require__(88);

	var _HashProtocol = __webpack_require__(94);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(80);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey,
	      hashType = options.hashType;


	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  if (hashType == null) hashType = 'slash';

	  if (!(hashType in HashPathCoders)) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

	    hashType = 'slash';
	  }

	  var pathCoder = HashPathCoders[hashType];

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
	  };

	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var go = function go(n) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

	    history.go(n);
	  };

	  var createHref = function createHref(path) {
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(87);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(76);

	var _DOMUtils = __webpack_require__(88);

	var _DOMStateStorage = __webpack_require__(89);

	var _PathUtils = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }

	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;

	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};

	var prevLocation = void 0;

	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);

	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);

	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	      prevLocation = currentLocation;

	      listener(currentLocation);
	    }
	  };

	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state,
	      key = location.key;


	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _reactRouter = __webpack_require__(39);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeRoute = function (_Route) {
	  _inherits(HomeRoute, _Route);

	  function HomeRoute() {
	    _classCallCheck(this, HomeRoute);

	    return _possibleConstructorReturn(this, (HomeRoute.__proto__ || Object.getPrototypeOf(HomeRoute)).apply(this, arguments));
	  }

	  return HomeRoute;
	}(_reactRouter.Route);

	exports.default = HomeRoute;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _reactRouter = __webpack_require__(39);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginRoute = (_temp = _class = function (_Route) {
	  _inherits(LoginRoute, _Route);

	  function LoginRoute() {
	    _classCallCheck(this, LoginRoute);

	    return _possibleConstructorReturn(this, (LoginRoute.__proto__ || Object.getPrototypeOf(LoginRoute)).apply(this, arguments));
	  }

	  return LoginRoute;
	}(_reactRouter.Route), _class.defaultProps = {
	  onEnter: function onEnter(nextState, replace, callback) {
	    _context2.default.userStore.isAuthenticated(function (err, authenticated) {
	      if (authenticated) {
	        var router = _context2.default.getRouter();
	        var homeRoute = router.getHomeRoute();
	        var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
	        var redirectTo = (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

	        replace(redirectTo);
	      }
	      callback();
	    });
	  }
	}, _temp);
	exports.default = LoginRoute;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogoutRoute = (_temp = _class = function (_Route) {
	  _inherits(LogoutRoute, _Route);

	  function LogoutRoute() {
	    _classCallCheck(this, LogoutRoute);

	    return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
	  }

	  return LogoutRoute;
	}(_reactRouter.Route), _class.defaultProps = {
	  onEnter: function onEnter(nextState, replace, callback) {
	    var _this2 = this;

	    _UserActions2.default.logout(function () {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var loginRoute = router.getLoginRoute();
	      var redirectTo = _this2.redirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

	      replace(redirectTo);

	      callback();
	    });
	  }
	}, _temp);
	exports.default = LogoutRoute;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _reactRouter = __webpack_require__(39);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthenticatedRoute = (_temp = _class = function (_Route) {
	  _inherits(AuthenticatedRoute, _Route);

	  function AuthenticatedRoute() {
	    _classCallCheck(this, AuthenticatedRoute);

	    return _possibleConstructorReturn(this, (AuthenticatedRoute.__proto__ || Object.getPrototypeOf(AuthenticatedRoute)).apply(this, arguments));
	  }

	  return AuthenticatedRoute;
	}(_reactRouter.Route), _class.defaultProps = {
	  onEnter: function onEnter(nextState, replace, callback) {
	    _context2.default.userStore.isAuthenticated({
	      inGroup: this.inGroup
	    }, function (err, authenticated) {
	      if (!authenticated) {
	        var router = _context2.default.getRouter();
	        var homeRoute = router.getHomeRoute();
	        var loginRoute = router.getLoginRoute();
	        var redirectTo = (loginRoute || {}).path || (homeRoute || {}).path || '/';

	        replace(redirectTo);
	      }
	      callback();
	    });
	  }
	}, _temp);
	exports.default = AuthenticatedRoute;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Authenticated = (_temp = _class = function (_React$Component) {
	  _inherits(Authenticated, _React$Component);

	  function Authenticated() {
	    _classCallCheck(this, Authenticated);

	    return _possibleConstructorReturn(this, (Authenticated.__proto__ || Object.getPrototypeOf(Authenticated)).apply(this, arguments));
	  }

	  _createClass(Authenticated, [{
	    key: 'render',
	    value: function render() {
	      var user = this.context.user;
	      var authenticated = user !== undefined;

	      if (authenticated && this.props.inGroup) {
	        if (user.groups) {
	          authenticated = _utils2.default.groupsMatchExpression(user.groups, this.props.inGroup);
	        } else {
	          _utils2.default.logWarning('<Authenticated>', 'In order to use the inGroup property, you must expand the groups resource for the /me endpoint.');
	        }
	      }

	      var propsToForward = _utils2.default.excludeProps(['inGroup'], this.props);

	      return authenticated ? _utils2.default.enforceRootElement(this.props.children, propsToForward) : null;
	    }
	  }]);

	  return Authenticated;
	}(_react2.default.Component), _class.contextTypes = {
	  user: _react2.default.PropTypes.object
	}, _temp);
	exports.default = Authenticated;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotAuthenticated = (_temp = _class = function (_React$Component) {
	  _inherits(NotAuthenticated, _React$Component);

	  function NotAuthenticated() {
	    _classCallCheck(this, NotAuthenticated);

	    return _possibleConstructorReturn(this, (NotAuthenticated.__proto__ || Object.getPrototypeOf(NotAuthenticated)).apply(this, arguments));
	  }

	  _createClass(NotAuthenticated, [{
	    key: 'render',
	    value: function render() {
	      var user = this.context.user;
	      var authenticated = user !== undefined;

	      if (this.props.inGroup) {
	        if (authenticated) {
	          if (user.groups) {
	            authenticated = _utils2.default.groupsMatchExpression(user.groups, this.props.inGroup);
	          } else {
	            _utils2.default.logWarning('<NotAuthenticated> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
	          }
	        } else {
	          return null;
	        }
	      }

	      var propsToForward = _utils2.default.excludeProps(['inGroup'], this.props);

	      return !authenticated ? _utils2.default.enforceRootElement(this.props.children, propsToForward) : null;
	    }
	  }]);

	  return NotAuthenticated;
	}(_react2.default.Component), _class.contextTypes = {
	  user: _react2.default.PropTypes.object
	}, _temp);
	exports.default = NotAuthenticated;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginLink = function (_React$Component) {
	  _inherits(LoginLink, _React$Component);

	  function LoginLink() {
	    _classCallCheck(this, LoginLink);

	    return _possibleConstructorReturn(this, (LoginLink.__proto__ || Object.getPrototypeOf(LoginLink)).apply(this, arguments));
	  }

	  _createClass(LoginLink, [{
	    key: 'render',
	    value: function render() {
	      var router = _context2.default.getRouter();
	      var loginRoute = router.getLoginRoute();
	      var targetPath = (loginRoute || {}).path || '/login';
	      var selectedProps = _utils2.default.excludeProps(['to', 'children'], this.props);

	      return _react2.default.createElement(
	        _reactRouter.Link,
	        _extends({ to: targetPath }, selectedProps),
	        this.props.children ? this.props.children : 'Login'
	      );
	    }
	  }]);

	  return LoginLink;
	}(_react2.default.Component);

	exports.default = LoginLink;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogoutLink = (_temp2 = _class = function (_React$Component) {
	  _inherits(LogoutLink, _React$Component);

	  function LogoutLink() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LogoutLink);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LogoutLink.__proto__ || Object.getPrototypeOf(LogoutLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      disabled: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LogoutLink, [{
	    key: '_performRedirect',
	    value: function _performRedirect(primaryRedirectTo) {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var loginRoute = router.getLoginRoute();
	      var redirectTo = primaryRedirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

	      this.context.router.push(redirectTo);
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _this2 = this;

	      e.preventDefault();

	      var primaryRedirectTo = this.props.redirectTo;

	      if (!this.state.disabled) {
	        this.setState({ disabled: true });

	        _UserActions2.default.logout(function () {
	          _this2._performRedirect(primaryRedirectTo);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selectedProps = _utils2.default.excludeProps(['redirectTo', 'href', 'onClick', 'disabled', 'children'], this.props);

	      return _react2.default.createElement(
	        'a',
	        _extends({ href: '#', onClick: this.onClick.bind(this), disabled: this.state.disabled }, selectedProps),
	        this.props.children ? this.props.children : 'Logout'
	      );
	    }
	  }]);

	  return LogoutLink;
	}(_react2.default.Component), _class.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	}, _temp2);
	exports.default = LogoutLink;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _class2, _temp3;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	var _LoadingText = __webpack_require__(104);

	var _LoadingText2 = _interopRequireDefault(_LoadingText);

	var _SocialLoginButton = __webpack_require__(105);

	var _SocialLoginButton2 = _interopRequireDefault(_SocialLoginButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultLoginForm = function (_React$Component) {
	  _inherits(DefaultLoginForm, _React$Component);

	  function DefaultLoginForm() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, DefaultLoginForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultLoginForm.__proto__ || Object.getPrototypeOf(DefaultLoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      fields: null,
	      socialProviders: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(DefaultLoginForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.fields !== null) {
	        return;
	      }

	      var defaultFields = [{
	        label: 'Username or Email',
	        name: 'login',
	        placeholder: 'Username or Email',
	        required: true,
	        type: 'text'
	      }, {
	        label: 'Password',
	        name: 'password',
	        placeholder: 'Password',
	        required: true,
	        type: 'password'
	      }];

	      _context2.default.userStore.getLoginViewData(function (err, data) {
	        var fields = null;
	        var socialProviders = null;

	        if (err) {
	          fields = defaultFields;
	        } else if (data && data.form) {
	          fields = data.form.fields;
	          if (!_this2.props.hideSocial) {
	            data.accountStores.forEach(function (accountStore) {
	              if (!accountStore.provider) {
	                return;
	              }

	              if (!accountStore.authorizeUri) {
	                return;
	              }

	              if (socialProviders === null) {
	                socialProviders = [];
	              }

	              socialProviders.push({
	                id: accountStore.provider.providerId
	              });
	            });
	          }
	        }

	        _this2.setState({
	          fields: fields,
	          socialProviders: socialProviders
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fieldMarkup = null;

	      if (this.state.fields !== null) {
	        fieldMarkup = [];

	        this.state.fields.forEach(function (field, index) {
	          var fieldId = 'sp-' + field.name + '-' + index;
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: fieldId, className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: fieldId, className: 'col-xs-12 col-sm-4 control-label' },
	              field.label
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-4' },
	              _react2.default.createElement('input', { type: field.type, className: 'form-control', id: fieldId, name: field.name, placeholder: field.placeholder, required: field.required })
	            )
	          ));
	        });

	        fieldMarkup.push(_react2.default.createElement(
	          'div',
	          { key: 'login-button', className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-offset-4 col-sm-4' },
	            _react2.default.createElement(
	              'p',
	              { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	              _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	            ),
	            _react2.default.createElement(
	              'button',
	              { type: 'submit', className: 'btn btn-primary' },
	              'Login'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/forgot', className: 'pull-right' },
	              'Forgot Password'
	            )
	          )
	        ));
	      }

	      if (this.state.socialProviders !== null) {
	        var providerButtons = [];

	        this.state.socialProviders.forEach(function (provider, index) {
	          var providerKey = 'sp-' + provider.id + '-' + index;

	          providerButtons.push(_react2.default.createElement(_SocialLoginButton2.default, { key: providerKey, providerId: provider.id, style: { marginRight: '5px', marginBottom: '5px' } }));
	        });

	        if (providerButtons.length) {
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: 'provider-buttons', className: 'form-group', style: { paddingTop: '20px' } },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4', style: { marginBottom: '10px' } },
	              'Or sign in using...'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4' },
	              providerButtons
	            )
	          ));
	        }
	      }

	      return _react2.default.createElement(
	        LoginForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-login-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                fieldMarkup ? fieldMarkup : _react2.default.createElement(_LoadingText2.default, null)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultLoginForm;
	}(_react2.default.Component);

	var LoginForm = (_temp3 = _class2 = function (_React$Component2) {
	  _inherits(LoginForm, _React$Component2);

	  function LoginForm() {
	    var _ref2;

	    var _temp2, _this3, _ret2;

	    _classCallCheck(this, LoginForm);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
	      fields: {
	        username: '',
	        password: ''
	      },
	      errorMessage: null,
	      isFormProcessing: false
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
	  }

	  _createClass(LoginForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this4 = this;

	      e.preventDefault();
	      e.persist();

	      var primaryRedirectTo = this.props.redirectTo;
	      var onSubmitSuccess = this.props.onSubmitSuccess;
	      var onSubmitError = this.props.onSubmitError;

	      var setErrorState = function setErrorState(recentError, newError) {
	        _this4.setState({
	          isFormProcessing: false,
	          errorMessage: (newError || recentError).message
	        });
	      };

	      var next = function next(err, data) {
	        if (err) {
	          if (onSubmitError) {
	            return onSubmitError({
	              data: data,
	              error: err
	            }, setErrorState.bind(_this4, err));
	          }

	          return setErrorState(err);
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this4.state.fields;

	        _UserActions2.default.login({
	          login: data.username,
	          password: data.password
	        }, function (err, result) {
	          if (err) {
	            if (onSubmitError) {
	              return onSubmitError({
	                data: data,
	                error: err
	              }, setErrorState.bind(_this4, err));
	            }

	            return setErrorState(err);
	          }

	          var performRedirect = _this4._performRedirect.bind(_this4, primaryRedirectTo);

	          if (onSubmitSuccess) {
	            return onSubmitSuccess({
	              data: data,
	              result: result
	            }, performRedirect);
	          }

	          performRedirect();
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_performRedirect',
	    value: function _performRedirect(primaryRedirectTo) {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
	      var redirectTo = primaryRedirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

	      this.context.router.push(redirectTo);
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        switch (element.props.name) {
	          case 'login':
	          case 'username':
	            tryMapField('username');
	            break;
	          case 'password':
	            tryMapField('password');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = this.state.errorMessage !== null;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['redirectTo', 'hideSocial', 'onSubmit', 'onSubmitError', 'onSubmitSuccess', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultLoginForm, this.props);
	      }
	    }
	  }]);

	  return LoginForm;
	}(_react2.default.Component), _class2.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	}, _temp3);
	exports.default = LoginForm;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoadingText = function (_React$Component) {
	  _inherits(LoadingText, _React$Component);

	  function LoadingText() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LoadingText);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadingText.__proto__ || Object.getPrototypeOf(LoadingText)).call.apply(_ref, [this].concat(args))), _this), _this.waitTimeout = null, _this.state = {
	      text: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LoadingText, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.waitTimeout = setTimeout(function () {
	        _this2.setState({
	          text: _this2.props.text || 'Loading...'
	        });
	      }, this.props.showAfter || 250);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.waitTimeout);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.state.text) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'p',
	        _extends({}, this.props, { style: { textAlign: 'center' } }),
	        this.props.children ? this.props.children : this.state.text
	      );
	    }
	  }]);

	  return LoadingText;
	}(_react2.default.Component);

	exports.default = LoadingText;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _SocialLoginLink = __webpack_require__(106);

	var _SocialLoginLink2 = _interopRequireDefault(_SocialLoginLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SocialLoginButton = function (_React$Component) {
	  _inherits(SocialLoginButton, _React$Component);

	  function SocialLoginButton() {
	    _classCallCheck(this, SocialLoginButton);

	    return _possibleConstructorReturn(this, (SocialLoginButton.__proto__ || Object.getPrototypeOf(SocialLoginButton)).apply(this, arguments));
	  }

	  _createClass(SocialLoginButton, [{
	    key: 'render',
	    value: function render() {
	      var providerId = this.props.providerId;
	      var selectedProps = _utils2.default.excludeProps(['hideIcon', 'children', 'className'], this.props);

	      return _react2.default.createElement(
	        _SocialLoginLink2.default,
	        _extends({ className: 'btn btn-default btn-social btn-' + providerId + ' ' + this.props.className }, selectedProps),
	        !this.props.hideIcon ? _react2.default.createElement('span', { className: 'fa fa-' + providerId, style: { marginRight: '5px' } }) : null,
	        this.props.children ? this.props.children : _utils2.default.translateProviderIdToName(providerId)
	      );
	    }
	  }]);

	  return SocialLoginButton;
	}(_react2.default.Component);

	exports.default = SocialLoginButton;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _xtend = __webpack_require__(107);

	var _xtend2 = _interopRequireDefault(_xtend);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var providerAuthorizationUris = {
	  github: 'https://github.com/login/oauth/authorize',
	  google: 'https://accounts.google.com/o/oauth2/v2/auth',
	  linkedin: 'https://www.linkedin.com/uas/oauth2/authorization',
	  facebook: 'https://www.facebook.com/dialog/oauth'
	};

	var SocialLoginLink = function (_React$Component) {
	  _inherits(SocialLoginLink, _React$Component);

	  function SocialLoginLink() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SocialLoginLink);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SocialLoginLink.__proto__ || Object.getPrototypeOf(SocialLoginLink)).call.apply(_ref, [this].concat(args))), _this), _this.availableProps = {
	      providerId: null
	    }, _this.state = {
	      disabled: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SocialLoginLink, [{
	    key: '_buildAuthorizationUri',
	    value: function _buildAuthorizationUri(accountStore, scope, redirectUri) {

	      // The authorizeUri includes the basic set of query parameters, but
	      // we need to be able to override them with values that the developer
	      // may supply via this library

	      var authorizationUri = accountStore.authorizeUri;

	      var authorizationUriBaseEndpoint = authorizationUri.split('?')[0];

	      var defaultQueryString = authorizationUri.split('?')[1];

	      var provider = accountStore.provider;

	      var queryString = _utils2.default.parseQueryString(defaultQueryString);

	      return authorizationUriBaseEndpoint + '?' + _utils2.default.encodeQueryString((0, _xtend2.default)(queryString, {
	        client_id: provider.clientId,
	        scope: scope || provider.scope,
	        redirect_uri: redirectUri || _utils2.default.getCurrentHost(),
	        response_type: 'stormpath_token'
	      }));
	    }
	  }, {
	    key: '_findProvider',
	    value: function _findProvider(accountStores, providerId) {
	      var provider;

	      for (var i = 0; i < accountStores.length; i++) {
	        var item = accountStores[i];

	        if (item.provider.providerId === providerId) {
	          provider = item.provider;
	          break;
	        }
	      }

	      return provider;
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(e) {
	      var _this2 = this;

	      e.preventDefault();
	      e.persist();

	      if (!this.state.disabled) {
	        this.setState({ disabled: true });

	        var providerId = this.props.providerId;

	        if (this.props.onClick) {
	          this.props.onClick(e);
	        }

	        _context2.default.userStore.getLoginViewData(function (err, result) {
	          if (err) {
	            return console.error('Error: Unable to retrieve login view data.');
	          }

	          var accountStore = result.accountStores.filter(function (accountStore) {
	            return accountStore.provider.providerId === providerId;
	          })[0];

	          if (!accountStore) {
	            return console.error('Error: Unable to login. Social provider ' + _utils2.default.translateProviderIdToName(providerId) + ' not configured.');
	          }

	          window.location.href = _this2._buildAuthorizationUri(accountStore, _this2.props.scope, _this2.props.redirectUri);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var providerId = this.props.providerId;
	      var selectedProps = _utils2.default.excludeProps(['providerId', 'scope', 'redirectUri', 'children', 'disabled', 'onClick', 'href'], this.props);

	      return _react2.default.createElement(
	        'a',
	        _extends({}, selectedProps, { href: '#', onClick: this._onClick.bind(this), disabled: this.state.disabled }),
	        this.props.children ? this.props.children : 'Login with ' + _utils2.default.translateProviderIdToName(providerId)
	      );
	    }
	  }]);

	  return SocialLoginLink;
	}(_react2.default.Component);

	exports.default = SocialLoginLink;

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _class2, _temp3;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultUserProfileForm = function (_React$Component) {
	  _inherits(DefaultUserProfileForm, _React$Component);

	  function DefaultUserProfileForm() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, DefaultUserProfileForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultUserProfileForm.__proto__ || Object.getPrototypeOf(DefaultUserProfileForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      showPasswordVerification: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(DefaultUserProfileForm, [{
	    key: 'onPasswordChanged',
	    value: function onPasswordChanged(e) {
	      this.setState({
	        showPasswordVerification: e.target.value.length > 0
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        UserProfileForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-update-profile-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'givenName', className: 'col-xs-12 col-sm-4 control-label' },
	                    'First name'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'givenName', name: 'givenName', placeholder: 'First name', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'surname', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Last name'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'surname', name: 'surname', placeholder: 'Last name', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'email', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Email'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'email', name: 'email', placeholder: 'Email', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'password', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Password'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', name: 'password', placeholder: 'Password', onChange: this.onPasswordChanged.bind(this) })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  null,
	                  this.state.showPasswordVerification ? _react2.default.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    _react2.default.createElement(
	                      'label',
	                      { htmlFor: 'password', className: 'col-xs-12 col-sm-4 control-label' },
	                      'Existing password'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-12 col-sm-4' },
	                      _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'existingPassword', name: 'existingPassword', placeholder: 'Existing password', required: true })
	                    )
	                  ) : null
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { key: 'update-button', className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-sm-offset-4 col-sm-4' },
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'alert alert-success', 'data-spIf': 'form.successful' },
	                      'Profile updated.'
	                    ),
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'submit', className: 'btn btn-primary' },
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': '!form.processing' },
	                        'Update'
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': 'form.processing' },
	                        'Updating...'
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultUserProfileForm;
	}(_react2.default.Component);

	var UserProfileForm = (_temp3 = _class2 = function (_React$Component2) {
	  _inherits(UserProfileForm, _React$Component2);

	  function UserProfileForm() {
	    var _ref2;

	    var _temp2, _this2, _ret2;

	    _classCallCheck(this, UserProfileForm);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = UserProfileForm.__proto__ || Object.getPrototypeOf(UserProfileForm)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
	      fields: {},
	      defaultFields: _this2.context.user,
	      errorMessage: null,
	      isFormProcessing: false,
	      isFormSuccessful: false
	    }, _this2._updateSessionData = function (data, callback) {
	      var sessionStore = _context2.default.sessionStore;

	      if (!sessionStore.empty()) {
	        var hasChanged = false;
	        var updatedSession = _utils2.default.clone(sessionStore.get());

	        for (var key in data) {
	          if (key in updatedSession) {
	            if (updatedSession[key] != data[key]) {
	              hasChanged = true;
	              updatedSession[key] = data[key];
	            }
	          }
	        }

	        if (hasChanged) {
	          _context2.default.userStore.resolveSession(callback, true);
	        } else {
	          callback();
	        }
	      }
	    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	  }

	  _createClass(UserProfileForm, [{
	    key: '_onFormSubmit',
	    value: function _onFormSubmit(e) {
	      var _this3 = this;

	      e.preventDefault();
	      e.persist();

	      var next = function next(err, data) {
	        if (err) {
	          return _this3.setState({
	            isFormProcessing: false,
	            isFormSuccessful: false,
	            errorMessage: err.message
	          });
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this3.state.fields;

	        _UserActions2.default.updateProfile(data, function (err) {
	          if (err) {
	            return _this3.setState({
	              isFormProcessing: false,
	              isFormSuccessful: false,
	              errorMessage: err.message
	            });
	          }

	          _this3._updateSessionData(data, function () {
	            _this3.setState({
	              isFormProcessing: false,
	              isFormSuccessful: true,
	              errorMessage: null
	            });
	          });
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var defaultValue = element.props.name ? _utils2.default.getFieldValue(this.state.defaultFields, element.props.name) : undefined;

	      _utils2.default.mapFormField(element, tryMapField, defaultValue);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.successful':
	          test = this.state.isFormSuccessful;
	          break;
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = !!this.state.errorMessage;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this._onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultUserProfileForm, this.props);
	      }
	    }
	  }]);

	  return UserProfileForm;
	}(_react2.default.Component), _class2.contextTypes = {
	  user: _react2.default.PropTypes.object
	}, _temp3);
	exports.default = UserProfileForm;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _class2, _temp3;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _LoginLink = __webpack_require__(101);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	var _LoadingText = __webpack_require__(104);

	var _LoadingText2 = _interopRequireDefault(_LoadingText);

	var _SocialLoginButton = __webpack_require__(105);

	var _SocialLoginButton2 = _interopRequireDefault(_SocialLoginButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultRegistrationForm = function (_React$Component) {
	  _inherits(DefaultRegistrationForm, _React$Component);

	  function DefaultRegistrationForm() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, DefaultRegistrationForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultRegistrationForm.__proto__ || Object.getPrototypeOf(DefaultRegistrationForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      fields: null,
	      socialProviders: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(DefaultRegistrationForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.fields !== null) {
	        return;
	      }

	      var defaultFields = [{
	        label: 'First Name',
	        name: 'givenName',
	        placeholder: 'First Name',
	        required: true,
	        type: 'text'
	      }, {
	        label: 'Last Name',
	        name: 'surname',
	        placeholder: 'Last Name',
	        required: true,
	        type: 'text'
	      }, {
	        label: 'Email',
	        name: 'email',
	        placeholder: 'Email',
	        required: true,
	        type: 'email'
	      }, {
	        label: 'Password',
	        name: 'password',
	        placeholder: 'Password',
	        required: true,
	        type: 'password'
	      }];

	      _context2.default.userStore.getRegisterViewData(function (err, data) {
	        var fields = null;
	        var socialProviders = null;

	        if (err) {
	          fields = defaultFields;
	        } else if (data && data.form) {
	          fields = data.form.fields;
	          if (!_this2.props.hideSocial) {
	            data.accountStores.forEach(function (accountStore) {
	              if (!accountStore.provider) {
	                return;
	              }

	              if (!accountStore.authorizeUri) {
	                return;
	              }

	              if (socialProviders === null) {
	                socialProviders = [];
	              }

	              socialProviders.push({
	                id: accountStore.provider.providerId
	              });
	            });
	          }
	        }

	        _this2.setState({
	          fields: fields,
	          socialProviders: socialProviders
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fieldMarkup = null;

	      if (this.state.fields !== null) {
	        fieldMarkup = [];

	        this.state.fields.forEach(function (field, index) {
	          var fieldId = 'sp-' + field.name + '-' + index;
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: fieldId, className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: fieldId, className: 'col-xs-12 col-sm-4 control-label' },
	              field.label
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-4' },
	              _react2.default.createElement('input', { type: field.type, className: 'form-control', id: fieldId, name: field.name, placeholder: field.placeholder, required: field.required })
	            )
	          ));
	        });

	        fieldMarkup.push(_react2.default.createElement(
	          'div',
	          { key: 'register-button', className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-offset-4 col-sm-4' },
	            _react2.default.createElement(
	              'p',
	              { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	              _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	            ),
	            _react2.default.createElement(
	              'button',
	              { type: 'submit', className: 'btn btn-primary' },
	              'Register'
	            )
	          )
	        ));
	      }

	      if (this.state.socialProviders !== null) {
	        var providerButtons = [];

	        this.state.socialProviders.forEach(function (provider, index) {
	          var providerKey = 'sp-' + provider.id + '-' + index;

	          providerButtons.push(_react2.default.createElement(_SocialLoginButton2.default, { key: providerKey, providerId: provider.id, style: { marginRight: '5px', marginBottom: '5px' } }));
	        });

	        if (providerButtons.length) {
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: 'provider-buttons', className: 'form-group', style: { paddingTop: '20px' } },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4', style: { marginBottom: '10px' } },
	              'Or register using...'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4' },
	              providerButtons
	            )
	          ));
	        }
	      }

	      return _react2.default.createElement(
	        RegistrationForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-login-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row', 'data-spIf': 'account.created' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-xs-12 col-sm-4' },
	              _react2.default.createElement(
	                'p',
	                { className: 'alert alert-success', 'data-spIf': 'account.enabled' },
	                'Your account has been created. ',
	                _react2.default.createElement(
	                  _LoginLink2.default,
	                  null,
	                  'Login Now'
	                ),
	                '.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { 'data-spIf': '!account.enabled' },
	                _react2.default.createElement(
	                  'p',
	                  { className: 'alert alert-success' },
	                  'Your account has been created. Please check your email for a verification link.'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  { className: 'pull-right' },
	                  _react2.default.createElement(
	                    _LoginLink2.default,
	                    null,
	                    'Back to Login'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row', 'data-spIf': '!account.created' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                fieldMarkup ? fieldMarkup : _react2.default.createElement(_LoadingText2.default, null)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultRegistrationForm;
	}(_react2.default.Component);

	var RegistrationForm = (_temp3 = _class2 = function (_React$Component2) {
	  _inherits(RegistrationForm, _React$Component2);

	  function RegistrationForm() {
	    var _ref2;

	    var _temp2, _this3, _ret2;

	    _classCallCheck(this, RegistrationForm);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
	      fields: {
	        givenName: '',
	        surname: '',
	        email: '',
	        password: ''
	      },
	      errorMessage: null,
	      isFormProcessing: false,
	      isAccountCreated: false,
	      isAccountEnabled: false
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
	  }

	  _createClass(RegistrationForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this4 = this;

	      e.preventDefault();
	      e.persist();

	      var primaryRedirectTo = this.props.redirectTo;
	      var onSubmitSuccess = this.props.onSubmitSuccess;
	      var onSubmitError = this.props.onSubmitError;

	      var setErrorState = function setErrorState(recentError, newError) {
	        _this4.setState({
	          isFormProcessing: false,
	          isAccountCreated: false,
	          errorMessage: (newError || recentError).message
	        });
	      };

	      var next = function next(err, data) {
	        if (err) {
	          if (onSubmitError) {
	            return onSubmitError({
	              data: data,
	              error: err
	            }, setErrorState.bind(_this4, err));
	          }

	          return setErrorState(err);
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this4.state.fields;

	        _UserActions2.default.register(data, function (err, result) {
	          if (err) {
	            if (onSubmitError) {
	              return onSubmitError({
	                data: data,
	                result: result,
	                error: err
	              }, setErrorState.bind(_this4, err));
	            }

	            setErrorState(err);
	          } else if (result.status === 'ENABLED') {
	            _UserActions2.default.login({
	              login: data.email || data.username,
	              password: data.password
	            }, function (err) {
	              if (err) {
	                if (onSubmitError) {
	                  return onSubmitError({
	                    data: data,
	                    result: result,
	                    error: err
	                  }, setErrorState.bind(_this4, err));
	                }

	                return setErrorState(err);
	              }

	              var performRedirect = _this4._performRedirect.bind(_this4, primaryRedirectTo);

	              if (onSubmitSuccess) {
	                return onSubmitSuccess({
	                  data: data,
	                  result: result
	                }, performRedirect);
	              }

	              performRedirect();
	            });
	          } else {
	            var setSuccessState = function setSuccessState() {
	              _this4.setState({
	                isFormProcessing: false,
	                isAccountCreated: true,
	                isAccountEnabled: false
	              });
	            };

	            if (onSubmitSuccess) {
	              return onSubmitSuccess({
	                data: data,
	                result: result
	              }, setSuccessState);
	            }

	            setSuccessState();
	          }
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_performRedirect',
	    value: function _performRedirect(primaryRedirectTo) {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
	      var redirectTo = primaryRedirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

	      this.context.router.push(redirectTo);
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        if (name.indexOf('customData.') === 0) {
	          tryMapField(name);
	          return;
	        }

	        switch (name) {
	          case 'email':
	            tryMapField('email');
	            break;
	          case 'login':
	          case 'username':
	            tryMapField('username');
	            break;
	          case 'givenName':
	          case 'firstName':
	            tryMapField('givenName');
	            break;
	          case 'surname':
	          case 'lastName':
	            tryMapField('surname');
	            break;
	          case 'password':
	            tryMapField('password');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = !!this.state.errorMessage;
	          break;
	        case 'account.created':
	          test = this.state.isAccountCreated;
	          break;
	        case 'account.enabled':
	          test = this.state.isAccountEnabled;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['redirectTo', 'hideSocial', 'onSubmit', 'onSubmitError', 'onSubmitSuccess', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultRegistrationForm, this.props);
	      }
	    }
	  }]);

	  return RegistrationForm;
	}(_react2.default.Component), _class2.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	}, _temp3);
	exports.default = RegistrationForm;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _LoginLink = __webpack_require__(101);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultResetPasswordForm = function (_React$Component) {
	  _inherits(DefaultResetPasswordForm, _React$Component);

	  function DefaultResetPasswordForm() {
	    _classCallCheck(this, DefaultResetPasswordForm);

	    return _possibleConstructorReturn(this, (DefaultResetPasswordForm.__proto__ || Object.getPrototypeOf(DefaultResetPasswordForm)).apply(this, arguments));
	  }

	  _createClass(DefaultResetPasswordForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        ResetPasswordForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-reset-password-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-xs-12 col-sm-4', 'data-spIf': 'form.sent' },
	              _react2.default.createElement(
	                'p',
	                { className: 'alert alert-success' },
	                'We have sent a password reset link to the email address of the account that you specified. Please check your email for this message, then click on the link.'
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: 'pull-right' },
	                _react2.default.createElement(
	                  _LoginLink2.default,
	                  null,
	                  'Back to Login'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12', 'data-spIf': '!form.sent' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'spEmail', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Email or Username'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { className: 'form-control', id: 'spEmail', name: 'email', placeholder: 'Your Email Address' })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-sm-offset-4 col-xs-12' },
	                    _react2.default.createElement(
	                      'p',
	                      { 'data-spIf': 'form.error' },
	                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	                    ),
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'submit', className: 'btn btn-primary' },
	                      'Request Password Reset'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultResetPasswordForm;
	}(_react2.default.Component);

	var ResetPasswordForm = function (_React$Component2) {
	  _inherits(ResetPasswordForm, _React$Component2);

	  function ResetPasswordForm() {
	    var _ref;

	    var _temp, _this2, _ret;

	    _classCallCheck(this, ResetPasswordForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ResetPasswordForm.__proto__ || Object.getPrototypeOf(ResetPasswordForm)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
	      fields: {
	        email: ''
	      },
	      errorMessage: null,
	      isFormProcessing: false,
	      isFormSent: false
	    }, _temp), _possibleConstructorReturn(_this2, _ret);
	  }

	  _createClass(ResetPasswordForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this3 = this;

	      e.preventDefault();
	      e.persist();

	      var next = function next(err, data) {
	        if (err) {
	          return _this3.setState({
	            isFormProcessing: false,
	            errorMessage: err.message
	          });
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this3.state.fields;

	        _UserActions2.default.forgotPassword(data, function (err) {
	          if (err) {
	            _this3.setState({
	              isFormProcessing: false,
	              errorMessage: err.message
	            });
	          } else {
	            _this3.setState({
	              isFormSent: true,
	              isFormProcessing: false,
	              errorMessage: null
	            });
	          }
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        switch (name) {
	          case 'email':
	            tryMapField('email');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.sent':
	          test = this.state.isFormSent;
	          break;
	        case 'form.error':
	          test = this.state.errorMessage !== null;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultResetPasswordForm, this.props);
	      }
	    }
	  }]);

	  return ResetPasswordForm;
	}(_react2.default.Component);

	exports.default = ResetPasswordForm;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _LoginLink = __webpack_require__(101);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _LoadingText = __webpack_require__(104);

	var _LoadingText2 = _interopRequireDefault(_LoadingText);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultChangePasswordForm = function (_React$Component) {
	  _inherits(DefaultChangePasswordForm, _React$Component);

	  function DefaultChangePasswordForm() {
	    _classCallCheck(this, DefaultChangePasswordForm);

	    return _possibleConstructorReturn(this, (DefaultChangePasswordForm.__proto__ || Object.getPrototypeOf(DefaultChangePasswordForm)).apply(this, arguments));
	  }

	  _createClass(DefaultChangePasswordForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        ChangePasswordForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-change-password-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-xs-12 col-sm-4', 'data-spIf': 'form.sent' },
	              _react2.default.createElement(
	                'p',
	                { className: 'alert alert-success' },
	                'Your new password has been set. Please ',
	                _react2.default.createElement(_LoginLink2.default, null),
	                '.'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12', 'data-spIf': '!form.sent' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'spPassword', className: 'col-xs-12 col-sm-4 control-label' },
	                    'New Password'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { id: 'spPassword', type: 'password', name: 'password', className: 'form-control', placeholder: 'New Password', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'spConfirmPassword', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Confirm New Password'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { id: 'spConfirmPassword', type: 'password', name: 'confirmPassword', className: 'form-control', placeholder: 'Confirm New Password', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-sm-offset-4 col-sm-4' },
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	                    ),
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'submit', className: 'btn btn-primary' },
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': 'form.processing' },
	                        'Setting New Password...'
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': '!form.processing' },
	                        'Set New Password'
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultChangePasswordForm;
	}(_react2.default.Component);

	var ChangePasswordForm = function (_React$Component2) {
	  _inherits(ChangePasswordForm, _React$Component2);

	  function ChangePasswordForm() {
	    var _ref;

	    _classCallCheck(this, ChangePasswordForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this2 = _possibleConstructorReturn(this, (_ref = ChangePasswordForm.__proto__ || Object.getPrototypeOf(ChangePasswordForm)).call.apply(_ref, [this].concat(args)));

	    _this2.state = {
	      spToken: null,
	      fields: {
	        password: ''
	      },
	      errorMessage: null,
	      isFormSent: false,
	      isFormProcessing: false
	    };


	    if (!_this2.props || !('spToken' in _this2.props)) {
	      throw new Error('[Stormpath SDK/Error] ChangePasswordForm: Property \'spToken\' is required.');
	    }

	    _this2.state.spToken = _this2.props.spToken;
	    return _this2;
	  }

	  _createClass(ChangePasswordForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this3 = this;

	      e.preventDefault();
	      e.persist();

	      var next = function next(err, data) {
	        if (err) {
	          return _this3.setState({
	            isFormProcessing: false,
	            errorMessage: err.message
	          });
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this3.state.fields;

	        if ('confirmPassword' in data && data.password !== data.confirmPassword) {
	          return _this3.setState({
	            isFormProcessing: false,
	            errorMessage: 'Passwords does not match.'
	          });
	        }

	        _UserActions2.default.changePassword(data, function (err) {
	          if (err) {
	            if (err.status === 404) {
	              err.message = 'The reset password token is not valid. Please try resetting your password again.';
	            }

	            return _this3.setState({
	              isFormProcessing: false,
	              errorMessage: err.message
	            });
	          }

	          _this3.setState({
	            isFormProcessing: false,
	            isFormSent: true
	          });
	        });
	      };

	      this.setState({
	        errorMessage: null,
	        isFormSent: false,
	        isFormProcessing: true
	      });

	      var data = this.state.fields;

	      if (this.state.spToken) {
	        data.sptoken = this.props.spToken;
	      }

	      if (this.props.onSubmit) {
	        e.data = data;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, data);
	      }
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        switch (name) {
	          case 'password':
	            tryMapField('password');
	            break;
	          case 'confirmPassword':
	            tryMapField('confirmPassword');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.sent':
	          test = this.state.isFormSent;
	          break;
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = this.state.errorMessage !== null;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children', 'spToken'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultChangePasswordForm, this.props);
	      }
	    }
	  }]);

	  return ChangePasswordForm;
	}(_react2.default.Component);

	exports.default = ChangePasswordForm;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _LoginLink = __webpack_require__(101);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VerifyEmailView = function (_React$Component) {
	  _inherits(VerifyEmailView, _React$Component);

	  function VerifyEmailView() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, VerifyEmailView);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VerifyEmailView.__proto__ || Object.getPrototypeOf(VerifyEmailView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      status: 'VERIFYING'
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(VerifyEmailView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var spToken = this.props.spToken;

	      _UserActions2.default.verifyEmail(spToken, function (err) {
	        if (err) {
	          _this2.setState({
	            status: 'ERROR'
	          });
	        } else {
	          _this2.setState({
	            status: 'VERIFIED'
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selectedProps = _utils2.default.excludeProps(['className', 'spToken'], this.props);

	      return _react2.default.createElement(
	        'div',
	        _extends({ className: "row " + this.props.className }, selectedProps),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-sm-offset-4 col-xs-12 col-sm-4' },
	          {
	            VERIFYING: _react2.default.createElement(
	              'p',
	              { className: 'alert alert-warning' },
	              'We are verifying your account.'
	            ),
	            VERIFIED: _react2.default.createElement(
	              'p',
	              { className: 'alert alert-success' },
	              'Your account has has been verified! ',
	              _react2.default.createElement(
	                _LoginLink2.default,
	                null,
	                'Login Now.'
	              )
	            ),
	            ERROR: _react2.default.createElement(
	              'div',
	              { className: 'alert alert-danger' },
	              'This email verification link is not valid.'
	            )
	          }[this.state.status]
	        )
	      );
	    }
	  }]);

	  return VerifyEmailView;
	}(_react2.default.Component);

	exports.default = VerifyEmailView;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _UserComponent2 = __webpack_require__(114);

	var _UserComponent3 = _interopRequireDefault(_UserComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserField = function (_UserComponent) {
	  _inherits(UserField, _UserComponent);

	  function UserField() {
	    _classCallCheck(this, UserField);

	    var _this = _possibleConstructorReturn(this, (UserField.__proto__ || Object.getPrototypeOf(UserField)).apply(this, arguments));

	    _utils2.default.logWarning('The UserField component has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
	    return _this;
	  }

	  _createClass(UserField, [{
	    key: '_resolveFieldValue',
	    value: function _resolveFieldValue(name) {
	      var value = this.state.user;
	      var keys = name.split('.');

	      while (keys.length) {
	        var key = keys.shift();

	        if (!(key in value)) {
	          throw new Error('Field does not exist');
	        }

	        value = value[key];
	      }

	      return value;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fieldName = this.props.fieldName;
	      var fieldValue = null;

	      try {
	        fieldValue = this._resolveFieldValue(fieldName);
	      } catch (e) {
	        if ('default' in this.props) {
	          fieldValue = this.props['default'];
	        }
	      }

	      return _react2.default.createElement(
	        'span',
	        { className: this.props.className },
	        fieldValue
	      );
	    }
	  }]);

	  return UserField;
	}(_UserComponent3.default);

	exports.default = UserField;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserComponent = function (_React$Component) {
	  _inherits(UserComponent, _React$Component);

	  function UserComponent() {
	    _classCallCheck(this, UserComponent);

	    var _this = _possibleConstructorReturn(this, (UserComponent.__proto__ || Object.getPrototypeOf(UserComponent)).apply(this, arguments));

	    _this.onChangeListener = null;
	    _this.state = {
	      user: {}
	    };

	    _utils2.default.logWarning('The UserComponent class has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
	    return _this;
	  }

	  _createClass(UserComponent, [{
	    key: 'onChange',
	    value: function onChange() {
	      var _this2 = this;

	      _context2.default.userStore.resolveSession(function (err, user) {
	        if (_this2.onChangeListener !== null) {
	          _this2.setState({ user: user });
	        }
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.onChangeListener = this.onChange.bind(this);
	      _context2.default.userStore.addChangeListener(this.onChangeListener);
	      this.onChange();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _context2.default.userStore.removeChangeListener(this.onChangeListener);
	      this.onChangeListener = null;
	    }
	  }]);

	  return UserComponent;
	}(_react2.default.Component);

	exports.default = UserComponent;

/***/ }
/******/ ])
});
;