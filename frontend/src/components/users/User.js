import React from 'react'

const User = (data) => {
  console.log("User", "data", data)
  console.log("User", "deleteUser", data.deleteUser)
  console.log("User", "Users", data.match.params.id)
  const id = parseInt(data.match.params.id)
  const user = data.state.users.find(user => user.id === id);
  console.log("User", "user", user.first_name)
  return (
    <div>
      <p>
        {user.first_name} <br></br> 
        {user.last_name}
           
      </p>
      <button>Edit</button>  <button>Delete</button> 
    </div>
  )
}

export default User