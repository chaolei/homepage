import React from 'react';

import './style/cloud.less';


class Cloud extends React.Component {
	render() {
		return (
			<div className="cloud">
				<div className="main-cloud"></div>
				<div className="top-cloud"></div>
				<div className="left-cloud"></div>
				<div className="left-scloud"></div>
			</div>
		)
	}
}

export default Cloud;