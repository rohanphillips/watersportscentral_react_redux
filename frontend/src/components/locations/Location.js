import React from 'react'
import LocationShow from './LocationShow'
import LocationCreate from './LocationCreate'

const Location = (data) => {
  console.log("Location:", "data", data)
  const conditions = ["create", "edit"]
  if (conditions.some(st => data.routerProps.location.pathname.includes(st))) {
    return (
      <div>
        {<LocationCreate data={data}/>}
      </div>
    )
  }
  return (
    <div>
      {<LocationShow data={data}/>}
    </div>
  )
}

export default Location