import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import colors from '../../styles/colors';
import DDDsSelect from './components/dddsSelect';
import DurationTimeSelect from './components/durationTimeSelect';
import PlanSelect from './components/planSelect';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
});

const index = ({ navigation }) => {
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
        >
          <View style={styles.container}>
            <DDDsSelect />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Tempo Ligação"
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
          nextBtnText="Continuar"
          previousBtnText="Voltar"
        >
          <View style={styles.container}>
            <DurationTimeSelect />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Plano"
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
          nextBtnText="Continuar"
          previousBtnText="Voltar"
          finishBtnText="Comparar"
          onSubmit={() => navigation.navigate('Result')}
        >
          <View style={styles.container}>
            <PlanSelect />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default index;
