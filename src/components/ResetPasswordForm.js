import React from 'react';
import { Link } from 'react-router';

import utils from '../utils';
import LoginLink from '../components/LoginLink';
import UserActions from '../actions/UserActions';

class DefaultResetPasswordForm extends React.Component {
  render() {
    return (
      <ResetPasswordForm {...this.props}>
        <div className='sp-reset-password-form'>
          <div className="row">
            <div className="col-sm-offset-4 col-xs-12 col-sm-4" data-spIf="form.sent">
              <p className="alert alert-success">
                We have sent a password reset link to the email address of the account that you specified.
                Please check your email for this message, then click on the link.
              </p>
              <p className="pull-right">
                <LoginLink>Back to Login</LoginLink>
              </p>
            </div>
            <div className="col-xs-12" data-spIf="!form.sent">
              <div className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="spEmail" className="col-xs-12 col-sm-4 control-label">Email or Username</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spEmail" name="email" placeholder="Your Email Address" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-xs-12">
                    <p data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
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
    e.persist();

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

      UserActions.forgotPassword(data, (err) => {
        if (err) {
          this.setState({
            isFormProcessing: false,
            errorMessage: err.message
          });
        } else {
          this.setState({
            isFormSent: true,
            isFormProcessing: false,
            errorMessage: null
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
    let tryMapFormField = (name) => {
      switch(name) {
        case 'email':
          tryMapField('email');
          break;
      }
    };

    utils.mapFormField(element, tryMapFormField);
  }

  _spIfHandler(action, element) {
    var test = null;

    switch (action) {
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
      var selectedProps = utils.excludeProps(['onSubmit', 'children'], this.props);

      return (
        <form onSubmit={this.onFormSubmit.bind(this)} {...selectedProps}>
          {utils.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))}
        </form>
      );
    } else {
      return <DefaultResetPasswordForm {...this.props} />;
    }
  }
}
