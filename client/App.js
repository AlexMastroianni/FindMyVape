import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Homescreen from './screens/Homescreen';
import Locationscreen from './screens/Locationscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home-sharp' : 'home-outline';
              } else if (route.name === 'Location') {
                iconName = focused ? 'location-sharp' : 'location-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="Home"
            component={Homescreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Location"
            component={Locationscreen}
            options={{ headerShown: false, tabBarBadge: 3 }}
          />
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
