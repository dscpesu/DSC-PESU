import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faTwitter, faLinkedin, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// library.add(faDesktop, faChevronLeft, faChevronRight, faFacebook, faTwitter, faLinkedin, faDribbble, faGithub);
library.add(faDesktop, faChevronLeft, faChevronRight, faInstagram);

class Footer extends React.Component {
  render() {
    return (
      <footer className="hero is-white has-text-centered is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <img
                  className="footer-logo"
                  style={{
                    width: "350px",
                    margin: "0 0 25px 0"
                  }}
                  src={require("../assets/DSC-V.png")}
                  alt="DSC PESU Logo"
                />
                <h2 className="subtitle">
                  <FontAwesomeIcon icon="chevron-left" /> Coded <FontAwesomeIcon icon="chevron-right" /> with a <FontAwesomeIcon icon="desktop" /> by VRG.
                </h2>
                <div className="social-links" style={{
                  margin: "25px 0 0 0"
                }}>
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
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
            </a> */}
                  <a href="https://www.instagram.com/dscpesu/" target="_blank" rel="noopener noreferrer">
                    <span className="icon is-large">
                      <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot" />
      </footer>
    );
  }
}

export default Footer;
