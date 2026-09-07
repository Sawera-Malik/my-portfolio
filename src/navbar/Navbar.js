import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <nav className='navbar' >
        <div className='nav-div' >

        <p className='logo'>Sawera</p>
        <div className='nav-links' >

      <a href='#home' className='nav' >Home</a>
      <a href='#about'  className='nav'>About</a>
      <a href='#service' className='nav' >Services</a>
      <a href='#project' className='nav' >Projects</a>
      <a href='#portfolio' className='nav' >Portfolio</a>
      <a href='#contact' className='nav' >Contact</a>
        </div>
        <a href="https://www.linkedin.com/in/sawera-malik-b86381334"  target="_blank" rel="noopener noreferrer" className='nav-button'>Contact Me</a>

        </div>

    </nav>
  )
}

export default Navbar
