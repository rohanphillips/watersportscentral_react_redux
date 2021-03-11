import React from 'react'

const UserEdit = (data) => {
  console.log("UserEdit", "data", data)
  console.log("UserEdit", "deleteUser", data.props.deleteUser)
  console.log("UserEdit", "Users", data.match.params.id)
  const id = parseInt(data.match.params.id)
  const user = data.props.state.users.find(user => user.id === id);
  console.log("UserEdit", "user", user.first_name)
  return (
    <div>
      <p>
        User Edit
        {user.first_name} <br></br> 
        {user.last_name}
           
      </p>
       
    </div>
  )
}

export default UserEdit