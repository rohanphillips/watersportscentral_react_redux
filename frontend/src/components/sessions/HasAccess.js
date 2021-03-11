import React from 'react'
import { connect } from 'react-redux';

class HasAccess extends React.Component {

    render() {
        const Component = this.props.component;
        const element = this.props.element;
        const isAdmin = this.props.state.user.admin;
        // console.log("HasAccess", "isAdmin:", isAdmin);
        const isAuthenticated = localStorage.getItem('loggedin') != null && isAdmin;
        // console.log("HasAccess", "Component", this.props.component);
        // console.log("HasAccess", "loggedin", localStorage.getItem('loggedin'));
        // console.log("HasAccess", "isAuthenticated:", isAuthenticated);
        // console.log("HasAccess", "props", this.props);
        return isAuthenticated ? (
            Component ? (Component) : (element)
        ) : (
            null
        );
    }
}

const mapStateToProps = state => {
    return {state}
  }

export default connect(mapStateToProps)(HasAccess);