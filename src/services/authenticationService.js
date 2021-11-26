import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8080/find-any';

export const signUp = async userInfo => {
  try {
    return await axios.post(API_URL + '/user', userInfo);
  } catch (e) {
    throw e;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(API_URL + '/auth/login', {
      username: email,
      password: password,
    });
    if (response.data.accessToken) {
      AsyncStorage.setItem('email', response.data.userid);
      AsyncStorage.setItem('accessToken', response.data.accessToken);
      AsyncStorage.setItem('refreshToken', response.data.refreshToken);
    }
    return response.data.accessToken;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const retrieveToken = async refreshToken => {
  try {
    const response = await axios.post(API_URL + '/auth/refreshtoken', {
      refreshToken,
    });
    AsyncStorage.setItem('accessToken', response.data.accessToken);
    AsyncStorage.setItem('refreshToken', response.data.refreshToken);
    return response;
  } catch (e) {
    throw e;
  }
};

export const signOut = async () => {
  AsyncStorage.removeItem('email');
  AsyncStorage.removeItem('accessToken');
  AsyncStorage.removeItem('refreshToken');
};
