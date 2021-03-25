import axios from 'axios';
import {SITE_URL} from './siteActions'
const USERS_URL = `${SITE_URL}/users`
const GET_USER_URL = `${SITE_URL}/getuser`

const createUser = newUser => async (dispatch) => {
  try {
    
    const response = await axios({
      method: 'POST',
      url: USERS_URL,
      data: {user: newUser},
      crossdomain: true,
    })
    const { token } = response.data;
    console.log("Create User Response:", response)
    if (response.data.error){
      const error = response.data.error;
      dispatch({type: 'CREATE_USER_ERROR', error});
    } else {
      dispatch({type: 'CREATE_USER', ...response.data.user});
      dispatch({type: 'USER_LOGIN'});
      localStorage.setItem('loggedin', token);}
  } catch {
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {createUser}

export const getUsers = () => {      
  return async (dispatch) => {
    const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    return fetch(USERS_URL,{
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
      console.log("getUsers", data)
      dispatch({type: 'GET_USERS', users: data.users})
    }).catch((error) => {
      if(error.errors === undefined){
        error.errors = {connection: ["Database Error"]}
      }   
      return Promise.reject(error.errors)
    })
  }
}  

const deleteUser = (id) => async (dispatch) => {          
  console.log("siteAction:", "deleteUser:", deleteUser);
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  try {
    const response = await axios({
      method: 'DELETE',
      url: `${USERS_URL}/${id}`,
      headers: header,
      crossdomain: true,
    })
    console.log("deleteUser:", "response:", response)
    dispatch({type: 'DELETE_USER', id: id})
  } catch {

  }
  
}  
export {deleteUser};

const getUser = () => async (dispatch) => {
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  try {
    const response = await axios({
      method: 'GET',
      url: `${GET_USER_URL}`,
      headers: header,
      crossdomain: true,
    })
    dispatch({type: 'USER_LOGIN'})
    dispatch({type: 'CREATE_USER', ...response.data.user})
  } catch {

  }  
}  
export {getUser};

const updateUser = (payload) => async (dispatch) => {
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  console.log("updateUser", "payload:", payload);
  try {
    const response = await axios({
      method: 'PATCH',
      url: `${USERS_URL}/${payload.id}`,
      headers: header,
      data: {user: payload.user},
      crossdomain: true,
    })
    console.log("siteActions:", "updateUserResponse", response)
    dispatch({type: 'UPDATE_USER', ...response.data.user});
  } catch {

  }  
}  
export {updateUser};