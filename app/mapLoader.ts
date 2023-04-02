import Config from 'react-native-config';
import GeoCoder from 'react-native-geocoding';
import {LatLng} from 'react-native-maps';

const apiKey = Config.GOOGLE_MAPS_API_KEY ? Config.GOOGLE_MAPS_API_KEY : '';

GeoCoder.init(apiKey);

export const geocode = async (address: string) => {
  const geoResponse = await GeoCoder.from(address);
  return geoResponse.results[0].geometry.location;
};

export const revGeoCode = async (latlng: LatLng) => {
  const geoResponse = await GeoCoder.from(latlng.latitude, latlng.longitude);
  return geoResponse.results[0].formatted_address;
};

export const getPlaceName = async (
  latlng: LatLng,
  keyword: string,
): Promise<string> => {
  const res = await fetch(
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=' +
      encodeURI(keyword) +
      '&location=' +
      latlng.latitude +
      '%2C' +
      latlng.longitude +
      '&rankby=distance&key=' +
      apiKey,
  );
  return (await res.json()).results[0].name;
};
