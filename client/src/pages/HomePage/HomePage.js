import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Navbar from "../../components/Navbar/Navbar";
import Login from '../../components/GoogleAuth/login';
import Logout from '../../components/GoogleAuth/logout';



export default class HomePage extends Component {

	handleClick() {

	}

	render() {
		return (

			<div>
				<Navbar />
				<div class="header">
					<h2>Scheduling Simplified</h2>
					<p><Link to="/logIn" className="LoginButton">Arrange your meeting</Link></p>

				</div>
				 <div class="row">
					 user story goes here
				 </div>

				<div class="row">
					<div class="column" >
						<h3>Share Your Event Link</h3>
						<p>We make it easy to share your event with your friends!</p>
					</div>
					<div class="column" >
					<h3>Find When Everyone is Available</h3>
						<p>Coordinate with your friends to find when everyone is free!</p>
					</div>

					<div class="column" >
					<h3>Schedule Your Meeting</h3>
						<p>Finalize a when and where with all your friends so everyone can come!</p>
					</div>
				</div>

				<div class="row">
					 <h2>Let us help you!</h2>
					 <p><Link to="/logIn" className="LoginButton">Arrange your meeting</Link></p>
				 </div>

				<div class="footer">
					<p>ArrangeMeeting </p>
				</div>
			</div>
		)
	}
}