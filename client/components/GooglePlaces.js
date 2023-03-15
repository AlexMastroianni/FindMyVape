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

const apiKey = 'AIzaSyCB-HOVu_8ABo4EoZKs_BLeYs_xPmpqQwE';

const GooglePlacesInput = () => {
  const [location, setLocation] = React.useState([]);
  return (
    <SafeAreaView>
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
      <Mapview latitude={location.latitude} longitude={location.longitude} />
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
