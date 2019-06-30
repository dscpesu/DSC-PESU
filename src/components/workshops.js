import React from "react";

class Workshops extends React.Component {
  render() {
    return (
      <section
        className="section workshops is-medium is-white has-text-centered"
        id="workshops"
        style={{
          margin: "0 0 50px 0"
        }}
      >
        <div className="container is-narrow">
          <h1
            className="title is-spaced is-size-2-desktop is-size-3-mobile"
            style={{
              margin: "0 0 100px 0"
            }}
          >
            Our Workshops
          </h1>
          <div className="project-grid">
            <div className="columns is-multiline is-mobile">
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                <div className="card" style={{
                          borderRadius: "20px"
                        }}>
                  <div className="card-image">
                    <figure className="image">
                      <img
                        style={{
                          display: "block",
                          borderRadius: "20px 20px 0px 0px"
                        }}
                        src={require("../assets/Lord-Commander.jpg")}
                        alt="Lord-Commander"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      {}
                      <div className="media-content">
                        <p className="title is-4">
                          Introduction to Machine Learning
                        </p>
                        <p className="subtitle is-6">Our first workshop.</p>
                      </div>
                    </div>
                    <div className="content has-text-left">
                      Here is our Lord Commander, giving his introductory speech
                      before the workshop.
                      <br />
                      <a href="https://www.instagram.com/dscpesu/" target="_blank" rel="noopener noreferrer">@DSCPESU</a>
                      <br />
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href="https://www.instagram.com/p/BvjuXVYDLdI/" target="_blank" rel="noopener noreferrer" className="card-footer-item">
                      Learn More...
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Workshops;
