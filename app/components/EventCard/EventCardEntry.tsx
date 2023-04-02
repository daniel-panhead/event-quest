import {View, Text, Modal} from 'react-native';
import React, {useState} from 'react';
import CompactEventCard from './CompactEventCard';
import DetailedEventCard from './DetailedEventCard';
import {ParsedEvent} from '../../types';

type Props = {
  event: ParsedEvent;
};

const EventCardEntry = ({event}: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View className="flex-1 items-center w-full">
      {!showDetails && (
        <CompactEventCard event={event} setShowDetails={setShowDetails} />
      )}
      {showDetails && (
        <View className="items-center justify-center">
          <DetailedEventCard event={event} setShowDetails={setShowDetails} />
        </View>
      )}
    </View>
  );
};

export default EventCardEntry;
