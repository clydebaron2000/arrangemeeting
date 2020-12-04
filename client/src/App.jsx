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
import Event from './pages/Event/Event'


function App() {

  return (
      <Router>
		  <main>
      <Switch>
						<Route path="/" exact component={HomePage} />
            <Route path="/create" exact component={CreateEvent} />
            <Route path="/logIn" exact component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/event/:urlending" exact component={Event} /> 
			  		<Route component={NotFound} />
			  	</Switch>
          </main>
        </Router>
  );
}


export default App;
