import React, { Component } from 'react';

import Home from './Home';

class App extends Component {

    records = [
        {
            date: "2019-08-31",
            name: "Noodles",
            amount: 39.07
        },
        {
            date: "2019-09-01",
            name: "Sandwich",
            amount: 9.89
        },
        {
            date: "2019-09-10",
            name: "Noodles",
            amount: 28.12
        }
    ]

    render() {
        return (
            <Home records={this.records} />
        );
    }
}

export default App;
