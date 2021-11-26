import {
  LOADING_END,
  LOADING_START,
  RETRIEVE_TOKEN,
  SET_ACCESS_TOKEN_EMAIL,
  SIGNIN,
  SIGNOUT,
} from '../constants';

const initialState = {
  isLoading: false,
  email: null,
  accessToken: null,
};

export default function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
        isLoading: false,
      };
    case SET_ACCESS_TOKEN_EMAIL:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        email: action.payload.email,
      };
    case SIGNIN:
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        isLoading: false,
      };
    case SIGNOUT:
      return {
        ...state,
        email: null,
        accessToken: null,
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
