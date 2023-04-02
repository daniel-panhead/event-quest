import { initializeApp } from '@firebase/app'
import { getDatabase, onValue, ref, set} from '@firebase/database'
import { Event } from './Types';

const firebaseConfig = {
    apiKey: "AIzaSyBj92X-XdKyTOeP2sEqyubw8U3iQrpEoEU",
    authDomain: "event-quest-87a10.firebaseapp.com",
    databaseURL: "https://event-quest-87a10-default-rtdb.firebaseio.com",
    projectId: "event-quest-87a10",
    storageBucket: "event-quest-87a10.appspot.com",
    messagingSenderId: "713627039023",
    appId: "1:713627039023:web:2f632f1de3e6d955195dda",
    measurementId: "G-2QPRZ7R4MH"
  };

// const exampleEvents: Event[] = [
//   {
//     organizer: 'BizTech',
//     address: '2053 Main Mall, Vancouver, BC V6T 1Z2',
//     title: 'ProduHacks',
//     dateTime: '2023-04-01T09:30:00-08:00',
//     description: 'Hackathon',
//     mustRegister: true,
//     price: 10,
//     type: 'Full Day',
//   },
//   {
//     organizer: 'Organizer Guys',
//     address: '2052 Main Mall, Vancouver, BC V6T 1Z2',
//     title: 'Fun Event',
//     dateTime: '2023-04-01T09:30:00-08:00',
//     description: 'Fun time',
//     mustRegister: false,
//     price: 10,
//     type: 'Full Day',
//   },
// ];
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const eventRef = ref(database, 'events/');
let events: Event[] = [];
onValue(eventRef, (snapshot) => {
    snapshot.forEach((childSnap) => {
        let event: Event = childSnap.val();
        events.push(event);
    })
   printData();
})

function printData(): void {
    events.forEach( (event: Event) => {
        console.log(event)
    })
}

export function writeData(id: String, data: Event) {
    set(eventRef, {
        id: data
    });
}