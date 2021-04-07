import React from 'react'
import {
  Link,
} from 'react-router-dom';
import AdminAccess from '../sessions/AdminAccess'

const User = (data) => {
  const id = parseInt(data.match.params.id)
  console.log("User", data)
  const user = data.props.users.find(user => user.id === id);
  if (user === undefined){
    return <p>No Access</p>
  }
  return (
    <div>
      <div>
        First Name: {user.first_name}          
      </div>
      <div>
        Last Name: {user.last_name}         
      </div>
      <Link to={`/users/${user.id}/edit`}>
          <button className="btn-edit">Edit</button>
      </Link> 
      <AdminAccess>
        <button className="btn-delete" id={`${user.id}`} 
          onClick={() => data.props.deleteUser(user.id)
        }>
          Delete
        </button>
      </AdminAccess>
    </div>
  )
}

export default User