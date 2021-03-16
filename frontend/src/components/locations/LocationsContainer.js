import React, {Component} from 'react';
import {
  Route 
} from 'react-router-dom';
import HasAccess from '../sessions/HasAccess'
import LocationCreate from './LocationCreate'

class LocationsContainer extends Component {
  render() {
    return (
        <div>
          {<h1>Locations Container</h1>}
          <HasAccess>
            <Route exact path={`/locations/create`} render={routerProps => <LocationCreate {...routerProps}/>} />
          </HasAccess>
        </div>
    );
  }
};

export default LocationsContainer;