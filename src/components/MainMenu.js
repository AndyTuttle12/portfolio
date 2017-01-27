import React, { Component } from 'react';
import { Link } from 'react-router';
import github from '../../devicon-master/icons/github/github-original.svg';
import linkedin from '../../linkedin.svg';
import '../styles.css';

class MainMenu extends Component {
	render() {
		return (
			<div className="MainMenu">
				<div className="burger"><img src={require('../burger.png')} alt="menu"/></div>
				<Link to="/"><h2>Andy Tuttle</h2></Link>
				<div className="nav">
					<ul>
						<Link to="/about"><li>About</li></Link>
						<Link to="/Portfolio"><li>Portfolio</li></Link>
						<Link to="/Resume"><li>Resume</li></Link>
						<Link to="/Contact"><li>Contact</li></Link>
					</ul>
				</div>
				<div className="social-links">
					<a href="https://www.linkedin.com/in/andy-tuttle" target="_blank"><img src={linkedin} alt="linkedin"/></a>
					<a href="https://github.com/AndyTuttle12" target="_blank"><img src={github} alt="github"/></a>
				</div>
			</div>
		)
	}
}

export default MainMenu;