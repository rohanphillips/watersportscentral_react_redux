import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


const App = (props) => {
  return (
    <Router>
      {
        <div>
          <NavBar/>
        </div>
      }
    </Router>
  );
}

export default App;
