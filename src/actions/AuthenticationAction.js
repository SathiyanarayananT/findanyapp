import {SET_ACCESS_TOKEN_EMAIL, SIGNIN, SIGNOUT} from '../constants';
import * as authService from '../services/authenticationService';
import {loadingEndAction, loadingStartAction} from './GenericAction';

export const signInAction = authInfo => {
  return {
    type: SIGNIN,
    payload: authInfo,
  };
};

export const signOutAction = () => {
  return {
    type: SIGNOUT,
  };
};

export const signInActionCreator = (email, password) => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      const accessToken = await authService.signIn(email, password);
      dispatch(signInAction({email, accessToken}));
      dispatch(loadingEndAction());
      return Promise.resolve(accessToken);
    } catch (e) {
      dispatch(loadingEndAction());
      return Promise.reject(e);
    }
  };
};

export const signUpActionCreator = userInfo => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      userInfo.provider = 'LOCAL';
      const response = await authService.signUp(userInfo);
      dispatch(loadingEndAction());
      return Promise.resolve(response);
    } catch (e) {
      dispatch(loadingEndAction());
      return Promise.reject(e);
    }
  };
};

export const retrieveTokenAction = () => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      const accessToken = await authService.retrieveToken(refreshToken);
      dispatch(loadingEndAction());
      return Promise.resolve(accessToken);
    } catch (e) {
      dispatch(loadingEndAction());
      return Promise.reject(e);
    }
  };
};

export const setAccessTokenEmailAction = (accessToken, email) => {
  console.log('setting access token and email to store');
  return {
    type: SET_ACCESS_TOKEN_EMAIL,
    payload: {accessToken, email},
  };
};

export const signOutActionCreator = () => async () => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      await authService.signOut();
      dispatch(signOutAction());
      dispatch(loadingEndAction());
      return Promise.resolve();
    } catch (e) {
      dispatch(loadingEndAction());
      return Promise.reject(e);
    }
  };
};
