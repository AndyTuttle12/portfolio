import React, { Component } from 'react';
// import { RouteHandler } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.css';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
  		// const children = React.Children.map(this.props.children, (child, i)=>{
  		// 	return React.cloneElement(child, {
  		// 		key: child
  		// 	})
  		// })
    return (
      <div className="App">
        <MainMenu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
