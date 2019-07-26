import React from "react";

class Projects extends React.Component {
    reveal(e) {
        //e.target.classList.add('portal-reveal');
        e.target.activate();
    }

    activate(e) {
        e.target.activate();
    }

    render() {
        return (
            //   <section
            //     className="hero has-text-centered is-fullheight-with-navbar has-background-link"
            //   >
            //       <h1
            //         className="title is-spaced is-size-2-desktop is-size-3-mobile"
            //         style={{
            //           color: "#FFFFFF"
            //         }}
            //       >
            //         DSC Projects are here!
            //       </h1>
            //   </section>
            <section className="dsc-s hero has-text-centered is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-spaced is-size-1-desktop is-size-2-mobile"
                            style={{
                                fontWeight: "400"
                            }}
                        >
                            Learn more about the DSC
                        </h1>
                        <h2>
                            This Website Supports Portals! Yay!
                        </h2>
                        <div className="container">
                            <div className="portal" style={{height: "1000"}}>
                                <portal id="portal" src="https://developers.google.com/programs/dsc/stories/" onClick={this.reveal} onTransitionEnd={this.activate} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;