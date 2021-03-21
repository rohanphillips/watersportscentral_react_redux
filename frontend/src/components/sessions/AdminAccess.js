import React from 'react'
import { connect } from 'react-redux';

class AdminAccess extends React.Component {

    render() {
        // console.log("AdminAccess:", "props", this.props.state.users.user.admin)
        const isAdmin = this.props.state.users.user.admin;
        const isAuthenticated = localStorage.getItem('loggedin') != null && isAdmin;
        return isAuthenticated ? (
            this.props.children
        ) : (
            null
        );
    }
}

const mapStateToProps = state => {
    return {state}
  }

export default connect(mapStateToProps)(AdminAccess);