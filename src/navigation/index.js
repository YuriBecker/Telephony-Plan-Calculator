import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IntroApp from '../screens/IntroApp';
import Result from '../screens/Result';
import colors from '../styles/colors';
import StepForm from '../screens/StepForm';
import FaleMaisLogo from '../components/FaleMaisLogo';

const AppNavigator = createSwitchNavigator(
  {
    SliderIntro: {
      screen: IntroApp,
    },
    MainApp: createStackNavigator(
      {
        Form: {
          screen: StepForm,
        },
        Result: {
          screen: Result,
        },
      },
      {
        defaultNavigationOptions: {
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.black[1],
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <FaleMaisLogo titleCategory="h4" iconHeight={28} iconWidth={28} />
          ),
        },
      }
    ),
  },
  {
    initialRouteName: 'SliderIntro',
  }
);

export default createAppContainer(AppNavigator);
