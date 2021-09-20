import React from 'react';
import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types';

const MyFiles = ({navigation}) => {
  const {mediaArray} = useMedia(true);
  // console.log('MyFiles: mediaArray', mediaArray);
  return (
    <FlatList
      data={mediaArray.reverse()}
      renderItem={({item}) => (
        <ListItem
          singleMedia={item}
          navigation={navigation}
          showButtons={true}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

MyFiles.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyFiles;
