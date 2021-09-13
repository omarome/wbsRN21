import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import UploadForm from '../components/UploadForm';
import {Button, Image} from 'react-native-elements';

const doUpload = () => {};

const Upload = (props) => {
  return (
    <View>
      <Image
        source={{uri: '../assets/icon.png'}}
        style={{width: 400, height: 200}}
      />
      <Button title="Select media" />
      <UploadForm title="Upload" handleSubmit={doUpload} />
    </View>
  );
};

Upload.propTypes = {};

export default Upload;
