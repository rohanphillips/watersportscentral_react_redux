import React from 'react'

const UserFlat = (data) => {
  console.log("UserFlat", "data", data)
  // console.log("UserFlat", "deleteUser", data.deleteUser)
  const {user} = data;

  return (
    <div>
      <p>
        {user.first_name} {user.last_name} 
        <button>View</button> <button>Edit</button>  <button id={`${user.id}`} onClick={() => data.deleteUser(user.id)} >Delete</button>    
      </p>
    </div>
  )
}

export default UserFlat