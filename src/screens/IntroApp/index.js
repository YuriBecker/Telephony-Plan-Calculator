import Swiper from 'react-native-swiper';
import React from 'react';
import { Text } from '@ui-kitten/components';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import colors from '../../styles/colors';

const SwiperComponent = ({ navigation }) => {
  return (
    <Swiper
      showsButtons
      loop={false}
      activeDotColor={colors.primary}
      dotColor={colors.grey}
      rightTextColor="white"
      nextButton={
        <Text
          style={{
            color: colors.primary,
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          {'>'}
        </Text>
      }
      prevButton={
        <Text
          style={{
            color: colors.primary,
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          {'<'}
        </Text>
      }
    >
      <Slide1 />
      <Slide2 navigation={navigation} />
    </Swiper>
  );
};

export default SwiperComponent;
