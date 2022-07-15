import React from 'react'
import { StyleSheet, Text, Button, ScrollView, View, TextInput,Dimensions, Image, ActivityIndicator} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Itinerary({itinerary}) {
	const navigation = useNavigation()
	let price = [];
  for (let i = 0; i < itinerary.price; i++) {
    price.push(<FontAwesome5 name="money-bill-wave-alt" size={24} color="#6fb32d" />);
  }
	return (
		<View key={itinerary._id} style={styles.itinerary}>
				<View style={styles.rowBox}>
					<Image  style={styles.user} source={{ uri: itinerary.userPicture }}/>
					<View style={styles.itineraryInfo}>
						<Text style={styles.itineraryTitle}>{itinerary.name}</Text>
						<Text style={styles.itineraryUser}>{itinerary.userName}</Text>
						<View style={styles.rowBox}>
							<MaterialCommunityIcons name="cards-heart" size={24} color="black" />
							<Text>{itinerary.likes.length}</Text>
						</View>
						<View style={styles.rowBox}>
							<MaterialCommunityIcons name="clock-time-five-outline" size={24} color="black" />
							<Text>{itinerary.duration}</Text>
						</View>
					</View>
				</View>
				<Text>Price: {price}</Text>
				<View style={styles.rowBox}>
					{itinerary.hashtags.map((element,index) => <Text key={index} style={styles.hashtags}>{element}</Text>)}
				</View>
				<View style={styles.buttonsBox}>
				<Button
  				onPress={() => navigation.navigate("Activities")}
  				title="Activities"
  				color='rgb(55, 48, 163)'
				/>
				<Button
  				onPress={() => navigation.navigate("Comments")}
  				title="Comments"
  				color='rgb(55, 48, 163)'
				/>
				

				</View>
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
	},
	hashtags:{
		marginRight: 10,
		color: 'rgb(99, 102, 241)'
	},
	itineraryTitle:{
		fontWeight: 'bold',
	},
	itineraryUser:{
		color: 'rgb(55, 48, 163)'
	},
	buttonsBox:{
		marginTop: 10,
		justifyContent: 'space-around',
		flexDirection: "row",
    flexWrap: "wrap",
	}
});
