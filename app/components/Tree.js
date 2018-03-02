import React from 'react';

import './style/tree.less';


class Tree extends React.Component {
	render() {
		return (
			<div className="tree">
				<div className="main-tree"></div>
				<div className="main-branch"></div>
				<div className="main-leafs">
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