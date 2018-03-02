import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigator extends React.Component {
	render() {
		return (
			<div>
				<ul>
			        <li><NavLink exact={true} to="/">首页</NavLink></li>
			        <li><NavLink to="/about">关于</NavLink></li>
				</ul>
			</div>
		)
	}
}

export default Navigator;