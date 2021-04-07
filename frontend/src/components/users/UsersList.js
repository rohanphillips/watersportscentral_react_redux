import React, { Component } from 'react';
import UserFlat from './UserFlat'
import { connect } from 'react-redux';
import {deleteUser} from '../../actions/userActions'

class UsersList extends Component {   

  render() {
    return (
      <div> 
          <h1>Users List</h1>
          {
            this.props.usersState.users.map(user => (
              <React.Fragment key={user.id}>
                <UserFlat user={user} deleteUser={this.props.deleteUser}/>
              </React.Fragment>
            ))
          }     
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {usersState: state.usersState}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersList);