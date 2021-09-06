import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import { MainContext } from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native-elements';
import { useTag } from '../hooks/ApiHooks';
import { uploadsUrl } from '../utils/variables';

const Profile = (props) => {
  const { setIsLoggedIn, user } = useContext(MainContext);
  const [avatar, setAvatar] = useState('https://placekitten.com/400/400');

  const { getFilesByTag } = useTag();

  useEffect(() => {
    (async () => {
      const file = await getFilesByTag('avatar_674');
      console.log('file', file);
      setAvatar(uploadsUrl + file.pop().filename);
    })();
  }, []);

  const logout = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Image source={{ uri: avatar }} style={{ width: 300, height: 300 }} />
      <Text>{user.user_id}</Text>
      <Text>{user.username}</Text>
      <Text>{user.email}</Text>
      <Text>{user.full_name}</Text>
      <Button title={'Logout'} onPress={logout} />
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

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;