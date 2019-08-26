import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from './infoBox.js';



 class Contact extends React.Component {
    render() {
        return(

            <div>    
           
                <body className="contact">
                    <div className="menu-icon">
                        <i className="fas fa-bars" aria-hidden="true"></i>
                    </div>

                    <section id="menu">
                        <nav>
                            <Link to="/">About</Link>
                            <Link to="/">Portfolio</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Contact</Link>
                        </nav>
                    </section>

                    <section className="info">
                        <div className="logo"></div>
                            <InfoBox/>   
                    </section>

                    <section className="content-area">
                        <div className="form-container">
                            <div className="form">
                                <form action="/" method="POST">
                                    <h4>Contact me!</h4>
                                    <input type="text" name="name" required placeholder="Name"></input>
                                    <input type="email" name="email" required placeholder="Email"></input>
                                    <input type="budget" name="budget" placeholder="State your budget"></input>
                                    <textarea name="message" rows="12" required placeholder="message">Message</textarea>
                                    <button type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="contact-section">
                            <div className="contact-info">
                                <h1> Get in Touch </h1>
                                <div className="contact-box">
                                    <h5>PHONE</h5>
                                    <p>07xxxxxxxxx</p>
                                </div>
                                <div className="contact-box">
                                    <h5>EMAIL</h5>
                                    <p>rohanpschauhan23@gmail.com</p>
                                </div>
                                <div className="contact-box">
                                    <h5>ADDRESS</h5>
                                    <p>07xxxxxxxxx</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </body>

            </div>   

        );
    }
}


export default Contact;