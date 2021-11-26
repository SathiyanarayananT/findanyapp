import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import commonUxStyles from '../styles';

const ProductListItem = item => {
  const product = item.item;
  const image = product.imageBinary
    ? {uri: 'data:image/png;base64,' + product.imageBinary}
    : require('../assets/google.png');
  return (
    <View style={styles.productFeedContainer}>
      <View style={commonUxStyles.mainContainer}>
        <View style={styles.productTitleContainer}>
          <View style={{padding: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 15, color: '#454d65'}}>
              {product.productName}
            </Text>
            <Text style={{fontSize: 9, color: '#C4C6CE'}}>
              {product.lastModifiedAt}
            </Text>
          </View>
        </View>
        <Text>{product.Text}</Text>
        <Image
          style={{height: 250, width: '100%', resizeMode: 'contain'}}
          source={image}></Image>
        <View></View>
      </View>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  productFeedContainer: {
    flex: 1,
    borderRadius: 15,
    height: 300,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
