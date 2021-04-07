import React from 'react'
import { connect } from 'react-redux';

class AdminAccess extends React.Component {

    render() {
        const isAdmin = this.props.user.admin;
        const isAuthenticated = localStorage.getItem('loggedin') != null && isAdmin;
        return isAuthenticated ? (
            this.props.children
        ) : (
            null
        );
    }
}

const mapStateToProps = state => {
    return {user: state.usersState.user}
  }

export default connect(mapStateToProps)(AdminAccess);