import React, {useState} from 'react'
import { StyleSheet, Text,ScrollView, View, TextInput, Image,TouchableOpacity} from 'react-native';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons'; 
export default function Comments({route}) {
	const  comments = route.params.comments;
	const [comment, setComment] = useState("");


	return (
		<View style={styles.container}>
			<ScrollView style={styles.scroll}>
			{comments.map((comment) =><View style={styles.rowBox} key={comment._id}>
				<Image  style={styles.user} source={{ uri: comment.userId.photo }}/>
				<View>
					<Text style={styles.text}>{comment.comment}</Text>
					<Text>{moment(comment.date).fromNow()}</Text>
				</View>

			</View>)}
			</ScrollView>
			<View style={styles.commentBox}>
			<TextInput
        style={styles.input}
        onChangeText={setComment}
        value={comment}
      />
			<TouchableOpacity onPress={() => setComment("")} >
				<FontAwesome name="send" size={28} color="rgb(5, 150, 105)" />				
			</TouchableOpacity>
			</View>
			
			
		</View>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0c9',
		padding: 10,
  },
	scroll:{
		marginBottom: 80,
	},
	user:{
		width: 80,
    height: 80,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgb(99, 102, 241)",
		marginRight: 4,
	},
	rowBox:{
		width: '90%',
		marginTop: 10,
		flexDirection: "row",
	},
	text:{
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		borderBottomLeftRadius: 0,
	},
	input:{
		marginBottom: 20,
		backgroundColor: 'white',
		padding: 10,
		paddingLeft: 10,
		borderRadius: 30,
		width: '90%',
		marginRight: 10,
	},
	commentBox:{
		paddingLeft: 10,
		flex: 1,
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
	}

});
