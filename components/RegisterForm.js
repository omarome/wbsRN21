import React from 'react';
import PropTypes from 'prop-types';
import { Alert, View } from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import { Button, Input } from 'react-native-elements';
import { useUser } from '../hooks/ApiHooks';

const RegisterForm = ({ navigation }) => {
    const { inputs, handleInputChange } = useSignUpForm();
    const { register } = useUser();

    const doRegister = async () => {
        try {
            const registerInfo = await register(inputs);
            if (registerInfo) {
                Alert.alert(registerInfo.message);
            }
        } catch (e) {
            Alert.alert(e.message);
        }
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
            <Input
                autoCapitalize="none"
                placeholder="email"
                onChangeText={(txt) => handleInputChange('email', txt)}
            />
            <Input
                autoCapitalize="none"
                placeholder="full name"
                onChangeText={(txt) => handleInputChange('full_name', txt)}
            />
            <Button title="Register!" onPress={doRegister} />
        </View>
    );
};

RegisterForm.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default RegisterForm;