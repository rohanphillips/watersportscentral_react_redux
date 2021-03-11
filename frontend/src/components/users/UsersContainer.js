import React, { Component } from 'react';
import HasAccess from '../sessions/HasAccess'
import {
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import User from './User'
import UserEdit from './UserEdit'
import {getUsers} from '../../actions/siteActions'
import {deleteUser} from '../../actions/siteActions'
 

class UsersContainer extends Component {
  
  componentDidMount(){
    // console.log("UsersContainer", "Component mounted", this.props.state.usersFetched !== true) 
    // if (this.props.state.usersFetched !== true) {
    //   this.props.getUsers();
    // }
    
  }
  
  componentWillUnmount(){
    // this.props.state.users = [];
    // this.props.state.usersFetched = false;
    
  }
  getUsersLocal() {
    console.log("getUsers", this.props.state.usersFetched)
    if (this.props.state.usersFetched === false) {
      console.log("will call")
      this.props.getUsers();
    }
  }

  render (){
    console.log("UsersContainer", "Props:", this.props.state);
    this.getUsersLocal("");
    return (
      <div>
        {/* <HasAccess component={() => header() }/> */} 
          <HasAccess component={() =><Route exact path="/users" render={routerProps => <UsersList {...routerProps}/>}/>}/>
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