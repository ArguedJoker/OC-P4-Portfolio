import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import About from './components/about.js';
import Resume from './components/resume.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';



// Importing scss styling

import './App.css';
import './scss/main.scss';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <div className="Landing-Page">
          <Layout>
              <Header title="Rohan Chauhan | Web Developer" scroll>
                  <Navigation>
                    <Link to="/">About</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="">
                  <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/portfolio">Portfolio</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content">
                    <Route path="/" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                  </div>
                  
              </Content>
          </Layout>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
