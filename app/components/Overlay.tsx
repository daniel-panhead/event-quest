import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {ParsedEvent} from '../types';

type Props = {
  event: ParsedEvent;
  setSelectedEvent: React.Dispatch<
    React.SetStateAction<ParsedEvent | undefined>
  >;
};

const Overlay = ({event, setSelectedEvent}: Props) => {
  return (
    <View className="absolute bottom-0 w-full items-center">
      <View className="mb-2 mx-2 bg-white rounded-lg p-6 w-[90%]">
        <View>
          <Text className="text-black font-bold text-lg">{event.title}</Text>
          <Text className="text-black">{event.organizer}</Text>
        </View>
        <Pressable
          className="rounded-xl p-4 bg-black"
          onPress={() => setSelectedEvent(undefined)}>
          <Text className="text-white font-bold text-center">Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Overlay;
