import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../sessions/Logout'
import { connect } from 'react-redux';
import './navbar.css'

function Signup(data){
  if (data.login === false){
    return <NavLink to="/signup">Sign Up</NavLink>;
  }
  return null;
}

function Login(data){
  if (data.login === false){
    return <NavLink to="/login">Log In</NavLink>;
  }   
  return null;
}

function Signout(data){
  if (data.login){
    return <Logout/>;
  }
  return null;
}

function DisplayUsers(data){
  const {admin} = data.state.users.user;
  if (admin){
    return <NavLink to="/users">Users</NavLink>;
  }
  return null;
}

function Profile(data){
  if (data.login){
    const {id} = data.state.users.user;
    const link = `/users/${id}`
    return <NavLink to={`${link}`}>Profile</NavLink>;
  }
  return null;
}

class NavBar extends Component{  
  render(){
    const {isLogin} = this.props.state.site;
    return (
      <div>
        <nav>
          <div><NavLink to="/">Home</NavLink></div>
          <div><NavLink to="/locations">Locations</NavLink></div>
          {/* <div><NavLink to="/sports">Sports</NavLink></div>
          <div><NavLink to="/events">Events</NavLink></div> */}
          <div><DisplayUsers state={this.props.state} /></div>
          <div><Login login={isLogin} /></div>
          <div><Signout login={isLogin} /></div>
          <div><Signup login={isLogin} /></div>   
          <div><Profile state={this.props.state} login={isLogin}/></div>  
        </nav>
      </div>
    );
  }  
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps) (NavBar);