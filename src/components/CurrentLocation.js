import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, StyleSheet} from 'react-native';
import {APP_MAIN_COLOR_RED} from '../styles';

const CurrentLocation = location => {
  return (
    <View style={styles.container}>
      <Icon color={APP_MAIN_COLOR_RED} name="location-pin" size={28} />
      <Text placeholder="No current location">{/* {location} */}Bengaluru</Text>
    </View>
  );
};

export default CurrentLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
