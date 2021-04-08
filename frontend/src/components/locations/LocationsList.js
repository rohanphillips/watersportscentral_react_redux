import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import LocationFlat from './LocationFlat'
import {connect} from 'react-redux';
import LoggedIn from '../sessions/LoggedIn'
import {deleteLocation} from '../../actions/locationActions'
 
class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    }
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
  }
  
  render (){
    console.log("locationsList", this.state.search)
    const results = this.props.locationsState.locations.filter(location => {
      return location.name.includes(this.state.search)
    })
    console.log("newResults:", results);
    return(
      <div>
        <h1>Locations List</h1>
        <LoggedIn>
         <NavLink to="/locations/create">
           <button className="btn-add">Add Location</button>
          </NavLink>
        </LoggedIn>   
        <label>
          Search:
          <input onChange={this.updateSearch}
            type="text"
            name="search"
            value={this.state.search}
          />
        </label>
        {
          results.map( location => (
            <React.Fragment key={location.id}>
              <LocationFlat data={location} deleteLocation={this.props.deleteLocation}/>
            </React.Fragment>
          ))
        }        
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {locationsState: state.locationsState,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLocation: id => dispatch(deleteLocation(id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);