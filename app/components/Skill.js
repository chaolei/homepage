import React from 'react';
import Fish from './Fish';

import './style/skill.less';


class Skill extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
        	move: 0,
            position: 0,
            level2: false,
            show: false
        }
    }

    componentWillMount() {
        this.setState({position: this.props.position});
    }

    componentWillReceiveProps(nextProps) {
        let move = this.state.position - nextProps.move;
        this.setState({move: move});
        if(move <= 200){
            this.setState({show: true});//只显示一次，否则需要设置为false
        }
        if(nextProps.move >= 6350 && nextProps.move <= 7712){
            this.setState({level2: true});
        }else{
            this.setState({level2: false});
        }
    }

	render() {
		return (
			<div className={this.state.level2?'skill level2':'skill'} style={{left: this.state.move}}>
				<div className="citybg">
                    <div className="city1">
                        <div className="city1-mall mall1"></div>
                        <div className="city1-mall mall2"></div>
                        <div className="city1-mall mall3"></div>
                        <div className="city1-mall mall4"></div>
                        <div className="city1-mall mall5"></div>
                    </div>
                    <div className="city2">
                        <div className="city1-mall mall21"></div>
                        <div className="city1-mall mall22"></div>
                        <div className="city1-mall mall23"></div>
                        <div className="city1-mall mall24"></div>
                        <div className="city1-mall mall25"></div>
                        <div className="city1-mall mall26"></div>
                        <div className="city1-mall mall27"></div>
                        <div className="city1-mall mall28"></div>
                    </div>
                    <div className="skill-title">
                        <div className="skill-name skill4">ANGULAR</div>
                        <div className="skill-name skill3">VUE</div>
                        <div className="skill-name skill2">REACT</div>
                        <div className="skill-name skill1">JQUERY</div>
                    </div>
                    <div className="skill-status">
                        <div className="skill-level level1">BEGINNER</div>
                        <div className="skill-level level2">FAMILIAR</div>
                        <div className="skill-level level3">PROFICIENT</div>
                        <div className="skill-level level4">EXPERT</div>
                        <div className="skill-level level5">MASTER</div>
                    </div>
                    <Fish type={this.state.show?"begin show": "begin"} bottom={290}/>
                    <Fish type={this.state.show?"begin show": "begin"} bottom={215}/>
                    <Fish type={this.state.show?"begin show": "begin"} bottom={140}/>
                    <Fish type={this.state.show?"begin show": "begin"} bottom={65}/>
                    <Fish type={this.state.show?"familiar show": "familiar"} bottom={215}/>
                    <Fish type={this.state.show?"familiar show": "familiar"} bottom={140}/>
                    <Fish type={this.state.show?"familiar show": "familiar"} bottom={65}/>
                    <Fish type={this.state.show?"proficient show": "proficient"} bottom={140}/>
                    <Fish type={this.state.show?"proficient show": "proficient"} bottom={65}/>
                    <Fish type={this.state.show?"expert show": "expert"} bottom={65}/>
                </div>
			</div>
		)
	}
}

export default Skill;
