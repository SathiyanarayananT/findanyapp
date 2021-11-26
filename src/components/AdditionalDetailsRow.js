import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const AdditionalDetailsRow = ({index, addKey, addValue}) => {
  return (
    <View style={styles.additionalDetailsRowContainer}>
      <View style={styles.tableColumnContainer}>
        <TextInput
          placeholder="Name"
          onChangeText={text => addKey(index, text)}
        />
      </View>
      <View style={[styles.tableColumnContainer, {marginLeft: 5}]}>
        <TextInput
          placeholder="Description"
          onChangeText={text => addValue(index, text)}
        />
      </View>
    </View>
  );
};

export default AdditionalDetailsRow;

const styles = StyleSheet.create({
  additionalDetailsRowContainer: {
    width: '80%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tableColumnContainer: {
    width: '50%',
    height: 40,
    borderRadius: 15,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
  },
});
