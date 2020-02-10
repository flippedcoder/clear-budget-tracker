import React from 'react';
import jasmineEnzyme from 'jasmine-enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Items from '../../src/components/Items';

configure({ adapter: new Adapter() });

beforeEach(() => {
    jasmineEnzyme();
});

describe("main components render with jasmine", () => {
    it("should render Items", () => {
        const element = React.createElement(Items);

        expect(() => {
            ReactTestUtils.renderIntoDocument(element);
        }).not.toThrow();
    });

    it('should show CreateNewItem modal from click', () => {
        ReactTestUtils.Simulate.click('#add-item-icon');

        expect(() => {
            ReactTestUtils.findRenderedDOMComponentWithTag('form');
        }).toBeTruthy();
    })
});
