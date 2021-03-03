import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-dom';
import './App.css';
// import NavBar from './components/NavBar'

class App extends Component {
 
  componentDidMount() {
    // console.log("componentDidMount:")
    // console.log(this.props)
    // this.props.fetchCats()
  }
 
  render() {
    // console.log(this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
      </div>
    );
  }
}
 
// const mapStateToProps = state => {
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }
 
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//   }
// }
export default App

// const App = (props) => {
//   return (
//     <Router>
//       {
//         <div>
//           {/* <NavBar/> */}
//         </div>
//       }
//     </Router>
//   );
// }

// export default App;
