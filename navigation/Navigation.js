import React, {useEffect} from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Detail from '../screens/Detail'
import Activities from '../screens/Activities'
import Comments from '../screens/Comments';


import {useDispatch} from 'react-redux'
import cityActions from '../redux/actions/cityActions'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const CitiesStack = createNativeStackNavigator()

const MyStack = ()=>{
	return(
		<CitiesStack.Navigator
			initialRouteName='Cities List'
			screenOptions={{
				headerStyle: { backgroundColor: '#111827' },
				headerTintColor: 'white',
			}}
		>
			<CitiesStack.Screen
				name="Cities List"
				component={Cities}
			/>
			<CitiesStack.Screen
				name="detail"
				component={Detail}
			/>
				<CitiesStack.Screen
				name="Activities"
				component={Activities}
			/>
				<CitiesStack.Screen
				name="Comments"
				component={Comments}
			/>
		</CitiesStack.Navigator>
	)
}

const Tab = createBottomTabNavigator()
const MyTabs = ()=>{
	return(
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={{
					tabBarActiveTintColor: 'white',
					headerStyle: { backgroundColor: '#111827' },
					headerTintColor: 'white',
					tabBarStyle: {
						backgroundColor: '#111827',
					},
					
				}}
			>
				<Tab.Screen name="Home" component={Home} options={{
																													tabBarIcon: ({color, size}) =>
																													(<MaterialCommunityIcons name="home" size={size} color={color} />)
				}}/>
				<Tab.Screen name="Cities" component={MyStack} options={{
																													tabBarIcon: ({color, size}) =>
																													(<MaterialCommunityIcons name="map-search" size={size} color={color} />),
																													headerShown: false
				}}/>
				<Tab.Screen name="Login" component={Login} options={{
																													tabBarIcon: ({color, size}) =>
																													(<MaterialCommunityIcons name="login" size={size} color={color} />)
				}}/>
				<Tab.Screen name="Signup" component={SignUp} options={{
																													tabBarIcon: ({color, size}) =>
																													(<MaterialCommunityIcons name="book-account-outline" size={size} color={color} />)
				}}/>
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