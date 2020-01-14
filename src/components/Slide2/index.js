import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';
import colors from '../../constants/colors';
import { NextIcon } from '../Icons';

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green[1],
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

const index = ({ navigation }) => {
  return (
    <View style={styles.slide}>
      <Text category="h2" style={styles.text}>
        Qual o seu nome?
      </Text>
      <Input
        placeholder="Ex: Yuri"
        size="small"
        style={{ width: '60%', margin: 20 }}
      />
      <Button
        style={{ marginTop: 10 }}
        icon={NextIcon}
        onPress={() => navigation.navigate('MainApp')}
      >
        Entrar
      </Button>
    </View>
  );
};

export default index;
