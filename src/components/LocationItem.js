import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const LocationItem = props => {
  let _handlePress = async () => {
    const res = await props.fetchDetails(props.place_id);

    Alert.alert('result: ', JSON.stringify(res.geometry.location));
  };

  return (
    <TouchableOpacity style={styles.root} onPress={_handlePress}>
      <Text>{props.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    width: 300,
  },
});
export default LocationItem;
