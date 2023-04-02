import Config from 'react-native-config';
import GeoCoder from 'react-native-geocoding';

GeoCoder.init(Config.GOOGLE_MAPS_API_KEY ? Config.GOOGLE_MAPS_API_KEY : '');

export const geocode = async (address: string) => {
  const geoResponse = await GeoCoder.from(address);
  return geoResponse.results[0].geometry.location;
};

export const revGeoCode = async (lat, lng) => {
  const geoResponse = await GeoCoder.from(lat, lng);
  return geoResponse.results[0].
}
