import React from 'react'
import './about.css';
import HomeImage from '../assets/home-image.png';
import { FaHtml5, FaReact, FaJs, FaCodeBranch } from "react-icons/fa";

function About() {
    return (
        <div className='about' id='about' >
            <div className='about-head' >About Me</div>
            <div className='about-section' >
                <div className='about-img-div' >
                    <img className='about-img' src={HomeImage} alt='img' />
                </div>
                <p className='about-para' >
                    Skilled in HTML, CSS, and JavaScript, with expertise in React and
                    Redux for building dynamic user interfaces. Proficient in Bootstrap
                    and Tailwind, ensuring responsive design for seamless user experiences.
                    Passionate about crafting intuitive web applications that prioritize
                    user engagement and accessibility.
                    <div className='about-ico' >
                        <FaHtml5 className='ico' /> HTML & CSS
                        <div className='html-glow' >
                            <div className='glow-html' ></div>
                        </div>
                    </div>
                    <div className='about-ico' >
                        <FaJs className='ico' /> JavaScript
                        <div className='html-glow' >
                            <div className='glow-js' ></div>
                        </div>
                    </div>
                    <div className='about-ico'  >
                        <FaReact className='ico' /> React Js

                        <div className='html-glow' >
                            <div className='glow-react' ></div>
                        </div>
                    </div>
                    <div className='about-ico' >
                        <FaCodeBranch className='ico' /> Redux Toolkit
                        <div className='html-glow' >
                            <div className='glow-redux' ></div>
                        </div>
                    </div>
                    <div className='about-ico' >
                        <FaHtml5 className='ico' /> Tailwind & Bootstrap
                        Framework
                        <div className='html-glow' >
                            <div className='glow-frame' ></div>
                        </div>
                    </div>
                    <div className='about-detail' >
                        <div className='about-expi' >
                            <span className='about-num' > 1+ </span> Years Experience
                        </div>
                        <div className='about-project'><span className='about-num' >15+</span>  Projects Completed</div>
                    </div>
                </p>

            </div>
        </div>
    )
}

export default About;
