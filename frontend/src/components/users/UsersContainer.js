import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Signup from './Signup';
// import LocationsList from './LocationsList';
// import LocationEdit from './LocationEdit'

const UsersContainer = ({ match, state}) => {
  return (
    // <Signup/>
    <Router>
      <div>
        {/* {console.log("UsersContainer:", match.url)} */}
        <Route exact path={match.url} render={routerProps => <Signup {...routerProps} state={state}/>} />
      </div>
    </Router>
  );
};


export default UsersContainer;