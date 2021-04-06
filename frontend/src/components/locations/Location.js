import React from 'react'
import {Redirect} from "react-router-dom";
import LocationShow from './LocationShow'
import LocationCreateEdit from './LocationCreateEdit'

const Location = (data) => {
  const id = parseInt(data.routerProps.match.params.id)
  const location = data.props.locations.locations.find(location => location.id === id)
  const conditions = ["create", "edit"]
  if (conditions.some(st => data.routerProps.location.pathname.includes(st))) {
    return (
      <div>
        {<LocationCreateEdit data={data}/>}
      </div>
    )
  }
  if(location !== undefined) {
    return (
      <div>
        {<LocationShow data={data}/>}
      </div>
    )
  } else {
    return (<Redirect to="/locations"/>)
  }
  
}

export default Location