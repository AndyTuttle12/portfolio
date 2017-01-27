import React, { Component } from 'react';
import '../styles.css';

class Portfolio extends Component {
	render() {
		return (
			<div className="Portfolio MainRoutes" >
				<div className="title">
					<h1>My most recent work.</h1>
				</div>
				<div className="centered feature">
					<a href="http://www.canigo.co" target="_blank"><h2>CaniGo.co</h2></a>
					<a href="http://www.canigo.co" target="_blank"><img src="https://camo.githubusercontent.com/2f0155fc2f452fbe247fe3c2cb82b38017dda740/687474703a2f2f692e696d6775722e636f6d2f33454e7079447a2e706e67" alt="canigo.co"/></a>
				</div>
			</div>
		)
	}
}

export default Portfolio;