import Logo from '../../assets/SVG/Logo.svg'
import "./Navbar.css"
import { useState } from 'react'

const Navbar = () => {
    return(
        <div className="Nav">
            <div className='Nav__title'>
              <a href="/">
                  <img src={Logo} alt="Our Frontier Logo" className='logo'/>
                  <h1>Our Frontier</h1>
              </a>
            </div>
            <div className='Nav__menu'>
              
            </div>
        </div>
    )
}

export default Navbar;