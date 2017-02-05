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
					
					<br/><br/>
					<div>
						<spdf.SimplePDF file="../test-document-pdf.pdf"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Resume;