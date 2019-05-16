import React, { Component } from 'react';
import './App.css';
import Headshot from './images/1557276283467.png';

class App extends Component {
  render() {
    return (
      <div className="portfolio">

        <section className="first-section">

          <div className="first-section-wrapper">
            <h1 className="name-text">Farid Manafov</h1>
            {/* later make this into a wheel */}
            <h4 className="headline-text">Web Developer </h4>
          </div>

        </section>

        <section className="second-section">

          <div className="second-section-wrapper">

            <div className="about-me-image">
              <img src={Headshot} alt="placeholder"/>
            </div>

            <div className="about-me-content">
              <h1 className="about-me-header">Who am I?</h1>
              <p className="about-me-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nunc justo. Aenean et tempor tellus. Sed eget iaculis nisl. Duis sodales ex vel rhoncus tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tristique gravida commodo. Phasellus finibus pulvinar justo, quis congue nibh. Curabitur ultrices nec felis et suscipit. Pellentesque placerat pulvinar tincidunt. Maecenas a ligula iaculis, mattis lacus sed, auctor risus. Sed vel sagittis tellus. Ut porta ornare eros vitae laoreet. Etiam venenatis quam sed elit ultrices tempus. Maecenas sodales mattis est at porta.
              </p>
            </div>

          </div>

        </section>
      
        <section className="third-section">
          <div className="third-section-wrapper">
            
            <div className="stack-icons-container">
              <h1 className="stack-icons-header">Header for Icons</h1>
              <div className="stack-icons">
                <h1 className="placeholder">Stack Description</h1>
              </div>
            </div>

            <div className="stack-description-containter">
              <h1 className="stack-description-header">Header for description</h1>
              <div className="stack-description">
                <h1 className="placeholder">stack icons</h1>
              </div>
            </div>

          </div>
        </section>

        <section className="fourth-section">
          <div className="fourth-section-wrapper">
            {/* <h1 className="project-total-header">Projects</h1> */}

            <div className="project-header-image-icon-wrapper">

              <div className="project-header">
                <h1>specific project header</h1>
              </div>
              
              <div className="project-icon-stacks">
                {/* use images of stack icons here */}
                <h1>icons</h1>
              </div>

              <div className="project-links">
                <a href="link">github</a>
                {/* this will be a link to the github repo */}
              </div>
              
            </div>

            <div className="project-description">
              <h1>description</h1>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default App;