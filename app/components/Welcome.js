import React from 'react';

import './style/welcome.less';


class Tree extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0
        }
    }

    componentWillReceiveProps(nextProps) {
    	let move = 100 - nextProps.move;
    	this.setState({move: move});
    }

	render() {
		return (
			<div className="welcome" style={{top: this.state.move}}>
				<div className="wel-words">Welcome<br/> to<br/> my site</div>
			</div>
		)
	}
}

export default Tree;