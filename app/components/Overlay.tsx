import {Pressable, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ParsedEvent, Place} from '../types';
import {XMarkIcon} from 'react-native-heroicons/solid';
import EventCardEntry from './EventCard/EventCardEntry';

type Props = {
  place: Place;
  setSelectedPlace: React.Dispatch<React.SetStateAction<Place | undefined>>;
};

const Overlay = ({place, setSelectedPlace}: Props) => {
  const location = Object.keys(place)[0];

  return (
    <View className="absolute w-full h-full items-center justify-center flex-1">
      <View className="w-[90%] h-[90%] bg-cream items-center rounded-lg shadow-md shadow-black">
        <Text className="text-black text-2xl text-center font-bold pt-4 px-10">
          {location}
        </Text>
        <Pressable
          className="absolute right-0 mt-4 mr-4 pt-2"
          onPress={() => setSelectedPlace(undefined)}>
          <XMarkIcon color="black" />
        </Pressable>
        <ScrollView className="w-full">
          {place[location].map((event, i) => {
            return (
              <View className="flex-1 items-center w-full" key={i}>
                <EventCardEntry event={event} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Overlay;
