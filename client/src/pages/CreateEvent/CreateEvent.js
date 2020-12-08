import React, {
	useContext,
	useState,
	useEffect
} from 'react';
import {
	Link,
	Redirect
} from 'react-router-dom';
import './style.css';
import axios from 'axios';
import Example from '../../components/ModalWindow/modalWindow'
import Navbar from '../../components/Navbar/Navbar';
import UserProvider from '../../contexts/userProvider';
import img4 from "../../images/moduleExample.png";




function CreateEvent() {

	const [pageState, setPageState] = useState({
		loggedIn: false,
		loading: true
	});

	const userData = useContext(UserProvider.context);
	//eslint-disable-next-line
	const handleFormSubmit = event => {
		event.preventDefault();
	};

	//when component mounts this runs
	useEffect(() => {
		console.log(userData);
		axios.get("/logged_in", { withCredentials: true })
		.then(res => {
			console.log("Check Login Success: ", res);
			if(res.data._id) {
				setPageState({loggedIn: true, loading: false});
			} else {
				setPageState({loggedIn: false, loading: false});
			}
		})
		.catch(err => {
			console.log("Check Login Error: ", err);
		})
	}, []);


	return (
		// <div>
		// 	<Navbar />

		// 	<div className= "createEventDiv">
		// 		<h2 className="createH2">Create Event Page</h2>
		// 		<Example/>
		// 	</div>

		// 	<h2>Welcome to Arrange Meeting!</h2>
		// 	{pageState.loading === true ? <h1>loading</h1> : pageState.loggedIn ? <h1> logged in </h1> : <Redirect to = {{pathname: "/logIn"}} /> }
		// 	<p><Link to="/">Head Back to Home</Link></p>
		// </div>

		<div>

			<Navbar />
			<div className="header">
				<h2>Scheduling Simplified</h2>

				<p>
					Simply create a new event and ask everyone to fill out the calendar with times they are free.
						 We will give you the time options that line up with the openings in everyone's schedules. </p>
				<Example />



			</div>


			<div className="row">
				<div className="column" >
					<h3>Select the date and time</h3>
					<div className="card-image">
					<img className= "createImage" src={img4} ></img>
					</div>
					<p>Personalized with your title and description </p>
				</div>
				<div className="column" >
					<h3>Find Availablity</h3>
					<div className="card-image">
						<i class="fas fa-image"></i>{/*image of blank calendar*/}
					</div>
					<p>Coordinate with your friends to find when everyone is free!</p>
				</div>

				<div className="column" >
					<h3>Schedule Your Meeting</h3>
					<div className="card-image">
						<i class="fas fa-image    "></i>{/* image of final calendar higlighted squares*/}

					</div>
					<p>Finalize a when and where with all your friends so everyone can come!</p>
				</div>
			</div>

			<div className="row2">


			</div>

			<div className="footer">
				<p>ArrangeMeeting </p>
			</div>
		</div>
	);
}

export default CreateEvent;