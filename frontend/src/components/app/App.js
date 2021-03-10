import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";
import './app.css';
import NavBar from '../navbar/NavBar'
import Home from '../home/Home';
import Events from '../events/Events';
import LocationsContainer from '../locations/LocationsContainer';
import SessionsContainer from '../sessions/SessionsContainer';
import UsersContainer from '../users/UsersContainer';
import {getUser} from '../../actions/siteActions'
import Sports from '../sports/Sports';

// const App = (props) => {
class App extends Component {
  
  getUser (){
    if (localStorage.loggedin){
      const decoded = jwt_decode(localStorage.getItem("loggedin"))
      console.log("App:", "getUser:", decoded);
      this.props.getUser(decoded.user_id);
    }
  }


  render() {
    this.getUser();
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

const mapDispatchToProps = dispatch => {
  return {
    getUser: user => dispatch(getUser(user))
  }
}
export default connect(null, mapDispatchToProps) (App);
