import React from 'react';
import {
  Link,
} from 'react-router-dom'
import IsOwner from '../sessions/IsOwner'

const LocationFlat = (location) => {
  const {data} = location;
  return (
    <div class="flex-col p-2 my-2  border border-amber-200 w-max">
      <div>
        Name: {data.name}        
      </div>
      <div>
        Description: {data.description}
      </div>
      <div>
        <Link to={`/locations/${data.id}`}>
          <button class="btn-view">View</button>
        </Link>
        <IsOwner type="location" location={data}>
          <Link to={`/locations/${data.id}/edit`}>
            <button class="btn-edit">Edit</button>
          </Link>
        </IsOwner>
        <IsOwner type="location" location={data}>
          <button class="btn-delete" id={`${data.id}`} onClick={() => location.deleteLocation(data.id)}>Delete</button>
        </IsOwner>
      </div>
    </div>
  )
}

export default LocationFlat