import React from 'react'
import {
  Link,
} from 'react-router-dom';

const UserFlat = (data) => {
  console.log("UserFlat", "data", data)
  // console.log("UserFlat", "deleteUser", data.deleteUser)
  const {user} = data;
  return (
    <div>
      <p>
        {user.first_name} {user.last_name} 
        <Link to={`/users/${user.id}`}><button>View</button></Link> <Link to={`/users/${user.id}/edit`}><button>Edit</button></Link>  <button id={`${user.id}`} onClick={() => data.deleteUser(user.id)} >Delete</button>    
      </p>
    </div>
  )
}

export default UserFlat