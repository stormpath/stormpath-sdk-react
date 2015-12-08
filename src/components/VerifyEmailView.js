import React from 'react';

import LoginLink from '../components/LoginLink';
import UserActions from '../actions/UserActions';

export default class VerifyEmailView extends React.Component {
  state = {
    status: 'VERIFYING'
  }

  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    var self = this;
    var spToken = this.props.spToken;

    UserActions.verifyEmail(spToken, function (err) {
      if (err) {
        self.setState({
          status: 'ERROR'
        });
      } else {
        self.setState({
          status: 'VERIFIED'
        });
      }
    });
  }

  render() {
    return (
      <div className="row">
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