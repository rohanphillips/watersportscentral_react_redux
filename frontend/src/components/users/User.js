import React from 'react'
import {
  Link,
} from 'react-router-dom';
import AdminAccess from '../sessions/AdminAccess'

const User = (data) => {
  console.log("User", "data", data)
  console.log("User", "deleteUser", data.props.deleteUser)
  console.log("User", "Users", data.match.params.id)
  const id = parseInt(data.match.params.id)
  const user = data.props.state.users.users.find(user => user.id === id);
  console.log("user", user === null)
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
          <button class="btn-edit">Edit</button>
      </Link> 
      <AdminAccess>
        <button class="btn-delete" id={`${user.id}`} 
          onClick={() => data.props.deleteUser(user.id)
        }>
          Delete
        </button>
      </AdminAccess>
    </div>
  )
}

export default User