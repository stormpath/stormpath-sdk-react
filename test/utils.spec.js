import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import utils from '../src/utils';

describe('utils', () => {
  describe('nopElement', () => {
    it('should produce an empty span', () => {
      const element = shallow(utils.nopElement);

      expect(element).to.be.ok;
      expect(element.type()).to.equal('span');
      expect(element.text()).not.to.be.ok;
    });
  });

  describe('uuid', () => {
    it('should produce a unique string', () => {
      const count = 10;
      const uuids = [];

      for (let i = 0; i < count; i++) {
        uuids.push(utils.uuid());
      }

      for(let i = 0; i < count; i++) {
        expect(uuids[i]).to.be.a.string;
        expect(uuids[i]).not.to.equal(uuids[(i + 1) % count]);
      }
    });
  });

  describe('containsWord', () => {
    it('should return true if the word if the testWord contains any of the given words', () => {
      const testWord = 'this is just a test';
      const words = ['best', 'test', 'rest'];

      expect(utils.containsWord(testWord, words)).to.be.true;
    });

    it('should match partial matches (shorter word inside of longer word)', () => {
      const testWord = 'this is just a testing run';
      const words = ['best', 'test', 'rest'];

      expect(utils.containsWord(testWord, words)).to.be.true;
    });

    it('should match words of different case', () => {
      const testWord = 'this is just a test'.toUpperCase();
      const words = ['best', 'test', 'rest'];

      expect(utils.containsWord(testWord, words)).to.be.true;
    });

    it('should return false if none of the words are contained in the test string', () => {
      const testWord = 'this is just an experimental run';
      const words = ['best', 'test', 'rest'];

      expect(utils.containsWord(testWord, words)).to.be.false;
    });
  });

  describe('takeProp', () => {
    it('should take the first prop from the object it finds on the prop list', () => {
      const data = {a: 1, b: 2, c:3};
      expect(utils.takeProp(data, 'a', 'b')).to.equal(data.a);
      expect(utils.takeProp(data, 'b', 'a')).to.equal(data.b);
    });

    it('should return undefined if no props are matched', () => {
      expect(utils.takeProp({a: 1, b: 2}, 'c', 'd', 'e', 'f')).to.be.undefined;
    });
  });
});
