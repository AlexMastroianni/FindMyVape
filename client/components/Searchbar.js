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

const apiKey = 'AIzaSyCB-HOVu_8ABo4EoZKs_BLeYs_xPmpqQwE';

function Searchbar() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [location, setLocation] = React.useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.searchContainer}>
      <View style={styles.searchOuter}>
        <GooglePlacesAutocomplete
          placeholder="Type a place"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{
            rankby: 'distance',
          }}
          onPress={(data, details = null) => {
            console.log(data, details);
            setLocation({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 1,
              longitudeDelta: 1,
            });
          }}
          query={{
            key: apiKey,
            types: 'establishment',
            radius: 2000,
            location: `${location.latitude}, ${location.longitude}`,
          }}
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log('no results')}
          styles={{
            container: {
              flex: 0,
            },
            description: {
              color: '#000',
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#3caf50',
            },
          }}
        />
      </View>
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
