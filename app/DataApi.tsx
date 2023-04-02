import {geocode} from './mapLoader';
import {firebase} from '@react-native-firebase/database';
import {Event, ParsedEvent} from './types';

const data = firebase.database();
let events: Event[] = [];

export const getEvents = async (): Promise<ParsedEvent[]> => {
  const snapshot = await data.ref().once('value');
  snapshot.child('events').forEach(childSnap => {
    events.push(childSnap.val());
    return undefined;
  });

  const parsedEvents: ParsedEvent[] = await Promise.all(
    events.map(async event => {
      const coords = await geocode(event.address);
      return {
        organizer: event.organizer,
        address: event.address,
        coords: {
          latitude: coords.lat,
          longitude: coords.lng,
        },
        title: event.title,
        startDateTime: new Date(event.startDateTime),
        endDateTime: new Date(event.endDateTime),
        description: event.description,
        mustRegister: event.mustRegister,
        price: event.price,
        type: event.type,
        url: event.url,
      };
    }),
  );

  return parsedEvents;
};
