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
// import _ from "lodash";





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
		<div>
			<Navbar/>

			<div className= "createEventDiv">
				<h2 className="createH2">Create Event Page!</h2>
				<Example/>
			</div>

			<h2>Welcome to Rendezvous!</h2>
			{pageState.loading === true ? <h1>loading</h1> : pageState.loggedIn ? <h1> logged in </h1> : <Redirect to = {{pathname: "/logIn"}} /> }
			<p><Link to="/">Head Back to Home</Link></p>
		</div>
	);
	}

export default CreateEvent;