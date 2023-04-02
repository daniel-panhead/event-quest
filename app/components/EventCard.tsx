import {View, Text, Pressable, ScrollView, Linking} from 'react-native';
import React from 'react';
import IconText from './IconText';
import {ParsedEvent} from '../types';
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  LinkIcon,
  XMarkIcon,
} from 'react-native-heroicons/solid';

type Props = {
  event: ParsedEvent;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventCard = ({event, setShowDetails: setShowDetails}: Props) => {
  return (
    <View className="my-6 mx-2 bg-yellow-600 rounded-lg px-6 pb-6 pt-3 w-[90%] flex-1">
      <View className="flex-1">
        <Pressable onPress={() => setShowDetails(false)}>
          <View className="flex flex-row items-center">
            <Text className="font-bold text-2xl grow text-white">
              {event.title}
            </Text>
            <XMarkIcon color="white" />
          </View>
        </Pressable>
        <Text className="mb-2">{event.organizer}</Text>

        <IconText text={event.address} Icon={MapPinIcon} />
        <IconText
          text={'$' + event.price.toString()}
          Icon={CurrencyDollarIcon}
        />
        <IconText
          text={
            event.startDateTime.toLocaleString() +
            ' - \n' +
            event.endDateTime.toLocaleString()
          }
          Icon={CalendarDaysIcon}
        />

        <Text className="text-md text-white font-bold">Description</Text>

        <ScrollView showsVerticalScrollIndicator>
          <Text className="text-white">{event.description}</Text>
        </ScrollView>

        <Pressable onPress={() => Linking.openURL(event.url)}>
          <IconText
            className="justify-center my-2"
            text="Event URL"
            Icon={LinkIcon}
            color="white"
            size="28"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default EventCard;