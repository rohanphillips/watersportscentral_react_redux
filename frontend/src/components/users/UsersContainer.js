import React from 'react';
import HasAccess from '../sessions/HasAccess'
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import { render } from 'react-dom';

function header() {
  return <h1>Users</h1>
}

const UsersContainer = ({ match, state}) => {
  console.log("UsersContainer", "State:", state);
  return (
    <div>
      <HasAccess component={() => header() }/>
      
    </div>
  );
};

export default UsersContainer;