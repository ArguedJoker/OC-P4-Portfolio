import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Portfolio1 extends Component {
    render () {
        
        return (
        <Router>
            <Fragment>
                <div className="scroll-section">
                    <div className="title">
                        <h1>Latest Works</h1>
                            <p>Check out some of my latest projects. By the way this portfolio was made in react!</p>
                    </div>
                    <div className="project-section">
                        <div className="project-box1">
                            <div className="grey-bg">
                                <img className="Hair" src="/img/projects/hair.png"></img>
                                <div className="project-details">
                                    <p className="format">Client: Revive Hair Studio</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Year: 2018</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Type: Static Site</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Technology: WordPress</p>
                                </div>
                                <div className="project-title"><a href="https://therevivehairstudio.com">The Revive Hair Studio</a></div>
                            </div>
                        </div>

                        <div className="project-box2">
                            <div className="grey-bg">
                                <img className="BOFF" src="/img/projects/BOFF.png"></img>
                                <div className="project-details">
                                    <p className="format">Client: OpenClassrooms</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Year: 2018</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Type: Static Landing </p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Technology: HTML5, CSS3, Bootstrap</p>
                                </div>
                                <div className="project-title">
                                    <a href="https://2ae9361012c14671a3f5fbc0b7f694fd.codepen.website">Brooklyn Film Festival (BOFF)</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-box3">
                            <div className="grey-bg">
                                <img className="Chalet" src="/img/projects/realestate.png"></img>
                                <div className="project-details">
                                    <p className = "format"> Client: Open Classrooms</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Year: 2018</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Type: Ecommerce Website</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Technology: WordPress, CSS</p>
                                </div>
                                <div ClassName="project-title">
                                    <a href="http://dev-caviar-and-chalet.pantheonsite.io/">Chalets & Caviars</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-box4">
                            <div className="grey-bg">
                                <img className="Keeper" src="/img/projects/Score.png"></img>
                                <div className="project-details">
                                    <p className="format">Client: Own Project</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Year: 2019</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Type: Browser Application</p>
                                    <br/>
                                    <p className="slash">|</p>
                                    <p className="format">Technology: React, JS, CSS </p>
                                </div>
                                <div ClassName="project-title">
                                    Score Keep
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            </Fragment>             
        </Router>          
        )
    }
}
