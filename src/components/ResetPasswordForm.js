import React from 'react';

import LoginLink from './LoginLink';
import UserActions from '../actions/UserActions';

export default class ResetPasswordForm extends React.Component {
  state = {
    fields: {
      email: ''
    },
    isRequestSent: false,
    errorMessage: null
  };

  onFormSubmit(e) {
    var self = this;
    e.preventDefault();

    UserActions.forgotPassword(this.state.fields, function (err) {
      if (err) {
        self.setState({ errorMessage: err.message });
        return;
      }
      self.setState({ isRequestSent: true });
    });
  }

  onEmailChanged(e) {
    this.state.fields.email = e.target.value;
  }

  render() {
    return (
      <div className="row">
        { this.state.isRequestSent ?
          <div className="col-sm-offset-4 col-xs-12 col-sm-4">
            { this.state.errorMessage === null ?
              <div>
                <p className="alert alert-success">
                  We have sent a password reset link to the email address of the account that you specified.
                  Please check your email for this message, then click on the link.
                </p>
                <p className="pull-right">
                  <LoginLink>Back to Login</LoginLink>
                </p>
              </div>
            :
              <div className="alert alert-danger">
                Sorry, there was a problem with that email or username.  Please try again.
              </div>
            }
          </div>
        :
          <div className="col-xs-12">
            <form className="form-horizontal" onSubmit={this.onFormSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="spEmail" className="col-xs-12 col-sm-4 control-label">Email or Username</label>
                <div className="col-xs-12 col-sm-4">
                  <input className="form-control" id="spEmail" onChange={this.onEmailChanged.bind(this)} placeholder="Your Email Address" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-4 col-xs-12">
                  { this.state.errorMessage ?
                    <p className="text-danger">{ this.state.errorMessage }</p>
                  : null }
                  <button type="submit" className="btn btn-primary">Request Password Reset</button>
                </div>
              </div>
            </form>
          </div>
        }
      </div>
    );
  }
}
