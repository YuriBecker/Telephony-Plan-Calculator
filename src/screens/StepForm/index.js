import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import colors from '../../styles/colors';
import DDDsSelect from './components/DDDsSelect';
import DurationTimeSelect from './components/DurationTimeSelect';
import PlanSelect from './components/PlanSelect';
import { actions as formActions } from '../../store/ducks/form';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
});

const index = ({ navigation }) => {
  const [dddError, setDddError] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destiny, setDestiny] = useState(null);
  const [duration, setDuration] = useState(1);
  const [durationError, setDurationError] = useState(false);
  const [plan, setPlan] = useState(null);
  const [planError, setPlanError] = useState(false);

  const dispatch = useDispatch();

  const hasDddError = () => {
    if (origin === null || destiny === null) {
      setDddError(true);
      if (origin === null)
        showMessage({
          message: 'Escolha um DDD de origem!',
          type: 'danger',
          floating: true,
        });
      else if (destiny === null)
        showMessage({
          message: 'Escolha um DDD de destino!',
          type: 'danger',
          floating: true,
        });
      return true;
    }
    setDddError(false);
    return false;
  };

  const hasPlanError = () => {
    if (plan === null) {
      setPlanError(true);
      showMessage({
        message: 'Escolha um plano da FaleMais!',
        type: 'danger',
        floating: true,
      });
      return true;
    }
    setPlanError(false);
    return false;
  };

  const hasDurationError = () => {
    if (duration === 0) {
      setDurationError(true);
      showMessage({
        message: 'A duração da chamada deve ser maior que zero!',
        type: 'danger',
        floating: true,
      });
      return true;
    }
    setDurationError(false);
    return false;
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.black[1] }}>
      <ProgressSteps
        labelColor={colors.grey}
        disabledStepNumColor={colors.black[1]}
        activeStepNumColor={colors.primary}
        progressBarColor={colors.grey}
        disabledStepIconColor={colors.grey}
        activeStepIconColor={colors.black[1]}
      >
        <ProgressStep
          label="DDDs"
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
          nextBtnText="Continuar"
          previousBtnDisabled
          errors={dddError}
          onNext={() => {
            if (!hasDddError()) {
              dispatch(formActions.setOriginDDD(origin));
              dispatch(formActions.setDestinyDDD(destiny));
            }
          }}
        >
          <View style={styles.container}>
            <DDDsSelect
              origin={origin}
              setOrigin={setOrigin}
              destiny={destiny}
              setDestiny={setDestiny}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Tempo Ligação"
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
          nextBtnText="Continuar"
          previousBtnText="Voltar"
          onNext={() => {
            if (!hasDurationError()) {
              dispatch(formActions.setDuration(duration));
            }
          }}
          errors={durationError}
        >
          <View style={styles.container}>
            <DurationTimeSelect value={duration} setValue={setDuration} />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Plano"
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
          nextBtnText="Continuar"
          previousBtnText="Voltar"
          finishBtnText="Comparar"
          errors={planError}
          onSubmit={() => {
            if (!hasPlanError()) {
              dispatch(formActions.setPlan(plan));
              navigation.navigate('Result');
            }
          }}
        >
          <View style={styles.container}>
            <PlanSelect selectedPlan={plan} setSelectedPlan={setPlan} />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default index;
