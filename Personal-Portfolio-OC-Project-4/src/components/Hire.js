import React, { Component, Fragment } from 'react';
//import SocialMediaButtons from './SocialMedia/SocialMediaButtons';

export default class Hire extends Component {

    
    render () {


        return (

            <Fragment>
                <div className="form-container">
                    <div className="form">
                        <form className="form-template" action="/" method="POST">
                            <h4>Contact Me!</h4>
                            <input type="text" name="name" required placeholder="Name" className="Name"></input>
                            <input type="email" name="email" required placeholder="Email" className="Email"></input>
                            <input type="budget" name="budget" placeholder="State your budget" className="Budget"></input>
                            <textarea name="message" rows="24" required placeholder="message" className="Message"></textarea>
                            <button type="submit"className="tertiary-btn">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-section">
                        <div className="contact-info">
                            <h1> Get in Touch </h1>
                            <div className="contact-box">
                                <h3>So what are you waiting for? Let's bring your idea out of your head and change the world!</h3>
                                
                                {/*
                                <h5>SOCIAL MEDIA</h5>
                                <LinkedInLoginButton onClick={ () => (url("www.Linkedin.com"))}
                                <GithubLoginButton onClick={ () => (url("www.facebook.com"))} 
                                */} 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}
