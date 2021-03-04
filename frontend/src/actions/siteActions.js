import axios from 'axios';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
const SITE_URL = 'http://localhost:3001'
const NEW_USER_URL = `${SITE_URL}/users`

const createUser = newUser => async (dispatch) => {
  try {
    console.log("createUser siteAction:", newUser);
    console.log("dispatch:");
    dispatch({type: 'CREATE_USER', ...newUser});
    console.log("newuserurl:", NEW_USER_URL);
    const response = await axios({
      method: 'POST',
      url: NEW_USER_URL,
      data: {user: newUser},
      crossdomain: true,
    })
    const { token } = response.data;
    if (response.data.error){
      console.log("response:", response)
    } else {
      console.log("NewUser:")
      localStorage.setItem('jwt', token);}
  } catch {
    console.log("siteActions:error")
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {createUser}