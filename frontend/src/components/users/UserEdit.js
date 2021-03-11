import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUser} from '../../actions/siteActions'
import './user.css'

class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      admin: '',
      active: ''},
      message: '',
      isLoaded: false
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

  hasAccess = () =>{
    const id = parseInt(this.props.match.params.id)
    const user = this.props.props.state.users.find(user => user.id === id);
    if (user === undefined){
      return false;
    }
    if (this.state.isLoaded === false){
      this.setState({
        ...this.state,
        user: {...user},
        isLoaded: true
      })
    }    
    return user.id === id
  }

  render(){
    const { message } = this.state;
    console.log("userEdit:", "this.props", this.props)
    //console.log("hasAccess:", this.hasAccess())
    if (this.hasAccess() === false){
      return (
        <div>
          <p>No Access</p>
        </div>
      )
    }
    return (
      <div className="form-part">
        <p>
          User Edit            
        </p>
        <form onSubmit={this.handleOnSubmit}>
          <h1>{message}</h1>
          <label>
            Username:        
            <input onChange={this.handleChange}
              type="text"
              name="username"
              value={this.state.user.username}
            />
          </label>
          <label>
            First Name:        
            <input onChange={this.handleChange}
              type="text"
              name="first_name"
              value={this.state.user.first_name}
            />
          </label>  
          <label>
            Last Name:        
            <input onChange={this.handleChange}
              type="text"
              name="last_name"
              value={this.state.user.last_name}
            />
          </label>
          <label>
            Email:        
            <input onChange={this.handleChange}
              type="text"
              name="email"
              value={this.state.user.email}
            />
          </label>
          <label>
          Password:        
          <input onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.user.password}
          />
        </label>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	updateUser: user => dispatch(updateUser(user)),
});

export default connect(null, mapDispatchToProps) (UserEdit)