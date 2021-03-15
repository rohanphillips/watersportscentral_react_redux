import React from 'react';

class LocationAddEdit extends React.Component {
  state = {
    name: '',
    description: '',

  }

  render() {
    console.log("Location:", "props", this.props)
    return (
      <div>
        <p>Location Page</p>
      </div>
    );
  };
}
 
export default LocationAddEdit;