import React from "react";
import '../css/Google Dots by VRG.scss';

class Loader extends React.Component {
  render() {
    return (
      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="dot" id="blue"></div>
            <div class="dot" id="red"></div>
            <div class="dot" id="yellow"></div>
            <div class="dot" id="green"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loader;
