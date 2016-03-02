import BaseStore from './BaseStore';

export default class SessionStore extends BaseStore {
  session = undefined;

  get() {
    return this.session;
  }

  set(session) {
    if (JSON.stringify(this.session) !== JSON.stringify(session)) {
      this.session = session;
      this.emitChange(session);
    }
  }

  empty() {
    return this.session === undefined;
  }

  reset() {
    if (this.session !== undefined) {
      this.session = undefined;
      this.emitChange(undefined);
    }
  }
}
