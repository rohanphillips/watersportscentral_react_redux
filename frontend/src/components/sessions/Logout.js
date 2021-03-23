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
    localStorage.clear("loggedin");
    this.setState({
      navigate: true
    })
    this.props.logOut({logout: true});
  }

  render() {
    const {navigate } = this.state;
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