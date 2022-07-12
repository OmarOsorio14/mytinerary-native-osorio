import { Dimensions } from "react-native";
import {useState, useRef} from 'react';
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import { View } from "react-native"
import styles from "../styles/carousel";



const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {

	const [slideIndex, setSlideIndex] = useState(0);
	const isCarousel = useRef(null);

  const settings = {
    sliderWidth: width,
		ref:isCarousel,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
		onSnapToItem: (index) => setSlideIndex(index),
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };

  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
}