import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      

      <section className="first-section">

        <div className="main-div">
          {/* <header className="header-class">
            Farid Manafov's Profile
          </header> */}

          <div className="main-div">
            <h1 className="hello-text">Hello</h1>
            <h3 className="name">My name is Farid</h3>
            {/* <h3 
              className="cycle-text"
              >
              and I like to 
              <cycleText
                
                />
            </h3> */}
          </div>
           
          <div className="footer-div">

          </div>
        </div>
      </section>
    );
  }
}

export default App;