import React from 'react';
import {
  Link,
} from 'react-router-dom'

const LocationFlat = (data) => {
  const {location} = data;
  return (
    <div>
      <p>
        name, descrption, location info
        {location.name}
        {location.descrption}
        <Link to={`/locations/${location.id}`}>
          <button>View</button>
        </Link>
        <Link to={`/locations/${location.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button id={`${location.id}`} onClick={() => data.deleteLocation(location.id)}>Delete</button>
      </p>
    </div>
  )
}

export default LocationFlat