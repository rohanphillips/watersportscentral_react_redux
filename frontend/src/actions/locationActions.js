import axios from 'axios';
import {SITE_URL} from './siteActions'
const LOCATIONS_URL = `${SITE_URL}/locations`

export const getLocations = () => {      
  return async (dispatch) => {
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    return fetch(LOCATIONS_URL,{
      method: 'GET',
      headers: header,
      crossdomain: true,
    }).then(async(response) => {
      if(response.ok){
        return response.json()
      } else {
        return response.json().then(errors => Promise.reject(errors))
      }
    }).then((data) => {    
      console.log("GetData:", data)
      dispatch({type: 'GET_LOCATIONS', locations: data.locations})
      return data
    }).catch((error) => {
      if(error.errors === undefined){
        error.errors = {connection: ["Database Error"]}
      }   
      return Promise.reject(error.errors)
    })
  }
}  

export const createLocation = (newLocation) => {  
  return async (dispatch) => {
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin'),
    "Content-Type": "application/json"};
    return fetch(LOCATIONS_URL,{
      method: 'POST',
      headers: header,
      body: JSON.stringify(newLocation),
      crossdomain: true,
    }).then(async(response) => {
      if(response.ok){
        return response.json()
      } else {
        return response.json().then(errors => Promise.reject(errors))
      }
    }).then((data) => {    
      dispatch({type: 'CREATE_LOCATION', location: data.location, locations: data.locations})
      return data
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
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin'),
    "Content-Type": "application/json"};
    const {id} = updateLocation.location
    try {
      let response = await fetch(`${LOCATIONS_URL}/${id}`,{
        method: 'PATCH',
        headers: header,
        body: JSON.stringify(updateLocation),
        crossdomain: true,
      })
      if(!response.ok){
        const err = await response.json()
        return Promise.reject(err.errors)
      }
      const data =  await response.json()
      dispatch({type: "UPDATE_LOCATION", location: data.location, locations: data.locations});
      return data
    } catch (err){
      return {connection: [err]}

    }
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