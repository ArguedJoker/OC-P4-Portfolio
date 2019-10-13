import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return(

            <div className="home-page">
                
                <div>
                    <h1>Welcome to Rohan's Website!</h1>
                    <br/>
                    <q>"Every great developer you know got there by solving problems they were unqualified to solve until they did it"</q>
                    <br/>
                    <br/>
                    <h3> ~ Patrick McKenzie</h3>
                    <br/>                   
                        
                    <Link to="./work" className="primary-btn">Projects</Link>
                                    
                    <Link to="./contact" className="tertiary-btn">Contact</Link>
                                
                    <p>Click below to see what I have created with WordPress</p>
                    
                    <a href="https://rohan-chauhan.com" className="secondary-btn">WordPress Portfolio</a>
                </div>

            </div>
        )
    }
}

                                    


     