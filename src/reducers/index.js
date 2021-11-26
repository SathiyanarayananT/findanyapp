import AuthenticationReducer from './AuthenticationReducer';
import HomeReducer from './HomeReducer';
import UserAccountReducer from './UserAccountReducer';
import ProductReducer from './ProductReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  AuthenticationReducer,
  HomeReducer,
  UserAccountReducer,
  ProductReducer,
});
