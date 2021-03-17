import React from 'react';
import {
  Link,
} from 'react-router-dom'

const LocationFlat = (location) => {
  const {data} = location;
  console.log("LocationFlat", "location", data)
  return (
    <div>
      <p>
        {/* name, descrption, location info */}
        {data.name}
        {data.descrption}
        <Link to={`/locations/${data.id}`}>
          <button>View</button>
        </Link>
        <Link to={`/locations/${data.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button id={`${data.id}`} onClick={() => data.deleteLocation(data.id)}>Delete</button>
      </p>
    </div>
  )
}

export default LocationFlat