import React, { Component } from 'react';
import '../styles.css';

class Resume extends Component {
	render() {
		return (
			<div className="Resume MainRoutes" >
				<div className="title">
					<h1>My resume</h1>
				</div>
				<div className="feature">
					<p>Take a look at my resume!</p>
					<a href={require("../../test-document-pdf.pdf")} target="_blank">Download Resume.pdf</a>
				</div>
			</div>
		)
	}
}

export default Resume;