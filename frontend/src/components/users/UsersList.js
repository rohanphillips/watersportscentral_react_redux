import React, { Component } from 'react';
import UserFlat from './UserFlat'

class UsersList extends Component {  
  

  render() {
    console.log("UsersList", "Props:", this.props);
    console.log("UsersList", "Props.State:", this.props.state);
    return (
      <div> 
          <h1>Users List</h1>
          {
            this.props.users.map(user => (
              <UserFlat user={user} deleteUser={this.props.deleteUser}/>
            ))
          }     
      </div>
    );
  }
};

export default (UsersList);