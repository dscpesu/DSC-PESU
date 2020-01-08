import React, { Component } from 'react';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        {/* <h1
          className="title is-spaced is-size-2-desktop is-size-3-mobile"
        >
          Here are some pictures from the event!
          </h1> */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnJ9RyNSXMhFjtD4rCmY3XaosYCch1W7V1f0_DCyl_A3Bxdw/viewform" rel="noopener noreferrer">
          <div className="google-border">
            <img src={require("./assets/ExploreML.png")} alt="register"></img>
            <h1 className="title row">Register Now!</h1>
          </div>
        </a>
      </div>
    );
  }
}

export default Links;
