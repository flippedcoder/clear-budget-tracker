import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import _Menu from './_Menu';

const LinkWrapper = styled.a`
    margin-left: 75%;
    text-decoration: none;
`
const HeaderWrapper = styled.div`
    display: flex;
    font-size: 24px;
    height: 100px;
    margin: 0;
    max-height: 100px;
`
const MenuButtonWrapper = styled.div`
    margin-left: 24px;
`

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <HeaderWrapper>
                <LinkWrapper href='/'>McG</LinkWrapper>
                <MenuButtonWrapper onClick={() => setShowMenu(!showMenu)}>
                    <FontAwesomeIcon icon={faBars}
                        id="menu-icon" />
                </MenuButtonWrapper>
            </HeaderWrapper>
            {showMenu ? <_Menu /> : ''}
        </>
    );
}

export default Header;