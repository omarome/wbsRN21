import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, Alert} from 'react-native';
import UploadForm from '../components/UploadForm';
import useUploadForm from '../hooks/UploadHooks';
import {useMedia} from '../hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';

const Modify = ({route}) => {
  const navigation = route.params.navigation;
  // const [image, setImage] = useState(require('../assets/icon.png'));
  const {inputs, handleInputChange, setInputs} = useUploadForm();
  const {uploadMedia, loading} = useMedia();
  const {update, setUpdate} = useContext(MainContext);

  setInputs({
    title: route.params.singleMedia.title,
    description: route.params.singleMedia.description,
  });

  const doUpload = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const result = await uploadMedia(inputs, userToken);
      if (result.message) {
        Alert.alert(
          'Upload',
          result.message,
          [
            {
              text: 'Ok',
              onPress: () => {
                setUpdate(update + 1);
                navigation.navigate('Home');
              },
            },
          ],
          {cancelable: false}
        );
      }
    } catch (e) {
      console.log('doUpload error', e.message);
    }
  };

  return (
    <View>
      <UploadForm
        title="Upload"
        handleSubmit={doUpload}
        handleInputChange={handleInputChange}
        loading={loading}
      />
      {loading && <ActivityIndicator />}
    </View>
  );
};

Modify.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Modify;
