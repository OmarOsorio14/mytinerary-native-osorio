import React from 'react'
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function Hero() {
	return (
					<View style={styles.container}>
						<Text style={styles.title}>MyTinerary</Text>
						<Text style={styles.description}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
						<Pressable onPress={() => alert('hola')}>
							<LinearGradient colors={['#2ed2c0', '#15b8a6', '#0d9388']} style={styles.button}>
								<Text style={styles.textButton}>Dare to discover</Text>
							</LinearGradient>
						</Pressable>
						
						
					</View>
	)
}

const styles = StyleSheet.create({
  container: {
		alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: 'rgba(245, 158, 11, 0.35)',
		marginHorizontal: '5%',
		padding: 10

  },
	title:{
    fontWeight: 'bold',
    fontSize: 40,
	},
	description:{
		fontSize: 18,
		textAlign: 'center',
		marginBottom: 5
	},
	button:{
		padding: 10,
		borderRadius: 10
	},
	textButton:{
		color: 'white'
	}
		
});
