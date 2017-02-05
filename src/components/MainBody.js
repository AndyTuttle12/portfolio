 import React, { Component } from 'react';
import '../styles.css';

class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pos: {x: 500, y: 500}
		};
		this.onMouseMove = this.onMouseMove.bind(this);
	}

	onMouseMove(event){
		// console.log(this.state.pos);
		this.setState({
			pos: {
				x: event.pageX,
				y: event.pageY
			}
		});
		this.parallax();
	}

	parallax(){
		if ('ontouchstart' in window === false) {
			// console.log(this.refs.section)
			let [moveX, moveY] = [(this.state.pos.x / -30), (this.state.pos.y / -40)];
			let [section, l1, l2, l3, l4, l5, foreground] = [
				this.refs.section, 
				this.refs.l1, 
				this.refs.l2,
				this.refs.l3,
				this.refs.l4,
				this.refs.l5,
				this.refs.foreground
			];
			foreground.style.transform = `translate3d(${0}px, ${0}px, 0)`;
			l1.style.transform = `translate3d(${moveX * 1}px, ${moveY * 1}px, 0)`;
			l2.style.transform = `translate3d(${moveX * .8}px, ${moveY * .8}px, 0)`;
			l3.style.transform = `translate3d(${moveX * .5}px, ${moveY * .5}px, 0)`;
			l4.style.transform = `translate3d(${moveX * .2}px, ${moveY * .2}px, 0)`;
			l5.style.transform = `translate3d(${moveX * 0}px, ${moveY * 0}px, 0)`;
			section.style.transform = `translate3d(${0}px, ${0}px, 0)`;
		}
	}

	render() {
		return (
			<div className="MainRoutes">
				<div className="centered" onMouseMove={this.onMouseMove} ref="foreground">
					<div className="hero">
						<h1>Hi there</h1>
					</div>
					<div className="sub-title">
						<h2>I&#39;m glad you found me</h2>
					</div>
					<div className="text">
						<h3>Andy Tuttle, Web Developer</h3>
					</div>
				</div>
				<div className="parallax-bg" ref="section" onMouseMove={this.onMouseMove}>
					<img className="l1" ref="l1" role="presentation" onMouseMove={this.onMouseMove} src={require("../layer1.png")}/>
					<img className="l2" ref="l2" role="presentation" onMouseMove={this.onMouseMove} src={require("../layer2.png")}/>
					<img className="l3" ref="l3" role="presentation" onMouseMove={this.onMouseMove} src={require("../layer3.png")}/>
					<img className="l4" ref="l4" role="presentation" onMouseMove={this.onMouseMove} src={require("../layer4.png")}/>
					<img className="l5" ref="l5" role="presentation" onMouseMove={this.onMouseMove} src={require("../layer5.png")}/>
				</div>
			</div>
		)
	}
}

export default MainBody;