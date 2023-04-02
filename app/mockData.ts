import {geocode} from './mapLoader';
import type {Event, ParsedEvent} from './types';

const events: Event[] = [
  {
    organizer: 'BizTech',
    address: 'Henry Angus Building',
    title: 'ProduHacks',
    startDateTime: '2023-04-01T09:30:00-08:00',
    endDateTime: '2023-04-02T17:00:00-08:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    mustRegister: true,
    price: 10,
    type: 'Full Day',
    url: 'https://google.com',
  },
  {
    organizer: 'Organizer Guys',
    address: 'Martha Piper Plaza',
    title: 'Fun Event',
    startDateTime: '2023-04-01T09:30:00-08:00',
    endDateTime: '2023-04-01T012:30:00-08:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    mustRegister: false,
    price: 10,
    type: 'Full Day',
    url: 'https://ubc.ca',
  },
];

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
