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
    console.log("AppProps:", this.props);
    return (
      <Router>
        {
          <div>
            <NavBar state={this.props.state}/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/events">
                <Events />
              </Route>
              <Route path="/locations" render={routerProps => <LocationsContainer {...routerProps} locations={this.props.state.locations}/>}/>
              <Route exact path="/sports">
                <Sports />
              </Route>
              <Route path="/users" render={routerProps => <UsersContainer {...routerProps} state={this.props.state}/>}/>        
              <Route path="/login" render={routerProps => <SessionsContainer {...routerProps} state={this.props.state}/>}/>
              <Route path="/signup" render={routerProps => <SessionsContainer {...routerProps} state={this.props.state}/>}/>
            </Switch>
          </div>
        }
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {state}
}
export default connect(mapStateToProps) (App);
