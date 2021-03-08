import React, { Component } from 'react';
import axios from 'axios';
import {USERS_URL} from '../../actions/siteActions'

class Users extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      users: []
    }
  }

  componentDidMount(){
    console.log("Users", "Component mounted")
    const getUsers = async () =>
      {  
        const headers = {'Authorization': 'JWT ' + localStorage.getItem('loggedin')}
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
    
    if (this.state.fetched === false)  {
      getUsers();
    }
      
  }
  render() {
    console.log("Users", "PropsState:", this.props.state);
    console.log("Users", "State:", this.state);
    return (
      <div> 
          <h1>Users List</h1>     
      </div>
    );
  }
};

export default (Users);