import React from "react";
import InstagramEmbed from 'react-instagram-embed';

export class Hub extends React.Component {
  render() {
    return (
      <section
        className="dsc-h hero hub has-text-centered"
        id="hub"
      >
        <div className="container is-widescreen">
          <h1
            className="title is-spaced is-size-2-desktop is-size-3-mobile"
          >
            Social Hub
          </h1>
          <div className="hub-grid">
            <div className="columns is-multiline is-mobile">
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                <InstagramEmbed
                  url='https://www.instagram.com/p/Bvn7boljYAY/?utm_source=ig_web_copy_link'
                  maxWidth={320}
                  hideCaption={false}
                  containerTagName='blockquote'
                  protocol=''
                  injectScript
                  onLoading={() => { }}
                  onSuccess={() => { }}
                  onAfterRender={() => { }}
                  onFailure={() => { }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// export default Hub;
