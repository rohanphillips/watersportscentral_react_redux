import React, { Component } from 'react';

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

  render() {
    console.log("LocationAddEdit:", "props", this.props)
    return (
      <div className="form-part">
        <p>Location Create</p>
        <form>
          <label>
            Location Name:
            <input 
              type="text"
              name="name"
              value={this.state.name}
            />
          </label>
          <label>
            Short Description:
            <input 
              type="text"
              name="description"
              value={this.state.description}
            />
          </label>
          <label>
            Location Info:
            <input 
              type="text"
              name="info"
              value={this.state.name}
            />
          </label>
          <button>Create Location</button>
        </form>
      </div>
    );
  };
}
 
export default LocationCreate;