import React from 'react';

import utils from '../utils';
import LoginLink from '../components/LoginLink';
import UserActions from '../actions/UserActions';

export default class VerifyEmailView extends React.Component {
  state = {
    status: 'VERIFYING'
  };

  componentDidMount() {
    var spToken = this.props.spToken;

    UserActions.verifyEmail(spToken, (err) => {
      if (err) {
        this.setState({
          status: 'ERROR'
        });
      } else {
        this.setState({
          status: 'VERIFIED'
        });
      }
    });
  }

  render() {
    let selectedProps = utils.excludeProps(['className','spToken'], this.props);

    return (
      <div className={"row " + this.props.className} {...selectedProps}>
        <div className="col-sm-offset-4 col-xs-12 col-sm-4">
          {{
            VERIFYING: (
              <p className="alert alert-warning">We are verifying your account.</p>
            ),
            VERIFIED: (
              <p className="alert alert-success">
                Your account has has been verified! <LoginLink>Login Now.</LoginLink>
              </p>
            ),
            ERROR: (
              <div className="alert alert-danger">
                This email verification link is not valid.
              </div>
            )
          }[this.state.status]}
        </div>
      </div>
    );
  }
}
