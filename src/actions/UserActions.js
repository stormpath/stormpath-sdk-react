import context from './../context';
import UserConstants from './../constants/UserConstants';

function dispatch(event) {
  setTimeout(() => {
    context.getDispatcher().dispatch(event);
  }, 0);
}

function resolveActionParams(options, settings, callback) {
  if (typeof options === 'function') {
    return [{}, {}, callback];
  }

  if (typeof settings === 'function' && typeof callback === 'undefined') {
    return [options, {}, callback];
  }

  return [options, settings, callback];
}

class UserActions {
  login(options, settings, callback) {
    [options, settings, callback] = resolveActionParams(options, settings, callback);

    dispatch({
      type: UserConstants.USER_LOGIN,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  register(options, settings, callback) {
    [options, settings, callback] = resolveActionParams(options, settings, callback);

    dispatch({
      type: UserConstants.USER_REGISTER,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  forgotPassword(options, settings, callback) {
    [options, settings, callback] = resolveActionParams(options, settings, callback);

    dispatch({
      type: UserConstants.USER_FORGOT_PASSWORD,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  verifyEmail(spToken, settings, callback) {
    [options, settings, callback] = resolveActionParams(options, settings, callback);

    dispatch({
      type: UserConstants.USER_VERIFY_EMAIL,
      options: {
        spToken: spToken
      },
      settings: settings,
      callback: callback
    });
  }

  changePassword(options, settings, callback) {
    [options, settings, callback] = resolveActionParams(options, settings, callback);

    dispatch({
      type: UserConstants.USER_CHANGE_PASSWORD,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  updateProfile(data, settings, callback) {
    [options, settings, callback] = resolveActionParams(options, settings, callback);

    dispatch({
      type: UserConstants.USER_UPDATE_PROFILE,
      options: {
        data: data
      },
      settings: settings,
      callback: callback
    });
  }

  set(data) {
    dispatch({
      type: UserConstants.USER_SET,
      options: {
        data: data
      }
    });
  }

  logout(settings, callback) {
    if (typeof settings === 'function' && typeof callback === 'undefined') {
      callback = settings;
      settings = {};
    }

    dispatch({
      type: UserConstants.USER_LOGOUT,
      callback: callback,
      settings: settings
    });
  }
}

export default new UserActions()
