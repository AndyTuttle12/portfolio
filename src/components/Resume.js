import React, { Component } from 'react';
import PDF, { page, pages } from 'react-pdf';
import '../styles.css';


class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page,
			pages
		}
	}

	_onPdfCompleted(page,pages) {
		this.setState({
			page,
			pages
		});
	}

	render() {
		return (
			<div className="Resume MainRoutes" >
				<div className="title">
					<h1>My resume</h1>
				</div>
				<div className="feature">
					<p>Take a look at my resume!</p>
					<a href={require("../../test-document-pdf.pdf")} target="_blank">Download Resume.pdf</a>
					<br/><br/>
					<div>
						<PDF file="../../test-document-pdf.pdf" page={1} />
					</div>
				</div>
			</div>
		)
	}
}

export default Resume;