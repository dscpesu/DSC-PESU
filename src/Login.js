import React, { Component } from 'react';
import Button from '@material/react-button';
import TextField, { HelperText, Input } from '@material/react-text-field';
import { Body1, Headline5 } from '@material/react-typography';
// import LoaderWrapper from './components/loader_wrapper';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="Login">
        {/* <LoaderWrapper /> */}
        <section className="hero is-white has-text-centered is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column o-box is-6-tablet is-6-desktop is-5-widescreen">
                  <form className="box f">
                    <a href="/">
                      <img
                        src={require("./assets/DSC-Badge-by-VRG.svg")}
                        alt="Developer Student Clubs"
                        width={75}
                      />
                    </a>
                    <Headline5 className="f-h5">Sign in</Headline5>
                    <Body1 className="f-b1">Continue to DSC PESU</Body1>
                    <TextField
                      className="f-tf main"
                      outlined
                      label='Email'
                    ><Input
                        type="email"
                        // required
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.currentTarget.value })} />
                    </TextField>
                    <TextField
                      className="f-tf main"
                      outlined
                      label='Password'
                      helperText={<HelperText className="f-tf">Minimum 8 characters, ASCII Characters only.</HelperText>}
                    ><Input
                        type="password"
                        // required
                        minLength='8'
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.currentTarget.value })} />
                    </TextField>
                    <Button className="b f-b is-pulled-left">
                      Create Account
                  </Button>
                    <Button className="b-r f-b is-pulled-right"
                      raised
                    >
                      SIGN IN
                  </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot" />
        </section>
      </div>
    );
  }
}

// $(document).ready(function () {
//   //Preloader
//   $(window).on("load", function () {
//       var preloaderFadeOutTime = 500;

//       function hidePreloader() {
//           var preloader = $('.loader-wrapper');
//           preloader.fadeOut(preloaderFadeOutTime);
//       }
//       hidePreloader();
//   });
// });

export default Login;
