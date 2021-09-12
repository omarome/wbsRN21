import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {DateTime} from 'luxon';
import {Card, ListItem, Text} from 'react-native-elements';

const Single = ({route}) => {
  const {params} = route;
  return (
    <Card>
      <Card.Title h4>{params.title}</Card.Title>
      <Card.Title>
        {DateTime.fromISO(params.time_added)
          .setLocale('fi')
          .toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})}
      </Card.Title>
      <Card.Divider />
      <Card.Image
        source={{uri: uploadsUrl + params.filename}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Card.Divider />
      <Text style={styles.description}>{params.description}</Text>
      <ListItem>
        <Text>Ownername</Text>
      </ListItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  description: {
    marginBottom: 10,
  },
});

Single.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Single;
