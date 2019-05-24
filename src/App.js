import React, { Component } from 'react';

import LoaderWrapper from './components/loader_wrapper';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Workshops from './components/workshops';
import Projects from './components/projects';
import Team from './components/team';
import Footer from './components/footer';

import 'bulma';
import $ from 'jquery';

import './css/home.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoaderWrapper />
        <Navbar />
        <Intro />
        <Workshops />
        <Team />
        <Projects />
        <Footer />
      </div>
    );
  }
}

$(document).ready(function () {
  //Preloader
  $(window).on("load", function () {
      var preloaderFadeOutTime = 500;

      function hidePreloader() {
          var preloader = $('.loader-wrapper');
          preloader.fadeOut(preloaderFadeOutTime);
      }
      hidePreloader();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
          });
      });
  }

});

$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $(".navbar").addClass("has-shadow");
  }
  else {
      $(".navbar").removeClass("has-shadow");
  }
});

export default App;
