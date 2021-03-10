import React from 'react'

const UserEdit = (data) => {
  console.log("UserEdit", "data", data)
  console.log("UserEdit", "deleteUser", data.deleteUser)
  console.log("UserEdit", "Users", data.match.params.id)
  const id = parseInt(data.match.params.id)
  const user = data.state.users.find(user => user.id === id);
  console.log("UserEdit", "user", user.first_name)
  return (
    <div>
      <p>
        User Edit
        {user.first_name} <br></br> 
        {user.last_name}
           
      </p>
      <button>Edit</button>  <button>Delete</button> 
    </div>
  )
}

export default UserEdit