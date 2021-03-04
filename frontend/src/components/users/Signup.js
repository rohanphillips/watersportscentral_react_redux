import React, {Component} from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{message}</h1>
          <input onChange={this.handleChange}
          type="text"
          name="username"
          placeholder="Username"
          required />

        </form>
      </div>
    )
  }
}

export default Signup;