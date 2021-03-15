import React, {Component} from 'react';
import {
  Route 
} from 'react-router-dom';
import LocationCreate from './LocationCreate'

class LocationsContainer extends Component {
  render() {
    return (
        <div>
          {<h1>Locations Container</h1>}
          <Route exact path={`/locations/create`} render={routerProps => <LocationCreate {...routerProps}/>} />
        </div>
    );
  }
};

export default LocationsContainer;