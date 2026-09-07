import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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
            <a href="#" className="footer-ico">
              <FaFacebook />
            </a>
            <a href="#" className="footer-ico">
              <FaTwitter />
            </a>
            <a href="#" className="footer-ico">
              <FaLinkedin />
            </a>
            <a href="#" className="footer-ico">
              <FaGithub />
            </a>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Privacy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </div>
          </div>
        
    </div>
  )
}

export default Footer
