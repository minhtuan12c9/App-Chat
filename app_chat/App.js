
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigation from './navigation';
import { LogBox } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <MyNavigation />
    </NavigationContainer>
  )
};
