import React, { Component } from 'react';
import './css/Cli.css';

class Cli extends Component {
  render() {
    return (
      <form className="cli">
      	<p>$</p><input placeholder='Type in your command' autoFocus></input>
      </form>
    );
  }
}

export default Cli;
