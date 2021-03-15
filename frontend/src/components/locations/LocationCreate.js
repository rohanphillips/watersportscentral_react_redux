import React, { Component } from 'react';

class LocationCreate extends Component {
  state = {
    name: '',
    description: '',

  }

  render() {
    console.log("LocationAddEdit:", "props", this.props)
    return (
      <div>
        <p>Location Create Page</p>
      </div>
    );
  };
}
 
export default LocationCreate;