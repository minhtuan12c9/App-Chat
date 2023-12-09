import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { InfoScreen } from '../screens';

const Stack = createNativeStackNavigator();

function InfoStackScreen(){
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name='Info' component={InfoScreen} />
    </Stack.Navigator>
  );
}

export default InfoStackScreen;