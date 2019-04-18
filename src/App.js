import React, { Component } from 'react';
import './App.css';

import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          r3post
        </header>
        
        <Main />
        
        <footer className="App-footer">
          &#169; Josh Serbus, 2019
        </footer>
      </div>
    );
  }
}

export default App;
