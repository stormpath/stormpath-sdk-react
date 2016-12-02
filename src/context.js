import SessionStore from './stores/SessionStore';

class Context {
  constructor() {
    this.router = null;
    this.dispatcher = null;
    this.sessionStore = null;
    this.userStore = null;
  }

  setRouter(router) {
    this.router = router;
  }

  getRouter() {
    return this.router;
  }

  setDispatcher(dispatcher) {
    this.dispatcher = dispatcher;
  }

  getDispatcher() {
    return this.dispatcher;
  }

  setSessionStore(sessionStore) {
    this.sessionStore = sessionStore;
  }

  getSessionStore() {
    return this.sessionStore;
  }

  setUserStore(userStore) {
    this.userStore = userStore;
  }

  getUserStore() {
    return this.userStore;
  }
}

export default new Context()
