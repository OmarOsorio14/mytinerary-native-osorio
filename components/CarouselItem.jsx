import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../styles/carousel';

function CarouselItem({ item, index }, parallaxProps) {
  return (
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          //source={{ uri: item.source }} /* the source of the image */
          //containerStyle={styles.imageContainer}
          {...parallaxProps} /* pass in the necessary props */ 
        />
				<ImageBackground source={{ uri: item.image }} resizeMode="cover" style={styles.image}>
					<View style={styles.texContainer}>
						<Text style={styles.ItemCity} numberOfLines={1}>
											{item.name}
						</Text>
						<Text style={styles.ItemCountry} numberOfLines={1}>
							{item.country}
						</Text>
					</View>
				</ImageBackground>
			</SafeAreaView>	
					);
				}
				
				export default CarouselItem;