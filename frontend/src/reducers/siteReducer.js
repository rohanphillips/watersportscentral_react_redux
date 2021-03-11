const initialUser = {
  user: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
  }
};

const initialState = {
  isLogin: false,
  ...initialUser,
  users: []
}

const siteReducer = (state = initialState, action) => {
  console.log("siteReducer:", "called", action);
  switch (action.type) {
    case 'CREATE_USER':
      console.log("siteReducer:", "CREATE_USER");
      return {
        ...state,
        isLogin: true,
        user: {
          id: action.id,
          username: action.username,
          firstName: action.first_name,
          lastName: action.last_name,
          email: action.email,
          password: action.password,
          admin: action.admin,
          active: action.active
        }
      }
    case 'CREATE_USER_ERROR':
      console.log("siteReducer:", "CREATE_USER_ERROR");
      return {
        ...state,
        isLogin: false,
        ...initialUser,
        errors: {...action.error},
      }
    case 'USER_LOGIN':
      console.log("siteReducer:", "USER_LOGIN");
      return {
        ...state, 
        isLogin: true,
        user: {
          id: action.id,
          username: action.username,
          firstName: action.first_name,
          lastName: action.last_name,
          email: action.email,
          admin: action.admin,
          active: action.active,
        },
        usersFetched: false,
        users: []

      }
    case 'USER_LOGOUT':
      console.log("siteReducer:", "USER_LOGOUT");
      return {
        ...state,
        isLogin: false,
        ...initialUser,   
        users: []     
      }
    case 'GET_USERS':
      console.log("siteReducer:", "GET_USERS", action);
      return {
        ...state,
        usersFetched: true,
        users: action.users,
      }
    case 'DELETE_USER':
      console.log("siteReducer:", "DELETE_USER", action)
      console.log("siteReducer:", "DELETE_USER:", state)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      }
    default: return state;
  }
}

export default siteReducer;