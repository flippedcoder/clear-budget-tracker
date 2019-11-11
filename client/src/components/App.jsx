import React, { Component } from 'react';

import Header from './common/Header';
import Home from './Home';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Home records={this.records} />
            </div>
        );
    }
}

export default App;
