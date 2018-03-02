import React from 'react';
import Cloud from './Cloud';
import Tree from './Tree';
import Person from './Person';

import './style/index.less';


class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<Cloud/>
				<Tree/>
				<Person/>
				<div className="footer"></div>
			</div>
		)
	}
}

export default HelloWorld;