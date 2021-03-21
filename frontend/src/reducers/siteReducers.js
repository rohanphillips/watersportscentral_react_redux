const initialState = {
  isLogin: false,
}

const initialUser = {
	user: {
		username: '',
		firstName: '',
		lastName: '',
		email: '',
	}
}

const siteReducers = (state = initialState, action) => {
  console.log("siteReducer:", "called", action);
  switch (action.type){
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
      }
    default: return state;
  }
  
}

export default siteReducers;