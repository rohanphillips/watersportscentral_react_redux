import axios from 'axios';
export const SITE_URL = 'http://localhost:3001'
const LOGIN_USER_URL = `${SITE_URL}/sessions`


const loginUser = loginUser => async (dispatch) => {
  localStorage.clear("loggedin");
  try {
    const response = await axios({
      method: 'POST',
      url: LOGIN_USER_URL,
      data: {user: loginUser},
      crossdomain: true,
    })  
    const { token } = response.data;
    const { user } = response.data;
    if (response.data.error){
      const error = response.data.error;
      dispatch({type: 'CREATE_USER_ERROR', error});
    } else {
      localStorage.setItem('loggedin', token);
      dispatch({type: 'USER_LOGIN'});
      dispatch({type: 'CREATE_USER', ...user})
    }      
  } catch {
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {loginUser}

const logoutUser = logoutUser => (dispatch) =>{
  dispatch({type: 'USER_LOGOUT'});
  dispatch({type: 'RESET_USER'});
}
export {logoutUser}; 

