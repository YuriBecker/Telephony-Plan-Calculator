import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import TextTitle from '../TextTitle';
import colors from '../../../../styles/colors';

const index = ({ text, price, negative, containerStyle }) => {
  const newStyle = negative ? colors.red : colors.primary;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderBottomColor: newStyle,
          borderRadius: 8,
          borderBottomWidth: 3,
          padding: 5,
        },
        containerStyle,
      ]}
    >
      <TextTitle style={{ color: newStyle }} category="h3">
        {text}
      </TextTitle>
      <TextTitle
        style={{ marginLeft: 20, color: newStyle, fontWeight: 'bold' }}
        category="h3"
      >
        {`R$ ${price}`}
      </TextTitle>
    </View>
  );
};

export default index;

index.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  negative: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
};

index.defaultProps = {
  negative: false,
  containerStyle: {},
};
