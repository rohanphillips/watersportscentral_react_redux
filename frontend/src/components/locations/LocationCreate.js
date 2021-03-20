import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {createLocation} from '../../actions/siteActions'

class LocationCreate extends Component {
  state = {
    name: '',
    description: '',
    location_info: '',
    isAccepted: false
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

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const {name, description, location_info} = this.state;
    const {newLocation} = this.props;
    await newLocation({
      name, description, location_info
    })
    if (this.props.state.location !== undefined){
      this.setState({
        isAccepted: true,
      })
    }
    console.log("newLocation", "after submit");
  }  
  
  render() {
    console.log("LocationCreate:", "props", this.props)
    // const id = parseInt(this.props.match.params.id)
    // const editMode = isNaN(parseInt(this.props.match.params.id)) === false
    // console.log("LocationCreate:", "editMode", editMode)
    if (this.state.isAccepted){
      const {id} = this.props.state.location;
      return (
        <Redirect to={`/locations/${id}`}/>
      )
    }
    return (
      <div className="form-part">
        <p>Location Create</p>
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
          <button type="submit">Create Location</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = dispatch => ({
  newLocation: payload => dispatch(createLocation(payload))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(LocationCreate);