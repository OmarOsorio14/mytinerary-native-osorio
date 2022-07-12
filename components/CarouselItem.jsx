import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView, ImageBackground } from 'react-native';
import styles from './styles';

function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable onPress={() => alert('Image description:' + item.description)}>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          //source={{ uri: item.source }} /* the source of the image */
          //containerStyle={styles.imageContainer}
          {...parallaxProps} /* pass in the necessary props */ 
        />
				<ImageBackground source={{ uri: item.source }} resizeMode="cover" style={styles.image}>
					<View style={styles.texContainer}>
						<Text style={styles.ItemCity} numberOfLines={1}>
											{item.title}
						</Text>
						<Text style={styles.ItemCountry} numberOfLines={1}>
							{item.title}
						</Text>
					</View>
				</ImageBackground>
			
							</SafeAreaView>
						</Pressable>
					);
				}
				
				export default CarouselItem;