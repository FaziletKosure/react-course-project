import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import {SidebarRoute} from '../Sidebar/SidebarElements'


const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Apple of the Day</h1>
      <p>iPhone 12 Pro</p>
      <h3>It’s a leap year.</h3>
      {/* <FeatureButton>Order Now</FeatureButton> */}
      <SidebarRoute to='/iphone'>Order Now</SidebarRoute>
    </FeatureContainer>
  );
};

export default Feature;
