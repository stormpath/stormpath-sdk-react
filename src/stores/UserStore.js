import app from '../app';

var BaseStore = require('../stores/BaseStore');
var UserService = require('../services/UserService');
var UserConstants = require('../constants/UserConstants');

var _session = false;
var _sessionError = null;
var _sessionResolved = false;

class UserStore extends BaseStore {
  constructor() {
    super();
    this.service = null;
  }

  init(context) {
    this.service = new UserService(context.getEndpoints());
    this.resolveSession();
  }

  getSession() {
    return _session;
  }

  isAuthenticated(callback) {
    this.resolveSession(function (err, result) {
      callback(err, !err && _session !== false);
    });
  }

  login(options, callback) {
    var self = this;

    this.reset();

    this.service.login(options, function (err, result) {
      if (err) {
        return callback(err);
      }

      self.resolveSession(callback);
    });
  }

  register(options, callback) {
    this.service.register(options, callback);
  }

  forgotPassword(options, callback) {
    this.service.forgotPassword(options, callback);
  }

  changePassword(options, callback) {
    this.service.changePassword(options, callback);
  }

  verifyEmail(spToken, callback) {
    this.service.verifyEmail(spToken, callback);
  }

  logout(callback) {
    var self = this;

    this.service.logout(function (err) {
      if (err) {
        return callback(err);
      }

      self.reset();
      self.emitChange();

      callback();
    });
  }

  resolveSession(callback) {
    var self = this;

    if (_sessionResolved) {
      return callback && callback(_sessionError, _session);
    }

    this.service.me(function (err, result) {
      self.reset();

      _sessionResolved = true;

      if (err) {
        _sessionError = err;
      } else {
        _session = result;
      }

      if (callback) {
        callback(_sessionError, _session);
      }

      self.emitChange();
    });
  }

  reset(resolved) {
    _session = false;
    _sessionError = null;
    _sessionResolved = false;
  }
}

var userStore = new UserStore();

app.on('ready', function (context) {
  userStore.init(context);
  context.getDispatcher().register(function (payload) {
    switch(payload.actionType) {
      case UserConstants.USER_LOGIN:
        userStore.login(payload.options, payload.callback);
        break;
      case UserConstants.USER_LOGOUT:
        userStore.logout(payload.callback);
        break;
      case UserConstants.USER_REGISTER:
        userStore.register(payload.options, payload.callback);
        break;
      case UserConstants.USER_FORGOT_PASSWORD:
        userStore.forgotPassword(payload.options, payload.callback);
        break;
      case UserConstants.USER_CHANGE_PASSWORD:
        userStore.changePassword(payload.options, payload.callback);
        break;
      case UserConstants.USER_VERIFY_EMAIL:
        userStore.verifyEmail(payload.options.spToken, payload.callback);
        break;
    }
    return true;
  });
});

module.exports = userStore;
