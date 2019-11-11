import React from "react";
import '../css/team.css';

class Team extends React.Component {
  render() {
    return (
      <section className="dsc-t hero has-text-centered is-dark">
        <h1 className="subtitle is-size-1-desktop is-size-2-tablet is-size-3-mobile">
          <span
            style={{
              color: "#4285F4"
            }}
          >
            Meet{" "}
          </span>
          <span
            style={{
              color: "#DB4437"
            }}
          >
            the{" "}
          </span>
          <span
            style={{
              color: "#F4B400"
            }}
          >
            DSC{" "}
          </span>
          <span
            style={{
              color: "#0F9D58"
            }}
          >
            Team
          </span>
        </h1>
        <div className="team" id="team">
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Yash.jpeg")} alt="Profile" />
                  </div>
                  <div className="name">Yash Pradhan</div>
                  <div className="info">DSC Lead</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="http://instagram.com/yazzpradzz" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Instagram.svg")} alt="Instagram" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="http://github.com/techgod" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="http://linkedin.com/in/yashpradhan98" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Anudeep.jpg")} alt="Profile" />
                  </div>
                  <div className="name">D V Anudeep</div>
                  <div className="info">Android</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    {/* <li className="item">
                      <a href="#">
                        <img src={require("../assets/Facebook.svg")} alt="Facebook" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <img src={require("../assets/Twitter.svg")} alt="Twitter" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Mayank.jpeg")} alt="Profile" />
                  </div>
                  <div className="name">Mayank Agarwal</div>
                  <div className="info">
                    Artificial Intelligence & Neural Networks
                  </div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    {}
                    <li className="item">
                      <a href="https://github.com/mayankagarwal44442" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/mayank-agarwal44442/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Shivangi.jpg")} alt="Profile" />
                  </div>
                  <div className="name">Shivangi Jadon</div>
                  <div className="info">Cloud Computing</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="https://www.instagram.com/sjadon99/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Instagram.svg")} alt="Instagram" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://github.com/shivangi-jadon" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/shivangi-jadon-9ab68215a/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Sumanth.jpg")} alt="Profile" />
                  </div>
                  <div className="name">Sumanth V Rao</div>
                  <div className="info">
                    Application Development - Python & Big Data
                  </div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="https://www.facebook.com/sumanth.rao.9638" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Facebook.svg")} alt="Facebook" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.instagram.com/sumanth_svr" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Instagram.svg")} alt="Instagram" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://github.com/sumanthvrao" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/sumanthvrao" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/VRG [AF].png")} alt="Profile" />
                  </div>
                  <div className="name">Varun R. Gupta</div>
                  <div className="info">
                    Network Security and Web Development
                  </div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="mailto:varungupta3009@gmail.com?subject=Hi%20VRG!&body=Hello!" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GMail.svg")} alt="GMail" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://twitter.com/varungupta3009" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Twitter.svg")} alt="Twitter" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://github.com/varungupta3009" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/varungupta3009/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Shankar.jpg")} alt="Profile" />
                  </div>
                  <div className="name">Umashankar Sivakumar</div>
                  <div className="info">Web Development, Design</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="https://www.facebook.com/umashankar.sivakumar" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Facebook.svg")} alt="Facebook" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://twitter.com/Umashankar1999" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Twitter.svg")} alt="Twitter" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://github.com/UmashankarTriforce" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/umashankar-sivakumar-575aa4167" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Ishaan.jpg")} alt="Profile" />
                  </div>
                  <div className="name">Ishaan Lagwankar</div>
                  <div className="info">Machine Learning, Event Management</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="https://m.facebook.com/shaanzie.07" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Facebook.svg")} alt="Facebook" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="http://www.instagram.com/shaaanziee" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Instagram.svg")} alt="Instagram" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://github.com/shaanzie" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/ishaan-lagwankar-abb60417b" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Richa.jpg")} alt="Profile" />
                  </div>
                  <div className="name">Richa</div>
                  <div className="info">Outreach</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="https://www.facebook.com/profile.php?id=100000890757526" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Facebook.svg")} alt="Facebook" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.instagram.com/richaa_kumar" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Instagram.svg")} alt="Instagram" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="mailto:richa5june99@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GMail.svg")} alt="GMail" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#team">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Aekansh.jpeg")} alt="Profile" />
                  </div>
                  <div className="name">Aekansh Dixit</div>
                  <div className="info">Project Manager</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="mailto:me@aekansh.in" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GMail.svg")} alt="GMail" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://twitter.com/Aekansh_Dixit">
                        <img src={require("../assets/Twitter.svg")} alt="Twitter" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://github.com/aekanshd">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/aekanshdixit">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="member">
                  <div className="photo">
                    <img src={require("../assets/Ishwar.jpeg")} alt="Profile" />
                  </div>
                  <div className="name">Ishwar Choudhary</div>
                  <div className="info">Production</div>
                  <ul
                    className="social"
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <li className="item">
                      <a href="http://instagram.com/ishwartakespictures" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/Instagram.svg")} alt="Instagram" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://github.com/ishwarc404" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/GitHub.svg")} alt="GitHub" />
                      </a>
                    </li>
                    <li className="item">
                      <a href="https://www.linkedin.com/in/ishwar-choudhary-089163175/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/LinkedIn.svg")} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
