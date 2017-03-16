import React from 'react';
import { Link } from 'react-router';

import utils from '../utils';
import context from '../context';

import UserActions from '../actions/UserActions';
import LoadingText from '../components/LoadingText';
import SocialLoginButton from '../components/SocialLoginButton';

class DefaultLoginForm extends React.Component {
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
        label: 'Username or Email',
        name: 'login',
        placeholder: 'Username or Email',
        required: true,
        type: 'text'
      }, {
        label: 'Password',
        name: 'password',
        placeholder: 'Password',
        required: true,
        type: 'password'
      }
    ];

    context.userStore.getLoginViewData((err, data) => {
      var fields = null;
      var socialProviders = null;

      if (err) {
        fields = defaultFields;
      } else if (data && data.form) {
        fields = data.form.fields;
        if (!this.props.hideSocial) {
          data.accountStores.forEach((accountStore) => {
            if (!accountStore.provider) {
              return;
            }

            if (!accountStore.authorizeUri) {
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
        <div key="login-button" className="form-group">
          <div className="col-sm-offset-4 col-sm-4">
            <p className="alert alert-danger" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
            <button type="submit" className="btn btn-primary">Login</button>
            <Link to="/forgot" className="pull-right">Forgot Password</Link>
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
              Or sign in using...
            </div>
            <div className="col-sm-offset-4 col-sm-4">
              { providerButtons }
            </div>
          </div>
        );
      }
    }

    return (
      <LoginForm {...this.props}>
        <div className='sp-login-form'>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-horizontal">
                { fieldMarkup ? fieldMarkup : <LoadingText /> }
              </div>
            </div>
          </div>
        </div>
      </LoginForm>
    );
  }
}

export default class LoginForm extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

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
    e.persist();

    let primaryRedirectTo = this.props.redirectTo;
    let onSubmitSuccess = this.props.onSubmitSuccess;
    let onSubmitError = this.props.onSubmitError;

    let setErrorState = (recentError, newError) => {
      this.setState({
        isFormProcessing: false,
        errorMessage: (newError || recentError).message
      });
    };

    var next = (err, data) => {
      if (err) {
        if (onSubmitError) {
          return onSubmitError({
            data: data,
            error: err
          }, setErrorState.bind(this, err));
        }

        return setErrorState(err);
      }

      // If the user didn't specify any data,
      // then simply default to what we have in state.
      data = data || this.state.fields;

      UserActions.login({
        login: data.username,
        password: data.password
      }, (err, result) => {
        if (err) {
          if (onSubmitError) {
            return onSubmitError({
              data: data,
              error: err
            }, setErrorState.bind(this, err));
          }

          return setErrorState(err);
        }

        let performRedirect = this._performRedirect.bind(this, primaryRedirectTo);

        if (onSubmitSuccess) {
          return onSubmitSuccess({
            data: data,
            result: result
          }, performRedirect);
        }

        performRedirect();
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

  _performRedirect(primaryRedirectTo) {
    var router = context.getRouter();
    var homeRoute = router.getHomeRoute();
    var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
    var redirectTo = primaryRedirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

    this.context.router.push(redirectTo);
  }

  _mapFormFieldHandler(element, tryMapField) {
    let tryMapFormField = (name) => {
      switch(element.props.name) {
        case 'login':
        case 'username':
          tryMapField('username');
          break;
        case 'password':
          tryMapField('password');
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
      let selectedProps = utils.excludeProps(['redirectTo', 'hideSocial', 'onSubmit', 'onSubmitError', 'onSubmitSuccess', 'children'], this.props);

      return (
        <form onSubmit={this.onFormSubmit.bind(this)} {...selectedProps}>
          {utils.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))}
        </form>
      );
    } else {
      return <DefaultLoginForm {...this.props} />;
    }
  }
}
