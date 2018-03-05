import React from 'react';

import './style/tree.less';


class Tree extends React.Component {

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
    	this.setState({position: this.props.position,height: this.props.height,color: this.props.color?this.props.color:'normal'});
    }

    componentWillReceiveProps(nextProps) {
    	let move = this.state.position - nextProps.move;
    	this.setState({move: move});
    }

	render() {
		return (
			<div className={"tree "+this.state.color} style={{left: this.state.move}}>
				<div className="main-tree" style={{height: this.state.height}}></div>
				<div className="main-branch" style={{bottom: this.state.height-10}}></div>
				<div className="main-leafs" style={{bottom: this.state.height-20}}>
					<div className="leaf"></div>
					<div className="leaf"></div>
					<div className="leaf"></div>
					<div className="leaf"></div>
					<div className="leaf"></div>
					<div className="leaf"></div>
				</div>
			</div>
		)
	}
}

export default Tree;