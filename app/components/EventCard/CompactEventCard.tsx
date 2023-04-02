import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ParsedEvent} from '../../types';
import IconText from '../IconText';
import { CurrencyDollarIcon, MapPinIcon } from 'react-native-heroicons/solid';

type Props = {
  event: ParsedEvent;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const CompactEventCard = ({event, setShowDetails}: Props) => {
  return (
    <Pressable
      className="w-full items-center"
      onPress={() => setShowDetails(true)}>
      <View className="my-2 bg-yellow-600 rounded-lg p-3 w-[90%] flex-1">
        <Text className="font-bold text-2xl grow text-white">
          {event.title}
        </Text>
        <Text className="mb-2">{event.organizer}</Text>

        <IconText text={event.address} Icon={MapPinIcon} />
        <IconText
          text={'$' + event.price.toString()}
          Icon={CurrencyDollarIcon}
        />
      </View>
    </Pressable>
  );
};

export default CompactEventCard;
