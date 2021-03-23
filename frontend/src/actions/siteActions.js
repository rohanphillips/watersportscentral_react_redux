import axios from 'axios';
const SITE_URL = 'http://localhost:3001'
export const USERS_URL = `${SITE_URL}/users`
export const LOCATIONS_URL = `${SITE_URL}/locations`
export const SPORTS_URL = `${SITE_URL}/sports`
const LOGIN_USER_URL = `${SITE_URL}/sessions`
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

const loginUser = loginUser => async (dispatch) => {
  console.log("siteAction:", "called");
  localStorage.clear("loggedin");
  try {
    console.log("siteAction:", "loginUser:", loginUser)    
    const response = await axios({
      method: 'POST',
      url: LOGIN_USER_URL,
      data: {user: loginUser},
      crossdomain: true,
    })    
    console.log("siteAction:", "loginResponse:", response.data)
    const { token } = response.data;
    const { user } = response.data;
    console.log("siteAction:", "loginUser:", response)
    if (response.data.error){
      console.log("siteAction:", "loginUserError:")
      const error = response.data.error;
      dispatch({type: 'CREATE_USER_ERROR', error});
    } else {
      console.log("siteAction:", "will login user:", token)
      localStorage.setItem('loggedin', token);
      dispatch({type: 'USER_LOGIN'});
      dispatch({type: 'CREATE_USER', ...user})
    }      
  } catch {
    console.log("siteAction:", "errorcatch");
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {loginUser}

const logoutUser = logoutUser => (dispatch) =>{
  console.log("siteAction:", "logoutUserAction:")
  dispatch({type: 'USER_LOGOUT'});
  dispatch({type: 'RESET_USER'});
}
export {logoutUser}; 

const getUsers = () => async (dispatch) => {          
  console.log("siteAction:", "getUsers:", getUsers);
  const header = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
  console.log("headers", header)
  try {
    const response = await axios({
      method: 'GET',
      url: USERS_URL,
      headers: header,
      crossdomain: true,
    })
    console.log("getUsers:", "response:", response)
    dispatch({type: 'GET_USERS', users: response.data.users})
  } catch {
    console.log("getUsers Error:", USERS_URL)
  }
  
}  
export {getUsers};

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
    console.log("getLocations Error:", USERS_URL)
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
