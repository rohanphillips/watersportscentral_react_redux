const initialState = {
  location: {
    name: '',
    description: '',
    location_info: '',
  }
}
const locationReducers = (state = initialState, action) => {
  console.log("siteReducer:", "called", action);
  switch (action.type) {    
    case 'GET_LOCATIONS':
      console.log("siteReducer:", "GET_LOCATIONS", action);
      return {
        ...state,
        locationsFetched: true,
        locations: action.locations,
      }
    case 'UPDATE_LOCATION':
      console.log("siteReducer:", "UPDATE_LOCATION", action)
      return {
        ...state,
        location: action.location,
        locations: action.locations
      }
    case 'CREATE_LOCATION':
      console.log("siteReducer:", "CREATE_LOCATION", action)
      console.log("siteReducer:", "Location", action.location)
      return {
        ...state,
        location: action.location,
        locations: action.locations,
      }
    case 'DELETE_LOCATION':
      console.log("siteReducer:", "DELETE_LOCATION", action)
      console.log("siteReducer:", "DELETE_LOCATION:", state)
      return {
        ...state,
        locations: state.locations.filter(location => location.id !== action.id),
      }
    default: return state;
  }
}

export default locationReducers;