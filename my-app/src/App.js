import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <section className="first-section">
          <div className="first-section-wrapper">
            <h1 className="hello-text">Hello</h1>
          </div>
        </section>

        <section className="second-section">
          <div className="second-section-wrapper">
            <h1 className="placeholder">Hello</h1>
          </div>
        </section>
      
      </div>
    );
  }
}

export default App;