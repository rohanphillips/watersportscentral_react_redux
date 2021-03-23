import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import LocationFlat from './LocationFlat'
import {connect} from 'react-redux';
import LoggedIn from '../sessions/LoggedIn'
import {deleteLocation} from '../../actions/siteActions'
 
class LocationsList extends Component {
 
  render (){
    return(
      <div>
        <h1>Locations List</h1>
        <LoggedIn>
         <NavLink to="/locations/create">
           <button>Add Location</button>
          </NavLink>
        </LoggedIn>
      {
        this.props.state.locations.locations.map( location => (
          <LocationFlat data={location} deleteLocation={this.props.deleteLocation}/>
        ))
      }
    </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLocation: id => dispatch(deleteLocation(id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);