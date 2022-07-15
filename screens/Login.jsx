import React, {useState} from 'react'
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<Logo />
			<TextInput
        style={styles.form}
        onChangeText={setEmail}
        value={email}
        placeholder="Email address"
      />
			<TextInput
        style={styles.form}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
				secureTextEntry={true}
      />
			<Button
        title="Log In"
        onPress={() => Alert.alert('Simple Button pressed')}
				color="#111827"      
			/>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Don't have an account?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("Signup")} >
					<Text style={styles.link}>Sign Up</Text>		
				</TouchableOpacity>
			</View>
			
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
	form:{
		marginBottom: 20,
		backgroundColor: 'white',
		padding: 10,
		paddingLeft: 10,
		borderRadius: 30,
		width: '90%',
	},
	textContainer: {
		marginTop: 10,
		flexDirection: "row",
    flexWrap: "wrap",
	},
	text:{
		color: 'gray',
	},
	link:{
		color: 'rgb(94, 234, 212)',
		marginLeft: 10,
	}
});