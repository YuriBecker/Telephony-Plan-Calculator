/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PercentageCircle from './components/PercentageCircle';
import Container from './components/Container';
import TextTitle from './components/TextTitle';
import NewConsultButton from './components/NewConsultButton';
import PriceInfo from './components/PriceInfo';
import priceWithPlanNotZero from '../../utils/priceWithPlanNotZero';
import finalPriceWithPlan from '../../utils/finalPriceWithPlan';
import finalPriceWithoutPlan from '../../utils/finalPriceWithoutPlan';
import Header from './components/Header';

const index = ({ navigation }) => {
  const [percentage, setPercentage] = useState(0);
  const [priceWithPlan, setPriceWithPlan] = useState(0);
  const [priceWithoutPlan, setPriceWithoutPlan] = useState(0);

  const { name, origin, destiny, plan, duration } = useSelector(state => ({
    origin: state.form.origin,
    destiny: state.form.destiny,
    duration: state.form.duration,
    plan: state.form.plan,
    name: state.user.name,
  }));

  useEffect(() => {
    if (priceWithPlanNotZero(duration, plan)) {
      setPriceWithPlan(finalPriceWithPlan(duration, plan, origin, destiny));
    }
    setPriceWithoutPlan(finalPriceWithoutPlan(duration, origin, destiny));
  }, []);

  useEffect(() => {
    setPercentage(Math.floor((1 - priceWithPlan / priceWithoutPlan) * 100));
  }, [priceWithPlan, priceWithoutPlan]);

  return (
    <>
      <Header>Resultado</Header>
      <Container>
        <PriceInfo
          text="Com o plano:"
          price={priceWithPlan.toFixed(2)}
          containerStyle={{ marginBottom: 30 }}
          negative={priceWithPlan > priceWithoutPlan}
        />
        <PriceInfo
          text="Sem o plano:"
          price={priceWithoutPlan.toFixed(2)}
          negative={priceWithoutPlan > priceWithPlan}
          containerStyle={{ marginBottom: 20 }}
        />
        <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
          <TextTitle
            category="h4"
            style={{ marginBottom: 20, fontWeight: 'bold' }}
          >
            {`${name}, ${
              priceWithPlan > priceWithoutPlan
                ? 'experimente um plano com maior capacidade!'
                : 'você economiza'
            }`}
          </TextTitle>
          {priceWithPlan < priceWithoutPlan && (
            <>
              {priceWithPlanNotZero(duration, plan) && !isNaN(percentage) ? (
                <PercentageCircle
                  percentage={percentage}
                  style={{ marginBottom: 40 }}
                />
              ) : (
                <TextTitle category="h3" style={{ fontWeight: 'bold' }}>
                  R${' '}
                  {(priceWithoutPlan - priceWithPlan)
                    .toFixed(2)
                    .replace('.', ',')}
                </TextTitle>
              )}
            </>
          )}
        </View>

        <NewConsultButton
          size="large"
          onPress={() => navigation.navigate('Form')}
          style={{ marginBottom: 20 }}
        >
          Nova Consulta
        </NewConsultButton>
      </Container>
    </>
  );
};

export default index;
