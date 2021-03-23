import React from 'react';
import {
  Route 
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Signup from './Signup';

const SessionsContainer = ({ match, state}) => {
  console.log("SessionsContainer:","State:", state);
  return (
    <div>
      {console.log("SessionsContainer:","MatchURL:", match.url)}
      {console.log("SessionsContainer:","state:",state)}
      <Route exact path="/login" render={routerProps => <Login {...routerProps} state={state}/>} />
      <Route exact path="/signup" render={routerProps => <Signup {...routerProps} state={state}/>} />
    </div>
  );
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps)(SessionsContainer);