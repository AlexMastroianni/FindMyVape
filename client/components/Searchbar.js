import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AddLocationModal from './AddLocationModal';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GooglePlacesInput from './GooglePlaces';

function Searchbar() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.searchContainer}>
      <View style={styles.searchOuter}>
        <View style={styles.searchContainer}>
          <View style={styles.search}>
            <Pressable>
              <Ionicons
                name="add-outline"
                size={30}
                color="grey"
                style={styles.addIcon}
                onPress={() => setModalVisible(true)}
              />
            </Pressable>
            <TextInput
              style={styles.textInput}
              onChange={onChangeText}
              className="text-black px-3"
            ></TextInput>

            <Pressable>
              <Ionicons
                name="arrow-back-outline"
                size={30}
                color="grey"
                style={styles.backIcon}
                onPress={() => navigation.navigate('Home')}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <AddLocationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}

export default Searchbar;

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    width: '70%',
    height: 35,
    flexDirection: 'row',
    borderRadius: '20px',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
  },

  textInput: {
    width: '100%',
  },

  searchContainer: {
    width: '100%',
  },

  searchOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  addIcon: {
    paddingTop: 2,
    paddingLeft: 10,
  },
  backIcon: {
    paddingTop: 2,
    paddingRight: 20,
  },
  backbutton: {
    borderRadius: '50px',
  },
});

{
  /* <View style={styles.searchOuter}>
        <View style={styles.searchContainer}>
          <View style={styles.search}>
            <Pressable>
              <Ionicons
                name="add-outline"
                size={30}
                color="grey"
                style={styles.addIcon}
                onPress={() => setModalVisible(true)}
              />
            </Pressable>
            <TextInput
              style={styles.textInput}
              onChange={onChangeText}
              className="text-black px-3"
            ></TextInput>
            <Pressable>
              <Ionicons
                name="arrow-back-outline"
                size={30}
                color="grey"
                style={styles.backIcon}
                onPress={() => navigation.navigate('Home')}
              />
            </Pressable>
          </View>
        </View>
      </View> */
}
