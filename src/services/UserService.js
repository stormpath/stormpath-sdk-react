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

  updateProfile(data, callback) {
    this._makeRequest('post', this.endpoints.me, data, null, callback);
  }

  getLoginViewData(callback) {
    this._makeRequest('get', this.endpoints.login, null, null, callback);
  }

	login(options, callback) {
    this._makeRequest('post', this.endpoints.login, options, null, this._unwrapAccountResult(callback));
	}

  register(options, callback) {
    this._makeRequest('post', this.endpoints.register, options, null, this._unwrapAccountResult(callback));
  }

  getRegisterViewData(callback) {
    this._makeRequest('get', this.endpoints.register, null, null, callback);
  }

  verifyEmail(spToken, callback) {
    this._makeRequest('get', this.endpoints.verifyEmail + '?sptoken=' + encodeURIComponent(spToken), null, null, callback);
  }

  forgotPassword(options, callback) {
    this._makeRequest('post', this.endpoints.forgotPassword, options, null, callback);
  }

  changePassword(options, callback) {
    this._makeRequest('post', this.endpoints.changePassword, options, null, callback);
  }

	logout(callback) {
    this._makeRequest('post', this.endpoints.logout, null, null, callback);
	}
}
