import React from 'react'
import {Redirect} from 'react-router-dom'

class HasAccess extends React.Component {
    render() {
        const isAuthenticated = localStorage.getItem('loggedin') != null;
        return isAuthenticated ? (
            this.props.children
        ) : (
            <Redirect to="/login" />
        );
    }
}

export default HasAccess;