import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, MarkerPressEvent} from 'react-native-maps';
import type {ParsedEvent} from '../types';
import {getEvents} from '../mockData';
import Overlay from './Overlay';
import {revGeoCode} from '../mapLoader';

type Props = {};

const initialRegion = {
  latitude: 49.262923,
  longitude: -123.251149,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map = (props: Props) => {
  const [events, setEvents] = useState<ParsedEvent[]>();
  const [selectedEvent, setSelectedEvent] = useState<ParsedEvent | undefined>();

  useEffect(() => {
    async function fetchData() {
      const response = await getEvents();
      setEvents(response);
    }
    fetchData();
  }, []);

  const handleMarkerPress = (e: MarkerPressEvent) => {
    setSelectedEvent(events[parseInt(e.nativeEvent.id, 10)]);
  };

  useEffect(() => {
    if (selectedEvent) {
      revGeoCode(selectedEvent.coords).then(res => {
        console.log(res);
      });
    }
  }, [selectedEvent]);

  return (
    <>
      {events && (
        <>
          <View className="flex-1 items-center justify-end">
            <MapView style={styles.map} initialRegion={initialRegion}>
              {events.map((event, i) => {
                return (
                  <Marker
                    coordinate={event.coords}
                    identifier={i.toString()}
                    key={i}
                    onPress={handleMarkerPress}
                  />
                );
              })}
            </MapView>
          </View>
          {selectedEvent && (
            <Overlay
              event={selectedEvent}
              setSelectedEvent={setSelectedEvent}
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
