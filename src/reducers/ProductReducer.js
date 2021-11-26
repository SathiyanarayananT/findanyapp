import {
  FETCH_MY_PRODUCTS,
  FETCH_PRODUCTS_FOR_FEED,
  LOADING_END,
  LOADING_START,
} from '../constants';

const initialState = {
  isLoading: false,
  allProducts: [],
  myProducts: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_FOR_FEED:
      return {
        ...state,
        allProducts: action.payload,
        isLoading: false,
      };
    case FETCH_MY_PRODUCTS:
      return {
        ...state,
        myProducts: action.payload,
        isLoading: false,
      };
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
