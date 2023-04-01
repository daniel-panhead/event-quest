import React from 'react';
import {firebase} from '@react-native-firebase/database';

const data = firebase.database()
export function printData() {
    const dataRef = data.ref()
        .on('value', snapshot => {
            console.log("data: ", snapshot.val());
    })
}