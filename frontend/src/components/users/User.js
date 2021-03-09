import React from 'react'

const User = (data) => {
  console.log("User", "data", data)
  console.log("User", "deleteUser", data.deleteUser)
  const {user} = data;

  return (
    <div>
      <p>
        User
        <button>Edit</button>  <button>Delete</button>    
      </p>
    </div>
  )
}

export default User