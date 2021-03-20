import React from 'react'
import LocationShow from './LocationShow'
import LocationCreate from './LocationCreate'

const Location = (data) => {
  const conditions = ["create", "edit"]
  if (conditions.some(st => data.location.pathname.includes(st))) {
    return (
      <div>
        {<LocationCreate props={data}/>}
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