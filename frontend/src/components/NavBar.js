import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../components/users/Logout'

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
  } else {
    return <li><Logout/></li>;
  }
  
}

const NavBar = (state) => {  
  console.log("NavBarState:", state.state.isLogin)
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
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <Login login={state.state.isLogin} />
            <Signup login={state.state.isLogin} />            
          </ul>
        </nav>
      }
    </div>
  );
};


export default NavBar;