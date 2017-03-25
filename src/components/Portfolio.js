// -------------------------------
// Portfolio.js
// Portfolio view
// -------------------------------

import React, { Component } from 'react';
import '../styles.css';

class Portfolio extends Component {
	render() {
		return (
			<div className="Portfolio MainRoutes" >
				<div className="title projects">
					<h1>My most recent work.</h1>
				</div>
				<div className="feature projects">
					<a href="http://www.canigo.co" target="_blank"><h2>CaniGo.co</h2></a>
					<a href="http://www.canigo.co" target="_blank"><img src={require('../canigoscreenshot.png')} alt="canigo.co"/></a>
					<div className="overlay">
						<div className="arrow"></div>
						<h3>Project overview:</h3>
						<p>CaniGo.co is an app designed for spontaneous travelers who want to see more of the world. Users enter their place of origin, travel dates, and budget, then CaniGo.co will display destination options within their specified budget. The UI is simple and clean, while scripts are running behind the scene, making api calls and filtering the results to match the user&#39;s input. </p>
						<h3>Technology used:</h3>
						<p>React.js, jQuery, Bootstrap, APIs(Skyscanner), html/css and Javascript ES6</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Portfolio;