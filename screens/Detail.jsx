import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, Button, ScrollView, View, TextInput,Dimensions, Image, ActivityIndicator} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import cityActions from '../redux/actions/cityActions'
import Itinerary from '../components/Itinerary';


export default function Detail({route}) {
	const dispatch = useDispatch()
	const city = useSelector(store => store.cityReducer.oneCity)
	const [cityLoad, setCityLoad] = useState(false);


	useEffect(()=>{
		dispatch(cityActions.getOneCity(route.params.cityId))
		if(city.itineraries !== undefined){
			setCityLoad(true)
		}else{
			setCityLoad(false)
		}
	},[[city.itineraries]])


	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: city.image }} style={styles.image}></Image>
			<Text style={styles.title}>{city.name}</Text>
			<Text style={styles.description}>{city.description}</Text>

			{ cityLoad ? city.itineraries.map((itinerary)=> <Itinerary key={itinerary._id} itinerary={itinerary} />)
			: <ActivityIndicator />
			}
		</ScrollView>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0c9',
  },
	image:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height/3
	},
	title: {
		padding: 8,
		fontSize: 20,
		fontWeight: 'bold',
	},
	description:{
		padding: 5,
	},
	link:{
		color: 'rgb(94, 234, 212)',
		marginLeft: 10,
	},
	user:{
		width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgb(99, 102, 241)"
	},
	itinerary:{
		backgroundColor: 'white',
		marginBottom: 10,
		padding: 10,
		
	},
	rowBox:{
		flexDirection: "row",
    flexWrap: "wrap",
		alignItems: "center",
	},
	itineraryInfo:{
		paddingLeft: 10,
	}
});