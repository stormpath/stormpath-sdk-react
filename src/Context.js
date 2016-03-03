import SessionStore from './stores/SessionStore';

class Context {
  constructor() {
    this.router = null;
    this.dispatcher = null;
    this.endpoints = null;
    this.sessionStore = new SessionStore();
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

  setEndpoints(endpoints) {
    this.endpoints = endpoints;
  }

  getEndpoints() {
    return this.endpoints || {};
  }
}

export default new Context()
