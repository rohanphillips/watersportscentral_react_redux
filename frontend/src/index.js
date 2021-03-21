import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/app/App';
import siteReducers from './reducers/siteReducers'
// import reportWebVitals from './reportWebVitals';
const initialUser = {
	user: {
		username: '',
		firstName: '',
		lastName: '',
		email: '',
	}
}
const initialState = {	
	isLogin: false,
	...initialUser,
	usersFetched: false,
	users: [],
	locations: [],
};
const store = createStore(siteReducers, initialState, applyMiddleware(thunk))

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
