import React from 'react';
import ReactDom from 'react-dom';

import AllRouter from './router/index';

ReactDom.render(
	<AllRouter/>,
	document.getElementById("app")
);