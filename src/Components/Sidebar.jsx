import React from 'react';
import './Sidebar.css';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons';


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: ${({ nav }) => (nav ? 'flex' : 'none')}; 
  justify-content: flex-start;
  align-items: center;
  border-radius: 25px;
  @media screen and (max-width: 738px) {
    display:none;
  }
`;

const DisplayNavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  padding: 0 1rem;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  @media screen and (max-width: 738px) {
    left: 50px;
  }
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  margin-right: 500px;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  @media screen and (max-width: 738px) {
    display: flex;
    left: 0;
    width: 150px;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [nav, setNav] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
    setNav(!nav);
  };

  return (
    <div className='navicon' >
      <IconContext.Provider value={{ color: '#fff' }}>
      <Nav className='nav' nav={nav}>
        <NavIcon to='#' className='display-nav-item'>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <h1>Mov</h1>
        <DisplayNavItems>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
         </DisplayNavItems>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#' className='icon' nav={nav}>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
