import React, { Component, Fragment } from 'react'

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
                            <textarea name="message" rows="12" required placeholder="message" className="Message"></textarea>
                            <button type="submit"className="tertiary-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </Fragment>

        )
    }
}
