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

    return this.storage.remove(this._getKey(type))
      .then(() => this.storage.get(this._getKey('refresh_token')))
      .then((refreshToken) => {
        if (refreshToken) {
          return new Promise((resolve, reject) => {
            TokenActions.refresh(refreshToken, (err, result) => {
              if (err) {
                reject(err);
              }

              TokenActions.set('access_token', result.access_token);
              TokenActions.set('refresh_token', result.refresh_token);

              return result;
            });
          });
        }
      });
  }

  _manageTokenExpiration(type, token) {
    if (type !== 'access_token') {
      return Promise.resolve(token);
    }

    let parsedToken = utils.parseJwt(token);

    if (!parsedToken) {
      return Promise.reject(new Error('Invalid token'));
    }

    if (this.expirationTimerIds[type]) {
      clearTimeout(this.expirationTimerIds[type]);
      delete this.expirationTimerIds[type];
    }

    if (parsedToken.body.exp) {
      let expireInSeconds = parsedToken.body.exp - utils.getEpochTime();

      if (expireInSeconds <= 0) {
        return this._expireToken(type).then((tokens) => tokens[type]);
      }

      this.expirationTimerIds[type] = setTimeout(
        this._expireToken.bind(this, type),
        expireInSeconds * 1000
      );
    }

    return Promise.resolve(token);
  }

  get(type) {
    return this.storage.get(this._getKey(type)).then((token) => {
      if (token && !(type in this.expirationTimerIds)) {
        return this._manageTokenExpiration(type, token);
      }

      return token;
    });

  }

  set(type, token) {
    return this.get(type).then((storedToken) => {
      if (storedToken !== token) {
        this._manageTokenExpiration(type, token).then((token) => (
          this.storage.set(this._getKey(type), token)
        )).then(() => {
          this.emitChange({
            type: type,
            action: 'set',
            value: token
          });
        });
      }
    });
  }

  empty(type) {
    return this.get(type).then((token) => token === undefined);
  }

  reset(type) {
    return this.empty(type).then((isEmpty) => {
      if (!isEmpty) {
        if (this.expirationTimerIds[type]) {
          clearTimeout(this.expirationTimerIds[type]);
          delete this.expirationTimerIds[type];
        }

        return this.storage
          .remove(this._getKey(type))
          .then(() => {
            this.emitChange({
              type: type,
              action: 'reset',
              value: undefined
            });
          });
      }
    });
  }
}
