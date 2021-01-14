import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import RunScreen from './screens/RunScreen';
import StopWatchScreen from './screens/StopWatchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Press "START" to begin your workout' }}/>
        <Stack.Screen name="Map" component={MapScreen} options={{ title: ' Where are you? ' }} />
        <Stack.Screen name="Run" component={RunScreen} options={{ title: ' “Never outrun your joy of running” - Julie Isphording' }} />
        <Stack.Screen name="StopWatch" component={StopWatchScreen} options={{ title: ' A step forward to your goal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}