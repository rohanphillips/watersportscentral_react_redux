import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/siteActions';

class Logout extends Component {
  state = {
    navigate: false
  };

  logout = () => {
    console.log("logoutOnClick:")
    localStorage.clear("jwt");
    this.setState({
      navigate: true
    })
    console.log("logoutProps:", this.props)
    this.props.logOut({logout: true});
  }

  render() {
    const {navigate } = this.state;
    console.log("LogoutNavigate:", navigate)
    if (navigate) {
      return <Redirect to="/" push={true}/>
    }
    return <Link to="/login" onClick={this.logout}>Log Out</Link>;
  }
}

const mapDispatchToProps = dispatch => ({
	logOut: logout => dispatch(logoutUser(logout)),
});

export default connect(null, mapDispatchToProps)(Logout);