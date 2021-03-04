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
      console.log("siteReducer:", action)
      console.log("state:", state)
      const load = {
        ...state.user,
        isLogin: true,
        user: {
          username: action.username,
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          password: action.password,
        }}
      console.log("return:", load)
      return {
        ...state.user,
        isLogin: true,
        user: {
          username: action.username,
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          password: action.password,
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