import React from 'react'
import { StyleSheet, Text, ScrollView, View, ImageBackground, Dimensions} from 'react-native';
import CustomSlider from '../components/CustomSlider';
import {useSelector} from 'react-redux'
import Hero from '../components/Hero';


export default function Home() {
	const cities = useSelector(store => store.cityReducer.cities)
	
	return (
			<ScrollView style={styles.container}>
				<ImageBackground source={require('../assets/home_background.jpg')} resizeMode="cover" style={styles.image}>
					<Hero />
    		</ImageBackground>
				<Text style={styles.title}  numberOfLines={1}>Popular MyTineraries</Text>
				
				<View>
					<CustomSlider data={cities} />
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
