import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faDesktop, faChevronLeft, faChevronRight, faFacebook, faTwitter, faLinkedin, faDribbble, faGithub);

class Footer extends React.Component {
  render() {
    return (
      <footer className="section is-white is-medium has-text-centered">
        <div className="container">
          <div
            className="logo"
            style={{
              margin: "0 0 75px 0"
            }}
          >
            <img
              className="footer-logo"
              style={{
                width: "350px"
              }}
              src={require("../assets/DSC-V.png")}
              alt="DSC PESU Logo"
            />
          </div>
        </div>
        <div className="container">
          <h2 className="subtitle">
            <FontAwesomeIcon icon="chevron-left" /> Coded <FontAwesomeIcon icon="chevron-right" /> with a <FontAwesomeIcon icon="desktop" /> by VRG.
          </h2>
        </div>
        <div
          style={{
            margin: "50px 0 0 0"
          }}
        >
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span className="icon is-large">
                <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
              </span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span className="icon is-large">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
              </span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span className="icon is-large">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
              </span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span className="icon is-large">
                <FontAwesomeIcon icon={['fab', 'dribbble']} size="lg" />
              </span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span className="icon is-large">
                <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
