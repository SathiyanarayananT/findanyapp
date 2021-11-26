import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getLocationActionCreator} from '../actions/HomeAction';
import ProductFeedItem from '../components/ProductFeedItem';
import {useNavigation} from '@react-navigation/core';
import commonUxStyles, {APP_BG_COLOR_WHITE} from '../styles';
import {PRODUCTDETAILS_ROUTE} from '../navigation/routes';
import {getProductsForFeedActionCreator} from '../actions/ProductAction';

const HomeScreen = () => {
  const [isRefreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const location = useSelector(state => state.HomeReducer.location);
  let products = [
    {
      id: 1,
      name: 'Sathiyanarayanan',
      timestamp: '10 Oct 2021',
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Infanta',
      timestamp: '11 Oct 2021',
      imageUrl: '',
    },
    {
      id: 3,
      name: 'Juvala',
      timestamp: '10 Oct 2021',
      imageUrl: '',
    },
    {
      id: 4,
      name: 'Yaro',
      timestamp: '11 Oct 2021',
      imageUrl: '',
    },
  ];
  fetchProducts = () => {
    setRefreshing(true);
    // dispatch(getProductsForFeedActionCreator());
    setRefreshing(false);
  };
  onRefresh = () => {
    fetchProducts();
  };
  fetchNext = () => {};
  useEffect(() => {
    // dispatch(getLocationActionCreator())
    //   .then(() => {
    //     console.log('Location Fetch success');
    //   })
    //   .catch(e => {
    //     console.log('Location Fetch failed');
    //   });
    fetchProducts();
  }, []);
  return (
    <SafeAreaView style={commonUxStyles.mainContainer}>
      <StatusBar hidden="false" />
      <View>
        <FlatList
          data={products}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          ListHeaderComponent={
            <Text style={styles.headerTitle}>Top products for you</Text>
          }
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(PRODUCTDETAILS_ROUTE, item)}>
                <ProductFeedItem item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={product => product.id}
          showsVerticalScrollIndicator={false}
          onEndReached={fetchNext}
          onEndReachedThreshold={100}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  feedHeader: {
    backgroundColor: APP_BG_COLOR_WHITE,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    alignSelf: 'center',
    margin: 10,
    fontSize: 15,
    fontWeight: '500',
  },
});
