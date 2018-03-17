import React from 'react';

import './style/skill.less';


class Fish extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
            position: 0
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
            <div className={"fish "+this.props.type} style={{bottom: this.props.bottom}}>
                <div className="fish-head">
                    <div className="fish-eye1"></div>
                    <div className="fish-eye2"></div>
                </div>
                <div className="fish-mouse">
                    <div className="tooth1"></div>
                    <div className="tooth2"></div>
                    <div className="tooth3"></div>
                </div>
                <div className="fish-body">
                </div>
                <div className="fish-tail"></div>
                <div className="fish-back"></div>
            </div>
		)
	}
}

export default Fish;
