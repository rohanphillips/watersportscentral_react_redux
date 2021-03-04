import React from 'react';
import { connect } from 'react-redux';
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
        <Route exact path={`${match.url}/:signup`} render={routerProps => <Signup {...routerProps} state={this.state}/>} />
      </div>
    </Router>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: (user) => dispatch({ type: 'CREATE_USER', payload: user })
  };
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);