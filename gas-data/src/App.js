import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VictoryBar } from 'victory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PHL33T</h1>
          <VictoryBar/>
        </header>
      </div>
    );
  }
}

export default App;
