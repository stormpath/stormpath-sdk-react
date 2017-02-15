import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

export default class StorageMock {
  constructor(name) {
    this.name = name;
    this._storage = {};

    this.getItem = chai.spy(this._get.bind(this));
    this.setItem = chai.spy(this._set.bind(this));
    this.removeItem = chai.spy(this._remove.bind(this));
  }

  _get(name) {
    return this._storage(name);
  }

  _set(name, value) {
    this._storage[name] = String(value);
  }

  _remove(name) {
    delete this._storage[name];
  }
}
