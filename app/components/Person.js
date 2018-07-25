import React from 'react';

import './style/person.less';


class Person extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
        	jump: false,
			level2: false,
			direct: 'right'
        }
    }

    componentWillReceiveProps(nextProps) {
		let move = 450 + nextProps.move;
		let {direct} = this.state;
		if(nextProps.move < this.props.move){
			direct = 'left';
		}else if(nextProps.move > this.props.move){
			direct = 'right';
		}
		if(nextProps.move == this.props.move && direct == 'left'){
			direct = 'left';
		}
    	this.setState({move: move, direct: direct});
    	if(nextProps.move >= 3300 && nextProps.move <= 3700){
    		this.setState({jump: true});
    	}else{
    		this.setState({jump: false});
    	}
    	if(nextProps.move >= 6350 && nextProps.move <= 7712){
			this.setState({level2: true});
		}else{
			this.setState({level2: false});
		}
    }

	render() {
		return (
			<div className={this.state.jump?'person up':(this.state.level2?'person level2':'person')}>
				<div className={this.state.level2?"bubble show": "bubble"}></div>
				<div className={this.state.direct+' head'}>
					<div className="hair"><div className="hair-left"></div></div>
					<div className="ear"></div>
					<div className="mouse"></div>
					<div class="glass">
						<div className="glass1"><div className="eye1"></div></div>
						<div className="glass2"><div className="eye2"></div></div>
					</div>
				</div>
				<div className="body">
					5
					<div className="lefthand">						
					</div>
					<div className="leftfist">						
					</div>
					<div className="righthand">				
					</div>
					<div className="rightfist">						
					</div>
				</div>
				<div className="trousers">
				</div>
				<div className="foot1 move">
					<div className="shoes1"></div>
				</div>
				<div className="foot2 move">
					<div className="shoes2"></div>
				</div>				
			</div>
		)
	}
}

export default Person;