import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Navbar from "../../components/Navbar/Navbar";
// import Login from '../../components/GoogleAuth/login';
// import Logout from '../../components/GoogleAuth/logout';
import AboutUS from '../AboutUs/aboutUs';
import img1 from "../../images/tiago-rosado-cMG5qjpnsyg-unsplash.jpg";
import img2 from "../../images/christina-wocintechchat-com-4PU-OC8sW98-unsplash.jpg";
import img3 from "../../images/stil-flRm0z3MEoA-unsplash.jpg";




export default class HomePage extends Component {

	render() {
		return (

			<div className="homepagebody">

				<Navbar />
				<div className="homeheader">
					<h2>Scheduling is now simplified...</h2>

					<p>Do you have trouble finding a time when all your friends can meet?
					Well ArrangeMeeting is here to help you coordinate when you are all available!
					Simply create a new event and ask everyone to fill out the calendar with times they are free.
						 We will give you the time options that line up with the openings in everyone's schedules. </p>

					<p><Link to="/logIn" className="LoginButton">Arrange Your Meeting!</Link></p>

				</div>

				<div className="row">
					<div className="column" >
						<h3>Share Your Event Link</h3>
						<div className="card-image">
							{/* eslint-disable-next-line */}
							<img src={img1} ></img>
						</div>
						<p>We make it easy to share your event with your friends!</p>
					</div>

					<div className="column" >
						<h3>Find Availablity</h3>
						<div className="card-image">
							{/* eslint-disable-next-line */}
							<img src={img2} ></img>

						</div>
						<p>Coordinate with your friends to find when everyone is free!</p>
					</div>

					<div className="column" >
						<h3>Schedule Your Meeting</h3>
						<div className="card-image">
							{/* eslint-disable-next-line */}
							<img src={img3} ></img>

						</div>
						<p>Finalize a when and where with all your friends so everyone can come!</p>
					</div>
				</div>

				<div className="row2">
					<h2>Let us help you today!</h2>
					<p><Link to="/logIn" className="LoginButton">Arrange Your Meeting!</Link></p>

				</div>

				<AboutUS></AboutUS>

				<div className="homefooter">
					<p>ArrangeMeeting </p>
				</div>
			</div>

		)
	}
}