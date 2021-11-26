import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {signUpActionCreator} from '../actions/AuthenticationAction';
import commonUxStyles, {APP_BG_COLOR_WHITE} from '../styles';

const SignUpScreen = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [isPasswordMatch, setPasswordMatch] = useState(false);
  const isLoading = useSelector(state => state.AuthenticationReducer.isLoading);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setVerifyPassword('');
      setPasswordMatch(false);
    };
  }, []);

  onClickSignUp = () => {
    try {
      validateMandatoryFields();
      matchPassword();
      const userInfo = {firstname, lastname, email, phone, password};
      dispatch(signUpActionCreator(userInfo))
        .then(response => {
          Alert.alert('Information', 'Activation link is sent to your email.', [
            {
              text: 'OK',
              onPress: () => {
                navigation.goBack();
              },
            },
          ]);
        })
        .catch(e => {
          console.log('Login failed');
          Alert.alert('Error', 'Something went wrong. Please try again!', [
            {text: 'OK'},
          ]);
        });
    } catch (e) {
      console.log('Something went wrong.');
    }
  };
  validateMandatoryFields = () => {
    if (
      firstname.length == 0 ||
      lastname.length == 0 ||
      email.length == 0 ||
      password.length == 0
    ) {
      Alert.alert('Error', 'All fields are mandatory.', [{text: 'OK'}]);
      throw new error();
    }
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!regEx.test(email)) {
      Alert.alert('Error', 'Please enter a valid email.', [{text: 'OK'}]);
      throw new error();
    }
  };
  matchPassword = () => {
    if (password.length != 0 && verifyPassword.length !== 0) {
      if (password !== verifyPassword) {
        setPasswordMatch(true);
        throw new error();
      }
    }
    setPasswordMatch(false);
  };
  if (isLoading) {
    return LoadingIndicator();
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      backgroundColor={APP_BG_COLOR_WHITE}
      style={commonUxStyles.mainContainer}>
      <ScrollView
        contentContainerStyle={commonUxStyles.scrollContainer}
        style={commonUxStyles.scrollContainerStyle}>
        <Text h4 style={styles.signUpTitle}>
          Create an account
        </Text>
        <View style={commonUxStyles.centerAlignContainer}>
          <Text style={commonUxStyles.labelText}>First Name</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              autoFocus
              style={commonUxStyles.inputText}
              onChangeText={setFirstname}
            />
          </View>
          <Text style={commonUxStyles.labelText}>Last Name</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              style={commonUxStyles.inputText}
              onChangeText={setLastname}
            />
          </View>
          <Text style={commonUxStyles.labelText}>Email</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              style={commonUxStyles.inputText}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
          </View>
          <Text style={commonUxStyles.labelText}>Phone</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              style={commonUxStyles.inputText}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={setPhone}
            />
          </View>
          <Text style={commonUxStyles.labelText}>Password</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              style={commonUxStyles.inputText}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </View>
          <Text style={commonUxStyles.labelText}>Verify Password</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              style={commonUxStyles.inputText}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={setVerifyPassword}
            />
          </View>
          {isPasswordMatch && (
            <Text style={commonUxStyles.errorInputText}>
              Password does not match!
            </Text>
          )}
        </View>
      </ScrollView>
      <View style={commonUxStyles.bottomContainer}>
        <TouchableOpacity
          style={commonUxStyles.buttonLarge}
          onPress={onClickSignUp}>
          <Text style={commonUxStyles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  signUpTitle: {
    marginVertical: 40,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
});
