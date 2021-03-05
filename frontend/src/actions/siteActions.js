import axios from 'axios';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
const SITE_URL = 'http://localhost:3001'
const NEW_USER_URL = `${SITE_URL}/users`
const LOGIN_USER_URL = `${SITE_URL}/sessions`

const createUser = newUser => async (dispatch) => {
  try {
    dispatch({type: 'CREATE_USER', ...newUser});
    const response = await axios({
      method: 'POST',
      url: NEW_USER_URL,
      data: {user: newUser},
      crossdomain: true,
    })
    const { token } = response.data;
    if (response.data.error){
      const error = response.data.error;
      dispatch({type: 'CREATE_USER_ERROR', error});
    } else {
      localStorage.setItem('jwt', token);}
  } catch {
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {createUser}

const loginUser = loginUser => async (dispatch) => {
  try {
    console.log("loginUser:", loginUser)    
    const response = await axios({
      method: 'POST',
      url: LOGIN_USER_URL,
      data: {user: loginUser},
      crossdomain: true,
    })    
    console.log("loginResponse:", response.data)
    const { token } = response.data;
    const { user } = response.data;
    console.log("loginUser:", response)
    if (response.data.error){
      const error = response.data.error;
      dispatch({type: 'CREATE_USER_ERROR', error});
    } else {
      localStorage.setItem('jwt', token);}
      dispatch({type: 'USER_LOGIN', ...user});
  } catch {
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {loginUser}

const logoutUser = logoutUser => (dispatch) =>{
  console.log("logoutUserAction:")
  dispatch({type: 'USER_LOGOUT'});
}
export {logoutUser};