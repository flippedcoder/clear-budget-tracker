import React from 'react';
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import Home from '../src/components/Home';
import Items from '../src/components/Items';

let rootContainer;

// beforeEach(() => {
//   rootContainer = document.createElement("div");
//   document.body.appendChild(rootContainer);
// });

// afterEach(() => {
//   document.body.removeChild(rootContainer);
//   rootContainer = null;
// });

describe('render main components', () => {
  it('should render Home', () => {
		const div = document.createElement('div');
    act(() => {
      ReactDOM.render(<Home />, div);
    });
    expect(rootContainer).to.exist();
  });
  it('should render Items', () => {
    act(() => {
      ReactDOM.render(<Items />, rootContainer);
    });
    expect(rootContainer).to.exist();
  });
});

describe('main components can do stuff', () => {
  it('should render Home', () => {
		const div = document.createElement('div');
    act(() => {
      ReactDOM.render(<Home />, div);
    });
    expect(rootContainer).to.exist();
  });
  it('should render Items', () => {
    act(() => {
      ReactDOM.render(<Items />, rootContainer);
    });
    expect(rootContainer).to.exist();
  });
});