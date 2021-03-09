import React, { Component } from 'react';
import HasAccess from '../sessions/HasAccess'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import {USERS_URL} from '../../actions/siteActions'
import { connect } from 'react-redux';
import UsersList from './UsersList';
import User from './User';
import {getUsers} from '../../actions/siteActions'
 

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      users: []
    }
    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount(){
    console.log("UsersContainer", "Component mounted") 
    this.props.getUsers(); 
  }

  deleteUser (id) {
    console.log("UsersContainer", "deleteUser", id)
    console.log("UsersContainer", "this.State", this)
    const headers = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};
    const deleteUser = async () =>{
      const response = await axios({
        method: 'DELETE',
        url:  `${USERS_URL}/${id}`,
        headers: headers,
        crossdomain: true,
      })
      this.setState({
        users: this.state.users.filter(user => user.id != id)
      })
    }
    deleteUser();   
  }

  render (){
    console.log("UsersContainer", "Props:", this.props);
    return (
      <div>
        {/* <HasAccess component={() => header() }/> */} 
          <HasAccess component={() =><Route exact path="/users" render={routerProps => <UsersList {...routerProps} state={this.props.state} users={this.state.users} deleteUser={this.deleteUser}/>}/>}/>
          <HasAccess component={() =><Route path="/users/:id" render={routerProps => <User {...routerProps} state={this.props.state} users={this.state.users} deleteUser={this.deleteUser}/>}/>}/>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: payload => dispatch(getUsers(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);