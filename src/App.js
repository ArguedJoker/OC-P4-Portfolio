import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Portfolio1 from './components/Portfolio1';
import Hire from './components/Hire';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

/* SCSS */
import Main from './scss/main.scss';

        export default class App extends Component {
            state = {
                sideDrawerOpen: false
            };
            
            drawerToggleClickHandler = () => {
                this.setState((prevState) => {
                    return {sideDrawerOpen: !prevState.sideDrawerOpen};
                });
            };

            backdropClickHandler = () => {
                this.setState({sideDrawerOpen: false});
            };

            render() {
                let backdrop;

                if (this.state.sideDrawerOpen) {
                    backdrop = <Backdrop  click={this.backdropCLickHandler}/>
                }
                return (
                    <Router>
                        <Fragment>
                            <div style={{height: '100%'}}>
                            <Navbar drawerClickHandler click={this.drawerClickHandler} />
                            <SideDrawer show={this.state.sideDrawerOpen}/>
                            {Backdrop}
                            <main style={{height: '100%'}}/>
                            <Route exact path='/' component={ Home }>Home</Route>
                            <Route path='/about' component={ About }>About</Route>
                            <Route path='/work' component={ Work }>Work Experience</Route>
                            <Route path='/hire-me' component={ Hire }>Hire Me</Route>
                            <Route path='/portfolio1' component={ Portfolio1 }
                            >Portfolio</Route>
                            </div>
                        </Fragment>
                    </Router>
                )
            }
        }
