import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, View, ImageBackground, Dimensions} from 'react-native';
import CustomSlider from '../components/CustomSlider';
import {useDispatch,useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'
import Hero from '../components/Hero';
import Cities from './Cities';


export default function Home() {
	const cities = useSelector(store => store.cityReducer.cities)
	useEffect(() => {
		dispatch(cityActions.getCities()).then(		
		)
		//dispatch(countryActions.getCountries())
		//if(localStorage.getItem('token')!==null){
		//	const token = localStorage.getItem('token')
		//	dispatch(userActions.verifyToken(token))
		//}
	
		
	},[])
	const dispatch = useDispatch()
	return (
			<ScrollView style={styles.container}>
				<ImageBackground source={require('../assets/home_background.jpg')} resizeMode="cover" style={styles.image}>
					<Hero />
    		</ImageBackground>
				<Text style={styles.title}  numberOfLines={1}>Popular MyTineraries</Text>
				<StatusBar style="auto" />
				<View>
					<CustomSlider data={cities} />
			</View>
			<View style={{backgroundColor: '#111827', width: Dimensions.get('window').width, height:Dimensions.get('window').height/2}}>
				
			</View>
			</ScrollView>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0c9',
  },
	image: {
		flex: 1,
    justifyContent: "center",
		alignItems: 'center',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	title:{
		textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 5,
    width: '100%',
	}
		
});
