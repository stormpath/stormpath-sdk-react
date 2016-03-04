import React from 'react';
import ReactMixin from 'react-mixin';
import { History, Link } from 'react-router';

import utils from '../utils';
import context from './../context';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

class DefaultUserProfileForm extends React.Component {
  state = {
    showPasswordVerification: false
  };

  onPasswordChanged(e) {
    this.setState({
      showPasswordVerification: e.target.value.length > 0
    });
  }

  render() {
    return (
      <UserProfileForm {...this.props}>
        <div className='sp-update-profile-form'>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="givenName" className="col-xs-12 col-sm-4 control-label">First name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input type="text" className="form-control" id="givenName" name="givenName" placeholder="First name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="surname" className="col-xs-12 col-sm-4 control-label">Last name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input type="text" className="form-control" id="surname" name="surname" placeholder="Last name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                  <div className="col-xs-12 col-sm-4">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                  <div className="col-xs-12 col-sm-4">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={ this.onPasswordChanged.bind(this) } />
                  </div>
                </div>
                <div >
                  { this.state.showPasswordVerification ?
                      <div className="form-group">
                        <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Existing password</label>
                        <div className="col-xs-12 col-sm-4">
                          <input type="password" className="form-control" id="existingPassword" name="existingPassword" placeholder="Existing password" required />
                        </div>
                      </div>
                    :
                      null
                  }
                </div>
                <div key="update-button" className="form-group">
                  <div className="col-sm-offset-4 col-sm-4">
                    <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
                    <p className="alert alert-success" spIf="form.successful">Profile updated.</p>
                    <button type="submit" className="btn btn-primary">
                      <span spIf="!form.processing">Update</span>
                      <span spIf="form.processing">Updating...</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserProfileForm>
    );
  }
}

@ReactMixin.decorate(History)
export default class UserProfileForm extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  state = {
    fields: {},
    defaultFields: this.context.user,
    errorMessage: null,
    isFormProcessing: false,
    isFormSuccessful: false
  };

  _updateSessionData = (data) => {
    var sessionStore = context.sessionStore;

    if (!sessionStore.empty()) {
      var hasChanged = false;
      var updatedSession = utils.clone(sessionStore.get());

      for (var key in data) {
        if (key in updatedSession) {
          if (updatedSession[key] != data[key]) {
            hasChanged = true;
            updatedSession[key] = data[key];
          }
        }
      }

      if (hasChanged) {
        sessionStore.set(updatedSession);
      }
    }
  };

  _onFormSubmit(e) {
    e.preventDefault();

    var next = (err, data) => {
      if (err) {
        return this.setState({
          isFormProcessing: false,
          isFormSuccessful: false,
          errorMessage: err.message
        });
      }

      // If the user didn't specify any data,
      // then simply default to what we have in state.
      data = data || this.state.fields;

      UserActions.updateProfile(data, (err, result) => {
        if (err) {
          return this.setState({
            isFormProcessing: false,
            isFormSuccessful: false,
            errorMessage: err.message
          });
        }

        this._updateSessionData(data);

        this.setState({
          isFormProcessing: false,
          isFormSuccessful: true,
          errorMessage: null
        });
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
    var defaultValue = this.state.defaultFields[element.props.name];

    // Only support input fields, to begin with.
    if (element.type === 'input') {
      if (element.props.type === 'submit') {
        return;
      }

      tryMapField(element.props.name, defaultValue);
    }
  }

  _spIfHandler(action, element) {
    var test = null;

    switch (action) {
      case 'form.successful':
        test = this.state.isFormSuccessful;
        break;
      case 'form.processing':
        test = this.state.isFormProcessing;
        break;
      case 'form.error':
        test = !!this.state.errorMessage;
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
        <form onSubmit={this._onFormSubmit.bind(this)}>
          {utils.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))}
        </form>
      );
    } else {
      return <DefaultUserProfileForm {...this.props} />;
    }
  }
}
