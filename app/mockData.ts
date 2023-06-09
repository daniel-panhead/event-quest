import {geocode} from './mapLoader';
import type {Event, ParsedEvent} from './types';
import { getEvents as dataEvents } from './DataApi';

const events: Event[] = [
  {
    organizer: 'BizTech',
    address: 'Sauder School of Business',
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
    organizer: 'Sauder',
    address: 'UBC Sauder School of Business',
    title: 'Sauder Snakes Meetup',
    startDateTime: '2023-04-02T03:30:00-08:00',
    endDateTime: '2023-04-02T14:00:00-08:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    mustRegister: true,
    price: 10,
    type: 'Secret Meeting',
    url: 'https://google.com',
  },
  {
    organizer: 'Organizer Guys',
    address: 'Martha Piper Plaza',
    title: 'Fun Event',
    startDateTime: '2023-04-01T09:30:00-08:00',
    endDateTime: '2023-04-02T012:30:00-08:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    mustRegister: false,
    price: 10,
    type: 'Full Day',
    url: 'https://ubc.ca',
  },
  {
    organizer: 'Organizer Girls',
    address: 'Martha Piper Plaza',
    title: 'Very Fun Event',
    startDateTime: '2023-04-01T01:30:00-08:00',
    endDateTime: '2023-04-01T022:30:00-08:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    mustRegister: false,
    price: 10,
    type: 'Full Day',
    url: 'https://ubc.ca',
  },
];

export const getEvents = async (): Promise<ParsedEvent[]> => {
  return await dataEvents();
};
