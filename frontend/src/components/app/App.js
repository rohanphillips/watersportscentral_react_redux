import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';
import ProtectedRoute from '../sessions/ProtectedRoute'
import NavBar from '../navbar/NavBar'
import Home from '../home/Home';
import Events from '../events/Events';
import LocationsContainer from '../locations/LocationsContainer';
import SessionsContainer from '../sessions/SessionsContainer';
import UsersContainer from '../users/UsersContainer';

import Sports from '../sports/Sports';

// const App = (props) => {
class App extends Component {
  render() {
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
              <Route path="/locations" render={routerProps => <LocationsContainer {...routerProps}/>}/>
              <Route exact path="/sports">
                <Sports />
              </Route>
              <Route path="/users" render={routerProps => <UsersContainer {...routerProps}/>}/>        
              <Route path="/login" render={routerProps => <SessionsContainer {...routerProps}/>}/>
              <Route path="/signup" render={routerProps => <SessionsContainer {...routerProps}/>}/>
            </Switch>
          </div>
        }
      </Router>
    );
  }
}

// const mapStateToProps = state => {
//   return {state}
// }
export default App;
