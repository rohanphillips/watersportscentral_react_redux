const initialState = {
  location: {
    name: '',
    description: '',
    location_info: '',
  }
}
const locationReducers = (state = initialState, action) => {
  switch (action.type) {    
    case 'GET_LOCATIONS':
      return {
        ...state,
        locationsFetched: true,
        locations: action.locations,
        isLocationsError: false,
        locationErrors: {}
      }
    case 'UPDATE_LOCATION':
      console.log("action", action.location)
      return {
        ...state,
        location: action.location,
        locations: action.locations
      }
    case 'CREATE_LOCATION':
      return {
        ...state,
        location: action.location,
        locations: action.locations,
      }
    case 'DELETE_LOCATION':
      return {
        ...state,
        locations: state.locations.filter(location => location.id !== action.id),
      }
    case 'LOCATIONS_ERROR':
      return {
        ...state,
        isLocationError: false,
        isLocationsError: true,
        locationErrors: action.errors
      }
      case 'LOCATION_ERROR':
        return {
          ...state,
          isLocationError: true,
          isLocationsError: false,
          locationErrors: action.errors
        }
    default: return state;
  }
}

export default locationReducers;