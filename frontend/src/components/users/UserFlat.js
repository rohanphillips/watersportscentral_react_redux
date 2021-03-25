import React from 'react'
import {
  Link,
} from 'react-router-dom';

const UserFlat = (data) => {
  const {user} = data;
  return (
    <div class="flex-col p-2 my-2  border border-amber-200 w-max">
      <div>
        {user.first_name} {user.last_name}         
      </div>
      <div>
        <Link to={`/users/${user.id}`}>
          <button class="btn-view">View</button>
        </Link> 
        <Link to={`/users/${user.id}/edit`}>
            <button class="btn-edit">Edit</button>
        </Link>  
        <button class="btn-delete" id={`${user.id}`} onClick={() => data.deleteUser(user.id)} >Delete</button>    
      </div>
    </div>
  )
}

export default UserFlat