import {geocode} from './mapLoader';
import type {Event, ParsedEvent} from './types';

const events: Event[] = [
  {
    organizer: 'BizTech',
    address: '2053 Main Mall, Vancouver, BC V6T 1Z2',
    title: 'ProduHacks',
    dateTime: '2023-04-01T09:30:00-08:00',
    description: 'Hackathon',
    mustRegister: true,
    price: 10,
    type: 'Full Day',
  },
  {
    organizer: 'Organizer Guys',
    address: '2052 Main Mall, Vancouver, BC V6T 1Z2',
    title: 'Fun Event',
    dateTime: '2023-04-01T09:30:00-08:00',
    description: 'Fun time',
    mustRegister: false,
    price: 10,
    type: 'Full Day',
  },
];

export const getEvents: () => Promise<ParsedEvent[]> = async () => {
  const parsedEvents: ParsedEvent[] = await Promise.all(
    events.map(async event => {
      const coords = await geocode(event.address);
      return {
        organizer: event.organizer,
        coords: {
          latitude: coords.lat,
          longitude: coords.lng,
        },
        title: event.title,
        dateTime: new Date(event.dateTime),
        description: event.description,
        mustRegister: event.mustRegister,
        price: event.price,
        type: event.type,
      };
    }),
  );

  return parsedEvents;
};
