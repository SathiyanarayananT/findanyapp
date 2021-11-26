import {LOCATION_FETCH} from '../constants';
import * as mapService from '../services/mapService';
import {loadingEndAction, loadingStartAction} from './GenericAction';
import Geolocation from 'react-native-geolocation-service';

const fetchLocationFromCoordinates = async position => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  try {
    const location = await mapService.getCityFromCoordinates(
      latitude,
      longitude,
    );
    return location;
  } catch (e) {
    throw e;
  }
};
const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    });
  });
};
export const getLocationActionCreator = () => {
  return async dispatch => {
    try {
      dispatch(loadingStartAction());
      const isLocationEnabled = await Geolocation.requestAuthorization(
        'whenInUse',
      );
      if (isLocationEnabled === 'granted') {
        const position = await getCoordinates();
        const location = await fetchLocationFromCoordinates(position);
        dispatch({type: LOCATION_FETCH, payload: location});
      }
      dispatch(loadingEndAction());
      return Promise.resolve();
    } catch (locationAuthError) {
      console.log(locationAuthError);
      return Promise.reject(e);
    }
  };
};
