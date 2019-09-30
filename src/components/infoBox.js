import React from 'react';
import { Link } from 'react-router-dom';

class InfoBox extends React.Component {
    render () {
        return (
            <div className="infoBox">
                <h4>Email:</h4>
                <p>rohanpschauhan23@gmail.com</p>
                <h4>Phone:</h4>
                <p>07xxxxxxxxx</p>
                <h4>Find me on:</h4>
                <div className="icon-section">
                    <Link><i className="fab fa-github-square"></i></Link>
                    <Link><i className="fab fa-aedin"></i></Link>
                    <Link><i className="fab fa-facebook-square"></i></Link>
                    <Link><i className="fab fa-instagram"></i></Link>
                </div>
            </div>

        )
    }
}

export default InfoBox;

