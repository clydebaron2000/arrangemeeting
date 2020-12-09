// eslint-disable-next-line
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CreateEvent from './pages/CreateEvent/CreateEvent';
// import ViewEvent from './components/ViewEvent/ViewEvent';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import UserProvider from "./contexts/userProvider";
import Event from './pages/Event/event';
import AboutUs from './pages/AboutUs/aboutUs'


function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/about" exact component={AboutUs} />
          <Route path="/" exact component={HomePage} />
          <Route path="/logIn" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <UserProvider>
            <Route path="/create" exact component={CreateEvent} />
            <Route path="/event/:urlending" exact component={Event} />
            <Route path = "/*" component={NotFound} />
          </UserProvider>
        </Switch>
      </main>
    </Router>
  );
}


export default App;
