import React from 'react';
import { Text } from '@ui-kitten/components';
import ProgressCircle from 'react-native-progress-circle';
import PropTypes from 'prop-types';
import { ViewPropTypes, View } from 'react-native';
import colors from '../../../../styles/colors';

const index = ({ percentage, radius, style }) => {
  return (
    <View style={style}>
      <ProgressCircle
        percent={percentage}
        radius={radius}
        borderWidth={4}
        color={colors.primary}
        shadowColor={colors.grey}
        bgColor={colors.black[1]}
        style={style}
      >
        <Text
          style={{ fontSize: 20, color: colors.primary, fontWeight: 'bold' }}
        >
          {`${percentage}%`}
        </Text>
      </ProgressCircle>
    </View>
  );
};

export default index;

index.propTypes = {
  percentage: PropTypes.number.isRequired,
  radius: PropTypes.number,
  style: ViewPropTypes.style,
};

index.defaultProps = {
  radius: 50,
  style: {},
};
