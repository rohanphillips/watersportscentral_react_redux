import axios from 'axios';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
const SITE_URL = 'localhost:3001/'
const NEW_USER_URL = SITE_URL & 'new'

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
    localStorage.setItem('jwt', token);
  } catch {
    dispatch({type: 'CREATE_USER_ERROR'});
  }
}
export {createUser}