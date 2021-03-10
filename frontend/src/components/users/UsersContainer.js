import React, { Component } from 'react';
import HasAccess from '../sessions/HasAccess'
import {
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import User from './User'
import {getUsers} from '../../actions/siteActions'
import {deleteUser} from '../../actions/siteActions'
 

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
    }
  }

  componentDidMount(){
    console.log("UsersContainer", "Component mounted") 
    if (this.state.fetched === false) {
      this.props.getUsers();
    }
    this.setState({
      fetched: true
    })
    console.log("this.state", this.state)
  }
  
  componentWillUnmount(){
    this.setState({
      fetched: false
    })
  }

  render (){
    console.log("UsersContainer", "Props:", this.state);
    return (
      <div>
        {/* <HasAccess component={() => header() }/> */} 
          <HasAccess component={() =><Route exact path="/users" render={routerProps => <UsersList {...routerProps}/>}/>}/>
          <Route path="/users/:id" render={routerProps => <User {...routerProps} state={this.props.state} />}/>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: users => dispatch(getUsers(users)),
    deleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);