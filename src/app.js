import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';

import Context from './Context';

class App extends EventEmitter {
  constructor(context) {
    super();
    this.context = context;
  }

  init(options) {
    options = options || {};

    // If we don't specify a dispatcher, then just create a new one.
    this.context.setDispatcher(options.dispatcher || new Dispatcher());

    if (options.endpoints) {
      this.context.setEndpoints(options.endpoints);
    }

    this.emit('ready', this.context);
  }
}

export default new App(Context.getInstance())
