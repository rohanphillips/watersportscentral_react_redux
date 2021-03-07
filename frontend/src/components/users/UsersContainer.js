import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

const UsersContainer = ({ match, state}) => {
  console.log("UsersContainer", "State:", state);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default UsersContainer;