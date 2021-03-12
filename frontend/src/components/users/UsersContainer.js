import React, { Component } from 'react';
import HasAccess from '../sessions/HasAccess'
import {
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";
import UsersList from './UsersList';
import User from './User'
import UserEdit from './UserEdit'
import {getUsers} from '../../actions/siteActions'
import {deleteUser} from '../../actions/siteActions'


class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }
  

  componentDidMount(){
    console.log("UsersContainer:", "componentDidMount")
    this.props.getUsers()
  }

  render (){    
    return (
      <div>
        {/* <HasAccess component={() => header() }/> */} 
          <HasAccess>
            <Route exact path="/users" render={routerProps => <UsersList {...routerProps}/>}></Route>
          </HasAccess>            
          <Route exact path="/users/:id" render={routerProps => <User {...routerProps} props={this.props} />}/>
          <Route exact path="/users/:id/edit" render={routerProps => <UserEdit {...routerProps} props={this.props} />}/>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: data => dispatch(getUsers(data)),
    deleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);