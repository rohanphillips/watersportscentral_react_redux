const initialUser = {
  user: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
};

const initialState = {
  isLogin: false,
  ...initialUser
}

const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        isLogin: true,
        ...initialUser,
      }
    case 'CREATE_USER_ERROR':
      return {
        ...state,
        isLogin: false,
        ...initialUser,
        errors: {...action.error},
      }
    case 'USER_LOGIN':
      return {
        ...state, 
        isLogin: true,
        ...initialUser
      }
    case 'USER_LOGOUT':
      console.log("Logout:")
      return {
        ...state,
        isLogin: false,
        ...initialUser
      }
    default: return state;
  }
}

export default siteReducer;