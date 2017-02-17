// -------------------------------
// INDEX.JS
// Global Routes and Imports
// -------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainBody from './components/MainBody';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={MainBody} />
			<Route path="/about" component={About} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/contact" component={Contact} />
		</Route>
	</Router>,
	document.getElementById('root')
);
