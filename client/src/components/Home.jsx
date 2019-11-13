import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import '../css/Home.css';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <div id="month-to-date-total">
                    <p>Spent this month</p>
                    <p>$123.45</p>
                </div>
                <div id="month-to-date-graph">
                    graph
                </div>
                <footer className="flex-2">
                    <div className="add-item center-content">
                        <p>Add Item</p>
                        <p>
                            <FontAwesomeIcon icon={faPlusSquare}
                                id="add-item-icon" />
                        </p>
                    </div>
                    <div className="graph-stats center-content">
                        <p>See Other Stats</p>
                        <div className="flex-2">
                            <p>By Type</p>
                            <p>By Week</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;