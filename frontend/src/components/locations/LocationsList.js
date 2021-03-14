import React, { Component} from 'react';
import LocationFlat from './LocationFlat'
import {connect} from 'react-redux';
import {deleteLcoation} from '../../actions/siteActions'
 
class LocationsList extends Component {
 
  render (){
    return(
      <div>
        <h1>UsersList</h1>
      {
        this.props.state.locations.map( location => (
          <LocationFlat location={location} deleteLocation={this.props.deleteLocation}/>
        ))
      }
    </div>
    )
  };
};
 
export default LocationsList;