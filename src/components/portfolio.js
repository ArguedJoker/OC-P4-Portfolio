import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from './infoBox.js';



class Portfolio extends React.Component {
    render() {
        return(


        <div>    
           
            <body className="portfolio">
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
                    <InfoBox />
                </section>

                <section className="content-area">

                    <div className="scroll-section">

                        {/*Project section Starts*/}

                        <div className="projects">
                            <div className="title">
                            <h1>Latest Works</h1>
                            <p>Check out some of my latest projects. By the way this portfolio was made in React.</p>
                        </div>
                            
                        <div className="project-section">
                            <div className="project-box">
                                <div className="project-box-1">
                                    <div className="grey-bg">
                                        <div className="project-info">
                                            <div className="project-details">
                                                Client: Revive Hair Studio <br/> Year: 2018 <br/> Type: Static WordPress Site
                                            </div>
                                            <div className="project-title">The Revive Hair Studio</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-box-2" >
                                    <div className="grey-bg">
                                        <div className="project-info">
                                            <div className="project-details">
                                                Client: Open Classrooms Project 3 <br/> Year: 2018 <br/> Type: Static Landing site (html, css and js)
                                            </div>
                                            <div className="project-title">Brooklyn Film Festival (BOFF)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-box-3">
                                    <div className="grey-bg">
                                        <div className="project-info">
                                            <div className="project-details">
                                                Client: Own Project <br/> Year: 2019 <br/> Type: Web App (react)
                                            </div>
                                            <div className="project-title">The Score Keep App</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-box-4">
                                    <div className="grey-bg">
                                        <div className="project-info">
                                            <div className="project-details">
                                                Client: Open Classroms Project 2 <br/> Year: 2018 <br/> Type: Static WordPress Site
                                            </div>
                                            <div className="project-title">Chalets and Caviars</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                    {/*Projects section Ends*/}
       
                </section>
       
            </body>
        </div>

        )
    }
}


export default Portfolio;