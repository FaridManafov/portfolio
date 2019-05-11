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
      
        <section className="third-section-wrapper">
          <div className="third-section-wrapper">
            <h1 className="placeholder">Hello</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default App;