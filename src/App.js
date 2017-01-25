import React, { Component } from 'react';
import './styles.css';
import MainMenu from './components/MainMenu';
import MainBody from './components/MainBody';

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
