import React, {useEffect} from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

import {useDispatch} from 'react-redux'
import cityActions from '../redux/actions/cityActions'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()
const MyTabs = ()=>{
	return(
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={{
					tabBarActiveTintColor: 'purple',
				}}
			>
				<Tab.Screen name="Home" component={Home} options={{
																													tabBarIcon: ({color, size}) =>{
																														<MaterialCommunityIcons name="home" size={size} color="black" />
																													}
				}}/>
				<Tab.Screen name="Cities" component={Cities}/>
				<Tab.Screen name="Login" component={Login}/>
				<Tab.Screen name="Signup" component={SignUp}/>
			</Tab.Navigator>																											
	)
}

export default function Navigation(){
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(cityActions.getCities())
		//dispatch(countryActions.getCountries())
		//if(localStorage.getItem('token')!==null){
		//	const token = localStorage.getItem('token')
		//	dispatch(userActions.verifyToken(token))
		//}	
	},[])

	return(
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	)
}