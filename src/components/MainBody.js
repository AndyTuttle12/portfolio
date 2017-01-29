import React, { Component } from 'react';
import '../styles.css';

class MainBody extends Component {

	render() {
		// var scene = document.getElementById('scene');
		// var parallax = new Parallax(scene);
		return (
			<div className="MainRoutes">
				<div className="centered">
					<div className="hero">
						<h1>Hi, I'm Andy.</h1>
					</div>
					<div className="sub-title">
						<h2>I'm a Web Developer.</h2>
					</div>
					<div className="text">
						<h3>Please look around...</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default MainBody;