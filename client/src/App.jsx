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

function App() {

  return (
      <Router>
		  <main>
      <Switch>
						<Route path="/" exact component={HomePage} />
            <Route path="/create" exact component={CreateEvent} />
						{/* <Route path="/vote/:id" component={StrawpollVote} />
						<Route path="/show/:id" component={StrawpollShow} /> */}
			  		<Route component={NotFound} />
			  	</Switch>
          </main>
        </Router>
  );
}


export default App;
