import utils from '../utils';
import BaseStore from './BaseStore';
import TokenActions from '../actions/TokenActions';

export default class TokenStore extends BaseStore {
  constructor(storage, namespace) {
    super();
    this.storage = storage;
    this.namespace = namespace;
    this.expirationTimerIds = {};
  }

  _getKey(type) {
    return this.namespace + ':' + type;
  }

  _expireToken(type) {
    delete this.expirationTimerIds[type];

    this.storage.remove(this._getKey(type));

    let refreshToken = this.storage.get(this._getKey('refresh_token'));

    if (refreshToken) {
      TokenActions.refresh(refreshToken, (err, result) => {
        if (err) {
          return;
        }

        TokenActions.set('access_token', result.access_token);
        TokenActions.set('refresh_token', result.refresh_token);
      });
    }
  }

  _manageTokenExpiration(type, token) {
    if (type !== 'access_token') {
      return;
    }

    let parsedToken = utils.parseJwt(token);

    if (!parsedToken) {
      return false;
    }

    if (this.expirationTimerIds[type]) {
      clearTimeout(this.expirationTimerIds[type]);
      delete this.expirationTimerIds[type];
    }

    if (parsedToken.body.exp) {
      let expireInSeconds = parsedToken.body.exp - utils.getEpochTime();

      if (expireInSeconds <= 0) {
        return this._expireToken(type);
      }

      this.expirationTimerIds[type] = setTimeout(
        this._expireToken.bind(this, type),
        expireInSeconds * 1000
      );
    }
  }

  get(type) {
    let token = this.storage.get(this._getKey(type));

    if (token && !(type in this.expirationTimerIds)) {
      this._manageTokenExpiration(type, token);
    }

    return token;
  }

  set(type, token, ttl) {
    if (this.get(type) !== token) {
      this._manageTokenExpiration(type, token);

      this.storage.set(this._getKey(type), token);

      this.emitChange({
        type: type,
        action: 'set',
        value: token
      });
    }
  }

  empty(type) {
    return this.get(type) === undefined;
  }

  reset(type) {
    if (!this.empty(type)) {
      if (this.expirationTimerIds[type]) {
        clearTimeout(this.expirationTimerIds[type]);
        delete this.expirationTimerIds[type];
      }

      this.storage.remove(this._getKey(type));
      this.emitChange({
        type: type,
        action: 'reset',
        value: undefined
      });
    }
  }
}
