import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import TextTitle from '../TextTitle';
import colors from '../../../../styles/colors';

const index = ({ children }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black[1],
        height: '15%',
      }}
    >
      <TextTitle category="h1" style={{ marginBottom: 20, fontWeight: 'bold' }}>
        {children}
      </TextTitle>
    </View>
  );
};

export default index;

index.propTypes = {
  children: PropTypes.node.isRequired,
};
