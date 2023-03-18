import React from 'react';
import Locationscreen from './Locationscreen';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { bold } from 'colorette';

function Homescreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={styles.homepageContainer}>
        <View>
          <View style={styles.locationCards}>
            <Text>Looking to find a vape?</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
export default Homescreen;

const styles = StyleSheet.create({
  homepageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 4,
  },
  locationCards: {
    width: 350,
    height: 150,
    borderRadius: 20,
    backgroundColor: 'ghostwhite',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    marginVertical: 12,
  },

  // cardTitle: {
  //   padding: 30,
  //   flex: 1,
  //   justifyContent: 'center',
  // },
});
