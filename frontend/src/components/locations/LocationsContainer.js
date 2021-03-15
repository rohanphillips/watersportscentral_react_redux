import React, {Component} from 'react';
import {
  Route 
} from 'react-router-dom';
import Location from './Location'

class LocationsContainer extends Component {
  render() {
    return (
        <div>
          {<h1>Locations Container</h1>}
          <Route exact path={`/locations/new`} render={routerProps => <Location {...routerProps}/>} />
        </div>
    );
  }
};

export default LocationsContainer;