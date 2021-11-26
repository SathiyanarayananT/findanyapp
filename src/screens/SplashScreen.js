import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {SafeAreaView, Image, StatusBar, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAccessTokenEmailAction} from '../actions/AuthenticationAction';
import commonUxStyles, {APP_BG_COLOR_WHITE} from '../styles';
import LoadingIndicator from '../components/LoadingIndicator';
import {MAINAPP_ROUTE} from '../navigation/routes';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getAccessTokenFromStorage = async () => {
    try {
      let accessToken = await AsyncStorage.getItem('accessToken');
      let email = await AsyncStorage.getItem('email');
      dispatch(setAccessTokenEmailAction(accessToken, email));
      // if (accessToken) {
      navigation.navigate(MAINAPP_ROUTE);
      // } else {
      //   navigation.navigate(SIGNIN_ROUTE);
      // }
    } catch (e) {}
  };

  useEffect(() => {
    setTimeout(() => {
      getAccessTokenFromStorage().then(() => {
        console.log('Fetching access token finished');
      });
    }, 500);
  }, []);

  return (
    <SafeAreaView
      backgroundColor={APP_BG_COLOR_WHITE}
      style={commonUxStyles.mainContainer}>
      <StatusBar hidden />
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <LoadingIndicator />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
