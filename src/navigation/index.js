import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import IntroApp from '../screens/IntroApp';
import Result from '../screens/Result';
import StepForm from '../screens/StepForm';

const AppNavigator = createSwitchNavigator(
  {
    SliderIntro: {
      screen: IntroApp,
    },
    MainApp: createSwitchNavigator(
      {
        Form: {
          screen: StepForm,
        },
        Result: {
          screen: Result,
        },
      },
      {
        initialRouteName: 'Form',
      }
    ),
  },
  {
    initialRouteName: 'SliderIntro',
  }
);

export default createAppContainer(AppNavigator);
