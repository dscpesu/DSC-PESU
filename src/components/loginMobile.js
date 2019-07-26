import React from "react";
import Button from '@material/react-button';
import TextField, { HelperText, Input } from '@material/react-text-field';
import { Body1, Headline5 } from '@material/react-typography';

class Intro extends React.Component {
  state = { email: '', password: '' };

  render() {
    return (
      <section className="hero is-white has-text-centered is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6-tablet is-6-desktop is-5-widescreen">
                <form className="mybox f" action="" method="post">
                  <img
                    src={require("../assets/DSC-Badge-by-VRG.svg")}
                    alt="Developer Student Clubs"
                    width={75}
                  />
                  <Headline5 className="f-h5">Sign in</Headline5>
                  <Body1 className="f-b1">Continue to DSC PESU</Body1>
                  <TextField
                    className="f-tf main"
                    outlined
                    label='Email'
                  ><Input
                      email={this.state.email}
                      onChange={(e) => this.setState({ email: e.currentTarget.email })} />
                  </TextField>
                  <TextField
                    className="f-tf main"
                    outlined
                    label='Password'
                    helperText={<HelperText className="f-tf">Minimum 8 characters, ASCII Characters only.</HelperText>}
                  ><Input
                      password={this.state.password}
                      onChange={(e) => this.setState({ password: e.currentTarget.password })} />
                  </TextField>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <Button className="b f-b is-pulled-left">
            Create Account
                  </Button>
          <Button className="b-r f-b is-pulled-right"
            raised
          >
            SIGN IN
                  </Button>
        </div>
      </section>
    );
  }
}

export default Intro;
