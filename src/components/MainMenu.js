import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles.css';

class MainMenu extends Component {
	render() {
		return (
			<div className="MainMenu">
				<Link to="/"><h1>Andy Tuttle</h1></Link>
				<div className="nav">
					<ul>
						<Link to="/about"><li>About</li></Link>
						<Link to="/Portfolio"><li>Portfolio</li></Link>
						<Link to="/Resume"><li>Resume</li></Link>
						<Link to="/Contact"><li>Contact</li></Link>
					</ul>
				</div>
			</div>
		)
	}
}

export default MainMenu;