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
    return fetch(LOCATIONS_URL,{
      method: 'POST',
      headers: header,
      body: newLocation,
      crossdomain: true,
    }).then(async(response) => {
      if(response.ok){
        return response.json()
      } else {
        return response.json().then(errors => Promise.reject(errors))
      }
    }).then((data) => {    
      dispatch({type: 'CREATE_LOCATION', location: data.location, locations: data.locations})
    }).catch((error) => {
      if(error.errors === undefined){
        error.errors = {connection: ["Database Error"]}
      }      
      return Promise.reject(error.errors)
    })
  }
} 

export const updateLocation = (updateLocation) => {      
  return async (dispatch) => {
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    const id = updateLocation.get("location[id]")
    return fetch(`${LOCATIONS_URL}/${id}`,{
      method: 'PATCH',
      headers: header,
      body: updateLocation,
      crossdomain: true,
    }).then(async(response) => {
      if(response.ok){
        return response.json()
      } else {
        return response.json().then(errors => Promise.reject(errors))
      }
    }).then((data) => {    
      dispatch({type: 'UPDATE_LOCATION', location: data.location, locations: data.locations})
    }).catch((error) => {
      if(error.errors === undefined){
        error.errors = {connection: ["Database Error"]}
      }      
      return Promise.reject(error.errors)
    })
  }
} 

const deleteLocation = (id) => async (dispatch) => {  
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  try {
    await axios({
      method: 'DELETE',
      url: `${LOCATIONS_URL}/${id}`,
      headers: header,
      crossdomain: true,
    })
    dispatch({type: 'DELETE_LOCATION', id: id})
  } catch {

  }
  
}  
export {deleteLocation};