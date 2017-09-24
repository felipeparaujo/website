import React, { Component } from 'react';
import './css/App.css';
import Cli from './Cli';
import Output from './Output'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cli />
        <Output />
      </div>
    );
  }
}

export default App;
