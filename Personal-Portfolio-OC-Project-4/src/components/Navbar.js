import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from './../components/SideDrawer/DrawerToggleBtn';
import './../scss/_navbar.scss';


const Navbar = props => (
    <div className="Navbar">
        <div className="Navbar__navigation">
            <div className="Navbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="Navbar__logo">
                {/*<img src="./../img/logo.jpg" />*/}
            </div>
            <div className="spacer"></div>
            <div className="Navbar__navigation-items">
                <ul>
                    <li><a><NavLink to="/">Home</NavLink></a></li>
                    <li><a><NavLink to="/about">About</NavLink></a></li>
                    <li><a><NavLink to="/portfolio">Portfolio</NavLink></a></li>
                    <li><a><NavLink to="/hire-me">Hire</NavLink></a></li>
                </ul>
            </div>
                            
        </div>
    </div>
);


export default Navbar;