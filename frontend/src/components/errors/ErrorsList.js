import React from 'react'

const ErrorsList = (data) => {
  console.log("Error List:", data)
  return (
    <div>
      <p>The following error(s) occurred</p>
      <ul>
        {data.errors.locationErrors.map(error => 
          <li>{error}</li>
        )}
      </ul>
    </div>
  )
}
export default ErrorsList