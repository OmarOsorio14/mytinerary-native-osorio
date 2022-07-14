import React from 'react'
import { Provider } from 'react-redux';
import {configureStore}	 from '@reduxjs/toolkit'
import mainReducer from './redux/reducers/mainReducer';
import Navigation from './navigation/Navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	const reduxReducer = configureStore({reducer: mainReducer})

  return (
		<Provider store={reduxReducer}>
			<StatusBar style="light"/>
			<Navigation />
		</Provider>
  );
}

