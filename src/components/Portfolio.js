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
					<h1>My most recent work</h1>
				</div>
				<div className="feature projects">
					<a href="http://www.canigo.co" target="_blank"><h2>CaniGo.co</h2></a>
					<a href="http://www.canigo.co" target="_blank"><img src={require('../canigoscreenshot.png')} alt="canigo.co"/></a>
					<div className="overlay">
						<div className="arrow"></div>
						<h3>Project overview:</h3>
						<p>CaniGo.co is an app designed for spontaneous travelers who want to see more of the world. Users enter their place of origin, travel dates, and budget, then CaniGo.co will display destination options within their specified budget. The UI is simple and clean, while scripts are running behind the scene, making api calls and filtering the results to match the user{"'"}s input. </p>
						<h3>Technology used:</h3>
						<p>React.js, Redux, jQuery, Node.js, Express, MySQL, Amadeus API, Stripe API, HTML/CSS, Sass and JavaScript ES6</p>
					</div>
				</div>
				<div className="feature projects">
					<a href="http://andytuttle.io/movie-time" target="_blank"><h2>Movie Time</h2></a>
					<a href="http://andytuttle.io/movie-time" target="_blank"><img src={require('../browsing.png')} alt="Movie Time"/></a>
					<div className="overlay">
						<div className="arrow"></div>
						<h3>Project overview:</h3>
						<p>Movie Time is a simple app where the user can browse titles in various categories, search, filter and sort to find new and interesting movies. The whole app is very fast light-weight, even though all of the data is real and coming from a live API.</p>
						<h3>Technology used:</h3>
						<p>HTML/CSS, Bootstrap, JavaScript, jQuery, The Movie Database API and YouTube Player iframe API</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Portfolio;