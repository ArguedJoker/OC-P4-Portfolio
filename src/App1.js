import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content } from 'react-mdl';
import About from './components/about.js';
//import Resume from './components/resume.js';
import Portfolio from './components/portfolio.js';
//import Contact from './components/contact.js';

// Importing scss styling

import Main from './scss/main.scss';

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 1 };
    }

    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header>
                        <HeaderRow title="Title" />
                        <HeaderTabs ripple activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                            <Tab></Tab>
                            <Tab><a>About</a></Tab>
                            <Tab><a>Resume</a></Tab>
                            <Tab><a>Portfolio</a></Tab>
                            <Tab><a>Contact</a></Tab>
                            <Tab>Blog</Tab>
                            <Tab>Tutorials</Tab>
                        </HeaderTabs>
                    </Header>
                    <Drawer title="Title" />
                    <Content>
                        <div className="page-content"><About/> {this.state.activeTab}</div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Demo;
