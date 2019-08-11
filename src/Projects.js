import React, { Component } from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import Typography, {
  Body1,
  Body2,
  // Button,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from '@material/react-typography';
// import Button from '@material/react-button';
// import { Cell, Grid, Row } from '@material/react-layout-grid';
import LinearProgress from '@material/react-linear-progress';
import Background from './assets/Yash-Final.svg'
import Navbar from './components/navbar';
// import LoaderWrapper from './components/loader_wrapper';

class Project extends Component {
  render() {
    return (
      <div className="column is-one-third-desktop">
        <Card outlined>
          <CardPrimaryContent>
            <div className="CardMain">
              <Headline4>{this.props.name}</Headline4>
              <div className="members">{this.props.children}</div>
              {/* <LinearProgress buffer={1.0} progress={0.8} /> */}
              <Headline6>Mentor</Headline6>
              <div className="mentor">{this.props.mentor}</div>
            </div>
            <Body1>{this.props.body || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla feugiat ligula, quis dictum arcu fermentum in."}</Body1>
          </CardPrimaryContent>
        </Card>
      </div>
    )
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        {/* <LoaderWrapper /> */}
        <section className="p-y hero is-white is-fullheight" style={{ background: `url(${Background}) no-repeat right top`, backgroundSize: `auto 100%` }}>
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <Headline1>
                    PROJECTS
                  </Headline1>
                  <Headline2 className="subtitle is-size-2-desktop">See what we're working on!</Headline2>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot" />
        </section>
        <section className="section has-text-centered">
          <div className="container">
            <div className="columns is-multiline">
              <Project
                name="Cystcontrol"
                mentor="Yash Pradhan"
              >
                Impana Dev<br />
                Shreyas Vasisht
              </Project>
              <Project
                name="PSPIT"
                mentor="Varun R. Gupta"
              >
                Akshay Vasudev Yadav
              </Project>
              <Project
                name="NetTorrent"
                mentor="Ishaan"
                body="The aim is to  build a decentralised P2P protocol to help decrease time of training of a neural network using data parallelism and model parallelism."
              >
                Madhav Jivrajani<br />
                Sparsh Temani
              </Project>
              <Project
                name="Fake News Filter"
                mentor="Sumanth"
                body="Our project comprises of an LSTM model that can detect & filter out fake news/false facts in a message by extracting the information in that message and comparing it with the information retrieved from reliable sources of news."
              >
                Sathwik P Kallapur<br />
                Anurag Milind Parvatikar<br />
                BN Om Shreenidhi<br />
                Saksham Gupta<br />
                Atharva Chidambar Joshi
              </Project>
              <Project
                name="PESU Chatter-bot!"
                mentor="Mayank"
                body="A chatter-bot built in Python, to help anybody trying to access information about PES, to do so easily. It would contain information about holidays, academics, person of contact and such."
              >
                Anantharam R U<br />
                Kirthika Gurumurthy<br />
                Gaurang Rao<br />
                Vishal Kanteppa Mahesh
              </Project>
              <Project
                name="CPC"
                mentor="Umashankar"
              >
                Rishit Chaudhary<br />
                Pranay Mundra<br />
                Abhilash Vadekkepat
              </Project>
              <Project
                name="YourVote"
                mentor="Shivangi"
              >
                Sai Prashanth R S
              </Project>
              <Project
                name="3D recipe viewer"
                mentor="Anudeep"
              >
                Chandana M<br />
                Varun P<br />
                Samyak Sarnayak<br />
                Samarth G Vasist<br />
                Ankitha P
              </Project>
            </div>
          </div>
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

export default Projects;
