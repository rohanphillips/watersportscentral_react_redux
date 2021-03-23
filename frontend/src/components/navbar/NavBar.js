import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../sessions/Logout'
import { connect } from 'react-redux';
import './navbar.css'

function Signup(data){
  console.log("NavBar:","Signup:", data);
  if (data.isLogin === false){
    return <li><NavLink to="/signup">Sign Up</NavLink></li>;
  }
  return null;
}

function Login(data){
  console.log("NavBar:","Login:", data.login);
  if (data.login === false){
    return <NavLink to="/login">Log In</NavLink>;
  }   
  return null;
}

function Signout(data){
  console.log("NavBar:","Logout:", data.login);
  if (data.login){
    return <Logout/>;
  }
  return null;
}

function DisplayUsers(data){
  console.log("NavBar:","Display Users:", data);
  const {admin} = data.state.users.user;
  if (admin){
    return <NavLink to="/users">Users</NavLink>;
  }
  return null;
}

function Profile(data){
  console.log("NavBar:","ProfileData:", data);
  console.log("Profile:", data.login);  
  if (data.login){
    const {id} = data.state.users.user;
    console.log("NavBar", "id:", id)
    const link = `/users/${id}`
    return <NavLink to={`${link}`}>Profile</NavLink>;
  }
  return null;
}

class NavBar extends Component{  
  render(){
    console.log("NavBar:","State:", this.props.state)
    const {isLogin} = this.props.state.site;
    return (
      <div className="Navbar">
        <nav>
          <div><NavLink to="/">Home</NavLink></div>
          <div><NavLink to="/locations">Locations</NavLink></div>
          <div><NavLink to="/sports">Sports</NavLink></div>
          <div><NavLink to="/events">Events</NavLink></div>
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