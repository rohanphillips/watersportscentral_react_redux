import React from 'react';

class LocationEdit extends React.Component {
  state = {
    title: ''
  }

  render() {
    return (
      <div>
       <h3>{ this.props.locations[this.props.match.params.locationId].title }</h3>
      </div>
    );
  };
}

// const LocationEdit = ({match, locations}) => { 
//   return (
//     <div>
//       <h3>{ locations[match.params.locationId].title }</h3>
//     </div>
//   );
// }
 
export default LocationEdit;