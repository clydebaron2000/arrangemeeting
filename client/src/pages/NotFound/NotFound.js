import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => {
	return (
	<div>
	  <h2>404 - Page not found!</h2>
	  <p><Link to="/">Head back to home</Link></p>
	</div>
	);
};

export default NotFound;