import React from 'react'
import {Iphonvideo } from './IphontwelveElements'
import {HeroContent,HeroH1,HeroItems,HeroP,HeroBtn} from '../Hero/HeroElements'
import Navbar from '../Navbar'
import { SidebarRoute } from '../Sidebar/SidebarElements'
import iphone from '../../video/iPhone.mp4'
function Iphontwelve() {
    return (
      <>
      <Navbar />
      <Iphonvideo src={iphone} autoPlay loop />
      <HeroContent>
        <HeroItems>
          <HeroH1>iPhone 12 Pro</HeroH1>
          <HeroP>It’s a leap year.</HeroP>
          <h6>From $41.62/mo. or $999 before trade‑in1</h6>
          {/* <HeroBtn>Place Order</HeroBtn> */}
          <SidebarRoute to='/iphone12'>Order Now</SidebarRoute>
        </HeroItems>
      </HeroContent>
     

      </>
    )
}

export default Iphontwelve
