import React from 'react';
import {geocode} from './mapLoader';
import {firebase} from '@react-native-firebase/database';
import {Event, ParsedEvent} from './types';

const data = firebase.database();
let events: Event[] = [];
data.ref().on('value', snapshot => {
  snapshot.child('events').forEach(childSnap => {
    let event: Event = childSnap.val();
    events.push(event);
    printData();
    return true;
  });
});

export function printData() {
  events.forEach(event => {
    console.log(event);
  });
}

export const getEvents: () => Promise<ParsedEvent[]> = async () => {
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
