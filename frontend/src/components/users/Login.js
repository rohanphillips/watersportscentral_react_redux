import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import { loginUser } from '../../actions/siteActions';

class Login extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
      navigate: false
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
    console.log("startlogin:")
    await loginUser({
      username, password
    })
    console.log("endlogin:")
    // if(this.props.state.isLogin === true) {
    //   const { history } = this.props;
    //   history.push('/')
    // } else {
    //   this.setState({
    //     message: 'welcome',
    //   })
    // }
  }

  signup = () => {
    console.log("sendToSignUp:");
    this.setState({
      navigate: true
    })
    // ;
    console.log("After:")
  }

  render() {
    const { message } = this.state;
    const {navigate } = this.state;
    if (navigate) {
      return <Redirect to="/signup" />
    }
    console.log("login render:")
    return (
      <div>
         <form onSubmit={this.handleOnSubmit}>
          <h1>{message}</h1>
          <input onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            required 
          />
          <input onChange={this.handleChange}
            type="text"
            name="password"
            placeholder="Password"
            required />

          <button type="submit">Log In</button>
          <button onClick={this.signup}>Sign Up</button>
        </form>  
              
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	loginUser: action => dispatch(loginUser(action)),
});

export default connect(null, mapDispatchToProps)(Login);