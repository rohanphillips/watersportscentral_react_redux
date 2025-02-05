import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {createLocation, updateLocation} from '../../actions/locationActions'

class LocationCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      location_info: '',
      errors: {}
    }
  }  

  componentDidMount(){
    if (this.editMode()) {
      console.log("R", this.props)
      const location = this.props.data.props.locationsState.locations.find(location => location.id === this.locationID())
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
    this.setState({
      [e.target.name]: saved,
    })
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    // const {name, description, location_info} = this.state;    
    const data = {
      location: {id: this.locationID(),
      name: this.state.name,
      description: this.state.description,
      location_info: this.state.location_info,
      }
    }
    console.log("data", data)
    console.log("editMode", this.editMode())
    if (this.editMode() === false){
      const {createLocation} = this.props;
      createLocation(data)
        .then(locationJson =>{   
          console.log("handleChange locationJSON", locationJson)
          this.setState({
            isAccepted: true
          })
        })
        .catch(errors => {
          console.log("handleOnSubmit errors", errors)
          this.setState({
            errors
          })
        })
    } else {
      const {updateLocation} = this.props
      updateLocation(data)
      .then(locationJson =>{
        this.setState({
          isAccepted: true
        })
      })
      .catch(errors => {
        this.setState({
          errors
        })
      })
    }
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
      const {id} = this.props.data.props.locationsState.location;
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
            <span className="text-red-400">{this.state.errors.name}</span>
          </label>
          <label>
            Short Description:
            <input onChange={this.handleChange}
              type="text"
              name="description"
              value={this.state.description}
            />
            <span className="text-red-400">{this.state.errors.description}</span>
          </label>
          <label>
            Location Info:
            <input onChange={this.handleChange}
              type="text"
              name="location_info"
              value={this.state.location_info}
            />
            <span className="text-red-400">{this.state.errors.location_info}</span>
          </label>
          <button className="btn-save" type="submit">{this.buttonFunction()}</button>
        </form>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  createLocation: payload => dispatch(createLocation(payload)),
  updateLocation: payload => dispatch(updateLocation(payload))
})
 
export default connect(null, mapDispatchToProps)(LocationCreate);