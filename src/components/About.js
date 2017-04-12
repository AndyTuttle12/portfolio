// -------------------------------
// About.js
// About view
// -------------------------------

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
import jasmine from '../../devicon-master/icons/jasmine/jasmine-plain-wordmark.svg';
import java from '../../devicon-master/icons/java/java-original-wordmark.svg';
import gradle from '../../devicon-master/icons/gradle/gradle-plain-wordmark.svg';
import springBoot from '../spring-boot.png';
import pug from '../pug-logo.svg';
import postcss from '../postcss.svg';
import webpack from '../webpack.svg';
import socketio from '../socket-io.svg';
import redux from '../redux.svg';
import '../styles.css';

class About extends Component {
	render() {
		return (
			<div className="About MainRoutes" >
				<div className="title">
					<h1>About Me</h1>
				</div>
				<div className="bio">
					<p>I am a full-stack software engineer who speciallizes in clean, responsive, modular apps and websites.</p>
					<p>I have a passion for creating engaging web experiences and efficient solutions for clients. I thrive on teamwork, and opportunities to use my creativity and problem-solving skills to create the perfect solution to any project.</p>
					<p>I am a life-long learner and a recent graduate of <strong><a href="http://www.digitalcrafts.com/">DigitalCrafts</a></strong>, a full-stack development bootcamp in Atlanta, GA. Coming from DigitalCrafts, I have a deep understanding of the software development process, agile methodologies, as well as understanding of how the full tech stack interacts, and how applications work. Even though my training is in a thorough full-stack environment, I spend most of my time in the front-end where I create the intuitive user experience that production level apps demand.</p>
				</div>
				<div className="skills">
					<div className="currentSkills">
						<div className="skills-title"><h2>What I know</h2></div>
						<div className="skills-logo-box"><img src={html5} className="skills-logo" alt="html5" />HTML5</div>
						
						<div className="skills-logo-box"><img src={css3} className="skills-logo" alt="css3" />CSS3</div>
						<div className="skills-logo-box"><img src={javascript} className="skills-logo" alt="javascript" />JavaScript</div>
						<div className="skills-logo-box"><img src={react} className="skills-logo" alt="react" />react.js</div>
						<div className="skills-logo-box"><img src={bootstrap} className="skills-logo" alt="bootstrap" />Bootstrap</div>
						<div className="skills-logo-box"><img src={jquery} className="skills-logo" alt="jquery" />jQuery</div>
						<div className="skills-logo-box"><img src={git} className="skills-logo" alt="git" />Git</div>
						<div className="skills-logo-box"><img src={sass} className="skills-logo" alt="sass" />Sass</div>
						<div className="skills-logo-box"><img src={amazonwebservices} className="skills-logo" alt="amazonwebservices" />AWS</div>
						<div className="skills-logo-box"><img src={apache} className="skills-logo" alt="apache" />Apache</div>
						<div className="skills-logo-box"><img src={babel} className="skills-logo" alt="babel" />Babel</div>
						<div className="skills-logo-box"><img src={linux} className="skills-logo" alt="linux" />Linux</div>
						<div className="skills-logo-box"><img src={nodejs} className="skills-logo" alt="nodejs" />node.js</div>
						<div className="skills-logo-box"><img src={mongodb} className="skills-logo" alt="mongodb" />MongoDB</div>	
						<div className="skills-logo-box"><img src={socketio} className="skills-logo" alt="socketio" />socket.io</div>
						<div className="skills-logo-box"><img src={mysql} className="skills-logo" alt="mysql" />MySQL</div>
						<div className="skills-logo-box"><img src={pug} className="skills-logo" alt="pug" />Pug</div>
						<div className="skills-logo-box"><img src={python} className="skills-logo" alt="python" />Python</div>
						<div className="skills-logo-box"><img src={jasmine} className="skills-logo" alt="jasmine" />Jasmine</div>
						<div className="skills-logo-box"><img src={redux} className="skills-logo" alt="redux" />Redux</div>
						<div className="skills-logo-box"><img src={webpack} className="skills-logo" alt="webpack" />Webpack</div>
					</div>
					<div className="futureSkills">
						<div className="skills-title"><h2>What I{"'"}m learning</h2></div>		
						<div className="skills-logo-box"><img src={angularjs} className="skills-logo" alt="angularjs" />Angular.js</div>
						<div className="skills-logo-box"><img src={typescript} className="skills-logo" alt="typescript" />TypeScript</div>
						<div className="skills-logo-box"><img src={postcss} className="skills-logo" alt="postcss" />postCSS</div>
						<div className="skills-logo-box"><img src={java} className="skills-logo" alt="java" />Java</div>
						<div className="skills-logo-box"><img src={springBoot} className="skills-logo" alt="spring-boot" />Spring Boot</div>
						<div className="skills-logo-box"><img src={gradle} className="skills-logo" alt="gradle" />Gradle</div>					
					</div>
				</div>
			</div>
		)
	}
}

export default About;