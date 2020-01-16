import React from 'react';
import { Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { PhoneIcon } from '../Icons/Icons';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

const index = ({ titleCategory, iconWidth, iconHeight }) => {
  return (
    <View style={styles.container}>
      <Text category={titleCategory} style={styles.text}>
        FaleMais
      </Text>
      <PhoneIcon
        fill={colors.primary}
        width={iconWidth}
        height={iconHeight}
        style={{ marginTop: 5, marginLeft: 5 }}
      />
    </View>
  );
};

export default index;

index.propTypes = {
  titleCategory: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};

index.defaultProps = {
  titleCategory: 'h1',
  iconWidth: 38,
  iconHeight: 38,
};
