import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import About from './components/about.js';

function App() {
  return (
    <div className="App">
        <div className="demo-big-content">
          <Layout>
              <Header title="Rohan Chauhan | Web Developer" scroll>
                  <Navigation>
                      <a href="/">Home</a>
                      <a href="/">About</a>
                      <a href="/">Resume</a>
                      <a href="/">Projects</a>
                      <a href="/">Blog</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="/">Home</a>
                      <a href="/">About</a>
                      <a href="/">Resume</a>
                      <a href="/">Projects</a>
                      <a href="/">Blog</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <About />
              </Content>
          </Layout>
        </div>
    </div>
  );
}

export default App;
