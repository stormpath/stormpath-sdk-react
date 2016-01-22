import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import Context from './../Context';
import UserActions from '../actions/UserActions';

@ReactMixin.decorate(History)
export default class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    isProcessing: false,
    errorMessage: null
  };

  onFormSubmit(e) {
    e.preventDefault();

    var self = this;

    var redirectTo = this.props.redirectTo || '/';

    self.setState({ isProcessing: true });

    UserActions.login({
      username: this.state.username,
      password: this.state.password
    }, function (err, result) {
      self.setState({ isProcessing: false });

      if (err) {
        self.setState({ errorMessage: err.message });
      } else {
        self.history.pushState(null, redirectTo);
      }
    });
  }

  onUsernameChanged(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className='login'>
        <div className="row">
          <div className="col-xs-12">
            <form className="form-horizontal" onSubmit={this.onFormSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="spEmail" className="col-xs-12 col-sm-4 control-label">Email</label>
                <div className="col-xs-12 col-sm-4">
                  <input className="form-control" id="spUsername" placeholder="Username or Email" onChange={this.onUsernameChanged.bind(this)} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="spPassword" className="col-xs-12 col-sm-4 control-label">Password</label>
                <div className="col-xs-12 col-sm-4">
                  <input type="password" className="form-control" id="spPassword" placeholder="Password" onChange={this.onPasswordChanged.bind(this)} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-4 col-sm-4">
                  { this.state.errorMessage === null ?
                    null : <p className="text-danger">{this.state.errorMessage}</p>
                  }
                  <button type="submit" className="btn btn-primary" disabled={this.state.isProcessing}>Login</button>
                  <Link to="/forgot" className="pull-right">Forgot Password</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
