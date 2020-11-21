import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


const Navbar = ({ toggle, head,styled }) => {
  return (
    <>
      <Nav style={{visibility:{styled}}}>
        <NavLink to='/'>{head}</NavLink>
        <NavIcon onClick={toggle}>
          <p>Apple Store</p>
          <NavLink to='/'><Bars /></NavLink>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
