import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Events from './components/Events';
import Locations from './components/Locations';
import Sports from './components/Sports';
import Users from './components/Users';

const App = (props) => {
  return (
    <Router>
      {
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/locations">
              <Locations />
            </Route>
            <Route exact path="/sports">
              <Sports />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      }
    </Router>
  );
}

export default App;
