import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default class Project extends Component {
    render () {
        const { match, projects } = this.props
        console.log(this.props.match.params)
        console.log(this.props.match.params.id)
        return (
            <Fragment>
                <h1>{projects[match.params.id].title}</h1>
                <NavLink to="./Project1">{projects[match.params.id].link}</NavLink>
            </Fragment>
        )
    }
}

