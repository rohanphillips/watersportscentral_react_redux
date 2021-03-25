import React from 'react'

const ErrorsList = (data) => {
  console.log("Error List:", data)
  if(data.state.error === false){
    return null
  }
  const errors = data.state.errors;
  return (
    <div>
      <p>The following error(s) occurred</p>
      <ul>
        {Object.keys(errors).map(error => {
            console.log("e", error)
            return <li>{error} - {errors[error]}</li>
          }
        )}
      </ul>
    </div>
  )
}
export default ErrorsList