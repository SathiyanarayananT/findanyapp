import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonUxStyles from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AttachPhotos = ({images, addImages}) => {
  const photo = (data, index) => {
    return (
      <View key={index}>
        <Image style={styles.photoStyle} source={{uri: data.path}} />
      </View>
    );
  };

  return (
    <View style={styles.customAttachPhotosContainer}>
      {images.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          scrollEnabled={false}>
          <View style={styles.imagesView}>
            {images.map((value, index) => {
              return photo(value, index);
            })}
            <TouchableOpacity onPress={addImages}>
              <Icon name="edit" size={20} color="grey" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <TouchableOpacity style={styles.attachPhotos} onPress={addImages}>
          <Text style={commonUxStyles.innerTextColor}>To attach photos</Text>
          <Text style={commonUxStyles.simpleInlineButton}>Click here</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AttachPhotos;

const styles = StyleSheet.create({
  customAttachPhotosContainer: {
    flex: 1,
    width: '80%',
    height: 90,
    backgroundColor: 'gainsboro',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoStyle: {
    width: 40,
    height: 40,
    margin: 2,
  },
  imagesView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  attachPhotos: {
    width: '80%',
    height: '20%',
    backgroundColor: 'gainsboro',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
