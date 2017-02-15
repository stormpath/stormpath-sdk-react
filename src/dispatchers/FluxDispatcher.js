import { Dispatcher } from 'flux';

// Extracted for testability
const defaultDispatcher = new Dispatcher();

export default class FluxDispatcher {
  constructor(reducer, dispatcher = defaultDispatcher) {
    this.dispatcher = dispatcher;
    this.register(reducer);
  }

  register(listener) {
    this.dispatcher.register((data) => {
      if (data && 'actionType' in data) {
        data.type = data.actionType;
        delete data['actionType'];
      }

      listener(data);
    });
  }

  dispatch(event) {
    this.dispatcher.dispatch({
      actionType: event.type,
      options: event.options,
      callback: event.callback
    });
  }
}
