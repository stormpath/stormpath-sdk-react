import React, {Component, PropTypes} from 'react';
import keyMirror from 'keymirror';

import utils from '../utils';
import LoginLink from '../components/LoginLink';
import UserActions from '../actions/UserActions';

const verificationStatus = keyMirror({
  VERIFYING: null,
  VERIFIED: null,
  ERROR: null
});

class DefaultVerifyEmailView extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
  };

  _getContent() {
    switch (this.props.status) {
      case verificationStatus.VERIFYING:
        return (
          <p className="alert alert-warning">We are verifying your account.</p>
        );
      case verificationStatus.VERIFIED:
        return (
          <p className="alert alert-success">
            Your account has has been verified! <LoginLink>Login Now.</LoginLink>
          </p>
        );
      case verificationStatus.ERROR:
        return (
          <div className="alert alert-danger">
            This email verification link is not valid.
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const selectedProps = utils.excludeProps(['className','status'], this.props)

    return (
      <div className={"row " + this.props.className} {...selectedProps}>
        <div className="col-sm-offset-4 col-xs-12 col-sm-4">
          {this._getContent()}
        </div>
      </div>
    );
  }
}

export default class VerifyEmailView extends Component {

  static propTypes = {
    children: PropTypes.element
  };

  state = {
    status: verificationStatus.VERIFYING
  };

  componentDidMount() {
    UserActions.verifyEmail(this.props.spToken, (err) => {
      const status = this.err
        ? verificationStatus.ERROR
        : verificationStatus.VERIFIED;

      this.setState({
        status
      });
    });
  }

  _spIfHandler(action) {
    const test = /\s*status\s*(===?|\!==?)\s*[\'\"](\w+)[\'\"]\s*/i;
    const matches = action.match(test);

    if (!matches) {
      return true;
    }

    const inverted = matches[1][0] === '!';
    const isSame = this.state.status === matches[2];

    return inverted ? !isSame : isSame;
  }

  render() {
    const childProps = utils.excludeProps(
      ['className', 'spToken', 'children'],
      {...this.props, ...this.state}
    );

    if (this.props.children) {
      return utils.makeView(this, this._spIfHandler.bind(this));
    }

    return (<DefaultVerifyEmailView {...childProps} />);
  }
}
