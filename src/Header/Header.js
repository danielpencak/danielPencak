import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Experience from '../Experience/Experience.js';
import Home from '../Home/Home.js';
import Education from '../Education/Education.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import Headroom from 'react-headroom';
import './Header.css';
import GitHubLogo from './assets/github.png';
import LinkedInLogo from './assets/linkedin.png';
import Share from './assets/share.png';
import Resume from './assets/danielpencak.pdf';

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div className="Header">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <div className="name">
                  <h3>
                    Daniel Pencak
                  </h3>
                  <a className="anchors" href="https://github.com/danielpencak">
                  <img className="gitHubLogo" src={ GitHubLogo } alt={ 'GitHub' } />
                </a>
                <a className="anchors" href="https://www.linkedin.com/in/danielpencak">
                <img className="linkedInLogo" src={ LinkedInLogo } alt={ 'GitHub' } />
              </a>
              <a className="anchors" href={ Resume }>
                <img className="share" src={ Share } alt={ 'Resume' } />
              </a>
            </div>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              {/* <Nav pullRight> */}
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/" role="presentation">Home</Link>
                  </li>
                  <li>
                    <Link to="/experience">Experience</Link>
                  </li>
                  <li>
                    <Link to="/education">Education</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              {/* </Nav> */}
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/education" component={Education}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>

        </div>
      </Router>
    );
  }
}
