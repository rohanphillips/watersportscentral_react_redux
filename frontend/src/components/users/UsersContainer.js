import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Signup from './Signup';
// import LocationsList from './LocationsList';
// import LocationEdit from './LocationEdit'

const UsersContainer = ({ match, locations}) => {
  return (
    <Router>
      <div>
        <Route exact path={`${match.url}/:signup`} render={routerProps => <Signup {...routerProps} locations={locations}/>} />
      </div>
    </Router>
  );
};

export default UsersContainer;