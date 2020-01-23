import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const NavBar = () => {
  return(
        <nav>
        <ul className='nav-links'>
            <Link to='/home'>
                <li>Home</li>
            </Link>
            <Link to='/product'>
                <li>Product</li>
            </Link>
        </ul>
        </nav>
  )
}

export default NavBar;
