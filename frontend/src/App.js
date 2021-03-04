import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Events from './components/Events';
import LocationsPage from './components/locations/LocationsPage';
import Sports from './components/Sports';
import Users from './components/Users';
import Signup from './components/users/Signup'

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
              {console.log("AppURL")}
              <Route path="/locations" render={routerProps => <LocationsPage {...routerProps} locations={this.state.locations}/>}/>
              <Route exact path="/sports">
                <Sports />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        }
      </Router>
    );
  }
}

export default App;
