import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import Utils from '../utils';
import LoginLink from '../components/LoginLink';
import UserActions from '../actions/UserActions';

class DefaultRegistrationForm extends React.Component {
  render() {
    return (
      <RegistrationForm {...this.props}>
        <div className='sp-login-form'>
          <div className="row" spIf="account.created">
            <div className="col-sm-offset-4 col-xs-12 col-sm-4">
              <p className="alert alert-success" spIf="account.enabled">
                Your account has been created. <LoginLink>Login Now</LoginLink>.
              </p>
              <div spIf="!account.enabled">
                <p className="alert alert-success">Your account has been created. Please check your email for a verification link.</p>
                <p className="pull-right">
                  <LoginLink>Back to Login</LoginLink>
                </p>
              </div>
            </div>
          </div>
          <div className="row" spIf="!account.created">
            <div className="col-xs-12">
              <div className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="spFirstName" className="col-xs-12 col-sm-4 control-label">First Name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spFirstName" placeholder="First Name" name="givenName" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="spLastName" className="col-xs-12 col-sm-4 control-label">Last Name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spLastName" placeholder="Last Name" name="surname" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="spEmail" className="col-xs-12 col-sm-4 control-label">Email</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spEmail" placeholder="Email" name="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="spPassword" className="col-xs-12 col-sm-4 control-label">Password</label>
                  <div className="col-xs-12 col-sm-4">
                    <input type="password" className="form-control" id="spPassword" placeholder="Password" name="password" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-4">
                    <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RegistrationForm>
    );
  }
}

@ReactMixin.decorate(History)
export default class RegistrationForm extends React.Component {
  state = {
    fields: {
      givenName: '',
      surname: '',
      email: '',
      password: ''
    },
    errorMessage: null,
    isFormProcessing: false,
    isAccountCreated: false,
    isAccountEnabled: false
  };

  onFormSubmit(e) {
    e.preventDefault();

    var next = (err, data) => {
      if (err) {
        return this.setState({
          isFormProcessing: false,
          errorMessage: err.message
        });
      }

      // If the user didn't specify any data,
      // then simply default to what we have in state.
      data = data || this.state.fields;

      UserActions.register(data, (err, result) => {
        if (err) {
          this.setState({
            isFormProcessing: false,
            errorMessage: err.message
          });
        } else if (result.status === 'ENABLED') {
          UserActions.login({
            username: data.email || data.username,
            password: data.password
          }, (err) => {
            if (err) {
              return this.setState({
                isFormProcessing: false,
                isAccountCreated: false,
                errorMessage: err.message
              });
            }

            this.setState({
              isFormProcessing: false,
              isAccountCreated: true,
              isAccountEnabled: true
            });
          });
        } else {
          this.setState({
            isFormProcessing: false,
            isAccountCreated: true,
            isAccountEnabled: false
          });
        }
      });
    };

    this.setState({
      isFormProcessing: true
    });

    if (this.props.onSubmit) {
      e.data = this.state.fields;
      this.props.onSubmit(e, next);
    } else {
      next(null, this.state.fields);
    }
  }

  _mapFormFieldHandler(element, tryMapField) {
    if (['input', 'textarea'].indexOf(element.type) > -1) {
      if (element.props.type !== 'submit') {
        switch(element.props.name) {
          case 'email':
            tryMapField('email');
            break;
          case 'login':
          case 'username':
            tryMapField('username');
            break;
          case 'givenName':
          case 'firstName':
            tryMapField('givenName');
            break;
          case 'surname':
          case 'lastName':
            tryMapField('surname');
            break;
          case 'password':
            tryMapField('password');
            break;
        }
      }
    }
  }

  _spIfHandler(action, element) {
    var test = null;

    switch (action) {
      case 'form.processing':
        test = this.state.isFormProcessing;
        break;
      case 'form.error':
        test = !!this.state.errorMessage;
        break;
      case 'account.created':
        test = this.state.isAccountCreated;
        break;
      case 'account.enabled':
        test = this.state.isAccountEnabled;
        break;
    }

    return test;
  }

  _spBindHandler(action, element) {
    var element = false;

    switch (action) {
      case 'form.errorMessage':
        var className = element.props ? element.props.className : undefined;
        element = <span className={className}>{this.state.errorMessage}</span>;
        break;
    }

    return element;
  }

  render() {
    if (this.props.children) {
      return (
        <form onSubmit={this.onFormSubmit.bind(this)}>
          {Utils.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))}
        </form>
      );
    } else {
      return <DefaultRegistrationForm {...this.props} />;
    }
  }
}
