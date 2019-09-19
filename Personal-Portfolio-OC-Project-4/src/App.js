import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Hire from './components/Hire';
import Project from './components/Project';
import projects from './db.json';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';


import Project1 from './components/Project1';



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

            backdropClickHandler = ()=> {
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
                            <Route path='/hire-me' component={ Hire }>Hire Me</Route>
                            <Route exact path='/portfolio' render={ routerProps => {
                                return  <Portfolio {...routerProps} projects={projects} /> }
                            }>Portfolio</Route>
                            <Route path={`/portfolio/:id`} render={ routerProps=> {
                                return <Project {...routerProps} projects={projects} /> }
                            } />
                           
                            </div>
                        </Fragment>
                    </Router>
                )
            }
        }
