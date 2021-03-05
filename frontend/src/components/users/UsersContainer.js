import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
// import LocationsList from './LocationsList';
// import LocationEdit from './LocationEdit'

const UsersContainer = ({ match, state}) => {
  console.log("UsersContainerState:", state);
  return (
    <Router>
      <div>
        {console.log("UsersContainer:", match.url)}
        <Route exact path="/login" render={routerProps => <Login {...routerProps} state={state}/>} />
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} state={state}/>} />
      </div>
    </Router>
  );
};



export default UsersContainer;