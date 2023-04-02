import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ParsedEvent} from '../../types';
import {colorOptions} from '../../data';
import IconText from '../IconText';
import {CurrencyDollarIcon, MapPinIcon} from 'react-native-heroicons/solid';

type Props = {
  event: ParsedEvent;
  i: number;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const CompactEventCard = ({event, i, setShowDetails}: Props) => {
  const checkTime = (j: number) => {
    let returnI = j.toString();
    if (j < 10) {
      returnI = '0' + j;
    }
    return returnI;
  };
  return (
    <View className="flex flex-1 flex-row justify-between items-center">
      <Text className="text-black text-md font-bold pl-4 w-18 grow">
        {event.startDateTime.getHours().toString() +
          ':' +
          checkTime(event.startDateTime.getMinutes())}
      </Text>
      <Pressable
        className="items-center w-[80%]"
        onPress={() => setShowDetails(true)}>
        <View className={'my-2 bg-yellow-600 rounded-lg p-3 w-[90%] flex-1'}>
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
    </View>
  );
};

export default CompactEventCard;
