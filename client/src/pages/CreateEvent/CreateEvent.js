import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import Example from '../../components/ModalWindow/modalWindow'

export default class CreateEvent extends Component {

	state = {
		loggedIn: false,
		loading: true
	}

	checkLoginStatus() {
		axios.get("/logged_in", { withCredentials: true })
		.then(res => {
			console.log("Check Login Success: ", res);
			if(res.data) {
				this.setState({loggedIn: true, loading: false});
			} else {
				this.setState({loggedIn: false, loading: false});
			}
		})
		.catch(err => {
			console.log("Check Login Error: ", err);
		})
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	render () {
        return (

			<div>
					<div className= "createEventDiv">
		
		<h2 className="createH2">Create Event Page!</h2>
	  <Example/>
		 
	  </div>
	  			<h2>Welcome to Rendezvous!</h2>
				{this.state.loading === true ? <h1>loading</h1> : this.state.loggedIn ? <h1> logged in </h1> : <Redirect to = {{pathname: "/"}} /> }
				<p><Link to="/">Head Back to Home</Link></p>
	  		</div>
		)
		}
	}


// 	import React from 'react';
// import { Link } from 'react-router-dom';
// import "./style.css";





const CreateEventModal = () => (
	<div className= "createEventDiv">
		
	  <h2 className="createH2">Create Event Page!</h2>
    <Example/>
       
	  <p><Link to="/">Head back to home</Link></p>	
	</div>
);


