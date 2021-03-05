import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
// import LocationsList from './LocationsList';
// import LocationEdit from './LocationEdit'

function LoginShow(props){
  console.log("LoginShow:", props);
  if (props.state.isLogin === false){
    return <Route exact path="/login" render={routerProps => <Login {...routerProps} state={props}/>} />;
  }
  return null;
}

const UsersContainer = ({ match, state}) => {
  console.log("UsersContainerState:", state);
  return (
    <Router>
      <div>
        {console.log("UsersContainer:", match.url)}
        {console.log("UsersContainerState:",state)}
        <LoginShow state={state} />
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} state={state}/>} />
      </div>
    </Router>
  );
};



export default UsersContainer;