import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

        export default class Work extends Component {

            render() {
                
                return(
                    <Router>
                        <Fragment>
                            <div className="Experience">
                                <div className="Work-exp">
                                    <h1>Work Experience</h1>
                                </div>
                                <div className="current">
                                    <div className="work_1">
                                        <h3>Elizabeth Street Surgery</h3>
                                        <h5>Title: Focused Care Support</h5>
                                        <h6>Role: Mid Level Management</h6>
                                        <p> A varied role where I have developed the skills: 
                                            <ol>
                                                <li>- Business Cases</li>
                                                <li>- Audits</li>
                                                <li>- Referrals</li>
                                                <li>- Customer Service</li>
                                                <li>- Mentoring</li>
                                                <li>- Conflict Resolution</li>
                                                <li>- Information Governance</li>
                                                <li>- Safeguarding</li>
                                                <li>- GDPR Lead</li>
                                                <li>- Fire Marshall</li> 
                                                <li>- IT Lead</li>
                                                <li>- Rota</li> 
                                            </ol>
                                        </p>
                                    </div>
                                    <div className="work_2">
                                        <h3>Smart Point Applications</h3>
                                        <h5>Title: Liaison Officer & Developer Support</h5>
                                        <h6>Role: Mid Level Management</h6>
                                        <p> A varied role where I have developed the skills: 
                                            <ol>
                                                <li>- Sales</li>
                                                <li>- Presentations</li>
                                                <li>- Customer Services</li>
                                                <li>- Business Cases</li>
                                                <li>- Mentoring</li>
                                                <li>- Conflict Resolution</li>
                                                <li>- Tech Support</li>
                                                <li>- Application installation</li>
                                                <li>- Front-end Support</li>
                                                <li>- Bug Testing</li>  
                                            </ol>
                                        </p>
                                    </div>    
                                    <div className="Education">
                                        <h1>My Education: </h1>
                                        <br/>
                                        <p>Fullstack Developer Track</p>
                                        <p>DIPLOMA (LEVEL 6)</p>
                                        <p>International, France, Paris  OPEN CLASSROOMS</p>
                                        <p>2018+ Current</p>
                                        <br/>
                                        <p>AMSPAR, CQF in Primary Care and Health Management</p>
                                        <p>DIPLOMA (LEVEL 5)</p>
                                        <p>United Kingdom, City & Guilds</p>
                                        <p>2017-2019</p>
                                        <br/>
                                        <p>Biomedical Sciences (Bsc-Hons)</p>
                                        <p>BACHELORS DEGREE</p>
                                        <p>University of Hull, UK</p>
                                        <p>2014-2016</p>
                                    </div>
                                </div>
                            </div>
                        
                        </Fragment>
                    </Router>
                )
            }
        }
