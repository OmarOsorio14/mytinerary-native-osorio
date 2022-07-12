import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import CustomSlider from './components/CustomSlider';
import data from './components/data'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/home_background.jpg')} />
      <StatusBar style="auto" />
			<View>
      <CustomSlider data={data} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0c9',
  }
});
