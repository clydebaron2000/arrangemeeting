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
import HomePage from './components/HomePage/HomePage';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import ViewEvent from './pages/ViewEvent/ViewEvent'

function App() {

  return (
      <Router>
		  <main>
      <Switch>
						<Route path="/" exact component={HomePage} />
            <Route path="/create" exact component={CreateEvent} />
            <Route path="/logIn" exact component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/event/:urlending" exact component={ViewEvent} /> 
            {/* TODO: modify event compnent */}
            {/* to create event, submit to server event object
            then, reroute to ourdomain.com/event/urlending
            */}
			  		<Route component={NotFound} />
			  	</Switch>
          </main>
        </Router>
  );
}


export default App;
