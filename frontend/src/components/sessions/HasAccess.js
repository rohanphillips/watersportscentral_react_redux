import React from 'react'
import { Redirect } from 'react-router-dom'

class HasAccess extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('twt') != null;
        console.log("HasAccess", "isAuthenticated:", isAuthenticated);
        return isAuthenticated ? (
            <Component />
        ) : (
            null
        );
    }
}

export default HasAccess;