import React, { Component } from 'react';

// import LoaderWrapper from './components/loader_wrapper';
import LoginPage from './components/login';

import 'bulma';
import $ from 'jquery';

import './css/home.css';
import './App.scss';

class Projects extends Component {
  render() {
    return (
      <div className="Login">
        {/* <LoaderWrapper /> */}
        <LoginPage />
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
