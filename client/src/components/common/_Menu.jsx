import React from 'react';
import styled from 'styled-components';

const LinkListWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    margin: unset;
    position: absolute;
    right: 0;
    top: 0;
    transition: .3s ease-in-out;
    width: 140px;
`
const LinkWrapper = styled.a`
    color: white;
    font-size: 18px;
    display: block;
    width: 100%;
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
`

const _Menu = () => {
    return (
        <div id="menu">
            <LinkListWrapper>
                <LinkWrapper href="/items">Items</LinkWrapper>
                <LinkWrapper href="/goals">Goals</LinkWrapper>
                <LinkWrapper href="/settings">Settings</LinkWrapper>
                <LinkWrapper href="/logout">Log Out</LinkWrapper>
            </LinkListWrapper>
        </div>
    );
}

export default _Menu;
