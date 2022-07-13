import React from 'react'
import Home from "./screens/Home";
import { Provider } from 'react-redux';
import {configureStore}	 from '@reduxjs/toolkit'
import mainReducer from './redux/reducers/mainReducer';
import Cities from './screens/Cities';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

export default function App() {
	const reduxReducer = configureStore({reducer: mainReducer})

  return (
		<Provider store={reduxReducer}>
   		{/*<Home />*/}
			{/*<Cities />*/}
			{/*<Login />*/}
			<SignUp/>
		</Provider>
  );
}

