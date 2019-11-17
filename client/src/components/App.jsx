import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './common/Header';
import Home from './Home';
import Goals from '../components/Goals';
import Items from '../components/Items';
import Logout from '../components/Logout';
import Settings from '../components/Settings';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/goals" component={Goals} />
                <Route path="/items" component={Items} />
                <Route path="/logout" component={Logout} />
                <Route path="/settings" component={Settings} />
            </Router>
        );
    }
}

export default App;
