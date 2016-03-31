import BaseStore from './BaseStore';

import utils from '../utils';

export default class SessionStore extends BaseStore {
  session = undefined;

  get() {
    return this.session;
  }

  set(session) {
    if (session && session.groups && session.groups.href) {
      session.groups = utils.getEnabledGroups(session.groups);
    }

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
