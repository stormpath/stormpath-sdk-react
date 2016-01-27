import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import Utils from '../utils';
import LoginLink from '../components/LoginLink';
import UserActions from '../actions/UserActions';

class DefaultResetPasswordForm extends React.Component {
  render() {
    return (
      <ResetPasswordForm {...this.props}>
        <div className='sp-reset-password-form'>
          <div className="row">
            <div className="col-sm-offset-4 col-xs-12 col-sm-4" showWhen="form.sent">
              <p className="alert alert-success">
                We have sent a password reset link to the email address of the account that you specified.
                Please check your email for this message, then click on the link.
              </p>
              <p className="pull-right">
                <LoginLink>Back to Login</LoginLink>
              </p>
            </div>
            <div className="col-xs-12" showWhen="!form.sent">
              <div className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="spEmail" className="col-xs-12 col-sm-4 control-label">Email or Username</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spEmail" name="email" placeholder="Your Email Address" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-xs-12">
                    <p showWhen="form.error"><span replaceWith="form.errorMessage" /></p>
                    <button type="submit" className="btn btn-primary">Request Password Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResetPasswordForm>
    );
  }
}

@ReactMixin.decorate(History)
export default class ResetPasswordForm extends React.Component {
  state = {
    fields: {
      email: ''
    },
    errorMessage: null,
    isFormProcessing: false,
    isFormSent: false
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

      UserActions.forgotPassword(this.state.fields, (err) => {
        if (err) {
          this.setState({
            errorMessage: err.message
          });
        } else {
          this.setState({
            isFormSent: true
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
        }
      }
    }
  }

  _showWhenHandler(action, element) {
    var test = null;

    switch (action) {
      case 'form.processing':
        test = this.state.isFormProcessing;
        break;
      case 'form.sent':
        test = this.state.isFormSent;
        break;
      case 'form.error':
        test = !!this.state.errorMessage;
        break;
    }

    return test;
  }

  _replaceWithHandler(action, element) {
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
          {Utils.makeForm(this, this._mapFormFieldHandler.bind(this), this._showWhenHandler.bind(this), this._replaceWithHandler.bind(this))}
        </form>
      );
    } else {
      return <DefaultResetPasswordForm {...this.props} />;
    }
  }
}
