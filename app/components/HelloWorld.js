import React from 'react';
import Cloud from './Cloud';
import Tree from './Tree';
import Person from './Person';
import Welcome from './Welcome';

import './style/index.less';


class HelloWorld extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	footerWidth: window.innerWidth,
        	move: 0
        }
    }

    componentWillMount() {
    	//this.setState({footerWidth: window.innerWidth - document.querySelector('.scene').style.width});
    }

    componentDidMount() {
    	this.setState({footerWidth: document.querySelector('.scene').clientWidth});
    }

	handleScroll(ev){
		let height = ev.target.scrollTop;
		this.setState({move: height});
	}

	render() {
		return (
			<div className="container" ref="bodyBox" onScroll={(ev)=>{this.handleScroll.call(this, ev)}}>
				<div className="scene">
					<Welcome move={this.state.move}/>
					<Cloud move={this.state.move} position={50} top={20}/>
					<Cloud move={0} position={1150} top={100}/>
					<Tree move={this.state.move} position={150} height={50}/>
					<Tree move={this.state.move} position={650} height={150} color='spe'/>
					<Tree move={this.state.move} position={800} height={40}/>
					<Person move={this.state.move}/>
					<div className="footer" style={{width:this.state.footerWidth}}></div>
				</div>
			</div>
		)
	}
}

export default HelloWorld;