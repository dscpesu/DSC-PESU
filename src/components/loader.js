import React from "react";
import '../css/Google Dots by VRG.scss';

class Loader extends React.Component {
  render() {
    return (
      <div className="dsc-l hero is-fullheight">
        <div className="pageloader hero-body is-active is-bottom-to-top">
          <div className="container has-text-centered">
            <div className="dot" id="blue"></div>
            <div className="dot" id="red"></div>
            <div className="dot" id="yellow"></div>
            <div className="dot" id="green"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
