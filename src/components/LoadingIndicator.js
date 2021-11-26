import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {APP_MAIN_COLOR_RED} from '../styles';

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        size="small"
        color={APP_MAIN_COLOR_RED}
      />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
