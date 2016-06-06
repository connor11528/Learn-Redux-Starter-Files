import React from 'react';
import { render } from 'react-dom'; // dom stuff in its own package

// import css (webpack puts style tag in javascript and embeds it for us)
import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// set up React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// integrate store with react-router
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path='/view/:postId' component={Single}></Route>
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));