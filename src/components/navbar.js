import React from "react";
import Button from '@material/react-button';

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="dsc-n navbar is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src={require("../assets/DSC-H.png")}
                alt="Developer Student Clubs"
                height={48}
              />
            </a>
            <div
              role="button"
              className="navbar-burger"
              data-target="navbarMenu"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start" />
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href="#workshops" rel="noopener noreferrer">
                Workshops
              </a>
              <a className="navbar-item" href="#team" rel="noopener noreferrer">
                Team
              </a>
              <a className="navbar-item" href="projects" rel="noopener noreferrer">
                Projects
              </a>
              <a className="navbar-item" href="#footer" rel="noopener noreferrer">
                Social
              </a>
              {/* <div className="navbar-item">
                <a href="https://bit.ly/dsc-pesu-projects" target="_blank" rel="noopener noreferrer">
                  <Button outlined className='b-o'>
                    Enroll Now!
                  </Button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
