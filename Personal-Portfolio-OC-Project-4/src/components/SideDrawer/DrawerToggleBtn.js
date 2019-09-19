import React from 'react';
import DrawerToggleButton from './DrawerToggleButton.scss'


const drawerToggleButton = props => (
    <button className="toggle-button" onCLick={props.click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </button>
);

export default drawerToggleButton;