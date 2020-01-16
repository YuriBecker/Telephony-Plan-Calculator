import React from 'react';
import { StatusBar } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import FlashMessage from 'react-native-flash-message';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { Provider } from 'react-redux';
import Colors from './styles/colors';
import Routes from './navigation';
import appTheme from './styles/custom-theme.json';
import store from './store';

const theme = { ...lightTheme, ...appTheme };

const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <StatusBar backgroundColor={Colors.black[1]} barStyle="ligth-content" />
        <Routes />
        <FlashMessage position="top" animated />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
