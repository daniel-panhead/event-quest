import {LatLng} from 'react-native-maps';

export type Event = {
  organizer: string;
  address: string;
  title: string;
  dateTime: string;
  description: string;
  mustRegister: boolean;
  price: number;
  type: string;
};

export type ParsedEvent = {
  organizer: string;
  coords: LatLng;
  title: string;
  dateTime: Date;
  description: string;
  mustRegister: boolean;
  price: number;
  type: string;
};
