import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminAccess from '../sessions/AdminAccess'
import {updateUser} from '../../actions/userActions'
import {getUsers} from '../../actions/userActions'
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
      admin: false,
      active: false},
      message: '',
      isLoaded: false,
      error: false,
      errors: {},
    }
  }

  componentDidMount(){
    this.loadState()
  }

  componentDidUpdate(){
    this.loadState()
    if (this.props.state.users.userUpdated){
      this.props.state.users.userUpdated = false;
      const {getUsers} = this.props;
      getUsers()
        .then(responseJson => {
          })
          .catch(errors => {
            this.setState({
              error: true,
              errors
            })
          })
    }
  }

  loadState = () => {
    if (this.props.state.users.usersFetched && this.state.isLoaded === false){
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
    let saved;
    switch (e.target.type){
      case 'checkbox':
        saved = e.target.checked;
        break;
      default:
        saved = e.target.value;
    }
    console.log("saved:", saved)
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: saved,
      }
    })
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    const {loginUser} = this.props;
    loginUser({
      username, password
    })
  }

  user = () => {
    const id = parseInt(this.props.match.params.id)
    return {user: this.props.state.users.users.find(user => user.id === id), id: id};    
  }

  hasAccess = () =>{
    const {user, id} = this.user() 
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
    if (this.props.state.users.usersFetched === false){
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
          <AdminAccess>
            <label>
              Admin:        
              <input onChange={this.handleChange}
                type="checkbox"
                name="admin"
                checked={this.state.user.admin}
              />
            </label>
          </AdminAccess>
          <AdminAccess>
            <label>
              Active:        
              <input onChange={this.handleChange}
                type="checkbox"
                name="active"
                checked={this.state.user.active}
              />
            </label>
          </AdminAccess>
          <button class="btn-save" onClick={this.handleOnSubmit}>Update</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	updateUser: payload => dispatch(updateUser(payload)),
  getUsers: data => dispatch(getUsers(data)),
});

export default connect(null, mapDispatchToProps) (UserEdit)