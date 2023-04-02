import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, MarkerPressEvent} from 'react-native-maps';
import type {Place} from '../types';
import {dateToString} from '../data';
import {getEvents} from '../DataApi';
// import {getEvents} from '../mockData';
import Overlay from './Overlay';
import {getPlaceName} from '../mapLoader';

type Props = {};

const initialRegion = {
  latitude: 49.262923,
  longitude: -123.251149,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map = (props: Props) => {
  const [places, setPlaces] = useState<Place>();
  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>();

  useEffect(() => {
    async function fetchData() {
      const response = await getEvents();
      let tmpPlaces: Place = {};
      for (let event of response) {
        const place = await getPlaceName(event.coords, event.address);
        const date = dateToString(event.startDateTime);
        if (tmpPlaces.hasOwnProperty(place)) {
          if (tmpPlaces[place].hasOwnProperty(date)) {
            tmpPlaces[place][date].push(event);
          } else {
            tmpPlaces[place][date] = [event];
          }
        } else {
          tmpPlaces[place] = {};
          tmpPlaces[place][date] = [event];
        }
      }
      Object.keys(tmpPlaces).forEach(place => {
        Object.keys(tmpPlaces[place]).forEach(day => {
          tmpPlaces[place][day] = tmpPlaces[place][day].sort((a, b) => {
            return a.startDateTime.valueOf() - b.startDateTime.valueOf();
          });
        });
      });
      setPlaces(tmpPlaces);
    }

    fetchData();
  }, []);

  const handleMarkerPress = (e: MarkerPressEvent) => {
    let retObj: Place = {};
    retObj[e.nativeEvent.id] = places[e.nativeEvent.id];
    setSelectedPlace(retObj);
  };

  return (
    <>
      {places && (
        <>
          <View className="flex-1 items-center justify-end">
            <MapView
              style={styles.map}
              initialRegion={initialRegion}
              toolbarEnabled={false}>
              {Object.keys(places).map((place: string, i) => {
                return (
                  <Marker
                    coordinate={Object.values(places[place])[0][0].coords}
                    identifier={place}
                    key={i}
                    onPress={handleMarkerPress}
                  />
                );
              })}
            </MapView>
          </View>
          {selectedPlace && (
            <Overlay
              place={selectedPlace}
              setSelectedPlace={setSelectedPlace}
            />
          )}
        </>
      )}
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
