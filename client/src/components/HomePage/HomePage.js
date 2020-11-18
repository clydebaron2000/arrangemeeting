import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import SignUp from '../SignUp/SignUp';

const HomePage = () => (
	<div>
	  <h2>Welcome to Rendezvous!</h2>
      <p><Link class="btnLink" to="/create">Create Event</Link></p>
	  <SignUp></SignUp>
	</div>
);

export default HomePage;