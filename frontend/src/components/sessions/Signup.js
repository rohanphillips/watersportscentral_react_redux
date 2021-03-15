import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../../actions/siteActions';

class Signup extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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
    const {username, email, password} = this.state;
    const {newUser} = this.props;
    const first_name = this.state.firstName;
    const last_name = this.state.lastName;
    await newUser({
      username, email, password, first_name, last_name
    })
    if(this.props.state.isLogin === true) {
      const { history } = this.props;
      history.push('/')
    } else {
      this.setState({
        message: 'welcome',
      })
    }
  }

  

  render() {
    const { message } = this.state;
   
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
            name="firstName"
            placeholder="Firstname"
            required />

          <input onChange={this.handleChange}
            type="text"
            name="lastName"
            placeholder="Lastname"
            />
          
          <input onChange={this.handleChange}
            type="text"
            name="email"
            placeholder="Email"
            required />
          
          <input onChange={this.handleChange}
            type="text"
            name="password"
            placeholder="Password"
            required />

          <button type="submit">Create Accout</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	newUser: payload => dispatch(createUser(payload)),
});
Signup.propTypes = {
	newUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};
export default connect(null, mapDispatchToProps)(Signup);