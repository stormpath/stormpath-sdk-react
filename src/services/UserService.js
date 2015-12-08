class RequestPool {
  waiting = [];

  request(resolver, callback) {
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
}

function mergeObjects(obj1, obj2){
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

function makeAjaxRequest(method, path, body, callback) {
  var request = new XMLHttpRequest();

  request.open(method.toUpperCase(), path, true);
  request.setRequestHeader('Accept', 'application/json');

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

    try {
      if (request.responseText) {
        result.responseJSON = JSON.parse(request.responseText);
      }
      callback(null, result);
    } catch(e) {
      callback(e);
    }
  };

  if (body !== undefined) {
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send(JSON.stringify(body));
  }
}

export default class UserService {
  constructor(endpoints) {
    this.meRequestPool = new RequestPool();

    this.endpoints = {
      me: '/me',
      login: '/login',
      register: '/register',
      verifyEmail: '/verify',
      forgotPassword: '/forgot',
      changePassword: '/change',
      logout: '/logout'
    };

    this.endpoints = mergeObjects(this.endpoints, endpoints);
  }

  _makeRequest(method, path, body, callback) {
    makeAjaxRequest(method, path, body, function (err, result) {
      if (err) {
        return callback(err);
      }

      var data = result.responseJSON || {};

      if (result.status === 200) {
        callback(null, data);
      } else {
        callback(new Error(data.error || 'Invalid request.'));
      }
    });
  }

	me(callback) {
    var self = this;
    this.meRequestPool.request(function (resultCallback) {
      self._makeRequest('get', self.endpoints.me, null, resultCallback);
    }, callback);
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
