import React, {Component} from 'react';
import {
  Route 
} from 'react-router-dom';
import { connect } from 'react-redux';
import HasAccess from '../sessions/HasAccess'
import LocationCreate from './LocationCreate'
import LocationsList from './LocationsList'
import Location from './Location'
import LocationEdit from './LocationEdit'
import {getLocations, deleteLocation} from '../../actions/siteActions'

class LocationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      
    }
  }

  componentDidMount(){
    console.log("LocationsContainer:", "componentDidMount")
    this.props.getLocations()
  }

  componendDidUpdate(){
    console.log("LocationsContainer:", "componendDidUpdate")
  }
  render() {
    console.log("LocationsContainer", "locationsFetched", this.props.state.locationsFetched)
    
    return (
        <div>
          {<h1>Locations Container</h1>}
          <HasAccess>
            <Route exact path={`/locations/create`} render={routerProps => <LocationCreate {...routerProps}/>} />
          </HasAccess>
          <Route exact path={`/locations/`} render={routerProps => <LocationsList {...routerProps}/>} />
          <Route exact path={`/locations/:id`} render={routerProps => <Location {...routerProps} props={this.props}/>} />
          <Route exact path={`/locations/:id`} render={routerProps => <LocationEdit {...routerProps} props={this.props}/>} />
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    getLocations: data => dispatch(getLocations(data)),
    deleteLocation: id => dispatch(deleteLocation(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer);