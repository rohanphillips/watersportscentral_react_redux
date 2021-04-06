import React from 'react'
import {Link} from 'react-router-dom'
import AdminAccess from '../sessions/AdminAccess'
import IsOwner from '../sessions/IsOwner'

const LocationShow = (data) => {
  const id = parseInt(data.data.routerProps.match.params.id)
  console.log("data", data)
  const location = data.data.props.locations.locations.find(location => location.id === id);
  
  return (
    <div>
      <div>
        <Link to="/locations">
              <button className="btn-view w-32">Locations</button>
        </Link>
      </div>
      <div>
        Name: {location.name} <br></br>
      </div>
      <div>
        Description: {location.description}
      </div>
      <IsOwner type="location" location={location}>
        <Link to={`/locations/${location.id}/edit`}>
            <button className="btn-edit">Edit</button>
        </Link> 
      </IsOwner>
      <AdminAccess>
        <button className="btn-delete" id={`${location.id}`} 
          onClick={() => data.data.props.deleteLocation(location.id)
        }>
          Delete
        </button>
      </AdminAccess>
    </div>
  )
}

export default LocationShow