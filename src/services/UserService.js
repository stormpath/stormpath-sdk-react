import utils from '../utils';
import BaseService from './BaseService';
import RequestPool from './RequestPool';

export default class UserService extends BaseService {
  constructor(endpoints, forceAgentHeader) {
    let defaultEndpoints = {
      me: '/me',
      login: '/login',
      register: '/register',
      verifyEmail: '/verify',
      forgotPassword: '/forgot',
      changePassword: '/change',
      logout: '/logout'
    };

    super(utils.mergeObjects(defaultEndpoints, endpoints), forceAgentHeader);

    this.meRequestPool = new RequestPool();
  }

  _unwrapAccountResult(callback) {
    return (err, result) => {
      if (err) {
        return callback(err);
      }

      callback(null, result.account || result || {});
    };
  }

	me(callback) {
    this.meRequestPool.request((resultCallback) => {
      this._makeRequest('get', this.endpoints.me, null, null, this._unwrapAccountResult(resultCallback));
    }, callback);
	}

  updateProfile(data, settings, callback) {
    const endpoint = settings.endpoint || this.endpoints.me;
    this._makeRequest('post', endpoint, data, settings.headers, callback);
  }

  getLoginViewData(callback) {
    this._makeRequest('get', this.endpoints.login, null, null, callback);
  }

	login(options, settings, callback) {
    const endpoint = settings.endpoint || this.endpoints.login;

    this._makeRequest('post', endpoint, options, settings.headers, this._unwrapAccountResult(callback));
	}

  register(options, settings, callback) {
    const endpoint = settings.endpoint || this.endpoints.register;

    this._makeRequest('post', endpoint, options, settings.headers, this._unwrapAccountResult(callback));
  }

  getRegisterViewData(callback) {
    this._makeRequest('get', this.endpoints.register, null, null, callback);
  }

  verifyEmail(spToken, settings, callback) {
    const endpoint = (settings.endpoint || this.endpoints.verifyEmail)
      + '?sptoken=' + encodeURIComponent(spToken);

    this._makeRequest('get', endpoint, null, settings.headers, callback);
  }

  forgotPassword(options, settings, callback) {
    const endpoint = settings.endpoint || this.endpoints.forgotPassword;

    this._makeRequest('post', endpoint, options, settings.headers, callback);
  }

  changePassword(options, settings, callback) {
    const endpoint = settings.endpoint || this.endpoints.forgotPassword;

    this._makeRequest('post', endpoint, options, settings.headers, callback);
  }

	logout(settings, callback) {
    const endpoint = settings.endpoint || this.endpoints.logout;

    this._makeRequest('post', endpoint, null, settings.headers, callback);
	}
}
