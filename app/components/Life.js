import React from 'react';
import Tree from './Tree';

import './style/life.less';


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
			<div className="life" style={{left: this.state.move}}>
                <div className="life-title">
                    <div>Live and Work in ChengDu</div>
                </div>
                <div className={this.state.show?'panda show':'panda'}>
                    <div className="panda-head">
                        <div className="eye-left"></div>
                        <div className="eye-right"></div>
                        <div className="p-noise"></div>
                        <div className="p-mouse"></div>
                    </div>
                    <div className="panda-body">
                        <div className="panda-lhand"></div>
                        <div className="panda-rhand"></div>
                        <div className="panda-lfoot"></div>
                        <div className="panda-rfoot"></div>
                    </div>
                </div>
                <div className={this.state.show?'hotpot show':'hotpot'}>
                    <div className="pot">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                    <div className="gas-area">
                        <div className="gas"></div>
                        <div className="gas gas1"></div>
                    </div>
                    <div className="case case1"></div>
                    <div className="case case2"></div>
                    <div className="case case3"></div>
                    <div className="case case4"></div>
                    <div className="case case5"></div>
                    <div className="case case6"></div>
                    <div className="case case7"></div>
                    <div className="case case8"></div>
                    <div className="case case9"></div>
                    <div className="case case10"></div>
                    <div className="chopsticks"><div className="meat"></div></div>
                </div>
			</div>
		)
	}
}

export default About;