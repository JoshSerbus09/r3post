import React, { Component } from 'react';
import './App.css';

import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          R3POST
        </header>
        
        <Main />
        
        <footer className="App-footer">
          Copyright Josh Serbus 2019
        </footer>
      </div>
    );
  }
}

export default App;
