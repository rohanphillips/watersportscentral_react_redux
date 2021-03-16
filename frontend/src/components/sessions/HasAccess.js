import React from 'react'
import { connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class HasAccess extends React.Component {

    render() {
        const isAuthenticated = localStorage.getItem('loggedin') != null;
        console.log("HasAccess", isAuthenticated);
        return isAuthenticated ? (
            this.props.children
        ) : (
            <Redirect to="/login" />
        );
    }
}

const mapStateToProps = state => {
    return {state}
  }

export default connect(mapStateToProps)(HasAccess);