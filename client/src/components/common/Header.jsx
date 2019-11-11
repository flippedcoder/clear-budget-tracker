import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor() {
        this.state = {
            showMenu: false
        };

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.setState({
            showMenu: true
        });
    }

    render() {
        return (
            <div id="header">
                <div>username</div>
                <p onClick={this.openMenu}>
                    <FontAwesomeIcon icon={faBomb}
                        id="menu-icon" />
                </p>
            </div>
        );
    }
}

export default Header;