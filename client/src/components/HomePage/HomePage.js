import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import Logout from '../Logout/Logout';

export default class HomePage extends Component {

	handleClick() {

	}

	render () { 
        return (

			<div>
	  			<h2>Welcome to Rendezvous!</h2>
				<p><Link to="/logIn">Login</Link></p>
				<p><Link to="/signup">Sign Up</Link></p>
				<button onClick={this.handleClick}>Login</button>
	  			{/* <LogIn></LogIn> */}
	  		</div>
		)
		}
	}