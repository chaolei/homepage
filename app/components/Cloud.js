import React from 'react';

import './style/cloud.less';


class Cloud extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
        	position: 0,
        	top: 20,
        }
    }
    componentWillMount() {
    	this.setState({position: this.props.position,top: this.props.top, text: this.props.text, textUrl: this.props.textUrl});
    }

    componentWillReceiveProps(nextProps) {
    	let move = this.state.position - nextProps.move;
    	this.setState({move: move});
    }

	render() {
		let {text, textUrl} = this.state;
		return (
			<div className="cloud" style={{left: this.state.move,top: this.state.top}}>
				<div className="main-cloud"></div>
				<div className="top-cloud"></div>
				<div className="left-cloud"></div>
				<div className="left-scloud"></div>
				{
					text?<div className="info-cloud">{textUrl?<a href={textUrl}>{text}</a>:text}</div>:''
				}
			</div>
		)
	}
}

export default Cloud;