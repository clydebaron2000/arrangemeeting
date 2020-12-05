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
import _ from "lodash";



// export default class CreateEvent extends Component {

// 	state = {
// 		loggedIn: false,
// 		loading: true
// 	}

// 	// [selected, setSelected] = useState("All");
// 	// userData = useContext(UserProvider.context);
// 	// // const text = _.isEmpty(userData) ? LoginMsg: "Explore Your Data";
// 	// options = Object.keys(userData).filter(key => {
// 		// 	return userData[key] !== null;
// 		// });

// 		checkLoginStatus() {
// 		console.log(userData);
// 		axios.get("/logged_in", { withCredentials: true })
// 		.then(res => {
// 			console.log("Check Login Success: ", res);
// 			if(res.data) {
// 				this.setState({loggedIn: true, loading: false});
// 			} else if(true) {

// 			} else {
// 				this.setState({loggedIn: false, loading: false});
// 			}
// 		})
// 		.catch(err => {
// 			console.log("Check Login Error: ", err);
// 		})


// 	}

// 	componentDidMount() {
// 		this.checkLoginStatus();
// 	}

// 	render () {
//         return (
// 			<div>
// 				<Navbar/>

// 				<div className= "createEventDiv">
// 					<h2 className="createH2">Create Event Page!</h2>
// 					<Example/>
// 				</div>

// 	  			<h2>Welcome to Rendezvous!</h2>
// 				{this.state.loading === true ? <h1>loading</h1> : this.state.loggedIn ? <h1> logged in </h1> : <Redirect to = {{pathname: "/logIn"}} /> }
// 				<p><Link to="/">Head Back to Home</Link></p>
// 	  		</div>
// 		)
// 	}
// }




function CreateEvent() {

	const [pageState, setPageState] = useState({
		loggedIn: false,
		loading: true
	});

	const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null;
    });

	const handleFormSubmit = event => {
		event.preventDefault();
	  };

	//when component mounts this runs
	useEffect(() => {
		console.log({userData});
		axios.get("/logged_in", { withCredentials: true })
		.then(res => {
			console.log("Check Login Success: ", res);
			if(res.data) {
				setPageState({loggedIn: true, loading: false});
			} else if(false) {

			} else {
				// setPageState({loggedIn: false, loading: false});
			}
		})
		.catch(err => {
			console.log("Check Login Error: ", err);
		})
	})
	
	
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