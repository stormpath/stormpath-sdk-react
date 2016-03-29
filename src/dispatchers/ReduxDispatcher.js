import context from './../context';

export default class ReduxDispatcher {
  constructor(reducer, store) {
    this.reducer = reducer;
    this.store = store;
  }

  dispatch(event) {
    this.reducer(event);
    this.store.dispatch(event);
  }
}
