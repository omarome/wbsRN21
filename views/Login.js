import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../hooks/ApiHooks';

const Login = async (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  const {login} = useLogin();

  const logIn = async () => {
    const tokenFromAPI = await login(
      JSON.stringify({
        username: 'omar',
        password: 'salakala',
      })
    );
    await AsyncStorage.setItem('userToken', tokenFromAPI);
    setIsLoggedIn(true);
  };

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('token', userToken);
    if (userToken === 'abc') {
      setIsLoggedIn(true);
      props.navigation.navigate('Home');
    }
  };
  useEffect(() => {
    getToken();
    if (isLoggedIn) {
      props.navigation.navigate('Home');
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
