import React from 'react';
import {
  Link,
} from 'react-router-dom'
import IsOwner from '../sessions/IsOwner'

const LocationFlat = (location) => {
  const {data} = location;
  return (
    <div>
      <p>
        {data.name}
        {data.descrption}
        <Link to={`/locations/${data.id}`}>
          <button>View</button>
        </Link>
        <IsOwner type="location" location={data}>
          <Link to={`/locations/${data.id}/edit`}>
            <button>Edit</button>
          </Link>
        </IsOwner>
        <IsOwner type="location" location={data}>
          <button id={`${data.id}`} onClick={() => location.deleteLocation(data.id)}>Delete</button>
        </IsOwner>
      </p>
    </div>
  )
}

export default LocationFlat