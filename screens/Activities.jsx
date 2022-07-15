import React from 'react'
import { StyleSheet, Text, Button,ScrollView, View, TextInput,ImageBackground, Dimensions} from 'react-native';


export default function Activities({route}) {
	console.log(route.params.activities.length)
	const  activities = route.params.activities;
	return (
		<ScrollView style={styles.container}>
			{activities.length !== 0 ? activities.map(activity =>
				<ImageBackground key={activity._id} source={{ uri: activity.image }} resizeMode="cover" style={styles.image}>
					<Text style={styles.text}>{activity.name}</Text>
				</ImageBackground>
			) : <Text style={styles.error}>At the moment we do not have any activity available for this itinerary, we are still preparing them for you to live the best experiences</Text>}
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
		height: Dimensions.get('window').height/3,
	},
	text:{
		backgroundColor: 'rgba(63, 98, 18, 0.7)',
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	error:{
		padding: 10
	}
});
