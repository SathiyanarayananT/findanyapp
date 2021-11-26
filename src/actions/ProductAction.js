import {loadingEndAction, loadingStartAction} from './GenericAction';
import * as productService from '../services/productService';
import {FETCH_MY_PRODUCTS, FETCH_PRODUCTS_FOR_FEED} from '../constants';

const fetchMyProducts = myProducts => {
  return {
    type: FETCH_MY_PRODUCTS,
    payload: myProducts,
  };
};

const fetchProductsForFeed = products => {
  return {
    type: FETCH_PRODUCTS_FOR_FEED,
    payload: products,
  };
};

export const addProductActionCreator = (productInfo, image, headers) => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      const response = await productService.addProduct(
        productInfo,
        image,
        headers,
      );
      dispatch(loadingEndAction());
      return Promise.resolve(response.data);
    } catch (e) {
      dispatch(loadingEndAction());
      return Promise.reject(e);
    }
  };
};

export const getAllProductsByUserIdActionCreator = headers => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      const response = await productService.getAllProductsByUser(headers);
      dispatch(fetchMyProducts(response.data));
      dispatch(loadingEndAction());
      return Promise.resolve(response.data);
    } catch (e) {
      dispatch(loadingEndAction());
      return Promise.reject(e);
    }
  };
};

export const getProductsForFeedActionCreator = (headers, location, page) => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      const response = await productService.getProductsForFeed(
        headers,
        location,
        page,
      );
      dispatch(fetchProductsForFeed(response.data));
      dispatch(loadingEndAction());
      return Promise.resolve(response.data);
    } catch (e) {
      dispatch(loadingEndAction());
      return Promise.reject(e);
    }
  };
};
