import React, { Component } from 'react';
import AdminAccess from '../sessions/AdminAccess'
import {
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import User from './User'
import UserEdit from './UserEdit'
import {getUsers} from '../../actions/userActions'
import {deleteUser} from '../../actions/userActions'


class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      errors: {}
    }
  }
  

  componentDidMount(){
    const {getUsers} = this.props;
    getUsers()
      .then(responseJson => {
        })
        .catch(errors => {
          this.setState({
            error: true,
            errors
          })
        })
  }

  render (){  
    return (
      <div class="container border border-amber-200 w-full">
          <AdminAccess>
            <Route exact path="/users" render={routerProps => <UsersList {...routerProps}/>}></Route>
          </AdminAccess>            
          <Route exact path="/users/:id" render={routerProps => <User {...routerProps} props={this.props} />}/>
          <Route exact path="/users/:id/edit" render={routerProps => <UserEdit {...routerProps} state={this.props.state} />}/>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: data => dispatch(getUsers(data)),
    deleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);