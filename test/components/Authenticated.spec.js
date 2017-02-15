import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import Authenticated from '../../src/components/Authenticated';

describe('<Authenticated/>', () => {
  let userContext;
  let noUserContext;

  before(() => {
    userContext = {
      user: {
        groups: {
          basic: true,
          unbasic: true
        }
      }
    };

    noUserContext = {};
  });

  describe('without inGroup property', () => {
    it('should render content if there is a user', () => {
      const element = shallow(
        <Authenticated>Shown</Authenticated>,
        {context: userContext}
      );

      expect(element).to.be.ok;
      expect(element.text()).to.equal('Shown');
    });

    it('should not render content if there is no user', () => {
      const element = shallow(
        <Authenticated>Not Shown</Authenticated>,
        {context: noUserContext}
      );

      expect(element).to.be.ok;
      expect(element.text()).not.to.be.ok;
      expect(element.text()).not.to.equal('Not Shown');
    });
  });


  describe('with inGroup property', () => {
    it('should not render content if there is no user', () => {
      const element = shallow(
        <Authenticated>Not Shown</Authenticated>,
        {context: noUserContext}
      );

      expect(element).to.be.ok;
      expect(element.text()).not.to.be.ok;
      expect(element.text()).not.to.equal('Not Shown');
    });

    it('should not render content if the user is not in the group', () => {
      const element = shallow(
        <Authenticated inGroup="admin">Not Shown</Authenticated>,
        {context: userContext}
      );

      expect(element).to.be.ok;
      expect(element.text()).not.to.be.ok;
      expect(element.text()).not.to.equal('Not Shown');
    });

    it('should render content if the user is in the group', () => {
      const element = shallow(
        <Authenticated inGroup="basic">Shown</Authenticated>,
        {context: userContext}
      );

      expect(element).to.be.ok;
      expect(element.text()).to.be.ok;
      expect(element.text()).to.equal('Shown');
    });
  });
});
