import React, { Component } from 'react';
import '../styles.css';

class Contact extends Component {
	render() {
		return (
			<div className="Contact  MainRoutes" >
				<div className="title">
					<h1>Say Hello!</h1>
				</div>
				<div className="feature">
					<h2>I can meet for coffee!</h2>
					<form>
						<input className="textbox" type="text" placeholder="Your Name"/><br/>
						<input className="textbox" type="email" placeholder="Email" /><br/>
						<textarea className="textarea" type="text-area" placeholder="Your Message"></textarea><br/>
						<input className="submit-btn" type="submit" value="Submit"/>
					</form>
				</div>
				<div className="funnyHead">
					<img src={require('../funny.png')} alt="me" />
				</div>
			</div>
		)
	}
}

export default Contact;