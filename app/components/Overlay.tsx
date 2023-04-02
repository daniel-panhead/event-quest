import {Pressable, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ParsedEvent, Place} from '../types';
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import EventCardEntry from './EventCard/EventCardEntry';

type Props = {
  place: Place;
  setSelectedPlace: React.Dispatch<React.SetStateAction<Place | undefined>>;
};

const Overlay = ({place, setSelectedPlace}: Props) => {
  const location = Object.keys(place)[0];
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(Date.now()));

  const dateToString = (date: Date) => {
    return (
      date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    );
  };

  return (
    <View className="absolute w-full h-full items-center justify-center flex-1">
      <View className="w-[90%] h-[90%] bg-cream items-center rounded-lg shadow-md shadow-black">
        <Text className="text-black text-2xl text-center font-bold py-4 px-10">
          {location}
        </Text>
        <Pressable
          className="absolute right-0 mt-4 mr-4 pt-2"
          onPress={() => setSelectedPlace(undefined)}>
          <XMarkIcon color="black" />
        </Pressable>

        <View className="my-2 flex flex-row items-center justify-center gap-2">
          <Pressable
            className="p-2"
            onPress={() =>
              setSelectedDate(
                new Date(selectedDate.setDate(selectedDate.getDate() - 1)),
              )
            }>
            <ChevronLeftIcon color="black" />
          </Pressable>
          <View className="bg-peach p-2 rounded-md">
            <Text className="text-black font-bold">
              {dateToString(selectedDate)}
            </Text>
          </View>
          <Pressable
            className="p-2"
            onPress={() =>
              setSelectedDate(
                new Date(selectedDate.setDate(selectedDate.getDate() + 1)),
              )
            }>
            <ChevronRightIcon color="black" />
          </Pressable>
        </View>
        <ScrollView className="w-full">
          {!place[location][dateToString(selectedDate)] && (
            <Text className="my-2 text-slate-800 text-center">
              No events on this day
            </Text>
          )}
          {place[location][dateToString(selectedDate)] &&
            place[location][dateToString(selectedDate)].map((event, i) => {
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
