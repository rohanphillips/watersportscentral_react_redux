import axios from 'axios';
import {SITE_URL} from './siteActions'
const LOCATIONS_URL = `${SITE_URL}/locations`

export const getLocations = () => {      
  return async (dispatch) => {
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    console.log("headers", header)
    return fetch(LOCATIONS_URL,{
      method: 'GET',
      headers: header,
      crossdomain: true,
    }).then(async(response) => {
      console.log("Response Received", response)
      if(response.ok){
        return response.json()
      } else {
        return response.json().then(errors => Promise.reject(errors))
      }
    }).then((data) => {    
      console.log("Data Available", data)
      dispatch({type: 'GET_LOCATIONS', locations: data.locations})
    }).catch((error) => {
      if(error.errors === undefined){
        error.errors = {connection: ["Database Error"]}
      }   
      console.log("db error:", error.errors)   
      return Promise.reject(error.errors)
    })
  }
}  

export const createLocation = (newLocation) => {      
  return async (dispatch) => {
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    console.log("headers", header)
    console.log("newLocation", newLocation);
    return fetch(LOCATIONS_URL,{
      method: 'POST',
      headers: header,
      body: newLocation,
      crossdomain: true,
    }).then(async(response) => {
      console.log("Response Received", response)
      if(response.ok){
        return response.json()
      } else {
        return response.json().then(errors => Promise.reject(errors))
      }
    }).then((data) => {    
      console.log("Data Available", data)
      dispatch({type: 'CREATE_LOCATION', location: data.location, locations: data.locations})
    }).catch((error) => {
      if(error.errors === undefined){
        error.errors = {connection: ["Database Error"]}
      }      
      return Promise.reject(error.errors)
    })
  }
}  

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