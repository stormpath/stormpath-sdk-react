import context from './../context';
import TokenConstants from './../constants/TokenConstants';

/* istanbul ignore next */
function dispatch(event) {
  setTimeout(() => {
    context.getDispatcher().dispatch(event);
  }, 0);
}

class TokenActions {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  // Allows for setting mock dispatch in tests
  setDispatch(dispatch) {
    this.dispatch = dispatch;
  }

  set(type, token, callback) {
    this.dispatch({
      type: TokenConstants.TOKEN_SET,
      options: {
        type: type,
        token: token
      },
      callback: callback
    });
  }

  refresh(token, callback) {
    this.dispatch({
      type: TokenConstants.TOKEN_REFRESH,
      options: {
        token: token
      },
      callback: callback
    });
  }
}

export default new TokenActions(dispatch)
