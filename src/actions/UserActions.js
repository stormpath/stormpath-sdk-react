import context from './../context';
import UserConstants from './../constants/UserConstants';

function dispatch(event) {
  setTimeout(() => {
    context.getDispatcher().dispatch(event);
  }, 0);
}

class UserActions {
  login(options, settings, callback) {
    dispatch({
      type: UserConstants.USER_LOGIN,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  register(options, settings, callback) {
    dispatch({
      type: UserConstants.USER_REGISTER,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  forgotPassword(options, settings, callback) {
    dispatch({
      type: UserConstants.USER_FORGOT_PASSWORD,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  verifyEmail(spToken, settings, callback) {
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
    dispatch({
      type: UserConstants.USER_CHANGE_PASSWORD,
      options: options,
      settings: settings,
      callback: callback
    });
  }

  updateProfile(data, callback) {
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
    dispatch({
      type: UserConstants.USER_LOGOUT,
      callback: callback,
      settings: settings
    });
  }
}

export default new UserActions()
