import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {this.props.children}
            </div>
        );
    }
}