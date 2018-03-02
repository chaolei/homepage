import React from 'react';
import { HashRouter , Route, hashHistory } from 'react-router-dom';

import HelloWorld from '../components/HelloWorld';
import About from '../components/About';
import Navigator from '../components/Navigator';

class AllRouter extends React.Component{
	render() {
		return (
			<HashRouter history={hashHistory}>
				<div>
					<Route path="/" exact={true} component={HelloWorld}/>
					<Route path="/about" component={About}/>
				</div>
			</HashRouter>
		)
	}
}
export default AllRouter;