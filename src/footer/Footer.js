import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './footer.css';

function Footer() {
  return (
    <div className='footer' >
      <div className='footer-head' > Sawera</div>
      <p className='footer-para' >"I am a frontend developer specializing in creating high-quality,
         engaging web experiences. With expertise in modern web development,
          I bring designs to life with precision, responsiveness, and a focus 
          on user experience." Let me know if you'd like further refinement!</p>
          <div className='footer-bottom' >
             <p className='footer-para-2'>  &copy; {new Date().getFullYear()} Sawera."If there's any work, please let me know."</p>
         <div className="footer-icons">
            <a href="https://www.linkedin.com/in/sawera-malik-b86381334" target="_blank" rel="noopener noreferrer" className="footer-ico" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sawera-Malik" target="_blank" rel="noopener noreferrer" className="footer-ico" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
          <div className="footer-links">
          </div>
          </div>
        
    </div>
  )
}

export default Footer
