import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import type {Event, ParsedEvent} from './types';
import {getEvents} from './mockData';

type Props = {};

const initialRegion = {
  latitude: 49.262923,
  longitude: -123.251149,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map = (props: Props) => {
  const [events, setEvents] = useState<ParsedEvent[]>();
  useEffect(() => {
    async function fetchData() {
      const response = await getEvents();
      setEvents(response);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {events && (
        <MapView style={styles.map} initialRegion={initialRegion}>
          {events.map((event, i) => {
            return <Marker coordinate={event.coords} key={i} />;
          })}
        </MapView>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
