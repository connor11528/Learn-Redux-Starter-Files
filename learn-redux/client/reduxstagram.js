import React from 'react';
import { render } from 'react-dom'; // dom stuff in its own package

// import css (webpack puts style tag in javascript and embeds it for us)
import css from './styles/style.styl';

// Import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// set up React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path='/view/:postId' component={Single}></Route>
		</Route>
	</Router>
);

render(router, document.getElementById('root'));