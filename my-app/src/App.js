import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <section className="first-section">

          {/* idea for the future
           <svg 
            className="SVG-circle-parent"
            height="120"
            width="120"
          >
            <circle 
              className="circle"
              r="58"
              cx="60"
              cy="60"
            >

            </circle>
          </svg>
          */}
          <div className="first-section-wrapper">
            <h1 className="hello-text">Hello</h1>
          </div>

        </section>

        <section className="second-section">
          <div className="second-section-wrapper">
            <h1 className="placeholder">Hello</h1>
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