import React from 'react';
import { StatusBar } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { mapping, light as lightTheme } from '@eva-design/eva';
import Colors from './constants/colors';
import Routes from './navigation';
import appTheme from './styles/custom-theme.json';

const theme = { ...lightTheme, ...appTheme };

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <StatusBar backgroundColor={Colors.green[1]} barStyle="dark-content" />
        <Routes />
      </ApplicationProvider>
    </>
  );
};

export default App;
