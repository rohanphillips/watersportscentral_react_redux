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
  console.log("NavBar:","Display Users:", data);
  const {admin} = data.state.users.user;
  if (admin){
    return <li><NavLink to="/users">Users</NavLink></li>;
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
    return <li><NavLink to={`${link}`}>Profile</NavLink></li>;
  }
  return null;
}

class NavBar extends Component{  
  render(){
    console.log("NavBar:","State:", this.props.state)
    const {isLogin} = this.props.state.site;
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
              <DisplayUsers state={this.props.state} />
              <Login login={isLogin} />
              <Signout login={isLogin} />
              <Signup login={isLogin} />   
              <Profile state={this.props.state} login={isLogin}/>         
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