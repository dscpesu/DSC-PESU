import React from "react";
import Button from '@material/react-button';

class Intro extends React.Component {
  render() {
    return (
      <section className="dsc-i hero has-text-centered is-fullheight is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <img
                  className="avatar is-vcentered"
                  src={require("../assets/DSC-Badge-by-VRG.svg")}
                  width={256}
                  alt="DSC Badge"
                />
                <h1
                  className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile"
                  style={{
                    fontWeight: "500"
                  }}
                >
                  Welcome to The Developer Student Clubs
                </h1>
                <h2 className="subtitle is-size-2-desktop">PES University</h2>
                {/* <a href="https://bit.ly/dsc-pesu-projects" target="_blank" rel="noopener noreferrer">
                  <Button raised className="b-r">
                    Enroll Now!
                  </Button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot" />
      </section>
    );
  }
}

export default Intro;
