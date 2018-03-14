import React from 'react';
import Cloud from './Cloud';
import Tree from './Tree';
import Person from './Person';
import Welcome from './Welcome';
import Moutain from './Moutain';
import Level from './Level';
import About from './About';
import Life from './Life';
import Step from './Step';
import Hobby from './Hobby';
import Skill from './Skill';

import './style/index.less';


class HelloWorld extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	footerWidth: window.innerWidth,
        	move: 0,
        	level2: false
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentWillMount() {
    	window.addEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
    	this.setState({footerWidth: document.querySelector('.scene').clientWidth});
    }

	handleScroll(ev){
		let height = document.body.scrollTop;
		this.setState({move: height});
		if(height >= 6340 && height <= 7712){
			this.setState({level2: true});
		}else{
			this.setState({level2: false});
		}
	}

	render() {
		return (
			<div className="container">
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

					<Step move={this.state.move} position={3850}/>

					<Tree move={this.state.move} position={4300} height={120} bigNum={150}/>
                	<Tree move={this.state.move} position={4450} height={120} bigNum={150}  color='spe'/>
                	<Tree move={this.state.move} position={4600} height={120} bigNum={150}/>
                	<Tree move={this.state.move} position={4750} height={120} bigNum={150} color='spe'/>
                	<Tree move={this.state.move} position={4900} height={120} bigNum={150}/>
                	<Tree move={this.state.move} position={5050} height={120} bigNum={150} color='spe'/>
					<Life move={this.state.move} position={4300}/>

					<Tree move={this.state.move} position={5950} height={120} bigNum={150}/>
					<Hobby move={this.state.move} position={5600}/>

					<Level move={this.state.move} position={6400} words="LEVEL 2"/>	
					
					<div className={this.state.level2?'footer show':'footer'} style={{width:this.state.footerWidth}}></div>

					<Skill move={this.state.move} position={6800}/>
					<Person move={this.state.move}/>
				</div>
			</div>
		)
	}
}

export default HelloWorld;