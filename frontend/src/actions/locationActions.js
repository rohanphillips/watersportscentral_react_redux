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
    const headers = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    return fetch(LOCATIONS_URL,{
      method: 'POST',
      headers,
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
    async function myFetch () {
      const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
      const id = updateLocation.get("location[id]")
      let response = await fetch(`${LOCATIONS_URL}/${id}`,{
        method: 'PATCH',
        headers: header,
        body: updateLocation,
        crossdomain: true,
      })
      if(!response.ok){
        console.log("was error - do something with it")
        const error = await response.json()
        return Promise.reject(error.errors)
      }
      return await response.json()
    }
    return myFetch().then((res) => {
      console.log("res", res)
      dispatch({type:"UPDATE_LOCATION", res})
      // return data.json()
    }).catch((e) => {      
      return Promise.reject(e)
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