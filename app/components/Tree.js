import React from 'react';

import './style/tree.less';


class Tree extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
        	position: 0,
        	height: 0,
        	color: 'normal',
        	bigNum: 120
        }
    }
    componentWillMount() {
    	this.setState({position: this.props.position,height: this.props.height,bigNum: this.props.bigNum,color: this.props.color?this.props.color:'normal'});
    }

    componentWillReceiveProps(nextProps) {
    	let move = this.state.position - nextProps.move;
    	this.setState({move: move});
    }

	render() {
		return (
			<div className={"tree "+this.state.color} style={{left: this.state.move}}>
				<div className="main-tree" style={{height: this.state.height}}></div>
				<div className="main-branch" style={{bottom: this.state.height-10,height: this.state.bigNum}}></div>
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