import React from 'react'
import './services.css'
function MyServices() {
    return (
        <div className='services' id='service' >
            <div className='service-head' >My Services </div>
            <div className='service-sec' >
                <div className='service-sec-box' >
                    <span className='box-num' >1</span>
                    <div className='box-head' >Web Design</div>
                    <p className='box-para' >Creating visually appealing, modern, and user-friendly web designs tailored to elevate your brand. From concept to completion, we ensure every element is designed with purpose, beauty, and usability in mind.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >2</span>
                    <div className='box-head' >Front end development</div>
                    <p className='box-para'>Building responsive and interactive user interfaces that captivate users and enhance engagement. Using the latest technologies, we ensure your website is not only functional but also a pleasure to explore on any device.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >3</span>
                    <div className='box-head' >UI/UX Design Implementation</div>
                    <p className='box-para'>Convert design mockups (from tools like Figma or Adobe XD) into responsive and accessible web pages using HTML and CSS. Create user-friendly interfaces with attention to design, accessibility, and responsiveness.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >4</span>
                    <div className='box-head' >State Management with Redux Toolkit</div>
                    <p className='box-para'>Manage complex application state using Redux Toolkit to ensure smooth data flow and efficient updates.</p>
                </div>
                <div className='service-sec-box' >
                    <span className='box-num' >5</span>
                    <div className='box-head' >API Integration & Data Handling</div>
                    <p className='box-para'>Fetch and display data from APIs, handle asynchronous operations, and manage data caching for seamless backend integration.</p>
                </div>
                <div className='service-sec-box'>
                    <span className='box-num'>6
                    </span>

                </div>
            </div>
        </div>
    )
}

export default MyServices
