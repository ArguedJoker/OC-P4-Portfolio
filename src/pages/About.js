import React, { Component } from 'react';
import Box from '../components/Box/Box';
import List from '../components/List/List';
import profilePicture from '../media/img/portfolio/rohan.jpg'

export default class About extends Component {
    render() {
        return (
            <div className="about-page">
                <section id="about" className="section section-about">
                    <div>
                        <Box>
                            <div className="profile">
                                <div className="row">
                                    <div className="profile-photo mw-100">
                                        <img alt="Rohan Pratap Singh Chauhan" src={ profilePicture } className="img-fluid photo" />
                                    </div>
                                </div>
                                <div className="col-lg-7 profile-center">
                                    <div className="profile-info">
                                        <div className="profile-items">
                                            <div className="profile-preword"><span>Hello There!</span>
                                            </div>
                                        </div>
                                        <h1 className="profile-title">
                                            <span> I'm </span> Rohan Chauhan
                                        </h1>
                                        <h2 className="profile-position"> Full Stack Web Developer</h2></div>
                                    <ul className="profile-list">
                                        <List title="Location" cont="Blackpool, United Kingdom" />
                                        <List title="E-mail" cont="rpscdevelopments@gmail.com" />
                                        <List title="Education" cont="BSc Full-Stack Web Development  2018+" />
                                        <List title="Job" cont="Freelance" />
                                        <List title="Educational Institution" cont="OpenClassrooms" />
                                        <br/>
                                        <List title="Hobbies" cont="Technology, Guitar, Gyming, Reading" />
                                    </ul>
                                </div>
                            </div>
                        </Box>
                    </div>
                </section>

                <section className="about--content">
                    <h3> Personal Statement </h3>
                    <p> A strong logical thinker who is quick to understand concepts and has a keen interest in all things technology and the Internet. He just wants to know how things work! He strives to make an impact on the future of any company he works with and possess the enthusiasm and commitment to learn and develop his career within a fast-paced and growing business. After working in the health industry, he made the decision to change careers after falling in love with programming and has turned his hobby and passion into a way to help people. Right now he is looking for a suitable opportunity that will not only take his career to the next level but will also allow him to work alongside a very specialised team. </p>
                </section>
            </div> 

        );
    }
}