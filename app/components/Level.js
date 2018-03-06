import React from 'react';

import './style/level.less';


class Level extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
            position: 0,
        }
    }

    componentWillMount() {
        this.setState({position: this.props.position});
    }

    componentWillReceiveProps(nextProps) {
        let move = this.state.position - nextProps.move;
        this.setState({move: move});
    }

	render() {
		return (
			<div className="level" style={{left: this.state.move}}>
				<div className="level-words">{this.props.words}</div>
                <div className="level-left"></div>
                <div className="level-right"></div>
			</div>
		)
	}
}

export default Level;