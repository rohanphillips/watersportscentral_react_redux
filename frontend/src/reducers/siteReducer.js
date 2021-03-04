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
        ...state.user,
        isLogin: true,
        user: {
          username: action.user.username,
          firstName: action.user.firstName,
          lastName: action.user.lastName,
          email: action.user.email,
          password: action.user.password,
        }
      }
    case 'CREATE_USER_ERROR':
      return {
        isLogin: false,
      }
    default: return state;
  }
}

export default siteReducer;