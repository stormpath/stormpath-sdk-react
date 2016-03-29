import React from 'react';

import utils from '../utils';
import context from './../context';

let providerAuthorizationUris = {
  github: 'https://github.com/login/oauth/authorize',
  google: 'https://accounts.google.com/o/oauth2/v2/auth',
  linkedin: 'https://www.linkedin.com/uas/oauth2/authorization',
  facebook: 'https://www.facebook.com/dialog/oauth'
};

export default class SocialLoginLink extends React.Component {
  state = {
    disabled: false
  };

  _buildRedirectUri(provider) {
    return location.protocol + '//' + location.host + '/callbacks/' + provider.providerId;
  }

  _createStateCookie() {
    var stateId = utils.uuid();

    document.cookie = 'oauthStateToken=' + stateId;

    return stateId;
  }

  _buildAuthorizationUri(provider, scope, redirectUri) {
    var authorizationUri = providerAuthorizationUris[provider.providerId];

    if (!authorizationUri) {
      return false;
    }

    var queryString = {
      client_id: provider.clientId,
      scope: scope || provider.scope,
      redirect_uri: redirectUri || this._buildRedirectUri(provider),
      state: this._createStateCookie(),
      response_type: 'code'
    };

    return authorizationUri + '?' + utils.encodeQueryString(queryString);
  }

  _findProvider(accountStores, providerId) {
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

  _onClick(e) {
    e.preventDefault();

    if (!this.state.disabled) {
      this.setState({ disabled: true });

      var providerId = this.props.providerId;

      context.userStore.getLoginViewData((err, result) => {
        if (err) {
          return console.error('Error: Unable to retrieve login view data.');
        }

        var provider = this._findProvider(result.accountStores, providerId);

        if (!provider) {
          return console.error('Error: Unable to login. Social provider ' + utils.translateProviderIdToName(providerId) + ' not configured.');
        }

        window.location.href = this._buildAuthorizationUri(provider, this.props.scope, this.props.redirectTo);
      });
    }
  }

  render() {
    var providerId = this.props.providerId;

    return (
      <a {...this.props} href='#' onClick={this._onClick.bind(this)} disabled={this.state.disabled}>
        { this.props.children ? this.props.children : 'Login with ' + utils.translateProviderIdToName(providerId)}
      </a>
    );
  }
}
