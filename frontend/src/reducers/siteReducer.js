const initialState = {
  isLogin: false,
  user: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
};

const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        isLogin: true,
        user: {
          username: action.username,
          firstName: action.first_name,
          lastName: action.last_name,
          email: action.email,
          password: action.password,
        }
      }
    case 'CREATE_USER_ERROR':
      return {
        initialState,
        errors: {...action.error},
      }
    case 'USER_LOGIN':
      return {
        ...state, 
        isLogin: true,
        user: {
          username: action.username,
          firstName: action.first_name,
          lastName: action.last_name,
          email: action.email,
          password: action.password,
        }
      }
    case 'USER_LOGOUT':
      return {
        initialState,
      }
    default: return state;
  }
}

export default siteReducer;