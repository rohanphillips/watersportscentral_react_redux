import React, { Component } from 'react';
import UserFlat from './UserFlat'
import { connect } from 'react-redux';
import {deleteUser} from '../../actions/siteActions'

class UsersList extends Component {   

  render() {
    console.log("UsersList", "Props:", this.props);
    console.log("UsersList", "Props.State:", this.props.state);
    return (
      <div> 
          <h1>Users List</h1>
          {
            this.props.state.users.map(user => (
              <UserFlat user={user} deleteUser={this.props.deleteUser}/>
            ))
          }     
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersList);