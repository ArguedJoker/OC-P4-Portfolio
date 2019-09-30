import React, { Component, Fragment } from 'react'

import { NavLink } from 'react-router-dom';

export default class Portfolio extends Component {
    render () {
        const { projects } = this.props
        return (
            <Fragment>
                <div className="portfolio">
                    <h1>Select a project to learn more.</h1>
                { Object.keys(projects).map(id=> {
                    return (
                        <Fragment>
                            <div className="projects">
                                <NavLink key={id} to={`/project/${id}`}><p>{projects[id].title}</p></NavLink>
                                <br/>
                                <NavLink key={id} to={`/project/${id}`}><p>{projects[id].link}</p></NavLink>
                            </div>
                            
                            
                        </Fragment>
                    )
                }) }
                </div>
                
            </Fragment>
        )
    }
}
