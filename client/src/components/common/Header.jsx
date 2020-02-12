import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import '../../css/Header.css';
import _Menu from './_Menu';

const Header = () => {
    let [showMenu, setShowMenu] = useState(false);

    const showHideMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <div id="header">
                <div>McG</div>
                <p onClick={() => showHideMenu()}>
                    <FontAwesomeIcon icon={faBars}
                        id="menu-icon" />
                </p>
            </div>
            {showMenu ? <_Menu /> : ''}
        </>
    );
}

export default Header;