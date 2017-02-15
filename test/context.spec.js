import chai, {expect} from 'chai';

import context from '../src/context';

describe('Context', () => {
  it('should have empty initial values', () => {
    expect(context.router).not.to.be.ok;
    expect(context.dispatcher).not.to.be.ok;
    expect(context.tokenStore).not.to.be.ok;
    expect(context.sessionStore).not.to.be.ok;
    expect(context.userStore).not.to.be.ok;
  });

  it('should have setters for all values', () => {
    context.setRouter('router');
    expect(context.router).to.equal('router');

    context.setDispatcher('dispatcher');
    expect(context.dispatcher).to.equal('dispatcher');

    context.setTokenStore('tokenStore');
    expect(context.tokenStore).to.equal('tokenStore');

    context.setSessionStore('sessionStore');
    expect(context.sessionStore).to.equal('sessionStore');

    context.setUserStore('userStore');
    expect(context.userStore).to.equal('userStore');
  });

  it('should have getters for all values', () => {
    expect(context.router).to.equal(context.getRouter());
    expect(context.dispatcher).to.equal(context.getDispatcher());
    expect(context.tokenStore).to.equal(context.getTokenStore());
    expect(context.sessionStore).to.equal(context.getSessionStore());
    expect(context.userStore).to.equal(context.getUserStore());
  });
});
