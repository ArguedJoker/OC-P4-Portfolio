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
                            <a href="/">
                                <ProjectBox boxId="1">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="/">
                                <ProjectBox boxId="2">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="/">
                                <ProjectBox boxId="3">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="/">
                                <ProjectBox boxId="4">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="/">
                                <ProjectBox boxId="5">
                                    <h2>Brooklyn Film Festival</h2>
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
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="3">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="4">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="/">
                                <ProjectBox boxId="5">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>
                    </div>
                </Hero>
            </div> 

        );
    }
}