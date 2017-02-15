import chai, {expect} from 'chai';
import spies from 'chai-spies';

import StorageMock from '../helpers/storage-mock';
import LocalStorage from '../../src/storage/LocalStorage';

chai.use(spies);

describe('LocalStorage storage', () => {
  before(() => {
    global.localStorage = new StorageMock('local');
    global.sessionStorage = new StorageMock('session');
  });

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

  describe('with storage present on device/browser', () => {
    describe('get', () => {
      const key = 'key';
      const value = 'value';

      it('should retrieve an item by name from local storage', (done) => {
        const storage = new LocalStorage();

        global.sessionStorage._set(key, value);

        storage.get(key).then((storageValue) => {
          expect(storageValue).to.equal(value);
          done();
        }).catch(done);
      });
    });

    describe('set', () => {
      const key = 'key';
      const value = 123;

      it('should store an item by name in local storage, stringifying it', (done) => {
        const storage = new LocalStorage();

        storage.set(key, value).then(() => {
          expect(global.sessionStorage._get(key)).not.to.equal(value);
          expect(global.sessionStorage._get(key)).to.equal(String(value));
          done();
        }).catch(done);
      });
    });

    describe('remove', () => {
      const key = 'key';
      const value = 'value';

      it('should remove an item by name from local storage', (done) => {
        const storage = new LocalStorage();
        global.sessionStorage._set(key, value);

        expect(global.sessionStorage._get(key)).to.equal(value);

        storage.remove(key).then(() => {
          expect(global.sessionStorage._get(key)).not.to.be.ok;
          done();
        }).catch(done);
      });
    });
  });

  describe('without storage present on device/browser', () => {
    let storage;
    before(function() {
      global.sessionStorage = null;
      storage = new LocalStorage();
    });

    it('should throw on get', (done) => {
      storage.get('key').catch((err) => {
        expect(err).to.be.ok;
        done();
      });
    });

    it('should throw on set', (done) => {
      storage.set('key', 'value').catch((err) => {
        expect(err).to.be.ok;
        done();
      });
    });

    it('should throw on remove', (done) => {
      storage.remove('key').catch((err) => {
        expect(err).to.be.ok;
        done();
      });
    });
  });

});
