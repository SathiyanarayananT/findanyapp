import {LOADING_END, LOADING_START} from '../constants';

export const loadingStartAction = () => {
  return {
    type: LOADING_START,
  };
};

export const loadingEndAction = () => {
  return {
    type: LOADING_END,
  };
};
