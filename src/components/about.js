import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';




class About extends React.Component {
        render() {
            return(

            <div className="about">   
                <section className="content-area">
                    
                    <div className="profile-section">
                        <div className="profile">
                            <h1> About Me! </h1>
                            <h5> Web Developer</h5>
                            <p> Hi and welcome to my landing page! Need a new website? Maybe a web-application? Whatever the issue let me bring your dreams into reality. <span>Together.</span></p>
                            <p> Want to know more? Click on one of the buttons below. </p>
                            <Link to="./portfolio" className="primary-btn">Portfolio</Link>
                            
                            <Link to="./hire-me" className="tertiary-btn">Contact</Link>
                        </div>
                    </div>

                    <div className="img-container">
                        <div alt-text="portfolio-image">
                            <img className="user-img" src="./img/rohan.jpg"></img>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default About;
