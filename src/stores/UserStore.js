import utils from '../utils';
import BaseStore from './BaseStore';
import UserActions from '../actions/UserActions';

export default class UserStore extends BaseStore {
  constructor(userService, sessionStore) {
    super();
    this.service = userService;
    this.sessionError = null;
    this.sessionStore = sessionStore;
    this.resolveSession();
  }

  isAuthenticated(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.resolveSession((err, user) => {
      var authenticated = !err && !this.sessionStore.empty();

      if (authenticated && options.inGroup) {
        if (user.groups) {
          authenticated = utils.groupsMatchExpression(user.groups, options.inGroup);
        } else {
          utils.logWarning('<AuthenticatedRoute> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
        }
      }

      callback(err, authenticated);
    });
  }

  getAccessToken() {
    if (!this.service.getToken) {
      return Promise.reject(new Error('Unable to retrieve access token for current auth strategy.'));
    }

    return this.service.getToken('access_token').then((accessToken) => {
      if (!accessToken) {
        return Promise.reject('No access token available.');
      }

      return Promise.resolve(accessToken);
    });
  }

  getLoginViewData(callback) {
    this.service.getLoginViewData(callback);
  }

  login(options, settings, callback) {
    this.reset();

    this.service.login(options, settings, (err) => {
      if (err) {
        return callback(err);
      }

      this.resolveSession(callback, true);
    });
  }

  register(options, settings, callback) {
    this.service.register(options, settings, callback);
  }

  getRegisterViewData(callback) {
    this.service.getRegisterViewData(callback);
  }

  forgotPassword(options, settings, callback) {
    this.service.forgotPassword(options, settings, callback);
  }

  changePassword(options, settings, callback) {
    this.service.changePassword(options, settings, callback);
  }

  updateProfile(data, settings, callback) {
    this.service.updateProfile(data, settings, callback);
  }

  verifyEmail(spToken, settings, callback) {
    this.service.verifyEmail(spToken, settings, callback);
  }

  logout(settings, callback) {
    this.service.logout(settings, (err) => {
      if (err) {
        return callback(err);
      }

      this.reset();
      this.emitChange();

      callback();
    });
  }

  resolveSession(callback, force) {
    if (!force && (this.sessionError || !this.sessionStore.empty())) {
      return callback && callback(this.sessionError, this.sessionStore.get());
    }

    this.service.me((err, result) => {
      if (err) {
        this.sessionError = err;
        this.sessionStore.reset();
        UserActions.set(null);
      } else {
        this.sessionError = null;
        this.sessionStore.set(result);
        UserActions.set(result);
      }

      if (callback) {
        callback(this.sessionError, this.sessionStore.get());
      }

      this.emitChange();
    });
  }

  reset() {
    this.sessionError = null;
    this.sessionStore.reset();
    UserActions.set(null);
  }
}
