import utils from '../utils';
import BaseStore from './BaseStore';
import TokenActions from '../actions/TokenActions';

export default class TokenStore extends BaseStore {
  constructor(storage, namespace) {
    super();
    this.storage = storage;
    this.namespace = namespace;
  }

  _getKey(type) {
    return this.namespace + ':' + type;
  }

  get(type) {
    return this.storage.get(this._getKey(type));
  }

  set(type, token) {
    return this.get(type).then((storedToken) => {
      if (storedToken !== token) {
        this.storage.set(this._getKey(type), token).then(() => {
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
        return this.storage
          .remove(this._getKey(type))
          .then(() => {
            this.emitChange({
              type: type,
              action: 'reset'
            });
          });
      }
    });
  }
}
