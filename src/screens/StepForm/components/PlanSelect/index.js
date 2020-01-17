import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import telephonyPlans from '../../../../constants/telephonyPlans';
import colors from '../../../../styles/colors';

const index = ({ selectedPlan, setSelectedPlan }) => {
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
        Qual o plano escolhido?
      </Text>
      <Layout
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          margin: 15,
          backgroundColor: colors.black[1],
        }}
      >
        {telephonyPlans.map(plan => (
          <Button
            previousBtnText="Voltar"
            onPress={() => setSelectedPlan(plan.text)}
            key={plan.text}
            style={{ marginVertical: 15 }}
            size="large"
            appearance={plan.text === selectedPlan ? 'outline' : 'filled'}
          >
            {plan.text}
          </Button>
        ))}
      </Layout>
    </>
  );
};

export default index;

index.propTypes = {
  selectedPlan: PropTypes.string,
  setSelectedPlan: PropTypes.func.isRequired,
};

index.defaultProps = {
  selectedPlan: null,
};
