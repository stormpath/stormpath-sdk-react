import chai, {expect} from 'chai';
import spies from 'chai-spies';

import FluxDispatcher from '../../src/dispatchers/FluxDispatcher';

chai.use(spies);

describe('FluxDispatcher', () => {
  let reducer;
  let dispatcher;
  let fluxDispatcher;

  beforeEach(function() {
    reducer = chai.spy();

    dispatcher = {
      register: chai.spy(),
      dispatch: chai.spy(),
    };

    fluxDispatcher = new FluxDispatcher(reducer, dispatcher);
  });

  describe('constructor', () => {
    it('should register the reducer to the dispatcher when constructed', () => {
      expect(dispatcher.register).to.have.been.calledOnce;
      expect(fluxDispatcher.dispatcher).to.equal(dispatcher);
    });
  });

  describe('dispatch method', () => {
    let event;

    before(() => {
      event = {
        type: 'eventType',
        options: {
          optionable: true
        },
        callback: () => ({})
      };
    });

    it('should call the set dispatcher with the destructured data', () => {
      fluxDispatcher.dispatch(event);

      expect(dispatcher.dispatch).to.have.been.calledOnce;
      expect(dispatcher.dispatch).to.have.been.called.with.exactly({
        actionType: event.type,
        options: event.options,
        callback: event.callback,
      });
    });
  });
});
