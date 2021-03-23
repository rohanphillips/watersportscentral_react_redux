import axios from 'axios';
export const SITE_URL = 'http://localhost:3001'
const LOGIN_USER_URL = `${SITE_URL}/sessions`


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

