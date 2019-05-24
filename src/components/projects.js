import React from "react";

class Projects extends React.Component {
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
            <section className="hero has-text-centered is-fullheight-with-navbar is-info">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-spaced is-size-1-desktop is-size-2-mobile"
                        style={{
                            fontWeight: "400"
                        }}
                            >
                            DSC Projects are here!
                        </h1>
                        <br /><br />
                        <a href="https://bit.ly/dsc-pesu-projects" target="_blank" rel="noopener noreferrer" className="button is-info is-inverted is-medium">Enroll Now!</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;