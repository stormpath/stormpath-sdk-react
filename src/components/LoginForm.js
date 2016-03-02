import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import utils from '../utils';
import context from '../context';

import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import LoadingText from '../components/LoadingText';

class DefaultLoginForm extends React.Component {
  state = {
    fields: null
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

    UserStore.getLoginViewData((err, data) => {
      this.setState({
        fields: data && data.form ? data.form.fields : defaultFields
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
            <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
            <button type="submit" className="btn btn-primary">Login</button>
            <Link to="/forgot" className="pull-right">Forgot Password</Link>
          </div>
        </div>
      );
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
        if (err) {
          return this.setState({
            isFormProcessing: false,
            errorMessage: err.message
          });
        }

        this._performRedirect();
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
    var redirectTo = this.props.redirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

    this.history.pushState(null, redirectTo);
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
      return <DefaultLoginForm {...this.props} />;
    }
  }
}
