import axios from 'axios';
import {SITE_URL} from './siteActions'
const LOCATIONS_URL = `${SITE_URL}/locations`

const getLocations = () => async (dispatch) => {          
  console.log("siteAction:", "getLocations:", getLocations);
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  console.log("headers", header)
  try {
    const response = await axios({
      method: 'GET',
      url: LOCATIONS_URL,
      headers: header,
      crossdomain: true,
    })
    console.log("getLocations:", "response:", response)
    dispatch({type: 'GET_LOCATIONS', locations: response.data.locations})
  } catch {
    console.log("getLocations Error:", LOCATIONS_URL)
  }
  
}  
export {getLocations};

const createLocation = newLocation => async (dispatch) => {
  try {
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    const response = await axios({
      method: 'POST',
      url: LOCATIONS_URL,
      headers: header,
      data: {location: newLocation},
      crossdomain: true,
    })
    console.log("Create Location Response:", response)
    if (response.data.error){
      const error = response.data.error;
      dispatch({type: 'CREATE_LOCATION_ERROR', error});
    } else {
      dispatch({type: 'CREATE_LOCATION', location: response.data.location, locations: response.data.locations});
      const {id} = response.data.location;
      console.log("will show location for user", `${LOCATIONS_URL}/${id}`);
    }
  } catch {
    dispatch({type: 'CREATE_LOCATION_ERROR'});
  }
}
export {createLocation}

const updateLocation = (payload) => async (dispatch) => {
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  console.log("updateLocation", "payload:", payload);
  try {
    const response = await axios({
      method: 'PATCH',
      url: `${LOCATIONS_URL}/${payload.id}`,
      headers: header,
      data: {location: payload},
      crossdomain: true,
    })
    console.log("siteActions:", "updateLocationResponse", response)
    dispatch({type: 'UPDATE_LOCATION', ...response.data});
  } catch {

  }  
}  
export {updateLocation};

const deleteLocation = (id) => async (dispatch) => {          
  console.log("siteAction:", "deleteLocation:", deleteLocation);
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  try {
    const response = await axios({
      method: 'DELETE',
      url: `${LOCATIONS_URL}/${id}`,
      headers: header,
      crossdomain: true,
    })
    console.log("deleteLocation:", "response:", response)
    dispatch({type: 'DELETE_LOCATION', id: id})
  } catch {

  }
  
}  
export {deleteLocation};