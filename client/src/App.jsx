import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CreateEvent from './components/CreateEvent/CreateEvent';
import ViewEvent from './components/ViewEvent/ViewEvent';
import NotFound from './components/NotFound/NotFound';
import API from "./utils/API";

function App() {

  return (
    <div>
      <h1>App</h1>
      <Router>
		  <main>
      <Switch>
						<Route path="/" exact component={CreateEvent} />
						{/* <Route path="/vote/:id" component={StrawpollVote} />
						<Route path="/show/:id" component={StrawpollShow} /> */}
			  		<Route component={NotFound} />
			  	</Switch>
          </main>
        </Router>
    </div>
  );
}


export default App;
