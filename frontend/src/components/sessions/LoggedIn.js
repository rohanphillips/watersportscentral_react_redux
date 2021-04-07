import React from 'react'

class LoggedIn extends React.Component {
    render() {
        const isAuthenticated = localStorage.getItem('loggedin') != null;
        return isAuthenticated ? (
            this.props.children
        ) : (
            null
        );
    }
}

export default LoggedIn;