import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import Images from '../../constants/images';
import colors from '../../constants/colors';

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

const index = () => {
  return (
    <View style={styles.slide} level={20}>
      <Text category="h1" style={styles.text}>
        FaleMais
      </Text>
      <Text category="h5" style={styles.text}>
        Planos de Telefonia
      </Text>

      <Image
        style={{
          width: 150,
          height: 50,
          resizeMode: 'stretch',
          position: 'absolute',
          bottom: 50,
        }}
        source={Images.vizerLogo}
      />
    </View>
  );
};

export default index;
