import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import commonUxStyles, {
  APP_BG_COLOR_WHITE,
  APP_MAIN_COLOR_RED,
} from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductFeedItem = item => {
  const product = item.item;
  const [likeIcon, setLikeIcon] = useState('favorite-outline');
  // useEffect(() => {
  //   const isLiked = /* item.isLiked; */ false;
  //   setlikedProduct(isLiked);
  // }, []);
  handleLike = () => {
    likeIcon === 'favorite-outline'
      ? setLikeIcon('favorite')
      : setLikeIcon('favorite-outline');
  };
  return (
    <View style={styles.productFeedContainer}>
      <View style={commonUxStyles.mainContainer}>
        <Image
          style={styles.productImage}
          source={require('../assets/shoe2.jpg')}
        />
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productName}>Hair oil</Text>
          <Text style={styles.productPrice}>Rs.100/litre</Text>
        </View>
        <Text style={styles.timestamp}>{product.timestamp}</Text>
      </View>
      <Text style={styles.totalLikes}>3.5M</Text>
      <View style={styles.likeButton}>
        <TouchableOpacity onPress={handleLike}>
          <Icon size={26} color={APP_MAIN_COLOR_RED} name={likeIcon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductFeedItem;

const styles = StyleSheet.create({
  productFeedContainer: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: APP_BG_COLOR_WHITE,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 8,
    borderRadius: 15,
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    margin: 5,
  },
  productDetailsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 5,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productImage: {
    marginHorizontal: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {fontSize: 15},
  likeButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    right: 10,
    top: 175,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalLikes: {
    position: 'absolute',
    fontSize: 11,
    right: 20,
    top: 160,
  },
  timestamp: {
    marginBottom: 5,
    marginHorizontal: 20,
    fontSize: 11,
    color: '#C4C6CE',
  },
});
