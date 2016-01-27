import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import Utils from '../utils';
import UserActions from '../actions/UserActions';

class DefaultLoginForm extends React.Component {
  render() {
    return (
      <LoginForm {...this.props}>
        <div className='sp-login-form'>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="spEmail" className="col-xs-12 col-sm-4 control-label">Email</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spUsername" name="username" placeholder="Username or Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="spPassword" className="col-xs-12 col-sm-4 control-label">Password</label>
                  <div className="col-xs-12 col-sm-4">
                    <input type="password" className="form-control" id="spPassword" name="password" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-4">
                    <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to="/forgot" className="pull-right">Forgot Password</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginForm>
    );
  }
}

@ReactMixin.decorate(History)
export default class LoginForm extends React.Component {
  state = {
    fields: {
      username: '',
      password: '',
    },
    errorMessage: null,
    isFormProcessing: false
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

      UserActions.login({
        username: data.username,
        password: data.password
      }, (err, result) => {
        this.setState({ isFormProcessing: false });

        if (err) {
          this.setState({ errorMessage: err.message });
        } else {
          this.history.pushState(null, this.props.redirectTo || '/');
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
    if (element.type === 'input' || element.type === 'textarea') {
      if (element.props.type !== 'submit') {
        switch(element.props.name) {
          case 'login':
          case 'username':
            tryMapField('username');
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
        test = this.state.errorMessage !== null;
        break;
    }

    return test;
  }

  _spBindHandler(action, element) {
    var element = false;

    switch (action) {
      case 'form.errorMessage':
        let className = element.props ? element.props.className : undefined;
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
      return <DefaultLoginForm {...this.props} />;
    }
  }
}
