import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Mapview from './MapView';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddLocationModal from './AddLocationModal';

const apiKey = 'AIzaSyCB-HOVu_8ABo4EoZKs_BLeYs_xPmpqQwE';

const GooglePlacesInput = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [rating, setRating] = React.useState([]);
  const [openingHours, setOpeningHours] = React.useState([]);

  console.log(location, 'from GooglePlaces call');
  return (
    <SafeAreaView>
      <Pressable>
        <Ionicons
          name="add-outline"
          size={30}
          color="grey"
          onPress={() => setModalVisible(true)}
        />
      </Pressable>
      <GooglePlacesAutocomplete
        placeholder="Type a place"
        fetchDetails={true}
        GooglePlacesDetailsQuery={{
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          console.log(data, 'data', 'detail', details);
          setLocation({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 1,
            longitudeDelta: 1,
          });
          setName({
            name: details.name,
          });
          setRating({
            rating: details.rating,
          });
          // setOpeningHours({
          //   monday: details.weekday_text[0],
          //   tuesday: details.weekday_text[1],
          //   wednesday: details.weekday_text[2],
          //   thursday: details.weekday_text[3],
          //   friday: details.weekday_text[4],
          //   saturday: details.weekday_text[5],
          //   sunday: details.weekday_text[6],
          // });
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
      <AddLocationModal
        location={location}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={name}
        rating={rating}
        openingHours={openingHours}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     width: 400,
//     flex: 1,
//     marginTop: 70,
//   },
// });

export default GooglePlacesInput;
