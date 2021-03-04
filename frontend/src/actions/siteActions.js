
const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

const createUser = newUser => async (dispatch) => {
  try {
    dispatch({type: 'CREATE_USER'});
  } catch {

  }
}