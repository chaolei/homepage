import React from 'react';

import './style/hobby.less';


class Hobby extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
            position: 0,
            animation: false,
            show: false
        }
    }

    componentWillMount() {
        this.setState({position: this.props.position});
    }

    componentWillReceiveProps(nextProps) {
        let move = this.state.position - nextProps.move;
        this.setState({move: move});
        if(move <= 680 && !this.state.animation){
            this.showResult();
            this.setState({animation: true});
        }
    }

    showResult(){
        this.setState({show: true});
    }

	render() {
		return (
			<div className="hobby" style={{left: this.state.move}}>
                <div className="hobby-title">
                    <div>Sports basketball</div>
                </div>
                <div className="basket-board">
                    <div className="basket-ciycle"></div>
                </div>
                <div className="basket-frame1"></div>
                <div className="basket-frame2"></div>
                <div className={this.state.show ? "basketball show" : "basketball"}>
                    <div className="ball-line"></div>
                </div>
			</div>
		)
	}
}

export default Hobby;