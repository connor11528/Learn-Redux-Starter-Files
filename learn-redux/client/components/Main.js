import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to='/'>Reduxstagram</Link>
				</h1>
				{/* This sets PhotoGrid and Single as Main's children in <Router></Router> */}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;