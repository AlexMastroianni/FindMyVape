import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Homescreen from './screens/Homescreen';
import Locationscreen from './screens/Locationscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator initialRouteName="Home" {...{ screenOptions }}>
          <Tab.Screen
            name="Home"
            component={Homescreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Location"
            component={Locationscreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const screenOptions = {
  tabBarStyle: {
    backgroundColor: 'ghostwhite',
    height: 80,
    borderRadius: 600,
  },
  tabBarItemStyle: {
    backgroundColor: 'ghostwhite',
  },
};
