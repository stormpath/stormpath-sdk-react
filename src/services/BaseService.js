import React from 'react';
import utils from '../utils';

const validHttpStatuses = [200, 201, 202, 204]

var jsonContentEncoder = {
  contentType: 'application/json; charset=utf-8',
  encode: function (body) {
    return JSON.stringify(body);
  }
};

var formContentEncoder = {
  contentType: 'application/x-www-form-urlencoded; charset=utf-8',
  encode: function (body) {
    return utils.serializeFormObject(body);
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

    let caughtError = null;

    try {
      if (request.responseText) {
        result.responseJSON = JSON.parse(request.responseText);
      }
    } catch(e) {
      caughtError = e;
    }

    if (caughtError) {
      callback(caughtError);
    } else {
      callback(null, result);
    }

    callback(null, result);
  };

  if (body && typeof body === 'object') {
    var contentEncoder = getContentEncoder(headers['Content-Type']);
    request.setRequestHeader('Content-Type', contentEncoder.contentType);
    request.send(contentEncoder.encode(body));
  } else {
    request.send();
  }
}

export default class BaseService {
  constructor(endpoints, forceAgentHeader) {
    let defaultEndpoints = {
      baseUri: null
    };

    this.endpoints = utils.mergeObjects(defaultEndpoints, endpoints);
    this.forceAgentHeader = forceAgentHeader || false;
  }

  _makeRequest(method, path, body, headers, callback) {
    var uri = this._buildEndpoint(path);

    headers = headers || {};

    if (!headers.Accept) {
      headers.Accept = 'application/json';
    }

    // Only set the X-Stormpath-Agent header if we're on the same domain as the requested URI.
    // This because we want to avoid CORS requests that require you to have to whitelist the X-Stormpath-Agent header.
    if (this.forceAgentHeader || utils.isRelativeUri(uri) || utils.isSameHost(uri, window.location.href)) {
      headers['X-Stormpath-Agent'] = `stormpath-sdk-react/${pkg.version} react/${React.version}`;
    }

    makeHttpRequest(method, uri, body, headers, function (err, result) {
      if (err) {
        return callback(err);
      }

      var data = result.responseJSON || {};

      if (validHttpStatuses.indexOf(result.status) !== -1) {
        callback(null, data);
      } else {
        var error = new Error(data.message || data.error || 'A request to the API failed.');
        error.type = data.error;
        error.status = result.status;
        callback(error);
      }
    });
  }

  _buildEndpoint(endpoint) {
    return (this.endpoints.baseUri || '') + endpoint;
  }
}
