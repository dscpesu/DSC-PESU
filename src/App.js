import React, { Component } from 'react';

import Loader from './components/loader';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Workshops from './components/workshops';
// import Projects from './components/sites';
import Team from './components/team';
// import { Hub } from './components/hub';
import Footer from './components/footer';

// import 'bulma';
import $ from 'jquery';

// import 'bulma-pageloader';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <Navbar />
        <Intro />
        <Workshops />
        <Team />
        {/* <Hub /> */}
        {/* {'HTMLPortalElement' in window ? <Projects /> : null} */}
        <Footer />
      </div>
    );
  }
}

$(document).ready(function () {
  //Preloader
  $(window).on("load", function () {
    $(window).focus();
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $('.dsc-l');
      preloader.fadeOut(preloaderFadeOutTime);
    }
    setTimeout(() => hidePreloader(), 2000);
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

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".navbar").addClass("has-shadow");
  }
  else {
    $(".navbar").removeClass("has-shadow");
  }
});


var keys = [104, 104, 104, 104], //[76, 79, 71, 73, 78],
  started = false,
  count = 0;
$(document).keydown(function (e) {
  var reset = function () {
    started = false;
    count = 0;
    return;
  };
  let key = e.keyCode;
  if (!started) {
    if (key === 104) {
      started = true;
    }
  }
  if (started) {
    if (keys[count] === key) {
      count++;
    } else {
      reset();
    }
    if (count === 4) {
      window.location = window.location.pathname === "/" ? "login" : "/"
      reset();
    }
  } else {
    reset();
  }
});

export default App;
