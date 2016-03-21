import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import utils from '../utils';
import context from './../context';

import LoginLink from '../components/LoginLink';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import LoadingText from '../components/LoadingText';
import SocialLoginButton from '../components/SocialLoginButton';

class DefaultRegistrationForm extends React.Component {
  state = {
    fields: null,
    socialProviders: null
  };

  componentDidMount() {
    if (this.state.fields !== null) {
      return;
    }

    var defaultFields = [
      {
        label: 'First Name',
        name: 'givenName',
        placeholder: 'First Name',
        required: true,
        type: 'text'
      },
      {
        label: 'Last Name',
        name: 'surname',
        placeholder: 'Last Name',
        required: true,
        type: 'text'
      },
      {
        label: 'Email',
        name: 'email',
        placeholder: 'Email',
        required: true,
        type: 'email'
      },
      {
        label: 'Password',
        name: 'password',
        placeholder: 'Password',
        required: true,
        type: 'password'
      }
    ];



    UserStore.getRegisterViewData((err, data) => {
      var fields = null;
      var socialProviders = null;

      if (data && data.form) {
        fields = data.form.fields;
        if (!this.props.hideSocial) {
          data.accountStores.forEach((accountStore) => {
            if (!accountStore.provider) {
              return;
            }

            if (socialProviders === null) {
              socialProviders = [];
            }

            socialProviders.push({
              id: accountStore.provider.providerId
            });
          });
        }
      }

      this.setState({
        fields: fields,
        socialProviders: socialProviders
      });
    });
  }

  render() {
    var fieldMarkup = null;

    if (this.state.fields !== null) {
      fieldMarkup = [];

      this.state.fields.forEach((field, index) => {
        var fieldId = `sp-${field.name}-${index}`;
        fieldMarkup.push(
          <div key={ fieldId } className="form-group">
            <label htmlFor={ fieldId } className="col-xs-12 col-sm-4 control-label">{ field.label }</label>
            <div className="col-xs-12 col-sm-4">
              <input type={ field.type } className="form-control" id={ fieldId } name={ field.name } placeholder={ field.placeholder } required={ field.required } />
            </div>
          </div>
        );
      });

      fieldMarkup.push(
        <div key="register-button" className="form-group">
          <div className="col-sm-offset-4 col-sm-4">
            <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </div>
      );
    }

    if (this.state.socialProviders !== null) {
      var providerButtons = [];

      this.state.socialProviders.forEach((provider, index) => {
        var providerKey = `sp-${provider.id}-${index}`;

        providerButtons.push(
          <SocialLoginButton key={ providerKey } providerId={ provider.id } style={{ marginRight: '5px', marginBottom: '5px' }} />
        );
      });

      if (providerButtons.length) {
        fieldMarkup.push(
          <div key="provider-buttons" className="form-group" style={{ paddingTop: '20px' }}>
            <div className="col-sm-offset-4 col-sm-4" style={{ marginBottom: '10px' }}>
              Or register using...
            </div>
            <div className="col-sm-offset-4 col-sm-4">
              { providerButtons }
            </div>
          </div>
        );
      }
    }

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
                { fieldMarkup ? fieldMarkup : <LoadingText /> }
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
      data = data || this.state.fields;

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

            this._performRedirect();
          });
        } else {
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

  _performRedirect() {
    var router = context.getRouter();
    var homeRoute = router.getHomeRoute();
    var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
    var redirectTo = this.props.redirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

    this.history.pushState(null, redirectTo);
  }

  _mapFormFieldHandler(element, tryMapField) {
    if (['input', 'textarea'].indexOf(element.type) > -1) {
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

  _spBindHandler(bind, element) {
    var result = false;

    switch (bind) {
      case 'form.errorMessage':
        var className = element.props ? element.props.className : undefined;
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
      return <DefaultRegistrationForm {...this.props} />;
    }
  }
}
