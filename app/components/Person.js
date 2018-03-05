import React from 'react';

import './style/person.less';


class Person extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0
        }
    }

    componentWillReceiveProps(nextProps) {
    	let move = 450 + nextProps.move;
    	this.setState({move: move});
    	console.log(nextProps.move);
    }

	render() {
		return (
			<div className="person" >
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