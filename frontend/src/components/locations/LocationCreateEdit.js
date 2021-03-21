import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {createLocation, updateLocation} from '../../actions/siteActions'

class LocationCreate extends Component {
  state = {
    name: '',
    description: '',
    location_info: '',
    isAccepted: false
  }

  componentDidMount(){
    console.log("LocationCreate:", "componentDidMount")
    if (this.editMode()) {
      const location = this.props.data.state.locations.find(location => location.id === this.locationID())
      this.setState({
        name: location.name,
        description: location.description,
        location_info: location.location_info,
      })
    }
  }

  handleChange = (e) => {    
    let saved;
    switch (e.target.type){
      case 'checkbox':
        saved = e.target.checked;
        break;
      default:
        saved = e.target.value;
    }
    console.log("saved:", saved)
    this.setState({
      [e.target.name]: saved,
    })
  }

  handleOnSubmit = async (e, edit) => {
    e.preventDefault();
    const {name, description, location_info} = this.state;    
    if (this.editMode() === false){
      const {newLocation} = this.props;
      await newLocation({
        name, description, location_info
      })
      if (this.props.data.state.location !== undefined){
        this.setState({
          isAccepted: true,
        })
      }
    } else {
      const {updateLocation} = this.props
      await updateLocation({
        id: this.locationID(), name, description, location_info
      })
      if (this.props.data.state.location !== undefined){
        this.setState({
          isAccepted: true,
        })
      }
    }
    console.log("newLocation", "after submit");
  } 

  locationID = () => {
    return parseInt(this.props.data.routerProps.match.params.id)
  }

  editMode = () => {
    return isNaN(this.locationID()) === false
  }
  
  formFunction = () => {
    if (this.editMode()){
      return "Edit"
    } else {
      return "Create"
    }
  }

  buttonFunction = () => {
    if (this.editMode()){
      return "Save Location"
    } else {
      return "Create Location"
    }
  }
  
  render() {
    if (this.state.isAccepted){
      const {id} = this.props.data.state.location;
      return (
        <Redirect to={`/locations/${id}`}/>
      )
    }
    return (
      <div className="form-part">
        <p>Location {this.formFunction()}</p>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Location Name:
            <input onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </label>
          <label>
            Short Description:
            <input onChange={this.handleChange}
              type="text"
              name="description"
              value={this.state.description}
            />
          </label>
          <label>
            Location Info:
            <input onChange={this.handleChange}
              type="text"
              name="location_info"
              value={this.state.location_info}
            />
          </label>
          <button type="submit">{this.buttonFunction()}</button>
        </form>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  newLocation: payload => dispatch(createLocation(payload)),
  updateLocation: payload => dispatch(updateLocation(payload))
})
 
export default connect(null, mapDispatchToProps)(LocationCreate);