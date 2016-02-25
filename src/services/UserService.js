import utils from '../utils';
import BaseService from './BaseService';
import RequestPool from './RequestPool';

export default class UserService extends BaseService {
  constructor(endpoints) {
    var defaultEndpoints = {
      me: '/me',
      login: '/login',
      register: '/register',
      verifyEmail: '/verify',
      forgotPassword: '/forgot',
      changePassword: '/change',
      logout: '/logout'
    };

    super(utils.mergeObjects(defaultEndpoints, endpoints));

    this.meRequestPool = new RequestPool();
  }

	me(callback) {
    this.meRequestPool.request((resultCallback) => {
      this._makeRequest('get', this.endpoints.me, null, resultCallback);
    }, callback);
	}

  getLoginViewData(callback) {
    this._makeRequest('get', this._buildEndpoint(this.endpoints.login), null, callback);
  }

	login(options, callback) {
    this._makeRequest('post', this.endpoints.login, options, callback);
	}

  register(options, callback) {
    this._makeRequest('post', this.endpoints.register, options, callback);
  }

  verifyEmail(spToken, callback) {
    this._makeRequest('get', this.endpoints.verifyEmail + '?sptoken=' + encodeURIComponent(spToken), null, callback);
  }

  forgotPassword(options, callback) {
    this._makeRequest('post', this.endpoints.forgotPassword, options, callback);
  }

  changePassword(options, callback) {
    this._makeRequest('post', this.endpoints.changePassword, options, callback);
  }

	logout(callback) {
    this._makeRequest('get', this.endpoints.logout, null, callback);
	}
}
