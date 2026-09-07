import React from 'react';
import './home.css';
import HomeImage from '../assets/home-image.png';
function Home() {
    return (
        <div className='home' id='home'>
            <div className='home-img-div' >
                <img className='home-img' src={HomeImage} alt='img' />
            </div>
            <div className='home-head-div' >
                <h1 className='home-head'> I'm {'  '}
                    <span className='head-name' >
                    Sawera Malik
                        </span>, FrontEnd Developer </h1>
                <p className='head-para' >I specialize in building mordern and responsive web applications.</p>
               
                <button className='home-btn-div-1' >
                <a href="https://www.linkedin.com/in/sawera-malik-b86381334"  target="_blank" rel="noopener noreferrer" className='home-button-1'>Contact Me</a>
        </button>
        <button className='home-btn-div-2' >
                <a href="/sawera malik.pdf" download="sawera malik.pdf" className='home-button-2'>Resume</a>
               </button> 
            </div>
        </div>
    )
}

export default Home
