import React, { Component } from 'react';
import './App.css';

// import Headshot from './images/1557276283467.png';

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

            {/* <div className="about-me-image"> */}
              {/* <img src={Headshot} alt="placeholder"/> */}
            {/* </div> */}

            <div className="about-me-content">
              <h1 className="about-me-header">Who am I?</h1>
              <p className="about-me-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nunc justo. Aenean et tempor tellus. Sed eget iaculis nisl. Duis sodales ex vel rhoncus tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tristique gravida commodo. Phasellus finibus pulvinar justo, quis congue nibh. Curabitur ultrices nec felis et suscipit. Pellentesque placerat pulvinar tincidunt. Maecenas a ligula iaculis, mattis lacus sed, auctor risus. Sed vel sagittis tellus. Ut porta ornare eros vitae laoreet. Etiam venenatis quam sed elit ultrices tempus. Maecenas sodales mattis est at porta.
              </p>
            </div>

          </div>

        </section>
      
        <section className="third-section">
          <div className="third-section-wrapper">

            <h1 total-stack-header>My Stacks</h1>
            
            <ul className="stack-grid">

              <li className="stack-container">
                <i>
                  <i class="fab fa-html5"></i>
                </i>
                <h3 className="stack-header">HTML5</h3>
              </li>

              <li className="stack-container">
                <i>
                  CSS3
                </i>
                <h3 className="stack-header">CSS3</h3>
              </li>

              <li className="stack-container">
                <i>
                  Sass
                </i>
                <h3 className="stack-header">Sass</h3>
              </li>

              <li className="stack-container">
                <i>
                  Javascript
                </i>
                <h3 className="stack-header">Javascript</h3>
              </li>

              <li className="stack-container">
                <i>
                  Jquery
                </i>
                <h3 className="stack-header">Jquery</h3>
              </li>

              <li className="stack-container">
                <i>
                  react
                </i>
                <h3 className="stack-header">react</h3>
              </li>

              <li className="stack-container">
                <i>
                  GIT
                </i>
                <h3 className="stack-header">GIT</h3>
              </li>

              <li className="stack-container">
                <i>
                  vscode
                </i>
                <h3 className="stack-header">vscode</h3>
              </li>

              <li className="stack-container">
                <i>
                  npm
                </i>
                <h3 className="stack-header">npm</h3>
              </li>

            </ul>

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