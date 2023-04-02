import { initializeApp } from '@firebase/app'
import { getDatabase, onValue, ref, set, push, remove, child} from '@firebase/database'
import { Event } from './Types';

const firebaseConfig = {
    apiKey: "***REMOVED***",
    authDomain: "event-quest-87a10.firebaseapp.com",
    databaseURL: "https://event-quest-87a10-default-rtdb.firebaseio.com",
    projectId: "event-quest-87a10",
    storageBucket: "event-quest-87a10.appspot.com",
    messagingSenderId: "713627039023",
    appId: "1:713627039023:web:2f632f1de3e6d955195dda",
    measurementId: "G-2QPRZ7R4MH"
  };

const exampleEvents: Event[] = [
  {
    id: null,
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
    id: null,
    organizer: 'Organizer Guys',
    address: 'Martha Piper Plaza',
    title: 'Fun Event',
    startDateTime: '2023-04-01T09:30:00-08:00',
    endDateTime: '2023-04-01T12:30:00-08:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    mustRegister: false,
    price: 10,
    type: 'Full Day',
    url: 'https://ubc.ca',
  },

];
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const eventRef = ref(database, 'events/');
let events: Event[] = [];
// exampleEvents.forEach((event) => {
//   writeData(event);
// })
onValue(eventRef, (snapshot) => {
    events = [];
    snapshot.forEach((childSnap) => {
        let event: Event = {id : childSnap.key, ...childSnap.val()};
        events.push(event);
    })
})

function printData(): void {
    events.forEach( (event: Event) => {
        console.log(event)
    })
}

export function getEvents(): Event[] {
    return events;
}

export function writeData(data: Event) {
    console.log(data);
    if (data.id === null) {
      const newEventRef = push(eventRef);
      const {id, ...uploadingData} = data;
      set(newEventRef, uploadingData);
    } else {
      console.log(data.id);
      set(ref(database, "/events" + data.id), data);
    }
}

export async function deleteData(data: Event) {
  console.log(data.id)
  await remove(ref(database, "/events/" + data.id));
}

export function hello() {
    console.log("Hello");
}