import {LOADING_END, LOADING_START, LOCATION_FETCH} from '../constants';

const initialState = {
  isLoading: false,
  location: null,
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_FETCH:
      return {
        ...state,
        location: action.payload,
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
