import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createLocation} from '../../actions/siteActions'

class LocationCreate extends Component {
  state = {
    name: '',
    description: '',
    info: ''

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
    const {name, description, info} = this.state;
    const {newLocation} = this.props;
    await newLocation({
      name, description, info
    })
  }  

  render() {
    console.log("LocationAddEdit:", "props", this.props)
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
              name="info"
              value={this.state.info}
            />
          </label>
          <button type="submit">Create Location</button>
        </form>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  newLocation: payload => dispatch(createLocation(payload))
})
 
export default connect(null, mapDispatchToProps)(LocationCreate);