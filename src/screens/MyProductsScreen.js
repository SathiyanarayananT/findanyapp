import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getAllProductsByUserIdActionCreator} from '../actions/ProductAction';
import commonUxStyles, {
  APP_BG_COLOR_WHITE,
  APP_SIMPLE_BUTTON_COLOR_BLUE,
} from '../styles';
import {BEARER} from '../constants';
import LoadingIndicator from '../components/LoadingIndicator';
import ProductListItem from '../components/ProductListItem';
import {useNavigation} from '@react-navigation/core';
import {ADDPRODUCT_ROUTE, PRODUCTDETAILS_ROUTE} from '../navigation/routes';

const MyProductsScreen = () => {
  const navigation = useNavigation();
  const [isRefreshing, setRefreshing] = useState(false);
  const accessToken = useSelector(
    state => state.AuthenticationReducer.accessToken,
  );
  const isLoading = useSelector(state => state.AuthenticationReducer.isLoading);
  const email = useSelector(state => state.AuthenticationReducer.email);
  const myProducts = useSelector(state => state.ProductReducer.myProducts);
  const dispatch = useDispatch();

  fetchMyProducts = () => {
    setRefreshing(true);
    const headers = {
      Authorization: BEARER + accessToken,
      'x-user-id': email,
    };
    dispatch(getAllProductsByUserIdActionCreator(headers))
      .then(data => {
        console.log('products fetched');
      })
      .catch(e => {
        console.log(e);
      });
    setRefreshing(false);
  };
  onRefresh = () => {
    fetchMyProducts();
  };
  useEffect(() => {
    fetchMyProducts();
  }, []);
  if (isLoading) {
    return LoadingIndicator();
  }
  return (
    <SafeAreaView style={commonUxStyles.mainContainer}>
      <View>
        <FlatList
          style={commonUxStyles.flatlistPadding}
          data={myProducts}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={({item}) =>
                  navigation.navigate(PRODUCTDETAILS_ROUTE, {item})
                }>
                <ProductListItem product={item} />
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => (
            <View style={styles.emptyListViewStyle}>
              <Text style={styles.emptyListText}>No products added yet</Text>
            </View>
          )}
          keyExtractor={product => product.id}
          showsVerticalScrollIndicator={false}></FlatList>
      </View>
      <TouchableOpacity
        style={styles.iconButtonCircle}
        onPress={() => navigation.navigate(ADDPRODUCT_ROUTE)}>
        <Icon name="add" size={30} color={APP_BG_COLOR_WHITE} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyProductsScreen;

const styles = StyleSheet.create({
  iconButtonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 40,
    right: 40,
    height: 60,
    backgroundColor: APP_SIMPLE_BUTTON_COLOR_BLUE,
    borderRadius: 100,
  },
  emptyListViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
  },
  emptyListText: {
    color: 'grey',
    fontSize: 15,
  },
});
