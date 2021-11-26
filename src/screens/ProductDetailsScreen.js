import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonUxStyles, {
  APP_MAIN_COLOR_RED,
  APP_SIMPLE_BUTTON_COLOR_BLUE,
} from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetailsScreen = ({route}) => {
  const product = route.params;
  const [likeIcon, setLikeIcon] = useState('favorite-outline');
  handleLike = () => {
    likeIcon === 'favorite-outline'
      ? setLikeIcon('favorite')
      : setLikeIcon('favorite-outline');
  };
  return (
    <SafeAreaView style={commonUxStyles.mainContainer}>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollContainer}>
        <View>
          <Image source={require('../assets/shoe2.jpg')} />
          <Text
            style={{
              marginHorizontal: 10,
              marginVertical: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Hair oil
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              marginVertical: 5,
              fontWeight: '500',
            }}>
            1 Litre
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              marginVertical: 5,
              fontSize: 20,
              fontWeight: '600',
            }}>
            Rs.100
          </Text>
          <View
            style={{
              position: 'absolute',
              right: 15,
              top: 230,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.likeButton}>
              <TouchableOpacity onPress={handleLike}>
                <Icon
                  size={26}
                  color={APP_MAIN_COLOR_RED}
                  name={likeIcon}></Icon>
              </TouchableOpacity>
            </View>
            <Text>3.5M</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 5,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: 'grey',
          }}>
          <View style={styles.detailsContainer}>
            <Text style={styles.label}>Posted by</Text>
            <Text style={{color: APP_SIMPLE_BUTTON_COLOR_BLUE}}>
              {product.name}
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.label}>Posted on </Text>
            <Text>{product.timestamp}</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              marginHorizontal: 10,
              marginVertical: 5,
              color: APP_MAIN_COLOR_RED,
            }}>
            Product Description
          </Text>
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>Posted by</Text>
            <Text style={{fontSize: 13}}>{product.name}</Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>Posted on </Text>
            <Text style={{fontSize: 13}}>{product.timestamp}</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 5,
            borderColor: 'grey',
            borderTopWidth: StyleSheet.hairlineWidth,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              marginVertical: 5,
              marginHorizontal: 10,
              color: APP_MAIN_COLOR_RED,
            }}>
            Reviews
          </Text>
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>Anonymous:</Text>
            <Text style={{fontSize: 13}}>
              Product was awesome. Liked so much!
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>Anonymous:</Text>
            <Text style={{fontSize: 13}}>
              Product not so great. Waste of money.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    width: '20%',
    marginRight: 5,
    textAlign: 'right',
    fontWeight: '600',
  },
  likeButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
