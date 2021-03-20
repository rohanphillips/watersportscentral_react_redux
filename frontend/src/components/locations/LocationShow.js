import React from 'react'
import {Link} from 'react-router-dom'
import AdminAccess from '../sessions/AdminAccess'

const LocationShow = (data) => {
  console.log("LocationShow:", "data:", data)
  const id = parseInt(data.data.routerProps.match.params.id)
  console.log("LocationShow:", "id:", id)
  const location = data.data.state.locations.find(location => location.id === id);
  console.log("LocationShow:", "location", location)
  
  return (
    <div>
      <p>
        {location.name} <br></br>
      </p>
      <Link to={`/locations/${location.id}/edit`}>
          <button>Edit</button>
      </Link> 
      <AdminAccess>
        <button id={`${location.id}`} 
          onClick={() => data.data.props.deleteUser(location.id)
        }>
          Delete
        </button>
      </AdminAccess>
    </div>
  )
}

export default LocationShow