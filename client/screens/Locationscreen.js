import React from 'react';
import { View, MapView, StyleSheet, Text } from 'react-native';
import Searchbar from '../components/Searchbar';
import Mapview from '../components/MapView';
import GooglePlacesInput from '../components/GooglePlaces';

function Locationscreen() {
  return (
    <View>
      <GooglePlacesInput />

      <View>
        <Mapview />
      </View>
    </View>
  );
}

export default Locationscreen;
