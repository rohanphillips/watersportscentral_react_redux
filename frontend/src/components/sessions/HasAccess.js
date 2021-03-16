import React from 'react'
import { connect,
Redirect} from 'react-redux';

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

const mapStateToProps = state => {
    return {state}
  }

export default connect(mapStateToProps)(HasAccess);