import React from 'react';

import './style/about.less';


class About extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
        	position: 0,
        	height: 0,
        	color: 'normal',
            animation: false,
            show: false
        }
    }
    componentWillMount() {
    	this.setState({position: this.props.position});
    }

    componentWillReceiveProps(nextProps) {
    	let move = this.state.position - nextProps.move;
    	this.setState({move: move});
        if(move <= 550 && !this.state.animation){
            this.showResult();
            this.setState({animation: true});
        }
    }

    showResult() {
        this.setState({show: true});
    }

	render() {
		return (
			<div className="about" style={{left: this.state.move}}>
				<div className="about-level level1">BEGINNER</div>
                <div className="about-level level2">FAMILIAR</div>
                <div className="about-level level3">PROFICIENT</div>
                <div className="about-level level4">EXPERT</div>
                <div className="about-level level5">MASTER</div>
				
                <div className="about-type type1">DIV - CSS</div>
                <div className="about-type type2">JAVASCRIPT</div>
                <div className="about-type type3">REACT/VUE/JQUERY</div>
                <div className="about-type type4">PHOTOSHOP</div>

                <div className={this.state.show?'about-result result1 show':'about-result result1'}></div>
                <div className={this.state.show?'about-result result2 show':'about-result result2'}></div>
                <div className={this.state.show?'about-result result3 show':'about-result result3'}></div>
                <div className={this.state.show?'about-result result4 show':'about-result result4'}></div>
			</div>
		)
	}
}

export default About;