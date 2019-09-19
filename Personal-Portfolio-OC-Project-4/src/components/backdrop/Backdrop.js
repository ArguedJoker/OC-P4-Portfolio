import React from 'react';

import './Backdrop.scss';

const backdrop = props => (
    <div className="backdrop" onclick={props.click}></div>
);

export default backdrop;