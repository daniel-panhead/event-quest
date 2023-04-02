import {StyleProp, Text, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  color?: string;
  size?: string;
  Icon: ({color, size}: {color: string; size: string}) => JSX.Element;
  style?: StyleProp<ViewStyle>;
};

const IconText = ({color = 'white', text, size = '20', Icon, style}: Props) => {
  return (
    <View className="my-2 flex flex-row items-center" style={style}>
      <Icon color={color} size={size} />
      <Text className={'ml-2 text-' + color}>{text}</Text>
    </View>
  );
};

export default IconText;
