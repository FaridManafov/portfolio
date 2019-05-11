import React, { Component } from 'react';
import './App.css';

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