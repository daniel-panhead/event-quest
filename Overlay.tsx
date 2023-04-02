import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Overlay = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.alignView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
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
