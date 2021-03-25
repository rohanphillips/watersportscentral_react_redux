import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";
import styled from 'styled-components'
import ErrorsList from '../errors/ErrorsList'
import NavBar from '../navbar/NavBar'
import Home from '../home/Home';
import Events from '../events/Events';
import LocationsContainer from '../locations/LocationsContainer';
import SessionsContainer from '../sessions/SessionsContainer';
import UsersContainer from '../users/UsersContainer';
import {getUser} from '../../actions/userActions'
import Sports from '../sports/Sports';

export const Grid = styled.div`

`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size}
`;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      errors: {}
    }
  }

  getUser (){
    if (localStorage.loggedin){
      const decoded = jwt_decode(localStorage.getItem("loggedin"))
      const getUser = this.props;
      getUser()
        .then(responseJson => {          
        })
        .catch(errors => {
          this.setState({
            error: true,
            errors
          })
        })
      this.props.getUser(decoded.user_id);
    }
  }


  render() {
    if(this.props.state.site.isLogin === false){
      this.getUser();
    }   
    return (
      <div >
        <Router> 
          <div className="container md bg-blue-100 bg h-screen">
            <div>
              <p className="text-center text-7xl p-4">Water Sports Central</p>
            </div>
            <div className="inline-flex grid-cols-2 w-full">
              <div>
                <NavBar/>
              </div>
              <div className="container">
                <ErrorsList state={this.state}/>
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/events">
                    <Events />
                  </Route>
                  <Route path="/locations" render={routerProps => <LocationsContainer {...routerProps}/>}/>
                  <Route exact path="/sports">
                    <Sports />
                  </Route>
                  <Route path="/users" render={routerProps => <UsersContainer {...routerProps}/>}/>        
                  <Route path="/login" render={routerProps => <SessionsContainer {...routerProps}/>}/>
                  <Route path="/signup" render={routerProps => <SessionsContainer {...routerProps}/>}/>
                </Switch>
              </div>
            </div>
          </div>     
        </Router>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: user => dispatch(getUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
