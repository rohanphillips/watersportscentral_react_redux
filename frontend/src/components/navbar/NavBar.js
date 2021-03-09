import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../sessions/Logout'
import { connect } from 'react-redux';

function Signup(data){
  console.log("NavBar:","Signup:", data.isLogin);
  if (data.isLogin === false){
    return <li><NavLink to="/signup">Sign Up</NavLink></li>;
  }
  return null;
}

function Login(data){
  console.log("NavBar:","Login:", data.login);
  if (data.login === false){
    return <li><NavLink to="/login">Log In</NavLink></li>;
  }   
  return null;
}

function Signout(data){
  console.log("NavBar:","Logout:", data.login);
  if (data.login){
    return <li><Logout/></li>;
  }
  return null;
}

function DisplayUsers(data){
  const {admin} = data.displayusers.user;
  if (admin){
    return <li><NavLink to="/users">Users</NavLink></li>;
  }
  return null;
}

function Profile(data){
  console.log("NavBar:","ProfileData:", data.data);
  console.log("Profile:", data.data.isLogin);  
  if (data.data.isLogin){
    const {id} = data.data.user;
    console.log("NavBar", "id:", id)
    const link = `/users/${id}`
    return <li><NavLink to={`${link}`}>Profile</NavLink></li>;
  }
  return null;
}

class NavBar extends Component{  
  render(){
    console.log("NavBar:","State:", this.props.state)
    const {isLogin} = this.props.state;
    return (
      <div className="navbar">
        {
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>              
              </li>           
              <li>
                <NavLink to="/locations">Locations</NavLink>
              </li>
              <li>
                <NavLink to="/sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <DisplayUsers displayusers={this.props.state} />
              <Login login={isLogin} />
              <Signout login={isLogin} />
              <Signup login={isLogin} />   
              <Profile data={this.props.state} />         
            </ul>
          </nav>
        }
      </div>
    );
  }  
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps) (NavBar);