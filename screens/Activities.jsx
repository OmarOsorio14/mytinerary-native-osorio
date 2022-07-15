import React from 'react'
import { StyleSheet, Text, Button,ScrollView, View, TextInput, Pressable} from 'react-native';


export default function Activities() {
	return (
		<ScrollView style={styles.container}></ScrollView>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
});
