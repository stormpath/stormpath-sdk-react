import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';

import context from './context';

class App extends EventEmitter {
  constructor() {
    super();
    this.initialized = false;
  }

  isInitialized() {
    return this.initialized;
  }

  init(options) {
    options = options || {};

    if (this.isInitialized()) {
      throw new Error('React Stormpath already initialized.');
    }

    this.initialized = true;

    // If there's no specified dispatcher, then just create our own one.
    context.setDispatcher(options.dispatcher || new Dispatcher());

    // If there are any endpoints specified, then set these.
    if (options.endpoints) {
      context.setEndpoints(options.endpoints);
    }

    this.emit('ready');
  }
}

export default new App()
