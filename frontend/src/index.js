import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import './assets/main.css';
import './index.css';
import App from './components/app/App';
import siteReducers from './reducers/siteReducers'
import userReducers from './reducers/userReducers'
import locationReducers from './reducers/locationReducers'
// import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({site: siteReducers, users: userReducers, locations: locationReducers});
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
