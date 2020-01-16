import React from 'react';
import { Layout, Button, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import dddList from '../../../../constants/dddList';
import colors from '../../../../styles/colors';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 3,
  },
  title: {
    textAlign: 'center',
    marginVertical: 15,
    color: colors.primary,
  },
});

const index = ({ origin, setOrigin, destiny, setDestiny }) => {
  return (
    <>
      <Text category="h5" style={styles.title}>
        DDD Origem
      </Text>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 15,
          backgroundColor: colors.black[1],
        }}
      >
        {dddList.map(ddd => (
          <Button
            style={styles.button}
            onPress={() => {
              setOrigin(ddd);
              setDestiny(null);
            }}
            key={ddd}
            appearance={origin === ddd ? 'outline' : 'filled'}
          >
            {ddd}
          </Button>
        ))}
      </Layout>

      <Text category="h5" style={styles.title}>
        DDD Destino
      </Text>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 15,
          backgroundColor: colors.black[1],
        }}
      >
        {dddList.map(ddd => (
          <Button
            previousBtnText="Voltar"
            style={styles.button}
            onPress={() => setDestiny(ddd)}
            key={ddd}
            appearance={destiny === ddd ? 'outline' : 'filled'}
            disabled={
              (!origin && true) ||
              ddd === origin ||
              (origin !== '011' && ddd !== '011')
            }
          >
            {ddd}
          </Button>
        ))}
      </Layout>
    </>
  );
};

export default index;

index.propTypes = {
  origin: PropTypes.string,
  setOrigin: PropTypes.func.isRequired,
  destiny: PropTypes.string,
  setDestiny: PropTypes.func.isRequired,
};

index.defaultProps = {
  origin: null,
  destiny: null,
};
