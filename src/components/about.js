import React, { component } from 'react';

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
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="./portfolio.html">Portfolio</a>
                            <a href="/">Blog</a>
                            <a href="./contact.html">Contact</a>
                        </nav>
                    </section>

                    <section className="info">
                        <div className="logo">
                            <img />
                        </div>
                        <div className="info-box">
                            <h4>Email:</h4>
                            <p>rohanpschauhan23@gmail.com</p>
                            <h4>Phone:</h4>
                            <p>07xxxxxxxxx</p>
                            <h4>Find me on:</h4>
                            <div className="icon-section">
                                <a><i className="fab fa-github-square"></i></a>
                                <a><i className="fab fa-linkedin"></i></a>
                                <a><i className="fab fa-facebook-square"></i></a>
                                <a><i className="fab fa-instagram"></i></a>
                            </div>
                            
                        </div>
                    </section>

                    <section className="content-area">
                        <div className="img-container">
                            <div className="user-img"></div>
                        </div>
                        <div className="profile-section">
                            <div className="profile">
                                <h1> Rohan <span>Pratap <br/> Singh </span> Chauhan</h1>
                                <h5> Web Developer</h5>
                                <p> Hi and welcome to my landing page! Need a new website? Maybe a web-application? Whatever the issue let me bring your dreams into reality. <span>Together.</span> </p>
                                <a href="./portfolio.html" className="primary-btn">Portfolio</a>
                                <a href="./resume.html" className="secondary-btn">Resume</a>
                                <a href="./contact.html" className="tertiary-btn">Contact</a>
                            </div>
                        </div>
                    </section>
                </body>
            </div>

            )
        }
    }


export default About;