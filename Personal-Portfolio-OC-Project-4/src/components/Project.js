import React, { Component, Fragment } from 'react'

export default class Project extends Component {
    render () {
        const { match, projects } = this.props
        console.log(this.props.match.params)
        console.log(this.props.match.params.id)
        return (
            <Fragment>
                <h1>{projects[match.params.id].title}</h1>
                <a href='#'>{projects[match.params.id].link}</a>
            </Fragment>
        )
    }
}

