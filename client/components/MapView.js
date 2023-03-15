import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';

function Mapview({ latitude, longitude }) {
  console.log(latitude, 'lat');
  console.log(longitude, 'long');

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
  },
  map: { width: '100%', height: '100%' },
});

export default Mapview;
