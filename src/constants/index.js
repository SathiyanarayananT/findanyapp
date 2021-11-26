// General Action constants
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

// Auth Action Constants
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const RETRIEVE_TOKEN = 'RETRIEVE_TOKEN';
export const SET_ACCESS_TOKEN_EMAIL = 'SET_ACCESS_TOKEN_EMAIL';

// Home Action Constants
export const LOCATION_FETCH = 'LOCATION_FETCH';

// User account Constants
export const FETCH_USER_INFO = 'FETCH_USER_INFO';

// Product Action Constants
export const FETCH_MY_PRODUCTS = 'FETCH_MY_PRODUCTS';
export const FETCH_PRODUCTS_FOR_FEED = 'FETCH_PRODUCTS_FOR_FEED';

// Product dropdown list
export const CATEGORY_LIST = [
  {key: 1, label: 'Food'},
  {key: 2, label: 'Health'},
  {key: 3, label: 'Beauty'},
];
export const UOM_LIST = [
  {key: 1, value: 'pc', label: 'Piece (pc)'},
  {key: 2, value: 'g', label: 'Gram (g)'},
  {key: 3, value: 'Kg', label: 'Kilogram (kg)'},
  {key: 4, value: 'ml', label: 'Milli-Litre (ml)'},
  {key: 5, value: 'l', label: 'Litre (l)'},
];

// Header Constants
export const BEARER = 'Bearer ';
