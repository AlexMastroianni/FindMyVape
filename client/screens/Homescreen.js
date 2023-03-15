import React from 'react';
import Locationscreen from './Locationscreen';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vape from '../assets/vape.png';

function Homescreen({ navigation }) {
  return (
    <View style={styles.homepageContainer}>
      <Image source={Vape} style={{ width: 200, height: 200 }}></Image>
      <Text>Looking to find a vape?</Text>
    </View>
  );
}
export default Homescreen;

const styles = StyleSheet.create({
  homepageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
