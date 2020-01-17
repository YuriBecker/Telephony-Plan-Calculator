import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import colors from '../../../../styles/colors';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: colors.primary,
  },
});

const index = ({ children, category, style }) => {
  return (
    <Text category={category} style={[styles.title, style]}>
      {children}
    </Text>
  );
};

export default index;

index.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string,
};

index.defaultProps = {
  category: 'h2',
};
