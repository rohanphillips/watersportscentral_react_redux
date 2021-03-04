import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Events from './components/Events';
import LocationsContainer from './components/locations/LocationsContainer';
import Sports from './components/Sports';
import Users from './components/Users';
import UsersContainer from './components/users/UsersContainer';

// const App = (props) => {
class App extends Component {

  location = () => {
    return "test";
  }

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
              <Route exact path="/users" render={routerProps => <UsersContainer {...routerProps} state={this.props.state}/>}/>        
              <Route path="/signup" render={routerProps => <UsersContainer {...routerProps} state={this.props.state}/>}/>
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
