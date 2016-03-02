import context from './../context';
import UserConstants from './../constants/UserConstants';

class UserActions {
  login(options, callback) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_LOGIN,
      options: options,
      callback: callback
    });
  }

  register(options, callback) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_REGISTER,
      options: options,
      callback: callback
    });
  }

  forgotPassword(options, callback) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_FORGOT_PASSWORD,
      options: options,
      callback: callback
    });
  }

  verifyEmail(spToken, callback) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_VERIFY_EMAIL,
      options: {
        spToken: spToken
      },
      callback: callback
    });
  }

  changePassword(options, callback) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_CHANGE_PASSWORD,
      options: options,
      callback: callback
    });
  }

  updateProfile(data, callback) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_UPDATE_PROFILE,
      data: data,
      callback: callback
    });
  }

  set(data) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_SET,
      data: data
    });
  }

  logout(callback) {
    context.getDispatcher().dispatch({
      actionType: UserConstants.USER_LOGOUT,
      callback: callback
    });
  }
}

export default new UserActions()
