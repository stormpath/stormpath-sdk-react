export default class LocalStorage {
  constructor(type) {
    this.storage = type === 'local' ? localStorage : sessionStorage;
  }

  get(key) {
    try {
      return Promise.resolve(this.storage.getItem(key));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  set(key, value) {
    try {
      return Promise.resolve(this.storage.setItem(key, value));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  remove(key) {
    try {
      return Promise.resolve(this.storage.removeItem(key));
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
