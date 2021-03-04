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
  state = {
    locations: {
      1: { id: 1, title: 'Coralville Lake' },
      2: { id: 2, title: 'Cedar River' },
      3: { id: 3, title: 'Bull Shoals' }
    }
  }

  location = () => {
    return "test";
  }

  render() {
    console.log("AppProps:", this.props);
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
              <Route path="/locations" render={routerProps => <LocationsContainer {...routerProps} locations={this.state.locations}/>}/>
              <Route exact path="/sports">
                <Sports />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
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
