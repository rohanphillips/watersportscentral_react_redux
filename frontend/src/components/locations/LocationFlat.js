import React from 'react';
import {
  Link,
} from 'react-router-dom'
import IsOwner from '../sessions/IsOwner'

const LocationFlat = (location) => {
  const {data} = location;
  return (
    <div className="flex-col p-2 my-2  border border-amber-200 w-max">
      <div>
        Name: {data.name}        
      </div>
      <div>
        Description: {data.description}
      </div>
      <div>
        <Link to={`/locations/${data.id}`}>
          <button className="btn-view">View</button>
        </Link>
        <IsOwner type="location" location={data}>
          <Link to={`/locations/${data.id}/edit`}>
            <button className="btn-edit">Edit</button>
          </Link>
        </IsOwner>
        <IsOwner type="location" location={data}>
          <button className="btn-delete" id={`${data.id}`} onClick={() => location.deleteLocation(data.id)}>Delete</button>
        </IsOwner>
      </div>
    </div>
  )
}

export default LocationFlat