import React from 'react';
import Cloud from './Cloud';
import Tree from './Tree';
import Person from './Person';
import Welcome from './Welcome';
import Moutain from './Moutain';
import Level from './Level';
import About from './About';

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
					<Tree move={this.state.move} position={150} height={90} bigNum={150}/>
					<Tree move={this.state.move} position={650} height={40} color='spe'/>
					<Tree move={this.state.move} position={800} height={150} bigNum={200}/>
					<Moutain move={this.state.move} position={1200} height={300}/>

					<Level move={this.state.move} position={2000} words="LEVEL 1"/>					
					<Tree move={this.state.move} position={2400} height={30}/>
					<Tree move={this.state.move} position={2500} height={140} color='spe' bigNum={130}/>
					<Tree move={this.state.move} position={2650} height={40} bigNum={100}/>
					<About move={this.state.move} position={2800}/>


					<Person move={this.state.move}/>
					<div className="footer" style={{width:this.state.footerWidth}}></div>
				</div>
			</div>
		)
	}
}

export default HelloWorld;