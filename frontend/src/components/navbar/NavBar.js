import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../sessions/Logout'
import { connect } from 'react-redux';
import './navbar.css'

function Signup(data){
  if (data.login === false){
    return <NavLink to="/signup"><button class="btn-amber">Sign Up</button></NavLink>;
  }
  return null;
}

function Login(data){
  if (data.login === false){
    return <NavLink to="/login"><button class="btn-amber">Log In</button></NavLink>;
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
    return <NavLink to="/users"><button class="btn-amber">Users</button></NavLink>;
  }
  return null;
}

function Profile(data){
  if (data.login){
    const {id} = data.state.users.user;
    const link = `/users/${id}`
    return <NavLink to={`${link}`}><button class="btn-amber">Profile</button></NavLink>;
  }
  return null;
}

class NavBar extends Component{  
  render(){
    const {isLogin} = this.props.state.site;
    return (
      <div class="flex-col border-red-800 ...">        
        {/* <nav > */}
          <div class="flex items-center justify-center"><NavLink to="/"><button class="btn-amber">Home</button></NavLink></div>
          <div class="flex items-center justify-right"><NavLink to="/locations"><button class="btn-amber">Locations</button></NavLink></div>
          {/* <div><NavLink to="/sports">Sports</NavLink></div>
          <div><NavLink to="/events">Events</NavLink></div> */}
          <div class="flex items-center justify-center"><DisplayUsers state={this.props.state} /></div>
          <div class="flex items-center justify-center"><Login login={isLogin} /></div>
          <div class="flex items-center justify-center"><Signout login={isLogin} /></div>
          <div class="flex items-center justify-center"><Signup login={isLogin} /></div>   
          <div class="flex items-center justify-center"><Profile state={this.props.state} login={isLogin}/></div>  
        {/* </nav> */}
      </div>
    );
  }  
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps) (NavBar);