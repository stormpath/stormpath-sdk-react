let contextInstance = null;

export default class Context {
  constructor() {
    if (contextInstance) {
      return contextInstance;
    }

    this.router = null;
    this.dispatcher = null;
    this.endpoints = null;

    contextInstance = this;
  }

  static getInstance() {
    if (!contextInstance) {
      return new Context();
    }
    return contextInstance;
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
