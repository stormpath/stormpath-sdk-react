import TokenActions from '../../src/actions/TokenActions';
import TokenConstants from '../../src/constants/TokenConstants';
import chai, {expect} from 'chai';
import spies from 'chai-spies';

chai.use(spies);

describe('TokenActions', () => {
  let dispatchSpy;
  let callback;

  beforeEach(() => {
    dispatchSpy = chai.spy(({callback}) => callback());
    callback = () => ({});

    TokenActions.setDispatch(dispatchSpy);
  });

  describe('set action', () => {
    it('should dispatch a token set action', () => {
      const type = 'sometype';
      const token = 'sometoken';

      TokenActions.set(type, token, callback);

      expect(dispatchSpy).to.have.been.calledOnce;
      expect(dispatchSpy).to.have.been.called.with({
        type: TokenConstants.TOKEN_SET,
        options: {
          type,
          token,
        },
        callback,
      });
    });
  });

  describe('refresh action', () => {
    it('should dispatch a refresh action', () => {
      const token = 'sometoken';

      TokenActions.refresh(token, callback);

      expect(dispatchSpy).to.have.been.calledOnce;
      expect(dispatchSpy).to.have.been.called.with({
        type: TokenConstants.TOKEN_REFRESH,
        options: {
          token,
        },
        callback,
      });
    });
  });
});
