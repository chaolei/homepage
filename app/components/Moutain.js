import React from 'react';

import './style/moutain.less';


class Moutain extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
        	position: 0,
        	height: 0,
        	color: 'normal'
        }
    }
    componentWillMount() {
    	this.setState({position: this.props.position,height: this.props.height});
    }

    componentWillReceiveProps(nextProps) {
    	let move = this.state.position - nextProps.move;
    	this.setState({move: move});
    }

	render() {
		return (
			<div className="moutain" style={{left: this.state.move}}>
				<div className="mout-left"></div>
				<div className="mout-right"></div>
			</div>
		)
	}
}

export default Moutain;