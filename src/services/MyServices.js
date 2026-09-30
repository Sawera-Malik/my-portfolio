import React from 'react'
import './services.css'
function MyServices() {
    return (
        <section className='services' id='experience' >
            <div className='experience-intro'><p className='section-kicker'>Experience / approach</p><h2>Thoughtful frontend work, from first idea to final interaction.</h2></div>
            <div className='service-sec' >
                <div className='service-sec-box' >
                    <span className='box-num' >01</span>
                    <div className='box-head' >Modern Web Design</div>
                    <p className='box-para' >Designing clean, engaging, and responsive websites with a strong visual hierarchy, thoughtful layouts, and user-friendly interactions across every screen size.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >02</span>
                    <div className='box-head' >Front end development</div>
                    <p className='box-para'>Building responsive and interactive user interfaces that captivate users and enhance engagement. Using the latest technologies, we ensure your website is not only functional but also a pleasure to explore on any device.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >03</span>
                    <div className='box-head' >UI/UX Design Implementation</div>
                    <p className='box-para'>Convert design mockups (from tools like Figma or Adobe XD) into responsive and accessible web pages using HTML and CSS. Create user-friendly interfaces with attention to design, accessibility, and responsiveness.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >04</span>
                    <div className='box-head' >State Management with Redux Toolkit</div>
                    <p className='box-para'>Manage complex application state using Redux Toolkit to ensure smooth data flow and efficient updates.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >05</span>
                    <div className='box-head' >API Integration & Data Handling</div>
                    <p className='box-para'>Fetch and display data from APIs, handle asynchronous operations, and manage data caching for seamless backend integration.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >06</span>
                    <div className='box-head' >Responsive Frontend Development</div>
                    <p className='box-para'>Building fast, responsive, and accessible interfaces that work consistently across desktop, tablet, and mobile devices.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >07</span>
                    <div className='box-head' >Microfrontend Architecture</div>
                    <p className='box-para'>Creating modular frontend applications with Single-spa so teams can develop, deploy, and scale features independently.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >08</span>
                    <div className='box-head' >Frontend Integrations & Analytics</div>
                    <p className='box-para'>Connecting frontend experiences with Firebase, PubNub, Stripe, Userpilot, and Amplitude to support reliable product workflows.</p>
                </div>
            </div>
        </section>
    )
}

export default MyServices
