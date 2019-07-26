import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Navbar from './components/navbar';

const IMAGES =
  [{
    src: require("./assets/wshop1/image01.jpg"),
    thumbnail: require("./assets/wshop1/image01.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image02.jpg"),
    thumbnail: require("./assets/wshop1/image02.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image03.jpg"),
    thumbnail: require("./assets/wshop1/image03.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image04.jpg"),
    thumbnail: require("./assets/wshop1/image04.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image05.jpg"),
    thumbnail: require("./assets/wshop1/image05.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image06.jpg"),
    thumbnail: require("./assets/wshop1/image06.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image07.jpg"),
    thumbnail: require("./assets/wshop1/image07.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image08.jpg"),
    thumbnail: require("./assets/wshop1/image08.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image09.jpg"),
    thumbnail: require("./assets/wshop1/image09.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image10.jpg"),
    thumbnail: require("./assets/wshop1/image10.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image11.jpg"),
    thumbnail: require("./assets/wshop1/image11.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image12.jpg"),
    thumbnail: require("./assets/wshop1/image12.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  },
  {
    src: require("./assets/wshop1/image13.jpg"),
    thumbnail: require("./assets/wshop1/image13.jpg"),
    thumbnailWidth: "300px",
    thumbnailHeight: "200px"
  }]

class WGallery extends Component {
  render() {
    return (
      <div className="container is-widescreen has-text-centered" style={{
        padding: "2%",
        marginTop: "2%",
        marginBottom: "2%"
      }}>
        <Navbar />
        <h1
          className="title is-spaced is-size-2-desktop is-size-3-mobile"
        >
          Here are some pictures from the event!
          </h1>
        <Gallery className="Gallery" images={IMAGES} enableImageSelection={false} backdropClosesModal={true} />
      </div>
    );
  }
}

export default WGallery;
