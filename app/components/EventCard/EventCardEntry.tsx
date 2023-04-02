import {View} from 'react-native';
import React, {useState} from 'react';
import CompactEventCard from './CompactEventCard';
import DetailedEventCard from './DetailedEventCard';
import {ParsedEvent} from '../../types';

type Props = {
  event: ParsedEvent;
  i: number;
};

const EventCardEntry = ({event, i}: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View className="flex-1 items-center w-full">
      {!showDetails && (
        <CompactEventCard event={event} i={i} setShowDetails={setShowDetails} />
      )}
      {showDetails && (
        <View className="items-center justify-center w-full p-1">
          <DetailedEventCard
            event={event}
            i={i}
            setShowDetails={setShowDetails}
          />
        </View>
      )}
    </View>
  );
};

export default EventCardEntry;
