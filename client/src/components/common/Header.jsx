import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

const HeaderWrapper = styled.div`
    background-color: #243754;
    color: #fff;
    display: flex;
    font-size: 24px;
    height: 50px;
    margin-bottom: 24px;
    padding: unset;
    vertical-align: center;
`
const LinkWrapper = styled.a`
    color: #fff;
    margin-left: 75%;
    text-decoration: none;
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
            {showMenu ? <Menu /> : ''}
        </>
    );
}

export default Header;