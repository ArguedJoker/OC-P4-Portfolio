import React, { component } from 'react';
import { Link } from 'react-router-dom';






    class Resume extends React.Component {
        render() {
            return(
            
            <div>    
           
                <body className="resume">
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
                        <div className="logo"></div>
                        
                    </section>

                    <section className="content-area">

                        <div className="scroll-section">

                            {/*Education Starts*/}
                            
                            <div className="category">
                                <div className="title">
                                <h1>Education</h1>
                                </div>
                            </div>
                            
                            <div className="exp-section">
                                <div className="exp">
                                    <h5>Fullstack Developer Track</h5>
                                    <p>Level 6 Diploma Web Development, International (Fullstack - online Course)</p>
                                    <p>Open Classrooms, Paris</p>
                                    <p>2018 +</p>
                                </div>
                                <div className="exp">
                                    <h5>AMSPAR</h5>
                                    <p>CQF Level 5 Diploma in Primary Care and Health Management</p>
                                    <p>City and Guilds</p>
                                    <p>2017 - 2019</p>
                                </div>
                                <div className="exp">
                                    <h5>Biomedical Sciences (Bsc - Hons)</h5>
                                    <p>Bachelors Degree, 2:2</p>
                                    <p>University of Hull</p>
                                    <p>2014 - 2016</p>
                                </div>
                            </div>

                            {/*Education Ends*/}

                            {/*Work Experience starts*/}

                            <div className="category">
                                <div className="title">
                                    <h1>Work Experience</h1>
                                </div>

                                <div className="exp-section">
                                    <div className="exp">
                                        <h5>Focused Care Lead</h5>
                                        <p><span>Elizabeth Street Surgery</span></p>
                                        <p>Varied roles with a focus on maintaining and optomising patient care:
                                            <ul>
                                                <li>Business Cases</li>
                                                <li>Audits</li> 
                                                <li>Referrals</li>
                                                <li>Customer Service</li> 
                                                <li>Mentoring</li> 
                                                <li>Conflict Resolution</li> 
                                                <li>IG, Safeguarding and GDPR Lead</li> 
                                                <li>IT Lead</li>      
                                            </ul>
                                        </p>
                                        <p>March 2017 +</p>
                                    </div>
                                    <div className="exp">
                                        <h5>Liaison Officer & Developer Support</h5>
                                        <p><span>Smart Point Applications</span></p>
                                        <p>Project: My Health Uk (MHUK)</p>
                                        <p>Varied roles that branched from:
                                            <ul>
                                                <li>Sales</li> 
                                                <li>Presentations</li> 
                                                <li>Customer Service</li> 
                                                <li>Business Cases</li> 
                                                <li>Tech support</li> 
                                                <li>Application installation</li> 
                                                <li>Front-end support</li> 
                                                <li>Bug testing</li>
                                            </ul>
                                        </p>
                                        <p>March 2017 +</p>
                                    </div>
                                    <div className="exp">
                                        <h5>Trainee Assistant Practice Manager</h5>
                                        <p><span>Abbey-Dale Surgery</span></p>
                                        <p>Internship which gave the opportunity to learn the basics of practice management in primary care</p>
                                        <p>October 2016 - February 2017</p>
                                    </div>

                                </div>
                            </div>

                            {/*Work Experience Ends*/}

                        </div>
                        
                    </section>
                </body>
            </div>
            );
        }
    }


export default Resume;