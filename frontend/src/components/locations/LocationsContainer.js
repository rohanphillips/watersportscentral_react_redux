import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import LocationShow from './LocationShow';
import LocationsList from './LocationsList';
import LocationEdit from './LocationEdit'

const LocationsPage = ({ match, locations}) => {
  return (
    <Router>
      <div>
        {<h1>Locations Container</h1>}
        <LocationsList locations={locations} />        
        <Route exact path={match.url} render={() => <h3>Choose a location from the list </h3>}/>
        <Route exact path={`${match.url}/:locationId`} render={routerProps => <LocationShow {...routerProps} locations={locations}/>} />
        <Route exact path={`${match.url}/:locationId/edit`} render={routerProps => <LocationEdit {...routerProps} locations={locations}/>} />
      </div>
    </Router>
  );
};

export default LocationsPage;