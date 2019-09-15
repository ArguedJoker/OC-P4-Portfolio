import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render () {
        return (
            <Fragment>
                <section>
                    <div className="home">
                        <div className="home-layout">
                            <h1>Welcome!</h1>
                            <br/>
                            <q>"Every great developer you know got there by solving problems they were unqualified to solve until they did it"</q>
                            <br/>

                            <br/>
                            <h3> ~ Patrick McKenzie</h3>
                            <br/>
                            <p>The first step is crazy ... it gets easier after that. After all one needs a little insanity to be sane. Tell me your idea. It might not be so crazy after all.</p>
                        </div>

                        <Link to="./About" className="entry-btn">Enter</Link>
                    </div>
                </section>

            </Fragment>
        )
    }
}
