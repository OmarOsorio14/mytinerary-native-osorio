import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, ScrollView, ImageBackground, Dimensions, View, TextInput, TouchableOpacity} from 'react-native';
import cityActions from '../redux/actions/cityActions'
import FlipCard from 'react-native-flip-card'
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'


export default function Cities() {
	const navigation = useNavigation()
	const cities = useSelector(store => store.cityReducer.cities)
	const filter = useSelector(store => store.cityReducer.filter)
	const [text, onChangeText] = useState("");

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(cityActions.filterCities(cities,text))
	},[text])
	
	return (
		<ScrollView style={styles.container}>
			<TextInput
        style={styles.input}
        onChangeText={onChangeText}
				value={text}
				placeholder="Search city"
      />
			{filter.map(city =>
				<FlipCard key={city._id}>
				<ImageBackground source={{ uri: city.image }} resizeMode="cover" style={styles.image}>
					<Text style={styles.title}>{city.name}</Text>
    		</ImageBackground>
				<View style={styles.content}>
					<Text style={styles.backTitle}>{city.continent} - {city.country}</Text>
					
					<Text style={styles.description} numberOfLines={5}>{city.description}</Text>
					<LinearGradient colors={['#875498', '#5f0979', '#5f0979']} style={styles.button}>
						<TouchableOpacity onPress={() => navigation.navigate("detail",{ cityId: city._id})} >
							<Text style={styles.buttonText}>see detail</Text>
						</TouchableOpacity>	
					</LinearGradient>
					<Text style={styles.itineraries}>available itineraries: {city.itineraries.length}</Text>
				</View>
			</FlipCard>
				)}
		</ScrollView>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0c9',
  },
	input:{
		marginHorizontal: '15%',
		marginVertical: 50,
		width: '70%',
		backgroundColor: 'white',
		borderRadius: 30,
		paddingLeft: 10,
		shadowColor: 'black',
	},
	image: {
		flex: 1,
		marginLeft: 'auto',
		width: '90%',
		height: Dimensions.get('window').height/3,
		marginBottom: 10,
	},
	content:{
		marginHorizontal: '5%',
		width: '90%',
		height: Dimensions.get('window').height/3,
		backgroundColor: '#111827',
		marginBottom: 10,
	},
	title:{
    fontWeight: 'bold',
    fontSize: 20,
		width: '40%',
		backgroundColor: '#f8f0c9',
		borderBottomRightRadius: 10,
		textAlign: 'center',
	},
	backTitle:{
		fontWeight: 'bold',
		fontSize: 20,
		color: 'rgb(199, 210, 254)',
		paddingLeft: 5,
		paddingTop: 5,
	},
	description: {
		color: 'rgb(199, 210, 254)',
		padding: 10
	},
	itineraries:{
		fontWeight: 'bold',
    fontSize: 15,
		width: '60%',
		backgroundColor: '#f8f0c9',
		borderTopRightRadius: 10,
		textAlign: 'center',
		marginTop: 'auto'
	},
	button:{
		backgroundColor: 'purple',
		padding: 10,
		width: '50%',
		alignSelf: 'center',
		borderRadius: 10,
	},
	buttonText:{
		color: 'white',
		alignSelf: 'center',
		fontSize: 15,
	}
});