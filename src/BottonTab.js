import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Afeccion from './components/Afeccion';

const Stack = createStackNavigator();

export default function BottonTab() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Afeccion" component={Afeccion} />
    </Stack.Navigator>
  );
}