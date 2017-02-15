import chai, {expect} from 'chai';
import spies from 'chai-spies';

import BaseStore from '../../src/stores/BaseStore';

chai.use(spies);

describe('BaseStore', () => {
  let store;

  before(() => {
    store = new BaseStore();

    chai.spy.on(store, 'emit');
    chai.spy.on(store, 'on');
    chai.spy.on(store, 'removeListener');
  });

  it('should emit a `changed` event on .emitChange()', () => {
    const value = value;

    store.emitChange(value);

    expect(store.emit).to.have.been.calledOnce;
    expect(store.emit).to.have.been.called.with.exactly('changed', value);
  });

  it('should add a `changed` event listener on .addChangeListener()', () => {
    const cb = () => ({});

    store.addChangeListener(cb);

    expect(store.on).to.have.been.calledOnce;
    expect(store.on).to.have.been.called.with.exactly('changed', cb);
  });

  it('should remove a `changed` event listener on .removeChangeListener()', () => {
    const cb = () => ({});

    store.removeChangeListener(cb);

    expect(store.removeListener).to.have.been.calledOnce;
    expect(store.removeListener).to.have.been.called.with.exactly('changed', cb);
  });
});
