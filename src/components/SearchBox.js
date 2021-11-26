import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {APP_BG_COLOR_GREY, APP_MAIN_COLOR_RED} from '../styles';

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <TextInput autoFocus placeholder="Search" style={styles.searchField} />
      <TouchableOpacity style={styles.searchButton}>
        <Icon name="search" size={25} color={APP_MAIN_COLOR_RED} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: APP_BG_COLOR_GREY,
    borderRadius: 25,
    marginTop: 50,
  },
  searchField: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    paddingLeft: 20,
  },
  searchButton: {width: '10%', alignSelf: 'center'},
});
