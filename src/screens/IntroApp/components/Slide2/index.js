import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import colors from '../../../../styles/colors';
import { NextIcon } from '../../../../components/Icons';
import { actions as userActions } from '../../../../store/ducks/user';

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black[1],
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

const index = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  return (
    <View style={styles.slide}>
      <Text category="h2" style={styles.text}>
        Qual o seu nome?
      </Text>
      <Input
        placeholder="Digite aqui"
        size="small"
        style={{ width: '60%', margin: 20 }}
        value={value}
        status={error && 'danger'}
        onChangeText={setValue}
      />
      <Button
        style={{ marginTop: 10 }}
        icon={NextIcon}
        onPress={() => {
          if (value) {
            dispatch(userActions.setName(value));
            navigation.navigate('MainApp');
          } else {
            setError(true);
          }
        }}
      >
        Entrar
      </Button>
    </View>
  );
};

export default index;
