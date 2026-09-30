import React from 'react'
import './about.css';
import HomeImage from '../assets/me.png';
import { FaHtml5, FaReact, FaJs, FaCodeBranch, FaCss3Alt, FaBootstrap, FaGitAlt, FaComments, FaUserCheck, FaChartLine } from "react-icons/fa";
import { SiReduxsaga, SiNodedotjs, SiPython, SiTailwindcss, SiMui, SiAntdesign, SiFirebase, SiStripe } from "react-icons/si";

function About() {
    return (
        <section className='about' id='about' >
            <div className='about-section' >
                <div className='about-img-div' >
                    <img className='about-img' src={HomeImage} alt='Sawera Malik' />
                    <div className='about-image-label'>01 <span>/</span> About</div>
                </div>
                <div className='about-para' >
                    <p className='section-kicker'>A little about me</p><h2 className='about-head'>Building interfaces with purpose.</h2>
                    Skilled in HTML, CSS, and JavaScript, with expertise in React and
                    Redux for building dynamic user interfaces. Proficient in Bootstrap
                    and Tailwind, ensuring responsive design for seamless user experiences.
                    Passionate about crafting intuitive web applications that prioritize
                    user engagement and accessibility.
                    <div className='skill-grid' id='skills'>
                        <div className='skill-group'><span className='skill-index'>01</span><strong>Frontend</strong><p><FaHtml5 /> HTML5 <FaCss3Alt /> CSS3 <FaJs /> JavaScript</p></div>
                        <div className='skill-group'><span className='skill-index'>02</span><strong>React Ecosystem</strong><p><FaReact /> React.js <FaCodeBranch /> Redux Toolkit <SiReduxsaga /> Redux Saga <FaCodeBranch /> Single-spa</p></div>
                        <div className='skill-group'><span className='skill-index'>03</span><strong>Styling & UI</strong><p><SiTailwindcss /> Tailwind CSS <FaBootstrap /> Bootstrap <SiMui /> Material UI <SiAntdesign /> Ant Design</p></div>
                        <div className='skill-group'><span className='skill-index'>04</span><strong>Runtime & Backend</strong><p><SiNodedotjs /> Node.js <SiPython /> Python <SiFirebase /> Firebase</p></div>
                        <div className='skill-group'><span className='skill-index'>05</span><strong>Product Integrations</strong><p><FaComments /> PubNub <FaUserCheck /> Userpilot <FaChartLine /> Amplitude</p></div>
                        <div className='skill-group'><span className='skill-index'>06</span><strong>Payments & Tools</strong><p><SiStripe /> Stripe <FaGitAlt /> Git / GitHub</p></div>
                    </div>
                    <div className='about-detail'><div><span className='about-num'>1+</span><small>Years Experience</small></div><div><span className='about-num'>15+</span><small>Projects Completed</small></div><div><span className='about-num'>01</span><small>Core Discipline</small></div></div>
                </div>

            </div>
        </section>
    )
}

export default About;
