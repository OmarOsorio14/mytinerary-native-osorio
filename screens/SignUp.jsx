import React, {useState} from 'react'
import { StyleSheet, Text, Button, View, TextInput, Pressable} from 'react-native';
import Logo from '../components/Logo';
import GoogleLogIn from '../components/GoogleLogIn';
export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confrimPassword, setConfirmPassword] = useState("");
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [photo, setPhoto] = useState("");






	return (
		<View style={styles.container}>
			<Logo />
			<TextInput
        style={styles.form}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
			<TextInput
        style={styles.form}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
			<TextInput
        style={styles.form}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
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
				<TextInput
        style={styles.form}
        onChangeText={setConfirmPassword}
        value={confrimPassword}
        placeholder="Confirm Password"
				secureTextEntry={true}
      />
			<TextInput
        style={styles.form}
        onChangeText={setPhoto}
        value={photo}
        placeholder="Photo Url"
      />
			<Button
        title="Sing Up"
        onPress={() => Alert.alert('Simple Button pressed')}
				color="#111827"      
			/>
			<View style={styles.textContainer}>
				<Text style={styles.text}>do you already have an account created?</Text>
				<Pressable onPress={() => alert('hola')}>
					<Text style={styles.link}>Log In</Text>		
				</Pressable>
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