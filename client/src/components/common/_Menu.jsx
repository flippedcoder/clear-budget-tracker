import React, { Component } from 'react';

class _Menu extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li>Stats</li>
                    <li>Items</li>
                    <li>Goals</li>
                    <li>Settings</li>
                    <li>Log Out</li>
                </ul>
            </div>
        );
    }
}

export default _Menu;