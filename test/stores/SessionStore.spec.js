import chai, {expect} from 'chai';
import spies from 'chai-spies';

chai.use(spies);

import SessionStore from '../../src/stores/SessionStore';

describe('SessionStore', () => {
  let sessionStore;

  describe('.set(session)', () => {
    let session;
    let otherSession;

    beforeEach(() => {
      sessionStore = new SessionStore();
      chai.spy.on(sessionStore, 'emitChange');

      sessionStore.session = undefined;

      session = {
        name: 'A',
      };

      otherSession = {
        groups: {
          href: 'groupHref',
          items: [
            {
              name: 'a',
              status: 'ENABLED'
            },
            {
              name: 'b',
              status: 'DISABLED'
            }
          ]
        },
        name: 'B',
      };

    });

    it('should set the session', () => {
      expect(sessionStore.session).not.to.be.ok;

      sessionStore.set(session);

      expect(sessionStore.session).to.be.ok;
      expect(sessionStore.session.name).to.equal(session.name);
    });

    it('should use only enabled groups', () => {
      sessionStore.set(otherSession);

      expect(sessionStore.session).to.be.ok;
      expect(sessionStore.session.groups).to.deep.equal({
        a: true
      });
    });

    it('should emit a changed event when a new session is set', () => {
      sessionStore.set(session);
      expect(sessionStore.emitChange).to.have.been.calledOnce;
      expect(sessionStore.emitChange).to.have.been.called.with.exactly(session);
    });

    it('should not emit a changed event when the smae session is set', () => {
      sessionStore.set(session);
      sessionStore.emitChange.reset(); // Resets the spy internals

      sessionStore.set(session);

      expect(sessionStore.emitChange).not.to.have.been.called;
    });
  });

  describe('.get()', () => {
    let session;

    before(() => {
      sessionStore = new SessionStore();
      session = {name: 'session'};
      sessionStore.set(session);
    });

    it('should retrieve the session', () => {
      expect(sessionStore.get()).to.equal(session);
    });
  });

  describe('.empty()', () => {
    let session;

    before(() => {
      sessionStore = new SessionStore();
      session = {name: 'session'};
    });

    it('should return true if the session is empty', () => {
      expect(sessionStore.empty()).to.be.true;
    });

    it('should return false if the session is set', () => {
      sessionStore.set(session);

      expect(sessionStore.empty()).to.be.false;
    });
  });

  describe('.reset()', () => {
    let session;

    beforeEach(() => {
      sessionStore = new SessionStore();
      session = {name: 'session'};
      sessionStore.set(session);
    });

    it('should empty the session', () => {
      expect(sessionStore.empty()).to.be.false;

      sessionStore.reset();

      expect(sessionStore.empty()).to.be.true;
    });

    it('should emit an event if the sessionStore is not empty previously', () => {
      chai.spy.on(sessionStore, 'emitChange');

      sessionStore.reset();

      expect(sessionStore.emitChange).to.have.been.calledOnce;
      expect(sessionStore.emitChange).to.have.been.called.with.exactly(undefined);
    });

    it('should not emit an event if the session was empty previously', () => {
      sessionStore.reset();
      expect(sessionStore.empty()).to.be.true;

      chai.spy.on(sessionStore, 'emitChange');
      sessionStore.reset();

      expect(sessionStore.emitChange).not.to.have.been.called;
    });
  });
});
