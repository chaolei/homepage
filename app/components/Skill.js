import React from 'react';

import './style/skill.less';


class Skill extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
            position: 0,
            level2: false,
        }
    }

    componentWillMount() {
        this.setState({position: this.props.position});
    }

    componentWillReceiveProps(nextProps) {
        let move = this.state.position - nextProps.move;
        this.setState({move: move});
        if(nextProps.move >= 6350 && nextProps.move <= 7712){
            this.setState({level2: true});
        }else{
            this.setState({level2: false});
        }
    }

	render() {
		return (
			<div className={this.state.level2?'skill level2':'skill'} style={{left: this.state.move}}>
				
			</div>
		)
	}
}

export default Skill;
