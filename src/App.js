import React, { Component } from 'react';
import './App.css';
import Moves from './components/Moves/Moves';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Moves />
      </div>
    );
  }
}

export default App;
