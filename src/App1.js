import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content } from 'react-mdl';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/about.js';
import Resume from './components/resume.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';

// Importing scss styling

import Main from './scss/main.scss';

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 1 };
    }

    render() {
        return (

        <BrowserRouter>    
            <div style={{height: '1000px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header>
                        <HeaderRow title="Rohan Chauhan | Web Developer" />
                        <HeaderTabs ripple activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                            <Tab></Tab>
                            <Tab><Link to="/">About</Link></Tab>
                            <Tab><Link to="/resume" >Resume</Link></Tab>
                            <Tab><Link to="/portfolio">Portfolio</Link></Tab>
                            <Tab><Link to="/contact">Contact</Link></Tab>
                        </HeaderTabs>
                    </Header>
                    <Drawer title="Title" />
                    <Content>
                        <div className="page-content">
                            <Route path="/" component={About}> {this.state.activeTab} </Route>
                            <Route path="/resume" component={Resume} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </Content>
                </Layout>
            </div>
    </BrowserRouter>
        );
    }
}

export default Demo;
