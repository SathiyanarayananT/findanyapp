import {MAP_MY_INDIA_MAPS_KEY} from '@env';
import axios from 'axios';

const API_URL = 'https://apis.mapmyindia.com/advancedmaps/v1/';

export const getCityFromCoordinates = async (latitute, longitude) => {
  try {
    const url =
      API_URL +
      `${MAP_MY_INDIA_MAPS_KEY}/rev_geocode?lat=${latitute}&lng=${longitude}`;
    console.log(url);
    const response = await axios.get(url);
    return response.data.results[0].city;
  } catch (e) {
    console.log('error', e);
    throw e;
  }
};
