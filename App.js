import React from 'react'
import { Provider } from 'react-redux';
import {configureStore}	 from '@reduxjs/toolkit'
import mainReducer from './redux/reducers/mainReducer';
import Navigation from './navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
	const reduxReducer = configureStore({reducer: mainReducer})
	NavigationBar.setBackgroundColorAsync('#111827');
  return (
		<Provider store={reduxReducer}>
			<StatusBar style="light"/>
			<Navigation />
		</Provider>
  );
}

