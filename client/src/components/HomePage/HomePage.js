import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class HomePage extends Component {

	handleClick() {

	}

	render () { 
        return (

			<div>
	  			<h2>Welcome to Rendezvous!</h2>
				<p><Link to="/logIn">Login</Link></p>
				<p><Link to="/signup">Sign Up</Link></p>
	  		</div>
		)
		}
	}