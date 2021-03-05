import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './sessions/Logout'

function Signup(data){
  console.log("Signup:", data.isLogin);
  if (data.isLogin === false){
    return <li><NavLink to="/signup">Sign Up</NavLink></li>;
  }
  return null;
}

function Login(data){
  console.log("Login:", data.login);
  if (data.login === false){
    return <li><NavLink to="/login">Log In</NavLink></li>;
  }   
  return null;
}

function Signout(data){
  console.log("Logout:", data.login);
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
  console.log("ProfileData:", data.data);
  // console.log("Profile:", data.data.state.isLogin);  
  if (data.data.isLogin){
    const {id} = data.data.user;
    const link = `/users/${id}`
    return <li><NavLink to={`${link}`}>Profile</NavLink></li>;
  }
  return null;
}

const NavBar = (props) => {  
  console.log("NavBarState:", props.state)
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
            <DisplayUsers displayusers={props.state} />
            <Login login={props.state.isLogin} />
            <Signout login={props.state.isLogin} />
            <Signup login={props.state.isLogin} />   
            <Profile data={props.state} />         
          </ul>
        </nav>
      }
    </div>
  );
};


export default NavBar;