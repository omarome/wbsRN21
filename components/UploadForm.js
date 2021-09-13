import React from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'react-native-elements';

const handleInputChange = () => {};

const UploadForm = ({title, handleSubmit}) => {
  return (
    <>
      <Input
        autoCapitalize="none"
        placeholder="title"
        onChangeText={(txt) => handleInputChange('title', txt)}
      />
      <Input
        autoCapitalize="none"
        placeholder="description"
        onChangeText={(txt) => handleInputChange('description', txt)}
      />

      <Button raised title={title} onPress={handleSubmit} />
    </>
  );
};

UploadForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UploadForm;
