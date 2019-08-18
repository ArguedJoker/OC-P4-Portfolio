import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import About from './components/about.js';


// Importing scss styling

import './App.css';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
        <div className="Landing-Page">
          <Layout>
              <Header title="Rohan Chauhan | Web Developer" scroll>
                  <Navigation>
                    <a href="./components/about.js">About</a>
                    <a href="./components/resume.js">Resume</a>
                    <a href="./components/portfolio.js">Portfolio</a>
                    <a href="./components/contact.js">Contact</a>
                  </Navigation>
              </Header>
              <Drawer title="">
                  <Navigation>
                      <a href="./components/about.js">About</a>
                      <a href="./components/resume.js">Resume</a>
                      <a href="./components/portfolio.js">Portfolio</a>
                      <a href="./components/contact.js">Contact</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content">
                    <About/>
                  </div>
                  
              </Content>
          </Layout>
        </div>
    </div>
  );
}

export default App;
