import React from 'react'
import { connect } from 'react-redux';

class IsOwner extends React.Component {

    render() {
        let isOwner
        switch(this.props.type){
          case 'location':
            isOwner = this.props.state.usersState.user.id === this.props.location.user_id;
            break;
          default:
            isOwner = false;
        }
        return isOwner ? (
            this.props.children
        ) : (
            null
        );
    }
}

const mapStateToProps = state => {
    return {user: state.usersState.user}
  }

export default connect(mapStateToProps)(IsOwner);