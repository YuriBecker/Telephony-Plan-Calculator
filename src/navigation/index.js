import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from '@ui-kitten/components';
import Swiper from '../screens/Swiper';
import colors from '../constants/colors';
import { NextIcon } from '../components/Icons';
import MainApp from '../screens/MainApp';

const Icone = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <Text category="h4" style={{ fontWeight: 'bold', color: colors.primary }}>
        FaleMais
      </Text>
      <NextIcon
        fill={colors.primary}
        name="phone-outline"
        width={28}
        height={28}
        style={{ marginTop: 2, marginLeft: 5 }}
      />
    </View>
  );
};

const AppNavigator = createSwitchNavigator(
  {
    SliderIntro: {
      screen: Swiper,
    },
    MainApp: createStackNavigator(
      {
        FaleMais: {
          screen: MainApp,
        },
      },
      {
        defaultNavigationOptions: {
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.green[1],
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerTitle: () => <Icone />,
        },
      }
    ),
  },
  {
    // CHANGE LATER
    initialRouteName: 'MainApp',
  }
);

export default createAppContainer(AppNavigator);
