import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Navbar from "../../components/Navbar/Navbar";


export default class HomePage extends Component {

	handleClick() {

	}

	render () { 
        return (

			<div>
				<Navbar/>
	  			<h2>Welcome to Rendezvous!</h2>
				<p><Link to="/logIn" className="LoginButton">Login</Link></p>
				<p><Link to="/signup" className="SignupButton">Sign Up</Link></p>
	  		</div>
		)
		}
	}