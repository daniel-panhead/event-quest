import Config from 'react-native-config';
import GeoCoder from 'react-native-geocoding';
import {LatLng} from 'react-native-maps';

GeoCoder.init(Config.GOOGLE_MAPS_API_KEY ? Config.GOOGLE_MAPS_API_KEY : '');

export const geocode = async (address: string) => {
  const geoResponse = await GeoCoder.from(address);
  return geoResponse.results[0].geometry.location;
};

export const revGeoCode = async (latlng: LatLng) => {
  const geoResponse = await GeoCoder.from(latlng.latitude, latlng.longitude);
  return geoResponse.results[0].formatted_address;
};
