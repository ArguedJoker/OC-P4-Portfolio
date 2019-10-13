import React, { Component } from 'react';
import './styles/css/Reset.css';
import './styles/css/general.css';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header>
            <Navbar>
              <div className="navigation">
                <li>
                  <NavLink exact activeClassName="selected" to="./Home">Home</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="selected" to="./About">About</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="selected" to="./Work">Work</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="selected" to="./Contact">Hire</NavLink>
                </li>
              </div>
            </Navbar>
          </Header>

          <Route path="/home" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/work" component={ Work } />
          <Route path="/contact" component={ Contact } />

          <Footer>
            <div className="left">
              <p>Copyright &copy; { new Date().getFullYear()}-{new Date().getFullYear() + 1}</p>
            </div>
            <div className="right">
              <a href="https://github.com/ArguedJoker">Github</a>
              <a href="www.linkedin.com/in/rohan-chauhan-9bba73102">LinkedIn</a>
            </div>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
