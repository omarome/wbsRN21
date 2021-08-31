import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import {uploadsUrl} from '../utils/variables';
import {DateTime} from 'luxon';

const Single = ({route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{params.title}</Text>
      <Image
        style={{width: 200, height: 200}}
        source={{uri: uploadsUrl + params.filename}}
      />
      <Text>{params.description}</Text>
      <Text>{params.user_id}</Text>
      <Text>
        {DateTime.fromISO(params.time_added)
          .setLocale('fi')
          .toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})}
      </Text>
      <Text>{params.media_type}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Single;
