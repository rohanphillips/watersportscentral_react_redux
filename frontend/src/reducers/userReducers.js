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
  switch (action.type) {
    case 'RESET_USER':
      return {
        ...initialState,
      }
    case 'CREATE_USER':
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
      return {
        ...state,
        ...initialUser,
        errors: {...action.error},
      }
      case 'UPDATE_USER':
        return {
          ...state,
          user: {
            id: action.id,
            username: action.user.username,
            firstName: action.user.first_name,
            lastName: action.user.last_name,
            email: action.user.email,
            password: action.user.password,
            admin: action.user.admin,
            active: action.user.active
          },
          users: [],
          usersFetched: false,
          userUpdated: true,
        }    
    case 'GET_USERS':
      return {
        ...state,
        usersFetched: true,
        users: action.users,
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      }
    default: return state;
  }
}

export default userReducers;