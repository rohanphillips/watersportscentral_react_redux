import React from 'react'
import LocationShow from './LocationShow'
import LocationCreate from './LocationCreate'

const Location = (data) => {
  const id = parseInt(data.match.params.id)
  console.log("Location", "id", isNaN(id))
  const location = data.props.state.locations.find(location => location.id === id);
  console.log("Location:", "location", location)
  console.log("Location:", "data", data)
  if (isNaN(id)) {
    return (
      <div>
        {<LocationCreate/>}
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