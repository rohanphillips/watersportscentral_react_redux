import React from 'react'
import {Link} from 'react-router-dom'
import AdminAccess from '../sessions/AdminAccess'

const Location = (data) => {
  const id = parseInt(data.match.params.id)
  const location = data.props.state.locations.find(location => location.id === id);

  return (
    <div>
      <p>
        {location.name} <br></br>
      </p>
      <Link to={`/users/${location.id}/edit`}>
          <button>Edit</button>
      </Link> 
      <AdminAccess>
        <button id={`${location.id}`} 
          onClick={() => data.props.deleteUser(location.id)
        }>
          Delete
        </button>
      </AdminAccess>
    </div>
  )
}

export default Location