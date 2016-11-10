export default class LocalStorage {
  constructor(type) {
    this.storage = type === 'local' ? localStorage : sessionStorage;
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    this.storage.setItem(key, value);
  }

  remove(key) {
    return this.storage.removeItem(key);
  }
}
