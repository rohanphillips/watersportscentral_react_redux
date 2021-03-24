const initialState = {
  location: {
    name: '',
    description: '',
    location_info: '',
  }
}
const locationReducers = (state = initialState, action) => {
  console.log("locationReducers:", "called", action);
  switch (action.type) {    
    case 'GET_LOCATIONS':
      console.log("locationReducers:", "GET_LOCATIONS", action);
      return {
        ...state,
        locationsFetched: true,
        locations: action.locations,
      }
    case 'UPDATE_LOCATION':
      console.log("locationReducers:", "UPDATE_LOCATION", action)
      return {
        ...state,
        location: action.location,
        locations: action.locations
      }
    case 'CREATE_LOCATION':
      console.log("locationReducers:", "CREATE_LOCATION", action)
      console.log("locationReducers:", "Location", action.location)
      return {
        ...state,
        location: action.location,
        locations: action.locations,
      }
    case 'DELETE_LOCATION':
      console.log("locationReducers:", "DELETE_LOCATION", action)
      console.log("locationReducers:", "DELETE_LOCATION:", state)
      return {
        ...state,
        locations: state.locations.filter(location => location.id !== action.id),
      }
    default: return state;
  }
}

export default locationReducers;