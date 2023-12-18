import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Page1 from './src/pages/Page1';
import Page2 from './src/pages/Page2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="P1" component={Page1} />
        <Stack.Screen options={{headerShown: false}} name="P2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}