import React, {Component} from 'react';

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
    console.log("handleChange", e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const {username, firstName, lastName, email, password} = this.state;
    const {newUser} = this.props;
    await newUser({
      username, firstName, lastName, email, password
    })
    if(user.isLogin === true) {
      const { history } = this.props;
      history.push('/')
    } else {
      this.setState({
        message: 'welcome',
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.message}</h1>
          <input onChange={this.handleChange}
          type="text"
          name="username"
          placeholder="Username"
          required />

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
          
          <button type="submit">Create Accout</button>
        </form>
      </div>
    )
  }
}

export default Signup;