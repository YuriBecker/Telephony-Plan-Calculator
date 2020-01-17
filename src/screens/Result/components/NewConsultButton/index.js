import React from 'react';
import { Button } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';

const index = ({ onPress, children, size, style }) => {
  return (
    <Button onPress={onPress} size={size} style={style}>
      {children}
    </Button>
  );
};

export default index;

index.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

index.defaultProps = {
  size: 'large',
  style: {},
};
