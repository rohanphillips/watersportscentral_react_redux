import React, { Component} from 'react';
import LocationFlat from './LocationFlat'
import {connect} from 'react-redux';
import {deleteLocation} from '../../actions/siteActions'
 
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

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLocation: id => dispatch(deleteLocation(id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);