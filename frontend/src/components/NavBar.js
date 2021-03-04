import React from 'react';
import { NavLink } from 'react-router-dom';

function Signup(data){
  console.log("Signup:", data.isLogin);
  if (data.isLogin === false){
    return <li><NavLink to="/signup">Sign Up</NavLink></li>;
  }
  return null;
}

function Login(data){
  console.log("Login:", data.isLogin);
  if (data.isLogin === false){
    return <li><NavLink to="/login">Log In</NavLink></li>;
  } else {
    return <li><NavLink to="/logout">Log Out</NavLink></li>;
  }
  
}

const NavBar = (state) => {  
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
            <Login data={state.state.isLogin} />
            <Signup data={state.state.isLogin} />            
          </ul>
        </nav>
      }
    </div>
  );
};

export default NavBar;