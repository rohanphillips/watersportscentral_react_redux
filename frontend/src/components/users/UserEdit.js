import React, { Component } from 'react';
import { connect } from 'react-redux';
import HasAccess from '../sessions/HasAccess'
import {updateUser} from '../../actions/siteActions'
import './user.css'

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.hasAccess = this.hasAccess.bind(this)
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

  componentDidMount(){
    console.log("UserEdit:", "componentDidMount")
    this.loadState()
  }

  componentDidUpdate(){
    console.log("UserEdit:", "componentDidUpdate")
    this.loadState()
    console.log("componentDidUpdate:", "this.state", this.state)
  }

  loadState = () => {
    if (this.props.props.state.usersFetched && this.state.isLoaded === false){
      if (this.state.isLoaded === false){
        const {user} = this.user();
        this.setState({
          ...this.state,
          user: {...user},
          isLoaded: true
          })
      }   
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      }
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

  user = () => {
    const id = parseInt(this.props.match.params.id)
    return {user: this.props.props.state.users.find(user => user.id === id), id: id};    
  }

  hasAccess = () =>{
    const {user, id} = this.user() 
    console.log("hasAccess", "user:", user)
    if (user === undefined){
      return false;
    }        
    return user.id === id
  }

  createPayload = () => {    
    let user = {...this.state.user}
    delete user.id
    delete user.password_digest
    delete user.created_at
    delete user.updated_at
    const payLoad = {id: this.state.user.id, user: user}
    return payLoad
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Update Requested")
    this.props.updateUser(this.createPayload())
    // const {username, password} = this.state;
    // const {loginUser} = this.props;
    // console.log("Login:","startlogin:")
    // this.props.loginUser({
    //   username, password
    // })
    // console.log("Login:","endlogin:")
  }

  render(){
    const { message } = this.state;
    console.log("userEdit:", "this.props", this.props)
    if (this.props.props.state.usersFetched === false){
      return (
        <p>Loading...</p>
      )
    } else if (this.hasAccess() === false){
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
              value={this.state.user.password === null ? "" : this.state.user.password}
            />
          </label>
          <HasAccess>
            <label>
              Admin:        
              <input onChange={this.handleChange}
                type="checkbox"
                name="admin"
                value={this.state.user.admin}
              />
            </label>
          </HasAccess>
          <HasAccess>
            <label>
              Active:        
              <input onChange={this.handleChange}
                type="checkbox"
                name="active"
                value={this.state.user.active}
              />
            </label>
          </HasAccess>
          <button onClick={this.handleOnSubmit}>Update</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	updateUser: payload => dispatch(updateUser(payload)),
});

export default connect(null, mapDispatchToProps) (UserEdit)