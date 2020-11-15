import React from 'react'
import './Navbar.css';
import logo from '../assets/logo1.png'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
         <ul>
             <li><img src={logo} alt="" srcset=""/></li>
             <li><Link to="/home">HOME</Link></li>
             <li>ABOUT</li>
             <li><Link to="/">MOVIES</Link></li>
        </ul> 
        </nav> 
        </div>
    )
}

export default Navbar
