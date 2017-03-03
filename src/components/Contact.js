// -------------------------------
// Contact.js
// Contact view
// -------------------------------

import React, { Component } from 'react';
import '../styles.css';
import $ from 'jquery';
import { hashHistory } from 'react-router';



class Contact extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	browserHistory.push('/');
	// }

	handleContact(event){
		// console.log(event.target[0].value);
		event.preventDefault();
		// console.dir(event.target);
		$.ajax({
			url: 'http://35.165.246.93:3003/send/email',
			headers: {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			method: 'POST',
			crossDomain: 'true',
			dataType: 'json',
			data: {'name': event.target[0].value,'email':event.target[1].value, 'message': event.target[2].value},
			success: (data)=>{
				hashHistory.push({pathname:'/',query:'1',state:{thanksSent:true}});
				console.log(this)
			}
		}).fail(function(jqXhr) {
			console.log('failed');
		});
	}

	render() {
		return (
			<div className="Contact	MainRoutes" >
				<div className="title">
					<h1>Say Hello!</h1>
				</div>
				<div className="feature contact-form">
					<h2>Let{"'"}s meet for coffee!</h2>
					<form onSubmit={this.handleContact}>
						<input className="textbox" type="text" placeholder="Your Name"/><br/>
						<input className="textbox" type="email" placeholder="Email" /><br/>
						<textarea className="textarea" type="text-area" placeholder="Your Message"></textarea><br/>
						<input className="submit-btn" type="submit" value="Submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default Contact;