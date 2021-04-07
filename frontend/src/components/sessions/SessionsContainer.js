import React from 'react';
import {
  Route 
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Signup from './Signup';

const SessionsContainer = ({ match, state}) => {
  return (
    <div>
      <Route exact path="/login" render={routerProps => <Login {...routerProps } />} />
      <Route exact path="/signup" render={routerProps => <Signup {...routerProps}/>} />
    </div>
  );
};

const mapStateToProps = state => {
  return {isLogin: state.siteState.isLogin};
}

export default connect(mapStateToProps)(SessionsContainer);