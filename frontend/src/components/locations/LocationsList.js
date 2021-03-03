import React from 'react';
import { Link } from 'react-router-dom';
 
const LocationsList = ({ locations }) => {
  const renderLocations = Object.keys(locations).map(locationID =>
    <Link key={locationID} to={`/locations/${locationID}`}>{locations[locationID].title}</Link>
  );
 
  return (
    <div>
      {renderLocations}
    </div>
  );
};
 
export default LocationsList;