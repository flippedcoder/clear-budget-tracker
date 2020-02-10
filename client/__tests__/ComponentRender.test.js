import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Items from '../src/components/Items';
import CreateItemModal from '../src/components/CreateItemModal';

configure({ adapter: new Adapter() });
jest.mock('../__mocks__/getAllItemsMockRequest.js');

describe('Items component works', () => {
	it('Items renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Items />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should toggle CreateItemModal', () => {
		const div = document.createElement('div');
		const ItemComponent = shallow(<Items />, div);
		ItemComponent.find('#add-item-icon').simulate('click');
		expect(ItemComponent.contains(<CreateItemModal />)).toBe(true);
		ReactDOM.unmountComponentAtNode(div);
	});
});
