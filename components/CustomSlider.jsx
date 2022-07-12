import { Dimensions } from "react-native";
import {useState, useRef} from 'react';
import Carousel, {Pagination} from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import { View } from "react-native"
import styles from "./styles";



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
			<Pagination
        dotsLength={data.length}
        activeDotIndex={slideIndex}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#3e6316',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}