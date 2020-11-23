import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink onClick={toggle}  to='/mac'>Mac</SidebarLink>
        <SidebarLink onClick={toggle} to='/iphone12'>iPhone</SidebarLink>
        <SidebarLink onClick={toggle} to='/ipad'>iPad</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute onClick={toggle} to='/mciphn'>Buy Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
