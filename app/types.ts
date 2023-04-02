import {LatLng} from 'react-native-maps';

export type Event = {
  organizer: string;
  address: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  description: string;
  mustRegister: boolean;
  price: number;
  type: string;
  url: string;
};

export type ParsedEvent = {
  organizer: string;
  address: string;
  coords: LatLng;
  title: string;
  startDateTime: Date;
  endDateTime: Date;
  description: string;
  mustRegister: boolean;
  price: number;
  type: string;
  url: string;
};
