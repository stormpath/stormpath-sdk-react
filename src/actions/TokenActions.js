import context from './../context';
import TokenConstants from './../constants/TokenConstants';

function dispatch(event) {
  setTimeout(() => {
    context.getDispatcher().dispatch(event);
  }, 0);
}

class TokenActions {
  set(type, token, callback) {
    dispatch({
      type: TokenConstants.TOKEN_SET,
      options: {
        type: type,
        token: token
      },
      callback: callback
    });
  }

  refresh(token, callback) {
    dispatch({
      type: TokenConstants.TOKEN_REFRESH,
      options: {
        token: token
      },
      callback: callback
    });
  }
}

export default new TokenActions()
