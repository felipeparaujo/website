import React, { Component } from 'react';
import './App.css';
import Cli from './component/Cli';
import Output from './component/Output'

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
