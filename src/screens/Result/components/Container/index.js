import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../../../styles/colors';

const index = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.black[1],
        padding: 30,
      }}
    >
      {children}
    </View>
  );
};

export default index;

index.propTypes = {
  children: PropTypes.node.isRequired,
};
