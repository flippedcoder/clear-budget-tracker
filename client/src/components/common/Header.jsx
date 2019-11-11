import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../../css/Header.css';
import _Menu from './_Menu';

class Header extends Component {
    constructor() {
        super();

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
        let menu = null;

        if (this.state.showMenu) {
            menu = <_Menu />;
        }

        return (
            <div>
                <div id="header">
                    <div>username</div>
                    <p onClick={this.openMenu}>
                        <FontAwesomeIcon icon={faBars}
                            id="menu-icon" />
                    </p>
                </div>
                {menu}
            </div>
        );
    }
}

export default Header;