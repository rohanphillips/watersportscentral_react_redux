import React from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../../actions/siteActions'

class Users extends React.Component {
  componentDidMount(){
    console.log("Users", "Component mounted")
    const {getUsers} = this.props;
    getUsers(this.props.state.user);
  }
  render() {
    console.log("Users", "State:", this.props.state);
    return (
      <div> 
          <h1>Users List</h1>     
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {state}
}
const mapDispatchToProps = dispatch => ({
	getUsers: action => dispatch(getUsers(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);