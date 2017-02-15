import chai, {expect} from 'chai';
import spies from 'chai-spies';

import StorageMock from '../helpers/storage-mock';
import LocalStorage from '../../src/storage/LocalStorage';

chai.use(spies);

global.localStorage = new StorageMock('local');
global.sessionStorage = new StorageMock('session');

describe('LocalStorage storage', () => {
  describe('constructor', () => {
    it('should use sessionStorage if type is not `local`', () => {
      let storage = new LocalStorage();
      let storageOther = new LocalStorage('something');

      expect(storage.storage).to.equal(global.sessionStorage);
      expect(storageOther.storage).to.equal(global.sessionStorage);
      expect(storage.storage).not.to.equal(global.localStorage);
      expect(storageOther.storage).not.to.equal(global.localStorage);
    });

    it('should use localStorage if type is `local`', () => {
      let storage = new LocalStorage('local');

      expect(storage.storage).to.equal(global.localStorage);
      expect(storage.storage).not.to.equal(global.sessionStorage);
    });
  });
});
