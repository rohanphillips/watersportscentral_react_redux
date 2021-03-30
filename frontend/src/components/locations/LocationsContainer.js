import React, {Component} from 'react';
import {
  Route , 
} from 'react-router-dom';
import { connect } from 'react-redux';
import LocationsList from './LocationsList'
import ErrorsList from '../errors/ErrorsList'
import Location from './Location'
import {getLocations, deleteLocation} from '../../actions/locationActions'

class LocationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '', 
      error: false,
      errors: {}     
    }
  }

  componentDidMount(){
    const {getLocations} = this.props
    getLocations()
      .then(responseJson => {
        })
        .catch(errors => {
          this.setState({
            error: true,
            errors
          })
        })
  }

  render() {
    const {locationsFetched} = this.props.state.locations
    if(this.state.error){
      return (
        <ErrorsList state={this.state}/>
      )
    }
    if (locationsFetched !== true){      
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
        <div className="container border border-amber-200 w-full">          
          {<h1>Locations Data</h1>}
          <Route exact path={`/locations/`} render={routerProps => <LocationsList {...routerProps}/>} />
          <Route path={`/locations/:id`} render={routerProps => <Location routerProps={routerProps} props={this.props}/>} />
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: data => dispatch(getLocations(data)),
    deleteLocation: id => dispatch(deleteLocation(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer);