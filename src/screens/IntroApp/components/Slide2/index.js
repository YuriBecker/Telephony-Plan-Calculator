import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import colors from '../../../../styles/colors';
import { NextIcon } from '../../../../components/Icons/Icons';
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

  const handleSubmit = () => {
    if (value) {
      dispatch(userActions.setName(value));
      navigation.navigate('MainApp');
    } else {
      showMessage({
        message: 'Digite seu nome para continuar!',
        type: 'danger',
        floating: true,
      });
      setError(true);
    }
  };

  return (
    <View style={styles.slide}>
      <Text category="h2" style={styles.text}>
        Qual o seu nome?
      </Text>
      <Input
        placeholder="Digite aqui"
        size="small"
        style={{ width: '60%', margin: 20, backgroundColor: colors.black[1] }}
        textStyle={{ color: colors.primary }}
        value={value}
        status={error && 'danger'}
        onChangeText={setValue}
        onSubmitEditing={() => handleSubmit()}
      />
      <Button
        style={{ marginTop: 10 }}
        icon={NextIcon}
        onPress={() => handleSubmit()}
      >
        Entrar
      </Button>
    </View>
  );
};

export default index;
