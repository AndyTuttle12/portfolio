import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.css';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
  		var children = React.Children.map(this.props.children, (child, i)=>{
  			return React.cloneElement(child, {

  			})
  		})
    return (
      <div className="App">
        <MainMenu />
        <ReactCSSTransitionGroup
        	transitionName="slide"
        	transitionAppear={true}
      		transitionAppearTimeout={2000}
        	transitionEnterTimeout={800}
        	transitionLeaveTimeout={1200}>
        	{children}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
