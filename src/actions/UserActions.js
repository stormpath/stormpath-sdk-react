import Context from './../Context';
import UserConstants from './../constants/UserConstants';

class UserActions {
  constructor(context) {
    this.context = context;
  }

  login(options, callback) {
    this.context.getDispatcher().dispatch({
      actionType: UserConstants.USER_LOGIN,
      options: options,
      callback: callback
    });
  }

  register(options, callback) {
    this.context.getDispatcher().dispatch({
      actionType: UserConstants.USER_REGISTER,
      options: options,
      callback: callback
    });
  }

  forgotPassword(options, callback) {
    this.context.getDispatcher().dispatch({
      actionType: UserConstants.USER_FORGOT_PASSWORD,
      options: options,
      callback: callback
    });
  }

  verifyEmail(spToken, callback) {
    this.context.getDispatcher().dispatch({
      actionType: UserConstants.USER_VERIFY_EMAIL,
      options: {
        spToken: spToken
      },
      callback: callback
    });
  }

  changePassword(options, callback) {
    this.context.getDispatcher().dispatch({
      actionType: UserConstants.USER_CHANGE_PASSWORD,
      options: options,
      callback: callback
    });
  }

  set(data) {
    this.context.getDispatcher().dispatch({
      actionType: UserConstants.USER_SET,
      data: data
    });
  }

  logout(callback) {
    this.context.getDispatcher().dispatch({
      actionType: UserConstants.USER_LOGOUT,
      callback: callback
    });
  }
}

export default new UserActions(Context.getInstance())
