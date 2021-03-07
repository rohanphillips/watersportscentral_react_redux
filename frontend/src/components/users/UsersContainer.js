import React from 'react';
import HasAccess from '../sessions/HasAccess'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import { connect } from 'react-redux';
import Users from '../users/Users';

function header() {
  return <h1>Users List</h1>
}

const UsersContainer = ({ match, state}) => {
  console.log("UsersContainer", "State:", state);
  return (
    <div>
      {/* <HasAccess component={() => header() }/> */} 
      <Switch>
        <HasAccess component={() =><Route exact path="/users" render={routerProps => <Users {...routerProps} state={state}/>}/>}/>
      </Switch>
      
    </div>
  );
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps)(UsersContainer);