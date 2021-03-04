import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import siteReducer from './reducers/siteReducer'
// import reportWebVitals from './reportWebVitals';

const initialState = {	
	isLogin: false,
	user: {
		username: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	},
};
const store = createStore(siteReducer, initialState, applyMiddleware(thunk))

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
