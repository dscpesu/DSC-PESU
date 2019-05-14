import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
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
            <a
              role="button"
              className="navbar-burger"
              data-target="navbarMenu"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start" />
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href="https://pesuacademy.com/Academy" target="_blank" rel="noopener noreferrer">
                PESU Academy
              </a>
              <div className="navbar-item">
                <a href="https://bit.ly/dsc-pesu-projects" target="_blank" rel="noopener noreferrer">
                  <button
                    className="mdc-button mdc-button--outlined"
                  >
                    <span className="mdc-button__label">Register Now!</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
