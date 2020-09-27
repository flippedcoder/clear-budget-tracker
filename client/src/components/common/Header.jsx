import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Menu from './Menu'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <Box>
          <LinkWrapper href="/">McG</LinkWrapper>
          <MenuButtonWrapper onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} id="menu-icon" />
          </MenuButtonWrapper>
        </Box>
      </HeaderWrapper>
      {showMenu ? <Menu /> : ''}
    </>
  )
}

const Box = styled.div`
  display: flex;
  margin-left: 75%;
  padding: 12px;
`
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
  text-decoration: none;
`
const MenuButtonWrapper = styled.div`
  margin-left: 24px;

  &:hover {
    cursor: pointer;
  }
`

export default Header
