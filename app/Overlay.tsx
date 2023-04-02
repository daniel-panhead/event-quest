import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ParsedEvent} from './types';

type Props = {
  event: ParsedEvent;
  setSelectedEvent: React.Dispatch<
    React.SetStateAction<ParsedEvent | undefined>
  >;
};

const Overlay = ({event, setSelectedEvent}: Props) => {
  return (
    <View style={styles.alignView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{event.title}</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setSelectedEvent(undefined)}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Overlay;

const styles = StyleSheet.create({
  alignView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalView: {
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: 'black',
    textAlign: 'center',
  },
});
