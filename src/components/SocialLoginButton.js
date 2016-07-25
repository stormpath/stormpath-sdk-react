import React from 'react';

import utils from '../utils';
import SocialLoginLink from './SocialLoginLink';

export default class SocialLoginButton extends React.Component {
  render() {
    var providerId = this.props.providerId;
    var selectedProps = utils.excludeProps(['hideIcon', 'children', 'className'], this.props);

    return (
      <SocialLoginLink className={ 'btn btn-default btn-social btn-' + providerId + ' ' + this.props.className } {...selectedProps}>
        { !this.props.hideIcon ? <span className={ 'fa fa-' + providerId } style={{ marginRight: '5px' }}></span> : null }
        { this.props.children ? this.props.children : utils.translateProviderIdToName(providerId) }
      </SocialLoginLink>
    );
  }
}
