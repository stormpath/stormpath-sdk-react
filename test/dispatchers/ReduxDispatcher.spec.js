import chai, {expect} from 'chai';
import spies from 'chai-spies';

import ReduxDispatcher from '../../src/dispatchers/ReduxDispatcher';

chai.use(spies);

describe('ReduxDispatcher', () => {
  let reducer;
  let store;
  let reduxDispatcher;
  let event;

  before(() => {
    reducer = chai.spy();
    store = {
      dispatch: chai.spy()
    };

    reduxDispatcher = new ReduxDispatcher(reducer, store);

    event = {type: 'event'};
  });

  it('should call the reducer and dispatch the event on .dispatch()', () => {
    reduxDispatcher.dispatch(event);

    expect(reducer).to.have.been.calledOnce;
    expect(reducer).to.have.been.called.with.exactly(event);

    expect(store.dispatch).to.have.been.calledOnce;
    expect(store.dispatch).to.have.been.called.with.exactly(event);
  });
});
