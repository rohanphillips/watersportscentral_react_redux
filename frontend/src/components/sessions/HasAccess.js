import React from 'react'
import { connect } from 'react-redux';

class HasAccess extends React.Component {

    render() {
        const isAdmin = this.props.state.user.admin;
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

export default connect(mapStateToProps)(HasAccess);