import React from 'react'

const UserFlat = (data) => {
  console.log("UserFlat", data)
  return (
    <div>
      <p>
        {data.user.first_name} {data.user.last_name} 
        <button>View</button> <button>Edit</button>  <button>Delete</button>    
      </p>
    </div>
  )
}

export default UserFlat