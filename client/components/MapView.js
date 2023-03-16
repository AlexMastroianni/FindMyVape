import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { db } from '../Firebase/firebase';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddLocationModal from './AddLocationModal';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { LoneSchemaDefinitionRule } from 'graphql';

function Mapview(props) {
  const [locations, setLocations] = useState([]);

  const locationCollectionRef = collection(db, 'locations');

  useEffect(() => {
    async function getLocation() {
      try {
        const data = await getDocs(locationCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLocations(filterData);
      } catch (err) {
        console.err(err);
      }
    }
    getLocation();
  }, [locations]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          >
            <Callout tooltip>
              <Text>{location.name}</Text>
              <Text>
                User Rating:{location.userRating} || Google Rating:{' '}
                {location.rating}
              </Text>
            </Callout>
          </Marker>
        ))}
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
