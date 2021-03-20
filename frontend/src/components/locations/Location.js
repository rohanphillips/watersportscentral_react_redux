import React from 'react'
import LocationShow from './LocationShow'
import LocationCreateEdit from './LocationCreateEdit'

const Location = (data) => {
  console.log("Location:", "data", data)
  const conditions = ["create", "edit"]
  if (conditions.some(st => data.routerProps.location.pathname.includes(st))) {
    return (
      <div>
        {<LocationCreateEdit data={data}/>}
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