import React from 'react';
import './home.css';
import HomeImage from '../assets/home-image.png';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
function Home() {
    return (
        <section className='home' id='home'>
            <div className='home-head-div' >
                <p className='hero-kicker'><span></span> Frontend Developer</p>
                <h1 className='home-head'>Hi, I'm <span className='head-name'>Sawera Malik</span></h1>
                <p className='head-para'>I build modern, responsive and user-focused web applications.</p>
                <div className='hero-actions'>
                    <a href='/#project' className='hero-button hero-button-primary'>View My Work <FaArrowDown /></a>
                    <a href="/sawera malik.pdf" download="Sawera_Malik.pdf" className='hero-button hero-button-secondary'>Download Resume</a>
                </div>
                <div className='hero-socials'>
                    <span>Find me on</span>
                    <a href='https://github.com/Sawera-Malik' target='_blank' rel='noopener noreferrer' aria-label='GitHub'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/sawera-malik-b86381334' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
                    <a href='mailto:saweram693@gmail.com' aria-label='Email'><FaEnvelope /></a>
                </div>
            </div>
            <div className='home-img-div'><div className='hero-orbit'></div><img className='home-img' src={HomeImage} alt='Sawera Malik' /><div className='hero-status'><span></span> Available for opportunities</div></div>
        </section>
    )
}

export default Home
