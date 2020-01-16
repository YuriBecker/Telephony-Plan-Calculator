import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import { Text } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import colors from '../../../../styles/colors';

const index = ({ value, setValue }) => {
  return (
    <>
      <Text
        category="h5"
        style={{
          textAlign: 'center',
          marginVertical: 15,
          color: colors.primary,
        }}
      >
        Quantos minutos de ligação?
      </Text>
      <InputSpinner
        max={999}
        step={1}
        colorMax={colors.primary}
        colorMin={colors.primary}
        value={value}
        onChange={setValue}
        color={colors.primary}
        inputStyle={{ color: colors.primary }}
        fontSize={18}
      />
    </>
  );
};

export default index;

index.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
