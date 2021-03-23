import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";
import styled from 'styled-components'
import './app.css';
import NavBar from '../navbar/NavBar'
import Home from '../home/Home';
import Events from '../events/Events';
import LocationsContainer from '../locations/LocationsContainer';
import SessionsContainer from '../sessions/SessionsContainer';
import UsersContainer from '../users/UsersContainer';
import {getUser} from '../../actions/siteActions'
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
  
  getUser (){
    if (localStorage.loggedin){
      const decoded = jwt_decode(localStorage.getItem("loggedin"))
      this.props.getUser(decoded.user_id);
    }
  }


  render() {
    this.getUser();
    return (
      <Router>        
        <div className="App">
          <Grid>
            <Row>
              <Col size={1}>
                Water Sports Central
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <NavBar/>
              </Col>
              <Col size={2}>
                <Switch>
                  <Route exact path="/">
                    <Home />
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
              </Col>
            </Row>
          </Grid>
        </div>        
      </Router>
    );
  }
}

// const mapStateToProps = state => {
//   return {state}
// }

const mapDispatchToProps = dispatch => {
  return {
    getUser: user => dispatch(getUser(user))
  }
}
export default connect(null, mapDispatchToProps) (App);
