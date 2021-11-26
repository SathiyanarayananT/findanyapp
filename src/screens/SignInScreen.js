import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signInActionCreator} from '../actions/AuthenticationAction';
import LoadingIndicator from '../components/LoadingIndicator';
import {MAINAPP_ROUTE, SIGNUP_ROUTE} from '../navigation/routes';
import commonUxStyles, {APP_BG_COLOR_WHITE} from '../styles';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.AuthenticationReducer.isLoading);
  if (isLoading) {
    return LoadingIndicator();
  }

  useEffect(() => {
    return () => {
      setEmail('');
      setPassword('');
    };
  }, []);
  onClickSignIn = () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert('Error', 'Email or Password cannot be empty.', [
        {text: 'OK'},
      ]);
      return;
    }
    dispatch(signInActionCreator(email, password))
      .then(() => {
        console.log('Signin success');
        navigation.navigate(MAINAPP_ROUTE);
      })
      .catch(e => {
        console.log('Signin failed');
        Alert.alert('Error', 'Incorrect Email or Password. Please try again!', [
          {text: 'OK'},
        ]);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      backgroundColor={APP_BG_COLOR_WHITE}
      style={commonUxStyles.mainContainer}>
      <StatusBar hidden={false} />
      <Image style={styles.signInlogo} source={require('../assets/logo.png')} />
      <View style={styles.subContainer}>
        <Text style={commonUxStyles.labelText}>Email</Text>
        <View style={commonUxStyles.inputView}>
          <TextInput
            autoFocus
            autoCapitalize="none"
            style={commonUxStyles.inputText}
            onChangeText={setEmail}
          />
        </View>
        <Text style={commonUxStyles.labelText}>Password</Text>
        <View style={commonUxStyles.inputView}>
          <TextInput
            style={commonUxStyles.inputText}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={setPassword}
            on
          />
        </View>

        <TouchableOpacity
          style={commonUxStyles.buttonLarge}
          onPress={onClickSignIn}>
          <Text style={commonUxStyles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={commonUxStyles.centerAlignContainer}>
          <Text>Other options:</Text>
          <TouchableOpacity onPress={() => this.onOathLogin()}>
            <Image source={require('../assets/google.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={commonUxStyles.bottomContainer}>
        <Text style={styles.createAccountText}>
          Do you want to create an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(SIGNUP_ROUTE)}>
          <Text style={commonUxStyles.underline}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  subContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  signInlogo: {
    marginTop: 100,
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  createAccountText: {
    fontSize: 11,
    marginVertical: 5,
  },
  forgotPassword: {
    fontSize: 11,
    marginBottom: 20,
  },
});
