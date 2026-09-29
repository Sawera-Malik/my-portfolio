import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <nav className='navbar' >
        <div className='nav-div' >

        <Link to='/' className='logo'>Sawera Malik<span>.</span></Link>
        <div className='nav-links' >

      <a href='/#home' className='nav' >Home</a>
      <a href='/#about'  className='nav'>About</a>
      <a href='/#skills' className='nav' >Skills</a>
      <a href='/#project' className='nav' >Projects</a>
      <a href='/#experience' className='nav' >Experience</a>
      <a href='/#contact' className='nav' >Contact</a>
        </div>
        <a href="mailto:saweram693@gmail.com" className='nav-button'>Let's Talk</a>

        </div>

    </nav>
  )
}

export default Navbar
