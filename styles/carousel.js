import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,

  },
  item: {
    width: '100%',
    height: screenWidth - 20, //height will be 20 units less than screen width.
  },
	ItemCity: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},
	ItemCountry: {
		color: 'white',
		fontSize: 15
	},
	image: {
    flex: 1,
    justifyContent: "flex-end",
		marginBottom: Platform.select({ ios: 0, android: 1 })
  },
  
	texContainer:{
		alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: 'rgba(63, 98, 18, 0.7)',
		padding: 5
	},
});
export default styles;