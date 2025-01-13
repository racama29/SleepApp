import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottonTab from './BottonTab';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <BottonTab />
    </NavigationContainer>
  );
}