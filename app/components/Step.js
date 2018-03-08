import React from 'react';

import './style/step.less';


class Step extends React.Component {

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
			<div className="step" style={{left: this.state.move}}>
			</div>
		)
	}
}

export default Step;