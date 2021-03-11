import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUser} from '../../actions/siteActions'

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      admin: false,
      active: false,
      message: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    const {loginUser} = this.props;
    console.log("Login:","startlogin:")
    loginUser({
      username, password
    })
    console.log("Login:","endlogin:")
  }

  render(){
    console.log("UserEdit", "deleteUser", this.props)
    console.log("UserEdit", "Users", this.props.match.params.id)
    const id = parseInt(this.props.match.params.id)
    const user = this.props.props.state.users.find(user => user.id === id);
    if (user === undefined){
      return <p>No Access</p>
    }
    const { message } = this.state;
    return (
      <div>
        <p>
          User Edit
          {user.first_name} <br></br> 
          {user.last_name}
            
        </p>
        <form onSubmit={this.handleOnSubmit}>
        <h1>{message}</h1>
        <input onChange={this.handleChange}
          type="text"
          name="username"
          value={this.state.username}
        />
          
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	updateUser: user => dispatch(updateUser(user)),
});

export default connect(null, mapDispatchToProps) (UserEdit)