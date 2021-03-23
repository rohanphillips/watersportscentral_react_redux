import React from 'react'
import { connect} from 'react-redux';

class LoggedIn extends React.Component {
    render() {
        const isAuthenticated = localStorage.getItem('loggedin') != null;
        console.log("HasAccess", isAuthenticated);
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

export default connect(mapStateToProps)(LoggedIn);