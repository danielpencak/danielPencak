import './Footer.css';
import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import GitHubLogo from './assets/github.png';
import LinkedInLogo from './assets/linkedin.png';
import Resume from './assets/danielpencak.pdf';
import Share from './assets/share.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="contact">
          <Row className="show-grid">
            <Col xs={12} sm={6} md={8}>
              <h3>Daniel Pencak</h3>
              <h4>Chicago, IL</h4>
              <h4 className="email">danielpencak@gmail.com</h4>
            </Col>
          </Row>
        </div>
        <div className="subFooter">
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <div className="links">
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
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
