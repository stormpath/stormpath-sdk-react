import React from 'react';
import xtend from 'xtend';
import utils from '../utils';
import context from './../context';

let providerAuthorizationUris = {
  github: 'https://github.com/login/oauth/authorize',
  google: 'https://accounts.google.com/o/oauth2/v2/auth',
  linkedin: 'https://www.linkedin.com/uas/oauth2/authorization',
  facebook: 'https://www.facebook.com/dialog/oauth'
};

export default class SocialLoginLink extends React.Component {
  availableProps = {
    providerId: null
  };

  state = {
    disabled: false
  };

  _buildAuthorizationUri(accountStore, scope, redirectUri) {

    // The authorizeUri includes the basic set of query parameters, but
    // we need to be able to override them with values that the developer
    // may supply via this library

    var authorizationUri = accountStore.authorizeUri;

    var authorizationUriBaseEndpoint = authorizationUri.split('?')[0];

    var defaultQueryString = authorizationUri.split('?')[1];

    var provider = accountStore.provider;

    var queryString = utils.parseQueryString(defaultQueryString);

    return authorizationUriBaseEndpoint + '?' + utils.encodeQueryString(xtend(queryString, {
      client_id: provider.clientId,
      scope: scope || provider.scope,
      redirect_uri: redirectUri || utils.getCurrentHost(),
      response_type: 'stormpath_token'
    }));
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
    e.persist();

    if (!this.state.disabled) {
      this.setState({ disabled: true });

      var providerId = this.props.providerId;

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      context.userStore.getLoginViewData((err, result) => {
        if (err) {
          return console.error('Error: Unable to retrieve login view data.');
        }

        var accountStore = result.accountStores.filter((accountStore) => accountStore.provider.providerId === providerId)[0];

        if (!accountStore) {
          return console.error('Error: Unable to login. Social provider ' + utils.translateProviderIdToName(providerId) + ' not configured.');
        }

        window.location.href = this._buildAuthorizationUri(accountStore, this.props.scope, this.props.redirectUri);
      });
    }
  }

  render() {
    var providerId = this.props.providerId;
    var selectedProps = utils.excludeProps(['providerId', 'scope', 'redirectUri', 'children', 'disabled', 'onClick', 'href'], this.props);

    return (
      <a {...selectedProps} href='#' onClick={this._onClick.bind(this)} disabled={this.state.disabled}>
        { this.props.children ? this.props.children : 'Login with ' + utils.translateProviderIdToName(providerId)}
      </a>
    );
  }
}
