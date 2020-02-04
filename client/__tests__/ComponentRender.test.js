import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import Home from '../src/components/Home';
import Items from '../src/components/Items';

describe('Main component renders', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Home renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Items renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Items />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
