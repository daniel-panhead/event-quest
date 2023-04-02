import {View, Text, Pressable, ScrollView, Linking} from 'react-native';
import React from 'react';
import IconText from '../IconText';
import {ParsedEvent} from '../../types';
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  LinkIcon,
  XMarkIcon,
  BookmarkSquareIcon,
} from 'react-native-heroicons/solid';

type Props = {
  event: ParsedEvent;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailedEventCard = ({event, setShowDetails: setShowDetails}: Props) => {
  return (
    <View className="my-6 items-center bg-yellow-600 rounded-lg px-4 pb-6 pt-3 w-full flex-1">
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
        <Pressable onPress={() => Linking.openURL(event.url)} className="m-4">
          <IconText
            className="justify-center"
            text="Event URL"
            Icon={LinkIcon}
            color="white"
            size="28"
          />
        </Pressable>
        <Pressable className="flex-1 justify-center items-center">
          <View className="w-[45%] px-2 py-0.5 rounded-lg bg-slate-900">
            <IconText
              className="justify-center"
              text="Save"
              Icon={BookmarkSquareIcon}
              color="white"
              size="32"
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailedEventCard;
