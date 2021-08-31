import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const Profile = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
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

Profile.propTypes = {};

export default Profile;
