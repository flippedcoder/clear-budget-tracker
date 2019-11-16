import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../css/_Menu.css';

class _Menu extends Component {
    render() {
        return (
            <div id="menu">
                <ul>
                    <li>
                        <Link to="/stats">Stats</Link>
                    </li>
                    <li>
                        <Link to="/items">Items</Link>
                    </li>
                    <li>
                        <Link to="/goals">Goals</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/logout">Log Out</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default _Menu;