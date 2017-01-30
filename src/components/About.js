import React, { Component } from 'react';
import html5 from '../../devicon-master/icons/html5/html5-original-wordmark.svg';
import css3 from '../../devicon-master/icons/css3/css3-original-wordmark.svg';
import javascript from '../../devicon-master/icons/javascript/javascript-original.svg';
import react from '../../devicon-master/icons/react/react-original-wordmark.svg';
import bootstrap from '../../devicon-master/icons/bootstrap/bootstrap-plain.svg';
import jquery from '../../devicon-master/icons/jquery/jquery-original-wordmark.svg';
import git from '../../devicon-master/icons/git/git-original-wordmark.svg';
import sass from '../../devicon-master/icons/sass/sass-original.svg';
import amazonwebservices from '../../devicon-master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
import angularjs from '../../devicon-master/icons/angularjs/angularjs-original-wordmark.svg';
import apache from '../../devicon-master/icons/apache/apache-original-wordmark.svg';
import babel from '../../devicon-master/icons/babel/babel-original.svg';
import linux from '../../devicon-master/icons/linux/linux-original.svg';
import mongodb from '../../devicon-master/icons/mongodb/mongodb-original-wordmark.svg';
import mysql from '../../devicon-master/icons/mysql/mysql-original-wordmark.svg';
import nodejs from '../../devicon-master/icons/nodejs/nodejs-original-wordmark.svg';
import python from '../../devicon-master/icons/python/python-original-wordmark.svg';
import typescript from '../../devicon-master/icons/typescript/typescript-original.svg';
import '../styles.css';

class About extends Component {
	render() {
		return (
			<div className="About MainRoutes" >
				<div className="title">
					<h1>About Me</h1>
				</div>
				<div className="bio">
					<p>I am a front-end developer who speciallizes in clean, responsive, modular apps and websites.</p>
					<p>Currently, I am studying at DigitalCrafts, a full-stack development bootcamp in Atlanta, GA.</p>
					<p>Learn more about the bootcamp below:</p>
					<div><a href="http://www.digitalcrafts.com/"><img src="http://www.digitalcrafts.com/sites/all/themes/digitalcrafts/images/digitalcrafts-site-logo.png" alt="DigitalCrafts" /></a></div>
				</div>
				<div className="skills">
					<div className="currentSkills">
						<h2>What I know.</h2>
						<img src={html5} className="skills-logo" alt="html5" />
						<img src={css3} className="skills-logo" alt="css3" />
						<img src={javascript} className="skills-logo" alt="javascript" />
						<img src={react} className="skills-logo" alt="react" />
						<img src={bootstrap} className="skills-logo" alt="bootstrap" />
						<img src={jquery} className="skills-logo" alt="jquery" />
						<img src={git} className="skills-logo" alt="git" />
						<img src={sass} className="skills-logo" alt="sass" />

					</div>
					<div className="futureSkills">
						<h2>What I am learning.</h2>
						<img src={amazonwebservices} className="skills-logo" alt="amazonwebservices" />
						<img src={angularjs} className="skills-logo" alt="angularjs" />
						<img src={apache} className="skills-logo" alt="apache" />
						<img src={babel} className="skills-logo" alt="babel" />
						<img src={linux} className="skills-logo" alt="linux" />
						<img src={mongodb} className="skills-logo" alt="mongodb" />
						<img src={mysql} className="skills-logo" alt="mysql" />
						<img src={nodejs} className="skills-logo" alt="nodejs" />
						<img src={python} className="skills-logo" alt="python" />
						<img src={typescript} className="skills-logo" alt="typescript" />
					</div>
				</div>
			</div>
		)
	}
}

export default About;