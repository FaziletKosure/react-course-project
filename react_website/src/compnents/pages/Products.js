import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer'


const videoStyle = {  
  // objectFit:" cover",
  // marginBottom: "13%"
 };

export default function Products() {

  return (
     <div>
{/* <div style={videoStyle}>
      <video className="videocontainer" src='/videos/this-is-clarusway.mp4' autoPlay loop/>
      </div>  */}
     <div>
     <Cards />
     <Footer />
     </div>
 
  </div>)
}