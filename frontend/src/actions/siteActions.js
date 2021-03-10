import axios from 'axios';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
const SITE_URL = 'http://localhost:3001'
export const USERS_URL = `${SITE_URL}/users`
const LOGIN_USER_URL = `${SITE_URL}/sessions`
const GET_USER_URL = `${SITE_URL}/getuser`
const headers = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};

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
      const user = {...newUser, id: response.data.id}
      dispatch({type: 'CREATE_USER', ...response.data.user});
      localStorage.setItem('jwt', token);}
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
      console.log("siteAction:", "will login user:")
      localStorage.setItem('loggedin', token);
      dispatch({type: 'USER_LOGIN', ...user});}
  } catch {
    console.log("siteAction:", "errorcatch");
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {loginUser}

const logoutUser = logoutUser => (dispatch) =>{
  console.log("siteAction:", "logoutUserAction:")
  dispatch({type: 'USER_LOGOUT'});
}
export {logoutUser}; 

const getUsers = () => async (dispatch) => {          
  console.log("siteAction:", "getUsers:", getUsers);
  try {
    const response = await axios({
      method: 'GET',
      url: USERS_URL,
      headers: headers,
      crossdomain: true,
    })
    console.log("getUsers:", "response:", response)
    dispatch({type: 'GET_USERS', users: response.data.users})
  } catch {

  }
  
}  
export {getUsers};

const deleteUser = (id) => async (dispatch) => {          
  console.log("siteAction:", "deleteUser:", deleteUser);
  try {
    const response = await axios({
      method: 'DELETE',
      url: `${USERS_URL}/${id}`,
      headers: headers,
      crossdomain: true,
    })
    console.log("deleteUser:", "response:", response)
    dispatch({type: 'DELETE_USER', id: id})
  } catch {

  }
  
}  
export {deleteUser};

const getUser = () => async (dispatch) => {          
  console.log("siteAction:", "getUser:", getUser);
  try {
    const response = await axios({
      method: 'GET',
      url: `${GET_USER_URL}`,
      headers: headers,
      crossdomain: true,
    })
    console.log("getUser:", "response:", response)
    dispatch({type: 'USER_LOGIN', ...response.data.user})
  } catch {

  }
  
}  
export {getUser};
