// eslint-disable-next-line
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CreateEvent from './components/CreateEvent/CreateEvent';
// import ViewEvent from './components/ViewEvent/ViewEvent';
import NotFound from './components/NotFound/NotFound';
import HomePage from './components/HomePage/HomePage';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import ViewEvent from './components/ViewEvent/ViewEvent'
import DemoApp from './components/Calender/calender'

function App() {

  return (
      <Router>
		  <main>
      <Switch>
						<Route path="/" exact component={HomePage} />
            <Route path="/create" exact component={CreateEvent} />
            <Route path="/logIn" exact component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/view" exact component={ViewEvent} />
            <Route path="/calender" exact component={DemoApp} />
			  		<Route component={NotFound} />
			  	</Switch>
          </main>
        </Router>
  );
}


export default App;
