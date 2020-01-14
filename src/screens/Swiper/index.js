import Swiper from 'react-native-swiper';
import React from 'react';
import Slide1 from '../../components/Slide1';
import Slide2 from '../../components/Slide2';

const SwiperComponent = ({ navigation }) => {
  return (
    <Swiper
      showsButtons
      loop={false}
      activeDotColor="white"
      rightTextColor="white"
    >
      <Slide1 />
      <Slide2 navigation={navigation} />
    </Swiper>
  );
};

export default SwiperComponent;
