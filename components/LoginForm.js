import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import useLoginForm from '../hooks/LoginHooks';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../hooks/ApiHooks';

const LoginForm = ({navigation}) => {
  const {inputs, handleInputChange} = useLoginForm();
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {login} = useLogin();

  const doLogin = async () => {
    try {
      const loginInfo = await login(inputs);
      console.log('doLogin response', loginInfo);
      await AsyncStorage.setItem('userToken', loginInfo.token);
      // TODO: Save user info (loginInfo.user) to MainContext
      setUser(loginInfo.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.log('doLogin error', error);
    }
    // navigation.navigate('Home');
  };

  return (
    <View>
      <Input
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <Input
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />

      <Button raised title="Login!" onPress={doLogin} />
    </View>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginForm;
