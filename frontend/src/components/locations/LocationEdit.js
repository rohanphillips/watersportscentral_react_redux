import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import HasAccess from '../sessions/HasAccess'
// import {updateLocation} from '../../actions/siteActions'
import './location.css'

class LocationEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location:{
        name: '',
        description: '',
        location_info: ''
      }
    }
  }
  render(){
    console.log("LocationEdit:")
    return (
      <div>
        <p>LocationEdit</p>
      </div>
    )
  }
}

export default LocationEdit