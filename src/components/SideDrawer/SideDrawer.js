import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';


const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a><NavLink to="/">Home</NavLink></a></li>
                <li><a><NavLink to="/about">About</NavLink></a></li>
                <li><a><NavLink to="/portfolio">Portfolio</NavLink></a></li>
                <li><a><NavLink to="/hire-me">Hire</NavLink></a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;