import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ParsedEvent} from '../types';
import EventCard from './EventCard';
import {XMarkIcon} from 'react-native-heroicons/solid';

type Props = {
  event: ParsedEvent;
  setSelectedEvent: React.Dispatch<
    React.SetStateAction<ParsedEvent | undefined>
  >;
};

const Overlay = ({event, setSelectedEvent}: Props) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <View className="absolute w-full h-full items-center justify-center flex-1">
      <View className="w-[90%] h-[90%] bg-cream items-center rounded-lg shadow-md shadow-black">
        <Text className="text-black text-2xl font-bold mt-4">
          Cool Location
        </Text>
        <Pressable
          className="absolute right-0 mt-4 mr-4 pt-2"
          onPress={() => setSelectedEvent(undefined)}>
          <XMarkIcon color="black" />
        </Pressable>
        {showDetails && (
          <EventCard event={event} setShowDetails={setShowDetails} />
        )}
      </View>
    </View>
  );
};

export default Overlay;
