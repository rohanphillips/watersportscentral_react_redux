import React, { Component } from 'react';
import axios from 'axios';
import {USERS_URL} from '../../actions/siteActions'
import UserFlat from './UserFlat'

const headers = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')};

class UsersList extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      users: []
    }
    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount(){
    console.log("Users", "Component mounted")     
    const getUsers = async () =>
      {          
        const response = await axios({
        method: 'GET',
        url: USERS_URL,
        headers: headers,
        crossdomain: true,
          }) 
        this.setState({
          users: response.data.users,
          fetched: true
        })
      }  
    console.log("UsersList", "componentDidMount", this.state.fetched)
    if (this.state.fetched === false)  {
      getUsers();
    }      
  }

  deleteUser (id) {
    console.log("UsersList", "deleteUser", id)
    console.log("UsersList", "this.State", this)
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

  render() {
    console.log("Users", "PropsState:", this.props.state);
    console.log("Users", "State:", this.state);
    return (
      <div> 
          <h1>Users List</h1>
          {
            this.state.users.map(user => (
              <UserFlat user={user} deleteUser={this.deleteUser}/>
            ))
          }     
      </div>
    );
  }
};

export default (UsersList);