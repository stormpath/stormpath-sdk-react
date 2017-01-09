import React from 'react';
import utils from '../utils';

function makeHttpRequest(method, uri, body, headers, callback) {
  var request = new XMLHttpRequest();

  request.open(method.toUpperCase(), uri, true);

  if (headers) {
    for (var name in headers) {
      var value = headers[name];
      request.setRequestHeader(name, value);
    }
  }

  // If the URI is different than the URI of the domain we're on,
  // then set withCredentials to true so that we enable CORS.
  if (!utils.isRelativeUri(uri) && !utils.isSameHost(uri, window.location.href)) {
    request.withCredentials = true;
  }

  request.onreadystatechange = function () {
    // 4 = Request finished and response is ready.
    // Ignore everything else.
    if (request.readyState !== 4) {
      return;
    }

    let result = {
      status: request.status,
      responseJSON: null
    };

    try {
      if (request.responseText) {
        result.responseJSON = JSON.parse(request.responseText);
      }
    } catch(e) {
      return callback(e);
    }

    callback(null, result);
  };

  if (body && typeof body === 'object') {
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send(JSON.stringify(body));
  } else {
    request.send();
  }
}

export default class BaseService {
  constructor(endpoints) {
    var defaultEndpoints = {
      baseUri: null
    };

    this.endpoints = utils.mergeObjects(defaultEndpoints, endpoints);
  }

  _makeRequest(method, path, body, callback) {
    var uri = this._buildEndpoint(path);
    var headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json'
    };

    // Only set the X-Stormpath-Agent header if we're on the same domain as the requested URI.
    // This because we want to avoid CORS requests that require you to have to whitelist the X-Stormpath-Agent header.
    if (utils.isRelativeUri(uri) || utils.isSameHost(uri, window.location.href)) {
      headers['X-Stormpath-Agent'] = `stormpath-sdk-react/${pkg.version} react/${React.version}`;
    }

    makeHttpRequest(method, uri, body, headers, function (err, result) {
      if (err) {
        return callback(err);
      }

      var data = result.responseJSON || {};

      if (result.status === 200) {
        callback(null, data);
      } else {
        var error = new Error(data.message || data.error || 'A request to the API failed.');
        error.status = result.status;
        callback(error);
      }
    });
  }

  _buildEndpoint(endpoint) {
    return (this.endpoints.baseUri || '') + endpoint;
  }
}
