// eslint-disable-next-line
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CreateEvent from './pages/CreateEvent/CreateEvent';
// import ViewEvent from './components/ViewEvent/ViewEvent';
import NotFound from './components/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
<<<<<<< HEAD
import ViewEvent from './pages/ViewEvent/ViewEvent';
import UserProvider from "./contexts/userProvider";
=======
// import Event from './pages/Event/Event'
import AboutUs from './pages/AboutUs/aboutUs'
>>>>>>> 4681dc9f3567a12005441d6e21245f355c012436


function App() {

  return (
      <Router>
		  <main>
      <Switch>
      <Route path="/about" exact component={AboutUs} />
						<Route path="/" exact component={HomePage} />
            <Route path="/logIn" exact component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
<<<<<<< HEAD
            <UserProvider>
              <Route path="/create" exact component={CreateEvent} />
              <Route path="/view" exact component={ViewEvent} />
              <Route path="/event/:urlending" exact component={ViewEvent} /> 
            </UserProvider>
            {/* TODO: modify event compnent */}
            {/* to create event, submit to server event object
            then, reroute to ourdomain.com/event/urlending
            */}
=======
            <Route path="/event/:urlending" exact component={Event} /> 
>>>>>>> 4681dc9f3567a12005441d6e21245f355c012436
			  		<Route component={NotFound} />
			  	</Switch>
          </main>
        </Router>
  );
}


export default App;
