import context from './../context';
import UserConstants from './../constants/UserConstants';

function dispatch(event) {
  setTimeout(() => {
    context.getDispatcher().dispatch(event);
  }, 0);
}

class UserActions {
  login(options, callback) {
    dispatch({
      type: UserConstants.USER_LOGIN,
      options: options,
      callback: callback
    });
  }

  register(options, callback) {
    dispatch({
      type: UserConstants.USER_REGISTER,
      options: options,
      callback: callback
    });
  }

  forgotPassword(options, callback) {
    dispatch({
      type: UserConstants.USER_FORGOT_PASSWORD,
      options: options,
      callback: callback
    });
  }

  verifyEmail(spToken, callback) {
    dispatch({
      type: UserConstants.USER_VERIFY_EMAIL,
      options: {
        spToken: spToken
      },
      callback: callback
    });
  }

  changePassword(options, callback) {
    dispatch({
      type: UserConstants.USER_CHANGE_PASSWORD,
      options: options,
      callback: callback
    });
  }

  updateProfile(data, callback) {
    dispatch({
      type: UserConstants.USER_UPDATE_PROFILE,
      options: {
        data: data
      },
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

  logout(callback) {
    dispatch({
      type: UserConstants.USER_LOGOUT,
      callback: callback
    });
  }
}

export default new UserActions()
