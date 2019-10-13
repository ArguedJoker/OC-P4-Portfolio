import React, {Component} from 'react';
import Hero from '../components/Hero/Hero';
import ProjectBox from '../components/ProjectBox/ProjectBox';

export default class Work extends Component {
    render() {
        return (
            <div className="xl-container work-page">
                <Hero>
                    <div className="col-xs-12 col-md-12 cold-lg-12">
                        <div className="typewriter--effect">
                            <h1>Welcome, I used React in this!</h1>
                        </div>
                    </div>

                    <div className="row hide-larger-screens">

                    {/* For larger screens */}

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="https://2ae9361012c14671a3f5fbc0b7f694fd.codepen.website">
                                <ProjectBox boxId="1">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="therevivehairstudio.com">
                                <ProjectBox boxId="2">
                                    <h2>Revive Hair Studio</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="http://dev-caviar-and-chalet.pantheonsite.io/">
                                <ProjectBox boxId="3">
                                    <h2>Chalet & Caviar</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="/">
                                <ProjectBox boxId="4">
                                    <h2>Score Keep</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="https://40b4ec76fc224b0dab4d518ce6436dbc.codepen.website">
                                <ProjectBox boxId="5">
                                    <h2>Tribute Page</h2>
                                </ProjectBox>
                            </a>
                        </div>
                    </div>
                    
                    {/* For Medium to Smaller Screens */}

                    <div className="row hide-md-sm-devices">
                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="1" Styles={{minHeight: '98%', height:'250px'}}>
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="2">
                                    <h2>Revive Hair Studio</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="3">
                                    <h2>Chalet & Caviars</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="4">
                                    <h2>Score Keep</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="5">
                                    <h2>Tribute Page</h2>
                                </ProjectBox>
                            </a>
                        </div>
                    </div>
                </Hero>
            </div> 

        );
    }
}