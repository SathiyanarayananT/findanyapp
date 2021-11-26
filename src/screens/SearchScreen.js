import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import commonUxStyles, {APP_MAIN_COLOR_RED} from '../styles';

const SearchScreen = () => {
  const products = [];
  return (
    <SafeAreaView>
      <View style={commonUxStyles.flatlistStyle}>
        <FlatList
          style={commonUxStyles.flatlistPadding}
          data={products}
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
          showsVerticalScrollIndicator={false}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
