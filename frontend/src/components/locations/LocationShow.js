import React from 'react';
 
const LocationShow = ({match, locations}) => { 
  return (
    <div>
      {console.log("LocationShow", locations[match.params.locationId].title)}
      <h3>{ locations[match.params.locationId].title }</h3>
    </div>
  );
}
 
export default LocationShow;