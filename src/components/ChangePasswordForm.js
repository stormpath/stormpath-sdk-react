import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import utils from '../utils';
import LoginLink from '../components/LoginLink';
import LoadingText from '../components/LoadingText';
import UserActions from '../actions/UserActions';

class DefaultChangePasswordForm extends React.Component {
  render() {
    return (
      <ChangePasswordForm {...this.props}>
        <div className='sp-change-password-form'>
          <div className="row" >
            <div className="col-sm-offset-4 col-xs-12 col-sm-4" spIf="form.sent">
              <p className="alert alert-warning text-center" spIf="form.processing">
                We are verifying your change password request...
              </p>
              <p className="alert alert-success" spIf="form.success">Your new password has been set. Please <LoginLink />.</p>
              <div className="alert alert-danger" spIf="form.error">
                This password reset link is not valid.  You may request another link by <a href="/forgot">clicking here</a>.
              </div>
            </div>
            <div className="col-xs-12" spIf="!form.sent">
              <div className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="spPassword" className="col-xs-12 col-sm-4 control-label">New Password</label>
                  <div className="col-xs-12 col-sm-4">
                    <input id="spPassword" type="password" name="password" className="form-control" placeholder="New Password" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="spConfirmPassword" className="col-xs-12 col-sm-4 control-label">Confirm New Password</label>
                  <div className="col-xs-12 col-sm-4">
                    <input id="spConfirmPassword" type="password" name="confirmPassword" className="form-control" placeholder="Confirm New Password" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-4">
                    <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
                    <button type="submit" className="btn btn-primary">Set New Password</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ChangePasswordForm>
    );
  }
}

@ReactMixin.decorate(History)
export default class ChangePasswordForm extends React.Component {
  state = {
    spToken: null,
    fields: {
      password: '',
      confirmPassword: ''
    },
    errorMessage: null,
    isFormProcessing: false,
    isFormSent: false
  };

  constructor(...args) {
    super(...args);
    this.state.spToken = this.props.spToken;
  }

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

      if (data.confirmPassword && data.password !== data.confirmPassword) {
        return this.setState({
          isFormProcessing: false,
          errorMessage: 'Passwords does not match.'
        });
      }

      this.setState({
        isFormSent: true
      });

      UserActions.changePassword(this.state.fields, (err) => {
        this.setState({
          isFormProcessing: false,
          errorMessage: err ? err.message : null
        });
      });
    };

    this.setState({
      isFormSent: false,
      isFormProcessing: true,
      errorMessage: null
    });

    var data = this.state.fields;

    if (this.state.spToken) {
      data.sptoken = this.props.spToken;
    }

    if (this.props.onSubmit) {
      e.data = data;
      this.props.onSubmit(e, next);
    } else {
      next(null, data);
    }
  }

  _mapFormFieldHandler(element, tryMapField) {
    if (element.type === 'input' || element.type === 'textarea') {
      if (element.props.type !== 'submit') {
        switch(element.props.name) {
          case 'password':
            tryMapField('password');
            break;
          case 'confirmPassword':
            tryMapField('confirmPassword');
            break;
        }
      }
    }
  }

  _spIfHandler(action, element) {
    var test = null;

    switch (action) {
      case 'form.success':
        test = this.state.isFormSent && !this.state.isFormProcessing && this.state.errorMessage === null;
        break;
      case 'form.processing':
        test = this.state.isFormProcessing;
        break;
      case 'form.sent':
        test = this.state.isFormSent;
        break;
      case 'form.error':
        test = this.state.errorMessage !== null;
        break;
    }

    return test;
  }

  _spBindHandler(bind, element) {
    var result = false;

    switch (bind) {
      case 'form.errorMessage':
        let className = element.props ? element.props.className : undefined;
        result = <span className={className}>{this.state.errorMessage}</span>;
        break;
    }

    return result;
  }

  render() {
    if (this.props.children) {
      return (
        <form onSubmit={this.onFormSubmit.bind(this)}>
          {utils.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))}
        </form>
      );
    } else {
      return <DefaultChangePasswordForm {...this.props} />;
    }
  }
}
