import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer'; // don't need to specify index.js file - will automatically search the folder for an index file
import Goal from './Goal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Depths of My Dark Mind</h1>
          <h2>Where my world comes to life</h2>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p className="goal"> Today's goal: <strong><Goal></Goal></strong>
        </p>

        <Footer></Footer>

      </div>
    );
  }
}

export default App;


