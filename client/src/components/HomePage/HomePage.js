import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import SignUp from '../SignUp/SignUp';

const HomePage = () => (
	<div>
	  <h2>Home Page!</h2>
      <p><Link to="/create">Create Event</Link></p>
	  <SignUp></SignUp>
	</div>
);

export default HomePage;