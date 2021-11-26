import {FETCH_USER_INFO, LOADING_END, LOADING_START} from '../constants';

const initialState = {
  isLoading: false,
  firstname: null,
  lastname: null,
  email: null,
  profilePicUrl: null,
};

export default function UserAccountReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_INFO:
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        profilePicUrl: action.payload.profilePicUrl,
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
