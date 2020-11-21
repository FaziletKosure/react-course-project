import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Feature from '../Feature';


import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';
import Footer from '../Footer';
import { SidebarRoute } from '../Sidebar/SidebarElements';


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} head='Big White Bitten Apples'/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Apple Ever</HeroH1>
          <HeroP>Your Best Friend</HeroP>
          <SidebarRoute to='/mciphn'>Place Order</SidebarRoute>
          {/* <HeroBtn>Place Order</HeroBtn> */}
        </HeroItems>
      </HeroContent>
      <Feature />
      <Footer/>
    </HeroContainer>
  );
};

export default Hero;
