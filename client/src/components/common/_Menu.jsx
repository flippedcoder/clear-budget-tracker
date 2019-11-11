import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import '../../css/_Menu.css';

import Goals from '../Goals';
import Items from '../Items';
import Logout from '../Logout';
import Settings from '../Settings';
import Stats from '../Stats';

class _Menu extends Component {
    render() {
        return (
            <div id="menu">
                <Router>
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
                    <Route path="/goals" component={Goals} />
                    <Route path="/items" component={Items} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/stats" component={Stats} />
                </Router>
            </div>
        );
    }
}

export default _Menu;