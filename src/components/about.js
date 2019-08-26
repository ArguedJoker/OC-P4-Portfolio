import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from './infoBox.js';



    class About extends React.Component {
        render() {
            return(

            <div>    
           
                <body className="home">
                    <div className="menu-icon">
                        <i className="fas fa-bars" aria-hidden="true"></i>
                    </div>

                    <section id="menu">
                        <nav>
                            <Link to="./about.js">About</Link>
                            <Link to="./resume.js">Resume</Link>
                            <Link to="./portfolio.js">Portfolio</Link>
                            <Link to="./contact.js">Contact</Link>
                        </nav>
                    </section>

                    <section className="info">
                        <div className="logo">
                            <img />
                        </div>
                        <InfoBox/>
                    </section>

                    <section className="content-area">
                        <div className="img-container">
                            <div className="user-img" alt-text="portfolio-image"></div>
                        </div>
                        <div className="profile-section">
                            <div className="profile">
                                <h1> About Me! </h1>
                                <h5> Web Developer</h5>
                                <p> Hi and welcome to my landing page! Need a new website? Maybe a web-application? Whatever the issue let me bring your dreams into reality. <span>Together.</span></p>
                                <p> Want to know more? Click on one of the buttons below. </p>
                                <Link to="./portfolio" className="primary-btn">Portfolio</Link>
                                <Link to="./resume" className="secondary-btn">Resume</Link>
                                <Link to="./contact" className="tertiary-btn">Contact</Link>
                            </div>
                        </div>
                    </section>
                </body>
            </div>
            );
        }
    }


export default About;