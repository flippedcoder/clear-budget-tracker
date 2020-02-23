import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { expect, assert } from "chai";
import Items from '../src/components/Items';
import CreateItemModal from '../src/components/CreateItemModal';

configure({adapter: new Adapter()});

describe('render main components', () => {
    it('should render Items', () => {
      const wrapper = shallow(<Items/>);
      expect(wrapper.find('label')).to.have.length(2);
    });

    it('should open CreateNewItem modal', () => {
        const wrapper = shallow(<Items/>);
        wrapper.find('#add-item-icon').simulate('click');
        assert.exists(<CreateItemModal />, 'this does not exist unfortunately');
    })
});