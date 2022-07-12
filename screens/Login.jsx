import React from 'react'
import { StyleSheet, Text, ScrollView, Image, Dimensions, View, TextInput} from 'react-native';
import Logo from '../components/Logo';

export default function Login() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hola</Text>
			<Logo />
			<Text style={styles.text}>Hola</Text>
			
		</View>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0c9',
		alignItems: 'center',
    justifyContent: 'center',
  },
	text:{
		marginTop: 20,
		backgroundColor: 'black'
	}
});