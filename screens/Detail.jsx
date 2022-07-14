import React, {useEffect} from 'react'
import { StyleSheet, Text, Button, View, TextInput,Dimensions, Pressable, Image} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import cityActions from '../redux/actions/cityActions'


export default function Detail({route}) {
	const dispatch = useDispatch()
	const city = useSelector(store => store.cityReducer.oneCity)

	useEffect(()=>{
		dispatch(cityActions.getOneCity(route.params.cityId))
		console.log(city)
	},[])

	return (
		<View style={styles.container}>
			<Image source={{ uri: city.image }} style={styles.image}></Image>
			<Text style={styles.title}>{city.name}</Text>
			<Text style={styles.description}>{city.description}</Text>
			
		</View>
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
	}
});