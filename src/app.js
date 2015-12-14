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

    // If there's no specified dispatcher, then just create our own one.
    this.context.setDispatcher(options.dispatcher || new Dispatcher());

    // If there are any endpoints specified, then set these.
    if (options.endpoints) {
      this.context.setEndpoints(options.endpoints);
    }

    this.emit('ready', this.context);
  }
}

export default new App(Context.getInstance())
