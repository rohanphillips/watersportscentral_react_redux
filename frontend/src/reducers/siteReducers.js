const initialState = {
  isLogin: false,
}

const siteReducers = (state = initialState, action) => {
  switch (action.type){
    case 'USER_LOGIN':
      console.log("siteReducer:", "USER_LOGIN");
      return {
        ...state, 
        isLogin: true,
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