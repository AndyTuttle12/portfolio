// -------------------------------
// App.js
// Wrapper for all routes / views
// -------------------------------

import React, { Component } from 'react';
import './styles.css';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
