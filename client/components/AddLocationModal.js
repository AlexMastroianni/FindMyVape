import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import { doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

function AddLocationModal({
  modalVisible,
  setModalVisible,
  location,
  name,
  rating,
  openingHours,
}) {
  function addLocation() {
    addDoc(collection(db, 'locations'), {
      latitude: location.latitude,
      longitude: location.longitude,
      name: name.name,
      rating: rating.rating,
      image: '444',
      userRating: false,
    });
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Do you know of a place to buy a vape?
            </Text>
            <Text style={styles.modalText}>
              Please add it to help the comunity!
            </Text>
            <View style={styles.TextInputContainer}></View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                addLocation();
              }}
            >
              <Text style={styles.textStyle}>Add a Location</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: '80%',
    margin: 20,
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
    margin: 12,
    display: 'block',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'blue',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  TextInputContainer: {
    flex: 1,
    alignItems: 'baseline',
    marginBottom: 40,
    paddingBottom: 20,
    margin: 10,
  },
  TextInput: {
    margin: 10,
    paddingLeft: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
    height: 40,
    width: 200,
  },
});

export default AddLocationModal;
