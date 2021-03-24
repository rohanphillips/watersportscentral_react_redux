const initialUser = {
	user: {
		admin: false,
    active: false,
    username: '',
		firstName: '',
		lastName: '',
		email: '',
	}
}

const initialState = {
	...initialUser,
	usersFetched: false,
	users: [],
};

const userReducers = (state = initialState, action) => {
  console.log("userReducers:", "called", action);
  
  switch (action.type) {
    case 'RESET_USER':
      return {
        ...initialState,
      }
    case 'CREATE_USER':
      console.log("userReducers:", "CREATE_USER");
      return {
        ...state,
        user: {
          id: action.id,
          username: action.username,
          firstName: action.first_name,
          lastName: action.last_name,
          email: action.email,
          password: action.password,
          admin: action.admin,
          active: action.active
        },
        users: [],
        usersFetched: false,
      }
    case 'CREATE_USER_ERROR':
      console.log("userReducers:", "CREATE_USER_ERROR");
      return {
        ...state,
        ...initialUser,
        errors: {...action.error},
      }
      case 'UPDATE_USER':
        console.log("userReducers:", "UPDATE_USER");
        return {
          ...state,
          user: {
            id: action.id,
            username: action.username,
            firstName: action.first_name,
            lastName: action.last_name,
            email: action.email,
            password: action.password,
            admin: action.admin,
            active: action.active
          },
          users: [],
          usersFetched: false,
          userUpdated: true,
        }    
    case 'GET_USERS':
      console.log("userReducers:", "GET_USERS", action);
      return {
        ...state,
        usersFetched: true,
        users: action.users,
      }
    case 'DELETE_USER':
      console.log("userReducers:", "DELETE_USER", action)
      console.log("userReducers:", "DELETE_USER:", state)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      }
    default: return state;
  }
}

export default userReducers;