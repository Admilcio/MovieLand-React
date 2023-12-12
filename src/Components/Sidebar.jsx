import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/fa'

const Nav = styled.div`
  background: #15171c;
  width: 71%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const NavIcon = styled(Link)`
  margin-left: 2rem;
  width: 71%;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Sidebar = () => {
  return (
    <div className='navicon'>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars />
        </NavIcon>
      </Nav>
    </div>
  )
}

export default Sidebar


