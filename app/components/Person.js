import React from 'react';

import './style/person.less';


class Person extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
        	jump: false
        }
    }

    componentWillReceiveProps(nextProps) {
    	let move = 450 + nextProps.move;
    	this.setState({move: move});
    	console.log(nextProps.move);
    	if(nextProps.move >= 3300 && nextProps.move <= 3700){
    		this.setState({jump: true});
    	}else{
    		this.setState({jump: false});
    	}
    }

	render() {
		return (
			<div className={this.state.jump?'person up':'person'}>
				<div className="head">
					<div className="hair"><div className="hair-left"></div></div>
					<div className="ear"></div>
					<div className="mouse"></div>
					<div class="glass">
						<div className="glass1"><div className="eye1"></div></div>
						<div className="glass2"><div className="eye2"></div></div>
					</div>
				</div>
				<div className="body">
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